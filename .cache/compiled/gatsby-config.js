!function(e,t,n,o,r){var i="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},a="function"==typeof i[o]&&i[o],s=a.cache||{},l="undefined"!=typeof module&&"function"==typeof module.require&&module.require.bind(module);function u(t,n){if(!s[t]){if(!e[t]){var r="function"==typeof i[o]&&i[o];if(!n&&r)return r(t,!0);if(a)return a(t,!0);if(l&&"string"==typeof t)return l(t);var f=new Error("Cannot find module '"+t+"'");throw f.code="MODULE_NOT_FOUND",f}d.resolve=function(n){var o=e[t][1][n];return null!=o?o:n},d.cache={};var c=s[t]=new u.Module(t);e[t][0].call(c.exports,d,c,c.exports,this)}return s[t].exports;function d(e){var t=d.resolve(e);return!1===t?{}:u(t)}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=s,u.parent=a,u.register=function(t,n){e[t]=[function(e,t){t.exports=n},{}]},Object.defineProperty(u,"root",{get:function(){return i[o]}}),i[o]=u;for(var f=0;f<t.length;f++)u(t[f]);if(n){var c=u(n);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd&&define((function(){return c}))}}({itce5:[function(e,t,n){e("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(n);e("dotenv/config");var o=e("4c7840ecb81029f2").resolve(__dirname,"../..");const r={siteMetadata:{siteTitle:"Bank5D",siteTitleAlt:"Bank5D",siteHeadline:"Bank5D",siteUrl:"https://www.bank5d.com",siteDescription:"A better way, a better bank, a better today",siteImage:"/banner.jpg",siteLanguage:"en",author:"@lekoarts_de"},trailingSlash:"always",plugins:[{resolve:"@lekoarts/gatsby-theme-cara",options:{}},{resolve:"gatsby-plugin-manifest",options:{name:"Bank5D",short_name:"Bank5D",description:"A better way, a better bank, a better today",start_url:"/",background_color:"#141821",display:"standalone",icons:[{src:"/android-chrome-192x192.png",sizes:"192x192",type:"image/png"},{src:"/android-chrome-512x512.png",sizes:"512x512",type:"image/png"}]}},process.env.ANALYSE_BUNDLE&&{resolve:"gatsby-plugin-webpack-statoscope",options:{saveReportTo:`${o}/public/.statoscope/_bundle.html`,saveStatsTo:`${o}/public/.statoscope/_stats.json`,open:!1}}].filter(Boolean)};n.default=r},{"4c7840ecb81029f2":"path","dotenv/config":"dotenv/config",path:"path","@parcel/transformer-js/src/esmodule-helpers.js":"kmjAC"}],kmjAC:[function(e,t,n){n.interopDefault=function(e){return e&&e.__esModule?e:{default:e}},n.defineInteropFlag=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.exportAll=function(e,t){return Object.keys(e).forEach((function(n){"default"===n||"__esModule"===n||t.hasOwnProperty(n)||Object.defineProperty(t,n,{enumerable:!0,get:function(){return e[n]}})})),t},n.export=function(e,t,n){Object.defineProperty(e,t,{enumerable:!0,get:n})}},{}]},["itce5"],"itce5","parcelRequirebda2");