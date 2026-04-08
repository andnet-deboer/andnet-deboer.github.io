---
layout: project
title: "Deformable Object Manipulation"
subtitle: "A generalizable policy to fold clothes" 
preview_zoom: 1.2
carousel_images:
  - /assets/images/projects/laundarynauts/overview.png
  # - /assets/images/projects/gpmars/cv.png
carousel_height: 400px
carousel_width: auto
preview_gif: "/assets/images/projects/laundarynauts/SmolVLA.mp4"
# paper: "https://ieeexplore.ieee.org/document/11103627/"
# code: "https://github.com/andnet-deboer/ROS-Kobuki-Research-2022"
# data: "https://example.com/dataset"
tags: ["LeRobot", "VLA", "Bimanual Manipulation"]
date: 2026-3-1
description: "A generalizable policy to fold clothes"
status: "In Progress"
contributors:
  - name: "Andnet DeBoer"
    url: "https://www.linkedin.com/in/andnetdeboer/"
  - name: "Conor Hayes"
    url: "https://www.linkedin.com/in/cwoodhayes/"
  - name: "Robert Zhu"
    url: "https://www.linkedin.com/in/robert-zhu1/"
  - name: "Praneeth Reddy Mallupalli"
    url: "https://www.linkedin.com/in/praneethreddym/"
affiliation: "Northwestern University"
---

<div style="max-width: 1200px; margin: 0 auto;">
  <video 
    src="/assets/images/projects/laundarynauts/LeHomeDataVids.mp4"
    style="width: 100%; clip-path: inset(28% 0 28% 0);"
    autoplay
    loop
    muted
    playsinline
    controls
  ></video>
</div>

### Overview

Deformable object manipulation remains an open challenge in robotics. This project addresses robotic garment folding as part of the LeHome Challenge 2026 at ICRA, aiming to develop policies that generalize across diverse clothing types using limited training data and simulation-based evaluation.

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