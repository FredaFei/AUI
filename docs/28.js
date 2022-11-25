(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[28],{

/***/ "./examples/markdown/uploader-demo-1.md":
/*!**********************************************!*\
  !*** ./examples/markdown/uploader-demo-1.md ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"``` jsx harmony\\r\\nimport * as React from 'react'\\r\\nimport {useState} from \\\"react\\\";\\r\\n\\r\\nexport default function (props) {\\r\\n  const [fileList] = useState([])\\r\\n\\r\\n  return (\\r\\n    <div className=\\\"exp-section\\\">\\r\\n      <Uploader name=\\\"files\\\" action=\\\"https://www.mocky.io/v2/5cc8019d300000980a055e76\\\" fileList={fileList}>\\r\\n        <Button icon=\\\"upload\\\">上传</Button>\\r\\n      </Uploader>\\r\\n    </div>\\r\\n  )\\r\\n}\\r\\n```\");\n\n//# sourceURL=webpack:///./examples/markdown/uploader-demo-1.md?");

/***/ }),

/***/ "./examples/markdown/uploader-demo-2.md":
/*!**********************************************!*\
  !*** ./examples/markdown/uploader-demo-2.md ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"``` jsx harmony\\r\\nimport * as React from 'react'\\r\\nimport {useState} from \\\"react\\\";\\r\\n\\r\\nexport default function (props) {\\r\\n  const [fileList2] = useState([\\r\\n    {\\r\\n      name: \\\"stable-deltail-1.png\\\",\\r\\n      size: 288120,\\r\\n      status: \\\"success\\\",\\r\\n      type: \\\"image/png\\\",\\r\\n      url: \\\"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png\\\"\\r\\n    },\\r\\n    {\\r\\n      name: \\\"stable-deltail-2.png\\\",\\r\\n      size: 288120,\\r\\n      status: \\\"fail\\\",\\r\\n      type: \\\"image/png\\\",\\r\\n      url: \\\"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png\\\"\\r\\n    },\\r\\n    {\\r\\n      name: \\\"stable-deltail-3.png\\\",\\r\\n      size: 288120,\\r\\n      status: \\\"success\\\",\\r\\n      type: \\\"image/png\\\",\\r\\n      url: \\\"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png\\\"\\r\\n    },\\r\\n  ])\\r\\n\\r\\n  return (\\r\\n    <div className=\\\"exp-section\\\">\\r\\n      <Uploader name=\\\"files\\\" action=\\\"https://www.mocky.io/v2/5cc8019d300000980a055e76\\\" fileList={fileList2}\\r\\n        <Button icon=\\\"upload\\\">上传</Button>\\r\\n      </Uploader>\\r\\n    </div>\\r\\n  )\\r\\n}\\r\\n```\");\n\n//# sourceURL=webpack:///./examples/markdown/uploader-demo-2.md?");

/***/ }),

/***/ "./examples/markdown/uploader-doc.md":
/*!*******************************************!*\
  !*** ./examples/markdown/uploader-doc.md ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"### API\\r\\n\\r\\n| 参数         |说明        |类型 |默认值 |可选值 |\\r\\n| ------------ | :----------------|:------- | :----- | :----- |\\r\\n| name         |发到后台的文件参数名 |String |—— |—— |\\r\\n| action |上传的地址 |String | ——|—— |\\r\\n| fileList      |已经上传的文件列表（受控）  |Object[] |—— |—— |\\r\\n| method      |上传请求的 http method  |String |false |true |\\r\\n| accept      |接受上传的文件类型  |String |false |true |\\r\\n| sizeLimit      |接受上传的文件大小  |Number |false |true |\\r\\n| parseResponse      |解析图片预览请求地址  |(data) => void |—— |—— |\\r\\n| onFail      |上传文件失败时的状态  |(err) => void |—— |—— |\\r\\n| onSuccess      |上传文件成功时的状态  |Function |—— |—— |\\r\\n| onChange      |上传文件改变时的状态  |(files) => void |—— |—— |\\r\\n| customRequest      |自定义上传请求  |Function |—— |—— |\\r\\n| className      |自定义类名  |String |—— |—— |\\r\\n| style      |自定义样式  |React.CSSProperties |—— |—— |\\r\\n\\r\\n\");\n\n//# sourceURL=webpack:///./examples/markdown/uploader-doc.md?");

/***/ }),

