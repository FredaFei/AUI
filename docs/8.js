(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8],{

/***/ "./examples/markdown/pager-demo-1.md":
/*!*******************************************!*\
  !*** ./examples/markdown/pager-demo-1.md ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"``` jsx harmony\\r\\nimport * as React from 'react'\\r\\nimport {useState} from 'react'\\r\\n\\r\\nexport default function (props) {\\r\\n  const [page1, setPage1] = useState(2)\\r\\n  return (\\r\\n    <div className=\\\"exp-section\\\">\\r\\n      <Uploader defaultCurrent={4} total={5} onChange={page => {console.log(page)}}/>\\r\\n      <Uploader current={page1} total={11} onChange={page => setPage1(page)}/>\\r\\n    </div>\\r\\n  )\\r\\n}\\r\\n```\");\n\n//# sourceURL=webpack:///./examples/markdown/pager-demo-1.md?");

/***/ }),

/***/ "./examples/markdown/pager-demo-2.md":
/*!*******************************************!*\
  !*** ./examples/markdown/pager-demo-2.md ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"``` jsx harmony\\r\\nimport * as React from 'react'\\r\\nimport {useState} from 'react'\\r\\n\\r\\nexport default function (props) {\\r\\n  const [page2, setPage2] = useState(1)\\r\\n  return (\\r\\n    <div className=\\\"exp-section\\\">\\r\\n      <Uploader visibleQuickJumper current={page2} total={10} onChange={page => setPage2(page)}/>\\r\\n    </div>\\r\\n  )\\r\\n}\\r\\n```\");\n\n//# sourceURL=webpack:///./examples/markdown/pager-demo-2.md?");

/***/ }),

/***/ "./examples/markdown/pager-doc.md":
/*!****************************************!*\
  !*** ./examples/markdown/pager-doc.md ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"### API\\r\\n\\r\\n| 参数         |说明        |类型 |默认值 |可选值 |\\r\\n| ------------ | :----------------|:------- | :----- | :----- |\\r\\n| current         |设置当前页数 |Number |—— |—— |\\r\\n| defaultCurrent |设置默认的当前页数 |Number |—— |—— |\\r\\n| total |数据总数 |Number |—— |—— |\\r\\n| visibleQuickJumper      |是否可以快速跳转至某页  |Boolean |false |true |\\r\\n| className      |自定义类名  |String |—— |—— |\\r\\n| style      |自定义样式  |React.CSSProperties |—— |—— |\\r\\n| onChange    | 页码改变的回调，参数是改变后的页码 |       (page) => void |—— |—— |\\r\\n\\r\\n\");\n\n//# sourceURL=webpack:///./examples/markdown/pager-doc.md?");

/***/ }),

/***/ "./examples/pager.example.tsx":
/*!************************************!*\
  !*** ./examples/pager.example.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _packages_pager_pager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../packages/pager/pager */ \"./packages/pager/pager.tsx\");\n/* harmony import */ var _markdown_pager_demo_1_md__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./markdown/pager-demo-1.md */ \"./examples/markdown/pager-demo-1.md\");\n/* harmony import */ var _markdown_pager_demo_2_md__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./markdown/pager-demo-2.md */ \"./examples/markdown/pager-demo-2.md\");\n/* harmony import */ var _codeBox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./codeBox */ \"./examples/codeBox.tsx\");\n/* harmony import */ var _markdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./markdown */ \"./examples/markdown.tsx\");\n/* harmony import */ var _markdown_pager_doc_md__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./markdown/pager-doc.md */ \"./examples/markdown/pager-doc.md\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (props) {\r\n    var _a = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(2), page1 = _a[0], setPage1 = _a[1];\r\n    var _b = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(1), page2 = _b[0], setPage2 = _b[1];\r\n    return (react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", { className: \"exp-box\" },\r\n        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"h3\", null, \"\\u57FA\\u7840\\u5E94\\u7528\"),\r\n        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", { className: \"exp-section\" },\r\n            react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_packages_pager_pager__WEBPACK_IMPORTED_MODULE_1__[\"default\"], { defaultCurrent: 4, total: 5, onChange: function (page) { console.log(page); } }),\r\n            react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_packages_pager_pager__WEBPACK_IMPORTED_MODULE_1__[\"default\"], { current: page1, total: 11, onChange: function (page) { return setPage1(page); } }),\r\n            react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_codeBox__WEBPACK_IMPORTED_MODULE_4__[\"default\"], { content: _markdown_pager_demo_1_md__WEBPACK_IMPORTED_MODULE_2__[\"default\"] })),\r\n        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"h3\", null, \"\\u53EF\\u8DF3\\u8F6C\"),\r\n        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", { className: \"exp-section\" },\r\n            react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_packages_pager_pager__WEBPACK_IMPORTED_MODULE_1__[\"default\"], { visibleQuickJumper: true, current: page2, total: 10, onChange: function (page) { return setPage2(page); } }),\r\n            react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_codeBox__WEBPACK_IMPORTED_MODULE_4__[\"default\"], { content: _markdown_pager_demo_2_md__WEBPACK_IMPORTED_MODULE_3__[\"default\"] })),\r\n        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_markdown__WEBPACK_IMPORTED_MODULE_5__[\"default\"], { source: _markdown_pager_doc_md__WEBPACK_IMPORTED_MODULE_6__[\"default\"] })));\r\n});\r\n\n\n//# sourceURL=webpack:///./examples/pager.example.tsx?");

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

/***/ }),

