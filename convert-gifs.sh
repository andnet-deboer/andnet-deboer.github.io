#!/bin/bash
# GIF to MP4 Conversion Script
# Converts large GIFs to optimized MP4 videos for web use

# Check if ffmpeg is installed
if ! command -v ffmpeg &> /dev/null; then
    echo "Error: ffmpeg is not installed"
    echo "Install with: brew install ffmpeg (Mac) or sudo apt install ffmpeg (Linux)"
    exit 1
fi

# Function to convert a single GIF to MP4
convert_gif_to_mp4() {
    local input=$1
    local output="${input%.gif}.mp4"

    echo "Converting: $input -> $output"

    # High quality, web-optimized MP4
    ffmpeg -i "$input" \
        -movflags faststart \
        -pix_fmt yuv420p \
        -vf "scale=trunc(iw/2)*2:trunc(ih/2)*2" \
        -c:v libx264 \
        -preset slow \
        -crf 20 \
        -y \
        "$output"

    if [ $? -eq 0 ]; then
        local input_size=$(du -h "$input" | cut -f1)
        local output_size=$(du -h "$output" | cut -f1)
        echo "✓ Success! $input_size -> $output_size"
    else
        echo "✗ Failed to convert $input"
    fi
}

# Convert all large GIF pointer files in assets/images/projects
echo "=== Converting GIF files to MP4 ==="
echo ""

# List of GIF files that need conversion (from your repository)
gifs=(
    "assets/images/projects/BassGuitar.gif"
    "assets/images/projects/mlsensing/graspnet.gif"
    "assets/images/projects/rrt/rrt.gif"
    "assets/images/projects/pen/penthief.gif"
    "assets/images/projects/frankahw3/Franka.gif"
    "assets/images/projects/first/Swerve.gif"
    "assets/images/projects/314finalproject/jackinbox.gif"
    "assets/images/projects/peloton/HMI.gif"
    "assets/images/projects/PelotonRobotVideo.gif"
    "assets/images/projects/MultiAgentResearch.gif"
)

for gif in "${gifs[@]}"; do
    if [ -f "$gif" ]; then
        # Check if it's a real GIF (not an LFS pointer)
        if file "$gif" | grep -q "GIF image"; then
            convert_gif_to_mp4 "$gif"
        else
            echo "⚠ Skipping $gif (appears to be an LFS pointer, not a real GIF)"
        fi
    else
        echo "⚠ File not found: $gif"
    fi
    echo ""
done

echo "=== Conversion Complete ==="
echo ""
echo "Next steps:"
echo "1. Update your project front matter to use .mp4 instead of .gif"
echo "   Example: preview_gif: /assets/images/projects/BassGuitar.mp4"
echo "2. Commit and push the MP4 files"
echo "3. Optionally delete the old GIF files"
