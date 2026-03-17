---
layout: project
title: "DexUMI: Visuo-Tactile Manipulation"
subtitle: "Imitation learning for home assistance tasks"
carousel_width: auto
preview_gif: "/assets/images/projects/vtam/DemoVideo.mp4"
preview_position: "center-right"
preview_zoom: 1.0
code: "https://github.com/andnet-deboer/VTAM"
hardware: "/projects/vtam/hardware/"
journal: "/projects/vtam/journal/"
tags: ["Imitation Learning", "ACT", "Diffusion Policy"]
date: 2026-1-6
status: "In Progress"
contributors:
  - name: "Andnet DeBoer"
    url: "https://www.linkedin.com/in/andnetdeboer/"
affiliation: "Northwestern University"
---

<!-- PLACEHOLDER: Main demo video — robot executing a learned task autonomously -->
<div style="max-width: 1200px; margin: 0 auto; overflow: hidden; border-radius: 8px; border: 2px dashed #aaa; padding: 1rem; text-align: center; color: #888;">
  <p><strong>[PLACEHOLDER]</strong> Main demo video — robot executing a learned task autonomously</p>
</div>

---

## Overview

This project develops a visuo-tactile imitation learning system for the Hello Robot Stretch 3, enabling non-expert users to teach manipulation tasks through teleoperation. The core insight is that by designing the teleoperator to be **geometrically matched to the robot's own gripper**, the cross-embodiment challenge is eliminated — demonstrations transfer directly without remapping. The system captures synchronized vision, proprioception, and tactile feedback, then trains policies using ACT and Diffusion Policy.

This is an independent 10-week project as part of the <a href="https://www.mccormick.northwestern.edu/robotics/" style="color: blue;">Master of Science in Robotics (MSR) program at Northwestern University</a>.

---

## Cross-Embodiment via DexUMI

<div style="max-width: 1200px; margin: 0 auto; overflow: hidden; border-radius: 8px;">
  <div style="margin: -8px; overflow: hidden;">
    <video
      src="/assets/images/projects/vtam/DexUMI_V1_Full.mp4"
      style="width: calc(100% + 8px); aspect-ratio: 16/9; display: block; margin: -8px;"
      autoplay
      loop
      muted
      playsinline
      controls
    ></video>
  </div>
</div>

A central challenge in robot learning from demonstration is the **embodiment gap** — human hands and robot grippers have different kinematics, so translating demonstrations requires complex retargeting that introduces error. DexUMI sidesteps this entirely.

DexUMI is a custom handheld teleoperator built around the **same parallel gripper used on the Stretch 3**. Because the operator and robot share identical gripper geometry, opening and closing in the human's hand maps one-to-one to the robot. Tactile sensors are mounted in geometrically matched positions on both devices, so the force signals recorded during demonstration directly correspond to what the robot will sense during deployment.

<!-- PLACEHOLDER: Side-by-side image — DexUMI device next to Stretch 3 gripper showing geometric match -->
<div style="max-width: 900px; margin: 2rem auto; border: 2px dashed #aaa; padding: 1rem; text-align: center; color: #888; border-radius: 8px;">
  <p><strong>[PLACEHOLDER]</strong> Side-by-side — DexUMI device next to Stretch 3 gripper showing geometric correspondence</p>
</div>

---

## Tactile Sensing — eFlesh Integration

<!-- PLACEHOLDER: Video of eFlesh sensors activating during a grasp -->
<div style="max-width: 1200px; margin: 0 auto; overflow: hidden; border-radius: 8px;">
  <div style="margin: -8px; overflow: hidden;">
    <video
      src="/assets/images/projects/vtam/Fully Integrated eFlesh Sensors.mp4"
      style="width: calc(100% + 8px); aspect-ratio: 16/9; display: block; margin: -8px;"
      autoplay
      loop
      muted
      playsinline
      controls
    ></video>
  </div>
</div>

