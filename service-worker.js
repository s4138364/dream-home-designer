// Service Worker for Dream Home Designer PWA
const CACHE_VERSION = 'v6';
const CACHE_NAME = `dream-home-${CACHE_VERSION}`;

// List of files to cache
const FILES_TO_CACHE = [
  '/dream-home-designer/',              // Root
  '/dream-home-designer/index.html',
  '/dream-home-designer/style.css',
  '/dream-home-designer/script.js',
  '/dream-home-designer/manifest.json',
  'https://cdn.jsdelivr.net/npm/three@0.128.0/build/three.min.js',
  'https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js'
];

// Install event - cache all files
self.addEventListener('install', (event) => {
  console.log('[Service Worker] Installing...');
  
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('[Service Worker] Caching app files');
        return cache.addAll(FILES_TO_CACHE);
      })
      .then(() => {
        console.log('[Service Worker] All files cached!');
        return self.skipWaiting();
      })
      .catch((error) => {
        console.error('[Service Worker] Cache failed:', error);
      })
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  console.log('[Service Worker] Activating...');
  
  event.waitUntil(
    caches.keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (cacheName !== CACHE_NAME) {
              console.log('[Service Worker] Deleting old cache:', cacheName);
              return caches.delete(cacheName);
            }
          })
        );
      })
      .then(() => {
        console.log('[Service Worker] Ready to serve files!');
        return self.clients.claim();
      })
  );
});

// Fetch event - serve from cache first, then network
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.match(event.request).then((cachedResponse) => {
        
        // If we have it in cache, return it
        if (cachedResponse) {
          console.log('[Service Worker] Serving from cache:', event.request.url);
          return cachedResponse;
        }
        
        // Not in cache, try to fetch from network
        console.log('[Service Worker] Fetching from network:', event.request.url);
        
        return fetch(event.request)
          .then((networkResponse) => {
            // Cache successful responses for next time
            if (networkResponse && networkResponse.status === 200) {
              cache.put(event.request, networkResponse.clone());
            }
            return networkResponse;
          })
          .catch((error) => {
            // Network failed and not in cache
            console.error('[Service Worker] Fetch failed:', event.request.url, error);
            
            // If it's a page request, return a simple offline page
            if (event.request.destination === 'document') {
              return new Response(
                '<!DOCTYPE html><html><head><title>Offline</title></head><body><h1>You are offline</h1><p>Please check your internet connection.</p></body></html>',
                { 
                  status: 200,
                  statusText: 'OK',
                  headers: { 'Content-Type': 'text/html' } 
                }
              );
            }
            
            // For other resources, return error
            return new Response('Network error', {
              status: 408,
              statusText: 'Network error'
            });
          });
      });
    })
  );
});