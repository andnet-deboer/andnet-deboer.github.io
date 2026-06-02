---
layout: project
title: "BaxToTheFuture"
subtitle: "Teaching Old Arms New Tricks with VLAs"
tags: ["ROS 2", "Imitation Learning"]
date: 2026-4-14
status: "In Progress"
preview_gif: "/assets/images/projects/bringbackbaxter/Puppet.mp4"
contributors:
  - name: "Andnet DeBoer"
    url: "https://www.linkedin.com/in/andnetdeboer/"
affiliation: "Northwestern University"
---

## Overview

While modern Vision-Language-Action (VLA) models excel at bimanual manipulation on rigid, contemporary platforms, their ability to generalize across drastically different hardware is an active area of research. This project upgrades a 2012 Rethink Baxter with a native ROS 2 stack to evaluate how these models perform with a highly compliant embodiment.

Pioneering the era of collaborative robotics, Baxter was engineered with Series Elastic Actuators (SEAs) to safely operate alongside humans. Unlike modern rigid manipulators, this architecture introduces inherent joint elasticity and complex transmission dynamics. The core focus of this work is to probe how current end-to-end imitation learning frameworks handle high intrinsic compliance during bimanual manipulation tasks, and what it takes to transfer modern policies to a platform characterized by significant kinematic uncertainty.

<div style="max-width: 900px; margin: 2rem auto; display: flex; gap: 1.5rem; align-items: center;">
  <img src="/assets/images/projects/bringbackbaxter/armspan.png" alt="Baxter arm diagram" style="width:65%; height:auto; border:none; box-shadow:none;">
  <img src="/assets/images/projects/bringbackbaxter/baxter.png" alt="Baxter robot" style="width:35%; height:auto; border:none; box-shadow:none;">
</div>

---

---

## Week 1

### "Hello World"
Bridged the legacy SDK via a ROS 1 Docker container, establishing ROS 1 communication and live joint control.

<div style="max-width: 900px; margin: 2rem auto; display: flex; gap: 1.5rem; align-items: center;">
  <img src="/assets/images/projects/bringbackbaxter/ros1_diagram.png" alt="ROS 1 Docker setup diagram" style="width:50%; height:auto; border:none; box-shadow:none;">
<video 
  src="/assets/images/projects/bringbackbaxter/Puppet.mp4"
  style="width:50%; height:auto; display:block; border:none; box-shadow:none; border-radius: 4px;"
  autoplay
  loop
  muted
  playsinline
  controls
></video>
</div>