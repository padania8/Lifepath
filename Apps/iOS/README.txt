Chemin de vie — Compilation iOS
================================

Prérequis :
- macOS avec Xcode 16.0+ installé (lancer Xcode une fois pour accepter la licence)
- Node.js 18+ et npm

Étapes :
1) Ouvrir un terminal dans le dossier racine du projet
2) npm install
3) npx cap sync ios
4) npx cap open ios
5) Dans Xcode :
   - Sélectionner une équipe de signature (Signing & Capabilities)
   - Choisir un simulateur ou appareil
   - Cmd+R pour compiler et lancer

Notes :
- L'app utilise Capacitor 8 avec Swift Package Manager (CapApp-SPM)
- Bundle ID : com.luciafranco.lifepath
- Les fichiers web sont déjà inclus dans ios/App/App/public/
- Version : 1.2
