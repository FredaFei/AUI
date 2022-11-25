(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[13],{

/***/ "./examples/collapse.example.tsx":
/*!***************************************!*\
  !*** ./examples/collapse.example.tsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _packages_collapse_collapse__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../packages/collapse/collapse */ \"./packages/collapse/collapse.tsx\");\n/* harmony import */ var _packages_collapse_pane__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../packages/collapse/pane */ \"./packages/collapse/pane.tsx\");\n/* harmony import */ var _packages_icon_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../packages/icon/icon */ \"./packages/icon/icon.tsx\");\n/* harmony import */ var _markdown_collapse_demo_1_md__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./markdown/collapse-demo-1.md */ \"./examples/markdown/collapse-demo-1.md\");\n/* harmony import */ var _markdown_collapse_demo_2_md__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./markdown/collapse-demo-2.md */ \"./examples/markdown/collapse-demo-2.md\");\n/* harmony import */ var _markdown_collapse_demo_3_md__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./markdown/collapse-demo-3.md */ \"./examples/markdown/collapse-demo-3.md\");\n/* harmony import */ var _codeBox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./codeBox */ \"./examples/codeBox.tsx\");\n/* harmony import */ var _markdown__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./markdown */ \"./examples/markdown.tsx\");\n/* harmony import */ var _markdown_collapse_doc_md__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./markdown/collapse-doc.md */ \"./examples/markdown/collapse-doc.md\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (props) {\r\n    var selected1 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(['1'])[0];\r\n    var onChange = function (checked) {\r\n        console.log(\"\\u6211\\u662F\" + checked);\r\n    };\r\n    return (react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", { className: \"exp-box\" },\r\n        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"h3\", null, \"\\u57FA\\u7840\\u5E94\\u7528\"),\r\n        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", { className: \"exp-section\" },\r\n            react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_packages_collapse_collapse__WEBPACK_IMPORTED_MODULE_1__[\"default\"], { defaultActiveKey: selected1, onChange: onChange },\r\n                react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_packages_collapse_pane__WEBPACK_IMPORTED_MODULE_2__[\"default\"], { header: \"This is panel header 1\", name: \"1\" },\r\n                    react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"p\", null, \"This is pane content 1\")),\r\n                react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_packages_collapse_pane__WEBPACK_IMPORTED_MODULE_2__[\"default\"], { header: \"This is panel header 2\", name: \"2\" },\r\n                    react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"p\", null, \"This is pane content 2\")),\r\n                react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_packages_collapse_pane__WEBPACK_IMPORTED_MODULE_2__[\"default\"], { header: \"This is panel header 3\", name: \"3\" },\r\n                    react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"p\", null, \"This is pane content 3\"))),\r\n            react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_codeBox__WEBPACK_IMPORTED_MODULE_7__[\"default\"], { content: _markdown_collapse_demo_1_md__WEBPACK_IMPORTED_MODULE_4__[\"default\"] })),\r\n        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"h3\", null, \"\\u624B\\u98CE\\u7434\"),\r\n        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", { className: \"exp-section\" },\r\n            react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_packages_collapse_collapse__WEBPACK_IMPORTED_MODULE_1__[\"default\"], { accordion: true, defaultActiveKey: ['1'] },\r\n                react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_packages_collapse_pane__WEBPACK_IMPORTED_MODULE_2__[\"default\"], { header: \"This is panel header 1\", name: \"1\" },\r\n                    react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"p\", null, \"This is pane content 1\")),\r\n                react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_packages_collapse_pane__WEBPACK_IMPORTED_MODULE_2__[\"default\"], { header: \"This is panel header 2\", name: \"2\" },\r\n                    react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"p\", null, \"This is pane content 2\")),\r\n                react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_packages_collapse_pane__WEBPACK_IMPORTED_MODULE_2__[\"default\"], { header: \"This is panel header 3\", name: \"3\", disabled: true },\r\n                    react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"p\", null, \"This is pane content 3\"))),\r\n            react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_codeBox__WEBPACK_IMPORTED_MODULE_7__[\"default\"], { content: _markdown_collapse_demo_2_md__WEBPACK_IMPORTED_MODULE_5__[\"default\"] })),\r\n        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"h3\", null, \"\\u81EA\\u5B9A\\u4E49\\u72B6\\u6001\"),\r\n        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", { className: \"exp-section\" },\r\n            react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_packages_collapse_collapse__WEBPACK_IMPORTED_MODULE_1__[\"default\"], { activeKey: ['1', '3'], className: \"custom-desk\", expandIcon: function (active) { return (react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_packages_icon_icon__WEBPACK_IMPORTED_MODULE_3__[\"default\"], { name: \"upload\", rotate: active ? 90 : 0, className: \"am-icon-animation\" })); } },\r\n                react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_packages_collapse_pane__WEBPACK_IMPORTED_MODULE_2__[\"default\"], { header: \"This is panel header 1\", visibleIcon: false, name: \"1\" },\r\n                    react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"p\", null, \"This is pane content 1\")),\r\n                react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_packages_collapse_pane__WEBPACK_IMPORTED_MODULE_2__[\"default\"], { header: \"This is panel header 2\", name: \"2\" },\r\n                    react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"p\", null, \"This is pane content 2\")),\r\n                react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_packages_collapse_pane__WEBPACK_IMPORTED_MODULE_2__[\"default\"], { header: \"This is panel header 3\", name: \"3\" },\r\n                    react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"p\", null, \"This is pane content 3\"))),\r\n            react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_codeBox__WEBPACK_IMPORTED_MODULE_7__[\"default\"], { content: _markdown_collapse_demo_3_md__WEBPACK_IMPORTED_MODULE_6__[\"default\"] })),\r\n        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_markdown__WEBPACK_IMPORTED_MODULE_8__[\"default\"], { source: _markdown_collapse_doc_md__WEBPACK_IMPORTED_MODULE_9__[\"default\"] })));\r\n});\r\n\n\n//# sourceURL=webpack:///./examples/collapse.example.tsx?");

/***/ }),

/***/ "./examples/markdown/collapse-demo-1.md":
/*!**********************************************!*\
  !*** ./examples/markdown/collapse-demo-1.md ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"``` jsx harmony\\r\\nimport * as React from 'react'\\r\\nimport {useState} from 'react'\\r\\n\\r\\nexport default function (props) {\\r\\n  const [selected1] = useState(['1'])\\r\\n  const onChange = (checked)=> {\\r\\n    console.log(`我是${checked}`)\\r\\n  }\\r\\n  return (\\r\\n    <div className=\\\"exp-section\\\">\\r\\n      <Collapse defaultActiveKey={selected1} onChange={onChange}>\\r\\n        <Pane header=\\\"This is panel header 1\\\" name=\\\"1\\\">\\r\\n          <p>This is pane content 1</p>\\r\\n        </Pane>\\r\\n        <Pane header=\\\"This is panel header 2\\\" name=\\\"2\\\">\\r\\n          <p>This is pane content 2</p>\\r\\n        </Pane>\\r\\n        <Pane header=\\\"This is panel header 3\\\" name=\\\"3\\\">\\r\\n          <p>This is pane content 3</p>\\r\\n        </Pane>\\r\\n      </Collapse>\\r\\n    </div>\\r\\n  )\\r\\n}\\r\\n```\");\n\n//# sourceURL=webpack:///./examples/markdown/collapse-demo-1.md?");

/***/ }),

/***/ "./examples/markdown/collapse-demo-2.md":
/*!**********************************************!*\
  !*** ./examples/markdown/collapse-demo-2.md ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"``` jsx harmony\\r\\nimport * as React from 'react'\\r\\n\\r\\nexport default function (props) {\\r\\n  return (\\r\\n    <div className=\\\"exp-section\\\">\\r\\n      <Collapse accordion>\\r\\n        <Pane header=\\\"This is panel header 1\\\" name=\\\"1\\\">\\r\\n          <p>This is pane content 1</p>\\r\\n        </Pane>\\r\\n        <Pane header=\\\"This is panel header 2\\\" name=\\\"2\\\">\\r\\n          <p>This is pane content 2</p>\\r\\n        </Pane>\\r\\n        <Pane header=\\\"This is panel header 3\\\" name=\\\"3\\\" disabled>\\r\\n          <p>This is pane content 3</p>\\r\\n        </Pane>\\r\\n      </Collapse>\\r\\n    </div>\\r\\n  )\\r\\n}\\r\\n```\");\n\n//# sourceURL=webpack:///./examples/markdown/collapse-demo-2.md?");

/***/ }),

