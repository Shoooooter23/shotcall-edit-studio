# ShotCall Action Edit Studio v0.4

This is a real browser-based manual sports editing update, **not** a CapCut/Insta360 replacement or sports-recognition AI.

## Install
1. Keep a copy of the existing repository before changing files.
2. Upload `index.html`, `app.js`, `manifest.webmanifest`, `icon.svg`, `sw.js` to the root of the existing GitHub Pages repository, replacing matching names.
3. Wait for Pages deployment. Open the site in Chrome and refresh. The new code unregisters older service workers and the replacement `sw.js` caches nothing.

## Try a softball edit
1. Import your ORIGINAL sports clip (not a screen recording of the old app).
2. Scrub to the instant of the swing/contact.
3. Tap **Highlight around this moment**; default 2 seconds before and 3 seconds after. Edit start/end if needed.
4. Select a style. 0% means base edit only; 80% applies a real color/zoom/vignette/flash treatment.
5. Optionally add a music file, adjust source/music levels, analyze candidate beats, and export WebM.
6. Check the exported video and audio. For best compatibility use Chrome on Android.

## Honest limitations
- The app **does not** recognize a swing, ball, tackle or shot automatically. The user marks the action; the app preserves context.
- No true optical-flow slow motion, speed ramps, generative AI, native .insv decoding, or 360 reframing yet.
- 'Slow-Mo Impact' currently uses a brief zoom emphasis, **not** true slow motion.
- Beat analysis finds rough audio-energy accents; it does not guarantee correct beat/drop timing.
- Web browser exports WebM via MediaRecorder, not MP4. Browser performance and audio support vary. Export happens in real time, with the screen awake.
- Imported music must be yours or licensed for your use. No upload server or subscriptions.
- v0.4 JavaScript syntax checked; Android hardware playback/export must be tested by the user.
