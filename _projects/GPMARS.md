---
layout: project
title: "Multi-Agent Robotic System Validation"
preview_gif: "/assets/images/projects/MultiAgentResearch.gif"
tags: ["ROS", "Python/C++", "Embedded Systems"]
date: 2022-07-15
description: "A versatile, distributed platform using ROS for testing and validating a wide variety of multi-agent control algorithms."
---

## Overview

This project details the hardware and software implementation of a **General-Purpose Multi-Agent Robotics System (GP-MARS)**. The system is designed to provide a flexible and versatile platform for implementing and testing a wide variety of multi-agent algorithms by utilizing a distributed control architecture and the **Robot Operating System (ROS)**.


*Figure 1: Original test platform iteration utilizing Dell D610 notebook as processor for each turtlebot on the ROS network.*

---

## Problem Statement

While multi-unit robotic systems offer significant advantages over single-unit robots, such as cooperative problem-solving and redundancy, building general-purpose test platforms is challenging. Previous multi-unit projects at Hope College used a centralized control model that was hardware-dependent. The need was to create a flexible, general-purpose system capable of testing multi-agent algorithms with a distributed control architecture, independent of specific hardware.

---

## Technical Approach

### System Hardware

The final GP-MARS system utilizes **three Yujin Kobuki turtlebots** as the mobile base units. To improve versatility, reduce mass, and lower the electrical load, the initial Dell D610 laptops used for processing were replaced with **Raspberry Pi's**. This embedded setup allows for easy integration of various sensors like Lidar, stereo cameras, or proximity sensors.


*Figure 2: GP-MARS Platform with Raspberry Pi 3B microcontrollers.*

### Software Architecture

The software architecture is hierarchical and designed for flexibility:

1.  **Foundational Layer (OS):** Ubuntu Linux (or Xubuntu on the memory-restricted Raspberry Pi 3B microcontrollers).
2.  **Middleware (ROS):** The **Robot Operating System** (ROS) is the most critical layer, providing open-source packages and **hardware abstraction** through its publish-subscribe communication model. This encapsulation allows the system to focus on multi-agent interactions regardless of the specific hardware components.
3.  **High-Level Control:** High-level commands were programmed using **Python**, an object-oriented language chosen for its integration with ROS packages.


*Figure 3: Visualization of the Publish Subscribe Protocol used by ROS.*

---

## System Validation Experiments

Two main experiments were conducted to validate the system's ability to test different multi-agent algorithms:

### 1. Cooperative Object Manipulation (Distributed Control)

* **Goal:** Demonstrate the individual robots' ability to **collaborate and manipulate objects to achieve a common goal**.
* **Setup:** Each robot was equipped with two high-frequency ultrasonic sensors mounted at an angle to intentionally create a **blind spot** in the frontal field of view (Figure 4). The robots were placed in an enclosure with randomly scattered cube obstacles (Figure 5).
* **Algorithm:** A randomized obstacle avoidance program utilized proximity data. Due to the blind spot, the robot would collide with and manipulate the cube until it was pushed up against another object (Figure 7).
* **Result:** The multi-unit network successfully collaborated, with all cubes pushed against the walls of the enclosure or another cube, demonstrating cohesion and integration.

<div class="side-by-side">
  <img src="/assets/images/projects/project2/manipulation_result.png" alt="Final Environment After Algorithm Completion">
  <img src="/assets/images/projects/project2/kobuki_sensor_diagram.png" alt="Kobuki sensor blind spot diagram">
</div>

*Left: Final state of the object manipulation experiment (Figure 7). Right: Kobuki sensor blind spot illustration (Figure 4).*

### 2. Synchronized Robot Motion (Centralized Control)

* **Goal:** Emphasize the system's versatility in responding to **centralized commands**.
* **Method:** A centralized master PC conveyed motion commands to each of the turtlebots. Each agent responded independently to the commands to achieve goals set by the master.

### Video Demo

<video src="/assets/images/projects/project2/demo.mp4" controls></video>

*Synchronized Robot Motion Experiment Video Link: Synchronized Robot Motion Experiment (Figure 8).*

---

## Future Work

Future plans for the GP-MARS platform include:

* **Research Applications:** Implementing and testing modern control algorithms like advanced **path planning** and **cooperative behavior algorithms** for task assignment and redistribution.
* **System Enhancement:** Integrating additional sensing platforms, such as **Lidar systems**, **stereo camera arrays**, and **force-torque sensors**, to significantly expand its sensing and interaction capabilities.
* **Educational Applications:** Developing the system as a tool for undergraduate robotics courses, including laboratory modules and project-based learning opportunities in distributed systems and multi-agent coordination.

---

## Publication

<a href="https://ieeexplore.ieee.org/document/11103627/" target="_blank" class="back-link" style="padding: 1rem 2rem; border: 2px solid var(--color-red-light); background-color: var(--color-red-light); color: var(--color-white); font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; display: inline-block; border-radius: 4px; transition: all var(--transition-speed); box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
  Read Full Paper: 2025 IEEE International Conference on Electro Information Technology (eIT)
</a>

## Acknowledgments

This research was conducted by **Andnet DeBoer** and **Miguel Abrahantes** from the Department of Engineering at Hope College.