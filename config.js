/* ============================================================
   SITE CONFIG — edit the values in this file only.
   See SETUP.md for step-by-step instructions on getting a
   free Firebase project and passcode hash.
   ============================================================ */

const SITE_CONFIG = {
  // Paste your Firebase project config here (Firebase Console → Project settings → General → Your apps → SDK setup).
  // Leave the placeholder as-is if you haven't set Firebase up yet — the
  // contact form will automatically fall back to opening an email instead.
  firebaseConfig: {
    apiKey: "REPLACE_WITH_YOUR_API_KEY",
    authDomain: "REPLACE_WITH_YOUR_PROJECT.firebaseapp.com",
    projectId: "REPLACE_WITH_YOUR_PROJECT_ID",
    storageBucket: "REPLACE_WITH_YOUR_PROJECT.appspot.com",
    messagingSenderId: "REPLACE_WITH_SENDER_ID",
    appId: "REPLACE_WITH_APP_ID"
  },

  // Fallback email used if Firebase isn't configured yet (contact form
  // will open the visitor's email client addressed to this instead).
  fallbackEmail: "REPLACE-WITH-YOUR-EMAIL@example.com",

  // admin.html passcode — CHANGE THIS. It's checked as plain text client-side,
  // which is fine for keeping casual visitors out of your inbox view, but
  // do not reuse a real password here (see SETUP.md for why).
  adminPasscode: "change-this-passcode",

  // Your location pin on the contact-page map.
  location: {
    label: "VIT-AP University, Amaravati",
    lat: 16.4737,
    lng: 80.6362
  }
};
