---
layout: project
title: "DexUMI: Visuo-Tactile Manipulation"
subtitle: "Learning from human demonstration"
carousel_width: auto
preview_gif: "/assets/images/projects/vtam/DemoVideo.mp4"
preview_position: "center-right"
preview_zoom: 1.0
code: "https://github.com/andnet-deboer/VTAM"
# hardware: "/projects/vtam/hardware/"
# journal: "/projects/vtam/journal/"
tags: ["Imitation Learning"]
date: 2026-1-6
# status: "In Progress"
contributors:
  - name: "Andnet DeBoer"
    url: "https://www.linkedin.com/in/andnetdeboer/"
affiliation: "Northwestern University"
---

<div style="max-width: 800px; margin: 2rem auto;">
  <video
    src="/assets/images/projects/vtam/Overview2.mp4"
    style="width: 100%; height: auto; display: block; border: none; box-shadow: none; border-radius: 0;"
    autoplay
    loop
    muted
    playsinline
    controls
  ></video>
</div>

---

## Overview


This project develops a visuo-tactile imitation learning system for the Hello Robot Stretch 3, enabling users to teach manipulation tasks through human demonstration. The Dex-UMI(Universal Manipulation Interface) captures synchronized vision, proprioception, and tactile feedback. The generated data is saved to hugging face and loaded to train ACT and Diffusion policies using the LeRobot framework.

---

## Cross-Embodiment

<!-- video placeholder -->
<!-- <div style="max-width: 1200px; margin: 0 auto; overflow: hidden;">
  <div style="position: relative; width: 100%; padding-bottom: 56.25%; overflow: hidden;">
    <iframe
      src="https://docs.google.com/presentation/d/e/2PACX-1vRaRd_1ZeKTqqjbM7Xo9vf8cRnTwj-hkpRshVEBJJYONYji1UyZgWbCIW73yPzjAD6jJPLnkQzJObSG/pubembed?start=true&loop=true&delayms=3000&rm=minimal"
      style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; transform: scale(1.18); transform-origin: top center; border: none; display: block;"
      frameborder="0"
      scrolling="no"
      allowfullscreen>
    </iframe>
  </div>
</div> -->
<div style="max-width: 1000px; margin: 2rem auto; text-align: center; ">
  <img src="/assets/images/projects/vtam/DexUMI.png" alt="Recording overview" style="max-width:100%; height:auto; display:block; margin:0 auto; border:none; box-shadow:none;">
</div>



A central challenge in robot learning from demonstration is the **embodiment gap** - human hands and robot grippers have different kinematics, so translating demonstrations requires retargeting that introduces error. DexUMI approaches this challenge by using the existing DexWrist3 gripper and dettaching it collect demonstrations.

<!-- DexUMI is a custom handheld teleoperator built around the **same parallel gripper used on the Stretch 3**. Because the operator and robot share identical gripper geometry, opening and closing in the human's hand maps one-to-one to the robot. The D405 camera and eFlesh tactile sensors geomtric setup is 1:1 identical since the gripper is simply attached as part of the UMI during demonstratoin. This enables the Visuo-Tactile signals recorded during demonstration directly correspond to what the robot will sense during deployment. -->

<!-- PLACEHOLDER: Side-by-side image — DexUMI device next to Stretch 3 gripper showing geometric match -->
<!-- <div style="max-width: 1200px; margin: 0 auto; overflow: hidden;">
  <div style="position: relative; width: 100%; padding-bottom: 56.25%; overflow: hidden;">
    <iframe
      src="https://docs.google.com/presentation/d/e/2PACX-1vSOTUtDmkFbgAE93FVMFxg7H7NGkZLx7joBW_mHLE9FY_L5srcpzm4R-PwjULly_plrIA7E6CIRuDej/pubembed?start=true&loop=true&delayms=3000&rm=minimal"
      style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; transform: scale(1.18); transform-origin: top center; border: none; display: block;"
      frameborder="0"
      scrolling="no"
      allowfullscreen>
    </iframe>
  </div>
</div> -->

<div style="max-width: 1000px; margin: 2rem auto; text-align: center; ">
  <img src="/assets/images/projects/vtam/CrossEmbodiment.png" alt="Recording overview" style="max-width:100%; height:auto; display:block; margin:0 auto; border:none; box-shadow:none;">
</div>
---

## Tactile Sensing: eFlesh Integration

