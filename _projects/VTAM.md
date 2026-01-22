---
layout: project
title: "Visuo-Tactile Assistive Manipulation"
subtitle: "Imitation learning for home assistance tasks"
carousel_width: auto
preview_gif: "/assets/images/projects/vtam/overview.png"
preview_position: "center"
preview_zoom: 1.0
code: "https://github.com/andnet-deboer/VTAM"
tags: ["Imitation Learning", "VLM", "Diffusion Policy"]
date: 2026-1-6
contributors:
  - name: "Andnet DeBoer"
    url: "https://www.linkedin.com/in/andnetdeboer/"
affiliation: "Northwestern University"
---

<div style="max-width: 1200px; margin: 0 auto; overflow: hidden; border-radius: 8px;">
  <div style="margin: -8px; overflow: hidden;">
    <iframe
      src="https://docs.google.com/presentation/d/e/2PACX-1vRpvHAMKP4fpgmVmO4f1NYTKKt6sb1xugXfYDe7PCGTnLlVn0XG7QPtMHd7R_Pt8zI2KAWjr3RNl968/pubembed?start=true&loop=true&delayms=3000&rm=minimal"
      style="width: calc(100% + 8px); aspect-ratio: 16/9; display: block; margin: -8px;"
      frameborder="0"
      allowfullscreen>
    </iframe>
  </div>
</div>


## Overview

The goal of this project is to develop a visuo-tactile manipulation system for the Hello Robot
Stretch 3 that enables fine-grained home assistance tasks requiring tactile feedback. The
core hardware contribution is a custom touch sensing and a custom handheld teleoperator
device with geometrically-matched tactile sensors (eFlesh) and camera placement, enabling
high-fidelity demonstration collection. The system will integrate vision-language model
(VLM) understanding to interpret natural language commands (e.g., "Make me a coffee") and execute multi-step manipulation sequences. The final
demonstration video will show the robot receiving voice commands, selecting appropriate
objects from multiple options, and performing tactile critical tasks including tasks such as
appliance plug insertion, K-cup insertion, lid closure, button actuation, and mug retrieval,
selected tasks will be where vision-only approaches demonstrably fail due to occlusion and
force-sensitivity requirements.

---


This is an independent 10-week project as part of the <a href="https://www.mccormick.northwestern.edu/robotics/" style="color: blue;">Master of Science in Robotics (MSR) program at Northwestern University</a>.

## Project Updates

### Week 3
**Integrated Custom sensors with robot, publish to ROS, teleoperate robot**

  <div style="max-width: 1200px; margin: 0 auto; overflow: hidden; border-radius: 1px;">
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

<div style="max-width: 1200px; margin: 0 auto; overflow: hidden; border-radius: 1px;">
  <div style="margin: -8px; overflow: hidden;">
    <iframe
      src=" https://docs.google.com/presentation/d/e/2PACX-1vQFLWR-0Yoyh2l5r4rkgyFy707rudZvgIPBhinP_88vV2dFAJjxDfuxUzw7m-XKUfolQhS-hEEa92Em/pubembed?start=true&loop=true&delayms=3000&rm=minimal"
      style="width: calc(100% + 8px); aspect-ratio: 16/9; display: block; margin: -8px;"
      frameborder="0"
      allowfullscreen>
    </iframe>
  </div>
</div>

### Week 2
**Built version 1 of the eFlesh sensor, setup ros project & infastructure, started data collection pipeline**

<!-- <div style="max-width: 1200px; margin: 0 auto; overflow: hidden; border-radius: 1px;">
  <div style="margin: -8px; overflow: hidden;">
    <iframe
      src="https://docs.google.com/presentation/d/e/2PACX-1vQUXEI81iRg8zXstNsK-kzP77ORppanyx130eYgZSN22xt4afV45CUjZL6x24ICvjPv6mHvjqvjBQ7C/pubembed?start=true&loop=true&delayms=3000&rm=minimal"
      style="width: calc(100% + 8px); aspect-ratio: 16/9; display: block; margin: -8px;"
      frameborder="0"
      allowfullscreen>
    </iframe>
  </div>
</div>
  - /assets/images/projects/vtam/Winter Project_wk2_v1.mp4 -->

  <div style="max-width: 1200px; margin: 0 auto; overflow: hidden; border-radius: 1px;">
  <div style="margin: -8px; overflow: hidden;">
    <video 
      src="/assets/images/projects/vtam/Winter Project_wk2_v1.mp4"
      style="width: calc(100% + 8px); aspect-ratio: 16/9; display: block; margin: -8px;"
      autoplay
      loop
      muted
      playsinline
      controls
    ></video>
  </div>
</div>

### Week 1
**Project kickoff, robot setup, order components, research VLM's**

<div style="max-width: 1200px; margin: 0 auto; overflow: hidden; border-radius: 1px;">
  <div style="margin: -8px; overflow: hidden;">
    <iframe
      src="https://docs.google.com/presentation/d/e/2PACX-1vRCKszOeiJTQwfWI-3lEOVttNCDrTc-axLYzKnj-t1BBtVP86YqvLEmycRFW6undiipvCDwWf9vFgVj/pubembed?start=true&loop=true&delayms=3000&rm=minimal"
      style="width: calc(100% + 8px); aspect-ratio: 16/9; display: block; margin: -8px;"
      frameborder="0"
      allowfullscreen>
    </iframe>
  </div>
</div>

