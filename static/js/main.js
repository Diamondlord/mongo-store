if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/static/js/sw.js')
        .then(function(registration) {
            console.log("Service Worker Registered", registration);
            if (registration.installing) {
                // Service Worker is Installing
                console.log("Service Worker is Installing");
            }
            if (registration.waiting) {
                // Service Worker is Waiting
                console.log(" Service Worker is Waiting");
            }
        })
        .catch(function(err) {
            console.log("Service Worker Failed to Register", err);
        })
}