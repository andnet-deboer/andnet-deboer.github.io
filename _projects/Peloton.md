---
layout: project
title: "Multi-robot collaboration for warehouse restocking applications"
preview_gif: "/assets/images/projects/PelotonRobotVideo.gif"
tags: ["AMR", "FANUC", "SLAM", "PLC"]
date: 2021-08-15
description: "Real-time safety verification for robotic systems using GPU acceleration"
---

## Overview

This project explores GPU-accelerated methods for real-time safety verification in robotic systems. By leveraging CUDA and parallel computing techniques, we achieved significant speedups in verifying safe operating regions for mobile manipulators in dynamic environments.

![System Architecture](/assets/images/projects/project1/architecture.png)

## Problem Statement

Traditional safety verification algorithms for robotic systems are computationally expensive, often taking seconds to minutes to verify a single trajectory. This makes them impractical for real-time applications where robots need to react to dynamic obstacles and changing environments within milliseconds.

## Technical Approach

### GPU Parallelization Strategy

We implemented a massively parallel collision checking algorithm that distributes workspace verification across thousands of CUDA threads. Each thread is responsible for checking a subset of the robot's configuration space against potential obstacles.

```cpp
// Simplified CUDA kernel for parallel collision checking
__global__ void verifyTrajectoryKernel(
    const Trajectory* trajectory,
    const Obstacle* obstacles,
    bool* results
) {
    int idx = blockIdx.x * blockDim.x + threadIdx.x;
    // Parallel verification logic
}
```

### Key Innovations

1. **Spatial Hashing**: Implemented GPU-friendly spatial hashing for fast obstacle queries
2. **Warp-Level Optimization**: Leveraged CUDA warp intrinsics for efficient memory access
3. **Adaptive Discretization**: Dynamically adjust verification granularity based on risk assessment

<div class="side-by-side">
  <img src="/assets/images/projects/project1/before.png" alt="CPU-based verification">
  <img src="/assets/images/projects/project1/after.png" alt="GPU-accelerated verification">
</div>

*Left: CPU-based verification (250ms). Right: GPU-accelerated verification (8ms)*

## Results

Our GPU-accelerated approach achieved:

- **30x speedup** compared to optimized CPU implementations
- **Real-time verification** at 120Hz for 7-DOF manipulators
- **Scalability** to complex environments with 1000+ obstacles
- **Energy efficiency** with 3x lower power consumption per verification

![Performance Comparison](/assets/images/projects/project1/performance.png)

## Implementation Details

The system was implemented using:
- CUDA 11.8 for GPU acceleration
- C++17 for the core verification algorithms
- ROS2 for integration with robotic platforms
- Custom memory management for zero-copy data transfers

### Video Demo

<video src="/assets/images/projects/project1/demo.mp4" controls></video>

*Real-time safety verification in a cluttered environment*

## Future Work

- Extension to multi-robot scenarios
- Integration with learning-based motion planning
- Hardware acceleration using custom FPGAs
- Deployment on embedded GPU platforms (Jetson)

## Publications

This work has been submitted to ICRA 2025.

## Acknowledgments

This research was conducted in collaboration with [Institution Name] and supported by [Grant/Funding Source].