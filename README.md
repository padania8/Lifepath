# Calculateur de chemin de vie

Application monopage hors ligne qui calcule le chemin de vie a partir d'une date de naissance.

## Utilisation

1. Servir le dossier web avec un serveur local (requis pour l'installation).
2. Ouvrir web/index.html dans un navigateur.
3. Saisir une date au format jj/mm/aaaa puis cliquer sur Calculer.
4. La zone de resultat affiche le nombre et met en evidence une dette karmique si elle existe.

## Installation (PWA)

- Android (Chrome) : menu du navigateur puis Installer l'application.
- iPhone (Safari) : Partager puis Ajouter a l'ecran d'accueil.

## APK Android

- APK debug : Apps/Android/lifepath-debug.apk

## Notes

- Le calcul reduit les chiffres de la date jusqu'a un chiffre (1-9).
- Dettes karmiques detectees : 13/4, 14/5, 16/7, 19/1.
- Les resultats ne sont pas stockes et sont effaces au rechargement ou a la fermeture.
- Le cache du service worker ne stocke que des reponses GET same-origin reussies.
