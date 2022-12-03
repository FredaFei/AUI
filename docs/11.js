(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[11],{

/***/ "./examples/input.example.tsx":
/*!************************************!*\
  !*** ./examples/input.example.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _packages_input_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../packages/input/input */ \"./packages/input/input.tsx\");\n/* harmony import */ var _packages_icon_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../packages/icon/icon */ \"./packages/icon/icon.tsx\");\n/* harmony import */ var _markdown_input_demo_1_md__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./markdown/input-demo-1.md */ \"./examples/markdown/input-demo-1.md\");\n/* harmony import */ var _markdown_input_demo_2_md__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./markdown/input-demo-2.md */ \"./examples/markdown/input-demo-2.md\");\n/* harmony import */ var _markdown_input_demo_3_md__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./markdown/input-demo-3.md */ \"./examples/markdown/input-demo-3.md\");\n/* harmony import */ var _markdown_input_demo_4_md__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./markdown/input-demo-4.md */ \"./examples/markdown/input-demo-4.md\");\n/* harmony import */ var _markdown_input_demo_5_md__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./markdown/input-demo-5.md */ \"./examples/markdown/input-demo-5.md\");\n/* harmony import */ var _markdown_input_demo_6_md__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./markdown/input-demo-6.md */ \"./examples/markdown/input-demo-6.md\");\n/* harmony import */ var _codeBox__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./codeBox */ \"./examples/codeBox.tsx\");\n/* harmony import */ var _markdown__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./markdown */ \"./examples/markdown.tsx\");\n/* harmony import */ var _markdown_input_doc_md__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./markdown/input-doc.md */ \"./examples/markdown/input-doc.md\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (props) {\r\n    var error = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])('用户名不能为空')[0];\r\n    var _a = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(''), value = _a[0], setValue = _a[1];\r\n    var _b = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(''), enterVal = _b[0], setEnterVal = _b[1];\r\n    var _c = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(''), keyDownVal = _c[0], setKeyDownVal = _c[1];\r\n    var onChange = function (e) {\r\n        setValue(e.target.value);\r\n    };\r\n    var onEnter = function (e) {\r\n        setEnterVal(e.target.value);\r\n    };\r\n    var onKeyDown = function (e) {\r\n        setKeyDownVal(e.target.value);\r\n    };\r\n    return (react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", { className: \"exp-box\" },\r\n        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"h3\", null, \"\\u57FA\\u7840\\u5E94\\u7528\"),\r\n        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", { className: \"exp-section\" },\r\n            react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"h3\", null, \"\\u4E09\\u79CD\\u5C3A\\u5BF8\"),\r\n            react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", { className: \"custom-input\" },\r\n                react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_packages_input_input__WEBPACK_IMPORTED_MODULE_1__[\"default\"], { value: value, onChange: onChange, size: \"big\" }),\r\n                react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_packages_input_input__WEBPACK_IMPORTED_MODULE_1__[\"default\"], { value: value, onChange: onChange }),\r\n                react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_packages_input_input__WEBPACK_IMPORTED_MODULE_1__[\"default\"], { value: value, onChange: onChange, size: \"small\" })),\r\n            react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_codeBox__WEBPACK_IMPORTED_MODULE_9__[\"default\"], { content: _markdown_input_demo_1_md__WEBPACK_IMPORTED_MODULE_3__[\"default\"] })),\r\n        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"h3\", null, \"\\u9519\\u8BEF\\u63D0\\u793A\"),\r\n        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", { className: \"exp-section\" },\r\n            react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", { className: \"custom-input\" },\r\n                react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_packages_input_input__WEBPACK_IMPORTED_MODULE_1__[\"default\"], { label: \"\\u7528\\u6237\\u540D\\uFF1A\", labelPosition: \"top\", error: error, errorPosition: \"right\", type: \"text\" }),\r\n                react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_packages_input_input__WEBPACK_IMPORTED_MODULE_1__[\"default\"], { label: \"\\u7528\\u6237\\u540D\\uFF1A\", labelPosition: \"left\", error: error, errorPosition: \"right\", type: \"text\" }),\r\n                react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_packages_input_input__WEBPACK_IMPORTED_MODULE_1__[\"default\"], { label: \"\\u7528\\u6237\\u540D\\uFF1A\", labelPosition: \"left\", error: error, errorPosition: \"bottom\", type: \"text\" })),\r\n            react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_codeBox__WEBPACK_IMPORTED_MODULE_9__[\"default\"], { content: _markdown_input_demo_2_md__WEBPACK_IMPORTED_MODULE_4__[\"default\"] })),\r\n        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"h3\", null, \"\\u4E0D\\u53EF\\u7528\\u72B6\\u6001\"),\r\n        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", { className: \"exp-section\" },\r\n            react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", { className: \"custom-input\" },\r\n                react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_packages_input_input__WEBPACK_IMPORTED_MODULE_1__[\"default\"], { label: \"\\u7528\\u6237\\u540D\", labelPosition: \"top\", value: \"hello\", disabled: true, type: \"text\" }),\r\n                react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_packages_input_input__WEBPACK_IMPORTED_MODULE_1__[\"default\"], { label: \"\\u5BC6\\u7801\", labelPosition: \"top\", value: \"123456\", disabled: true, type: \"password\" })),\r\n            react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_codeBox__WEBPACK_IMPORTED_MODULE_9__[\"default\"], { content: _markdown_input_demo_3_md__WEBPACK_IMPORTED_MODULE_5__[\"default\"] })),\r\n        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"h3\", null, \"\\u81EA\\u5B9A\\u4E49\\u6837\\u5F0F\"),\r\n        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", { className: \"exp-section\" },\r\n            react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", { className: \"custom-input\" },\r\n                react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_packages_input_input__WEBPACK_IMPORTED_MODULE_1__[\"default\"], { addOnBefore: \"Http://\", addOnAfter: \".com\" }),\r\n                react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_packages_input_input__WEBPACK_IMPORTED_MODULE_1__[\"default\"], { addOnAfter: react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_packages_icon_icon__WEBPACK_IMPORTED_MODULE_2__[\"default\"], { name: \"settings\" }) }),\r\n                react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_packages_input_input__WEBPACK_IMPORTED_MODULE_1__[\"default\"], { addOnAfter: \"\\u641C\\u7D22\", className: \"custom-input-search\" }),\r\n                react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_packages_input_input__WEBPACK_IMPORTED_MODULE_1__[\"default\"], { before: react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_packages_icon_icon__WEBPACK_IMPORTED_MODULE_2__[\"default\"], { name: \"settings\" }) }),\r\n                react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_packages_input_input__WEBPACK_IMPORTED_MODULE_1__[\"default\"], { after: react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_packages_icon_icon__WEBPACK_IMPORTED_MODULE_2__[\"default\"], { name: \"thumbs-up\" }) }),\r\n                react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_packages_input_input__WEBPACK_IMPORTED_MODULE_1__[\"default\"], { before: react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_packages_icon_icon__WEBPACK_IMPORTED_MODULE_2__[\"default\"], { name: \"date\" }), after: react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_packages_icon_icon__WEBPACK_IMPORTED_MODULE_2__[\"default\"], { name: \"error\" }) })),\r\n            react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_codeBox__WEBPACK_IMPORTED_MODULE_9__[\"default\"], { content: _markdown_input_demo_4_md__WEBPACK_IMPORTED_MODULE_6__[\"default\"] })),\r\n        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"h3\", null, \"\\u81EA\\u5B9A\\u4E49\\u89E6\\u53D1\\u4E8B\\u4EF6\"),\r\n        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", { className: \"exp-section\" },\r\n            react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", { className: \"custom-input\" },\r\n                react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_packages_input_input__WEBPACK_IMPORTED_MODULE_1__[\"default\"], { onEnter: onEnter }),\r\n                react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", null,\r\n                    \"enter event value: \",\r\n                    enterVal)),\r\n            react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", { className: \"custom-input\" },\r\n                react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_packages_input_input__WEBPACK_IMPORTED_MODULE_1__[\"default\"], { onKeyDown: onKeyDown }),\r\n                react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", null,\r\n                    \"enter event value: \",\r\n                    keyDownVal)),\r\n            react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_codeBox__WEBPACK_IMPORTED_MODULE_9__[\"default\"], { content: _markdown_input_demo_5_md__WEBPACK_IMPORTED_MODULE_7__[\"default\"] })),\r\n        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"h3\", null, \"\\u652F\\u6301\\u7684\\u7C7B\\u578B\"),\r\n        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", { className: \"exp-section\" },\r\n            react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", { className: \"custom-input\" },\r\n                react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_packages_input_input__WEBPACK_IMPORTED_MODULE_1__[\"default\"], { type: \"text\", placeholder: \"text\" }),\r\n                react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_packages_input_input__WEBPACK_IMPORTED_MODULE_1__[\"default\"], { type: \"number\", placeholder: \"number\" }),\r\n                react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_packages_input_input__WEBPACK_IMPORTED_MODULE_1__[\"default\"], { type: \"password\", placeholder: \"password\" }),\r\n                react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_packages_input_input__WEBPACK_IMPORTED_MODULE_1__[\"default\"], { type: \"email\", placeholder: \"email\" }),\r\n                react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_packages_input_input__WEBPACK_IMPORTED_MODULE_1__[\"default\"], { type: \"date\" }),\r\n                react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_packages_input_input__WEBPACK_IMPORTED_MODULE_1__[\"default\"], { type: \"time\" }),\r\n                react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_packages_input_input__WEBPACK_IMPORTED_MODULE_1__[\"default\"], { type: \"tel\", placeholder: \"tel\" }),\r\n                react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_packages_input_input__WEBPACK_IMPORTED_MODULE_1__[\"default\"], { type: \"url\", pattern: \"https://.*\", placeholder: \"url\" }),\r\n                react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_packages_input_input__WEBPACK_IMPORTED_MODULE_1__[\"default\"], { type: \"search\", placeholder: \"search\" })),\r\n            react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_codeBox__WEBPACK_IMPORTED_MODULE_9__[\"default\"], { content: _markdown_input_demo_6_md__WEBPACK_IMPORTED_MODULE_8__[\"default\"] })),\r\n        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_markdown__WEBPACK_IMPORTED_MODULE_10__[\"default\"], { source: _markdown_input_doc_md__WEBPACK_IMPORTED_MODULE_11__[\"default\"] })));\r\n});\r\n\n\n//# sourceURL=webpack:///./examples/input.example.tsx?");

/***/ }),

/***/ "./examples/markdown/input-demo-1.md":
/*!*******************************************!*\
  !*** ./examples/markdown/input-demo-1.md ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"``` jsx harmony\\r\\nimport * as React from 'react'\\r\\nimport {useState} from 'react'\\r\\n\\r\\nexport default function (props) {\\r\\n  const [value, setValue] = useState('')\\r\\n  const onChange = (e) => {\\r\\n    setValue(e.target.value)\\r\\n  }\\r\\n  return (\\r\\n    <div className=\\\"custom-input\\\">\\r\\n      <Input value={value} onChange={onChange} size=\\\"big\\\"/>\\r\\n      <Input value={value} onChange={onChange}/>\\r\\n      <Input value={value} onChange={onChange} size=\\\"small\\\"/>\\r\\n    </div>\\r\\n  )\\r\\n}\\r\\n```\\r\\n\");\n\n//# sourceURL=webpack:///./examples/markdown/input-demo-1.md?");

/***/ }),

/***/ "./examples/markdown/input-demo-2.md":
/*!*******************************************!*\
  !*** ./examples/markdown/input-demo-2.md ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"``` jsx harmony\\r\\nimport * as React from 'react'\\r\\nimport {useState} from 'react'\\r\\n\\r\\nexport default function (props) {\\r\\n  const [error] = useState('用户名不能为空')\\r\\n  return (\\r\\n    <div className=\\\"custom-input\\\">\\r\\n      <Input label=\\\"用户名：\\\" labelPosition=\\\"top\\\" error={error} errorPosition=\\\"right\\\" type=\\\"text\\\"/>\\r\\n      <Input label=\\\"用户名：\\\" labelPosition=\\\"left\\\" error={error} errorPosition=\\\"right\\\" type=\\\"text\\\"/>\\r\\n      <Input label=\\\"用户名：\\\" labelPosition=\\\"left\\\" error={error} errorPosition=\\\"bottom\\\" type=\\\"text\\\"/>\\r\\n    </div>\\r\\n  )\\r\\n}\\r\\n```\\r\\n\");\n\n//# sourceURL=webpack:///./examples/markdown/input-demo-2.md?");

/***/ }),

/***/ "./examples/markdown/input-demo-3.md":
/*!*******************************************!*\
  !*** ./examples/markdown/input-demo-3.md ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"``` jsx harmony\\r\\nimport * as React from 'react'\\r\\n\\r\\nexport default function (props) {\\r\\n  <div className=\\\"custom-input\\\">\\r\\n    <Input label=\\\"用户名\\\" labelPosition=\\\"top\\\" value=\\\"hello\\\" disabled type=\\\"text\\\"/>\\r\\n    <Input label=\\\"密码\\\" labelPosition=\\\"top\\\" value=\\\"123456\\\" disabled type=\\\"password\\\"/>\\r\\n  </div>\\r\\n  )\\r\\n}\\r\\n```\\r\\n\");\n\n//# sourceURL=webpack:///./examples/markdown/input-demo-3.md?");

/***/ }),

/***/ "./examples/markdown/input-demo-4.md":
/*!*******************************************!*\
  !*** ./examples/markdown/input-demo-4.md ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"``` jsx harmony\\r\\nimport * as React from 'react'\\r\\nimport {useState} from 'react'\\r\\n\\r\\nexport default function (props) {\\r\\n  return <div>\\r\\n    <Input addOnBefore=\\\"Http://\\\" addOnAfter=\\\".com\\\" />\\r\\n    <Input addOnAfter={<Icon name=\\\"settings\\\" />} />\\r\\n    <Input addOnAfter=\\\"搜索\\\" className=\\\"custom-input-search\\\" />\\r\\n    <Input before={<Icon name=\\\"settings\\\" />} />\\r\\n    <Input after={<Icon name=\\\"thumbs-up\\\" />} />\\r\\n    <Input before={<Icon name=\\\"date\\\"/>} after={<Icon name=\\\"error\\\" />} />\\r\\n  </div>\\r\\n}\\r\\n```\\r\\n\");\n\n//# sourceURL=webpack:///./examples/markdown/input-demo-4.md?");

/***/ }),

/***/ "./examples/markdown/input-demo-5.md":
/*!*******************************************!*\
  !*** ./examples/markdown/input-demo-5.md ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"``` jsx harmony\\r\\nimport * as React from 'react'\\r\\nimport {useState} from 'react'\\r\\n\\r\\nexport default function (props) {\\r\\n  const [enterVal, setEnterVal] = useState('')\\r\\n  const [keyDownVal, setKeyDownVal] = useState('')\\r\\n  const onEnter = (e) => {\\r\\n    setEnterVal(e.target.value)\\r\\n  }\\r\\n  const onKeyDown = (e) => {\\r\\n    setKeyDownVal(e.target.value)\\r\\n  }\\r\\n  return (\\r\\n    <div className=\\\"exp-section\\\">\\r\\n      <div className=\\\"custom-input\\\">\\r\\n        <Input onEnter={onEnter}/>\\r\\n        <div>enter event value: {enterVal}</div>\\r\\n      </div>\\r\\n      <div className=\\\"custom-input\\\">\\r\\n        <Input onKeyDown={onKeyDown}/>\\r\\n        <div>enter event value: {keyDownVal}</div>\\r\\n      </div>\\r\\n    </div>\\r\\n  )\\r\\n}\\r\\n```\\r\\n\");\n\n//# sourceURL=webpack:///./examples/markdown/input-demo-5.md?");

/***/ }),

/***/ "./examples/markdown/input-demo-6.md":
/*!*******************************************!*\
  !*** ./examples/markdown/input-demo-6.md ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"``` jsx harmony\\r\\nimport * as React from 'react'\\r\\nimport {useState} from 'react'\\r\\n\\r\\nexport default function (props) {\\r\\n  return (\\r\\n    <div>\\r\\n      <Input type=\\\"text\\\" placeholder=\\\"text\\\" />\\r\\n      <Input type=\\\"number\\\" placeholder=\\\"number\\\" />\\r\\n      <Input type=\\\"password\\\" placeholder=\\\"password\\\" />\\r\\n      <Input type=\\\"email\\\" placeholder=\\\"email\\\" />\\r\\n      <Input type=\\\"date\\\" />\\r\\n      <Input type=\\\"time\\\" />\\r\\n      <Input type=\\\"tel\\\" placeholder=\\\"tel\\\" />\\r\\n      <Input type=\\\"url\\\" pattern=\\\"https://.*\\\" placeholder=\\\"url\\\" />\\r\\n      <Input type=\\\"search\\\" placeholder=\\\"search\\\" />\\r\\n    </div>\\r\\n  )\\r\\n}\\r\\n```\\r\\n\");\n\n//# sourceURL=webpack:///./examples/markdown/input-demo-6.md?");

/***/ }),

/***/ "./examples/markdown/input-doc.md":
/*!****************************************!*\
  !*** ./examples/markdown/input-doc.md ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"### API\\r\\n\\r\\n| 参数         |说明        |类型 |默认值 |可选值 |\\r\\n| ------------ | :----------------|:------- | :----- | :----- |\\r\\n| before         |前缀标签 |React.ReactNode  |—— |—— |\\r\\n| after         |后缀标签 |React.ReactNode  |—— |—— |\\r\\n| addOnBefore         |前置标签 |React.ReactNode  |—— |—— |\\r\\n| addOnAfter         |后置标签 |React.ReactNode  |—— |—— |\\r\\n| label      |设置标签的文本  |String |—— |—— |\\r\\n| labelPosition      |设置标签的位置  |String |top |`left` |\\r\\n| error      |设置标签的位置  |String |—— |—— |\\r\\n| errorPosition      |设置标签的位置  |String |right |`bottom` |\\r\\n| size      |设置input尺寸  |String |——  |`big/small` |\\r\\n| type      |设置input类型  |String |text |`number/password/email/date/time/search/tel/url`|\\r\\n| className      |自定义类名  |String |—— |—— |\\r\\n| style      |自定义样式  |React.CSSProperties |—— |—— |\\r\\n| onEnter    | 按下Enter时触发 |       React.KeyboardEventHandler |—— |—— |\\r\\n\\r\\n\");\n\n//# sourceURL=webpack:///./examples/markdown/input-doc.md?");

/***/ }),