Many manipulation tasks fail when vision alone is insufficient — inserting a K-cup, closing a lid, plugging in a cable. Contact forces are occluded from any camera. eFlesh addresses this with soft magnetic tactile sensors: each fingertip embeds **5 MLX90393 3-axis magnetometers**, yielding a 15-dimensional tactile signal per finger that captures contact location and force direction.

Each sensor array is read by a QT Py microcontroller over USB serial. A custom **ROS 2 node** aggregates and time-stamps the tactile stream alongside joint encoder and camera data, publishing all modalities in sync for recording and policy inference.

<!-- PLACEHOLDER: Image or diagram of eFlesh sensor layout on fingertip — 5 magnetometer positions -->
<div style="max-width: 600px; margin: 2rem auto; border: 2px dashed #aaa; padding: 1rem; text-align: center; color: #888; border-radius: 8px;">
  <p><strong>[PLACEHOLDER]</strong> eFlesh sensor layout — 5 MLX90393 magnetometer positions per fingertip</p>
</div>

---

## Retargeting

Human arm motion during teleoperation is captured via the DexUMI device and retargeted to the Stretch 3's joint space in real time. The retargeting uses a **Jacobian-based damped least-squares IK** that maps end-effector pose commands into lift, arm, and wrist joint velocities. Relative joint actions (Δq) are used rather than absolute positions, which improves generalization across demonstrations that start from slightly different configurations.

<!-- PLACEHOLDER: Short clip showing teleoperation retargeting in real time — operator moving DexUMI, robot following -->
<div style="max-width: 1200px; margin: 0 auto; border: 2px dashed #aaa; padding: 1rem; text-align: center; color: #888; border-radius: 8px;">
  <p><strong>[PLACEHOLDER]</strong> Teleoperation retargeting clip — operator moves DexUMI, Stretch 3 follows in real time</p>
</div>

---

## Recording Pipeline

<!-- PLACEHOLDER: System diagram image — sensor modalities flowing into recording node -->
<div style="max-width: 600px; margin: 2rem auto; border: 2px dashed #aaa; padding: 1rem; text-align: center; color: #888; border-radius: 8px;">
  <p><strong>[PLACEHOLDER]</strong> System diagram — RGB camera, joint encoders, eFlesh → ROS 2 → ZMQ → dataset</p>
</div>

Demonstrations are recorded as synchronized streams of three modalities:

- **Vision** — 640×480 RGB from the gripper-mounted camera, JPEG-compressed and transmitted over ZMQ
- **Proprioception** — joint states from lift, arm, wrist yaw/pitch/roll, and gripper
- **Tactile** — 15-dimensional eFlesh signal per finger at full sensor rate

Raw rosbags are processed through a chunking and conversion pipeline into HuggingFace-compatible datasets at 10 fps, then uploaded for training. ArUco markers on the gripper provide end-effector pose ground truth for each frame.

---

## Policy Learning

<!-- PLACEHOLDER: Training curve image from W&B — loss curves for ACT on coffee task -->
<div style="max-width: 900px; margin: 2rem auto; border: 2px dashed #aaa; padding: 1rem; text-align: center; color: #888; border-radius: 8px;">
  <p><strong>[PLACEHOLDER]</strong> W&B training curves — ACT on "place coffee cup" task</p>
</div>

Policies are trained via the HuggingFace **LeRobot** framework (stretch-act branch) using two architectures:

