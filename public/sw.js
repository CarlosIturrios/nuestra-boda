if(!self.define){let e,s={};const a=(a,n)=>(a=new URL(a+".js",n).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(n,t)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let c={};const o=e=>a(e,i),r={module:{uri:i},exports:c,require:o};s[i]=Promise.all(n.map((e=>r[e]||o(e)))).then((e=>(t(...e),c)))}}define(["./workbox-4754cb34"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"ed2adab61d9c870cd9b565fe0dc280f4"},{url:"/_next/static/Uv_Y2sjgdzGJt8NLSNna9/_buildManifest.js",revision:"56313a2fa41efe17a9286c47ac6aacba"},{url:"/_next/static/Uv_Y2sjgdzGJt8NLSNna9/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/4bd1b696-3b22fe5251ba2393.js",revision:"Uv_Y2sjgdzGJt8NLSNna9"},{url:"/_next/static/chunks/684-6b038e17b912291b.js",revision:"Uv_Y2sjgdzGJt8NLSNna9"},{url:"/_next/static/chunks/app/_not-found/page-a53f9c2b21587e10.js",revision:"Uv_Y2sjgdzGJt8NLSNna9"},{url:"/_next/static/chunks/app/layout-a7bd6925365bec8b.js",revision:"Uv_Y2sjgdzGJt8NLSNna9"},{url:"/_next/static/chunks/app/page-4db1c35a13bc5f46.js",revision:"Uv_Y2sjgdzGJt8NLSNna9"},{url:"/_next/static/chunks/framework-859199dea06580b0.js",revision:"Uv_Y2sjgdzGJt8NLSNna9"},{url:"/_next/static/chunks/main-4262f8e169aa5469.js",revision:"Uv_Y2sjgdzGJt8NLSNna9"},{url:"/_next/static/chunks/main-app-03b6a12928d0d2e9.js",revision:"Uv_Y2sjgdzGJt8NLSNna9"},{url:"/_next/static/chunks/pages/_app-da15c11dea942c36.js",revision:"Uv_Y2sjgdzGJt8NLSNna9"},{url:"/_next/static/chunks/pages/_error-cc3f077a18ea1793.js",revision:"Uv_Y2sjgdzGJt8NLSNna9"},{url:"/_next/static/chunks/polyfills-42372ed130431b0a.js",revision:"846118c33b2c0e922d7b3a7676f81f6f"},{url:"/_next/static/chunks/webpack-2b98badb05ae5be8.js",revision:"Uv_Y2sjgdzGJt8NLSNna9"},{url:"/_next/static/css/014dfbd8f7502d55.css",revision:"014dfbd8f7502d55"},{url:"/_next/static/css/de24a8649ce9313d.css",revision:"de24a8649ce9313d"},{url:"/_next/static/media/fa-brands-400.86ee2658.woff2",revision:"86ee2658"},{url:"/_next/static/media/fa-brands-400.8eaf0c88.ttf",revision:"8eaf0c88"},{url:"/_next/static/media/fa-regular-400.849b82e2.woff2",revision:"849b82e2"},{url:"/_next/static/media/fa-regular-400.bd1cf947.ttf",revision:"bd1cf947"},{url:"/_next/static/media/fa-solid-900.7a5aa5ab.ttf",revision:"7a5aa5ab"},{url:"/_next/static/media/fa-solid-900.ee698398.woff2",revision:"ee698398"},{url:"/_next/static/media/fa-v4compatibility.59487ca3.woff2",revision:"59487ca3"},{url:"/_next/static/media/fa-v4compatibility.c63df8a6.ttf",revision:"c63df8a6"},{url:"/icons/icon-192x192.jpeg",revision:"c9fee1134580f6ab93250865a3cd0c57"},{url:"/icons/icon-512x512.jpeg",revision:"ec848fb8848527f4df62e294e68df6c9"},{url:"/manifest.json",revision:"a3b2d50f54a0c270c2856e2400331d12"},{url:"/photos/5.png",revision:"93e58a5cef8a508585473e75a046bf01"},{url:"/photos/6.png",revision:"79be3e65f4ececd229e629da254a6466"},{url:"/photos/Details.png",revision:"f312b1f22ba41ba2800feb0871013930"},{url:"/photos/Home.png",revision:"6d7e0211a6d984edecaae6837ad02b85"},{url:"/photos/OurStory.png",revision:"09b12922f764479a01dfe6fcc4deb58d"},{url:"/photos/RSVP.png",revision:"7c2eae19198e0af67c1468bd3b80a8d8"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:n})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
