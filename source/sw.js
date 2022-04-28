'use strict';
importScripts('https://cdn.jsdelivr.net/npm/workbox-cdn@3.6.3/workbox/workbox-sw.js');
workbox.setConfig({
    modulePathPrefix: 'https://cdn.jsdelivr.net/npm/workbox-cdn@3.6.3/workbox/'
});
let cacheSuffixVersion = '-220427-1';
const maxEntries = 100;
self.skipWaiting();
workbox.routing.registerRoute(
  new RegExp('^https://cdn\.jsdelivr\.net'),
  workbox.strategies.cacheFirst({
      cacheName: 'static-lib' + cacheSuffixVersion,
      plugins: [
          new workbox.expiration.Plugin({
              maxAgeSeconds: 30 * 24 * 60 * 60,
          }),
          new workbox.cacheableResponse.Plugin({
              statuses: [0, 200],
          }),
      ]
  })
);
workbox.routing.registerRoute(
  // Cache Image File
  /.*\.(?:png|jpg|jpeg|svg|gif)/,
  workbox.strategies.staleWhileRevalidate({
      cacheName: 'img-cache' + cacheSuffixVersion,
  })
);

workbox.routing.registerRoute(
  // Cache CSS & JS files
  /.*\.(css|js)/,
  workbox.strategies.staleWhileRevalidate({
      cacheName: 'static-assets-cache',
  })
);
workbox.routing.setDefaultHandler(
  workbox.strategies.networkFirst({
      options: [{
          // 超过 3s 请求没有响应则 fallback 到 cache
          networkTimeoutSeconds: 3,
      }]
  })
);