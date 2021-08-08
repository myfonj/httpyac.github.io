(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{417:function(t,s,e){"use strict";e.r(s);var a=e(15),n=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"troubleshooting"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#troubleshooting"}},[t._v("#")]),t._v(" Troubleshooting")]),t._v(" "),e("p",[t._v("This document covers some common httpYac issues and how to resolve them. You should always follow these steps before opening a new issue.")]),t._v(" "),e("h2",{attrs:{id:"turn-off-verification-of-self-signed-certificate"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#turn-off-verification-of-self-signed-certificate"}},[t._v("#")]),t._v(" Turn off verification of self-signed certificate")]),t._v(" "),e("p",[t._v("Self-signed certificates are not accepted by Node JS. For this reason, certificate verification must be disabled. For individual cases, the following is an option.")]),t._v(" "),e("div",{staticClass:"language-http extra-class"},[e("div",{staticClass:"highlight-lines"},[e("div",{staticClass:"highlighted"},[t._v(" ")]),e("br"),e("br"),e("br")]),e("pre",{pre:!0,attrs:{class:"language-http"}},[e("code",[t._v("# @no-reject-unauthorized\n\n"),e("span",{pre:!0,attrs:{class:"token request-line"}},[e("span",{pre:!0,attrs:{class:"token method property"}},[t._v("GET")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token request-target url"}},[t._v("https://client.badssl.com/")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token http-version property"}},[t._v("HTTP/1.1")])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token header-name keyword"}},[t._v("X-ClientCert:")]),t._v(" pfx: ../assets/badssl.com-client.p12 passphrase: badssl.com")])])]),e("p",[t._v("It is also possible to disable the check in general in the "),e("a",{attrs:{href:"/config"}},[t._v(".httpyac.js configuration")])]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[t._v("module"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"request"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"rejectUnauthorized"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n     "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);