/***/ "./packages/input/input.tsx":
/*!**********************************!*\
  !*** ./packages/input/input.tsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ \"./node_modules/tslib/tslib.es6.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils_classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/classnames */ \"./packages/utils/classnames.ts\");\n/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style */ \"./packages/input/style/index.tsx\");\n\r\n\r\n\r\n\r\nvar componentName = 'Input';\r\nvar sc = Object(_utils_classnames__WEBPACK_IMPORTED_MODULE_2__[\"createScopedClasses\"])(componentName);\r\nvar Input = function (props) {\r\n    var label = props.label, labelPosition = props.labelPosition, error = props.error, errorPosition = props.errorPosition, size = props.size, type = props.type, style = props.style, className = props.className, before = props.before, after = props.after, addOnBefore = props.addOnBefore, addOnAfter = props.addOnAfter, onEnter = props.onEnter, rest = Object(tslib__WEBPACK_IMPORTED_MODULE_0__[\"__rest\"])(props, [\"label\", \"labelPosition\", \"error\", \"errorPosition\", \"size\", \"type\", \"style\", \"className\", \"before\", \"after\", \"addOnBefore\", \"addOnAfter\", \"onEnter\"]);\r\n    var class1 = {\r\n        'label-left': labelPosition === 'left',\r\n        'label-top': labelPosition === 'top'\r\n    };\r\n    var class2 = {\r\n        'error-bottom': errorPosition === 'bottom',\r\n        'error-right': errorPosition === 'right'\r\n    };\r\n    var onKeyDown = function (e) {\r\n        if (e.keyCode === 13) {\r\n            onEnter && onEnter.call(null, e);\r\n        }\r\n        props.onKeyDown && props.onKeyDown.call(null, e);\r\n    };\r\n    return (react__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"](\"div\", { className: sc('wrapper', class1, {\r\n            big: size === 'big',\r\n            small: size === 'small'\r\n        }) },\r\n        label && react__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"](\"div\", { className: sc('label') }, label),\r\n        react__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"](\"div\", { className: sc('inputAndError') },\r\n            react__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"](\"div\", { className: sc('content', { 'before-or-after': before || after }) },\r\n                before && react__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"](\"span\", { className: sc('before') }, before),\r\n                addOnBefore && react__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"](\"span\", { className: sc('add-on-before') }, addOnBefore),\r\n                react__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"](\"input\", Object(tslib__WEBPACK_IMPORTED_MODULE_0__[\"__assign\"])({ className: Object(_utils_classnames__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(sc(''), className), type: type, style: style }, rest, { onKeyDown: onKeyDown })),\r\n                after && react__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"](\"span\", { className: sc('after') }, after),\r\n                addOnAfter && react__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"](\"span\", { className: sc('add-on-after') }, addOnAfter)),\r\n            error && react__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"](\"span\", { className: sc('error', class2) }, error))));\r\n};\r\nInput.displayName = componentName;\r\nInput.defaultProps = {\r\n    errorPosition: 'right',\r\n    type: 'text',\r\n    labelPosition: 'top'\r\n};\r\nInput.propTypes = {};\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Input);\r\n\n\n//# sourceURL=webpack:///./packages/input/input.tsx?");

/***/ }),

/***/ "./packages/input/style/index.scss":
/*!*****************************************!*\
  !*** ./packages/input/style/index.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./packages/input/style/index.scss?");

/***/ }),

/***/ "./packages/input/style/index.tsx":
/*!****************************************!*\
  !*** ./packages/input/style/index.tsx ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.scss */ \"./packages/input/style/index.scss\");\n/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_0__);\n\r\n\n\n//# sourceURL=webpack:///./packages/input/style/index.tsx?");

/***/ })

}]);