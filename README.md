# ShotCall 2.0 — first development build

This is a **prototype**, not a CapCut/Insta360 replacement and not sport-aware AI.

## Install
Upload `index.html`, `style.css`, and `app.js` to the **root** of `shotcall-2.0-dev`. Do not upload to `main`. Existing `manifest.webmanifest`, `icon.svg`, and `sw.js` may remain. The new HTML does not register the old service worker, but if the older app has previously been installed, test in Chrome Incognito to avoid stale caches.

## Test
Open `index.html` using a preview host that serves the development branch (GitHub Pages normally publishes `main`, not this branch). A quick way to test without modifying live Pages is GitHub Codespaces or another static preview. Once ready, merge the branch to main after testing. Do **not** assume the existing GitHub Pages URL shows dev branch changes.

Import original video, Auto-detect, inspect candidate moments, choose style/intensity, render, and download WebM.

## Current limitations
- Motion difference is **not** a trained sports event detector and may miss the swing.
- Exports silent WebM (not MP4); does not add music or true slow motion.
- Effects: contrast, saturation, animated zoom, vignette, brief hype flash.
- Browser decode, canvas recording, and mobile performance vary. Test on device.
- No claims of verified rendering on user's Samsung device.

## Next engineering milestones
1. Automated export tests using original softball footage and manual review of candidate segments.
2. FFmpeg-powered MP4 pipeline with speed ramp, audio, and music.
3. Pose and object tracking models with sport-specific event detection.
4. Native Android processing for heavy video and 360 workflows.