/***/ "./examples/markdown/collapse-demo-3.md":
/*!**********************************************!*\
  !*** ./examples/markdown/collapse-demo-3.md ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"``` jsx harmony\\r\\nimport * as React from 'react'\\r\\n\\r\\nexport default function (props) {\\r\\n  return (\\r\\n    <div className=\\\"exp-section\\\">\\r\\n      <Collapse\\r\\n        activeKey={['1', '3']}\\r\\n        className=\\\"custom-desk\\\"\\r\\n        expandIcon={active => (\\r\\n          <Icon\\r\\n            name=\\\"upload\\\"\\r\\n            rotate={active ? 90 : 0}\\r\\n            className=\\\"am-icon-animation\\\"\\r\\n          />\\r\\n        )}\\r\\n      >\\r\\n        <Pane header=\\\"This is panel header 1\\\" visibleIcon={false} name=\\\"1\\\">\\r\\n          <p>This is pane content 1</p>\\r\\n        </Pane>\\r\\n        <Pane header=\\\"This is panel header 2\\\" name=\\\"2\\\">\\r\\n          <p>This is pane content 2</p>\\r\\n        </Pane>\\r\\n        <Pane header=\\\"This is panel header 3\\\" name=\\\"3\\\">\\r\\n          <p>This is pane content 3</p>\\r\\n        </Pane>\\r\\n      </Collapse>\\r\\n    </div>\\r\\n  )\\r\\n}\\r\\n```\");\n\n//# sourceURL=webpack:///./examples/markdown/collapse-demo-3.md?");

/***/ }),

