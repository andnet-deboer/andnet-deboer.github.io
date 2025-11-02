layout: project # Use the custom project detail layout you created title: GPU-Accelerated Mobile Manipulation tags: [ROS 2, C++, CUDA, MANIPULATION, SAFETY] image: template.gif # This GIF will be used on the homepage tile permalink: /projects/gpu-safety-accelerated-control/

🌟 Project Overview: GPU-Accelerated Failsafe Control

This project focuses on building a highly reliable, safety-critical mobile manipulation system, addressing the challenge of maintaining control integrity on embedded hardware despite sensor failure.

💻 Architecture & Implementation

We leveraged the NVIDIA Jetson Orin Nano for high-performance computation and a custom mobile base integrated with a 6-DOF arm.

A. Core Innovation: GPU Acceleration

Metric: Achieved a 10x reduction in latency for the Unscented Kalman Filter (UKF) by porting the critical matrix operations to CUDA/PyTorch kernels on the Jetson Orin.

Result: Ensured the control loop maintained a stable 100 Hz frequency, even when processing high-bandwidth LiDAR and IMU data.

B. Safety State Machine (C++)

Developed a deterministic C++ failsafe layer that actively monitors the system state.

Failsafe Mode: Upon simulated sensor failure (e.g., GPS signal loss), the system instantly forces the manipulator to retract and the mobile base to halt, preventing uncontrolled movement.

📸 Project Demonstration

The animation below showcases the final result: the mobile base and arm executing a complex coordinated maneuver, demonstrating robust state estimation and safety protocols.

<div class="text-center my-5">
<!-- Image/GIF from assets/img/portfolio/ -->
<a class="portfolio-box" href="/projects/project-name-repo-link" target="_blank" title="VIEW PROJECT">
<img class="img-fluid" src="{{ site.baseurl }}/assets/img/portfolio/{{ page.image }}" alt="Project Demo GIF" />
<div class="portfolio-box-caption">
<div class="project-category text-white">VIEW PROJECT</div>
</div>
</a>
<p class="text-muted mt-2 small">
Click the image to view the external project repository and video demo.
</p>
</div>

💡 Learnings & Future Scope

The primary challenge was managing the power draw of the 6-DOF arm while maintaining low-latency communication between the high-level Jetson and the low-level motor controllers. Future work involves integrating learned perception models (sim-to-real transfer) into the GPU pipeline.