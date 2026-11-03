// v0.4: no offline caching. Avoid serving stale editor code from earlier versions.
self.addEventListener('install',event=>{self.skipWaiting()});
self.addEventListener('activate',event=>{event.waitUntil((async()=>{for(const key of await caches.keys())await caches.delete(key);await self.clients.claim()})())});
