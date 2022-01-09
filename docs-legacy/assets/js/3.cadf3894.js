(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{322:function(e,t,a){e.exports=a.p+"assets/img/logo.309cefb2.svg"},323:function(e,t,a){e.exports=a.p+"assets/img/screenshot-cli.f77946a9.png"},324:function(e,t,a){e.exports=a.p+"assets/img/screenshot-browser.7265ddd7.png"},328:function(e,t,a){"use strict";a.r(t);var s=a(33),n=Object(s.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"zhlint"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#zhlint"}},[e._v("#")]),e._v(" "),s("img",{staticStyle:{"vertical-align":"middle"},attrs:{src:a(322)}}),e._v(" zhlint")]),e._v(" "),s("p",[e._v("A linting tool for Chinese text content.")]),e._v(" "),s("h2",{attrs:{id:"how-to-install"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#how-to-install"}},[e._v("#")]),e._v(" How to install")]),e._v(" "),s("p",[e._v("You could easily install "),s("code",[e._v("zhlint")]),e._v(" through "),s("code",[e._v("npm")]),e._v(" or "),s("code",[e._v("yarn")]),e._v(":")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# install through npm")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("npm")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" zhlint -g\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# or through yarn")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("yarn")]),e._v(" global "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("add")]),e._v(" zhlint\n")])])]),s("h2",{attrs:{id:"usage"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#usage"}},[e._v("#")]),e._v(" Usage")]),e._v(" "),s("h3",{attrs:{id:"as-cli"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#as-cli"}},[e._v("#")]),e._v(" As CLI")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# glob files, lint them, and print validation report,")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# and exit with code `1` if there is any error found. ")]),e._v("\nzhlint "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("file-pattern"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# glob files and fix their all possilbly found errors.")]),e._v("\nzhlint "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("file-pattern"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" --fix\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# lint the file and output fixed content into another file")]),e._v("\nzhlint "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("input-file-path"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" --output"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("output-file-path"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# print usage info")]),e._v("\nzhlint --help\n")])])]),s("p",[e._v("The validation report might look like this:")]),e._v(" "),s("p",[s("img",{attrs:{src:a(323),alt:""}})]),e._v(" "),s("h3",{attrs:{id:"as-node-js-package"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#as-node-js-package"}},[e._v("#")]),e._v(" As Node.js package")]),e._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("const")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v(" run"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" report "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'zhlint'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("const")]),e._v(" value "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'自动在中文和English之间加入空格'")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("const")]),e._v(" output "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("run")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// print '自动在中文和 English 之间加入空格''")]),e._v("\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("output"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("result"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// print validation report")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("report")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("output"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n")])])]),s("p",[e._v("And the format of validation report is more like this:")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v(":6 - There should be a space between a half-width content and a full-width content\n\n自动在中文和English之间加入空格\n           ^\n"),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v(":13 - There should be a space between a half-width content and a full-width content\n\n自动在中文和English之间加入空格\n                  ^\nInvalid files:\n- foo.md\n\nFound "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("2")]),e._v(" errors.\n")])])]),s("h3",{attrs:{id:"as-a-standalone-package"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#as-a-standalone-package"}},[e._v("#")]),e._v(" As a standalone package")]),e._v(" "),s("p",[e._v("You could find a JavaScript file "),s("code",[e._v("dist/zhlint.js")]),e._v(" as a standalone version. To use it, for example, you can directly add it into your browser as a "),s("code",[e._v("<script>")]),e._v(" tag. Then there would be a global variable "),s("code",[e._v("zhlint")]),e._v(" for you.")]),e._v(" "),s("p",[s("img",{attrs:{src:a(324),alt:""}})]),e._v(" "),s("h4",{attrs:{id:"api"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#api"}},[e._v("#")]),e._v(" API")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("run(str: string, options?: Options): Result")]),e._v(": Lint a certain file.\n"),s("ul",[s("li",[e._v("parameters:\n"),s("ul",[s("li",[s("code",[e._v("str")]),e._v(": The text content you want to lint.")]),e._v(" "),s("li",[s("code",[e._v("options")]),e._v(": Some options for advanced usage.")])])]),e._v(" "),s("li",[e._v("returns:\n"),s("ul",[s("li",[e._v("The result of a single piece of input string. It contains fixed text content as "),s("code",[e._v("value")]),e._v(" and the infor of all "),s("code",[e._v("validations")]),e._v(".")])])])])]),e._v(" "),s("li",[s("code",[e._v("report(results: Result[], logger?: Console): void")]),e._v(": Print out the validation reports for each file.\n"),s("ul",[s("li",[e._v("parameters:\n"),s("ul",[s("li",[s("code",[e._v("results")]),e._v(": An array for all linted results.")]),e._v(" "),s("li",[s("code",[e._v("logger")]),e._v(": The logger instance, by default it's "),s("code",[e._v("console")]),e._v(" in Node.js/browser.")])])])])])]),e._v(" "),s("h4",{attrs:{id:"other-type-defs-and-advanced-usage"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#other-type-defs-and-advanced-usage"}},[e._v("#")]),e._v(" Other type defs and advanced usage")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("Result")]),e._v(": "),s("code",[e._v("{ file?: string, origin: string, result: string, validations: Validation[] }")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("file")]),e._v(": The file name. It's an optional field which is only used in CLI.")]),e._v(" "),s("li",[s("code",[e._v("origin")]),e._v(": the original text content.")]),e._v(" "),s("li",[s("code",[e._v("result")]),e._v(": the finally fixed text content.")]),e._v(" "),s("li",[s("code",[e._v("validations")]),e._v(": All the validation information.")])])]),e._v(" "),s("li",[s("code",[e._v("Validation")]),e._v(": "),s("code",[e._v("{ index: number, length: number, name: string, target: string, message: string }")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("index")]),e._v(": The index of the target token in the input string.")]),e._v(" "),s("li",[s("code",[e._v("length")]),e._v(": The length of the target token in the input string.\n")]),e._v(" "),s("li",[s("code",[e._v("message")]),e._v(": The description of this validation in natural language.")])])]),e._v(" "),s("li",[s("code",[e._v("Options")]),e._v(": "),s("code",[e._v("{ rules?: string[], hyperParse?: string[], ignoredCases?: IgnoredCase[], logger?: Console }")]),e._v(": Customize your own rules and\n"),s("ul",[s("li",[s("code",[e._v("rules")]),e._v(": customize the linting rules by their names, could be "),s("code",[e._v("undefined")]),e._v(" which means just use the default "),s("a",{attrs:{href:"https://github.com/Jinjiang/zhlint/tree/master/src/rules",target:"_blank",rel:"noopener noreferrer"}},[e._v("rules"),s("OutboundLink")],1),e._v(".")]),e._v(" "),s("li",[s("code",[e._v("hyperParse")]),e._v(": customize the hyper parser by their names, could be "),s("code",[e._v("undefined")]),e._v(" which means just use default "),s("a",{attrs:{href:"https://github.com/Jinjiang/zhlint/tree/master/src/parsers/ignore.js",target:"_blank",rel:"noopener noreferrer"}},[e._v("ignored cases parser"),s("OutboundLink")],1),e._v(", "),s("a",{attrs:{href:"https://github.com/Jinjiang/zhlint/tree/master/src/parsers/md.js",target:"_blank",rel:"noopener noreferrer"}},[e._v("Markdown parser"),s("OutboundLink")],1),e._v(" and the "),s("a",{attrs:{href:"https://github.com/Jinjiang/zhlint/tree/master/src/parsers/hexo.js",target:"_blank",rel:"noopener noreferrer"}},[e._v("Hexo tags parser"),s("OutboundLink")],1),e._v(".")]),e._v(" "),s("li",[s("code",[e._v("ignoredCases")]),e._v(": provide exception cases which you would like to skip.")]),e._v(" "),s("li",[s("code",[e._v("logger")]),e._v(": same to the parameter in "),s("code",[e._v("report(...)")]),e._v(".")])])]),e._v(" "),s("li",[s("code",[e._v("IgnoredCase")]),e._v(": "),s("code",[e._v("{ prefix?, textStart, textEnd?, suffix? }")]),e._v(" "),s("ul",[s("li",[e._v("Just follows a certain format inspired from "),s("a",{attrs:{href:"https://github.com/WICG/ScrollToTextFragment",target:"_blank",rel:"noopener noreferrer"}},[e._v("W3C Scroll To Text Fragment Proposal"),s("OutboundLink")],1),e._v(".")])])])]),e._v(" "),s("h2",{attrs:{id:"features"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#features"}},[e._v("#")]),e._v(" Features")]),e._v(" "),s("h3",{attrs:{id:"markdown-syntax-support"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#markdown-syntax-support"}},[e._v("#")]),e._v(" Markdown syntax support")]),e._v(" "),s("p",[e._v("We support lint your text content in Markdown syntax by default. For example:")]),e._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[e._v("run")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'自动在_中文_和**English**之间加入空格'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n")])])]),s("p",[e._v("It will analyse the Markdown syntax first and extract the pure text content and do the lint job. After that the fixed pure text content could be replaced back to the raw Markdown string and returned as the output "),s("code",[e._v("value")]),e._v(" in result.")]),e._v(" "),s("h3",{attrs:{id:"hexo-tags-syntax-support"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#hexo-tags-syntax-support"}},[e._v("#")]),e._v(" Hexo tags syntax support")]),e._v(" "),s("p",[e._v("Specially, we support "),s("a",{attrs:{href:"https://hexo.io/docs/tag-plugins",target:"_blank",rel:"noopener noreferrer"}},[e._v("Hexo tags syntax"),s("OutboundLink")],1),e._v(" just because when we use Hexo to build Vue.js website, the markdown source files more or less include special tags like that so got the unpredictable result.")]),e._v(" "),s("p",[e._v("As a result, we additionally skip the Hexo-style tags by default. For example:")]),e._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[e._v("run")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'现在过滤器只能用在插入文本中 (`{% raw %}{{ }}{% endraw %}` tags)。'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])])]),s("h3",{attrs:{id:"setup-ignored-cases"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#setup-ignored-cases"}},[e._v("#")]),e._v(" Setup ignored cases")]),e._v(" "),s("p",[e._v("In some real cases we have special text contents not follow the rules by reason. So we could ues "),s("code",[e._v("ignoredCases")]),e._v(" option to config that. For example we'd like to keep the spaces inside a pair of brackets, which is invalid by default. Then we could write one more line of HTML comment anywhere inside the file:")]),e._v(" "),s("div",{staticClass:"language-md extra-class"},[s("pre",{pre:!0,attrs:{class:"language-md"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("\x3c!-- the good case --\x3e")]),e._v("\ntext before (text inside) text after\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("\x3c!-- the bad case --\x3e")]),e._v("\nvm.$on( event, callback )\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("\x3c!-- then we could write this down below to make it work --\x3e")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("\x3c!-- zhlint ignore: ( , ) --\x3e")]),e._v("\n")])])]),s("p",[e._v("or just pass it through as an option:")]),e._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[e._v("run")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("str"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v(" ignoredCases"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v(" textStart"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'( '")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" textEnd"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("' )'")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n")])])]),s("h2",{attrs:{id:"supported-preproccessors-hyper-parsers"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#supported-preproccessors-hyper-parsers"}},[e._v("#")]),e._v(" Supported preproccessors (hyper parsers)")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("ignore")]),e._v(": find all ignored pieces by the HTML comment "),s("code",[e._v("\x3c!-- zhlint ignore: ... --\x3e")])]),e._v(" "),s("li",[s("code",[e._v("hexo")]),e._v(": find all Hexo tags to avoid them being parsed.")]),e._v(" "),s("li",[s("code",[e._v("markdown")]),e._v(": parse by markdown syntax and find all block-level texts and inline-level marks.")])]),e._v(" "),s("h2",{attrs:{id:"supported-rules"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#supported-rules"}},[e._v("#")]),e._v(" Supported rules")]),e._v(" "),s("p",[s("em",[e._v("Almost the rules come from the past translation experiences in "),s("a",{attrs:{href:"https://www.w3.org/html/ig/zh/wiki/Main_Page",target:"_blank",rel:"noopener noreferrer"}},[e._v("W3C HTML Chinese interest group"),s("OutboundLink")],1),e._v(" and "),s("a",{attrs:{href:"https://github.com/vuejs/cn.vuejs.org/wiki",target:"_blank",rel:"noopener noreferrer"}},[e._v("Vue.js Chinese docsite"),s("OutboundLink")],1),e._v(".")])]),e._v(" "),s("p",[s("em",[e._v("... and this part might be controversial. So if you don't feel well at some point, we definitely would love to know and improve. Opening an "),s("a",{attrs:{href:"https://github.com/jinjiang/zhlint/issues",target:"_blank",rel:"noopener noreferrer"}},[e._v("issue"),s("OutboundLink")],1),e._v(" is always welcome. Then we could discuss about the possible better option or decision.")])]),e._v(" "),s("ul",[s("li",[s("code",[e._v("mark-raw")]),e._v(": keep one space out of the inline code in markdown\n"),s("ul",[s("li",[s("code",[e._v("text`text`text")]),e._v(" -> "),s("code",[e._v("text `text` text")])])])]),e._v(" "),s("li",[s("code",[e._v("mark-hyper")]),e._v(": move the space outside of the markdown marks\n"),s("ul",[s("li",[s("code",[e._v("text[ text ](link)text")]),e._v(" -> "),s("code",[e._v("text [text](link) text")])])])]),e._v(" "),s("li",[s("code",[e._v("unify-punctuation")]),e._v(": unify all punctuations with same meaning, as part of the translation conventions, the punctuation should be full-width except brackets.\n"),s("ul",[s("li",[s("code",[e._v("中文, 中文.")]),e._v(" -> "),s("code",[e._v("中文，中文。")])])])]),e._v(" "),s("li",[s("code",[e._v("case-abbr")]),e._v(": escape cases with half-width dots like "),s("code",[e._v("Mr.")]),e._v(", "),s("code",[e._v("e.g.")]),e._v(".\n"),s("ul",[s("li",[s("code",[e._v("Mr.")]),e._v(" -> "),s("code",[e._v("Mr.")])])])]),e._v(" "),s("li",[s("code",[e._v("space-full-width-content")]),e._v(": keep one space between half-width content and full-width content\n"),s("ul",[s("li",[s("code",[e._v("中文English中文")]),e._v(" -> "),s("code",[e._v("中文 English 中文")])])])]),e._v(" "),s("li",[s("code",[e._v("space-punctuation")]),e._v(": keep no space between full-width punctuation and the content besides, keep one space between half-width punctuation and the content besides\n"),s("ul",[s("li",[s("code",[e._v("中文 ， 中文")]),e._v(" -> "),s("code",[e._v("中文，中文")])])])]),e._v(" "),s("li",[s("code",[e._v("case-math-exp")]),e._v(": overwrite cases with math expressions\n"),s("ul",[s("li",[s("code",[e._v("1+1=2")]),e._v(" -> "),s("code",[e._v("1 + 1 = 2")])])])]),e._v(" "),s("li",[s("code",[e._v("case-backslash")]),e._v(": deal with the backslash specially to avoid unpredictable result\n"),s("ul",[s("li",[s("code",[e._v("这实质上和问题 \\#1 是相同的")])])])]),e._v(" "),s("li",[s("code",[e._v("space-brackets")]),e._v(": keep one space outside and no space inside a pair of brackets when it's half-width, keep no space inside or outside when it's full-width")]),e._v(" "),s("li",[s("code",[e._v("space-quotes")]),e._v(": keep one space outside and no space inside a pair of brackets when it's half-width, keep no space inside or outside when it's full-width")]),e._v(" "),s("li",[s("code",[e._v("case-traditional")]),e._v(": unify all quotes, as part of the translation conventions.\n"),s("ul",[s("li",[s("code",[e._v("a「b」c")]),e._v(" -> "),s("code",[e._v("a“b”c")])])])]),e._v(" "),s("li",[s("code",[e._v("case-datetime")]),e._v(": deal with the date & time specially to avoid unpredictable result\n"),s("ul",[s("li",[s("code",[e._v("2020/01/02 01:20:30")])])])]),e._v(" "),s("li",[s("code",[e._v("case-datetime-zh")]),e._v(": deal with the Chinese date & time format specially to avoid unpredictable result\n"),s("ul",[s("li",[s("code",[e._v("中文2020年1月1日0天0号0时0分00秒")])])])]),e._v(" "),s("li",[s("code",[e._v("case-ellipsis")]),e._v(": deal with the continuous dots as ellipsis specially to avoid unpredictable result\n"),s("ul",[s("li",[s("code",[e._v("中文...中文...a...b...中文...中文...a...b...")])])])]),e._v(" "),s("li",[s("code",[e._v("case-html-entity")]),e._v(": deal with the HTML entities specially to avoid unpredicutable result\n"),s("ul",[s("li",[s("code",[e._v("中文&lt; &amp; &gt;中文")])])])]),e._v(" "),s("li",[s("code",[e._v("case-raw")]),e._v(": deal with the inline code in markdown specially to avoid unpredictable result\n"),s("ul",[s("li",[s("code",[e._v("`Vue.nextTick`/`vm.$nextTick`")])])])]),e._v(" "),s("li",[s("code",[e._v("case-linebreak")]),e._v(": deal with the linebreak (2 spaces at the end of a line) in markdown specially to avoid unpredictable result")])])])}),[],!1,null,null,null);t.default=n.exports}}]);