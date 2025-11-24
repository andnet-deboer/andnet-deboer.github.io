# Missing Assets - Git LFS Issue (SOLVED!)

## Problem
All GIF files in this repository are Git LFS pointer files (512 bytes) instead of actual images. Additionally, the actual GIF files are **100MB+ each**, which exceeds GitHub's file size limits.

## Affected Files (10 GIF files):
1. `assets/images/projects/BassGuitar.gif` - 100MB+
2. `assets/images/projects/mlsensing/graspnet.gif`
3. `assets/images/projects/rrt/rrt.gif`
4. `assets/images/projects/pen/penthief.gif`
5. `assets/images/projects/frankahw3/Franka.gif`
6. `assets/images/projects/first/Swerve.gif`
7. `assets/images/projects/314finalproject/jackinbox.gif`
8. `assets/images/projects/peloton/HMI.gif`
9. `assets/images/projects/PelotonRobotVideo.gif`
10. `assets/images/projects/MultiAgentResearch.gif`

## Solution: Convert GIFs to MP4 (RECOMMENDED)

GIF files are extremely inefficient. MP4 videos are 10-20x smaller for the same quality and work perfectly as "animated images" on websites.

### Step 1: Convert Your GIFs to MP4

I've created a conversion script for you. On your local machine where you have the actual GIF files:

```bash
# 1. Make sure ffmpeg is installed
# Mac: brew install ffmpeg
# Linux: sudo apt install ffmpeg
# Windows: Download from https://ffmpeg.org/

# 2. Copy your actual GIF files to the repository
#    (replace the LFS pointer files with real GIFs)

# 3. Run the conversion script
bash convert-gifs.sh

# This will create optimized MP4 files next to each GIF
```

### Step 2: Update Your Project Files

Update your project markdown files to use `.mp4` instead of `.gif`:

**Before:**
```yaml
preview_gif: /assets/images/projects/BassGuitar.gif
```

**After:**
```yaml
preview_gif: /assets/images/projects/BassGuitar.mp4
```

### Step 3: Commit and Push

```bash
git add assets/images/**/*.mp4
git add _projects/*.md
git commit -m "Convert large GIFs to MP4 format"
git push origin main
```

### Step 4: Clean Up (Optional)

After verifying the MP4s work, you can delete the GIF files:
```bash
git rm assets/images/**/*.gif
git commit -m "Remove old GIF files"
git push origin main
```

## What Was Changed
- ✅ Disabled Git LFS in `.gitattributes`
- ✅ Updated `project-card.html` to support MP4 videos with autoplay/loop
- ✅ Created `convert-gifs.sh` script for easy conversion
- ✅ Videos will display exactly like GIFs but at 10-20x smaller file size

## Benefits of MP4 over GIF
- 📉 10-20x smaller file size (100MB GIF → 5-10MB MP4)
- ✅ Works on GitHub Pages (no size limit issues)
- 🚀 Faster page loading
- 🎨 Better quality at smaller sizes
- 🔄 Autoplay and loop just like GIFs

## Alternative: Manual Conversion

If you prefer to convert manually:
```bash
ffmpeg -i input.gif \
    -movflags faststart \
    -pix_fmt yuv420p \
    -vf "scale=trunc(iw/2)*2:trunc(ih/2)*2" \
    -c:v libx264 \
    -preset slow \
    -crf 20 \
    output.mp4
```
