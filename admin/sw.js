var CACHE_NAME = "khan-traders-lodhran-v1";
var urlsToCache = [
  "./Khan_Traders_Lodhran.html",
  "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"
];

self.addEventListener("install", function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener("fetch", function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});