Many manipulation tasks fail when vision alone is insufficient — contact forces during insertion or grasping are invisible to any camera. This project integrates [eFlesh](https://e-flesh.com/), an existing soft tactile sensor system, to address this. Each fingertip embeds 5 three-axis magnetometers, providing a rich tactile signal that captures contact location and force direction.


Each sensor array is read by a QT Py microcontroller over USB serial. A custom **ROS 2 node** aggregates and time-stamps the tactile stream alongside joint encoder and camera data, publishing all modalities for recording and policy inference.
<!-- PLACEHOLDER: Video of eFlesh sensors activating during a grasp -->
<div style="max-width: 1600px; margin: 0 auto; overflow: hidden;">
  <div style="position: relative; width: 100%; padding-bottom: 56.25%; overflow: hidden;">
    <iframe
      src="https://docs.google.com/presentation/d/e/2PACX-1vT8l6VKHkm2gsRhWq-WxXrgSJKmGlC0cbmJOYvAf9rqDJlCrCBNnKUAA9Uvngw7tIQ0ynb4ywzmyfFZ/pubembed?start=true&loop=true&delayms=3000&rm=minimal"
      style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; transform: scale(1.18); transform-origin: top center; border: none; display: block;"
      frameborder="0"
      scrolling="no"
      allowfullscreen>

    </iframe>
  </div>
</div>


<div style="max-width: 1600px; margin: 0 auto; overflow: hidden;">
  <div style="position: relative; width: 100%; padding-bottom: 56.25%; overflow: hidden;">
    <iframe
      src="https://docs.google.com/presentation/d/e/2PACX-1vRZ3Crxxi4gPihB-_TKe-bLwCdcoMdwR9Br3kaRl3LIGrBCPyRrOJVPEigaF7cbmAPpjh69UNMjYtF9/pubembed?start=true&loop=true&delayms=3000&rm=minimal"
      style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; transform: scale(1.18); transform-origin: top center; border: none; display: block;"
      frameborder="0"
      scrolling="no"
      allowfullscreen>

    </iframe>
  </div>
</div>




<!-- ---

## Controlling the Gripper -->

---

## Retargeting

<div style="max-width: 1000px; margin: 2rem auto; text-align: center; ">
  <img src="/assets/images/projects/vtam/retarget.jpg" alt="Recording overview" style="max-width:100%; height:auto; display:block; margin:0 auto; border:none; box-shadow:none;">
</div>


Human arm motion during demonstrations is captured via the DexUMI device and retargeted during inference to the Stretch 3's joint space in real time. The retargeting uses a Jacobian-based damped least-squares IK that maps end-effector pose commands into lift, arm, and wrist joint velocities. This project applies episode relative relative joint actions (Δq) rather than absolute positions, to improve generalization across demonstrations that start from slightly different configurations.

<div style="max-width: 800px; margin: 2rem auto; border:  text-align: center;">
  <img src="/assets/images/projects/vtam/Retargeting.png" alt="Recording overview" style="max-width:100%; height:auto; display:block; margin:0 auto; border:none; box-shadow:none;">
</div>

---


### Demonstrations

<div style="max-width: 800px; margin: 0 auto; border-radius: 6px; overflow: hidden;">
  <video autoplay loop muted playsinline controls style="width: 100%; display: block;">
    <source src="/assets/images/projects/vtam/DataCollection.mp4" type="video/mp4">
  </video>
</div>


---

## Recording Pipeline

<!-- System diagram image — sensor modalities flowing into recording node -->
<div style="max-width: 1200px; margin: 2rem auto; text-align: center; ">
  <img src="/assets/images/projects/vtam/RecordingOverview.png" alt="Recording overview" style="max-width:100%; height:auto; display:block; margin:0 auto; border:none; box-shadow:none;">
</div>

Demonstrations are recorded as synchronized streams of three modalities:

- **Vision** —640×480 RGB resized to 320x320 from the gripper-mounted camera, transmitted over ZMQ
- **Proprioception** — joint states from lift, arm, wrist yaw/pitch/roll, and gripper 7DoF
- **Tactile** — 15-dimensional eFlesh signal per finger at full sensor rate

Raw rosbags are processed through a chunking and conversion pipeline into HuggingFace-compatible datasets at 10 fps, then uploaded for training. ArUco markers on the gripper provide end-effector pose ground truth for each frame.



## Policy Learning

Recorded demonstrations are converted into a [LeRobot](https://github.com/huggingface/lerobot)-compatible dataset and uploaded to HuggingFace for training with ACT.

<div style="display:flex;align-items:center;gap:1rem;margin:1.5rem 0;">
  <img src="/assets/images/projects/vtam/lerobot.png" alt="LeRobot" style="height:32px;width:auto;display:inline;margin:0;border:none;box-shadow:none;">
  <img src="/assets/images/projects/vtam/hf.png" alt="HuggingFace" style="height:32px;width:auto;display:inline;margin:0;border:none;box-shadow:none;">
  <span style="font-size:0.9rem;color:#555;">example dataset: <a href="https://huggingface.co/datasets/andnetdeboer/vtam_start_coffee" target="_blank" style="color:#2563eb;text-decoration:underline;">vtam_start_coffee</a></span>
</div>

**Rollout architecture** — policy runs on a remote GPU server and streams joint commands to the robot over ZMQ:

<img src="/assets/images/projects/vtam/inference.png" alt="Inference architecture" style="max-width:60%;height:auto;display:block;margin:1.5rem auto;border:none;box-shadow:none;">

---

<!-- ## Project Journal

Weekly progress updates including videos and slide decks from each stage of development.

<a href="/projects/vtam/journal/" style="display: inline-block; margin-top: 0.5rem; padding: 0.6rem 1.2rem; background: transparent; border: 1px solid currentColor; border-radius: 6px; text-decoration: none; color: inherit; font-size: 0.95rem;">View Weekly Updates →</a>

--- -->

## Next Steps

<div style="display:flex;gap:2rem;align-items:flex-start;margin:1.5rem 0;flex-wrap:wrap;">
  <div style="flex:1;min-width:0;">
    <p>This project has succefully built a pipeline to take human demonstrations and turn them into a deployable policy that executes on the robot. The final stages of the project are in progress to refine the pipline . To fix the current issue with  noisy wrist rotation data expressed in the policy an IMU is being intetgraed into the DexUMI.</p>
    <p style="margin-top:1rem;">The video shows a representative rollout: the robot attempts to pick up the cup but executes an out-of-distribution wrist rotation, knocking it over instead.</p>
    <!-- <ul style="margin-top:1rem;">
      <li><strong>Add 9-axis IMU</strong> to DexUMI for stable ground truth orientation via sensor fusion</li>
      <li>Re-collect demonstrations with corrected rotation data and retrain</li>
      <li>Evaluate rollout on the "make coffee" task</li>
    </ul> -->
  </div>
  <div style="flex:0 0 320px;">
    <p style="font-size:0.75rem;color:#999;margin-top:0.25rem;text-align:center;">ACT rollout2</p>
    <div style="border-radius:8px;overflow:hidden;">
      <video autoplay loop muted playsinline controls style="width:100%;display:block;object-fit:cover;">
        <source src="/assets/images/projects/vtam/act_knock_cup.mp4" type="video/mp4">
      </video>
    </div>
  </div>
</div>

---

## BibTeX

<div style="display:flex;flex-direction:column;gap:0.5rem;">
<pre style="font-size:0.7rem;line-height:1.6;padding:0.75rem;margin:0;overflow-x:auto;background:#f6f8fa;border-radius:6px;white-space:pre-wrap;word-break:break-all;">@article{pattabiraman2025eflesh,
  title={eFlesh: Highly customizable Magnetic Touch Sensing using Cut-Cell Microstructures},
  author={Pattabiraman, Venkatesh and Huang, Zizhou and Panozzo, Daniele and Zorin, Denis and Pinto, Lerrel and Bhirangi, Raunaq},
  year={2025}, archivePrefix={arXiv}, eprint={2506.09994}
}

@inproceedings{chi2024universal,
  title={Universal Manipulation Interface},
  author={Chi, Cheng and Xu, Zhenjia and others},
  booktitle={Robotics: Science and Systems}, year={2024}
}

@article{zhao2023learning,
  title={Learning Fine-Grained Bimanual Manipulation with Low-Cost Hardware},
  author={Zhao, Tony Z and Kumar, Vikash and Levine, Sergey and Finn, Chelsea},
  journal={arXiv:2304.13705}, year={2023}
}

@article{chi2023diffusion,
  title={Diffusion Policy: Visuomotor Policy Learning via Action Diffusion},
  author={Chi, Cheng and Feng, Siyuan and others},
  journal={arXiv:2303.04137}, year={2023}
}</pre>
</div>