---
layout: page
title: "DexUMI — Hardware"
permalink: /projects/vtam/hardware/
---

<p style="margin-bottom: 2rem;">
  <a href="/projects/VTAM/" style="color: inherit; text-decoration: none;">← Back to DexUMI</a>
</p>

---

## DexUMI Teleoperator

<!-- PLACEHOLDER: Photo of DexUMI device in hand -->
<div style="max-width: 700px; margin: 2rem auto; border: 2px dashed #aaa; padding: 2rem; text-align: center; color: #888; border-radius: 8px;">
  <p><strong>[PLACEHOLDER]</strong> Photo — DexUMI device held in hand</p>
</div>

DexUMI is a custom handheld teleoperator built around the Stretch 3's parallel gripper. By matching the geometry of the robot's end effector, the cross-embodiment gap is eliminated — human demonstration data transfers directly without remapping.

<!-- PLACEHOLDER: CAD or exploded view of DexUMI -->
<div style="max-width: 700px; margin: 2rem auto; border: 2px dashed #aaa; padding: 2rem; text-align: center; color: #888; border-radius: 8px;">
  <p><strong>[PLACEHOLDER]</strong> CAD / exploded view of DexUMI assembly</p>
</div>

---

## eFlesh Tactile Sensors

<!-- PLACEHOLDER: Close-up photo of eFlesh sensor on fingertip -->
<div style="max-width: 700px; margin: 2rem auto; border: 2px dashed #aaa; padding: 2rem; text-align: center; color: #888; border-radius: 8px;">
  <p><strong>[PLACEHOLDER]</strong> Close-up photo — eFlesh sensor mounted on fingertip</p>
</div>

Each fingertip embeds **5 MLX90393 3-axis magnetometers** in a soft elastomer skin, yielding a 15-dimensional tactile signal per finger. Sensors are read by a QT Py microcontroller over USB serial and published to ROS 2 via a custom node.

<!-- PLACEHOLDER: Sensor layout diagram — 5 magnetometer positions on fingertip cross-section -->
<div style="max-width: 500px; margin: 2rem auto; border: 2px dashed #aaa; padding: 2rem; text-align: center; color: #888; border-radius: 8px;">
  <p><strong>[PLACEHOLDER]</strong> Diagram — 5 MLX90393 positions per fingertip</p>
</div>

---

## Hello Robot Stretch 3

<!-- PLACEHOLDER: Photo of full Stretch 3 robot with DexUMI + eFlesh mounted -->
<div style="max-width: 700px; margin: 2rem auto; border: 2px dashed #aaa; padding: 2rem; text-align: center; color: #888; border-radius: 8px;">
  <p><strong>[PLACEHOLDER]</strong> Photo — Stretch 3 with full sensor suite mounted</p>
</div>

The Hello Robot Stretch 3 is a lightweight mobile manipulator with a telescoping arm. Its parallel gripper is the geometric basis for the DexUMI design. Sensing modalities mounted on the robot:

- **Gripper camera** — 640×480 RGB, JPEG-compressed, streamed over ZMQ
- **eFlesh sensors** — mounted on both gripper fingers
- **ArUco marker** — cube mounted on gripper for end-effector pose ground truth
- **Joint encoders** — lift, arm, wrist yaw/pitch/roll, gripper aperture

---

## Bill of Materials

<!-- PLACEHOLDER: BOM list or table once finalized -->
<div style="max-width: 700px; margin: 2rem auto; border: 2px dashed #aaa; padding: 2rem; text-align: center; color: #888; border-radius: 8px;">
  <p><strong>[PLACEHOLDER]</strong> Bill of materials</p>
</div>