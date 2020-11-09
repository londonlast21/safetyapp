const APP_PREFIX = 'safety-app-';
const VERSION = 'v1';
const CACHE_NAME = APP_PREFIX + VERSION;
const DATA_CACHE_NAME = "data-cache-" + VERSION;

const FILES_TO_CACHE = [
  '/',

  '/index.html',
  

  '/src/App.js',
  '/src/App.css',
  '/src/index.js',

  '/src/utils/auth.js',
  '/src/utils/mutations.js',
  '/src/utils/queries/js',
  
  '/src/pages/Home.js',
  '/src/pages/Login.js',
  '/src/pages/Signup.js',
  '/src/pages/SinglePost.js',

  '/src/components/DeleteButton.js',
  '/src/components/Navbar.js',
  '/src/components/PostCard.js',
  '/src/components/PostForm.js'

];

// Install a service worker
window.addEventListener('install', event => {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('installing cache :' + CACHE_NAME);
        return cache.addAll(FILES_TO_CACHE);
      })
  );
});

// Cache and return requests
window.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // Cache hit - return response
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
  );
});

// Update a service worker
window.addEventListener('activate', event => {
  var cacheWhitelist = ['safety-app'];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});