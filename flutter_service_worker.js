'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "6339b30eb350ca0f2e48f62f40d8fd95",
".git/config": "3e8b4ec7a847b271247438130bd224ca",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "b5c7a04afa6912c35ebd8ddf2427c580",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "62311d9c05719a4f51294f3631bf0130",
".git/logs/refs/heads/main": "e257e41d81fbc2d7fc153e6d7797a6b7",
".git/logs/refs/remotes/origin/main": "4d707b18e9c07f47b1c6ba86cea870b2",
".git/objects/01/6068b486e1bd1d73743185c2752b7b1b843701": "a0a9d817d83e2d0bd7150ec8e31ae55e",
".git/objects/04/e5efc15dc0c60ea2ffcc37c5bf25e96689f44d": "978222f47488835b92838c74cb5c684c",
".git/objects/06/bb11ace9cd24fa4749830d794814790c997fcb": "808b5ad1349419e7501fb3340afe4210",
".git/objects/0c/cada145f28a4b498afd11cf3f1341b73d1d2ba": "6fa550d9146dea2834dbd4cef0bc7a92",
".git/objects/0d/846c8d4e47a645a373889c8b2c499152924140": "7f8f3bbf2e35701a64b33210abfe6443",
".git/objects/0e/b74e0053c16030dcfd3add22eb1241644a622c": "d5237325b0ff52ce9f2dd9c99a3f54a7",
".git/objects/0e/e3590f4d74c3a4e4621a8d048d01f13436ec7a": "25939fd9f3cb53628d90cf3f4f9a026a",
".git/objects/0f/0f1c9eb7a734f707cfcbf91ed226a5319daac6": "99003790bfc616e15b41c96b3649fd17",
".git/objects/14/89eac0754267b4d1e7fc0b6fcf598409df51df": "25000748bccf4313e9ad68cccc819739",
".git/objects/15/3b67da387f44334ef09ab7c8ba4ac16b307c1f": "8e1027445f50eabdf0a222d0bca5a97f",
".git/objects/1e/16755c5b84ef2b07537b2b3ff93602165be465": "bc1ddd9222ed0a74460861af038a4342",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/23/b44f115d0881af988494ce03de4052fb9cf77d": "e34a13f99147be839a05efdb08990183",
".git/objects/2b/e39c7fd3da441ddac9bea54fd12621dd39960a": "24031b20667d22ca8dba4debe8b9eab5",
".git/objects/37/4f2a94cfbf6980ac2aa6a422ed9d4f7984b312": "7090db780e7d753767ad89cc3cd6db7f",
".git/objects/3a/7795ce82e55d8f9c99e7beaa0c85141f8d2835": "8a5558c663d87709cb2353c1b35642f0",
".git/objects/3c/625c8f84126761124e08c14804deb7d64538de": "20d468cc50fc8fd19fb3f95ab541d852",
".git/objects/43/40502d93c09da91560c862cabf3f6055704149": "4febd773f54af74582dda2576bb38c97",
".git/objects/43/e946e398d96aee466fa0aabb625f0889c3a4bd": "ac34520dee747f675e6e0a15c0bbd2be",
".git/objects/45/544ba125341b0fcf36c7d67533021737d54cb0": "faba682ae1a812c0a8df83f73ab97985",
".git/objects/48/33fcf9ba677d3df448c90e63368e50f8bfc8d6": "a5b926fccf641f8e2a09e52478c0d37a",
".git/objects/48/b248893e398e54641df79c166e61ee396c6eb9": "07b4e285718886e8efdd1fd268feb9c8",
".git/objects/4a/d1daaa1e17fa185db90c2a8df0734840828040": "17268ef9bc10c9696b379015a5e4a468",
".git/objects/4c/b1525b4716e506fd902e1c068951186abf3d23": "511d223165b84824a42d3bed5e862512",
".git/objects/4d/f6f20396fad1d6cd697ecfbe1661fa3e96b5cb": "5ea7ba2dabdc7b29910159ff4ddb58fb",
".git/objects/4f/04770102b25e220a0f871ed8556f619f3dabd7": "9533f429c22b228c438d4225713274b5",
".git/objects/4f/d0e51f345ee398d4c56c9a2a36514cfdc54f3e": "d8e976b7b97437231f01681fc40815a3",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/54/b6b046ae616dc3e9675b7fb7a32f4017e98b1b": "cdaf58f19a7a16a738b4da0bb4d8a404",
".git/objects/55/07f12ef961a78a4fc25e51b3361398e17451cd": "1d986c40fe68100341f97d4b37e5f73f",
".git/objects/5d/761cbcb0b925f1f82d48c8762486fde427137c": "968facc1a6de1edca6167b67391f2461",
".git/objects/5e/04afb1b887139bc457cce1ea7e1d80e9e0d401": "d310bb56a4f6a62cc5a08d2b717f2730",
".git/objects/5f/9accb1c423cea5da8e2bba6cbdea810d3a3c3a": "b9adc99eb6d177155bdff7deaf7ae1c8",
".git/objects/60/45b95edf2e72363cc7b1515e27b2f5249be651": "ec7619124b7f60efbe61973c6055b9f7",
".git/objects/66/d3239e5c2df8e1eaaec6bceafc5630a123ba45": "821cbdf7ff769ebaea2a126031f80bbe",
".git/objects/7a/0eb28b73e5002b5daedc710b983f3114ac9f82": "a88f36b1079efd067137e7729b2da498",
".git/objects/7d/21c00de1eac6cc38f728456ce9253bb6318296": "eb63a896d17a9f1ad89e0800d9fe1e57",
".git/objects/7f/03e23e37a3f8bb4709ae2de4537934e0255065": "1e6e54a6ff086862e68fe56dd755723a",
".git/objects/83/32ec9a20f24b9ab3157a53d61c2a2af7179505": "7ba8226cf9fa8c11e799ec4880e1fbe7",
".git/objects/83/cd84376592024cb0701d6da9d0b80058aa54ed": "7e81657ecb19b32124bccc4f98aa1ca0",
".git/objects/85/473323e4723434355c17d54e318b36f5de98d1": "a7b8b6f77aade0c41cfa0c4313aa3761",
".git/objects/86/2c6958784c9bee2a3bb2e8efd368679a2cd516": "2f356bb5e1c8f11ce2e5ac09bb5717a7",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8f/5006530385f0437dca7d0ff1b46db21dc136f6": "7c8a9c0954aedea48828b78b6a0a10a9",
".git/objects/93/16a4231829948f10a8b4e1f686bd8c609c01ab": "74379cc3284038a7372932c0a558b7de",
".git/objects/94/b52e13bf7919ae4ea7235d78019b592dde8611": "b79fa5ca1cdbf72f253763797850f314",
".git/objects/97/0237fce4aeab17fcd9d72ce3bc8878109c6485": "c6617a954d0d3844541123bd6b567fd6",
".git/objects/9b/a65017209ab6a30f24723f11d4632074cc67cc": "15249ba5e3b58061cfd7e19e707ccad0",
".git/objects/a2/828092fcf1b7b8115819766d03bf5583bd712d": "a6a27a78c2db634646bca7ebeafe1910",
".git/objects/aa/2e2a5810f1bc43d15526d4e1fe1e9f48aef757": "8fc97f9b6253ad415cfad10517b6c370",
".git/objects/b5/373da99ede5e64ac35d68d947dd784ee6d29b3": "a38bce9b65bc1a713c566338c9f3e159",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/58da1a13d2259ee2d585d4d3cbd7657c03dabd": "a970b3f55e31256cf06ad4ab9209a12e",
".git/objects/ba/8cb00dd5231f1a55de0205c16445926a696526": "be8592f9341c9b01b70890c8614c6cf7",
".git/objects/bb/2e8875a993f9c7d9e45d0eeffa839550cc6287": "3ad141b01f3a79c62e799ae0a1b6dd7d",
".git/objects/bb/3085876799532613a08c7ebe43f24f0cc46864": "1b6aa21800d948d5513c15e54d131215",
".git/objects/bc/aa22c436ab5e1148ab82dbebcc1175b1ef9d40": "339240deea55ab1f57336e4ac46009cb",
".git/objects/c4/01a55859d3f03cf05cdd8eb6d6de05bec6ed98": "b3f6e3ef2b6884ac65ff126b6b2228ad",
".git/objects/c9/f817927cfeb03af62ab1f7d003f9c36dda56cf": "e3d8df4d4c65b6ed3d552a27c56a1638",
".git/objects/cb/74c9a648881d85566a8170c4c7e5e23a509841": "6ca2763bcda1c937761384b71cc8343e",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/df/a72ce808fbb783042da88ce1bae5d9adb54fb6": "a8b2273e3e67083e15260d16437b2050",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/eb/58bd442a524017c08032010c50b35dfb577ee5": "878dc03097a602d3ad4331e3aeab1d83",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/a09a1cec5feb7a1ea635cfb8d709f611bb283c": "b685fdebb3fa5a28675aa9b0a3357fbc",
".git/objects/f7/23937f7114bdc6734753cb0b8f0ebe7aff4eca": "2023bc31a3aeda15ba214cb43933586f",
".git/objects/f8/714a5fcf8b34b2cd585ab936feb70454e865fe": "923e7544e5ac25abd6aa5e9a9cf674c8",
".git/objects/fb/e53a9d81aaa8d0508692e5edf811055d27903c": "9a1e9e5212a81439575d6d11bd0e93cb",
".git/objects/fe/028d64bbae864f3a396b677585692fc144b906": "49501128db0a3f8a34c25f828cf8ad1f",
".git/objects/fe/2e108c259258382d7874f00bcb1dd73d954407": "463ea0ee568ff62fb5c2c77bf460a45f",
".git/objects/ff/595a39c3a3ecb5c35977dc9dc42fa4845b641a": "2e5dd81f2ecc2a3dac0172d9fccb898e",
".git/refs/heads/main": "c9032bec2a520195687a204cd092e6f4",
".git/refs/remotes/origin/main": "c9032bec2a520195687a204cd092e6f4",
"assets/AssetManifest.bin": "5adb222be1451ae973255fe1792e41ff",
"assets/AssetManifest.bin.json": "14127a7fce1ec78d7228fe611f7f9ef4",
"assets/AssetManifest.json": "a4334bc1eab96a6197810592a1ff3863",
"assets/assets/fonts/Lato-Black-900.ttf": "d83ab24f5cf2be8b7a9873dd64f6060a",
"assets/assets/fonts/Lato-Bold-700.ttf": "24b516c266d7341c954cb2918f1c8f38",
"assets/assets/fonts/Lato-Light-300.ttf": "2bcc211c05fc425a57b2767a4cdcf174",
"assets/assets/fonts/Lato-Regular-400.ttf": "122dd68d69fe9587e062d20d9ff5de2a",
"assets/assets/fonts/Lato-Thin-100.ttf": "7ab0bc06eecc1b75f8708aba3d3b044a",
"assets/assets/images/9MOBILE.png": "dc40abe197a269b23274e4c73cfe9346",
"assets/assets/images/ABUJA.png": "5d6a390da44f1dc90663c3cc2d6fd5a0",
"assets/assets/images/AIRTEL.png": "f15175f4bd9580308951f6d2eb586b54",
"assets/assets/images/banner.jpg": "6d8c15c0e1577b144bf03cd00b3425e6",
"assets/assets/images/DSTV.png": "e4fdcdc456ef7303c930f944c829ad0a",
"assets/assets/images/EKO.png": "326099bef46e367b9cdc30e720f0ac21",
"assets/assets/images/ENUGU.png": "c6f5cf98d8f6b7f6d39895250d32bdf9",
"assets/assets/images/GLO.png": "f39342a755744134fc28cd8dacaa858e",
"assets/assets/images/GOTV.png": "842ff9fc4a8adfbe0d054b0b9e33eb47",
"assets/assets/images/IBADAN.png": "f9b95188a5d65de8f01a25810b578865",
"assets/assets/images/IKEJA.png": "d2f3c613b255c61af3c271145aed12f6",
"assets/assets/images/JOS.png": "0b0bf868cf61d588a5be8bb00e0543de",
"assets/assets/images/KADUNA.png": "ef0f7bd002a698e78b806629d3c41b4c",
"assets/assets/images/KANO.png": "203a47b72976883d7f542d4b3a1bc23c",
"assets/assets/images/MTN.png": "2b1d94897162c84a7afdf73adea4333f",
"assets/assets/images/PORTHARCOURT.png": "acf5ae9b17de255f4f42c034b4f83832",
"assets/assets/images/STARTIMES.png": "832fe80b728c649d79d2790704168f5a",
"assets/FontManifest.json": "ead6548a53a5d8d4e130811b5f7f7ad7",
"assets/fonts/MaterialIcons-Regular.otf": "851bcca4a1dae67045f8d4777aca920b",
"assets/NOTICES": "84daccb267c5789a04644c19ac373d87",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "c738c849d2824beca7fbb218430cf62e",
"/": "c738c849d2824beca7fbb218430cf62e",
"main.dart.js": "3616253b050302a748a88dafd3c98d5c",
"manifest.json": "1db79c3d9ba60bf320d3924672860204",
"version.json": "f745c3e194b1ac67a889355dc9b8dc61"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
