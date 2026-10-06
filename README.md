# Der Einfluss-Test

Ein Online-Test, der als „Spiegelei“ zeigt, wie viel von dem, was dich beschäftigt, in deinem Wirkungsbereich liegt.
Mit Gruppenmodus: Die Leitung zeigt eine vierstellige PIN, Teilnehmende senden ihr Ergebnis anonym an diese PIN.

## Dateien

| Datei | Zweck |
|---|---|
| `index.html` | Der Test für die Teilnehmenden |
| `leiter.html` | Seite für die Gruppenleitung (PIN + Live-Auswertung) |
| `gruppe.js` | Firebase-Zugangsdaten und Verbindung |
| `firestore.rules` | Sicherheitsregeln für die Datenbank |
| `fonts/` | Schriften, lokal eingebunden (keine Verbindung zu Google Fonts) |

Ohne eingetragene Firebase-Daten funktioniert der Test trotzdem, nur die PIN-Eingabe ist dann ausgeblendet.

## 1. Firebase einrichten (einmalig, kostenlos)

1. Auf https://console.firebase.google.com ein neues Projekt anlegen (Google Analytics kann aus bleiben).
2. Links **Firestore Database** → **Datenbank erstellen** → Standort **europe-west3 (Frankfurt)** → im **Produktionsmodus** starten.
3. In Firestore auf den Reiter **Regeln** gehen, den Inhalt von `firestore.rules` einfügen und **Veröffentlichen**.
4. Projektübersicht → Zahnrad → **Projekteinstellungen** → unten **Web-App hinzufügen** (`</>`), einen Namen vergeben, Hosting nicht nötig.
5. Aus dem angezeigten `firebaseConfig` die Werte `apiKey`, `authDomain`, `projectId` und `appId` in `gruppe.js` eintragen.

Der `apiKey` ist bei Firebase-Web-Apps öffentlich und darf im Code stehen. Geschützt wird die Datenbank durch die Regeln.

## 2. Auf GitHub Pages veröffentlichen

1. Neues Repository anlegen und alle Dateien hochladen.
2. **Settings → Pages** → Source: *Deploy from a branch*, Branch `main`, Ordner `/ (root)`.
3. Eigene Subdomain: unter **Custom domain** z. B. `test.deine-domain.de` eintragen und beim Domain-Anbieter einen **CNAME**-Eintrag `test` → `<dein-github-name>.github.io` anlegen. Danach **Enforce HTTPS** aktivieren.

## 3. Am Tag selbst

1. Auf dem Beamer `https://test.deine-domain.de/leiter.html` öffnen → **Neue Gruppe starten**.
2. Die PIN und die Adresse des Tests stehen groß oben.
3. Jeder macht den Test auf dem Handy, gibt am Ende die PIN ein und tippt **Anonym senden**.
4. Ab drei Ergebnissen erscheint das Gruppen-Spiegelei und aktualisiert sich live.

Tipp: Vorher einmal mit zwei, drei Handys durchspielen.

## Datenschutz

- Gespeichert werden nur Zahlen (Interesse und Einfluss pro Bereich), keine Namen, keine Notizen und keine eigenen Bereiche.
- Wer die PIN kennt, kann die anonymen Einzelwerte technisch auslesen. Sie lassen sich aber keiner Person zuordnen.
- Ergebnisse können nicht nachträglich geändert oder gelöscht werden. Alte Gruppen kannst du in der Firebase-Konsole unter Firestore löschen.

## Hinweis zur Datenschutzerklärung

Die Schriften werden lokal ausgeliefert, es werden keine Google Fonts geladen.
Für die Gruppenauswertung wird Firebase (Google) genutzt. Wenn deine Datenschutzerklärung das noch nicht abdeckt,
sollte dort ein Abschnitt zu Firebase/Firestore ergänzt werden (Anbieter Google, Speicherort Frankfurt, nur anonyme Testwerte, nur bei aktivem Senden mit PIN).
