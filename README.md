# DrivemasterStat PWA - Anleitung

## 📦 Du hast 3 Dateien:
1. **index.html** - Die App
2. **sw.js** - Service Worker (für Offline-Betrieb)
3. **manifest.json** - PWA Manifest (für Installation)

---

## 🚀 OPTION 1: Kostenlos mit GitHub Pages (EMPFOHLEN)

### Schritt 1: GitHub Account erstellen
- Gehe zu https://github.com
- "Sign up" klicken
- Account erstellen (kostenlos!)

### Schritt 2: Repository erstellen
- Auf GitHub oben rechts: **+** → "New repository"
- Name: `drivemasterstat` (oder beliebig)
- Haken bei "Add a README file"
- "Create repository"

### Schritt 3: Dateien hochladen
- Im Repository: **Add file** → "Upload files"
- Alle 3 Dateien auswählen:
  - index.html
  - sw.js
  - manifest.json
- "Commit changes"

### Schritt 4: GitHub Pages aktivieren
- Repository → **Settings** → **Pages**
- "Build and deployment" → Branch: **main**
- "Save"
- Warte 1-2 Minuten ⏳

### Schritt 5: App öffnen
- Nach dem Warten siehst du eine URL wie:
  `https://dein-benutzername.github.io/drivemasterstat/`
- Diese URL in Chrome öffnen (Handy, Tablet, PC)
- App sollte installierbar sein! ✅

---

## 🚀 OPTION 2: Kostenlos mit Vercel (SEHR EINFACH)

### Schritt 1-2: Auf Vercel gehen
- Gehe zu https://vercel.com
- "Sign up" → mit GitHub Account anmelden

### Schritt 2: Projekt hochladen
- "New Project"
- "Import Git Repository"
- "Create a new repository" wählen
- 3 Dateien hochladen
- "Deploy"

**Fertig! Vercel gibt dir sofort eine URL** 🎉

---

## 🚀 OPTION 3: Lokal testen (Python)

Wenn du nur lokal auf deinem PC testen willst:

### Windows:
```
1. Im Ordner mit den 3 Dateien:
   - SHIFT + Rechtsklick → "PowerShell öffnen"
   
2. Eingeben:
   python -m http.server 8000
   
3. Im Browser öffnen:
   http://localhost:8000
```

### Mac/Linux:
```
1. Terminal öffnen
2. Zum Ordner navigieren: cd /pfad/zum/ordner
3. python -m http.server 8000
4. Im Browser: http://localhost:8000
```

⚠️ **Aber**: Service Worker funktioniert nur auf HTTPS oder localhost!
Darum für echtes Deployment GitHub Pages oder Vercel nutzen.

---

## 📱 App installieren (Nach dem Deploy)

### Chrome (Handy):
1. App-URL öffnen
2. **Oben rechts:** 3 Punkte (Menü) ⋯
3. **"App installieren"** klicken
4. **"Installieren"** bestätigen
5. ✅ App ist jetzt wie eine normale App installiert!

### Chrome (PC):
1. App-URL öffnen
2. **Oben rechts:** App-Icon (mit Pfeil nach unten)
3. **"App installieren"** klicken
4. ✅ Fertig!

### Safari (iPhone/iPad):
1. App-URL öffnen
2. **Share-Button** (Quadrat mit Pfeil) 
3. **"Zum Home-Bildschirm"**
4. ✅ Fertig!

---

## ✅ Funktionalität

- ✅ **Prüfungen erfassen** - Vorname, Nachname, Experte, Datum, bestanden/fail
- ✅ **Statistiken sehen** - Pro Jahr, Erfolgsquote, Experten-Ranking
- ✅ **Offline funktionieren** - Keine Internet nötig!
- ✅ **Daten speichern** - Lokal auf dem Gerät (localStorage)
- ✅ **Backup-Export** - JSON-Download
- ✅ **Backup-Import** - JSON-Upload
- ✅ **Auf allen Geräten** - Handy, Tablet, PC identisch

---

## 🔄 Daten synchronisieren zwischen Geräten

1. **Auf Gerät 1:** Einstellungen → "Backup herunterladen"
2. **Auf Gerät 2:** Einstellungen → "Backup laden" → Datei auswählen
3. ✅ Alle Daten sind jetzt auf Gerät 2!

---

## 🐛 Falls es nicht funktioniert:

### App nicht installierbar?
- ✅ Manifest vorhanden? (`manifest.json` existiert?)
- ✅ Service Worker funktioniert? (Console: F12 → Console)
- ✅ HTTPS oder localhost? (Lokal: `http://localhost` ist OK)

### Service Worker Error?
- **Das ist normal lokal!** Nur auf HTTPS Server (GitHub/Vercel) funktioniert es richtig.

### Daten weg?
- Browser hat localStorage gelöscht? → Backup laden!
- Oder: "localStorage.clear()" in Console vermeiden!

---

## 📝 Support

Wenn noch etwas nicht klappt, schreib mir! 😊