**ACT (Action Chunking with Transformers)** [[2]](#references) predicts chunks of future actions from a single observation, reducing compounding errors from per-step prediction. Currently training on "place coffee cup" and "setup cup" tasks.

**Diffusion Policy** [[3]](#references) formulates action generation as iterative denoising, handling the multimodal action distributions that arise in contact-rich tasks.

Training runs on a remote GPU workstation over ZMQ, with Weights & Biases logging.

<!-- PLACEHOLDER: Deployment video — robot executing ACT policy autonomously (replace once tonight's run completes) -->
<div style="max-width: 1200px; margin: 0 auto; border: 2px dashed #aaa; padding: 1rem; text-align: center; color: #888; border-radius: 8px;">
  <p><strong>[PLACEHOLDER]</strong> Deployment video — robot executing trained ACT policy autonomously</p>
</div>

---

## Project Journal

Weekly progress updates including videos and slide decks from each stage of development.

<a href="/projects/vtam/journal/" style="display: inline-block; margin-top: 0.5rem; padding: 0.6rem 1.2rem; background: transparent; border: 1px solid currentColor; border-radius: 6px; text-decoration: none; color: inherit; font-size: 0.95rem;">View Weekly Updates →</a>

---

## BibTeX

<div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 0.75rem;">

<div style="display: flex; flex-direction: column;">
<p style="font-weight: 600; font-size: 0.8rem; margin-bottom: 0.25rem; color: #000;">eFlesh</p>
<pre style="font-size: 0.65rem; line-height: 1.5; padding: 0.75rem; margin: 0; overflow-x: auto; background: #f6f8fa; border-radius: 6px; flex: 1; white-space: pre;">@article{pattabiraman2025eflesh,
  title={eFlesh: Highly customizable Magnetic Touch Sensing using Cut-Cell Microstructures},
  author={Pattabiraman, Venkatesh and Huang, Zizhou and Panozzo, Daniele and Zorin, Denis and Pinto, Lerrel and Bhirangi, Raunaq},
  year={2025},
  eprint={2506.09994},
  archivePrefix={arXiv},
  primaryClass={cs.RO}
}</pre>
</div>

<div style="display: flex; flex-direction: column;">
<p style="font-weight: 600; font-size: 0.8rem; margin-bottom: 0.25rem; color: #000;">UMI</p>
<pre style="font-size: 0.65rem; line-height: 1.5; padding: 0.75rem; margin: 0; overflow-x: auto; background: #f6f8fa; border-radius: 6px; flex: 1; white-space: pre;">@inproceedings{chi2024universal,
  title={Universal Manipulation Interface: In-The-Wild Robot Teaching Without In-The-Wild Robots},
  author={Chi, Cheng and Xu, Zhenjia and Pan, Chuer and Cousineau, Eric and Burchfiel, Benjamin and Feng, Siyuan and Tedrake, Russ and Song, Shuran},
  booktitle={Robotics: Science and Systems},
  year={2024}
}</pre>
</div>

<div style="display: flex; flex-direction: column;">
<p style="font-weight: 600; font-size: 0.8rem; margin-bottom: 0.25rem; color: #000;">ACT</p>
<pre style="font-size: 0.65rem; line-height: 1.5; padding: 0.75rem; margin: 0; overflow-x: auto; background: #f6f8fa; border-radius: 6px; flex: 1; white-space: pre;">@article{zhao2023learning,
  title={Learning Fine-Grained Bimanual Manipulation with Low-Cost Hardware},
  author={Zhao, Tony Z and Kumar, Vikash and Levine, Sergey and Finn, Chelsea},
  journal={arXiv preprint arXiv:2304.13705},
  year={2023}
}</pre>
</div>

<div style="display: flex; flex-direction: column;">
<p style="font-weight: 600; font-size: 0.8rem; margin-bottom: 0.25rem; color: #000;">Diffusion Policy</p>
<pre style="font-size: 0.65rem; line-height: 1.5; padding: 0.75rem; margin: 0; overflow-x: auto; background: #f6f8fa; border-radius: 6px; flex: 1; white-space: pre;">@article{chi2023diffusion,
  title={Diffusion Policy: Visuomotor Policy Learning via Action Diffusion},
  author={Chi, Cheng and Feng, Siyuan and Du, Yilun and Xu, Zhenjia and Cousineau, Eric and Burchfiel, Benjamin and Song, Shuran},
  journal={arXiv preprint arXiv:2303.04137},
  year={2023}
}</pre>
</div>

</div>