// Gruppenauswertung über Firebase Firestore.
// Trag hier die Werte aus deinem Firebase-Projekt ein (siehe README.md).
// Solange apiKey leer ist, blendet der Test die PIN-Eingabe einfach aus.
export const firebaseConfig = {
  apiKey: "AIzaSyDaUrcVeUi-kjZu9INrMyfIDdvnDj-3a6A",
  authDomain: "einfluss-test.firebaseapp.com",
  projectId: "einfluss-test",
  appId: "1:513238936201:web:286ad6eb73447b2394b458"
};

export const AREA_NAMES = [
  "Familie & Freundschaften", "Beruf & Karriere", "Wirtschaft & Unternehmertum",
  "Politik & Gesellschaft", "Sport & Freizeit", "Kultur & Medien", "Glaube & Kirche",
  "Ehrenamt & Engagement", "Vereine & lokale Gemeinschaft", "Bildung & Wissen",
  "Internet & Social Media"
];

const V = "10.12.2";
let cached = null;
export async function connect() {
  if (!firebaseConfig.apiKey || !firebaseConfig.projectId) return false;
  if (cached) return cached;
  const { initializeApp } = await import(`https://www.gstatic.com/firebasejs/${V}/firebase-app.js`);
  const fs = await import(`https://www.gstatic.com/firebasejs/${V}/firebase-firestore.js`);
  cached = { db: fs.getFirestore(initializeApp(firebaseConfig)), fs };
  return cached;
}