/***/ "./packages/pager/pager.tsx":
/*!**********************************!*\
  !*** ./packages/pager/pager.tsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utils_classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/classnames */ \"./packages/utils/classnames.ts\");\n/* harmony import */ var _utils_collection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/collection */ \"./packages/utils/collection.ts\");\n/* harmony import */ var _icon_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../icon/icon */ \"./packages/icon/icon.tsx\");\n/* harmony import */ var _input_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../input/input */ \"./packages/input/input.tsx\");\n/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style */ \"./packages/pager/style/index.tsx\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nvar componentName = 'Pager';\r\nvar sc = Object(_utils_classnames__WEBPACK_IMPORTED_MODULE_1__[\"createScopedClasses\"])(componentName);\r\nvar Pager = function (props) {\r\n    var visibleQuickJumper = props.visibleQuickJumper, className = props.className, style = props.style;\r\n    var _a = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(1), index = _a[0], _setIndex = _a[1];\r\n    var initializingRef = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useRef\"])(true);\r\n    Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\r\n        if (!initializingRef.current) {\r\n            return;\r\n        }\r\n        var page = 'defaultCurrent' in props ? props.defaultCurrent : props.current ? props.current : 1;\r\n        setIndex(page);\r\n    }, []);\r\n    var onClickItem = function (page) {\r\n        if (page <= props.total && page >= 1) {\r\n            setIndex(page);\r\n        }\r\n    };\r\n    var onInputEnter = function (e) {\r\n        var input = e.target;\r\n        var page = input.value;\r\n        input.value = '';\r\n        if (!/^\\d+$/.test(page)) {\r\n            return;\r\n        }\r\n        var index = parseInt(page) > props.total ? props.total : parseInt(page);\r\n        setIndex(index);\r\n    };\r\n    var setIndex = function (page) {\r\n        initializingRef.current = false;\r\n        _setIndex(page);\r\n        props.onChange && props.onChange(page);\r\n    };\r\n    var jumpPages = function (index) {\r\n        var prev = index - 5 <= 0 ? 1 : index - 5;\r\n        var next = index + 5 >= props.total ? props.total : index + 5;\r\n        return index === 1 ? prev : next;\r\n    };\r\n    var items = function () {\r\n        return Object(_utils_collection__WEBPACK_IMPORTED_MODULE_2__[\"range\"])(1, props.total)\r\n            .filter(function (i) { return i === 1 || i === props.total || Math.abs(i - index) <= 2; })\r\n            .reduce(function (prev, next) {\r\n            var last = prev[prev.length - 1];\r\n            var x = last !== -1 && last - next < -1;\r\n            return prev.concat(x ? [-1, next] : [next]);\r\n        }, [])\r\n            .map(function (item, i) { return item === -1 ?\r\n            (react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"li\", { key: \"pager-split-\" + i, className: sc('list-item', 'split'), onClick: function () { return onClickItem(jumpPages(i)); } },\r\n                react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"span\", null, \"...\")))\r\n            : (react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"li\", { key: \"pager-item-\" + i, className: sc('list-item', { 'list-item-active': index === item }), onClick: function () { return onClickItem(item); } }, item)); });\r\n    };\r\n    return (react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", { className: Object(_utils_classnames__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(sc('wrapper'), className), style: style },\r\n        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"span\", { className: sc('prev', { disabled: index === 1 }), onClick: function () { return onClickItem(index - 1); } },\r\n            react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_icon_icon__WEBPACK_IMPORTED_MODULE_3__[\"default\"], { name: \"left\" })),\r\n        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"ul\", { className: sc('list') }, items()),\r\n        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"span\", { className: sc('next', { disabled: index === props.total }), onClick: function () { return onClickItem(index + 1); } },\r\n            react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_icon_icon__WEBPACK_IMPORTED_MODULE_3__[\"default\"], { name: \"right\" })),\r\n        visibleQuickJumper && (react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"span\", { className: sc('quick-jump') },\r\n            \"\\u8DF3\\u81F3\",\r\n            react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_input_input__WEBPACK_IMPORTED_MODULE_4__[\"default\"], { className: sc('input-page'), type: \"text\", onEnter: onInputEnter }),\r\n            \"\\u9875\"))));\r\n};\r\nPager.displayName = componentName;\r\nPager.defaultProps = {};\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Pager);\r\n\n\n//# sourceURL=webpack:///./packages/pager/pager.tsx?");

/***/ }),

/***/ "./packages/pager/style/index.scss":
/*!*****************************************!*\
  !*** ./packages/pager/style/index.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./packages/pager/style/index.scss?");

/***/ }),

/***/ "./packages/pager/style/index.tsx":
/*!****************************************!*\
  !*** ./packages/pager/style/index.tsx ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.scss */ \"./packages/pager/style/index.scss\");\n/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_0__);\n\r\n\n\n//# sourceURL=webpack:///./packages/pager/style/index.tsx?");

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