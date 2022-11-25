(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[29],{

/***/ "./examples/markdown/scroll-demo-1.md":
/*!********************************************!*\
  !*** ./examples/markdown/scroll-demo-1.md ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"```jsx harmony\\r\\nimport * as React from 'react'\\r\\n\\r\\nimport * as React from 'react'\\r\\nimport {useState} from \\\"react\\\";\\r\\n\\r\\nfunction range(start, end) {\\r\\n  const temp = []\\r\\n  for (let i = start; i <= end; i++) {\\r\\n    temp.push(i)\\r\\n  }\\r\\n  return temp\\r\\n}\\r\\n\\r\\nconst page = 15\\r\\nlet index = 1\\r\\nexport default function (props) {\\r\\n  const [source, setSource] = useState(range(1, index * page))\\r\\n  const onPullDown = () => {\\r\\n    console.log('on down refresh')\\r\\n    index = 1\\r\\n    setSource(range(1, index * page))\\r\\n  }\\r\\n  const onPullUp = () => {\\r\\n    console.log('on up load more')\\r\\n    index += 1\\r\\n    setSource(range(1, index * page))\\r\\n  }\\r\\n  return (\\r\\n    <div className=\\\"exp-box\\\">\\r\\n      <h3>基础应用</h3>\\r\\n      <div className=\\\"exp-section\\\">\\r\\n        <Scroll style={{height: '300px'}} onPullDown={onPullDown} onPullUp={onPullUp}>\\r\\n          <ul>{source.map(i => <li key={i}>hello, scroll {i}</li>)}</ul>\\r\\n        </Scroll>\\r\\n      </div>\\r\\n\\r\\n    </div>\\r\\n  )\\r\\n}\\r\\n```\\r\\n\\r\\n\");\n\n//# sourceURL=webpack:///./examples/markdown/scroll-demo-1.md?");

/***/ }),

/***/ "./examples/markdown/scroll-doc.md":
/*!*****************************************!*\
  !*** ./examples/markdown/scroll-doc.md ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"### 注意\\r\\n\\r\\n该组件仅适用于移动端，组件交互请切换到移动端模式查看。\\r\\n\\r\\n### API\\r\\n\\r\\n| 参数         |说明        |类型 |默认值 |可选值 |\\r\\n| ------------ | :----------------|:------- | :----- | :----- |\\r\\n| pullingHeight      |设置上下拉动距离|Number |100 |—— |\\r\\n| className      |自定义类名  |String |—— |—— |\\r\\n| style      |自定义样式  |React.CSSProperties |—— |—— |\\r\\n| onPullUp    | 下拉时触发 |       () => void |—— |—— |\\r\\n| onPullDown    | 上拉时触发 |       () => void |—— |—— |\");\n\n//# sourceURL=webpack:///./examples/markdown/scroll-doc.md?");

/***/ }),

/***/ "./examples/scroll.example.tsx":
/*!*************************************!*\
  !*** ./examples/scroll.example.tsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _packages_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../packages/index */ \"./packages/index.tsx\");\n/* harmony import */ var _packages_utils_collection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../packages/utils/collection */ \"./packages/utils/collection.ts\");\n/* harmony import */ var _markdown_scroll_demo_1_md__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./markdown/scroll-demo-1.md */ \"./examples/markdown/scroll-demo-1.md\");\n/* harmony import */ var _markdown_scroll_doc_md__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./markdown/scroll-doc.md */ \"./examples/markdown/scroll-doc.md\");\n/* harmony import */ var _markdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./markdown */ \"./examples/markdown.tsx\");\n/* harmony import */ var _codeBox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./codeBox */ \"./examples/codeBox.tsx\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nvar page = 15;\r\nvar index = 1;\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (props) {\r\n    var _a = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(Object(_packages_utils_collection__WEBPACK_IMPORTED_MODULE_2__[\"range\"])(1, index * page)), source = _a[0], setSource = _a[1];\r\n    var onPullDown = function () {\r\n        console.log('on down refresh');\r\n        index = 1;\r\n        setSource(Object(_packages_utils_collection__WEBPACK_IMPORTED_MODULE_2__[\"range\"])(1, index * page));\r\n    };\r\n    var onPullUp = function () {\r\n        console.log('on up load more');\r\n        index += 1;\r\n        setSource(Object(_packages_utils_collection__WEBPACK_IMPORTED_MODULE_2__[\"range\"])(1, index * page));\r\n    };\r\n    return (react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", { className: \"exp-box\" },\r\n        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"h3\", null, \"\\u57FA\\u7840\\u5E94\\u7528\"),\r\n        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", { className: \"exp-section\" },\r\n            react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_packages_index__WEBPACK_IMPORTED_MODULE_1__[\"Scroll\"], { style: { height: '300px' }, onPullDown: onPullDown, onPullUp: onPullUp },\r\n                react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"ul\", null, source.map(function (i) { return react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"li\", { key: i },\r\n                    \"hello, scroll \",\r\n                    i); }))),\r\n            react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_codeBox__WEBPACK_IMPORTED_MODULE_6__[\"default\"], { content: _markdown_scroll_demo_1_md__WEBPACK_IMPORTED_MODULE_3__[\"default\"] })),\r\n        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_markdown__WEBPACK_IMPORTED_MODULE_5__[\"default\"], { source: _markdown_scroll_doc_md__WEBPACK_IMPORTED_MODULE_4__[\"default\"] })));\r\n});\r\n\n\n//# sourceURL=webpack:///./examples/scroll.example.tsx?");

/***/ })

}]);