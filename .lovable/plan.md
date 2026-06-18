Replace the current profile photo with the newly uploaded image.

1. Upload `profile_photo.jpg` as a Lovable Asset using `lovable-assets create`.
2. Overwrite `src/assets/profile.jpg.asset.json` with the new asset pointer so the existing import in `src/routes/index.tsx` picks it up automatically.
3. Delete the old profile asset from CDN storage.

No component or page code changes needed — the import path and usage remain the same.