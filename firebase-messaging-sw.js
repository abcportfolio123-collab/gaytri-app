// This service worker handles push notifications when the Gaytri app is
// closed or in the background - it's what lets Gaytri actually reach your
// phone even if nobody has the app open.

importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyA3OtsM3puetOMMAsyQLxWLnvtW8zNiMJY",
  authDomain: "gaytri-app.firebaseapp.com",
  projectId: "gaytri-app",
  storageBucket: "gaytri-app.firebasestorage.app",
  messagingSenderId: "339254398871",
  appId: "1:339254398871:web:91b164c6894fbf978c3ed2"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  const title = payload.notification?.title || "Gaytri";
  const body = payload.notification?.body || "";
  self.registration.showNotification(title, {
    body: body,
    icon: 'icon-192.png',
    badge: 'icon-192.png'
  });
});
