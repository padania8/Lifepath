# Lifepath Calculator

Offline single-page app that calculates a lifepath number from a birthdate.

## Usage

1. Serve the web folder with a local web server (required for install).
2. Open web/index.html in a browser.
3. Enter a birthdate in dd/mm/yyyy format and select Calculate.
4. The result area shows the number and highlights any karmic debt.

## Install (PWA)

- Android (Chrome): use the browser menu and choose Install app.
- iPhone (Safari): use Share and choose Add to Home Screen.

## Android APK

- Debug APK output: Apps/Android/lifepath-debug.apk

## Notes

- The calculation reduces all date digits to a single digit (1-9).
- Karmic debt numbers detected: 13/4, 14/5, 16/7, 19/1.
- Results are not stored and are cleared on reload or close.
- Service worker caching stores same-origin, successful GET responses only.