/***/ "./examples/markdown/collapse-doc.md":
/*!*******************************************!*\
  !*** ./examples/markdown/collapse-doc.md ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"### API\\r\\n### Collapse\\r\\n\\r\\n| 参数         |说明        |类型 |默认值 |可选值 |\\r\\n| ------------ | :----------------|:------- | :----- | :----- |\\r\\n| activeKey         |当前展开面板的key |String[] |—— |—— |\\r\\n| defaultActiveKey |初始化展开面板的key |String[] |—— |—— |\\r\\n| accordion |手风琴模式 |Boolean |false |`true` |\\r\\n| expandIcon |自定义切换图标 |(active: boolean) => React.ReactNode |——|—— |\\r\\n| className      |自定义类名  |String |—— |—— |\\r\\n| style      |自定义样式  |React.CSSProperties |—— |—— |\\r\\n| onChange    | 切换面板的回调 |       (key) => void |—— |—— |\\r\\n\\r\\n### Pane\\r\\n\\r\\n| 参数         |说明        |类型 |默认值 |可选值 |\\r\\n| ------------ | :----------------|:------- | :----- | :----- |\\r\\n| name |唯一标识 |String |—— |—— |\\r\\n| header |面板头内容 |React.ReactNode |—— |——|\\r\\n| disabled |禁用状态 |Boolean |false |true|\\r\\n| className      |自定义类名  |String |—— |—— |\\r\\n| style      |自定义样式  |React.CSSProperties |—— |—— |\\r\\n\");\n\n//# sourceURL=webpack:///./examples/markdown/collapse-doc.md?");

/***/ }),

