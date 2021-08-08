(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{419:function(e,t,r){"use strict";r.r(t);var s=r(15),a=Object(s.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"plugin-api"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#plugin-api"}},[e._v("#")]),e._v(" Plugin API")]),e._v(" "),r("p",[e._v("By means of the "),r("a",{attrs:{href:"https://github.com/AnWeber/httpyac/blob/main/src/models/environmentConfig.ts#L46-L57",target:"_blank",rel:"noopener noreferrer"}},[e._v("plugin api"),r("OutboundLink")],1),e._v(" it is possible to register hooks at important program points of httpYac.")]),e._v(" "),r("div",{staticClass:"language-ts extra-class"},[r("pre",{pre:!0,attrs:{class:"language-ts"}},[r("code",[r("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("export")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("interface")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("HttpyacHooksApi")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),r("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("readonly")]),e._v(" version"),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token builtin"}},[e._v("string")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n  "),r("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("readonly")]),e._v(" rootDir"),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("?")]),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" PathLike"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n  "),r("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("readonly")]),e._v(" httpFile"),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" Readonly"),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("HttpFile"),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n  "),r("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("readonly")]),e._v(" config"),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" EnvironmentConfig"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n  "),r("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("readonly")]),e._v(" hooks"),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" HttpFileHooks"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n  "),r("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("readonly")]),e._v(" log"),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" LogHandler"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n  "),r("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("readonly")]),e._v(" fileProvider"),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" FileProvider"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),r("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("readonly")]),e._v(" sessionStore"),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" SessionStore"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),r("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("readonly")]),e._v(" userInteractionProvider"),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" UserInteractonProvider"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n  "),r("span",{pre:!0,attrs:{class:"token function"}},[e._v("getHookCancel")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token builtin"}},[e._v("symbol")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),r("h2",{attrs:{id:"version"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#version"}},[e._v("#")]),e._v(" version")]),e._v(" "),r("ul",[r("li",[e._v("Type: "),r("code",[e._v("string")])])]),e._v(" "),r("p",[e._v("The version string for the httpYac api version that is loading the plugin.")]),e._v(" "),r("h2",{attrs:{id:"rootdir"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#rootdir"}},[e._v("#")]),e._v(" rootDir")]),e._v(" "),r("ul",[r("li",[e._v("Type: "),r("code",[e._v("string")])])]),e._v(" "),r("p",[e._v("The project root directory of current http File.")]),e._v(" "),r("h2",{attrs:{id:"httpfile"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#httpfile"}},[e._v("#")]),e._v(" httpFile")]),e._v(" "),r("ul",[r("li",[e._v("Type: "),r("a",{attrs:{href:"https://github.com/AnWeber/httpyac/blob/main/src/models/httpFile.ts#L7",target:"_blank",rel:"noopener noreferrer"}},[r("code",[e._v("HttpFile")]),r("OutboundLink")],1)])]),e._v(" "),r("p",[e._v("http file prepared for parsing, which has no regions yet.")]),e._v(" "),r("h2",{attrs:{id:"config"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#config"}},[e._v("#")]),e._v(" config")]),e._v(" "),r("ul",[r("li",[e._v("Type: "),r("a",{attrs:{href:"https://github.com/AnWeber/httpyac/blob/main/src/models/environmentConfig.ts#L7",target:"_blank",rel:"noopener noreferrer"}},[r("code",[e._v("EnvironmentConfig")]),r("OutboundLink")],1)])]),e._v(" "),r("p",[e._v("Environment configuration determined for the current execution")]),e._v(" "),r("h2",{attrs:{id:"log"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#log"}},[e._v("#")]),e._v(" log")]),e._v(" "),r("ul",[r("li",[e._v("Type: "),r("a",{attrs:{href:"https://github.com/AnWeber/httpyac/blob/main/src/models/logHandler.ts#L13",target:"_blank",rel:"noopener noreferrer"}},[r("code",[e._v("LogHander")]),r("OutboundLink")],1)])]),e._v(" "),r("p",[e._v("The log module provides a simple debugging console. The output channel is redirected per use case")]),e._v(" "),r("h2",{attrs:{id:"fileprovider"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#fileprovider"}},[e._v("#")]),e._v(" fileProvider")]),e._v(" "),r("ul",[r("li",[e._v("Type: "),r("a",{attrs:{href:"https://github.com/AnWeber/httpyac/blob/main/src/io/fileProvider.ts#L7-L18",target:"_blank",rel:"noopener noreferrer"}},[r("code",[e._v("FileProvider")]),r("OutboundLink")],1)])]),e._v(" "),r("p",[e._v("Data access layerfor file access")]),e._v(" "),r("div",{staticClass:"custom-block warning"},[r("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),r("p",[e._v("The VS Code extension also supports loading "),r("a",{attrs:{href:"https://code.visualstudio.com/api/extension-guides/virtual-documents",target:"_blank",rel:"noopener noreferrer"}},[e._v("virtual documents"),r("OutboundLink")],1),e._v(". Direct access via "),r("code",[e._v("fs")]),e._v(" is not always possible.")])]),e._v(" "),r("h2",{attrs:{id:"sessionstore"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#sessionstore"}},[e._v("#")]),e._v(" sessionStore")]),e._v(" "),r("ul",[r("li",[e._v("Type: "),r("a",{attrs:{href:"https://github.com/AnWeber/httpyac/blob/main/src/models/userSession.ts#L8",target:"_blank",rel:"noopener noreferrer"}},[r("code",[e._v("UserSessionStore")]),r("OutboundLink")],1)])]),e._v(" "),r("p",[e._v("Service to store user sessions. The user has the possibility to delete them manually")]),e._v(" "),r("h2",{attrs:{id:"userinteractionprovider"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#userinteractionprovider"}},[e._v("#")]),e._v(" userInteractionProvider")]),e._v(" "),r("ul",[r("li",[e._v("Type: "),r("a",{attrs:{href:"https://github.com/AnWeber/httpyac/blob/main/src/models/environmentConfig.ts#L38",target:"_blank",rel:"noopener noreferrer"}},[r("code",[e._v("UserInteractionProvider")]),r("OutboundLink")],1)])]),e._v(" "),r("p",[e._v("enables interaction with the user")]),e._v(" "),r("h2",{attrs:{id:"gethookcancel"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#gethookcancel"}},[e._v("#")]),e._v(" getHookCancel")]),e._v(" "),r("ul",[r("li",[e._v("Type: "),r("a",{attrs:{href:"https://github.com/AnWeber/httpyac/blob/main/src/models/hook.ts#L9",target:"_blank",rel:"noopener noreferrer"}},[r("code",[e._v("HookCancel Symbol")]),r("OutboundLink")],1)])]),e._v(" "),r("p",[e._v("function to retrieve javascript symbol, which is used to cancel execution of hooks")]),e._v(" "),r("h2",{attrs:{id:"hooks"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#hooks"}},[e._v("#")]),e._v(" hooks")]),e._v(" "),r("ul",[r("li",[e._v("Type: "),r("a",{attrs:{href:"https://github.com/AnWeber/httpyac/blob/main/src/models/httpFileHooks.ts",target:"_blank",rel:"noopener noreferrer"}},[e._v("HttpFileHooks"),r("OutboundLink")],1)])]),e._v(" "),r("p",[e._v("List of hooks for which own program logic can be registered")]),e._v(" "),r("div",{staticClass:"language-ts extra-class"},[r("pre",{pre:!0,attrs:{class:"language-ts"}},[r("code",[r("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("export")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("interface")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("HttpFileHooks")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),r("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("readonly")]),e._v(" parse"),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" ParseHook"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),r("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("readonly")]),e._v(" parseAfterRegion"),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" ParseAfterRegionHook"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),r("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("readonly")]),e._v(" replaceVariable"),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" ReplaceVariableHook"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n  "),r("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("readonly")]),e._v(" provideEnvironments"),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" ProvideEnvironmentsHook"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n  "),r("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("readonly")]),e._v(" provideVariables"),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" ProvideVariablesHook"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\n\n  "),r("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("readonly")]),e._v(" beforeRequest"),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" BeforeRequestHook"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n  "),r("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("readonly")]),e._v(" afterRequest"),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" AfterRequestHook"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),r("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("readonly")]),e._v(" responseLogging"),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" ResponseLoggingHook"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n\n")])])]),r("h3",{attrs:{id:"parsehook"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#parsehook"}},[e._v("#")]),e._v(" ParseHook")]),e._v(" "),r("ul",[r("li",[r("p",[e._v("Type: "),r("code",[e._v("function")])])]),e._v(" "),r("li",[r("p",[e._v("Arguments:")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://github.com/AnWeber/httpyac/blob/main/src/models/parserContext.ts#L9",target:"_blank",rel:"noopener noreferrer"}},[r("code",[e._v("getHttpLineGenerator")]),r("OutboundLink")],1),e._v(" Generator to read lines of file")]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/AnWeber/httpyac/blob/main/src/models/parserContext.ts#L12",target:"_blank",rel:"noopener noreferrer"}},[r("code",[e._v("ParserContext")]),r("OutboundLink")],1),e._v(" context of file parsing")])])]),e._v(" "),r("li",[r("p",[e._v("Return: "),r("a",{attrs:{href:"https://github.com/AnWeber/httpyac/blob/main/src/models/httpRegionParserResult.ts#L8",target:"_blank",rel:"noopener noreferrer"}},[r("code",[e._v("HttpRegionParserResult")]),r("OutboundLink")],1)])])]),e._v(" "),r("p",[e._v("hook for parsing http file. The goal is to determine and register the necessary actions for this line.")]),e._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),r("p",[e._v("As soon as a hook determines a result, the processing for this row is aborted and the subsequent hooks are not processed (BailHook).")])]),e._v(" "),r("div",{staticClass:"custom-block warning"},[r("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),r("p",[e._v("Hook "),r("code",[e._v("requestBody")]),e._v(" always returns a result. It is necessary to register the own parser before this one")])]),e._v(" "),r("h3",{attrs:{id:"parseafterregionhook"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#parseafterregionhook"}},[e._v("#")]),e._v(" ParseAfterRegionHook")]),e._v(" "),r("p",[e._v("hook after identifing new http region")]),e._v(" "),r("h3",{attrs:{id:"replacevariablehook"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#replacevariablehook"}},[e._v("#")]),e._v(" ReplaceVariableHook")]),e._v(" "),r("p",[e._v("hook to replace variable in request line, header or request body")]),e._v(" "),r("h3",{attrs:{id:"providevariableshook"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#providevariableshook"}},[e._v("#")]),e._v(" ProvideVariablesHook")]),e._v(" "),r("p",[e._v("hook to provide custom variables")]),e._v(" "),r("h3",{attrs:{id:"provideenvironmentshook"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#provideenvironmentshook"}},[e._v("#")]),e._v(" ProvideEnvironmentsHook")]),e._v(" "),r("p",[e._v("hook to provide environments for custom variables")]),e._v(" "),r("h3",{attrs:{id:"beforerequesthook"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#beforerequesthook"}},[e._v("#")]),e._v(" BeforeRequestHook")]),e._v(" "),r("p",[e._v("hook called before every request call")]),e._v(" "),r("h3",{attrs:{id:"afterrequesthook"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#afterrequesthook"}},[e._v("#")]),e._v(" AfterRequestHook")]),e._v(" "),r("p",[e._v("hook called after every request call")]),e._v(" "),r("h3",{attrs:{id:"responselogginghook"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#responselogginghook"}},[e._v("#")]),e._v(" ResponseLoggingHook")]),e._v(" "),r("p",[e._v("hook called for every logging of a response.")])])}),[],!1,null,null,null);t.default=a.exports}}]);