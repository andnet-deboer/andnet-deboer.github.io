---
layout: project
title: "Franka Vision-Guided Fine Manipulation"
subtitle: "Unconstrained millimeter Bogie Alignment "
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
contributors:
  - name: "Andnet DeBoer"
    url: "https://www.linkedin.com/in/andnetdeboer/"
  - name: "Derek Dietz"
    url: "https://www.linkedin.com/in/derek-dietz-robotics/"
  - name: "Theo Coulson"
    url: "https://www.linkedin.com/in/theo-coulson/"
affiliation: "Northwestern University"


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

This project demonstrates **precise fine manipulation** using a Franka Emika robot arm to manipulate HO-scale model train cars with **±1mm accuracy**. The system integrates a robust computer vision pipeline with MoveIt2 motion planning to solve a challenging alignment task: positioning free-spinning train bogies onto model railroad tracks.

The project also establishes a **zero-shot data distillation pipeline** for training custom object detection models, using the robot itself to autonomously collect and generate training data.

---

## Problem Statement

Aligning model train cars onto tracks requires sub-millimeter precision due to the unconstrained rotation of the bogies—the wheel assemblies can spin freely in any direction when the train is lifted, similar to caster wheels. Traditional pick-and-place approaches fail because:

> **Bogie orientation is unknown** when the gripper approaches the train \
> **Track orientation varies** across the layout and must be detected in real-time \
> **Class similarity from top-down view** makes distinguishing trains from tracks challenging for vision systems

---

## Solution

### End Effector

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

> 1. **Preprocessing**: Brightness, contrast, and white balance adjustment
> 2. **Edge Detection**: Canny edge detection on enhanced images
> 3. **Morphological Operations**: Dilation and skeletonization to extract rail centerlines
> 4. **Line Detection**: Hough transform to identify track segments
> 5. **Pose Estimation**: Convert 2D track orientation to 3D transforms using depth data


<figure style="margin: 2rem 0;">
  <div style="display: flex; gap: 1.5rem; align-items: center; background: #f8f8f8; padding: 1.5rem; border-radius: 12px;">
    <img src="/assets/images/projects/frankaproject/railcv.png" 
         alt="OpenCV Pipeline stages"
         style="flex: 1; max-width: 50%; border-radius: 6px;">
    <img src="/assets/images/projects/frankaproject/railcenter.jpg" 
         alt="Rail centerline detection result"
         style="flex: 1; max-width: 50%; border-radius: 6px;">
  </div>
  <figcaption style="text-align: center; color: #555; margin-top: 1rem; font-size: 0.9rem;">
    <strong>Figure:</strong> OpenCV pipeline for rail centerline detection
  </figcaption>
</figure>

### Train Detection & Classification

<h4 style="text-align: center;">Zero-Shot Data Distillation Pipeline</h4>

<div style="text-align: center; margin: 2rem 0;">
  <a href="https://github.com/andnet-deboer/AutoLabel" target="_blank" style="text-decoration: none;">
    <div style="display: inline-block; border: 1px solid #d0d7de; border-radius: 8px; overflow: hidden;">
      <img src="/assets/images/projects/frankaproject/AutoLabel.jpg" 
           alt="AutoLabel Repo"
           style="max-width: 600px; width: 100%; display: block;">
      <div style="background: #24292f; padding: 0.5rem 1rem; display: flex; align-items: center; justify-content: center; gap: 0.5rem;">
        <svg height="20" width="20" viewBox="0 0 16 16" style="fill: white;">
          <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
        </svg>
        <span style="color: white; font-size: 0.9rem; font-weight: 500;">View on GitHub</span>
      </div>
    </div>
  </a>
</div>

<div style="display: flex; gap: 2rem; align-items: stretch; margin: 2rem 0;">
  <div style="flex: 0 0 60%;">
    <table style="height: 100%; width: 100%;">
      <thead>
        <tr>
          <th>Stage</th>
          <th>Method</th>
          <th>Output</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Data Collection</strong></td>
          <td>Franka conical scans of each train car → ROS bags</td>
          <td>30,000 RGB-D sequences</td>
        </tr>
        <tr>
          <td><strong>Frame Extraction</strong></td>
          <td>Every 10th frame sampled</td>
          <td>~3,000 images</td>
        </tr>
        <tr>
          <td><strong>Auto-Labeling</strong></td>
          <td>Grounding DINO + SAM2</td>
          <td>Bounding boxes (~70% accurate)</td>
        </tr>
        <tr>
          <td><strong>Manual Refinement</strong></td>
          <td>Human correction</td>
          <td>Clean training labels</td>
        </tr>
        <tr>
          <td><strong>Model Training</strong></td>
          <td>YOLOv8-OBB</td>
          <td>Oriented bounding box detection</td>
        </tr>
      </tbody>
    </table>
  </div>
  <div style="flex: 1; display: flex;">
    <video autoplay loop muted playsinline style="width: 100%; height: 89%; object-fit: cover; border-radius: 3px; box-shadow: 0 0px 0px rgba(0,0,0,0.15);">
      <source src="/assets/images/projects/frankaproject/FrankaExpress.mp4" type="video/mp4">
    </video>
  </div>
</div>

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

The system is capable of recognizing 12 distinct train car types and 2 switches
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
- **Ultralytics YOLOv8** - Object detection
- **Grounding DINO** - Open-vocabulary detection
- **SAM2** - Instance segmentation


---

## References

- [Grounding DINO](https://github.com/IDEA-Research/GroundingDINO)
- [SAM2](https://github.com/facebookresearch/segment-anything-2)
- [Ultralytics YOLOv8](https://github.com/ultralytics/ultralytics)
- [MoveIt2](https://moveit.ros.org/)
