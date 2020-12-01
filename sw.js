// Installing service worker
self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open('dino-quiz').then(function(cache) {
      return cache.addAll([
        '/about.html',
        '/contact.html',
        '/dinos.html',
        '/index.html',
        '/quiz.html',
        '/recognition.html',
        '/results.html',
        
        '/js/app.js',
        '/js/contact.js',
        '/js/dino-list-app.js',
        '/js/dinos-data.js',
        '/js/game-app.js',
        '/js/game-data.js',
        '/js/helper-functions.js',
        '/js/materialize.min.js',
        '/js/results-app.js',
        '/js/search-bar-autocomplete.js',
        '/js/typewriter-effect.js',
        
        '/css/typewriter-effect.css',
        '/css/dino-styles.css',
        '/css/styles.css',
        '/css/results-styles.css',
        '/css/quiz-styles.css',
        '/css/materialize.min.css',
        
        '/images/icon/icon.png',
        "/images/images_lg/allosaurus.png",
        "/images/images_lg/amargasaurus.png",
        "/images/images_lg/amurosaurus.jpg",
        "/images/images_lg/apatosaurus.png",
        "/images/images_lg/argentinosaurus.jpg",
        "/images/images_lg/archeopteryx.png",
        "/images/images_lg/brachiosaurus.png",
        "/images/images_lg/carnotaurus.jpg",
        "/images/images_lg/condorraptor.jpg",
        "/images/images_lg/deinonychus.png",
        "/images/images_lg/diplodocus.jpg",
        "/images/images_lg/gallimimus.jpg",
        "/images/images_lg/iguanodon.jpg",
        "/images/images_lg/lycaenops.jpg",
        "/images/images_lg/pachycephalosaurus.jpg",
        "/images/images_lg/parasaurolophus.jpg",
        "/images/images_lg/pteranodon.png",
        "/images/images_lg/pterodactylus.png",
        "/images/images_lg/spinosaurus.jpg",
        "/images/images_lg/stegosaurus.png",
        "/images/images_lg/therizinosaurus.png",
        "/images/images_lg/triceratops.png",
        "/images/images_lg/tyrannosaurus.jpg",
        "/images/images_lg/velociraptor.png",
        "/images/images_sm/allosaurus.png",
        "/images/images_sm/amargasaurus.png",
        "/images/images_sm/amurosaurus.jpg",
        "/images/images_sm/apatosaurus.png",
        "/images/images_sm/argentinosaurus.jpg",
        "/images/images_sm/archeopteryx.png",
        "/images/images_sm/brachiosaurus.png",
        "/images/images_sm/carnotaurus.jpg",
        "/images/images_sm/condorraptor.jpg",
        "/images/images_sm/deinonychus.png",
        "/images/images_sm/diplodocus.jpg",
        "/images/images_sm/gallimimus.jpg",
        "/images/images_sm/iguanodon.jpg",
        "/images/images_sm/lycaenops.jpg",
        "/images/images_sm/pachycephalosaurus.jpg",
        "/images/images_sm/parasaurolophus.jpg",
        "/images/images_sm/pteranodon.png",
        "/images/images_sm/pterodactylus.png",
        "/images/images_sm/spinosaurus.jpg",
        "/images/images_sm/stegosaurus.png",
        "/images/images_sm/therizinosaurus.png",
        "/images/images_sm/triceratops.png",
        "/images/images_sm/tyrannosaurus.jpg",
        "/images/images_sm/velociraptor.png",

        "/favicon/android-chrome-192x192.png",
        "/favicon/android-chrome-256x256.png",
        "/favicon/apple-touch-icon.png",
        "/favicon/browserconfig.xml",
        "/favicon/favicon-16x16.png",
        "/favicon/favicon-32x32.png",
        "/favicon/favicon.ico",
        "/favicon/mstile-150x150.png",
        "/favicon/safari-pinned-tab.svg",
        "/favicon/site.webmanifest",
      ]);
    })
  );
 });
 
 // Responses management
 self.addEventListener('fetch', function(e) {
   e.respondWith(
     caches.match(e.request).then(function(response) {
       return response || fetch(e.request).then((response) => {
  // If there is an asset not yet in the cache, put it into cache
        return caches.open('dino-quiz').then((cache) => {
          cache.put(e.request, response.clone());
          return response;
        });  
      });
    })
  );
});


// Deleting old caches
self.addEventListener('activate', (event) => {
  var cacheKeeplist = ['dino-quiz'];

  event.waitUntil(
    caches.keys().then((keyList) => {
      return Promise.all(keyList.map((key) => {
        if (cacheKeeplist.indexOf(key) === -1) {
          return caches.delete(key);
        }
      }));
    })
  );
});