/***/ "./packages/collapse/collapse.tsx":
/*!****************************************!*\
  !*** ./packages/collapse/collapse.tsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ \"./node_modules/tslib/tslib.es6.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils_classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/classnames */ \"./packages/utils/classnames.ts\");\n/* harmony import */ var _icon_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../icon/icon */ \"./packages/icon/icon.tsx\");\n/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style */ \"./packages/collapse/style/index.tsx\");\n\r\n\r\n\r\n\r\n\r\n\r\nvar componentName = 'Collapse';\r\nvar sc = Object(_utils_classnames__WEBPACK_IMPORTED_MODULE_2__[\"createScopedClasses\"])(componentName);\r\nvar Collapse = function (props) {\r\n    var _a = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])([]), selected = _a[0], setSelected = _a[1];\r\n    var className = props.className, defaultActiveKey = props.defaultActiveKey, activeKey = props.activeKey, accordion = props.accordion, expandIcon = props.expandIcon;\r\n    Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\r\n        var selected = 'defaultActiveKey' in props ? defaultActiveKey : 'activeKey' in props ? activeKey : [];\r\n        setSelected(selected);\r\n    }, []);\r\n    var keysRef = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useRef\"])([]);\r\n    var handleClick = function (key, e, disabled) {\r\n        if (disabled) {\r\n            return false;\r\n        }\r\n        var copyDefaultKeys = Object(tslib__WEBPACK_IMPORTED_MODULE_0__[\"__spreadArrays\"])(selected);\r\n        var index = copyDefaultKeys.indexOf(key);\r\n        if (index >= 0) {\r\n            //close\r\n            copyDefaultKeys.splice(index, 1);\r\n        }\r\n        else {\r\n            // open\r\n            if (accordion) {\r\n                copyDefaultKeys = [key];\r\n            }\r\n            else {\r\n                copyDefaultKeys.push(key);\r\n            }\r\n        }\r\n        setSelected(copyDefaultKeys);\r\n        props.onChange && props.onChange(key, e);\r\n    };\r\n    var renderExpandIcon = function (active) {\r\n        return expandIcon ? expandIcon(active) :\r\n            react__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"](_icon_icon__WEBPACK_IMPORTED_MODULE_3__[\"default\"], { name: \"right\", className: Object(_utils_classnames__WEBPACK_IMPORTED_MODULE_2__[\"default\"])('am-icon-animation', active ? 'active' : '') });\r\n    };\r\n    var renderCollapseHead = function () {\r\n        return react__WEBPACK_IMPORTED_MODULE_1__[\"Children\"].map(props.children, function (child) {\r\n            if (!child) {\r\n                return false;\r\n            }\r\n            var _a = child.props, visibleIcon = _a.visibleIcon, disabled = _a.disabled, header = _a.header, name = _a.name;\r\n            var active = selected.includes(name);\r\n            keysRef.current.push(name);\r\n            return react__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"](\"div\", { key: name, className: Object(_utils_classnames__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(sc('item'), { disabled: disabled, active: active }) },\r\n                react__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"](\"div\", { className: sc('item-name'), onClick: function (e) { return handleClick(name, e, disabled || false); } },\r\n                    visibleIcon && renderExpandIcon(active),\r\n                    header),\r\n                react__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"](\"div\", { className: sc('item-content') }, !disabled && react__WEBPACK_IMPORTED_MODULE_1__[\"cloneElement\"](child, {})));\r\n        });\r\n    };\r\n    return react__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"](\"div\", { \"data-role\": componentName, className: Object(_utils_classnames__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(sc('wrapper'), className) }, renderCollapseHead());\r\n};\r\nCollapse.displayName = componentName;\r\nCollapse.defaultProps = {\r\n    accordion: false\r\n};\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Collapse);\r\n\n\n//# sourceURL=webpack:///./packages/collapse/collapse.tsx?");

/***/ }),

/***/ "./packages/collapse/pane.tsx":
/*!************************************!*\
  !*** ./packages/collapse/pane.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utils_classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/classnames */ \"./packages/utils/classnames.ts\");\n/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style */ \"./packages/collapse/style/index.tsx\");\n\r\n\r\n\r\nvar componentName = 'Pane';\r\nvar Pane = function (props) {\r\n    return react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", { className: Object(_utils_classnames__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(['content-inner', props.className]), style: props.style }, props.children);\r\n};\r\nPane.displayName = componentName;\r\nPane.defaultProps = {\r\n    visibleIcon: true,\r\n    disabled: false,\r\n    active: false\r\n};\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Pane);\r\n\n\n//# sourceURL=webpack:///./packages/collapse/pane.tsx?");

/***/ }),

/***/ "./packages/collapse/style/index.scss":
/*!********************************************!*\
  !*** ./packages/collapse/style/index.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./packages/collapse/style/index.scss?");

/***/ }),

/***/ "./packages/collapse/style/index.tsx":
/*!*******************************************!*\
  !*** ./packages/collapse/style/index.tsx ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.scss */ \"./packages/collapse/style/index.scss\");\n/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_0__);\n\r\n\n\n//# sourceURL=webpack:///./packages/collapse/style/index.tsx?");

/***/ })

}]);