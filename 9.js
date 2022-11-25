(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[9],{

/***/ "./examples/markdown/switch-demo-1.md":
/*!********************************************!*\
  !*** ./examples/markdown/switch-demo-1.md ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"``` jsx harmony\\r\\nimport * as React from 'react'\\r\\n\\r\\nexport default function (props) {\\r\\n  const onChange = (checked)=> {\\r\\n    console.log(`我是${checked}`)\\r\\n  }\\r\\n  return (\\r\\n    <div className=\\\"exp-section\\\">\\r\\n      <Switch defaultChecked onChange={onChange}/>\\r\\n    </div>\\r\\n  )\\r\\n}\\r\\n```\");\n\n//# sourceURL=webpack:///./examples/markdown/switch-demo-1.md?");

/***/ }),

/***/ "./examples/markdown/switch-demo-2.md":
/*!********************************************!*\
  !*** ./examples/markdown/switch-demo-2.md ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"``` jsx harmony\\r\\nimport * as React from 'react'\\r\\nimport {useState} from 'react'\\r\\n\\r\\nexport default function (props) {\\r\\n  const [checked, setChecked] = useState(true)\\r\\n  const onToggleSwitch = ()=> {\\r\\n    setChecked(!checked)\\r\\n  }\\r\\n  return (\\r\\n    <div className=\\\"exp-section\\\">\\r\\n      <Switch checked={checked} style={{marginRight: '30px'}}/>\\r\\n      <Button onClick={onToggleSwitch}>toggle</Button>\\r\\n    </div>\\r\\n  )\\r\\n}\\r\\n```\");\n\n//# sourceURL=webpack:///./examples/markdown/switch-demo-2.md?");

/***/ }),

/***/ "./examples/markdown/switch-demo-3.md":
/*!********************************************!*\
  !*** ./examples/markdown/switch-demo-3.md ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"``` jsx harmony\\r\\nimport * as React from 'react'\\r\\n\\r\\nexport default function (props) {\\r\\n  return (\\r\\n    <div className=\\\"exp-section\\\">\\r\\n      <Switch disabled defaultChecked style={{marginRight: '30px'}}/>\\r\\n      <Switch disabled/>\\r\\n    </div>\\r\\n  )\\r\\n}\\r\\n```\");\n\n//# sourceURL=webpack:///./examples/markdown/switch-demo-3.md?");

/***/ }),

/***/ "./examples/markdown/switch-doc.md":
/*!*****************************************!*\
  !*** ./examples/markdown/switch-doc.md ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"### API\\r\\n\\r\\n| 参数         |说明        |类型 |默认值 |可选值 |\\r\\n| ------------ | :----------------|:------- | :----- | :----- |\\r\\n| defaultChecked |设置默认选中状态 |Boolean |false |true |\\r\\n| checked      |设置选中项的值  |Boolean |false |true |\\r\\n| disabled      |设置失效状态  |Boolean |false |true |\\r\\n| className      |自定义类名  |string |—— |—— |\\r\\n| style      |自定义样式  |React.CSSProperties |—— |—— |\\r\\n| onChange    | 选中项改变时触发 |       (event) => void |—— |—— |\\r\\n\\r\\n\");\n\n//# sourceURL=webpack:///./examples/markdown/switch-doc.md?");

/***/ }),

