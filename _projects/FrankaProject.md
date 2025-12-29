---
layout: project
title: "Franka Fine Manipulation"
subtitle: "Fine Manipulation with model trains ±1mm"
# carousel_images:
#   - /assets/images/projects/frankahw3/Franka.gif
#   - /assets/images/projects/gpmars/cv.png
# carousel_height: 400px
carousel_width: auto
preview_gif: "/assets/images/projects/frankaproject/450_Final_Preview.gif"
preview_position: "left"
# paper: "https://ieeexplore.ieee.org/document/11103627/"
code: "https://github.com/ME495-EmbeddedSystems/final-project-north-western-northwestern"
# data: "https://example.com/dataset"
tags: ["ROS 2", "Python", "Franka"]
date: 2025-12-15
description: "A versatile, distributed platform using ROS for testing and validating a wide variety of multi-agent control algorithms."


---
<div style="max-width: 1200px; margin: 0 auto; overflow: hidden; border-radius: 8px;">
  <div style="margin: -8px; overflow: hidden;">
    <iframe
      src="https://docs.google.com/presentation/d/e/2PACX-1vSFuI85KmZzVL5W8taVeDeE26AI5fXTTK8yVsk32j5e4Rc8MLCL-7RNXWUGw9qIOA6_LNu3TswxThsJ/pubembed?start=true&loop=true&delayms=3000&rm=minimal"
      style="width: calc(100% + 8px); aspect-ratio: 16/9; display: block; margin: -8px;"
      frameborder="0"
      allowfullscreen>
    </iframe>
  </div>
</div>



## Overview

This project demonstrates **precision fine manipulation** using a Franka Emika robot arm to manipulate HO-scale model train cars with **±1mm accuracy**. The system integrates a robust computer vision pipeline with MoveIt2 motion planning to solve a challenging alignment task: positioning free-spinning train bogies (wheel assemblies that rotate like caster wheels) onto model railroad tracks.

The project also establishes a **zero-shot data distillation pipeline** for training custom object detection models, using the robot itself to autonomously collect and generate training data.

---

## Problem Statement

Aligning model train cars onto tracks requires sub-millimeter precision due to the unconstrained rotation of the bogies—the wheel assemblies can spin freely in any direction when the train is lifted, similar to caster wheels. Traditional pick-and-place approaches fail because:

1. **Bogie orientation is unknown** when the gripper approaches the train
2. **Track orientation varies** across the layout and must be detected in real-time
3. **Class similarity from top-down view** makes distinguishing trains from tracks challenging for vision systems

---

## Solution

### Mechanical Approach

Our solution uses a **custom end effector** to physically constrain the bogie to a known rotation, combined with a robust OpenCV pipeline to detect track orientation. The gripper then aligns the constrained wheel assembly with the detected track angle before placement.

### System Architecture

                            
                            ┌─────────────┐     ┌─────────────────┐     ┌──────────────────┐
                            │  RealSense  │────▶│  Vision System  │────▶│  Conductor Node  │
                            │  Camera     │     │  (Track + Car)  │     │                  │
                            └─────────────┘     └─────────────────┘     └────────┬─────────┘
                                                                                │
                                                      Target Poses + Gripper States
                                                                                ▼
                            ┌─────────────┐     ┌─────────────────┐     ┌──────────────────┐
                            │  Franka Arm │◀────│  MoveIt2 API    │◀────│       Railer     │
                            │             │     │                 │     │                  │
                            └─────────────┘     └─────────────────┘     └──────────────────┘
                           

               

## Computer Vision Pipeline

### Track Detection

A multi-stage OpenCV pipeline processes RGB images from the RealSense camera to detect track orientation:

1. **Preprocessing**: Brightness, contrast, and white balance adjustment
2. **Edge Detection**: Canny edge detection on enhanced images
3. **Morphological Operations**: Dilation and skeletonization to extract rail centerlines
4. **Line Detection**: Hough transform to identify track segments
5. **Pose Estimation**: Convert 2D track orientation to 3D transforms using depth data


<div style="display: flex; justify-content: center; align-items: center; gap: 2rem; max-width: 900px; margin: 2rem auto;">
  <div style="flex: 1; display: flex; align-items: center; justify-content: center;">
    <img src="/assets/images/projects/frankaproject/railcv.png" 
         alt="OpenCV Pipeline stages"
         class="no-border"
         style="width: 100%; height: 250px; object-fit: contain;">
  </div>
  
  <div style="flex: 1; display: flex; align-items: center; justify-content: center;">
    <img src="/assets/images/projects/frankaproject/railcenter.png" 
         alt="Rail centerline detection result"
         class="no-border"
         style="width: 100%; height: 250px; object-fit: contain;">
  </div>
</div>
<p style="text-align: center; font-style: italic; color: #666; margin-top: 0.5rem;">
  OpenCV Pipeline for Rail CenterLine Detections.
</p>

### Train Detection & Classification

#### Zero-Shot Data Distillation Pipeline

We developed an automated training data pipeline using the robot itself:

