if(!self.define){let e,s={};const i=(i,l)=>(i=new URL(i+".js",l).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(l,n)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let t={};const u=e=>i(e,r),a={module:{uri:r},exports:t,require:u};s[r]=Promise.all(l.map((e=>a[e]||u(e)))).then((e=>(n(...e),t)))}}define(["./workbox-ab24e45d"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"404.html",revision:"63aa0f67fd9345f7bf756b279cf43595"},{url:"assets/app.63479e35.js",revision:null},{url:"assets/chunks/pwa.b3b4e6da.js",revision:null},{url:"assets/guide_features.md.330b7c98.js",revision:null},{url:"assets/guide_features.md.330b7c98.lean.js",revision:null},{url:"assets/guide_index.md.82c31402.js",revision:null},{url:"assets/guide_index.md.82c31402.lean.js",revision:null},{url:"assets/guide_why.md.186d4c63.js",revision:null},{url:"assets/guide_why.md.186d4c63.lean.js",revision:null},{url:"assets/index.md.1f0c7ebb.js",revision:null},{url:"assets/index.md.1f0c7ebb.lean.js",revision:null},{url:"assets/inter-cyrillic-ext.0877b0d9.woff2",revision:null},{url:"assets/inter-cyrillic.f8750142.woff2",revision:null},{url:"assets/inter-greek-ext.3e6f6728.woff2",revision:null},{url:"assets/inter-greek.117e1956.woff2",revision:null},{url:"assets/inter-italic-cyrillic-ext.33bd5a8e.woff2",revision:null},{url:"assets/inter-italic-cyrillic.ea42a392.woff2",revision:null},{url:"assets/inter-italic-greek-ext.4fbe9427.woff2",revision:null},{url:"assets/inter-italic-greek.8f4463c4.woff2",revision:null},{url:"assets/inter-italic-latin-ext.bd8920cc.woff2",revision:null},{url:"assets/inter-italic-latin.bd3b6f56.woff2",revision:null},{url:"assets/inter-italic-vietnamese.6ce511fb.woff2",revision:null},{url:"assets/inter-latin-ext.7cc429bc.woff2",revision:null},{url:"assets/inter-latin.4fe6132f.woff2",revision:null},{url:"assets/inter-roman-cyrillic-ext.e75737ce.woff2",revision:null},{url:"assets/inter-roman-cyrillic.5f2c6c8c.woff2",revision:null},{url:"assets/inter-roman-greek-ext.ab0619bc.woff2",revision:null},{url:"assets/inter-roman-greek.d5a6d92a.woff2",revision:null},{url:"assets/inter-roman-latin-ext.0030eebd.woff2",revision:null},{url:"assets/inter-roman-latin.2ed14f66.woff2",revision:null},{url:"assets/inter-roman-vietnamese.14ce25a6.woff2",revision:null},{url:"assets/inter-vietnamese.2c644a25.woff2",revision:null},{url:"assets/README.md.2416fbde.js",revision:null},{url:"assets/README.md.2416fbde.lean.js",revision:null},{url:"assets/style.8de305b3.css",revision:null},{url:"guide/features.html",revision:"2e1bd5d9ef9e02b55953beb67b285b5e"},{url:"guide/index.html",revision:"02005a637c446f03c5727581df17c1f8"},{url:"guide/why.html",revision:"9ab99c50a2191e9b4580c59ab541f24a"},{url:"index.html",revision:"d10d0053a607cfbb2c72f1d0729437a2"},{url:"README.html",revision:"e029f56b36358210a111085fd4a213e3"},{url:"logo.svg",revision:"4915a940f4a2925c54198a5630de77c9"},{url:"manifest.webmanifest",revision:"cddd2f54a7e88e7c747ca0f1b29617ec"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"),{denylist:[/^\/new$/]}))}));
