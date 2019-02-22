(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{308:function(t,s,a){"use strict";a.r(s);var n=a(43),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"tsconfig-配置技巧"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tsconfig-配置技巧","aria-hidden":"true"}},[t._v("#")]),t._v(" tsconfig 配置技巧")]),t._v(" "),a("h2",{attrs:{id:"路径别名——附加模块路径解析"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#路径别名——附加模块路径解析","aria-hidden":"true"}},[t._v("#")]),t._v(" 路径别名——附加模块路径解析")]),t._v(" "),a("p",[t._v("未使用别名")]),t._v(" "),a("pre",[a("code",[t._v("`import {user} from '../../app/model/user';`\n")])]),t._v(" "),a("p",[t._v("使用别名后")]),t._v(" "),a("pre",[a("code",[t._v("`import {user} from 'model/user';`\n")])]),t._v(" "),a("p",[a("strong",[t._v("tsconfig.json")])]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[t._v("\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"compilerOptions"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"baseUrl"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"."')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" // baseUrl 必需配置\n\t  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"paths"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"model/*"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"app/model/*"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"@model"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"app/model"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"@/*"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"app/*"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\t  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[a("code",[t._v("ts-node")]),t._v(" 执行或 "),a("code",[t._v("ts")]),t._v(" 编译成 "),a("code",[t._v("js")]),t._v(" 时， 路径别名也是原样输入的，因此会产生"),a("code",[t._v("nodejs")]),t._v("运行时找不到模块的问题.")]),t._v(" "),a("p",[t._v("解决办法是使用 "),a("a",{attrs:{href:"https://github.com/dividab/tsconfig-paths",target:"_blank",rel:"noopener noreferrer"}},[t._v("tsconfig-paths"),a("OutboundLink")],1),t._v(" 模块, 这个模块可以让"),a("code",[t._v("ts-node")]),t._v(" 或 "),a("code",[t._v("nodejs")]),t._v(" 在运行时自动转换路径别名为真实路径")])]),t._v(" "),a("h1",{attrs:{id:"类型映射"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#类型映射","aria-hidden":"true"}},[t._v("#")]),t._v(" 类型映射")]),t._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n   * Powerful Partial, Support adding ? modifier to a mapped property in deep level\n   * @example\n   * import { PowerPartial, EggAppConfig } from 'egg';\n   *\n   * // { view: { defaultEngines: string } } => { view?: { defaultEngines?: string } }\n   * type EggConfig = PowerPartial<EggAppConfig>\n   */")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" PowerPartial"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("T")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("U")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" keyof "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("T")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("T")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("U")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("object")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" PowerPartial"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("T")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("U")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("T")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("U")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("nuxt2")]),t._v(" "),a("p",[t._v("consola/webpackbar")]),t._v(" "),a("p",[t._v("优化：")]),t._v(" "),a("p",[t._v("code splitting\nresource hint\ncritical css")]),t._v(" "),a("p",[t._v("扩展性：\nmodule\nhooks\nrequire('nuxt')")]),t._v(" "),a("p",[t._v("modern mode 现代模式")]),t._v(" "),a("p",[t._v("remove polyfill to target evergreen browsers")]),t._v(" "),a("p",[t._v("npx nuxt build --modern")]),t._v(" "),a("ol",[a("li",[t._v("后台接口出现异常必须打印信息")]),t._v(" "),a("li",[t._v("为了减少减少线上排查问题的干扰信息，前端必须做数据较验，越严格越好")])]),t._v(" "),a("p",[t._v("接口异常总结")]),t._v(" "),a("ol",[a("li",[t._v("参数错误")]),t._v(" "),a("li",[t._v("语法错误")]),t._v(" "),a("li",[t._v("网络异常 （微服务相互调用）")]),t._v(" "),a("li",[t._v("内存益出")]),t._v(" "),a("li",[t._v("cpu负载过高")]),t._v(" "),a("li",[t._v("逻辑问题")])])])},[],!1,null,null,null);e.options.__file="tsconfig 配置技巧.md";s.default=e.exports}}]);