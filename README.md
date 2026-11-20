# React Routing & Firebase Authentication

Simple React app with 5 pages, React Router, Firebase email/password login and protected routes.

## Pages

| Page      | Route        | Access    |
|-----------|--------------|-----------|
| Home      | `/`          | Public    |
| Login     | `/login`     | Public    |
| Register  | `/register`  | Public    |
| Dashboard | `/dashboard` | Protected |
| Profile   | `/profile`   | Protected |

## Setup

1. Go to https://console.firebase.google.com and create a project.
2. Add a **Web app** to the project and copy the config values.
3. In **Build -> Authentication -> Sign-in method**, enable **Email/Password**.
4. Paste the config values into `src/firebase.js`.
5. Install and run:

```
npm install
npm run dev
```

## How it works (for explaining)

- **Routing**: `BrowserRouter` in `main.jsx` wraps the app. `Routes` / `Route` in `App.jsx` map each URL to a page. `Link` in the navbar changes pages without reloading.
- **Authentication**: `firebase.js` sets up Firebase and exports `auth`. Register uses `createUserWithEmailAndPassword`, login uses `signInWithEmailAndPassword`, logout uses `signOut`.
- **Auth state**: `AuthContext.jsx` uses `onAuthStateChanged` to listen for login/logout and stores the current user in state. Firebase keeps the session in the browser, so the user stays logged in after a refresh.
- **Protected routes**: `ProtectedRoute.jsx` checks the user. While firebase is still checking it shows "Loading...", if there is no user it redirects to `/login` using `Navigate`, otherwise it shows the page.
- **Navbar**: shows Login/Register when logged out, and Dashboard/Profile/Logout when logged in (conditional rendering).
