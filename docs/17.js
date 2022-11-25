(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[17],{

/***/ "./examples/markdown/skeleton-demo-1.md":
/*!**********************************************!*\
  !*** ./examples/markdown/skeleton-demo-1.md ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"```jsx harmony\\r\\nimport * as React from 'react'\\r\\n\\r\\nexport default function (props) {\\r\\n  return (\\r\\n    <div className=\\\"exp-section\\\">\\r\\n      <Button>首页</Button>\\r\\n      <Button icon=\\\"settings\\\">设置</Button>\\r\\n      <Button icon=\\\"upload\\\">下载APP</Button>\\r\\n      <Button icon=\\\"thumbs-up\\\">好看</Button>\\r\\n    </div>\\r\\n  )\\r\\n}\\r\\n```\\r\\n\\r\\n\");\n\n//# sourceURL=webpack:///./examples/markdown/skeleton-demo-1.md?");

/***/ }),

/***/ "./examples/markdown/skeleton-doc.md":
/*!*******************************************!*\
  !*** ./examples/markdown/skeleton-doc.md ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"### API\\r\\n\\r\\n| 参数         |说明        |类型 |默认值 |可选值 |\\r\\n| ------------ | :----------------|:------- | :----- | :----- |\\r\\n| placeholder         |段落占位 |Number |—— |—— |\\r\\n| blockGap |段落占位高度 |Number |16 |—— |\\r\\n| repeatGap      |段落占位下边距  |Number |4 |—— |\\r\\n| repeat      |段落占位行数  |String |—— |—— |\\r\\n| loading      |是否启动动画  |Boolean |—— |—— |\\r\\n| style      |自定义样式  |React.CSSProperties |—— |—— |\\r\\n| className      |自定义类名  |String |—— |—— |\\r\\n\");\n\n//# sourceURL=webpack:///./examples/markdown/skeleton-doc.md?");

/***/ }),

/***/ "./examples/skeleton.example.tsx":
/*!***************************************!*\
  !*** ./examples/skeleton.example.tsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _packages_skeleton_Skeleton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../packages/skeleton/Skeleton */ \"./packages/skeleton/Skeleton.tsx\");\n/* harmony import */ var _markdown_skeleton_demo_1_md__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./markdown/skeleton-demo-1.md */ \"./examples/markdown/skeleton-demo-1.md\");\n/* harmony import */ var _markdown_skeleton_doc_md__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./markdown/skeleton-doc.md */ \"./examples/markdown/skeleton-doc.md\");\n/* harmony import */ var _markdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./markdown */ \"./examples/markdown.tsx\");\n/* harmony import */ var _codeBox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./codeBox */ \"./examples/codeBox.tsx\");\n\r\n\r\n\r\n\r\n\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (props) {\r\n    return (react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", { className: \"exp-box\" },\r\n        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"h3\", null, \"\\u57FA\\u7840\\u5E94\\u7528\"),\r\n        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", { className: \"exp-section\" },\r\n            react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_packages_skeleton_Skeleton__WEBPACK_IMPORTED_MODULE_1__[\"default\"], { placeholder: \"\\n                xxxxxx\\n                xxxxxxxxxxxxxxxx\\n                xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx\\n                \" }),\r\n            react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_codeBox__WEBPACK_IMPORTED_MODULE_5__[\"default\"], { content: _markdown_skeleton_demo_1_md__WEBPACK_IMPORTED_MODULE_2__[\"default\"] })),\r\n        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"h3\", null, \"\\u52A8\\u753B\\u6548\\u679C\"),\r\n        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", { className: \"exp-section\" },\r\n            react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_packages_skeleton_Skeleton__WEBPACK_IMPORTED_MODULE_1__[\"default\"], { repeat: 2, loading: true, placeholder: \"\\n                xxxxxx\\n                xxxxxxxxxxxxxxxx\\n                xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx\\n                \" }),\r\n            react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_codeBox__WEBPACK_IMPORTED_MODULE_5__[\"default\"], { content: _markdown_skeleton_demo_1_md__WEBPACK_IMPORTED_MODULE_2__[\"default\"] })),\r\n        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_markdown__WEBPACK_IMPORTED_MODULE_4__[\"default\"], { source: _markdown_skeleton_doc_md__WEBPACK_IMPORTED_MODULE_3__[\"default\"] })));\r\n});\r\n\n\n//# sourceURL=webpack:///./examples/skeleton.example.tsx?");

/***/ }),

