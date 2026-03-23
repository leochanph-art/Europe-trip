const CACHE_NAME = 'itinerary-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/style.css', // Add your CSS file name here
  '/app.js',    // Add your JS file name here if you have one
  '/manifest.json'
];

// Install event: Caches the initial files
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

// Fetch event: Serves files from cache if offline
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Return cached version if found, otherwise fetch from network
        return response || fetch(event.request);
      })
  );
});
