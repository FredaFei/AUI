(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[14],{

/***/ "./examples/checkbox.example.tsx":
/*!***************************************!*\
  !*** ./examples/checkbox.example.tsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ \"./node_modules/tslib/tslib.es6.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _packages_checkbox_checkbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../packages/checkbox/checkbox */ \"./packages/checkbox/checkbox.tsx\");\n/* harmony import */ var _markdown_checkbox_demo_1_md__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./markdown/checkbox-demo-1.md */ \"./examples/markdown/checkbox-demo-1.md\");\n/* harmony import */ var _markdown_checkbox_demo_2_md__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./markdown/checkbox-demo-2.md */ \"./examples/markdown/checkbox-demo-2.md\");\n/* harmony import */ var _markdown_checkbox_demo_3_md__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./markdown/checkbox-demo-3.md */ \"./examples/markdown/checkbox-demo-3.md\");\n/* harmony import */ var _codeBox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./codeBox */ \"./examples/codeBox.tsx\");\n/* harmony import */ var _markdown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./markdown */ \"./examples/markdown.tsx\");\n/* harmony import */ var _markdown_checkbox_doc_md__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./markdown/checkbox-doc.md */ \"./examples/markdown/checkbox-doc.md\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nvar initialState = { selected: [], checkAll: false, indeterminate: false };\r\nvar groups = [\r\n    { name: 'fruit', value: 'apple' },\r\n    { name: 'fruit', value: 'peach' },\r\n    { name: 'fruit', value: 'orange' },\r\n    { name: 'fruit', value: 'pear' },\r\n    { name: 'fruit', value: 'banana' }\r\n];\r\nfunction reducer(state, action) {\r\n    switch (action.type) {\r\n        case 'add':\r\n            var selected1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__[\"__spreadArrays\"])(state.selected, [action.value]);\r\n            return {\r\n                selected: selected1,\r\n                checkAll: selected1.length === groups.length,\r\n                indeterminate: selected1.length < groups.length\r\n            };\r\n            break;\r\n        case 'remove':\r\n            var selected2 = state.selected.filter(function (i) { return i !== action.value; });\r\n            return {\r\n                selected: selected2,\r\n                checkAll: selected2.length === groups.length,\r\n                indeterminate: selected2.length < groups.length && selected2.length !== 0\r\n            };\r\n            break;\r\n        case 'toggleAll':\r\n            var result_1 = [];\r\n            groups.forEach(function (i) { return result_1.push(i.value); });\r\n            return {\r\n                selected: action.checkAll ? result_1 : [],\r\n                checkAll: action.checkAll,\r\n                indeterminate: false\r\n            };\r\n            break;\r\n        default:\r\n            return state;\r\n            break;\r\n    }\r\n}\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (props) {\r\n    var _a = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false), checked1 = _a[0], setChecked1 = _a[1];\r\n    var _b = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(true), checked2 = _b[0], setChecked2 = _b[1];\r\n    var _c = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useReducer\"])(reducer, initialState), state = _c[0], dispatch = _c[1];\r\n    var onChange1 = function (e) {\r\n        setChecked1(e.target.checked);\r\n    };\r\n    var onChange2 = function (e) {\r\n        setChecked2(e.target.checked);\r\n    };\r\n    var onChange3 = function (e) {\r\n        var value = e.target.value;\r\n        dispatch({ value: value, type: state.selected.includes(value) ? 'remove' : 'add' });\r\n    };\r\n    var onCheckAllChange = function (e) {\r\n        var checked = e.target.checked;\r\n        dispatch({\r\n            type: 'toggleAll',\r\n            checkAll: checked\r\n        });\r\n    };\r\n    var onChange4 = function () { };\r\n    return (react__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"](\"div\", { className: \"exp-box\" },\r\n        react__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"](\"h3\", null, \"\\u57FA\\u7840\\u5E94\\u7528\"),\r\n        react__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"](\"div\", { className: \"exp-section\" },\r\n            react__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"](_packages_checkbox_checkbox__WEBPACK_IMPORTED_MODULE_2__[\"default\"], { onChange: onChange1, checked: checked1 }, \"apple\"),\r\n            react__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"](_packages_checkbox_checkbox__WEBPACK_IMPORTED_MODULE_2__[\"default\"], { onChange: onChange2, checked: checked2 }, \"apple\"),\r\n            react__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"](_codeBox__WEBPACK_IMPORTED_MODULE_6__[\"default\"], { content: _markdown_checkbox_demo_1_md__WEBPACK_IMPORTED_MODULE_3__[\"default\"] })),\r\n        react__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"](\"h3\", null, \"\\u5168\\u9009\"),\r\n        react__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"](\"div\", { className: \"exp-section\" },\r\n            react__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"](_packages_checkbox_checkbox__WEBPACK_IMPORTED_MODULE_2__[\"default\"], { indeterminate: state.indeterminate, onChange: onCheckAllChange, checked: state.checkAll }, \"\\u5168\\u9009\\u6C34\\u679C\"),\r\n            react__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"](\"div\", { style: { padding: '10px 0' } }, groups.map(function (i) { return (react__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"](\"div\", null,\r\n                react__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"](_packages_checkbox_checkbox__WEBPACK_IMPORTED_MODULE_2__[\"default\"], { key: i.value, value: i.value, checked: state.selected.includes(i.value), onChange: onChange3, name: i.name }, i.value))); })),\r\n            react__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"](\"p\", null,\r\n                \"\\u5F53\\u524D\\u9009\\u4E2D\\u7684\\u6C34\\u679C: \",\r\n                JSON.stringify(state.selected)),\r\n            react__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"](_codeBox__WEBPACK_IMPORTED_MODULE_6__[\"default\"], { content: _markdown_checkbox_demo_2_md__WEBPACK_IMPORTED_MODULE_4__[\"default\"] })),\r\n        react__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"](\"h3\", null, \"\\u4E0D\\u53EF\\u7528\\u72B6\\u6001\"),\r\n        react__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"](\"div\", { className: \"exp-section\" },\r\n            react__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"](_packages_checkbox_checkbox__WEBPACK_IMPORTED_MODULE_2__[\"default\"], { checked: true, onChange: onChange4, disabled: true }, \"apple\"),\r\n            react__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"](_codeBox__WEBPACK_IMPORTED_MODULE_6__[\"default\"], { content: _markdown_checkbox_demo_3_md__WEBPACK_IMPORTED_MODULE_5__[\"default\"] })),\r\n        react__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"](_markdown__WEBPACK_IMPORTED_MODULE_7__[\"default\"], { source: _markdown_checkbox_doc_md__WEBPACK_IMPORTED_MODULE_8__[\"default\"] })));\r\n});\r\n\n\n//# sourceURL=webpack:///./examples/checkbox.example.tsx?");

/***/ }),

/***/ "./examples/markdown/checkbox-demo-1.md":
/*!**********************************************!*\
  !*** ./examples/markdown/checkbox-demo-1.md ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"``` jsx harmony\\r\\nimport * as React from 'react'\\r\\nimport {useState} from 'react'\\r\\n\\r\\nexport default function (props) {\\r\\n  const [checked1, setChecked1] = useState(false)\\r\\n  const [checked2, setChecked2] = useState(true)\\r\\n\\r\\n  const onChange1 = (e) => {\\r\\n    setChecked1(e.target.checked)\\r\\n  }\\r\\n  const onChange2 = (e) => {\\r\\n    setChecked2(e.target.checked)\\r\\n  }\\r\\n  return (\\r\\n    <div className=\\\"exp-section\\\">\\r\\n      <Checkbox onChange={onChange1} checked={checked1}>apple</Checkbox>\\r\\n      <Checkbox onChange={onChange2} checked={checked2}>apple</Checkbox>\\r\\n    </div>\\r\\n  )\\r\\n}\\r\\n```\");\n\n//# sourceURL=webpack:///./examples/markdown/checkbox-demo-1.md?");

/***/ }),

/***/ "./examples/markdown/checkbox-demo-2.md":
/*!**********************************************!*\
  !*** ./examples/markdown/checkbox-demo-2.md ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"``` jsx harmony\\r\\nimport * as React from 'react'\\r\\nimport {useState, useReducer} from 'react'\\r\\n\\r\\nconst initialState = {selected: [], checkAll: false, indeterminate: false}\\r\\nconst groups = [\\r\\n  {name: 'fruit', value: 'apple'},\\r\\n  {name: 'fruit', value: 'peach'},\\r\\n  {name: 'fruit', value: 'orange'},\\r\\n  {name: 'fruit', value: 'pear'},\\r\\n  {name: 'fruit', value: 'banana'}\\r\\n]\\r\\n\\r\\n\\r\\nfunction reducer(state, action) {\\r\\n  switch (action.type) {\\r\\n    case 'add':\\r\\n      const selected1 = [...state.selected, action.value!]\\r\\n      return {\\r\\n        selected: selected1,\\r\\n        checkAll: selected1.length === groups.length,\\r\\n        indeterminate:\\r\\n          selected1.length! < groups.length\\r\\n      }\\r\\n      break\\r\\n    case 'remove':\\r\\n      const selected2 = state.selected.filter(i => i !== action.value)\\r\\n      return {\\r\\n        selected: selected2,\\r\\n        checkAll: selected2.length === groups.length,\\r\\n        indeterminate:\\r\\n          selected2.length! < groups.length && selected2.length! !==0\\r\\n      }\\r\\n      break\\r\\n    case 'toggleAll':\\r\\n      const result: string[] = []\\r\\n      groups.forEach(i => result.push(i.value))\\r\\n      return {\\r\\n        selected: action.checkAll ? result : [],\\r\\n        checkAll: action.checkAll!,\\r\\n        indeterminate: false\\r\\n      }\\r\\n      break\\r\\n    default:\\r\\n      return state\\r\\n      break\\r\\n  }\\r\\n}\\r\\n\\r\\nexport default function (props) {\\r\\n  const [state, dispatch] = useReducer(reducer, initialState)\\r\\n\\r\\n  const onChange3 = (e) => {\\r\\n    const value = e.target.value\\r\\n    dispatch({value, type: state.selected.includes(value) ? 'remove' : 'add'})\\r\\n  }\\r\\n  const onCheckAllChange = (e) => {\\r\\n    const checked = e.target.checked\\r\\n    dispatch({\\r\\n      type: 'toggleAll',\\r\\n      checkAll: checked\\r\\n    })\\r\\n  }\\r\\n  return (\\r\\n    <div className=\\\"exp-section\\\">\\r\\n      <Checkbox\\r\\n        indeterminate={state.indeterminate}\\r\\n        onChange={onCheckAllChange}\\r\\n        checked={state.checkAll}\\r\\n      >全选水果</Checkbox>\\r\\n      <div>\\r\\n        {groups.map(i => (\\r\\n          <Checkbox\\r\\n            key={i.value}\\r\\n            value={i.value}\\r\\n            checked={state.selected.includes(i.value)}\\r\\n            onChange={onChange3}\\r\\n            name={i.name}\\r\\n          >{i.value}</Checkbox>\\r\\n        ))}\\r\\n      </div>\\r\\n      <p>当前选中的水果: {JSON.stringify(state.selected)}</p>\\r\\n    </div>\\r\\n  )\\r\\n}\\r\\n```\");\n\n//# sourceURL=webpack:///./examples/markdown/checkbox-demo-2.md?");

/***/ }),

/***/ "./examples/markdown/checkbox-demo-3.md":
/*!**********************************************!*\
  !*** ./examples/markdown/checkbox-demo-3.md ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"``` jsx harmony\\r\\nimport * as React from 'react'\\r\\n\\r\\nexport default function (props) {\\r\\n  const onChange4 = () => {}\\r\\n  return (\\r\\n    <div className=\\\"exp-section\\\">\\r\\n      <Checkbox checked onChange={onChange4} disabled>apple</Checkbox>\\r\\n    </div>\\r\\n  )\\r\\n}\\r\\n```\");\n\n//# sourceURL=webpack:///./examples/markdown/checkbox-demo-3.md?");

/***/ }),

/***/ "./examples/markdown/checkbox-doc.md":
/*!*******************************************!*\
  !*** ./examples/markdown/checkbox-doc.md ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"### API\\r\\n\\r\\n| 参数         |说明        |类型 |默认值 |可选值 |\\r\\n| ------------ | :----------------|:------- | :----- | :----- |\\r\\n| indeterminate |设置半选状态 |Boolean |false |true |\\r\\n| checked      |设置选中项的值  |Boolean |false |true |\\r\\n| disabled      |设置失效状态  |Boolean |false |true |\\r\\n| className      |自定义类名  |String |—— |—— |\\r\\n| style      |自定义样式  |React.CSSProperties |—— |—— |\\r\\n| onChange    | 选中项改变时触发 |       (event) => void |—— |—— |\\r\\n\\r\\n\");\n\n//# sourceURL=webpack:///./examples/markdown/checkbox-doc.md?");

/***/ }),

