---
layout: project
title: "FIRST Robotics Competition"
subtitle: "Lead Programmer | Team 5152 | 4 Years"
preview_gif: "/assets/images/projects/firstrobotics/Swerve.mp4"
tags: ["Controls", "Java", "LabVIEW"]
date: 2021-08-15
description: "Four years developing control systems, PID controllers, and autonomous navigation for competitive robotics."
---

## Overview

I was the lead programmer for 4 years as part of the 5152 FIRST Robotics team. I worked on 4 custom robots across the years for each competition, learning both open and closed loop feedback controls. Utilizing a wide array of sensors and actuators including DIO, analog, and PWM signals, I programmed PID controllers for applications such as vision tracking and odometry.

<div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 0; max-width: 900px; margin: 2rem auto; overflow: hidden; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
  <img src="/assets/images/projects/firstrobotics/cannon.gif" alt="Prototype" style="width: 100%; height: 200px; object-fit: cover;">
  <img src="/assets/images/projects/firstrobotics/finalcannon.gif" alt="Final" style="width: 100%; height: 200px; object-fit: cover;">
  <img src="/assets/images/projects/firstrobotics/2019_2.png" alt="2019 Robot" style="width: 100%; height: 200px; object-fit: cover;">
</div>
<p style="text-align: center; font-style: italic; color: #666; margin-top: 0.5rem;">
  Prototype to competition: ball launcher development and 2019 robot
</p>

---

## System Development
### Swerve Drive

<div style="display: flex; flex-wrap: wrap; gap: 2rem; align-items: flex-start; margin: 2rem 0;">
  
<div style="flex: 0 0 350px; aspect-ratio: 1; border-radius: 6px; overflow: hidden; background: #000;">
  <video autoplay loop muted playsinline style="width: 100%; height: 120%; object-fit: cover; display: block;">
    <source src="/assets/images/projects/firstrobotics/swerve.mp4" type="video/mp4">
  </video>
</div>

  <div style="flex: 1; min-width: 300px;">
    <p style="margin-bottom: 1rem; font-size: 1.05rem; line-height: 1.6;">
      Developed a holonomic swerve drive system allowing omnidirectional movement with independent rotation control. Unlike traditional tank drives, swerve enables the robot to strafe in any direction while simultaneously rotating.
    </p>

    <p style="margin-bottom: 0.5rem; font-size: 1.05rem;">The implementation required:</p>

    <ul style="padding-left: 1.2rem; font-size: 1rem; line-height: 1.6;">
      <li style="margin-bottom: 0.5rem;">Inverse kinematics to convert joystick inputs to wheel vectors</li>
      <li style="margin-bottom: 0.5rem;">PID control loops for each steering motor</li>
      <li style="margin-bottom: 0.5rem;">Odometry fusion combining encoders with IMU data</li>
      <li>Field-relative control for intuitive driver operation</li>
    </ul>
  </div>

</div>

### Controls Architecture

Each robot utilized a layered control architecture with the following components:

- **Motion Control**: PID loops for drivetrain velocity, arm positioning, and shooter RPM
- **State Machines**: Managed complex sequences like autonomous routines and intake cycles  
- **Vision Processing**: Limelight camera integration for target tracking and alignment
- **Communications**: CAN bus networking between roboRIO, motor controllers, and sensors

---

## Technical Skills

| Category | Technologies |
|----------|-------------|
| **Languages** | Java, LabVIEW, Python |
| **Control Systems** | PID, Motion Profiling, State Machines |
| **Sensors** | Encoders, Gyros, Lidar, Limelight |
| **Hardware** | roboRIO, Talon SRX, Spark MAX, CAN Bus |