| Stage | Method | Output |
|-------|--------|--------|
| **Data Collection** | Franka conical scans of each train car → ROS bags | RGB-D sequences |
| **Frame Extraction** | Every 10th frame sampled | ~30,000 images |
| **Auto-Labeling** | Grounding DINO + SAM2 | Bounding boxes (~70% accurate) |
| **Manual Refinement** | Human correction | Clean training labels |
| **Model Training** | YOLOv8-OBB | Oriented bounding box detection |

#### Training Challenges

The vision system required **adversarial training** to handle edge cases:

- Tracks misclassified as trains (similar dark, elongated shapes)
- Trains misclassified as tracks (especially from top-down view)
- Significant visual similarity between classes when viewed from above 
   



#### Model Architecture

```python
model = YOLO('yolov8n-obb.pt')

results = model.train(
    data='dataset.yaml',
    epochs=60,
    imgsz=640,
    batch=16,
    device=0,
    name='augmented_model',
    mosaic=1.0,
    copy_paste=0.4,
    degrees=10,
    translate=0.1,
    scale=0.5,
    shear=2,
)
```

#### Results

- **mAP50**: 0.95+
- **mAP50-95**: 0.85+
- **Precision**: 0.92+
- **Recall**: 0.90+

---

## Train Car Classes

The system can recognize 12 distinct train car types and 2 switches
<!-- 
| Class | Description |
|-------|-------------|
| 2 Bay Hopper | Brown hopper train car |
| 3 Axle Tank Car | Black tank train car |
| 40ft Box Car | Brown box train car |
| 40ft Reefer | Purple refrigerated train car |
| 50ft Box Car | Orange box train car |
| 50ft T Boxcar | Orange box train car |
| Covered Hopper | Grey covered hopper train car |
| DB Class 191 | Green electric locomotive |
| Hydrogen Gas Car | Rainbow colored tank train car |
| NYC Caboose | Red caboose train car |
| Three Bay Hopper | Red hopper train car |
| Two Axle Low Wall Gondola | Grey flat train car |
| Control Knob | Calibration marker | -->

<div style="max-width: 1200px; margin: 0 auto; overflow: hidden; border-radius: 8px;">
  <div style="margin: -8px; overflow: hidden;">
    <iframe
      src="https://docs.google.com/presentation/d/e/2PACX-1vQT3rM89BiVtixZoEvMkTRN-wOTxzW0eZGtqp0xGNBvM-oEo4oEZY0G2Hg6BTd6WTYhpgjpljak53-2/pubembed?start=true&loop=true&delayms=3000&rm=minimal"
      style="width: calc(100% + 8px); aspect-ratio: 16/9; display: block; margin: -8px;"
      frameborder="0"
      allowfullscreen>
    </iframe>
  </div>
</div>

---

## Key Features

### Oriented Bounding Boxes (OBB)

Standard axis-aligned bounding boxes are insufficient for rotated objects. We use **oriented bounding boxes** that include rotation angle, enabling:

- More accurate object localization
- Direct extraction of train orientation for gripper alignment
- Better handling of diagonal track sections

```python
# Extract OBB from detection
center, (width, height), angle = cv2.minAreaRect(contour)
```

### Rail Rejection

To prevent false positives where track sections are detected as trains:

- Aspect ratio filtering (trains have characteristic length/width ratios)
- Context-aware rejection (objects on tracks vs. beside tracks)
- Multi-frame temporal consistency

### Train Centering

Precise centroid calculation using SAM2 segmentation masks:

1. Generate instance segmentation mask
2. Calculate mask centroid
3. Project to 3D using depth alignment
4. Publish as TF transform for motion planning

---

## Hardware

- **Robot**: Franka Emika Panda 7-DOF arm
- **Camera**: Intel RealSense D435 (RGB + Depth)
- **End Effector**: Custom 3D-printed gripper with bogie constraint mechanism
- **Trains**: HO-scale (1:87) model railroad cars

---

## Software Stack

- **ROS 2 Kilted**
- **MoveIt2** - Motion planning
- **OpenCV** - Image processing
- **PyTorch** - Deep learning inference
- **Ultralytics YOLOv8** - Object detection
- **Grounding DINO** - Open-vocabulary detection
- **SAM2** - Instance segmentation

<!-- --- -->
<!-- 
## Results

| Metric | Value |
|--------|-------|
| Placement Accuracy | ±1mm |
| Detection Accuracy | 95%+ |
| Cycle Time | ~15 seconds/train |
| Success Rate | 92% | -->

<!-- --- -->

<!-- ## Future Work

- [ ] Extend to multi-train manipulation sequences
- [ ] Implement train coupling/uncoupling
- [ ] Add locomotive detection and powered movement
- [ ] Real-time track layout mapping -->

---

## References

- [Grounding DINO](https://github.com/IDEA-Research/GroundingDINO)
- [SAM2](https://github.com/facebookresearch/segment-anything-2)
- [Ultralytics YOLOv8](https://github.com/ultralytics/ultralytics)
- [MoveIt2](https://moveit.ros.org/)