/***/ "./examples/switch.example.tsx":
/*!*************************************!*\
  !*** ./examples/switch.example.tsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _packages_switch_switch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../packages/switch/switch */ \"./packages/switch/switch.tsx\");\n/* harmony import */ var _packages_button_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../packages/button/button */ \"./packages/button/button.tsx\");\n/* harmony import */ var _markdown_switch_demo_1_md__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./markdown/switch-demo-1.md */ \"./examples/markdown/switch-demo-1.md\");\n/* harmony import */ var _markdown_switch_demo_2_md__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./markdown/switch-demo-2.md */ \"./examples/markdown/switch-demo-2.md\");\n/* harmony import */ var _markdown_switch_demo_3_md__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./markdown/switch-demo-3.md */ \"./examples/markdown/switch-demo-3.md\");\n/* harmony import */ var _codeBox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./codeBox */ \"./examples/codeBox.tsx\");\n/* harmony import */ var _markdown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./markdown */ \"./examples/markdown.tsx\");\n/* harmony import */ var _markdown_switch_doc_md__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./markdown/switch-doc.md */ \"./examples/markdown/switch-doc.md\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (props) {\r\n    var _a = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(true), checked = _a[0], setChecked = _a[1];\r\n    var onChange = function (checked) {\r\n        console.log(\"\\u6211\\u662F\" + checked);\r\n    };\r\n    var onToggleSwitch = function () {\r\n        setChecked(!checked);\r\n    };\r\n    return (react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", { className: \"exp-box\" },\r\n        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"h3\", null, \"\\u57FA\\u7840\\u5E94\\u7528\"),\r\n        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", { className: \"exp-section\" },\r\n            react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_packages_switch_switch__WEBPACK_IMPORTED_MODULE_1__[\"default\"], { defaultChecked: true, onChange: onChange }),\r\n            react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_codeBox__WEBPACK_IMPORTED_MODULE_6__[\"default\"], { content: _markdown_switch_demo_1_md__WEBPACK_IMPORTED_MODULE_3__[\"default\"] })),\r\n        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"h3\", null, \"\\u624B\\u52A8\\u89E6\\u53D1 onChange\"),\r\n        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", { className: \"exp-section\" },\r\n            react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_packages_switch_switch__WEBPACK_IMPORTED_MODULE_1__[\"default\"], { checked: checked, style: { marginRight: '30px' } }),\r\n            react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_packages_button_button__WEBPACK_IMPORTED_MODULE_2__[\"default\"], { onClick: onToggleSwitch }, \"toggle\"),\r\n            react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_codeBox__WEBPACK_IMPORTED_MODULE_6__[\"default\"], { content: _markdown_switch_demo_2_md__WEBPACK_IMPORTED_MODULE_4__[\"default\"] })),\r\n        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"h3\", null, \"\\u4E0D\\u53EF\\u7528\\u72B6\\u6001\"),\r\n        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", { className: \"exp-section\" },\r\n            react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_packages_switch_switch__WEBPACK_IMPORTED_MODULE_1__[\"default\"], { disabled: true, defaultChecked: true, style: { marginRight: '30px' } }),\r\n            react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_packages_switch_switch__WEBPACK_IMPORTED_MODULE_1__[\"default\"], { disabled: true }),\r\n            react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_codeBox__WEBPACK_IMPORTED_MODULE_6__[\"default\"], { content: _markdown_switch_demo_3_md__WEBPACK_IMPORTED_MODULE_5__[\"default\"] })),\r\n        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_markdown__WEBPACK_IMPORTED_MODULE_7__[\"default\"], { source: _markdown_switch_doc_md__WEBPACK_IMPORTED_MODULE_8__[\"default\"] })));\r\n});\r\n\n\n//# sourceURL=webpack:///./examples/switch.example.tsx?");

/***/ }),

/***/ "./packages/button/button.tsx":
/*!************************************!*\
  !*** ./packages/button/button.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ \"./node_modules/tslib/tslib.es6.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils_classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/classnames */ \"./packages/utils/classnames.ts\");\n/* harmony import */ var _icon_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../icon/icon */ \"./packages/icon/icon.tsx\");\n/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style */ \"./packages/button/style/index.tsx\");\n\r\n\r\n\r\n\r\n\r\nvar componentName = 'Button';\r\nvar sc = Object(_utils_classnames__WEBPACK_IMPORTED_MODULE_2__[\"createScopedClasses\"])(componentName);\r\nvar Button = function (props) {\r\n    var handleClick = function (e) {\r\n        var onClick = props.onClick;\r\n        onClick && onClick(e);\r\n    };\r\n    var icon = props.icon, iconPosition = props.iconPosition, style = props.style, className = props.className, children = props.children, rest = Object(tslib__WEBPACK_IMPORTED_MODULE_0__[\"__rest\"])(props, [\"icon\", \"iconPosition\", \"style\", \"className\", \"children\"]);\r\n    var renderButtonBody = function () {\r\n        return icon ? (react__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"](\"div\", { className: Object(_utils_classnames__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(sc('body'), [\r\n                icon && iconPosition && \"icon-\" + iconPosition\r\n            ]) },\r\n            react__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"](_icon_icon__WEBPACK_IMPORTED_MODULE_3__[\"default\"], { name: icon, className: \"icon-name\" }),\r\n            react__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"](\"span\", { className: sc('content') }, children))) : react__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"](\"span\", { className: sc('content') }, children);\r\n    };\r\n    return react__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"](\"button\", Object(tslib__WEBPACK_IMPORTED_MODULE_0__[\"__assign\"])({}, rest, { \"data-role\": componentName, style: style, className: Object(_utils_classnames__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(sc('wrapper'), className), onClick: handleClick }), renderButtonBody());\r\n};\r\nButton.displayName = componentName;\r\nButton.defaultProps = {\r\n    iconPosition: 'left'\r\n};\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Button);\r\n\n\n//# sourceURL=webpack:///./packages/button/button.tsx?");

/***/ }),

