---
layout: project
title: "LaundryNaut"
subtitle: "A generalizable policy to fold clothes" 
preview_zoom: 1.2
carousel_images:
  - /assets/images/projects/laundarynauts/overview.png
  # - /assets/images/projects/gpmars/cv.png
carousel_height: 400px
carousel_width: auto
preview_gif: "/assets/images/projects/laundarynauts/LeHomeChallengeVideo.mp4"
# paper: "https://ieeexplore.ieee.org/document/11103627/"
# code: "https://github.com/andnet-deboer/ROS-Kobuki-Research-2022"
# data: "https://example.com/dataset"
tags: ["LeRobot", "VLA", "Bimanual Manipulation"]
date: 2026-1-1
description: "A versatile, distributed platform using ROS for testing and validating a wide variety of multi-agent control algorithms."
---

### Overview

This project develops a generalizable policy for robotic garment folding as part of the **LeHome Challenge 2026** at ICRA. Our approach combines **Vision-Language-Action models (VLAs)** with keypoint-conditioned diffusion policies to enable bimanual manipulation of diverse clothing items. We leverage the LeRobot framework for policy learning and IsaacLab simulation for training and evaluation.


---

## Problem Statement

Garment manipulation remains a fundamental challenge in robotics due to the high-dimensional state space and complex dynamics of deformable objects. The LeHome Challenge provides 600 teleoperation demonstrations across four garment categories (long/short-sleeved tops, long/short pants) to train policies that generalize to unseen garments.

<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; max-width: 1800px; margin: 2rem auto;">
  <div style="text-align: center;">
    <img src="/assets/images/projects/laundarynauts/so101.png" 
         class="no-border"
         style="width: 80%; height: auto;">
    <p style="margin-top: 0.75rem;"><em>Hardware: SO101 Dual 6DOF Robot Arms</em></p>
  </div>

  <div style="text-align: center;">
    <img src="/assets/images/projects/laundarynauts/classes.png" 
         class="no-border"
         style="width: 80%; height: auto;">
    <p style="margin-top: 0.75rem;"><em>Four garment categories in LeHome Challenge</em></p>
  </div>
</div>

---

## Approach

Our pipeline consists of three key components:

1. **Perception**
2. **Policy** 
3. **Training**

---

## Acknowledgments

This project is conducted at Northwestern University for the LeHome Challenge 2026 (ICRA).