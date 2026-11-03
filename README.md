# ShotCall Edit Studio — free mobile PWA MVP

This is a **working prototype**, not a published app. It runs locally in a browser, scans video frames for motion, selects highlights, and records a silent WebM video using MediaRecorder. No footage is uploaded to a server. It does not yet recognize specific sports plays, preserve sound, export MP4, or offer advanced AI.

## Publish free on GitHub Pages

1. Create a free GitHub account and a **public** repository called `shotcall-edit-studio`.
2. Upload **the contents** of this folder (not the ZIP) to the repository root.
3. Go to **Settings → Pages → Build and deployment** and select **Deploy from a branch**, `main`, `/ (root)`; save.
4. Wait for GitHub to publish the site and open the URL shown under Pages. This step requires the user to log in and publish; it has **not** been performed by ChatGPT.
5. On Samsung Chrome, open that HTTPS URL, tap ⋮ → **Add to Home screen** → **Install** or **Create shortcut**.

GitHub Pages is public static hosting: don't put passwords, private footage, or secrets in the repository. The app itself processes chosen video locally and doesn't upload it.

## Testing

Choose a short video, select a preset and target duration, tap **Find highlights**, then **Create video**. Export is silent WebM; check compatibility before relying on it for social posting. Longer footage can be slow or crash on phones. Chrome Android is the recommended browser.

## Limitations

Frame sampling and playback are device/browser-dependent. Motion detection may favor camera shake over meaningful plays. Video processing is on-device and battery-intensive. No backend, accounts, storage database, or hosted service is included. PWA install requires HTTPS hosting. If export fails, try a shorter clip.

## Selecting Gallery and Google Photos videos

The file input uses `accept="video/*"`, which asks Android to offer its media picker where supported. The exact picker UI depends on the Android version, browser, and configured Google Photos cloud media provider. Some devices will show a Files interface instead. In that case use the picker’s Photos/Browse options or download the clip from Google Photos to the device before choosing it. This is not a direct Google Photos API integration.
