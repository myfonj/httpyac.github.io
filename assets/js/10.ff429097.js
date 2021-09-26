(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{405:function(t,e,s){"use strict";s.r(e);var a=s(15),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"configuration-reference"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#configuration-reference"}},[t._v("#")]),t._v(" Configuration Reference")]),t._v(" "),s("p",[t._v("Basic settings for all requests, logging and general application behavior can be configured via application argument (CLI arguments or VS Code settings). It is also possible to store these centrally in the project root  in an "),s("code",[t._v("httpyac.config.js")]),t._v(" file, which is observed by both CLI and VS Code Extension.")]),t._v(" "),s("h2",{attrs:{id:"project-root"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#project-root"}},[t._v("#")]),t._v(" Project Root")]),t._v(" "),s("p",[t._v("The project root directory is determined by finding closest directory depending on the current file with one of the following files:")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("package.json")])]),t._v(" "),s("li",[s("code",[t._v("httpyac.config.js")])]),t._v(" "),s("li",[s("code",[t._v(".httpyac.js")])]),t._v(" "),s("li",[s("code",[t._v(".httpyac.json")])]),t._v(" "),s("li",[s("code",[t._v("env")]),t._v(" directory")])]),t._v(" "),s("p",[t._v("If no suitable folder can be determined, the default settings are used.")]),t._v(" "),s("h2",{attrs:{id:"httpyac-config-js"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#httpyac-config-js"}},[t._v("#")]),t._v(" httpyac.config.js")]),t._v(" "),s("p",[s("code",[t._v("httpyac.config.js")]),t._v(" (or "),s("code",[t._v(".httpyac.js")]),t._v(", "),s("code",[t._v(".httpyac.json")]),t._v(") is an optional config file that will be automatically loaded by httpYac if it's present in your project root (next to "),s("code",[t._v("package.json")]),t._v("). You can also use the "),s("code",[t._v("httpyac")]),t._v(" field in "),s("code",[t._v("package.json")]),t._v(", but do note in that case you will be limited to JSON-compatible values only.")]),t._v(" "),s("p",[t._v("The file should export an object containing options:")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// httpyac.config.js")]),t._v("\nmodule"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// options...")]),t._v("\n  log"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    level"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" models"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("LogLevel"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("warn"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    supportAnsiColors"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  cookieJarEnabled"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  envDirName"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'env'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("The content of the httpyac.config.js file should correspond to the "),s("a",{attrs:{href:"https://github.com/AnWeber/httpyac/blob/main/src/models/environmentConfig.ts",target:"_blank",rel:"noopener noreferrer"}},[t._v("interface "),s("code",[t._v("environmentConfig")]),s("OutboundLink")],1),t._v(".")]),t._v(" "),s("h3",{attrs:{id:"log-level"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#log-level"}},[t._v("#")]),t._v(" log.level")]),t._v(" "),s("ul",[s("li",[t._v("Type: "),s("code",[t._v("number")])]),t._v(" "),s("li",[t._v("Default: "),s("code",[t._v("warn")])])]),t._v(" "),s("p",[s("a",{attrs:{href:"https://github.com/AnWeber/httpyac/blob/main/src/models/logHandler.ts#L4-L11",target:"_blank",rel:"noopener noreferrer"}},[t._v("log level"),s("OutboundLink")],1),t._v(" of outputs.")]),t._v(" "),s("div",{staticClass:"language-ts extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ts"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("enum")]),t._v(" LogLevel "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  trace "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  debug "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  warn "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  info "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  error "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  none "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h3",{attrs:{id:"log-supportansicolors"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#log-supportansicolors"}},[t._v("#")]),t._v(" log.supportAnsiColors")]),t._v(" "),s("ul",[s("li",[t._v("Type: "),s("code",[t._v("boolean")])]),t._v(" "),s("li",[t._v("Default: "),s("code",[t._v("true")])])]),t._v(" "),s("p",[t._v("enable ansi color support (using "),s("a",{attrs:{href:"https://github.com/chalk/chalk",target:"_blank",rel:"noopener noreferrer"}},[t._v("chalk"),s("OutboundLink")],1),t._v(")")]),t._v(" "),s("h3",{attrs:{id:"envdirname"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#envdirname"}},[t._v("#")]),t._v(" envDirName")]),t._v(" "),s("ul",[s("li",[t._v("Type: "),s("code",[t._v("string")])]),t._v(" "),s("li",[t._v("Default: "),s("code",[t._v("'env'")])])]),t._v(" "),s("p",[t._v("relative or absolute path to env dir")]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),s("p",[t._v("A changed value is not used in the Project Root determination")])]),t._v(" "),s("h3",{attrs:{id:"environments"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#environments"}},[t._v("#")]),t._v(" environments")]),t._v(" "),s("ul",[s("li",[t._v("Type: "),s("code",[t._v("object")])]),t._v(" "),s("li",[t._v("Default: "),s("code",[t._v("undefined")])])]),t._v(" "),s("p",[t._v("This setting is used for environment detection using "),s("RouterLink",{attrs:{to:"/guide/environments.html#json"}},[t._v("JSON")]),t._v(". Each key of first level of the object is used as environment. Value of the Object is used as Variables.")],1),t._v(" "),s("h3",{attrs:{id:"request"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#request"}},[t._v("#")]),t._v(" request")]),t._v(" "),s("ul",[s("li",[t._v("Type: "),s("code",[t._v("Object")])]),t._v(" "),s("li",[t._v("Default: "),s("code",[t._v("undefined")])])]),t._v(" "),s("p",[t._v("default configuration for each http request. httpYac uses "),s("a",{attrs:{href:"https://github.com/sindresorhus/got",target:"_blank",rel:"noopener noreferrer"}},[t._v("got"),s("OutboundLink")],1),t._v(" as Http Request Library. "),s("a",{attrs:{href:"https://github.com/sindresorhus/got/blob/main/documentation/2-options.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("Here"),s("OutboundLink")],1),t._v(" all options of "),s("a",{attrs:{href:"https://github.com/sindresorhus/got",target:"_blank",rel:"noopener noreferrer"}},[t._v("got"),s("OutboundLink")],1),t._v(" are described.")]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"request"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"https"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"rejectUnauthorized"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h3",{attrs:{id:"proxy"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#proxy"}},[t._v("#")]),t._v(" proxy")]),t._v(" "),s("ul",[s("li",[t._v("Type: "),s("code",[t._v("string")])]),t._v(" "),s("li",[t._v("Default: "),s("code",[t._v("undefined")])])]),t._v(" "),s("p",[t._v("Proxy url for which an HttpProxyAgent is created")]),t._v(" "),s("h3",{attrs:{id:"requestbodyinjectvariablesextensions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#requestbodyinjectvariablesextensions"}},[t._v("#")]),t._v(" requestBodyInjectVariablesExtensions")]),t._v(" "),s("ul",[s("li",[t._v("Type: "),s("code",[t._v("Array<String>")])]),t._v(" "),s("li",[t._v("Default: "),s("code",[t._v("undefined")])])]),t._v(" "),s("p",[t._v("List of file extensions for which "),s("a",{attrs:{href:"/guide/request/request-body"}},[t._v("request body variable replacement")]),t._v(" is always activated automatically")]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),s("p",[t._v("This setting was introduced because of better compatibility with Intellij. It is recommended to specify it explicitly per file, otherwise files will be loaded into memory unnecessarily.")])]),t._v(" "),s("h3",{attrs:{id:"clientcertificates"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#clientcertificates"}},[t._v("#")]),t._v(" clientCertificates")]),t._v(" "),s("ul",[s("li",[t._v("Type: "),s("code",[t._v("Object")])]),t._v(" "),s("li",[t._v("Default: "),s("code",[t._v("undefined")])])]),t._v(" "),s("p",[s("a",{attrs:{href:"https://github.com/AnWeber/httpyac/blob/main/src/models/clientCertifcateOptions.ts",target:"_blank",rel:"noopener noreferrer"}},[t._v("Object"),s("OutboundLink")],1),t._v(" with all client certifcates. Each key is interpreted as host. When a call is made to this host, the certificate is automatically appended to the request.")]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"clientCertificates"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"localhost:8081"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"cert"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/Users/demo/Certificates/client.crt"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"key"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/Users/demo/Keys/client.key"')]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"example.com"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"cert"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/Users/demo/Certificates/client.crt"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"key"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/Users/demo/Keys/client.key"')]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h3",{attrs:{id:"defaultheaders"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#defaultheaders"}},[t._v("#")]),t._v(" defaultHeaders")]),t._v(" "),s("ul",[s("li",[t._v("Type: "),s("code",[t._v("Object")])]),t._v(" "),s("li",[t._v("Default: "),s("code",[t._v("undefined")])])]),t._v(" "),s("p",[t._v("Object with default headers used for every request.")]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"defaultHeaders"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"Authorization"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Bearer {{token}}"')]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("Variable Substitution is used for this headers")])]),t._v(" "),s("h3",{attrs:{id:"cookiejarenabled"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cookiejarenabled"}},[t._v("#")]),t._v(" cookieJarEnabled")]),t._v(" "),s("ul",[s("li",[t._v("Type: "),s("code",[t._v("boolean")])]),t._v(" "),s("li",[t._v("Default: "),s("code",[t._v("true")])])]),t._v(" "),s("p",[t._v("Enable cookieJar support for every request")]),t._v(" "),s("h3",{attrs:{id:"configurehooks"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#configurehooks"}},[t._v("#")]),t._v(" configureHooks")]),t._v(" "),s("ul",[s("li",[t._v("Type: "),s("code",[t._v("Function")])])]),t._v(" "),s("p",[t._v("By means of the function "),s("a",{attrs:{href:"https://github.com/AnWeber/httpyac/blob/main/src/models/environmentConfig.ts#L35",target:"_blank",rel:"noopener noreferrer"}},[s("code",[t._v("configureHooks")]),s("OutboundLink")],1),t._v(" the "),s("RouterLink",{attrs:{to:"/plugins/plugin-api/"}},[t._v("plugin api")]),t._v(" can be accessed easily. So without creating a plugin, the same interface can be used to make further adjustments to httpYac.")],1),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("module"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("configureHooks")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("api")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\tapi"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("hooks"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("responseLogging"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("addHook")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'removeSensitiveData'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("response")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("response"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("request"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\t\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("delete")]),t._v(" response"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("request"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("headers"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'authorization'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h3",{attrs:{id:"plugins"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#plugins"}},[t._v("#")]),t._v(" plugins")]),t._v(" "),s("ul",[s("li",[t._v("Type: "),s("code",[t._v("Object")])]),t._v(" "),s("li",[t._v("Default: "),s("code",[t._v("undefined")])])]),t._v(" "),s("p",[t._v("This is an object that doesn't go through any schema validation, so it can be used to pass arbitrary options to 3rd party plugins.")])])}),[],!1,null,null,null);e.default=n.exports}}]);