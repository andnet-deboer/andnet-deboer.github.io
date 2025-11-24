# Missing Assets - Git LFS Issue

## Problem
All GIF files in this repository are Git LFS pointer files (512 bytes) instead of actual images. This causes them to not display on the deployed site.

## Affected Files (10 GIF files):
1. `assets/images/projects/BassGuitar.gif` - Expected size: ~5MB
2. `assets/images/projects/mlsensing/graspnet.gif`
3. `assets/images/projects/rrt/rrt.gif`
4. `assets/images/projects/pen/penthief.gif`
5. `assets/images/projects/frankahw3/Franka.gif`
6. `assets/images/projects/first/Swerve.gif`
7. `assets/images/projects/314finalproject/jackinbox.gif`
8. `assets/images/projects/peloton/HMI.gif`
9. `assets/images/projects/PelotonRobotVideo.gif`
10. `assets/images/projects/MultiAgentResearch.gif`

## Solution Options

### Option 1: Replace with actual GIF files (Recommended)
If you have the original GIF files on your local machine:
```bash
# 1. Copy your actual GIF files to replace the pointer files
# 2. Then run:
git add assets/images/**/*.gif
git commit -m "Replace LFS pointer files with actual GIFs"
git push origin main
```

### Option 2: Use Git LFS properly
If you want to continue using Git LFS (recommended for files >10MB):
```bash
# Install git-lfs on your local machine
# See: https://git-lfs.github.com/

git lfs install
git lfs pull  # This will fetch the actual files from LFS storage
# Then commit the updated .gitattributes
```

### Option 3: Convert videos to GIFs
If you have source MP4 videos, you can recreate the GIFs:
```bash
# Using ffmpeg:
ffmpeg -i input.mp4 -vf "fps=10,scale=800:-1:flags=lanczos" output.gif
```

## What Was Changed
- Disabled Git LFS in `.gitattributes` to prevent future LFS pointer commits
- This allows regular Git commits for image files

## Next Steps
1. Replace the GIF pointer files with actual GIF files
2. Commit and push the changes
3. Verify the deployed site shows images correctly
