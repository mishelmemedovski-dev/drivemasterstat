const CACHE_NAME = 'drivemaster-v1';
const urlsToCache = [
  './',
  './index.html'
];

// INSTALL
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache).catch(() => {
        console.log('Cache addAll optional - app still works offline');
      });
    })
  );
  self.skipWaiting();
});

// ACTIVATE
self.addEventListener('activate', (event) => {
  event.waitUntil(clients.claim());
});

// FETCH - Cache first, fallback to network
self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;
  
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request).then((response) => {
        // Optional: Cache successful responses
        if (response && response.status === 200) {
          const responseToCache = response.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseToCache);
          });
        }
        return response;
      }).catch(() => {
        return new Response('Offline - App funktioniert aber ohne externe Ressourcen', {status: 503});
      });
    })
  );
});
