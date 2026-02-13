# Lifepath Calculator

Offline single-page app that calculates a lifepath number from a birthdate.
Multilingual (30+ languages), element-themed UI with karmic debt detection.

## Usage

1. Open `web/index.html` in a browser (or serve with a local web server for PWA install).
2. Enter a birthdate in dd/mm/yyyy format and select Calculate.
3. The result area shows the lifepath number, master numbers, and karmic debts.
4. Use the settings gear to change language and element theme.

## Install (PWA)

- **Android (Chrome)**: browser menu → Install app.
- **iPhone (Safari)**: Share → Add to Home Screen.

## Downloads

### Android APK
- Ready-to-install debug APK: `Apps/Android/lifepath-debug.apk`
- Sideload on any Android device (enable "Install from unknown sources").

### iOS (Source — requires macOS)
- Downloadable archive: `Apps/iOS/Lifepath-iOS-Source.zip`
- Build instructions: `Apps/iOS/README.txt`
- Steps: unzip → `npm install` → `npx cap sync ios` → `npx cap open ios` → build in Xcode (Cmd+R).
- Requires macOS with Xcode 16.0+ and Node.js 18+.

## Project Structure

```
web/          → Source (HTML/CSS/JS) — single source of truth
android/      → Capacitor Android project
ios/          → Capacitor iOS project
Apps/
  Android/    → Distributable APK
  iOS/        → Distributable iOS source archive + build instructions
```

## Features

- 30+ languages with auto-detection from browser locale.
- 6 element themes: Earth, Spirit, Metal, Air, Water, Fire.
- Master numbers (11, 22, 33) and karmic debt (13, 14, 16, 19) detection.
- Step-by-step calculation breakdown (day, month, year, total).
- Interactive legend with color-coded indicators.
- Fully offline — service worker caches all assets.
- PWA installable on all platforms.

## Notes

- The calculation reduces all date digits to a single digit (1–9).
- Karmic debt numbers detected: 13/4, 14/5, 16/7, 19/1.
- Red/orange theme with matching status bar and icon colors.
- Results are not stored and are cleared on reload or close.
- Service worker caching stores same-origin, successful GET responses only.

## License

This project is licensed under the GNU General Public License v3.0 (GPL-3.0).
See the LICENSE file for details.
