(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[16],{

/***/ "./examples/controllCount.example.tsx":
/*!********************************************!*\
  !*** ./examples/controllCount.example.tsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _packages_controllCount_controllCount__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../packages/controllCount/controllCount */ \"./packages/controllCount/controllCount.tsx\");\n/* harmony import */ var _markdown_controllCount_demo_1_md__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./markdown/controllCount-demo-1.md */ \"./examples/markdown/controllCount-demo-1.md\");\n/* harmony import */ var _markdown_controllCount_demo_2_md__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./markdown/controllCount-demo-2.md */ \"./examples/markdown/controllCount-demo-2.md\");\n/* harmony import */ var _markdown_controllCount_doc_md__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./markdown/controllCount-doc.md */ \"./examples/markdown/controllCount-doc.md\");\n/* harmony import */ var _markdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./markdown */ \"./examples/markdown.tsx\");\n/* harmony import */ var _codeBox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./codeBox */ \"./examples/codeBox.tsx\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (props) {\r\n    var count = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(2)[0];\r\n    var onChange = function (val) {\r\n        console.log(val);\r\n    };\r\n    return (react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", { className: \"exp-box\" },\r\n        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"h3\", null, \"\\u57FA\\u7840\\u5E94\\u7528\"),\r\n        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", { className: \"exp-section\" },\r\n            react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_packages_controllCount_controllCount__WEBPACK_IMPORTED_MODULE_1__[\"default\"], { style: { width: '140px' }, onChange: onChange }, \"\\u9996\\u9875\"),\r\n            react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_codeBox__WEBPACK_IMPORTED_MODULE_6__[\"default\"], { content: _markdown_controllCount_demo_1_md__WEBPACK_IMPORTED_MODULE_2__[\"default\"] })),\r\n        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"h3\", null, \"input \\u4E0D\\u53EF\\u8F93\\u5165\"),\r\n        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", { className: \"exp-section\" },\r\n            react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_packages_controllCount_controllCount__WEBPACK_IMPORTED_MODULE_1__[\"default\"], { count: count, style: { width: '140px' }, readOnly: true, onChange: onChange }, \"\\u9996\\u9875\"),\r\n            react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_codeBox__WEBPACK_IMPORTED_MODULE_6__[\"default\"], { content: _markdown_controllCount_demo_2_md__WEBPACK_IMPORTED_MODULE_3__[\"default\"] })),\r\n        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_markdown__WEBPACK_IMPORTED_MODULE_5__[\"default\"], { source: _markdown_controllCount_doc_md__WEBPACK_IMPORTED_MODULE_4__[\"default\"] })));\r\n});\r\n\n\n//# sourceURL=webpack:///./examples/controllCount.example.tsx?");

/***/ }),

/***/ "./examples/markdown/controllCount-demo-1.md":
/*!***************************************************!*\
  !*** ./examples/markdown/controllCount-demo-1.md ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"```jsx harmony\\r\\nimport * as React from 'react'\\r\\n\\r\\nexport default function (props) {\\r\\n  const onChange = (val)=>{\\r\\n    console.log(val);\\r\\n  }\\r\\n  return (\\r\\n    <div className=\\\"exp-section\\\">\\r\\n      <ControllCount style={{width: '140px'}} onChange={onChange}>首页</ControllCount>\\r\\n    </div>\\r\\n  )\\r\\n}\\r\\n```\\r\\n\\r\\n\");\n\n//# sourceURL=webpack:///./examples/markdown/controllCount-demo-1.md?");

/***/ }),

/***/ "./examples/markdown/controllCount-demo-2.md":
/*!***************************************************!*\
  !*** ./examples/markdown/controllCount-demo-2.md ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"```jsx harmony\\r\\nimport * as React from 'react'\\r\\n\\r\\nexport default function (props) {\\r\\n  const [count2] = useState(2)\\r\\n  const onChange = (val)=>{\\r\\n    console.log(val);\\r\\n  }\\r\\n  return (\\r\\n    <div className=\\\"exp-section\\\">\\r\\n      <ControllCount count={count2} style={{width: '140px'}} onChange={onChange}>首页</ControllCount>\\r\\n    </div>\\r\\n  )\\r\\n}\\r\\n```\\r\\n\\r\\n\");\n\n//# sourceURL=webpack:///./examples/markdown/controllCount-demo-2.md?");

/***/ }),

