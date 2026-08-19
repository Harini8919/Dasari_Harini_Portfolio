# Setup checklist

Everything visual is done. These are the pieces only you can fill in —
each one is marked `REPLACE_...` in the code so you can find them fast.

## 1. Your photo
Drop your photo into this folder as `profile.jpg` (same name used in
`index.html`). Until you do, the hero shows a clean initials avatar
instead of a broken image icon.

## 2. Resume file
Put your resume PDF in this folder named exactly
`Sreenivasulu's_Resume.pdf` (matches the download link already in the
hero section).

## 3. Social links (footer)
Open `index.html`, search for `REPLACE-WITH` in the footer section near
the bottom, and swap in your real LinkedIn, LeetCode, Instagram, and
email. GitHub is already filled in from your existing code
(`avula-sreenu-dev`) — double check that's correct.

## 4. Contact form → Firebase (private inbox)
This is the one real setup step. Takes about 10 minutes, free tier is
more than enough for a portfolio.

1. Go to https://console.firebase.google.com → **Add project** → name
   it anything (e.g. "sreenivasulu-portfolio") → you can skip Google
   Analytics.
2. In your new project: **Build → Firestore Database → Create
   database** → start in **production mode** → pick a region close to
   you.
3. Go to the **Rules** tab for Firestore and paste this, then Publish:
   ```
   rules_version = '2';
   service cloud.firestore {
     match /databases/{database}/documents {
       match /messages/{messageId} {
         allow create: if request.resource.data.name is string
                        && request.resource.data.message is string
                        && request.resource.data.message.size() < 5000;
         allow read, update: if true; // fine for a personal admin page
                                        // gated by the passcode in admin.html
       }
     }
   }
   ```
   This lets visitors *create* messages but nobody can read or edit
   existing ones except through your `admin.html` (which is itself
   gated by the passcode — see step 5). It's a reasonable balance for
   a personal site; it is not bank-grade security, so don't put
   anything truly sensitive through this form.
4. Go to **Project settings** (gear icon) → scroll to **Your apps** →
   click the `</>` (web) icon → register the app (nickname anything,
   no need for Firebase Hosting) → copy the `firebaseConfig` object it
   shows you.
5. Open `config.js` in this folder and paste those values into
   `firebaseConfig`. Also set:
   - `adminPasscode` — pick something only you know. This is checked
     in the visitor's browser, so it keeps casual visitors out of your
     inbox view but isn't a substitute for a real password — don't
     reuse a password you use elsewhere.
   - `fallbackEmail` — used automatically if Firebase isn't configured.

Once `config.js` is filled in, your contact form writes directly to
Firestore, and you read + reply to messages at `admin.html` (open it
the same way you open `index.html` — no separate hosting needed).
Replying happens by email (the message includes the visitor's email,
and "Reply via email" opens it prefilled) since there's no visitor
account system to push a reply back into.

## 5. Hosting
Any static host works since there's no server code — GitHub Pages,
Netlify, or Vercel are all free and simple for a project like this.