/***/ "./packages/skeleton/Skeleton.tsx":
/*!****************************************!*\
  !*** ./packages/skeleton/Skeleton.tsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utils_classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/classnames */ \"./packages/utils/classnames.ts\");\n/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style */ \"./packages/skeleton/style/index.tsx\");\n/* harmony import */ var _utils_collection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/collection */ \"./packages/utils/collection.ts\");\n/**\r\n * @desc 骨架屏\r\n * @author feihan\r\n * @date 2022/1/7 21:48\r\n */\r\n\r\n\r\n\r\n\r\nvar componentName = \"Skeleton\";\r\nvar sc = Object(_utils_classnames__WEBPACK_IMPORTED_MODULE_1__[\"createScopedClasses\"])(componentName);\r\nvar Skeleton = function (props) {\r\n    var lines = props.placeholder.split(\"\\n\").map(function (line) { return line.trim(); }).filter(function (line) { return line.length > 0; });\r\n    var longest = lines.reduce(function (max, line) { return Math.max(max, line.length); }, 0);\r\n    var createBlocks = function () { return lines.map(function (line) {\r\n        var width = line.length / longest * 100 + \"%\";\r\n        return react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", { className: sc(\"block\", props.loading && \"loading\"), style: { width: width, height: props.blockGap, marginBottom: props.blockGap } });\r\n    }); };\r\n    return react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", { className: Object(_utils_classnames__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(sc(\"wrapper\"), (props === null || props === void 0 ? void 0 : props.className) || \"\"), style: props.style }, Object(_utils_collection__WEBPACK_IMPORTED_MODULE_3__[\"range\"])(1, props.repeat || 1).map(function () { return react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", { className: sc(\"repeat\"), style: { marginBottom: props.repeatGap } }, createBlocks()); }));\r\n};\r\nSkeleton.defaultProps = {\r\n    repeat: 1,\r\n    blockGap: 16,\r\n    repeatGap: 4,\r\n    placeholder: \"\",\r\n    loading: false,\r\n};\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Skeleton);\r\n\n\n//# sourceURL=webpack:///./packages/skeleton/Skeleton.tsx?");

/***/ }),

/***/ "./packages/skeleton/style/index.scss":
/*!********************************************!*\
  !*** ./packages/skeleton/style/index.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./packages/skeleton/style/index.scss?");

/***/ }),

/***/ "./packages/skeleton/style/index.tsx":
/*!*******************************************!*\
  !*** ./packages/skeleton/style/index.tsx ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.scss */ \"./packages/skeleton/style/index.scss\");\n/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_0__);\n\r\n\n\n//# sourceURL=webpack:///./packages/skeleton/style/index.tsx?");

/***/ }),

/***/ "./packages/utils/collection.ts":
/*!**************************************!*\
  !*** ./packages/utils/collection.ts ***!
  \**************************************/
/*! exports provided: range, unique, flatten, difference, intersection, sort, towArraysAreEqual */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"range\", function() { return range; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"unique\", function() { return unique; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"flatten\", function() { return flatten; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"difference\", function() { return difference; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"intersection\", function() { return intersection; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"sort\", function() { return sort; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"towArraysAreEqual\", function() { return towArraysAreEqual; });\nfunction range(start, end) {\r\n    var temp = [];\r\n    for (var i = start; i <= end; i++) {\r\n        temp.push(i);\r\n    }\r\n    return temp;\r\n}\r\nfunction unique(array) {\r\n    var obj = {};\r\n    return array.filter(function (item) { return obj.hasOwnProperty(typeof item + JSON.stringify(item)) ? false : (obj[typeof item + JSON.stringify(item)] = true); });\r\n}\r\nfunction flatten(array) {\r\n    if (!array) {\r\n        return [];\r\n    }\r\n    return array.reduce(function (result, next) { return result.concat(Array.isArray(next) ? flatten(next) : next); }, []);\r\n}\r\nfunction difference(a, b) {\r\n    return a.filter(function (i) { return b.indexOf(i) === -1; });\r\n}\r\nfunction intersection(a, b) {\r\n    return a.filter(function (i) { return b.indexOf(i) > -1; });\r\n}\r\nfunction compare(a, b) {\r\n    // 按某种排序标准进行比较, a 小于 b\r\n    if (a < b) {\r\n        return -1;\r\n    }\r\n    if (a > b) {\r\n        return 1;\r\n    }\r\n    // a must be equal to b\r\n    return 0;\r\n}\r\nfunction sort(array) {\r\n    return array.sort(compare);\r\n}\r\nfunction towArraysAreEqual(a, b) {\r\n    return a.length === b.length && JSON.stringify(sort(a)) === JSON.stringify(sort(b));\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./packages/utils/collection.ts?");

/***/ })

}]);