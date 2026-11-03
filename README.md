# ShotCall v0.3 — browser editor prototype

Replace `index.html` and `app.js` in your existing GitHub Pages repository with these files. Keep your existing `icon.svg`, `manifest.webmanifest`, and `sw.js`. In `sw.js`, update the cache version (or remove the old service worker cache) to prevent old assets being served.

## Included
- Video import and manual clip start/end editing
- Optional pixel-motion highlight suggestions (not sport-aware AI)
- Frame capture to PNG
- Photo preview (not photo-to-video rendering)
- Optional user-provided music mixed into a WebM recording where supported
- Six canvas-based enhancement levels from Original 0% to Creative Look 100%
- Aspect ratio selection, 540p/720p/1080p rendering

## Important limitations
- This is **not** a native Android app, professional NLE, or sports recognition AI.
- Exports **WebM**, not MP4; original video audio is not included.
- Music export depends on Web Audio and MediaRecorder support. Some devices may fail.
- Export runs in real time and must remain in the foreground. Short clips are recommended.
- 360-degree native `.insv` is not supported; export a standard video first.
- Filters may be browser-dependent. No actual beat detection, optical flow, generative AI, ball tracking, or action recognition.
- Use music you have rights to use. Video/photo files stay on-device.

## Quick testing
1. Upload a 10-second MP4 and choose **Use full video**.
2. Set enhancement to **0%** and export. Confirm the result plays.
3. Try **80%** and compare the result.
4. Import an audio file, export a short clip, and confirm whether audio is present.
5. Try **Capture current frame** and save PNG.

## Deployment
Upload the two files to the repository's root, commit, then refresh GitHub Pages. If old UI remains, clear site cache or increment your service worker's cache name.
