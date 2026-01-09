const CACHE_NAME = 'pointeuse-v1';
const ASSETS_TO_CACHE = [
  '/',
  '/index.html',
  '/manifest.json',
  '/icon-192.png'
  // Ajoute ici tes autres fichiers si tu en as (ex: /style.css, /app.js)
];

// 1. Installation : Mise en cache des ressources initiales
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log(' [Service Worker] Mise en cache des ressources');
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
  self.skipWaiting();
});

// 2. Activation : Nettoyage des anciens caches si nécessaire
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            console.log(' [Service Worker] Suppression de l\'ancien cache', cache);
            return caches.delete(cache);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// 3. Stratégie de Fetch : "Cache First" avec "Network Fallback"
// On essaie de servir le cache en priorité pour la rapidité, sinon on va sur le réseau
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request).then((networkResponse) => {
        // Optionnel : On peut mettre en cache dynamiquement les nouveaux fichiers consultés
        return caches.open(CACHE_NAME).then((cache) => {
          cache.put(event.request, networkResponse.clone());
          return networkResponse;
        });
      });
    }).catch(() => {
      // Si le réseau échoue et que la ressource n'est pas en cache (ex: navigation)
      if (event.request.mode === 'navigate') {
        return caches.match('/index.html');
      }
    })
  );
});
