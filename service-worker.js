/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "361ee6cd87a3cdb4708c2b7494679521"
  },
  {
    "url": "assets/css/0.styles.f1c581b5.css",
    "revision": "e43d1e12f21bd600c873d5a38d7835b9"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.0739931b.js",
    "revision": "33fe98303fb53a3cee50116a3fc2fd87"
  },
  {
    "url": "assets/js/11.72e310c4.js",
    "revision": "f95b9af670b33453a7c422b4dbd0ba48"
  },
  {
    "url": "assets/js/12.edd410e7.js",
    "revision": "4ba941ab43614335370eb671786d6974"
  },
  {
    "url": "assets/js/13.17957074.js",
    "revision": "8b26aab13172b38c47b8431fc28c310c"
  },
  {
    "url": "assets/js/14.53a9ef47.js",
    "revision": "a679bbc69de0e6a10ecc256877e26f93"
  },
  {
    "url": "assets/js/15.b5c20c09.js",
    "revision": "8c2e3cb836c42075c69011fe76d79fee"
  },
  {
    "url": "assets/js/16.d4ce210e.js",
    "revision": "853a8c117f9109c46ecc88cf330d4e0b"
  },
  {
    "url": "assets/js/17.a7536dd2.js",
    "revision": "65687403d3adca6e3a5bb7ef15b2f8e5"
  },
  {
    "url": "assets/js/18.24d2f03f.js",
    "revision": "d206bb8804e0cb25838741b443b15b16"
  },
  {
    "url": "assets/js/19.3d4ffa8d.js",
    "revision": "d955c6a1a9c2b1047175b7fa04962382"
  },
  {
    "url": "assets/js/20.6f73b385.js",
    "revision": "771e6119b483546116b17e7b2af6fac0"
  },
  {
    "url": "assets/js/21.232805aa.js",
    "revision": "df050d61f674196e788365713c548e34"
  },
  {
    "url": "assets/js/22.fee76c46.js",
    "revision": "03cb5f13b55f570269431a63c88d8e64"
  },
  {
    "url": "assets/js/23.9a7ca3a4.js",
    "revision": "228fa5b5bebe86283859d73a41f62d8a"
  },
  {
    "url": "assets/js/24.64442342.js",
    "revision": "038686ec38f754d7ae8e41bb3e899413"
  },
  {
    "url": "assets/js/25.9684cdac.js",
    "revision": "a10faba6fdc62c9b06b25867dd9f5cf7"
  },
  {
    "url": "assets/js/26.ea9ca782.js",
    "revision": "0ee970a4c14ebd17dac535824bd421cb"
  },
  {
    "url": "assets/js/27.0a7b9cfb.js",
    "revision": "77c2ae93a7d6b2e4f78576fdeb37a767"
  },
  {
    "url": "assets/js/28.b03a97f1.js",
    "revision": "6fddf7c1a66aed8be66fa3d1fc52d621"
  },
  {
    "url": "assets/js/29.99373efc.js",
    "revision": "500921484db32a1041a34c68406e8416"
  },
  {
    "url": "assets/js/3.59f169ac.js",
    "revision": "05f627975ab2af5ee791cc2c2c038220"
  },
  {
    "url": "assets/js/30.123ee477.js",
    "revision": "b0ab9c2fa194aa7db03a31245788b8ab"
  },
  {
    "url": "assets/js/31.03d42f65.js",
    "revision": "b34efc10474b27f7cece0f2d1e7a061f"
  },
  {
    "url": "assets/js/32.cbfcc94c.js",
    "revision": "90e6ae4c7a3f4324383472f61ba9dca6"
  },
  {
    "url": "assets/js/33.f1a4bc90.js",
    "revision": "f83f5dcec1eb83e43459ceaa7b090b75"
  },
  {
    "url": "assets/js/34.9ad17340.js",
    "revision": "6c0468bac83270d2a5afae5f46f8022f"
  },
  {
    "url": "assets/js/35.a418ee7d.js",
    "revision": "58d0253a91c3c4f05f180cb6c8358f16"
  },
  {
    "url": "assets/js/4.213970f6.js",
    "revision": "e8a6fb0e0b5429a464eb8703cb5dbeab"
  },
  {
    "url": "assets/js/5.ddec95a5.js",
    "revision": "fa637cc28bf4b381b181a84ee8f66731"
  },
  {
    "url": "assets/js/6.2162f214.js",
    "revision": "5f47fd9a9b682bc936853cb3b852ff4a"
  },
  {
    "url": "assets/js/7.e1bc519e.js",
    "revision": "dcfd0e1d6f32b82dbdae0408357d7f6a"
  },
  {
    "url": "assets/js/8.583c1358.js",
    "revision": "220c7c71bbf415b1c5147c59344c2870"
  },
  {
    "url": "assets/js/9.e7e51d1e.js",
    "revision": "2085e6e3be9d97189bf1f229fb5e843b"
  },
  {
    "url": "assets/js/app.cb2bc902.js",
    "revision": "0ebfaf748b79ccf6f08513e35b8cb5c1"
  },
  {
    "url": "assets/js/vendors~flowchart.9a672344.js",
    "revision": "c4fc00e394f448fb76ad1a676dbe7dec"
  },
  {
    "url": "cli_json.gif",
    "revision": "a3de871259c950023163f1aca3fa7b80"
  },
  {
    "url": "cli_tests.gif",
    "revision": "2c01986af5c95d89f02b19c49f34ac28"
  },
  {
    "url": "cli.gif",
    "revision": "f9a7e7344f8a7f9df211a79736c3b84d"
  },
  {
    "url": "config/index.html",
    "revision": "ff6281ec8112bff7dc3640ad2dc56613"
  },
  {
    "url": "favicon.png",
    "revision": "10baeb8b09145b70a6ea944d431cd971"
  },
  {
    "url": "github.svg",
    "revision": "5a14e36c8b0b5e4ba427f47fca304477"
  },
  {
    "url": "guide/badges.html",
    "revision": "abbdaed36413d929f0e6e136d9344537"
  },
  {
    "url": "guide/comment.html",
    "revision": "1f85e821de159b918eabd35e266d2e23"
  },
  {
    "url": "guide/environments.html",
    "revision": "c29f080ba27ebe0f2db88eedcf767229"
  },
  {
    "url": "guide/examples_arbeitsagentur.html",
    "revision": "4fa6f41a942c54bbb2d59a678d5a721b"
  },
  {
    "url": "guide/examples_github.html",
    "revision": "7b5cc7a5e9fe697a4cfe137cbe2f291a"
  },
  {
    "url": "guide/examples_grpcbin.html",
    "revision": "97fa43a1c5bb65f4ea418de42aca1070"
  },
  {
    "url": "guide/examples_httpbin.html",
    "revision": "db5c6e0f40d46c26da39c7173dd4e88b"
  },
  {
    "url": "guide/examples_learnwebservices.html",
    "revision": "3374b8be0e79edccbcf4ee9de6763777"
  },
  {
    "url": "guide/examples_spacex.html",
    "revision": "e5afdd6fb31b7e6b3ac569d042a7a11e"
  },
  {
    "url": "guide/examples_springboot.html",
    "revision": "7fae5f247307a93244a4b6f614f6dbb5"
  },
  {
    "url": "guide/examples.html",
    "revision": "e3fd17596b5c5939ed2ae1752968a5e4"
  },
  {
    "url": "guide/hooks.html",
    "revision": "0e85a5d391dbe498969e7b2c23b67806"
  },
  {
    "url": "guide/index.html",
    "revision": "8ec600d7dcf3f14c033d3da6dfdb3e01"
  },
  {
    "url": "guide/installation_cli.html",
    "revision": "8f6e69cd539ca049a7c95f4d248eb880"
  },
  {
    "url": "guide/installation_httpbook.html",
    "revision": "f75f6960f3c2f5d537195e10942c748a"
  },
  {
    "url": "guide/installation_vscode.html",
    "revision": "b9684ad52448e21c94ed0a6a05040d0f"
  },
  {
    "url": "guide/installation.html",
    "revision": "e8a234a71ceeee0fe2e5e1b0e622c22c"
  },
  {
    "url": "guide/metaData.html",
    "revision": "3b7c5addb77e8932b324d5ddc30b5ba1"
  },
  {
    "url": "guide/request.html",
    "revision": "2a03e024a13aa12eeb1e4f9e8ffe8ac9"
  },
  {
    "url": "guide/scripting.html",
    "revision": "463aaa620aa6a6beb531810b401d81a2"
  },
  {
    "url": "guide/troubleshooting.html",
    "revision": "ea19e4b761d88a3eb4aadc098fce9951"
  },
  {
    "url": "guide/variables.html",
    "revision": "fa87f49f0a296291344f2ee54c8ebbb5"
  },
  {
    "url": "httpbook_oauth2.gif",
    "revision": "dd697a5391419b9f2e89c2234bf26675"
  },
  {
    "url": "httpbook.gif",
    "revision": "691a2c43f4477c532a8ea9495e8cb4c5"
  },
  {
    "url": "httpyac_site.png",
    "revision": "2f616c453ec80368d909e1d6f75c5947"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "f6759f335ab2092432fd8cd01d2f6a3e"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "dc8f87c85f88f50814a6d0b1606e9384"
  },
  {
    "url": "icons/apple-touch-icon-120x120.png",
    "revision": "0af3044c7a4795be761d65b816f2db99"
  },
  {
    "url": "icons/apple-touch-icon-152x152.png",
    "revision": "99a152bdd1f57a0382b3a96c77b85795"
  },
  {
    "url": "icons/apple-touch-icon-180x180.png",
    "revision": "64980f3c9bf19cb89293eb93f90f6673"
  },
  {
    "url": "icons/apple-touch-icon-60x60.png",
    "revision": "572ef62b906acd724b5626564031bd99"
  },
  {
    "url": "icons/apple-touch-icon-76x76.png",
    "revision": "f8816eb502c04707b21dca0d5d81555e"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "64980f3c9bf19cb89293eb93f90f6673"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "8a174dba12e38e6d074fb86fb91c51af"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "6dcddf9a8c13958f3d5aaa88c28530ef"
  },
  {
    "url": "icons/msapplication-icon-144x144.png",
    "revision": "22db38e6c35d3776510dc3187132afc1"
  },
  {
    "url": "icons/mstile-150x150.png",
    "revision": "c9c2b5d6109cd3e07f092887243bc60a"
  },
  {
    "url": "index.html",
    "revision": "6f306acede5141ea43f3ab200877c992"
  },
  {
    "url": "plugins/index.html",
    "revision": "ddf57c4784d8b22fc766ef3c4a3a6b09"
  },
  {
    "url": "plugins/plugin-api.html",
    "revision": "e986e9683aa5b53ea085a718fc838d6f"
  },
  {
    "url": "vscode_preview.gif",
    "revision": "47e10281068560c59dc9bca29e3c4208"
  },
  {
    "url": "vscode.gif",
    "revision": "c54c0795fb573ef81cd9c456e5b7d4f0"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
