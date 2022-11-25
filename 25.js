(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[25],{

/***/ "./examples/codeBlock.tsx":
/*!********************************!*\
  !*** ./examples/codeBlock.tsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-syntax-highlighter */ \"./node_modules/react-syntax-highlighter/dist/esm/index.js\");\n/* harmony import */ var react_syntax_highlighter_dist_esm_styles_prism__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-syntax-highlighter/dist/esm/styles/prism */ \"./node_modules/react-syntax-highlighter/dist/esm/styles/prism/index.js\");\n/* harmony import */ var react_syntax_highlighter_dist_esm_languages_prism__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-syntax-highlighter/dist/esm/languages/prism */ \"./node_modules/react-syntax-highlighter/dist/esm/languages/prism/index.js\");\n\r\n\r\n\r\n// @ts-ignore\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (props) {\r\n    react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_1__[\"PrismLight\"].registerLanguage(\"jsx\", react_syntax_highlighter_dist_esm_languages_prism__WEBPACK_IMPORTED_MODULE_3__[\"jsx\"]);\r\n    react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_1__[\"PrismLight\"].registerLanguage(\"javascript\", react_syntax_highlighter_dist_esm_languages_prism__WEBPACK_IMPORTED_MODULE_3__[\"javascript\"]);\r\n    var language = props.language, value = props.value;\r\n    return (react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"figure\", { className: \"highlight\" },\r\n        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_1__[\"PrismLight\"], { language: language, style: react_syntax_highlighter_dist_esm_styles_prism__WEBPACK_IMPORTED_MODULE_2__[\"okaidia\"] }, value)));\r\n});\r\n\n\n//# sourceURL=webpack:///./examples/codeBlock.tsx?");

/***/ }),

/***/ "./examples/home.tsx":
/*!***************************!*\
  !*** ./examples/home.tsx ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _raw_loader_home_md__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !raw-loader!./home.md */ \"./node_modules/raw-loader/dist/cjs.js!./examples/home.md\");\n/* harmony import */ var _markdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./markdown */ \"./examples/markdown.tsx\");\n\r\n\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (props) {\r\n    return (react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", null,\r\n        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_markdown__WEBPACK_IMPORTED_MODULE_2__[\"default\"], { source: _raw_loader_home_md__WEBPACK_IMPORTED_MODULE_1__[\"default\"] })));\r\n});\r\n\n\n//# sourceURL=webpack:///./examples/home.tsx?");

/***/ }),

/***/ "./examples/markdown.tsx":
/*!*******************************!*\
  !*** ./examples/markdown.tsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-markdown */ \"./node_modules/react-markdown/lib/react-markdown.js\");\n/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_markdown__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _codeBlock__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./codeBlock */ \"./examples/codeBlock.tsx\");\n\r\n\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (props) {\r\n    return (react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", { className: \"markdown-content\" },\r\n        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](react_markdown__WEBPACK_IMPORTED_MODULE_1___default.a, { source: props.source, escapeHtml: false, renderers: {\r\n                code: _codeBlock__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\r\n            } })));\r\n});\r\n\n\n//# sourceURL=webpack:///./examples/markdown.tsx?");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./examples/home.md":
/*!****************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./examples/home.md ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"# Amazing-react\\r\\n\\r\\n一套PC&H5均适用的组件库，基于react hooks + typeScript 开发，无额外依赖。\\r\\n\\r\\n### 快速上手\\r\\n\\r\\n**安装**\\r\\n\\r\\n```\\r\\n  $ yarn add amazing-ui-react\\r\\n  $ npm install amazing-ui-react\\r\\n```\\r\\n\\r\\n**使用组件**\\r\\n\\r\\n```jsx harmony\\r\\n\\r\\nimport { Button } from \\\"amazing-ui-react\\\";\\r\\nimport \\\"amazing-ui-react/dist/lib/index.css\\\";\\r\\n\\r\\n<Button>submit</Button>\\r\\n\\r\\n```\");\n\n//# sourceURL=webpack:///./examples/home.md?./node_modules/raw-loader/dist/cjs.js");

/***/ })

}]);