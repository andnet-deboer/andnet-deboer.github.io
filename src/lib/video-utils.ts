/**
 * Utility function to open a video in native browser fullscreen
 * @param videoSrc - The source URL of the video to play
 */
export const openVideoFullscreen = async (videoSrc: string) => {
  try {
    // Create a temporary video element for fullscreen
    const video = document.createElement('video');
    video.src = videoSrc;
    video.controls = true;
    video.style.width = '100%';
    video.style.height = '100%';
    video.style.position = 'fixed';
    video.style.top = '0';
    video.style.left = '0';
    video.style.zIndex = '9999';
    video.style.backgroundColor = 'black';
    
    // Add to body temporarily
    document.body.appendChild(video);
    
    // Wait for video to be ready
    await new Promise((resolve) => {
      video.addEventListener('loadedmetadata', resolve, { once: true });
    });
    
    // Request fullscreen with cross-browser support
    let fullscreenPromise;
    if (video.requestFullscreen) {
      fullscreenPromise = video.requestFullscreen();
    } else if ((video as any).webkitRequestFullscreen) {
      fullscreenPromise = (video as any).webkitRequestFullscreen();
    } else if ((video as any).msRequestFullscreen) {
      fullscreenPromise = (video as any).msRequestFullscreen();
    }
    
    // Wait for fullscreen to be granted
    if (fullscreenPromise) {
      await fullscreenPromise;
    }
    
    // Start playing the video
    video.play().catch(console.error);
    
    // Clean up when fullscreen ends
    const cleanup = () => {
      if (document.body.contains(video)) {
        document.body.removeChild(video);
      }
    };
    
    // Listen for fullscreen change events
    const handleFullscreenChange = () => {
      if (!document.fullscreenElement && !(document as any).webkitFullscreenElement && !(document as any).msFullscreenElement) {
        cleanup();
      }
    };
    
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    document.addEventListener('webkitfullscreenchange', handleFullscreenChange);
    document.addEventListener('msfullscreenchange', handleFullscreenChange);
    
    // Also clean up if video ends
    video.addEventListener('ended', cleanup);
    
  } catch (error) {
    console.error('Failed to open video in fullscreen:', error);
    // Fallback: just open the video in a new tab
    window.open(videoSrc, '_blank');
  }
};
