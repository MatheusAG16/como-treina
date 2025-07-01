// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-analytics.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-auth.js";
import { initializeAppCheck, ReCaptchaV3Provider } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app-check.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCTvfScuY4lORQE9gmmuB633_bEaB5UyxE",
  authDomain: "como-treina.firebaseapp.com",
  projectId: "como-treina",
  storageBucket: "como-treina.firebasestorage.app",
  messagingSenderId: "796750363534",
  appId: "1:796750363534:web:9f06e6908edfdfbf9fc2df",
  measurementId: "G-TT4H2QGD2Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// ATENÇÃO: Apenas para testes em localhost! Remova ou comente esta linha em produção.
// self.FIREBASE_APPCHECK_DEBUG_TOKEN = true;
const appCheck = initializeAppCheck(app, {
  provider: new ReCaptchaV3Provider('6Lc6-GkrAAAAAGIfNcnHb2dxqN3qJ-oraloNmOLN'),
  isTokenAutoRefreshEnabled: true
});

// Initialize Firebase
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { app, analytics, auth };