/***/ "./examples/uploader.example.tsx":
/*!***************************************!*\
  !*** ./examples/uploader.example.tsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _packages_uploader_uploader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../packages/uploader/uploader */ \"./packages/uploader/uploader.tsx\");\n/* harmony import */ var _packages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../packages */ \"./packages/index.tsx\");\n/* harmony import */ var _markdown_uploader_demo_1_md__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./markdown/uploader-demo-1.md */ \"./examples/markdown/uploader-demo-1.md\");\n/* harmony import */ var _markdown_uploader_demo_2_md__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./markdown/uploader-demo-2.md */ \"./examples/markdown/uploader-demo-2.md\");\n/* harmony import */ var _markdown_uploader_doc_md__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./markdown/uploader-doc.md */ \"./examples/markdown/uploader-doc.md\");\n/* harmony import */ var _markdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./markdown */ \"./examples/markdown.tsx\");\n/* harmony import */ var _codeBox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./codeBox */ \"./examples/codeBox.tsx\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (props) {\r\n    var fileList = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])([])[0];\r\n    var fileList2 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])([\r\n        {\r\n            name: \"stable-deltail-1.png\",\r\n            size: 288120,\r\n            status: \"success\",\r\n            type: \"image/png\",\r\n            url: \"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png\"\r\n        },\r\n        {\r\n            name: \"stable-deltail-2.png\",\r\n            size: 288120,\r\n            status: \"fail\",\r\n            type: \"image/png\",\r\n            url: \"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png\"\r\n        },\r\n        {\r\n            name: \"stable-deltail-3.png\",\r\n            size: 288120,\r\n            status: \"success\",\r\n            type: \"image/png\",\r\n            url: \"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png\"\r\n        },\r\n    ])[0];\r\n    var onFail = function (err) {\r\n        console.log(err);\r\n    };\r\n    // const parseResponse = (data)=>{\r\n    //   return `http://127.0.0.1:3000/preview/${data}`\r\n    // }\r\n    return (react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", { className: \"exp-box\" },\r\n        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"h3\", null, \"\\u57FA\\u7840\\u5E94\\u7528\"),\r\n        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", { className: \"exp-section\" },\r\n            react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_packages_uploader_uploader__WEBPACK_IMPORTED_MODULE_1__[\"default\"], { name: \"files\", action: \"https://www.mocky.io/v2/5cc8019d300000980a055e76\", fileList: fileList, onFail: onFail },\r\n                react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_packages__WEBPACK_IMPORTED_MODULE_2__[\"Button\"], { icon: \"upload\" }, \"\\u4E0A\\u4F20\")),\r\n            react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_codeBox__WEBPACK_IMPORTED_MODULE_7__[\"default\"], { content: _markdown_uploader_demo_1_md__WEBPACK_IMPORTED_MODULE_3__[\"default\"] })),\r\n        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"h3\", null, \"\\u5DF2\\u4E0A\\u4F20\\u7684\\u6587\\u4EF6\\u5217\\u8868\"),\r\n        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", { className: \"exp-section\" },\r\n            react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_packages_uploader_uploader__WEBPACK_IMPORTED_MODULE_1__[\"default\"], { name: \"files\", action: \"https://www.mocky.io/v2/5cc8019d300000980a055e76\", fileList: fileList2, onFail: onFail },\r\n                react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_packages__WEBPACK_IMPORTED_MODULE_2__[\"Button\"], { icon: \"upload\" }, \"\\u4E0A\\u4F20\")),\r\n            react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_codeBox__WEBPACK_IMPORTED_MODULE_7__[\"default\"], { content: _markdown_uploader_demo_2_md__WEBPACK_IMPORTED_MODULE_4__[\"default\"] })),\r\n        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_markdown__WEBPACK_IMPORTED_MODULE_6__[\"default\"], { source: _markdown_uploader_doc_md__WEBPACK_IMPORTED_MODULE_5__[\"default\"] })));\r\n});\r\n\n\n//# sourceURL=webpack:///./examples/uploader.example.tsx?");

/***/ })

}]);