/***/ "./packages/checkbox/checkbox.tsx":
/*!****************************************!*\
  !*** ./packages/checkbox/checkbox.tsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ \"./node_modules/tslib/tslib.es6.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils_classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/classnames */ \"./packages/utils/classnames.ts\");\n/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style */ \"./packages/checkbox/style/index.tsx\");\n\r\n\r\n\r\n\r\nvar componentName = 'Checkbox';\r\nvar sc = Object(_utils_classnames__WEBPACK_IMPORTED_MODULE_2__[\"createScopedClasses\"])(componentName);\r\nvar Checkbox = function (props) {\r\n    var indeterminate = props.indeterminate, disabled = props.disabled, checked = props.checked, children = props.children, className = props.className, rest = Object(tslib__WEBPACK_IMPORTED_MODULE_0__[\"__rest\"])(props, [\"indeterminate\", \"disabled\", \"checked\", \"children\", \"className\"]);\r\n    return (react__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"](\"label\", { className: Object(_utils_classnames__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(sc('wrapper', { disabled: disabled, checked: checked }), className) },\r\n        react__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"](\"span\", { className: sc('input', { indeterminate: indeterminate }) },\r\n            react__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"](\"input\", Object(tslib__WEBPACK_IMPORTED_MODULE_0__[\"__assign\"])({ type: \"checkbox\", className: sc(''), checked: checked }, rest))),\r\n        react__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"](\"span\", { className: sc('label') }, children)));\r\n};\r\nCheckbox.displayName = componentName;\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Checkbox);\r\n\n\n//# sourceURL=webpack:///./packages/checkbox/checkbox.tsx?");

/***/ }),

/***/ "./packages/checkbox/style/index.scss":
/*!********************************************!*\
  !*** ./packages/checkbox/style/index.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./packages/checkbox/style/index.scss?");

/***/ }),

/***/ "./packages/checkbox/style/index.tsx":
/*!*******************************************!*\
  !*** ./packages/checkbox/style/index.tsx ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.scss */ \"./packages/checkbox/style/index.scss\");\n/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_0__);\n\r\n\n\n//# sourceURL=webpack:///./packages/checkbox/style/index.tsx?");

/***/ })

}]);