/***/ "./examples/markdown/controllCount-doc.md":
/*!************************************************!*\
  !*** ./examples/markdown/controllCount-doc.md ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"### API\\r\\n### Collapse\\r\\n\\r\\n| 参数         |说明        |类型 |默认值 |可选值 |\\r\\n| ------------ | :----------------|:------- | :----- | :----- |\\r\\n| count         |当前数量 |Number |1 |—— |\\r\\n| maxCount |最大数量 |Number|10 |—— |\\r\\n| minCount |最小数量|Number |1 |—— |\\r\\n| readOnly |输入框是否只读|Boolean |false|`true` |\\r\\n| className      |自定义类名  |String |—— |—— |\\r\\n| style      |自定义样式  |React.CSSProperties |—— |—— |\\r\\n| onChange    | 数量改变时回调 |       (count) => void |—— |—— |\\r\\n\");\n\n//# sourceURL=webpack:///./examples/markdown/controllCount-doc.md?");

/***/ }),

/***/ "./packages/controllCount/controllCount.tsx":
/*!**************************************************!*\
  !*** ./packages/controllCount/controllCount.tsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ \"./node_modules/tslib/tslib.es6.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils_classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/classnames */ \"./packages/utils/classnames.ts\");\n/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style */ \"./packages/controllCount/style/index.tsx\");\n\r\n\r\n\r\n\r\n\r\nvar componentName = 'ControllCount';\r\nvar sc = Object(_utils_classnames__WEBPACK_IMPORTED_MODULE_2__[\"createScopedClasses\"])(componentName);\r\nvar ControllCount = function (props) {\r\n    var _a = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(1), stateCount = _a[0], setStateCount = _a[1];\r\n    var inputRef = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useRef\"])(null);\r\n    var count = props.count, minCount = props.minCount, maxCount = props.maxCount, onChange = props.onChange, readOnly = props.readOnly, className = props.className, rest = Object(tslib__WEBPACK_IMPORTED_MODULE_0__[\"__rest\"])(props, [\"count\", \"minCount\", \"maxCount\", \"onChange\", \"readOnly\", \"className\"]);\r\n    Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\r\n        var defaultCount = 'count' in props ? count : 1;\r\n        setStateCount(defaultCount);\r\n        inputRef.current.value = defaultCount + '';\r\n    }, []);\r\n    var computedNum = function (val) {\r\n        if (!validateCount(val, true)) {\r\n            return;\r\n        }\r\n        var currentCount = stateCount + val;\r\n        setStateCount(function () { return currentCount; });\r\n        inputRef.current.value = currentCount + '';\r\n        onChange && onChange(currentCount);\r\n    };\r\n    var validateCount = function (val, isBtnClick) {\r\n        if (isBtnClick) {\r\n            if (val < 0 && stateCount === minCount) {\r\n                return;\r\n            }\r\n            if (val > 0 && stateCount >= maxCount) {\r\n                return;\r\n            }\r\n        }\r\n        else {\r\n            if (val < minCount) {\r\n                return;\r\n            }\r\n            if (val > maxCount) {\r\n                return;\r\n            }\r\n        }\r\n        return true;\r\n    };\r\n    var onBlur = function (e) {\r\n        var value = +e.target.value;\r\n        if (!/^\\d+$/.test(value.toString())) {\r\n            inputRef.current.value = stateCount + '';\r\n            return;\r\n        }\r\n        if (!validateCount(value)) {\r\n            inputRef.current.value = stateCount + '';\r\n            return;\r\n        }\r\n        setStateCount(function () { return value; });\r\n        onChange && onChange(value);\r\n    };\r\n    return (react__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"](\"div\", Object(tslib__WEBPACK_IMPORTED_MODULE_0__[\"__assign\"])({ className: Object(_utils_classnames__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(sc(''), className) }, rest),\r\n        react__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"](\"button\", { className: Object(_utils_classnames__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(sc('btn', 'next'), { disabled: stateCount <= 1 }), onClick: function () { return computedNum(-1); } }, \"-\"),\r\n        react__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"](\"input\", { type: \"text\", ref: inputRef, onBlur: onBlur, readOnly: readOnly }),\r\n        react__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"](\"button\", { className: Object(_utils_classnames__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(sc('btn', 'next'), { disabled: stateCount >= maxCount }), onClick: function () { return computedNum(1); } }, \"+\")));\r\n};\r\nControllCount.displayName = componentName;\r\nControllCount.defaultProps = {\r\n    count: 1,\r\n    minCount: 1,\r\n    readOnly: false,\r\n    maxCount: 10,\r\n};\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (ControllCount);\r\n\n\n//# sourceURL=webpack:///./packages/controllCount/controllCount.tsx?");

/***/ }),

/***/ "./packages/controllCount/style/index.scss":
/*!*************************************************!*\
  !*** ./packages/controllCount/style/index.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./packages/controllCount/style/index.scss?");

/***/ }),

/***/ "./packages/controllCount/style/index.tsx":
/*!************************************************!*\
  !*** ./packages/controllCount/style/index.tsx ***!
  \************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.scss */ \"./packages/controllCount/style/index.scss\");\n/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_0__);\n\r\n\n\n//# sourceURL=webpack:///./packages/controllCount/style/index.tsx?");

/***/ })

}]);