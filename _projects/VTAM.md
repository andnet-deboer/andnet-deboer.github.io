---
layout: project
title: "DexUMI: Enabling Visuo-Tactile Manipulation"
subtitle: "Imitation learning for home assistance tasks"
carousel_width: auto
preview_gif: "/assets/images/projects/vtam/DexUMI_V1_Full.mp4"
preview_position: "center-right"
preview_zoom: 1.0
code: "https://github.com/andnet-deboer/VTAM"
tags: ["Imitation Learning", "VLM", "Diffusion Policy"]
date: 2026-1-6
status: "In Progress"
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
Stretch 3 that enables a user to teach the Stretch 3 robot using imitation learning.

The core hardware contribution is a custom touch sensing and a custom handheld teleoperator
device with geometrically-matched tactile sensors eFlesh[1]

---

<!-- 
This is an independent 10-week project as part of the <a href="https://www.mccormick.northwestern.edu/robotics/" style="color: blue;">Master of Science in Robotics (MSR) program at Northwestern University</a>. -->

## Project Updates

### Week 4 
**Designed DexUMI, integrated eFlesh Control, Head Camera Tracking**

  <div style="max-width: 1200px; margin: 0 auto; overflow: hidden; border-radius: 1px;">
  <div style="margin: -8px; overflow: hidden;">
    <video 
      src="/assets/images/projects/vtam/DexUMI_2.mp4"
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
      src=" https://docs.google.com/presentation/d/e/2PACX-1vR5y7db2mTUOvOkNGJr7s3HySgjuo8zDVMIEO5A1Grtwz4DmBv9CV-GMBeM_XEG9TtYSgYg7ahzkJgF/pubembed?start=true&loop=true&delayms=3000&rm=minimal"
      style="width: calc(100% + 8px); aspect-ratio: 16/9; display: block; margin: -8px;"
      frameborder="0"
      allowfullscreen>
    </iframe>
  </div>
</div>



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