/***/ "./packages/button/style/index.scss":
/*!******************************************!*\
  !*** ./packages/button/style/index.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./packages/button/style/index.scss?");

/***/ }),

/***/ "./packages/button/style/index.tsx":
/*!*****************************************!*\
  !*** ./packages/button/style/index.tsx ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.scss */ \"./packages/button/style/index.scss\");\n/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_0__);\n\r\n\n\n//# sourceURL=webpack:///./packages/button/style/index.tsx?");

/***/ }),

/***/ "./packages/switch/style/index.scss":
/*!******************************************!*\
  !*** ./packages/switch/style/index.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./packages/switch/style/index.scss?");

/***/ }),

/***/ "./packages/switch/style/index.tsx":
/*!*****************************************!*\
  !*** ./packages/switch/style/index.tsx ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.scss */ \"./packages/switch/style/index.scss\");\n/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_0__);\n\r\n\n\n//# sourceURL=webpack:///./packages/switch/style/index.tsx?");

/***/ }),

/***/ "./packages/switch/switch.tsx":
/*!************************************!*\
  !*** ./packages/switch/switch.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utils_classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/classnames */ \"./packages/utils/classnames.ts\");\n/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style */ \"./packages/switch/style/index.tsx\");\n\r\n\r\n\r\n\r\nvar componentName = 'Switch';\r\nvar sc = Object(_utils_classnames__WEBPACK_IMPORTED_MODULE_1__[\"createScopedClasses\"])(componentName);\r\nvar initPosition = {\r\n    width: '',\r\n    height: '',\r\n    marginLeft: '',\r\n    marginTop: ''\r\n};\r\nvar Switch = function (props) {\r\n    var _a = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(initPosition), position = _a[0], setPosition = _a[1];\r\n    var _b = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false), currentSelected = _b[0], setCurrentSelected = _b[1];\r\n    var defaultChecked = props.defaultChecked, checked = props.checked, disabled = props.disabled, onChange = props.onChange, style = props.style, className = props.className;\r\n    var isActive = (currentSelected || checked) && 'active';\r\n    var isDisabled = disabled && 'disabled';\r\n    var wrapperClass = Object(_utils_classnames__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(sc('', isActive, isDisabled), className);\r\n    var rippleParentRef = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useRef\"])(null);\r\n    var rippleRef = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useRef\"])(null);\r\n    Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\r\n        var selected = 'defaultChecked' in props ? defaultChecked : 'checked' in props ? checked : false;\r\n        setCurrentSelected(selected);\r\n    }, []);\r\n    Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\r\n        'checked' in props && setCurrentSelected(checked);\r\n        return function () { };\r\n    }, [checked]);\r\n    var onRippleEffect = function () {\r\n        var targetEl = rippleParentRef.current;\r\n        var rippleEl = rippleRef.current;\r\n        rippleEl.classList.remove('active');\r\n        var width = targetEl.getBoundingClientRect().width;\r\n        setPosition({\r\n            width: width * 2 + \"px\",\r\n            height: width * 2 + \"px\",\r\n            marginLeft: \"-\" + width + \"px\",\r\n            marginTop: \"-\" + width + \"px\"\r\n        });\r\n        rippleEl.classList.add('active');\r\n    };\r\n    var onClick = function (event) {\r\n        var disabled = props.disabled;\r\n        if (disabled) {\r\n            return;\r\n        }\r\n        if (checked) {\r\n            return;\r\n        }\r\n        onRippleEffect();\r\n        setCurrentSelected(function () { return !currentSelected; });\r\n        onChange && onChange(!currentSelected, event);\r\n    };\r\n    return react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"label\", { className: wrapperClass, style: style, onClick: onClick },\r\n        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"span\", { className: Object(_utils_classnames__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(sc('core'), [isActive]), ref: rippleParentRef },\r\n            react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"span\", { className: Object(_utils_classnames__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(sc('ripple'), [isActive]), style: position, ref: rippleRef })));\r\n};\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Switch);\r\n\n\n//# sourceURL=webpack:///./packages/switch/switch.tsx?");

/***/ })

}]);