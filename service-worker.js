const cacheName = 'camera-app-v1';
const staticAssets = [
    './',
    './index.html',
    './style.css',
    './script.js',
    // Adicione outros arquivos estáticos (imagens, fontes, etc.)
];

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(cacheName).then((cache) => {
            return cache.addAll(staticAssets);
        })
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});