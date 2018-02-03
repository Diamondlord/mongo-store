// chrome://serviceworker-internals
self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open(currentCacheName).then(function(cache) {
            console.log('123');
            return cache.addAll(arrayOfFilesToCache);
        })
    );
});

/* In sw.js */
self.addEventListener('activate', function(event) {
    event.waitUntil(
        // Get all the cache names
        caches.keys().then(function(cacheNames) {
            return Promise.all(
                // Get all the items that are stored under a different cache name than the current one
                cacheNames.filter(function(cacheName) {
                    return cacheName != currentCacheName;
                }).map(function(cacheName) {
                    // Delete the items
                    return caches.delete(cacheName);
                })
            ); // end Promise.all()
        }) // end caches.keys()
    ); // end event.waitUntil()
});

self.addEventListener('fetch', function(event) {
    // Do stuff with fetch events
    console.log("Do stuff with fetch events");
});

self.addEventListener('message', function(event) {
    // Do stuff with postMessages received from document
    console.log("Do stuff with postMessages received from document");
});