---
layout: project
title: "Impact Dynamics 2D Dice Simulation"
subtitle: "Collision Simulation with Lagrangian Mechanics"
preview_gif: "/assets/images/projects/jackinthebox/JackInTheBox.mp4"
preview_position: "center bottom"
preview_zoom: 1.5
tags: ["Dynamics", "Python", "Simulation"]
date: 2025-12-11
paper: "/assets/images/jackinthebox/FinalReport.pdf"
code: "https://colab.research.google.com/drive/1Ot235OrBuuW-fHEiRZJqJcHw2wYeYxUw"
---

<div style="max-width: 1200px; margin: 0 auto; overflow: hidden; border-radius: 8px;">
  <div style="margin: -8px; overflow: hidden;">
    <iframe
      src="https://docs.google.com/presentation/d/e/2PACX-1vRI0fXVOPoWTY0TZ3fJdfFXQR85cDGHtEnkP8wRFTnfwS3IBhrLxT1iJUT12FRYjajsiv8BvpxAz9DE/pubembed?start=false&loop=false&delayms=3000&rm=minimal"
      style="width: calc(100% + 8px); aspect-ratio: 16/9; display: block; margin: -8px;"
      frameborder="0"
      allowfullscreen>
    </iframe>
  </div>
</div>

## Overview

A 2D physics simulation modeling impact dynamics between two planar rigid bodies: a diamond-shaped box that can translate and rotate, and a cross-shaped "jack" that bounces inside under gravity with perfectly elastic collisions.

## System Description

The system uses six generalized coordinates: $q = [x_1, y_1, \theta_1, x_2, y_2, \theta_2]^T$ where subscript 1 is the jack and subscript 2 is the box.

## Equations of Motion

The Lagrangian $L = T - V$ where:

$$T = \frac{1}{2}M_1(\dot{x}_1^2 + \dot{y}_1^2) + \frac{1}{2}I_1\dot{\theta}_1^2 + \frac{1}{2}M_2(\dot{x}_2^2 + \dot{y}_2^2) + \frac{1}{2}I_2\dot{\theta}_2^2$$

$$V = M_1 g y_1 + M_2 g y_2$$

## Collision Detection

Each jack tip is expressed in the box body frame using $g_{B,tip} = g_{WB}^{-1} \cdot g_{W,tip}$. A collision occurs when $\phi \leq 0$ and $\dot{\phi} < 0$.

## Results

- Jack falls under gravity and bounces off walls
- Impacts transfer momentum to the box, causing movement and rotation  
- With $e = 1$, energy is conserved indefinitely
- Off-center impacts produce realistic rotational responses