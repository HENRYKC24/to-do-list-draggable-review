/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\n  padding: 0;\n  margin: 0;\n  background-color: #f6f6f6;\n  height: 100vh;\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  font-family: sans-serif;\n  color: rgb(150, 145, 145);\n}\n\n.header {\n  position: sticky;\n  top: 0;\n  z-index: 10;\n}\n\n.nav-bar {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0 5vw;\n  background-color: #4c3c3c;\n  color: white;\n  height: 50px;\n}\n\n.app-name {\n  font-size: 1.3rem;\n  font-weight: bold;\n}\n\n.app-name a,\n.item a {\n  text-decoration: none;\n  color: inherit;\n}\n\n.item:hover,\n.app-name:hover {\n  cursor: pointer;\n  color: rgb(226, 214, 214);\n}\n\n.nav-items {\n  display: flex;\n  list-style-type: none;\n  gap: 5vw;\n  padding: 0;\n  margin: 0;\n  font-weight: bold;\n}\n\n.app {\n  width: 90vw;\n  margin: 20px auto;\n  background-color: #fff;\n  box-shadow: 0 3px 5px rgb(163, 158, 158);\n}\n\n.app-heading {\n  text-align: center;\n  padding-bottom: 30px;\n}\n\n.title {\n  font-weight: bold;\n}\n\n.refresh,\n.add {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.custom-row {\n  padding: 10px;\n  border-bottom: 0.5px solid rgb(230, 222, 222);\n  height: 30px;\n}\n\n::placeholder {\n  font-style: italic;\n  font-size: 1rem;\n  color: rgb(196, 185, 185);\n}\n\n.two {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  width: 100%;\n}\n\n.checkbox {\n  margin: 0 10px 0 0;\n}\n\n.fa-check {\n  display: none;\n  cursor: pointer;\n  color: rgb(134, 122, 122);\n  margin-right: 7px;\n}\n\n.to-do {\n  border: none;\n  padding: 0;\n  margin: 0;\n  display: inline-block;\n  width: 100%;\n  height: 50px;\n  color: rgb(134, 122, 122);\n  font-size: 1.1rem;\n}\n\n.to-do:focus {\n  border: none;\n  outline: none;\n}\n\n.fa-check:checked ~ .to-do {\n  color: rgb(150, 145, 145);\n}\n\n.cross-out {\n  text-decoration: line-through;\n  color: #ccc;\n}\n\n.fa-check:checked ~ .cross-out {\n  color: #ccc;\n}\n\n.checkbox:hover {\n  cursor: pointer;\n}\n\n.clear-all {\n  text-align: center;\n  line-height: 30px;\n  background-color: #f6f6f6;\n  border-bottom: none;\n}\n\n.clear-text:hover {\n  cursor: pointer;\n  text-decoration: underline;\n  color: rgb(75, 66, 66);\n}\n\n.to-do-row {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.refresh p {\n  margin: 0;\n  padding: 0;\n}\n\n.input {\n  border: none;\n  background-color: inherit;\n  font-size: 1.2rem;\n  color: rgb(150, 145, 145);\n  width: 100%;\n  font-style: italic;\n}\n\n.input:focus {\n  border: none;\n  outline: none;\n}\n\n.fa-arrows-alt {\n  color: rgb(204, 187, 187);\n}\n\n.fa-arrows-alt:hover {\n  cursor: move;\n  color: rgb(75, 66, 66);\n}\n\n.fa-trash-alt {\n  color: tomato;\n}\n\n.fa-trash-alt:hover {\n  cursor: pointer;\n}\n\n.fa-sync {\n  transform: rotate(110deg);\n  transform-origin: initial;\n  transition: all 1s;\n}\n\n.rotate-sync {\n  transform: rotate(830deg);\n}\n\n.return {\n  font-size: 2rem;\n}\n\n.fa-sync:hover,\n.return:hover {\n  cursor: pointer;\n}\n\n.footer {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  padding: 0 5vw;\n  background-color: #4c3c3c;\n  color: white;\n  height: 50px;\n}\n\n@media all and (min-width: 786px) {\n  .app {\n    width: 50vw;\n  }\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,UAAU;EACV,SAAS;EACT,yBAAyB;EACzB,aAAa;EACb,OAAO;EACP,aAAa;EACb,sBAAsB;EACtB,8BAA8B;EAC9B,uBAAuB;EACvB,yBAAyB;AAC3B;;AAEA;EACE,gBAAgB;EAChB,MAAM;EACN,WAAW;AACb;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,cAAc;EACd,yBAAyB;EACzB,YAAY;EACZ,YAAY;AACd;;AAEA;EACE,iBAAiB;EACjB,iBAAiB;AACnB;;AAEA;;EAEE,qBAAqB;EACrB,cAAc;AAChB;;AAEA;;EAEE,eAAe;EACf,yBAAyB;AAC3B;;AAEA;EACE,aAAa;EACb,qBAAqB;EACrB,QAAQ;EACR,UAAU;EACV,SAAS;EACT,iBAAiB;AACnB;;AAEA;EACE,WAAW;EACX,iBAAiB;EACjB,sBAAsB;EACtB,wCAAwC;AAC1C;;AAEA;EACE,kBAAkB;EAClB,oBAAoB;AACtB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;;EAEE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,6CAA6C;EAC7C,YAAY;AACd;;AAEA;EACE,kBAAkB;EAClB,eAAe;EACf,yBAAyB;AAC3B;;AAEA;EACE,aAAa;EACb,2BAA2B;EAC3B,mBAAmB;EACnB,WAAW;AACb;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,eAAe;EACf,yBAAyB;EACzB,iBAAiB;AACnB;;AAEA;EACE,YAAY;EACZ,UAAU;EACV,SAAS;EACT,qBAAqB;EACrB,WAAW;EACX,YAAY;EACZ,yBAAyB;EACzB,iBAAiB;AACnB;;AAEA;EACE,YAAY;EACZ,aAAa;AACf;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,6BAA6B;EAC7B,WAAW;AACb;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,kBAAkB;EAClB,iBAAiB;EACjB,yBAAyB;EACzB,mBAAmB;AACrB;;AAEA;EACE,eAAe;EACf,0BAA0B;EAC1B,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;AACrB;;AAEA;EACE,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,YAAY;EACZ,yBAAyB;EACzB,iBAAiB;EACjB,yBAAyB;EACzB,WAAW;EACX,kBAAkB;AACpB;;AAEA;EACE,YAAY;EACZ,aAAa;AACf;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,YAAY;EACZ,sBAAsB;AACxB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,yBAAyB;EACzB,yBAAyB;EACzB,kBAAkB;AACpB;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,eAAe;AACjB;;AAEA;;EAEE,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,kBAAkB;EAClB,cAAc;EACd,yBAAyB;EACzB,YAAY;EACZ,YAAY;AACd;;AAEA;EACE;IACE,WAAW;EACb;AACF","sourcesContent":["body {\n  padding: 0;\n  margin: 0;\n  background-color: #f6f6f6;\n  height: 100vh;\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  font-family: sans-serif;\n  color: rgb(150, 145, 145);\n}\n\n.header {\n  position: sticky;\n  top: 0;\n  z-index: 10;\n}\n\n.nav-bar {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0 5vw;\n  background-color: #4c3c3c;\n  color: white;\n  height: 50px;\n}\n\n.app-name {\n  font-size: 1.3rem;\n  font-weight: bold;\n}\n\n.app-name a,\n.item a {\n  text-decoration: none;\n  color: inherit;\n}\n\n.item:hover,\n.app-name:hover {\n  cursor: pointer;\n  color: rgb(226, 214, 214);\n}\n\n.nav-items {\n  display: flex;\n  list-style-type: none;\n  gap: 5vw;\n  padding: 0;\n  margin: 0;\n  font-weight: bold;\n}\n\n.app {\n  width: 90vw;\n  margin: 20px auto;\n  background-color: #fff;\n  box-shadow: 0 3px 5px rgb(163, 158, 158);\n}\n\n.app-heading {\n  text-align: center;\n  padding-bottom: 30px;\n}\n\n.title {\n  font-weight: bold;\n}\n\n.refresh,\n.add {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.custom-row {\n  padding: 10px;\n  border-bottom: 0.5px solid rgb(230, 222, 222);\n  height: 30px;\n}\n\n::placeholder {\n  font-style: italic;\n  font-size: 1rem;\n  color: rgb(196, 185, 185);\n}\n\n.two {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  width: 100%;\n}\n\n.checkbox {\n  margin: 0 10px 0 0;\n}\n\n.fa-check {\n  display: none;\n  cursor: pointer;\n  color: rgb(134, 122, 122);\n  margin-right: 7px;\n}\n\n.to-do {\n  border: none;\n  padding: 0;\n  margin: 0;\n  display: inline-block;\n  width: 100%;\n  height: 50px;\n  color: rgb(134, 122, 122);\n  font-size: 1.1rem;\n}\n\n.to-do:focus {\n  border: none;\n  outline: none;\n}\n\n.fa-check:checked ~ .to-do {\n  color: rgb(150, 145, 145);\n}\n\n.cross-out {\n  text-decoration: line-through;\n  color: #ccc;\n}\n\n.fa-check:checked ~ .cross-out {\n  color: #ccc;\n}\n\n.checkbox:hover {\n  cursor: pointer;\n}\n\n.clear-all {\n  text-align: center;\n  line-height: 30px;\n  background-color: #f6f6f6;\n  border-bottom: none;\n}\n\n.clear-text:hover {\n  cursor: pointer;\n  text-decoration: underline;\n  color: rgb(75, 66, 66);\n}\n\n.to-do-row {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.refresh p {\n  margin: 0;\n  padding: 0;\n}\n\n.input {\n  border: none;\n  background-color: inherit;\n  font-size: 1.2rem;\n  color: rgb(150, 145, 145);\n  width: 100%;\n  font-style: italic;\n}\n\n.input:focus {\n  border: none;\n  outline: none;\n}\n\n.fa-arrows-alt {\n  color: rgb(204, 187, 187);\n}\n\n.fa-arrows-alt:hover {\n  cursor: move;\n  color: rgb(75, 66, 66);\n}\n\n.fa-trash-alt {\n  color: tomato;\n}\n\n.fa-trash-alt:hover {\n  cursor: pointer;\n}\n\n.fa-sync {\n  transform: rotate(110deg);\n  transform-origin: initial;\n  transition: all 1s;\n}\n\n.rotate-sync {\n  transform: rotate(830deg);\n}\n\n.return {\n  font-size: 2rem;\n}\n\n.fa-sync:hover,\n.return:hover {\n  cursor: pointer;\n}\n\n.footer {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  padding: 0 5vw;\n  background-color: #4c3c3c;\n  color: white;\n  height: 50px;\n}\n\n@media all and (min-width: 786px) {\n  .app {\n    width: 50vw;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/***/ ((module) => {



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default, options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default.locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default.locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var style = document.createElement("style");
  options.setAttributes(style, options.attributes);
  options.insert(style);
  return style;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(style) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    style.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute("media", media);
  } else {
    style.removeAttribute("media");
  }

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, style);
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


function domAPI(options) {
  var style = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(style, options, obj);
    },
    remove: function remove() {
      removeStyleElement(style);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, style) {
  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/completedToDo.js":
/*!******************************!*\
  !*** ./src/completedToDo.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "addEventListenerToLinks": () => (/* binding */ addEventListenerToLinks)
/* harmony export */ });
const updateCompleted = (task, tasks) => {
  task.completed = !task.completed;
  localStorage.setItem('tasks', JSON.stringify(tasks));
};

const addEventListenerToLinks = (addToDo, remove, refresh) => {
  document.querySelector('.item:nth-child(1)').addEventListener('click', addToDo);
  document.querySelector('.item:nth-child(2)').addEventListener('click', remove);
  document.querySelector('.item:nth-child(3)').addEventListener('click', refresh);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (updateCompleted);


/***/ }),

/***/ "./src/manipulateToDo.js":
/*!*******************************!*\
  !*** ./src/manipulateToDo.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "drop": () => (/* binding */ drop),
/* harmony export */   "dragEnd": () => (/* binding */ dragEnd),
/* harmony export */   "drag": () => (/* binding */ drag),
/* harmony export */   "dragStart": () => (/* binding */ dragStart),
/* harmony export */   "removeOne": () => (/* binding */ removeOne),
/* harmony export */   "removeSelected": () => (/* binding */ removeSelected),
/* harmony export */   "addToDo": () => (/* binding */ addToDo),
/* harmony export */   "removable": () => (/* binding */ removable)
/* harmony export */ });
let dragStore = document.querySelector('.to-do-row');
const prevNextIds = {
  prevId: 0,
  nextId: 1,
};
const removable = {
  init: true,
  value: false,
};

const reorderIndices = (tasks) => {
  let index = 1;
  tasks.forEach((task) => {
    task.index = index;
    index += 1;
  });
};

const drag = (ev) => {
  const draggedElement = ev.target;
  dragStore = draggedElement;
  dragStore.style.backgroundColor = '#4c3c3c';
};

const dragStart = (e) => {
  let elUnder = e.target;
  const classArray = elUnder.classList.value.split(' ');
  if (
    classArray.includes('fa-check')
    || classArray.includes('checkbox')
    || classArray.includes('to-do')
  ) {
    elUnder = elUnder.parentElement.parentElement;
  } else if (
    classArray.includes('fa-arrows-alt')
    || classArray.includes('two')
  ) {
    elUnder = elUnder.parentElement;
  }
  elUnder.style.backgroundColor = '#4c3c3c';
  elUnder.style.color = '#fff';
  Array.from(elUnder.childNodes).forEach((node) => {
    if (node.nodeName === 'DIV') {
      const nodes = node.childNodes;
      Array.from(nodes).forEach((one) => {
        one.style.backgroundColor = '#4c3c3c';
        one.style.color = '#fff';
      });
    }
    node.style.backgroundColor = '#4c3c3c';
    node.style.color = '#fff';
  });
};

const drop = (ev) => {
  ev.preventDefault();
  let elUnder = ev.target;
  const classArray = elUnder.classList.value.split(' ');

  if (
    classArray.includes('fa-check')
    || classArray.includes('checkbox')
    || classArray.includes('to-do')
  ) {
    elUnder = elUnder.parentElement.parentElement;
  } else if (
    classArray.includes('fa-arrows-alt')
    || classArray.includes('two')
  ) {
    elUnder = elUnder.parentElement;
  }
  prevNextIds.nextId = Number(elUnder.id);
  prevNextIds.prevId = Number(dragStore.id);

  if (prevNextIds.prevId < prevNextIds.nextId) {
    elUnder.parentElement.insertBefore(dragStore, elUnder.nextElementSibling);
  } else if (prevNextIds.prevId > prevNextIds.nextId) {
    elUnder.parentElement.insertBefore(dragStore, elUnder);
  }

  const { id } = elUnder;

  if (prevNextIds.prevId < prevNextIds.nextId) {
    setTimeout(() => {
      let elUnder = document.getElementById(id);
      // document.getElementById(id).style.backgroundColor = "#4c3c3c";
      const classArray = elUnder.classList.value.split(' ');
      if (
        classArray.includes('fa-check')
        || classArray.includes('checkbox')
        || classArray.includes('to-do')
      ) {
        elUnder = elUnder.parentElement.parentElement;
      } else if (
        classArray.includes('fa-arrows-alt')
        || classArray.includes('two')
      ) {
        elUnder = elUnder.parentElement;
      }

      elUnder.style.backgroundColor = '#4c3c3c';
      elUnder.style.color = '#fff';
      Array.from(elUnder.childNodes).forEach((node) => {
        if (node.nodeName === 'DIV') {
          const nodes = node.childNodes;
          Array.from(nodes).forEach((one) => {
            one.style.backgroundColor = '#4c3c3c';
            one.style.color = '#fff';
          });
        }
        node.style.backgroundColor = '#4c3c3c';
        node.style.color = '#fff';
      });
      setTimeout(() => {
        // document.getElementById(id).style.backgroundColor = "#fff";
        let elUnder = document.getElementById(id);
        // document.getElementById(id).style.backgroundColor = "#4c3c3c";
        const classArray = elUnder.classList.value.split(' ');
        if (
          classArray.includes('fa-check')
          || classArray.includes('checkbox')
          || classArray.includes('to-do')
        ) {
          elUnder = elUnder.parentElement.parentElement;
        } else if (
          classArray.includes('fa-arrows-alt')
          || classArray.includes('two')
        ) {
          elUnder = elUnder.parentElement;
        }
        elUnder.style.backgroundColor = '#fff';
        elUnder.style.color = '#fff';
        Array.from(elUnder.childNodes).forEach((node) => {
          if (node.nodeName === 'DIV') {
            const nodes = node.childNodes;
            Array.from(nodes).forEach((one) => {
              one.style.backgroundColor = '#fff';
              one.style.color = 'rgb(134, 122, 122)';
            });
          }
          node.style.backgroundColor = '#fff';
          node.style.color = 'rgb(204, 187, 187)';
          if (node.classList.value.includes('fa-arrows-alt')) {
            node.addEventListener('mouseover', () => {
              node.style.color = 'rgb(75, 66, 66)';
            });
            node.addEventListener('mouseout', () => {
              node.style.color = 'rgb(204, 187, 187)';
            });
          }
        });
      }, 810);
    }, 10);
  } else if (prevNextIds.prevId > prevNextIds.nextId) {
    setTimeout(() => {
      let elUnder = document.getElementById(id);
      // document.getElementById(id).style.backgroundColor = "#4c3c3c";
      const classArray = elUnder.classList.value.split(' ');
      if (
        classArray.includes('fa-check')
        || classArray.includes('checkbox')
        || classArray.includes('to-do')
      ) {
        elUnder = elUnder.parentElement.parentElement;
      } else if (
        classArray.includes('fa-arrows-alt')
        || classArray.includes('two')
      ) {
        elUnder = elUnder.parentElement;
      }
      elUnder.style.backgroundColor = '#4c3c3c';
      elUnder.style.color = '#fff';
      Array.from(elUnder.childNodes).forEach((node) => {
        if (node.nodeName === 'DIV') {
          const nodes = node.childNodes;
          Array.from(nodes).forEach((one) => {
            one.style.backgroundColor = '#4c3c3c';
            one.style.color = '#fff';
          });
        }
        node.style.backgroundColor = '#4c3c3c';
        node.style.color = '#fff';
      });
      setTimeout(() => {
        // document.getElementById(id).style.backgroundColor = "#fff";
        let elUnder = document.getElementById(id);
        // document.getElementById(id).style.backgroundColor = "#4c3c3c";
        const classArray = elUnder.classList.value.split(' ');
        if (
          classArray.includes('fa-check')
          || classArray.includes('checkbox')
          || classArray.includes('to-do')
        ) {
          elUnder = elUnder.parentElement.parentElement;
        } else if (
          classArray.includes('fa-arrows-alt')
          || classArray.includes('two')
        ) {
          elUnder = elUnder.parentElement;
        }
        elUnder.style.backgroundColor = '#fff';
        elUnder.style.color = '#fff';
        Array.from(elUnder.childNodes).forEach((node) => {
          if (node.nodeName === 'DIV') {
            const nodes = node.childNodes;
            Array.from(nodes).forEach((one) => {
              one.style.backgroundColor = '#fff';
              one.style.color = 'rgb(134, 122, 122)';
            });
          }
          node.style.backgroundColor = '#fff';
          node.style.color = 'rgb(204, 187, 187)';
          if (node.classList.value.includes('fa-arrows-alt')) {
            node.addEventListener('mouseover', () => {
              node.style.color = 'rgb(75, 66, 66)';
            });
            node.addEventListener('mouseout', () => {
              node.style.color = 'rgb(204, 187, 187)';
            });
          }
        });
      }, 810);
    }, 10);
  }
};

const dragEnd = (showToDo) => {
  setTimeout(() => {
    dragStore.style.backgroundColor = '#fff';
  }, 1000);

  const allToDoElements = Array.from(document.querySelectorAll('.to-do-row'));
  const ids = allToDoElements.map((el) => Number(el.id));
  let tasks = JSON.parse(localStorage.getItem('tasks'));
  const mockTasks = [];
  ids.forEach((id) => {
    mockTasks.push(tasks.filter((task) => task.index === id)[0]);
  });
  tasks = mockTasks;
  reorderIndices(tasks);
  localStorage.setItem('tasks', JSON.stringify(tasks));
  showToDo();
};

const removeOne = (task, showToDo) => {
  let tasks = JSON.parse(localStorage.getItem('tasks'));
  // tasks = tasks.filter((oneTask) => oneTask.index !== task.index);
  if (removable.value || removable.init) {
    tasks = tasks.filter((oneTask) => oneTask.index !== task.index);
    removable.init = false;
  }

  removable.value = false;

  setTimeout(() => {
    removable.init = false;
    removable.value = true;
  }, 500);

  reorderIndices(tasks);
  localStorage.setItem('tasks', JSON.stringify(tasks));
  return showToDo();
};

const removeSelected = (tasks, showToDo) => {
  tasks = JSON.parse(localStorage.getItem('tasks'));
  tasks = tasks.filter((task) => !task.completed);
  reorderIndices(tasks);
  localStorage.setItem('tasks', JSON.stringify(tasks));
  showToDo();
  return true;
};

const addToDo = (tasks, showToDo, goToInput) => {
  tasks = JSON.parse(localStorage.getItem('tasks'));
  const description = document.querySelector('.input').value;
  if (!description) {
    goToInput();
    return false;
  }

  const data = {
    description,
    index: tasks.length + 1,
    completed: false,
  };

  tasks.push(data);
  localStorage.setItem('tasks', JSON.stringify(tasks));
  showToDo();
  document.querySelector('.input').value = '';
  goToInput();
  return true;
};



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _completedToDo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./completedToDo */ "./src/completedToDo.js");
/* harmony import */ var _manipulateToDo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./manipulateToDo */ "./src/manipulateToDo.js");




let tasks = [];
let removable = true;
const goToInput = () => document.querySelector('.input').focus();

document.querySelector(
  '.footer-text',
).innerHTML = `&copy; ${new Date().getFullYear()} Henry-Kc, built with 💕 from me`;

const alternateTickAndCheck = (tick, check, task, input2) => {
  if (task.completed) {
    tick.style.display = 'inline-block';
    check.style.display = 'none';
    input2.classList.add('cross-out');
  } else {
    tick.style.display = 'none';
    check.style.display = 'inline-block';
    input2.classList.remove('cross-out');
  }
};

const showToDo = () => {
  document.querySelector('.to-do-list').innerHTML = '';
  const tasks = JSON.parse(localStorage.getItem('tasks'));
  if (typeof tasks[0] === 'object') {
    tasks.forEach((task, index, tasks) => {
      // eslint-disable-next-line no-use-before-define
      generateToDoRows(task.description, task, tasks);
    });
    return true;
  }
  localStorage.setItem('tasks', JSON.stringify(tasks));
  return true;
};

const refresh = (showToDo) => {
  // tasks = _.sortBy(tasks, 'index');
  if (localStorage.getItem('tasks') !== null) {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  } else {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }
  showToDo();
  goToInput();
  return true;
};

const generateToDoRows = (text, task, tasks) => {
  const div = document.createElement('div');
  div.classList.add('to-do-row', 'custom-row');
  div.id = task.index;
  div.draggable = true;
  const div2 = document.createElement('div');
  div2.classList.add('two');

  const input = document.createElement('input');
  input.classList.add('checkbox');
  input.type = 'checkbox';

  const tick = document.createElement('i');
  tick.classList.add('fas', 'fa-check');

  div2.appendChild(input);
  div2.appendChild(tick);

  const input2 = document.createElement('input');
  input2.contentEditable = true;
  input2.classList.add('to-do');

  input2.type = 'text';
  input2.value = text;
  div2.appendChild(input2);

  div.appendChild(div2);

  const i = document.createElement('i');
  i.classList.add('fas', 'fa-arrows-alt');
  div.appendChild(i);

  input2.addEventListener('focus', () => {
    input2.style.backgroundColor = '#fffeca';
    div.style.backgroundColor = '#fffeca';
    i.classList.remove('fa-arrows-alt');
    i.classList.add('fa-trash-alt');
    i.addEventListener('mousedown', () => {
      // removable = true;
      (0,_manipulateToDo__WEBPACK_IMPORTED_MODULE_2__.removeOne)(task, showToDo, removable);
    });
  });
  tick.addEventListener('click', () => {
    (0,_completedToDo__WEBPACK_IMPORTED_MODULE_1__.default)(task, tasks);
    alternateTickAndCheck(tick, input, task, input2);
    return true;
  });

  input.addEventListener('click', (e) => {
    e.preventDefault();
    (0,_completedToDo__WEBPACK_IMPORTED_MODULE_1__.default)(task, tasks);
    alternateTickAndCheck(tick, input, task, input2);
    return true;
  });
  if (task.completed) {
    tick.style.display = 'inline-block';
    input.style.display = 'none';
    input2.classList.add('cross-out');
  } else if (!task.completed) {
    tick.style.display = 'none';
    input.style.display = 'inline-block';
    input2.classList.remove('cross-out');
  }

  const editToDo = (input, task, tasks) => {
    const { value } = input;
    if (value === '') {
      removable = true;
      (0,_manipulateToDo__WEBPACK_IMPORTED_MODULE_2__.removeOne)(task, showToDo, removable);
      return false;
    }
    task.description = value;
    localStorage.setItem('tasks', JSON.stringify(tasks));
    // eslint-disable-next-line no-use-before-define
    showToDo();
    return true;
  };

  input2.addEventListener('blur', () => {
    input2.style.backgroundColor = '#fff';
    div.style.backgroundColor = '#fff';

    i.classList.remove('fa-trash-alt');
    i.classList.add('fa-arrows-alt');

    i.removeEventListener('click', () => {
      removable = true;
      (0,_manipulateToDo__WEBPACK_IMPORTED_MODULE_2__.removeOne)(task, showToDo, removable);
      return true;
    });
  });

  input2.addEventListener('change', () => {
    editToDo(input2, task, tasks);
  });

  input2.addEventListener('keypress', (e) => {
    e.stopPropagation();
    if (e.key === 'Enter') {
      input2.blur();
    }
  });

  const toDoContainer = document.querySelector('.to-do-list');
  toDoContainer.appendChild(div);
  div.addEventListener('dragover', (e) => {
    e.preventDefault();
  });
  div.addEventListener('drag', (ev) => (0,_manipulateToDo__WEBPACK_IMPORTED_MODULE_2__.drag)(ev));
  div.addEventListener('dragstart', (e) => (0,_manipulateToDo__WEBPACK_IMPORTED_MODULE_2__.dragStart)(e));
  div.addEventListener('dragend', () => (0,_manipulateToDo__WEBPACK_IMPORTED_MODULE_2__.dragEnd)(showToDo));
  div.addEventListener('drop', (ev) => (0,_manipulateToDo__WEBPACK_IMPORTED_MODULE_2__.drop)(ev));

  return true;
};

document.querySelector('.clear-text').addEventListener('click', () => {
  if (localStorage.getItem('tasks') !== null) {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }
  (0,_manipulateToDo__WEBPACK_IMPORTED_MODULE_2__.removeSelected)(tasks, showToDo);
});

document
  .querySelector('.return')
  .addEventListener('click', () => (0,_manipulateToDo__WEBPACK_IMPORTED_MODULE_2__.addToDo)(tasks, showToDo, goToInput));
document.querySelector('.fa-sync').addEventListener('click', () => {
  document.querySelector('.fa-sync').classList.toggle('rotate-sync');
});

document.querySelector('.item:nth-child(3)').addEventListener('click', () => {
  document.querySelector('.fa-sync').classList.toggle('rotate-sync');
});

const refreshButton = document.querySelector('.fa-sync');
refreshButton.addEventListener('click', () => {
  refresh(showToDo);
  return true;
});

document.querySelector('.input').addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    (0,_manipulateToDo__WEBPACK_IMPORTED_MODULE_2__.addToDo)(tasks, showToDo, goToInput);
  }
  return true;
});

document
  .querySelector('.item:nth-child(1)')
  .addEventListener('click', () => (0,_manipulateToDo__WEBPACK_IMPORTED_MODULE_2__.addToDo)(tasks, showToDo, goToInput));
document
  .querySelector('.item:nth-child(2)')
  .addEventListener('click', () => (0,_manipulateToDo__WEBPACK_IMPORTED_MODULE_2__.removeSelected)(tasks, showToDo));
document
  .querySelector('.item:nth-child(3)')
  .addEventListener('click', () => refresh(showToDo));

refresh(showToDo);

showToDo();

document.querySelector('.fa-sync').title = 'remove tasks completed more than one month ago';
document.querySelector('.item:nth-child(3)').title = 'remove tasks completed more than one month ago';
document.querySelector('.item:nth-child(2)').title = 'remove completed tasks';
document.querySelector('.item:nth-child(1)').title = 'add tasks';
document.querySelector('.clear-text').title = 'remove completed tasks';
const allCheckboxes = Array.from(document.querySelectorAll('.checkbox'));
allCheckboxes.forEach((checkbox) => {
  checkbox.title = 'mark as completed';
  return true;
});
const allTickMarks = Array.from(document.querySelectorAll('.fa-check'));
allTickMarks.forEach((tickMark) => {
  tickMark.title = 'unmark as completed';
  return true;
});
const allTodoItems = Array.from(document.querySelectorAll('.to-do'));
allTodoItems.forEach((todo) => {
  todo.title = 'click to delete/edit, drag to move';
  return true;
});
const allMoveButtons = Array.from(document.querySelectorAll('fa-arrows-alt'));
allMoveButtons.forEach((moveButton) => {
  moveButton.title = 'drag within the box to move';
  return true;
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQLEtBQUs7QUFDTCxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FB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O0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby1saXN0LWRyYWdnYWJsZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC1kcmFnZ2FibGUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QtZHJhZ2dhYmxlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC1kcmFnZ2FibGUvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC1kcmFnZ2FibGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC1kcmFnZ2FibGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QtZHJhZ2dhYmxlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QtZHJhZ2dhYmxlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QtZHJhZ2dhYmxlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC1kcmFnZ2FibGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0LWRyYWdnYWJsZS8uL3NyYy9jb21wbGV0ZWRUb0RvLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QtZHJhZ2dhYmxlLy4vc3JjL21hbmlwdWxhdGVUb0RvLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QtZHJhZ2dhYmxlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvLWRvLWxpc3QtZHJhZ2dhYmxlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvLWRvLWxpc3QtZHJhZ2dhYmxlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90by1kby1saXN0LWRyYWdnYWJsZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvLWRvLWxpc3QtZHJhZ2dhYmxlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC1kcmFnZ2FibGUvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJib2R5IHtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjZmNmY2O1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGZsZXg6IDE7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xcbiAgY29sb3I6IHJnYigxNTAsIDE0NSwgMTQ1KTtcXG59XFxuXFxuLmhlYWRlciB7XFxuICBwb3NpdGlvbjogc3RpY2t5O1xcbiAgdG9wOiAwO1xcbiAgei1pbmRleDogMTA7XFxufVxcblxcbi5uYXYtYmFyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogMCA1dnc7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGMzYzNjO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgaGVpZ2h0OiA1MHB4O1xcbn1cXG5cXG4uYXBwLW5hbWUge1xcbiAgZm9udC1zaXplOiAxLjNyZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLmFwcC1uYW1lIGEsXFxuLml0ZW0gYSB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBjb2xvcjogaW5oZXJpdDtcXG59XFxuXFxuLml0ZW06aG92ZXIsXFxuLmFwcC1uYW1lOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGNvbG9yOiByZ2IoMjI2LCAyMTQsIDIxNCk7XFxufVxcblxcbi5uYXYtaXRlbXMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gIGdhcDogNXZ3O1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4uYXBwIHtcXG4gIHdpZHRoOiA5MHZ3O1xcbiAgbWFyZ2luOiAyMHB4IGF1dG87XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgYm94LXNoYWRvdzogMCAzcHggNXB4IHJnYigxNjMsIDE1OCwgMTU4KTtcXG59XFxuXFxuLmFwcC1oZWFkaW5nIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHBhZGRpbmctYm90dG9tOiAzMHB4O1xcbn1cXG5cXG4udGl0bGUge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5yZWZyZXNoLFxcbi5hZGQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5jdXN0b20tcm93IHtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBib3JkZXItYm90dG9tOiAwLjVweCBzb2xpZCByZ2IoMjMwLCAyMjIsIDIyMik7XFxuICBoZWlnaHQ6IDMwcHg7XFxufVxcblxcbjo6cGxhY2Vob2xkZXIge1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgY29sb3I6IHJnYigxOTYsIDE4NSwgMTg1KTtcXG59XFxuXFxuLnR3byB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uY2hlY2tib3gge1xcbiAgbWFyZ2luOiAwIDEwcHggMCAwO1xcbn1cXG5cXG4uZmEtY2hlY2sge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGNvbG9yOiByZ2IoMTM0LCAxMjIsIDEyMik7XFxuICBtYXJnaW4tcmlnaHQ6IDdweDtcXG59XFxuXFxuLnRvLWRvIHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogNTBweDtcXG4gIGNvbG9yOiByZ2IoMTM0LCAxMjIsIDEyMik7XFxuICBmb250LXNpemU6IDEuMXJlbTtcXG59XFxuXFxuLnRvLWRvOmZvY3VzIHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbi5mYS1jaGVjazpjaGVja2VkIH4gLnRvLWRvIHtcXG4gIGNvbG9yOiByZ2IoMTUwLCAxNDUsIDE0NSk7XFxufVxcblxcbi5jcm9zcy1vdXQge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxuICBjb2xvcjogI2NjYztcXG59XFxuXFxuLmZhLWNoZWNrOmNoZWNrZWQgfiAuY3Jvc3Mtb3V0IHtcXG4gIGNvbG9yOiAjY2NjO1xcbn1cXG5cXG4uY2hlY2tib3g6aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uY2xlYXItYWxsIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y2ZjZmNjtcXG4gIGJvcmRlci1ib3R0b206IG5vbmU7XFxufVxcblxcbi5jbGVhci10ZXh0OmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbiAgY29sb3I6IHJnYig3NSwgNjYsIDY2KTtcXG59XFxuXFxuLnRvLWRvLXJvdyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnJlZnJlc2ggcCB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4uaW5wdXQge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgY29sb3I6IHJnYigxNTAsIDE0NSwgMTQ1KTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbn1cXG5cXG4uaW5wdXQ6Zm9jdXMge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuLmZhLWFycm93cy1hbHQge1xcbiAgY29sb3I6IHJnYigyMDQsIDE4NywgMTg3KTtcXG59XFxuXFxuLmZhLWFycm93cy1hbHQ6aG92ZXIge1xcbiAgY3Vyc29yOiBtb3ZlO1xcbiAgY29sb3I6IHJnYig3NSwgNjYsIDY2KTtcXG59XFxuXFxuLmZhLXRyYXNoLWFsdCB7XFxuICBjb2xvcjogdG9tYXRvO1xcbn1cXG5cXG4uZmEtdHJhc2gtYWx0OmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmZhLXN5bmMge1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoMTEwZGVnKTtcXG4gIHRyYW5zZm9ybS1vcmlnaW46IGluaXRpYWw7XFxuICB0cmFuc2l0aW9uOiBhbGwgMXM7XFxufVxcblxcbi5yb3RhdGUtc3luYyB7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSg4MzBkZWcpO1xcbn1cXG5cXG4ucmV0dXJuIHtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG59XFxuXFxuLmZhLXN5bmM6aG92ZXIsXFxuLnJldHVybjpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5mb290ZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDAgNXZ3O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRjM2MzYztcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGhlaWdodDogNTBweDtcXG59XFxuXFxuQG1lZGlhIGFsbCBhbmQgKG1pbi13aWR0aDogNzg2cHgpIHtcXG4gIC5hcHAge1xcbiAgICB3aWR0aDogNTB2dztcXG4gIH1cXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLFVBQVU7RUFDVixTQUFTO0VBQ1QseUJBQXlCO0VBQ3pCLGFBQWE7RUFDYixPQUFPO0VBQ1AsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qiw4QkFBOEI7RUFDOUIsdUJBQXVCO0VBQ3ZCLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixNQUFNO0VBQ04sV0FBVztBQUNiOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixtQkFBbUI7RUFDbkIsY0FBYztFQUNkLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osWUFBWTtBQUNkOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGlCQUFpQjtBQUNuQjs7QUFFQTs7RUFFRSxxQkFBcUI7RUFDckIsY0FBYztBQUNoQjs7QUFFQTs7RUFFRSxlQUFlO0VBQ2YseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHFCQUFxQjtFQUNyQixRQUFRO0VBQ1IsVUFBVTtFQUNWLFNBQVM7RUFDVCxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLHNCQUFzQjtFQUN0Qix3Q0FBd0M7QUFDMUM7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBOztFQUVFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDZDQUE2QztFQUM3QyxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGFBQWE7RUFDYiwyQkFBMkI7RUFDM0IsbUJBQW1CO0VBQ25CLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixlQUFlO0VBQ2YseUJBQXlCO0VBQ3pCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixVQUFVO0VBQ1YsU0FBUztFQUNULHFCQUFxQjtFQUNyQixXQUFXO0VBQ1gsWUFBWTtFQUNaLHlCQUF5QjtFQUN6QixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtBQUNmOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsNkJBQTZCO0VBQzdCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLHlCQUF5QjtFQUN6QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsMEJBQTBCO0VBQzFCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsU0FBUztFQUNULFVBQVU7QUFDWjs7QUFFQTtFQUNFLFlBQVk7RUFDWix5QkFBeUI7RUFDekIsaUJBQWlCO0VBQ2pCLHlCQUF5QjtFQUN6QixXQUFXO0VBQ1gsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7QUFDZjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLHlCQUF5QjtFQUN6QixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBOztFQUVFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsY0FBYztFQUNkLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osWUFBWTtBQUNkOztBQUVBO0VBQ0U7SUFDRSxXQUFXO0VBQ2I7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJib2R5IHtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjZmNmY2O1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGZsZXg6IDE7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xcbiAgY29sb3I6IHJnYigxNTAsIDE0NSwgMTQ1KTtcXG59XFxuXFxuLmhlYWRlciB7XFxuICBwb3NpdGlvbjogc3RpY2t5O1xcbiAgdG9wOiAwO1xcbiAgei1pbmRleDogMTA7XFxufVxcblxcbi5uYXYtYmFyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogMCA1dnc7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGMzYzNjO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgaGVpZ2h0OiA1MHB4O1xcbn1cXG5cXG4uYXBwLW5hbWUge1xcbiAgZm9udC1zaXplOiAxLjNyZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLmFwcC1uYW1lIGEsXFxuLml0ZW0gYSB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBjb2xvcjogaW5oZXJpdDtcXG59XFxuXFxuLml0ZW06aG92ZXIsXFxuLmFwcC1uYW1lOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGNvbG9yOiByZ2IoMjI2LCAyMTQsIDIxNCk7XFxufVxcblxcbi5uYXYtaXRlbXMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gIGdhcDogNXZ3O1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4uYXBwIHtcXG4gIHdpZHRoOiA5MHZ3O1xcbiAgbWFyZ2luOiAyMHB4IGF1dG87XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgYm94LXNoYWRvdzogMCAzcHggNXB4IHJnYigxNjMsIDE1OCwgMTU4KTtcXG59XFxuXFxuLmFwcC1oZWFkaW5nIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHBhZGRpbmctYm90dG9tOiAzMHB4O1xcbn1cXG5cXG4udGl0bGUge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5yZWZyZXNoLFxcbi5hZGQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5jdXN0b20tcm93IHtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBib3JkZXItYm90dG9tOiAwLjVweCBzb2xpZCByZ2IoMjMwLCAyMjIsIDIyMik7XFxuICBoZWlnaHQ6IDMwcHg7XFxufVxcblxcbjo6cGxhY2Vob2xkZXIge1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgY29sb3I6IHJnYigxOTYsIDE4NSwgMTg1KTtcXG59XFxuXFxuLnR3byB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uY2hlY2tib3gge1xcbiAgbWFyZ2luOiAwIDEwcHggMCAwO1xcbn1cXG5cXG4uZmEtY2hlY2sge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGNvbG9yOiByZ2IoMTM0LCAxMjIsIDEyMik7XFxuICBtYXJnaW4tcmlnaHQ6IDdweDtcXG59XFxuXFxuLnRvLWRvIHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogNTBweDtcXG4gIGNvbG9yOiByZ2IoMTM0LCAxMjIsIDEyMik7XFxuICBmb250LXNpemU6IDEuMXJlbTtcXG59XFxuXFxuLnRvLWRvOmZvY3VzIHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbi5mYS1jaGVjazpjaGVja2VkIH4gLnRvLWRvIHtcXG4gIGNvbG9yOiByZ2IoMTUwLCAxNDUsIDE0NSk7XFxufVxcblxcbi5jcm9zcy1vdXQge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxuICBjb2xvcjogI2NjYztcXG59XFxuXFxuLmZhLWNoZWNrOmNoZWNrZWQgfiAuY3Jvc3Mtb3V0IHtcXG4gIGNvbG9yOiAjY2NjO1xcbn1cXG5cXG4uY2hlY2tib3g6aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uY2xlYXItYWxsIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y2ZjZmNjtcXG4gIGJvcmRlci1ib3R0b206IG5vbmU7XFxufVxcblxcbi5jbGVhci10ZXh0OmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbiAgY29sb3I6IHJnYig3NSwgNjYsIDY2KTtcXG59XFxuXFxuLnRvLWRvLXJvdyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnJlZnJlc2ggcCB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4uaW5wdXQge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgY29sb3I6IHJnYigxNTAsIDE0NSwgMTQ1KTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbn1cXG5cXG4uaW5wdXQ6Zm9jdXMge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuLmZhLWFycm93cy1hbHQge1xcbiAgY29sb3I6IHJnYigyMDQsIDE4NywgMTg3KTtcXG59XFxuXFxuLmZhLWFycm93cy1hbHQ6aG92ZXIge1xcbiAgY3Vyc29yOiBtb3ZlO1xcbiAgY29sb3I6IHJnYig3NSwgNjYsIDY2KTtcXG59XFxuXFxuLmZhLXRyYXNoLWFsdCB7XFxuICBjb2xvcjogdG9tYXRvO1xcbn1cXG5cXG4uZmEtdHJhc2gtYWx0OmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmZhLXN5bmMge1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoMTEwZGVnKTtcXG4gIHRyYW5zZm9ybS1vcmlnaW46IGluaXRpYWw7XFxuICB0cmFuc2l0aW9uOiBhbGwgMXM7XFxufVxcblxcbi5yb3RhdGUtc3luYyB7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSg4MzBkZWcpO1xcbn1cXG5cXG4ucmV0dXJuIHtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG59XFxuXFxuLmZhLXN5bmM6aG92ZXIsXFxuLnJldHVybjpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5mb290ZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDAgNXZ3O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRjM2MzYztcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGhlaWdodDogNTBweDtcXG59XFxuXFxuQG1lZGlhIGFsbCBhbmQgKG1pbi13aWR0aDogNzg2cHgpIHtcXG4gIC5hcHAge1xcbiAgICB3aWR0aDogNTB2dztcXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkgeyByZXR1cm4gX2FycmF5V2l0aEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFyciwgaSkgfHwgX25vbkl0ZXJhYmxlUmVzdCgpOyB9XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7IH1cblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikgeyBpZiAoIW8pIHJldHVybjsgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpOyBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lOyBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTsgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB9XG5cbmZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7IGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoOyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfVxuXG5mdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7IHZhciBfaSA9IGFyciA9PSBudWxsID8gbnVsbCA6IHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgYXJyW1N5bWJvbC5pdGVyYXRvcl0gfHwgYXJyW1wiQEBpdGVyYXRvclwiXTsgaWYgKF9pID09IG51bGwpIHJldHVybjsgdmFyIF9hcnIgPSBbXTsgdmFyIF9uID0gdHJ1ZTsgdmFyIF9kID0gZmFsc2U7IHZhciBfcywgX2U7IHRyeSB7IGZvciAoX2kgPSBfaS5jYWxsKGFycik7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHsgX2Fyci5wdXNoKF9zLnZhbHVlKTsgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrOyB9IH0gY2F0Y2ggKGVycikgeyBfZCA9IHRydWU7IF9lID0gZXJyOyB9IGZpbmFsbHkgeyB0cnkgeyBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7IH0gZmluYWxseSB7IGlmIChfZCkgdGhyb3cgX2U7IH0gfSByZXR1cm4gX2FycjsgfVxuXG5mdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7IH1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pIHtcbiAgdmFyIF9pdGVtID0gX3NsaWNlZFRvQXJyYXkoaXRlbSwgNCksXG4gICAgICBjb250ZW50ID0gX2l0ZW1bMV0sXG4gICAgICBjc3NNYXBwaW5nID0gX2l0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKHN0eWxlLCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIHJldHVybiBzdHlsZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlKSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKFwibWVkaWFcIik7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZSk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGUsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlKSB7XG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImNvbnN0IHVwZGF0ZUNvbXBsZXRlZCA9ICh0YXNrLCB0YXNrcykgPT4ge1xuICB0YXNrLmNvbXBsZXRlZCA9ICF0YXNrLmNvbXBsZXRlZDtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rhc2tzJywgSlNPTi5zdHJpbmdpZnkodGFza3MpKTtcbn07XG5cbmNvbnN0IGFkZEV2ZW50TGlzdGVuZXJUb0xpbmtzID0gKGFkZFRvRG8sIHJlbW92ZSwgcmVmcmVzaCkgPT4ge1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaXRlbTpudGgtY2hpbGQoMSknKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFkZFRvRG8pO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaXRlbTpudGgtY2hpbGQoMiknKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHJlbW92ZSk7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pdGVtOm50aC1jaGlsZCgzKScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcmVmcmVzaCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB1cGRhdGVDb21wbGV0ZWQ7XG5leHBvcnQgeyBhZGRFdmVudExpc3RlbmVyVG9MaW5rcyB9OyIsImxldCBkcmFnU3RvcmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG8tZG8tcm93Jyk7XG5jb25zdCBwcmV2TmV4dElkcyA9IHtcbiAgcHJldklkOiAwLFxuICBuZXh0SWQ6IDEsXG59O1xuY29uc3QgcmVtb3ZhYmxlID0ge1xuICBpbml0OiB0cnVlLFxuICB2YWx1ZTogZmFsc2UsXG59O1xuXG5jb25zdCByZW9yZGVySW5kaWNlcyA9ICh0YXNrcykgPT4ge1xuICBsZXQgaW5kZXggPSAxO1xuICB0YXNrcy5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgdGFzay5pbmRleCA9IGluZGV4O1xuICAgIGluZGV4ICs9IDE7XG4gIH0pO1xufTtcblxuY29uc3QgZHJhZyA9IChldikgPT4ge1xuICBjb25zdCBkcmFnZ2VkRWxlbWVudCA9IGV2LnRhcmdldDtcbiAgZHJhZ1N0b3JlID0gZHJhZ2dlZEVsZW1lbnQ7XG4gIGRyYWdTdG9yZS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnIzRjM2MzYyc7XG59O1xuXG5jb25zdCBkcmFnU3RhcnQgPSAoZSkgPT4ge1xuICBsZXQgZWxVbmRlciA9IGUudGFyZ2V0O1xuICBjb25zdCBjbGFzc0FycmF5ID0gZWxVbmRlci5jbGFzc0xpc3QudmFsdWUuc3BsaXQoJyAnKTtcbiAgaWYgKFxuICAgIGNsYXNzQXJyYXkuaW5jbHVkZXMoJ2ZhLWNoZWNrJylcbiAgICB8fCBjbGFzc0FycmF5LmluY2x1ZGVzKCdjaGVja2JveCcpXG4gICAgfHwgY2xhc3NBcnJheS5pbmNsdWRlcygndG8tZG8nKVxuICApIHtcbiAgICBlbFVuZGVyID0gZWxVbmRlci5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQ7XG4gIH0gZWxzZSBpZiAoXG4gICAgY2xhc3NBcnJheS5pbmNsdWRlcygnZmEtYXJyb3dzLWFsdCcpXG4gICAgfHwgY2xhc3NBcnJheS5pbmNsdWRlcygndHdvJylcbiAgKSB7XG4gICAgZWxVbmRlciA9IGVsVW5kZXIucGFyZW50RWxlbWVudDtcbiAgfVxuICBlbFVuZGVyLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjNGMzYzNjJztcbiAgZWxVbmRlci5zdHlsZS5jb2xvciA9ICcjZmZmJztcbiAgQXJyYXkuZnJvbShlbFVuZGVyLmNoaWxkTm9kZXMpLmZvckVhY2goKG5vZGUpID0+IHtcbiAgICBpZiAobm9kZS5ub2RlTmFtZSA9PT0gJ0RJVicpIHtcbiAgICAgIGNvbnN0IG5vZGVzID0gbm9kZS5jaGlsZE5vZGVzO1xuICAgICAgQXJyYXkuZnJvbShub2RlcykuZm9yRWFjaCgob25lKSA9PiB7XG4gICAgICAgIG9uZS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnIzRjM2MzYyc7XG4gICAgICAgIG9uZS5zdHlsZS5jb2xvciA9ICcjZmZmJztcbiAgICAgIH0pO1xuICAgIH1cbiAgICBub2RlLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjNGMzYzNjJztcbiAgICBub2RlLnN0eWxlLmNvbG9yID0gJyNmZmYnO1xuICB9KTtcbn07XG5cbmNvbnN0IGRyb3AgPSAoZXYpID0+IHtcbiAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgbGV0IGVsVW5kZXIgPSBldi50YXJnZXQ7XG4gIGNvbnN0IGNsYXNzQXJyYXkgPSBlbFVuZGVyLmNsYXNzTGlzdC52YWx1ZS5zcGxpdCgnICcpO1xuXG4gIGlmIChcbiAgICBjbGFzc0FycmF5LmluY2x1ZGVzKCdmYS1jaGVjaycpXG4gICAgfHwgY2xhc3NBcnJheS5pbmNsdWRlcygnY2hlY2tib3gnKVxuICAgIHx8IGNsYXNzQXJyYXkuaW5jbHVkZXMoJ3RvLWRvJylcbiAgKSB7XG4gICAgZWxVbmRlciA9IGVsVW5kZXIucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50O1xuICB9IGVsc2UgaWYgKFxuICAgIGNsYXNzQXJyYXkuaW5jbHVkZXMoJ2ZhLWFycm93cy1hbHQnKVxuICAgIHx8IGNsYXNzQXJyYXkuaW5jbHVkZXMoJ3R3bycpXG4gICkge1xuICAgIGVsVW5kZXIgPSBlbFVuZGVyLnBhcmVudEVsZW1lbnQ7XG4gIH1cbiAgcHJldk5leHRJZHMubmV4dElkID0gTnVtYmVyKGVsVW5kZXIuaWQpO1xuICBwcmV2TmV4dElkcy5wcmV2SWQgPSBOdW1iZXIoZHJhZ1N0b3JlLmlkKTtcblxuICBpZiAocHJldk5leHRJZHMucHJldklkIDwgcHJldk5leHRJZHMubmV4dElkKSB7XG4gICAgZWxVbmRlci5wYXJlbnRFbGVtZW50Lmluc2VydEJlZm9yZShkcmFnU3RvcmUsIGVsVW5kZXIubmV4dEVsZW1lbnRTaWJsaW5nKTtcbiAgfSBlbHNlIGlmIChwcmV2TmV4dElkcy5wcmV2SWQgPiBwcmV2TmV4dElkcy5uZXh0SWQpIHtcbiAgICBlbFVuZGVyLnBhcmVudEVsZW1lbnQuaW5zZXJ0QmVmb3JlKGRyYWdTdG9yZSwgZWxVbmRlcik7XG4gIH1cblxuICBjb25zdCB7IGlkIH0gPSBlbFVuZGVyO1xuXG4gIGlmIChwcmV2TmV4dElkcy5wcmV2SWQgPCBwcmV2TmV4dElkcy5uZXh0SWQpIHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGxldCBlbFVuZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpO1xuICAgICAgLy8gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiIzRjM2MzY1wiO1xuICAgICAgY29uc3QgY2xhc3NBcnJheSA9IGVsVW5kZXIuY2xhc3NMaXN0LnZhbHVlLnNwbGl0KCcgJyk7XG4gICAgICBpZiAoXG4gICAgICAgIGNsYXNzQXJyYXkuaW5jbHVkZXMoJ2ZhLWNoZWNrJylcbiAgICAgICAgfHwgY2xhc3NBcnJheS5pbmNsdWRlcygnY2hlY2tib3gnKVxuICAgICAgICB8fCBjbGFzc0FycmF5LmluY2x1ZGVzKCd0by1kbycpXG4gICAgICApIHtcbiAgICAgICAgZWxVbmRlciA9IGVsVW5kZXIucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50O1xuICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgY2xhc3NBcnJheS5pbmNsdWRlcygnZmEtYXJyb3dzLWFsdCcpXG4gICAgICAgIHx8IGNsYXNzQXJyYXkuaW5jbHVkZXMoJ3R3bycpXG4gICAgICApIHtcbiAgICAgICAgZWxVbmRlciA9IGVsVW5kZXIucGFyZW50RWxlbWVudDtcbiAgICAgIH1cblxuICAgICAgZWxVbmRlci5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnIzRjM2MzYyc7XG4gICAgICBlbFVuZGVyLnN0eWxlLmNvbG9yID0gJyNmZmYnO1xuICAgICAgQXJyYXkuZnJvbShlbFVuZGVyLmNoaWxkTm9kZXMpLmZvckVhY2goKG5vZGUpID0+IHtcbiAgICAgICAgaWYgKG5vZGUubm9kZU5hbWUgPT09ICdESVYnKSB7XG4gICAgICAgICAgY29uc3Qgbm9kZXMgPSBub2RlLmNoaWxkTm9kZXM7XG4gICAgICAgICAgQXJyYXkuZnJvbShub2RlcykuZm9yRWFjaCgob25lKSA9PiB7XG4gICAgICAgICAgICBvbmUuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyM0YzNjM2MnO1xuICAgICAgICAgICAgb25lLnN0eWxlLmNvbG9yID0gJyNmZmYnO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIG5vZGUuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyM0YzNjM2MnO1xuICAgICAgICBub2RlLnN0eWxlLmNvbG9yID0gJyNmZmYnO1xuICAgICAgfSk7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgLy8gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiI2ZmZlwiO1xuICAgICAgICBsZXQgZWxVbmRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKTtcbiAgICAgICAgLy8gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiIzRjM2MzY1wiO1xuICAgICAgICBjb25zdCBjbGFzc0FycmF5ID0gZWxVbmRlci5jbGFzc0xpc3QudmFsdWUuc3BsaXQoJyAnKTtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIGNsYXNzQXJyYXkuaW5jbHVkZXMoJ2ZhLWNoZWNrJylcbiAgICAgICAgICB8fCBjbGFzc0FycmF5LmluY2x1ZGVzKCdjaGVja2JveCcpXG4gICAgICAgICAgfHwgY2xhc3NBcnJheS5pbmNsdWRlcygndG8tZG8nKVxuICAgICAgICApIHtcbiAgICAgICAgICBlbFVuZGVyID0gZWxVbmRlci5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQ7XG4gICAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgICAgY2xhc3NBcnJheS5pbmNsdWRlcygnZmEtYXJyb3dzLWFsdCcpXG4gICAgICAgICAgfHwgY2xhc3NBcnJheS5pbmNsdWRlcygndHdvJylcbiAgICAgICAgKSB7XG4gICAgICAgICAgZWxVbmRlciA9IGVsVW5kZXIucGFyZW50RWxlbWVudDtcbiAgICAgICAgfVxuICAgICAgICBlbFVuZGVyLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjZmZmJztcbiAgICAgICAgZWxVbmRlci5zdHlsZS5jb2xvciA9ICcjZmZmJztcbiAgICAgICAgQXJyYXkuZnJvbShlbFVuZGVyLmNoaWxkTm9kZXMpLmZvckVhY2goKG5vZGUpID0+IHtcbiAgICAgICAgICBpZiAobm9kZS5ub2RlTmFtZSA9PT0gJ0RJVicpIHtcbiAgICAgICAgICAgIGNvbnN0IG5vZGVzID0gbm9kZS5jaGlsZE5vZGVzO1xuICAgICAgICAgICAgQXJyYXkuZnJvbShub2RlcykuZm9yRWFjaCgob25lKSA9PiB7XG4gICAgICAgICAgICAgIG9uZS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnI2ZmZic7XG4gICAgICAgICAgICAgIG9uZS5zdHlsZS5jb2xvciA9ICdyZ2IoMTM0LCAxMjIsIDEyMiknO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIG5vZGUuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyNmZmYnO1xuICAgICAgICAgIG5vZGUuc3R5bGUuY29sb3IgPSAncmdiKDIwNCwgMTg3LCAxODcpJztcbiAgICAgICAgICBpZiAobm9kZS5jbGFzc0xpc3QudmFsdWUuaW5jbHVkZXMoJ2ZhLWFycm93cy1hbHQnKSkge1xuICAgICAgICAgICAgbm9kZS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCAoKSA9PiB7XG4gICAgICAgICAgICAgIG5vZGUuc3R5bGUuY29sb3IgPSAncmdiKDc1LCA2NiwgNjYpJztcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgbm9kZS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW91dCcsICgpID0+IHtcbiAgICAgICAgICAgICAgbm9kZS5zdHlsZS5jb2xvciA9ICdyZ2IoMjA0LCAxODcsIDE4NyknO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0sIDgxMCk7XG4gICAgfSwgMTApO1xuICB9IGVsc2UgaWYgKHByZXZOZXh0SWRzLnByZXZJZCA+IHByZXZOZXh0SWRzLm5leHRJZCkge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgbGV0IGVsVW5kZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7XG4gICAgICAvLyBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCkuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCIjNGMzYzNjXCI7XG4gICAgICBjb25zdCBjbGFzc0FycmF5ID0gZWxVbmRlci5jbGFzc0xpc3QudmFsdWUuc3BsaXQoJyAnKTtcbiAgICAgIGlmIChcbiAgICAgICAgY2xhc3NBcnJheS5pbmNsdWRlcygnZmEtY2hlY2snKVxuICAgICAgICB8fCBjbGFzc0FycmF5LmluY2x1ZGVzKCdjaGVja2JveCcpXG4gICAgICAgIHx8IGNsYXNzQXJyYXkuaW5jbHVkZXMoJ3RvLWRvJylcbiAgICAgICkge1xuICAgICAgICBlbFVuZGVyID0gZWxVbmRlci5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQ7XG4gICAgICB9IGVsc2UgaWYgKFxuICAgICAgICBjbGFzc0FycmF5LmluY2x1ZGVzKCdmYS1hcnJvd3MtYWx0JylcbiAgICAgICAgfHwgY2xhc3NBcnJheS5pbmNsdWRlcygndHdvJylcbiAgICAgICkge1xuICAgICAgICBlbFVuZGVyID0gZWxVbmRlci5wYXJlbnRFbGVtZW50O1xuICAgICAgfVxuICAgICAgZWxVbmRlci5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnIzRjM2MzYyc7XG4gICAgICBlbFVuZGVyLnN0eWxlLmNvbG9yID0gJyNmZmYnO1xuICAgICAgQXJyYXkuZnJvbShlbFVuZGVyLmNoaWxkTm9kZXMpLmZvckVhY2goKG5vZGUpID0+IHtcbiAgICAgICAgaWYgKG5vZGUubm9kZU5hbWUgPT09ICdESVYnKSB7XG4gICAgICAgICAgY29uc3Qgbm9kZXMgPSBub2RlLmNoaWxkTm9kZXM7XG4gICAgICAgICAgQXJyYXkuZnJvbShub2RlcykuZm9yRWFjaCgob25lKSA9PiB7XG4gICAgICAgICAgICBvbmUuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyM0YzNjM2MnO1xuICAgICAgICAgICAgb25lLnN0eWxlLmNvbG9yID0gJyNmZmYnO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIG5vZGUuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyM0YzNjM2MnO1xuICAgICAgICBub2RlLnN0eWxlLmNvbG9yID0gJyNmZmYnO1xuICAgICAgfSk7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgLy8gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiI2ZmZlwiO1xuICAgICAgICBsZXQgZWxVbmRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKTtcbiAgICAgICAgLy8gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiIzRjM2MzY1wiO1xuICAgICAgICBjb25zdCBjbGFzc0FycmF5ID0gZWxVbmRlci5jbGFzc0xpc3QudmFsdWUuc3BsaXQoJyAnKTtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIGNsYXNzQXJyYXkuaW5jbHVkZXMoJ2ZhLWNoZWNrJylcbiAgICAgICAgICB8fCBjbGFzc0FycmF5LmluY2x1ZGVzKCdjaGVja2JveCcpXG4gICAgICAgICAgfHwgY2xhc3NBcnJheS5pbmNsdWRlcygndG8tZG8nKVxuICAgICAgICApIHtcbiAgICAgICAgICBlbFVuZGVyID0gZWxVbmRlci5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQ7XG4gICAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgICAgY2xhc3NBcnJheS5pbmNsdWRlcygnZmEtYXJyb3dzLWFsdCcpXG4gICAgICAgICAgfHwgY2xhc3NBcnJheS5pbmNsdWRlcygndHdvJylcbiAgICAgICAgKSB7XG4gICAgICAgICAgZWxVbmRlciA9IGVsVW5kZXIucGFyZW50RWxlbWVudDtcbiAgICAgICAgfVxuICAgICAgICBlbFVuZGVyLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjZmZmJztcbiAgICAgICAgZWxVbmRlci5zdHlsZS5jb2xvciA9ICcjZmZmJztcbiAgICAgICAgQXJyYXkuZnJvbShlbFVuZGVyLmNoaWxkTm9kZXMpLmZvckVhY2goKG5vZGUpID0+IHtcbiAgICAgICAgICBpZiAobm9kZS5ub2RlTmFtZSA9PT0gJ0RJVicpIHtcbiAgICAgICAgICAgIGNvbnN0IG5vZGVzID0gbm9kZS5jaGlsZE5vZGVzO1xuICAgICAgICAgICAgQXJyYXkuZnJvbShub2RlcykuZm9yRWFjaCgob25lKSA9PiB7XG4gICAgICAgICAgICAgIG9uZS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnI2ZmZic7XG4gICAgICAgICAgICAgIG9uZS5zdHlsZS5jb2xvciA9ICdyZ2IoMTM0LCAxMjIsIDEyMiknO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIG5vZGUuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyNmZmYnO1xuICAgICAgICAgIG5vZGUuc3R5bGUuY29sb3IgPSAncmdiKDIwNCwgMTg3LCAxODcpJztcbiAgICAgICAgICBpZiAobm9kZS5jbGFzc0xpc3QudmFsdWUuaW5jbHVkZXMoJ2ZhLWFycm93cy1hbHQnKSkge1xuICAgICAgICAgICAgbm9kZS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCAoKSA9PiB7XG4gICAgICAgICAgICAgIG5vZGUuc3R5bGUuY29sb3IgPSAncmdiKDc1LCA2NiwgNjYpJztcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgbm9kZS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW91dCcsICgpID0+IHtcbiAgICAgICAgICAgICAgbm9kZS5zdHlsZS5jb2xvciA9ICdyZ2IoMjA0LCAxODcsIDE4NyknO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0sIDgxMCk7XG4gICAgfSwgMTApO1xuICB9XG59O1xuXG5jb25zdCBkcmFnRW5kID0gKHNob3dUb0RvKSA9PiB7XG4gIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIGRyYWdTdG9yZS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnI2ZmZic7XG4gIH0sIDEwMDApO1xuXG4gIGNvbnN0IGFsbFRvRG9FbGVtZW50cyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRvLWRvLXJvdycpKTtcbiAgY29uc3QgaWRzID0gYWxsVG9Eb0VsZW1lbnRzLm1hcCgoZWwpID0+IE51bWJlcihlbC5pZCkpO1xuICBsZXQgdGFza3MgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0YXNrcycpKTtcbiAgY29uc3QgbW9ja1Rhc2tzID0gW107XG4gIGlkcy5mb3JFYWNoKChpZCkgPT4ge1xuICAgIG1vY2tUYXNrcy5wdXNoKHRhc2tzLmZpbHRlcigodGFzaykgPT4gdGFzay5pbmRleCA9PT0gaWQpWzBdKTtcbiAgfSk7XG4gIHRhc2tzID0gbW9ja1Rhc2tzO1xuICByZW9yZGVySW5kaWNlcyh0YXNrcyk7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0YXNrcycsIEpTT04uc3RyaW5naWZ5KHRhc2tzKSk7XG4gIHNob3dUb0RvKCk7XG59O1xuXG5jb25zdCByZW1vdmVPbmUgPSAodGFzaywgc2hvd1RvRG8pID0+IHtcbiAgbGV0IHRhc2tzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGFza3MnKSk7XG4gIC8vIHRhc2tzID0gdGFza3MuZmlsdGVyKChvbmVUYXNrKSA9PiBvbmVUYXNrLmluZGV4ICE9PSB0YXNrLmluZGV4KTtcbiAgaWYgKHJlbW92YWJsZS52YWx1ZSB8fCByZW1vdmFibGUuaW5pdCkge1xuICAgIHRhc2tzID0gdGFza3MuZmlsdGVyKChvbmVUYXNrKSA9PiBvbmVUYXNrLmluZGV4ICE9PSB0YXNrLmluZGV4KTtcbiAgICByZW1vdmFibGUuaW5pdCA9IGZhbHNlO1xuICB9XG5cbiAgcmVtb3ZhYmxlLnZhbHVlID0gZmFsc2U7XG5cbiAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgcmVtb3ZhYmxlLmluaXQgPSBmYWxzZTtcbiAgICByZW1vdmFibGUudmFsdWUgPSB0cnVlO1xuICB9LCA1MDApO1xuXG4gIHJlb3JkZXJJbmRpY2VzKHRhc2tzKTtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rhc2tzJywgSlNPTi5zdHJpbmdpZnkodGFza3MpKTtcbiAgcmV0dXJuIHNob3dUb0RvKCk7XG59O1xuXG5jb25zdCByZW1vdmVTZWxlY3RlZCA9ICh0YXNrcywgc2hvd1RvRG8pID0+IHtcbiAgdGFza3MgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0YXNrcycpKTtcbiAgdGFza3MgPSB0YXNrcy5maWx0ZXIoKHRhc2spID0+ICF0YXNrLmNvbXBsZXRlZCk7XG4gIHJlb3JkZXJJbmRpY2VzKHRhc2tzKTtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rhc2tzJywgSlNPTi5zdHJpbmdpZnkodGFza3MpKTtcbiAgc2hvd1RvRG8oKTtcbiAgcmV0dXJuIHRydWU7XG59O1xuXG5jb25zdCBhZGRUb0RvID0gKHRhc2tzLCBzaG93VG9EbywgZ29Ub0lucHV0KSA9PiB7XG4gIHRhc2tzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGFza3MnKSk7XG4gIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmlucHV0JykudmFsdWU7XG4gIGlmICghZGVzY3JpcHRpb24pIHtcbiAgICBnb1RvSW5wdXQoKTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBjb25zdCBkYXRhID0ge1xuICAgIGRlc2NyaXB0aW9uLFxuICAgIGluZGV4OiB0YXNrcy5sZW5ndGggKyAxLFxuICAgIGNvbXBsZXRlZDogZmFsc2UsXG4gIH07XG5cbiAgdGFza3MucHVzaChkYXRhKTtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rhc2tzJywgSlNPTi5zdHJpbmdpZnkodGFza3MpKTtcbiAgc2hvd1RvRG8oKTtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmlucHV0JykudmFsdWUgPSAnJztcbiAgZ29Ub0lucHV0KCk7XG4gIHJldHVybiB0cnVlO1xufTtcblxuZXhwb3J0IHtcbiAgZHJvcCxcbiAgZHJhZ0VuZCxcbiAgZHJhZyxcbiAgZHJhZ1N0YXJ0LFxuICByZW1vdmVPbmUsXG4gIHJlbW92ZVNlbGVjdGVkLFxuICBhZGRUb0RvLFxuICByZW1vdmFibGUsXG59OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCB1cGRhdGVDb21wbGV0ZWQgZnJvbSAnLi9jb21wbGV0ZWRUb0RvJztcbmltcG9ydCB7XG4gIGRyb3AsXG4gIGRyYWdFbmQsXG4gIGRyYWcsXG4gIGRyYWdTdGFydCxcbiAgcmVtb3ZlT25lLFxuICByZW1vdmVTZWxlY3RlZCxcbiAgYWRkVG9Ebyxcbn0gZnJvbSAnLi9tYW5pcHVsYXRlVG9Ebyc7XG5cbmxldCB0YXNrcyA9IFtdO1xubGV0IHJlbW92YWJsZSA9IHRydWU7XG5jb25zdCBnb1RvSW5wdXQgPSAoKSA9PiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5wdXQnKS5mb2N1cygpO1xuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAnLmZvb3Rlci10ZXh0JyxcbikuaW5uZXJIVE1MID0gYCZjb3B5OyAke25ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKX0gSGVucnktS2MsIGJ1aWx0IHdpdGgg8J+SlSBmcm9tIG1lYDtcblxuY29uc3QgYWx0ZXJuYXRlVGlja0FuZENoZWNrID0gKHRpY2ssIGNoZWNrLCB0YXNrLCBpbnB1dDIpID0+IHtcbiAgaWYgKHRhc2suY29tcGxldGVkKSB7XG4gICAgdGljay5zdHlsZS5kaXNwbGF5ID0gJ2lubGluZS1ibG9jayc7XG4gICAgY2hlY2suc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICBpbnB1dDIuY2xhc3NMaXN0LmFkZCgnY3Jvc3Mtb3V0Jyk7XG4gIH0gZWxzZSB7XG4gICAgdGljay5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIGNoZWNrLnN0eWxlLmRpc3BsYXkgPSAnaW5saW5lLWJsb2NrJztcbiAgICBpbnB1dDIuY2xhc3NMaXN0LnJlbW92ZSgnY3Jvc3Mtb3V0Jyk7XG4gIH1cbn07XG5cbmNvbnN0IHNob3dUb0RvID0gKCkgPT4ge1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG8tZG8tbGlzdCcpLmlubmVySFRNTCA9ICcnO1xuICBjb25zdCB0YXNrcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rhc2tzJykpO1xuICBpZiAodHlwZW9mIHRhc2tzWzBdID09PSAnb2JqZWN0Jykge1xuICAgIHRhc2tzLmZvckVhY2goKHRhc2ssIGluZGV4LCB0YXNrcykgPT4ge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVzZS1iZWZvcmUtZGVmaW5lXG4gICAgICBnZW5lcmF0ZVRvRG9Sb3dzKHRhc2suZGVzY3JpcHRpb24sIHRhc2ssIHRhc2tzKTtcbiAgICB9KTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGFza3MnLCBKU09OLnN0cmluZ2lmeSh0YXNrcykpO1xuICByZXR1cm4gdHJ1ZTtcbn07XG5cbmNvbnN0IHJlZnJlc2ggPSAoc2hvd1RvRG8pID0+IHtcbiAgLy8gdGFza3MgPSBfLnNvcnRCeSh0YXNrcywgJ2luZGV4Jyk7XG4gIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGFza3MnKSAhPT0gbnVsbCkge1xuICAgIHRhc2tzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGFza3MnKSk7XG4gIH0gZWxzZSB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rhc2tzJywgSlNPTi5zdHJpbmdpZnkodGFza3MpKTtcbiAgfVxuICBzaG93VG9EbygpO1xuICBnb1RvSW5wdXQoKTtcbiAgcmV0dXJuIHRydWU7XG59O1xuXG5jb25zdCBnZW5lcmF0ZVRvRG9Sb3dzID0gKHRleHQsIHRhc2ssIHRhc2tzKSA9PiB7XG4gIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBkaXYuY2xhc3NMaXN0LmFkZCgndG8tZG8tcm93JywgJ2N1c3RvbS1yb3cnKTtcbiAgZGl2LmlkID0gdGFzay5pbmRleDtcbiAgZGl2LmRyYWdnYWJsZSA9IHRydWU7XG4gIGNvbnN0IGRpdjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZGl2Mi5jbGFzc0xpc3QuYWRkKCd0d28nKTtcblxuICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIGlucHV0LmNsYXNzTGlzdC5hZGQoJ2NoZWNrYm94Jyk7XG4gIGlucHV0LnR5cGUgPSAnY2hlY2tib3gnO1xuXG4gIGNvbnN0IHRpY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XG4gIHRpY2suY2xhc3NMaXN0LmFkZCgnZmFzJywgJ2ZhLWNoZWNrJyk7XG5cbiAgZGl2Mi5hcHBlbmRDaGlsZChpbnB1dCk7XG4gIGRpdjIuYXBwZW5kQ2hpbGQodGljayk7XG5cbiAgY29uc3QgaW5wdXQyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgaW5wdXQyLmNvbnRlbnRFZGl0YWJsZSA9IHRydWU7XG4gIGlucHV0Mi5jbGFzc0xpc3QuYWRkKCd0by1kbycpO1xuXG4gIGlucHV0Mi50eXBlID0gJ3RleHQnO1xuICBpbnB1dDIudmFsdWUgPSB0ZXh0O1xuICBkaXYyLmFwcGVuZENoaWxkKGlucHV0Mik7XG5cbiAgZGl2LmFwcGVuZENoaWxkKGRpdjIpO1xuXG4gIGNvbnN0IGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XG4gIGkuY2xhc3NMaXN0LmFkZCgnZmFzJywgJ2ZhLWFycm93cy1hbHQnKTtcbiAgZGl2LmFwcGVuZENoaWxkKGkpO1xuXG4gIGlucHV0Mi5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsICgpID0+IHtcbiAgICBpbnB1dDIuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyNmZmZlY2EnO1xuICAgIGRpdi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnI2ZmZmVjYSc7XG4gICAgaS5jbGFzc0xpc3QucmVtb3ZlKCdmYS1hcnJvd3MtYWx0Jyk7XG4gICAgaS5jbGFzc0xpc3QuYWRkKCdmYS10cmFzaC1hbHQnKTtcbiAgICBpLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsICgpID0+IHtcbiAgICAgIC8vIHJlbW92YWJsZSA9IHRydWU7XG4gICAgICByZW1vdmVPbmUodGFzaywgc2hvd1RvRG8sIHJlbW92YWJsZSk7XG4gICAgfSk7XG4gIH0pO1xuICB0aWNrLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHVwZGF0ZUNvbXBsZXRlZCh0YXNrLCB0YXNrcyk7XG4gICAgYWx0ZXJuYXRlVGlja0FuZENoZWNrKHRpY2ssIGlucHV0LCB0YXNrLCBpbnB1dDIpO1xuICAgIHJldHVybiB0cnVlO1xuICB9KTtcblxuICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHVwZGF0ZUNvbXBsZXRlZCh0YXNrLCB0YXNrcyk7XG4gICAgYWx0ZXJuYXRlVGlja0FuZENoZWNrKHRpY2ssIGlucHV0LCB0YXNrLCBpbnB1dDIpO1xuICAgIHJldHVybiB0cnVlO1xuICB9KTtcbiAgaWYgKHRhc2suY29tcGxldGVkKSB7XG4gICAgdGljay5zdHlsZS5kaXNwbGF5ID0gJ2lubGluZS1ibG9jayc7XG4gICAgaW5wdXQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICBpbnB1dDIuY2xhc3NMaXN0LmFkZCgnY3Jvc3Mtb3V0Jyk7XG4gIH0gZWxzZSBpZiAoIXRhc2suY29tcGxldGVkKSB7XG4gICAgdGljay5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIGlucHV0LnN0eWxlLmRpc3BsYXkgPSAnaW5saW5lLWJsb2NrJztcbiAgICBpbnB1dDIuY2xhc3NMaXN0LnJlbW92ZSgnY3Jvc3Mtb3V0Jyk7XG4gIH1cblxuICBjb25zdCBlZGl0VG9EbyA9IChpbnB1dCwgdGFzaywgdGFza3MpID0+IHtcbiAgICBjb25zdCB7IHZhbHVlIH0gPSBpbnB1dDtcbiAgICBpZiAodmFsdWUgPT09ICcnKSB7XG4gICAgICByZW1vdmFibGUgPSB0cnVlO1xuICAgICAgcmVtb3ZlT25lKHRhc2ssIHNob3dUb0RvLCByZW1vdmFibGUpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICB0YXNrLmRlc2NyaXB0aW9uID0gdmFsdWU7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rhc2tzJywgSlNPTi5zdHJpbmdpZnkodGFza3MpKTtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdXNlLWJlZm9yZS1kZWZpbmVcbiAgICBzaG93VG9EbygpO1xuICAgIHJldHVybiB0cnVlO1xuICB9O1xuXG4gIGlucHV0Mi5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgKCkgPT4ge1xuICAgIGlucHV0Mi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnI2ZmZic7XG4gICAgZGl2LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjZmZmJztcblxuICAgIGkuY2xhc3NMaXN0LnJlbW92ZSgnZmEtdHJhc2gtYWx0Jyk7XG4gICAgaS5jbGFzc0xpc3QuYWRkKCdmYS1hcnJvd3MtYWx0Jyk7XG5cbiAgICBpLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgcmVtb3ZhYmxlID0gdHJ1ZTtcbiAgICAgIHJlbW92ZU9uZSh0YXNrLCBzaG93VG9EbywgcmVtb3ZhYmxlKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0pO1xuICB9KTtcblxuICBpbnB1dDIuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgIGVkaXRUb0RvKGlucHV0MiwgdGFzaywgdGFza3MpO1xuICB9KTtcblxuICBpbnB1dDIuYWRkRXZlbnRMaXN0ZW5lcigna2V5cHJlc3MnLCAoZSkgPT4ge1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgaWYgKGUua2V5ID09PSAnRW50ZXInKSB7XG4gICAgICBpbnB1dDIuYmx1cigpO1xuICAgIH1cbiAgfSk7XG5cbiAgY29uc3QgdG9Eb0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50by1kby1saXN0Jyk7XG4gIHRvRG9Db250YWluZXIuYXBwZW5kQ2hpbGQoZGl2KTtcbiAgZGl2LmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdvdmVyJywgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIH0pO1xuICBkaXYuYWRkRXZlbnRMaXN0ZW5lcignZHJhZycsIChldikgPT4gZHJhZyhldikpO1xuICBkaXYuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ3N0YXJ0JywgKGUpID0+IGRyYWdTdGFydChlKSk7XG4gIGRpdi5hZGRFdmVudExpc3RlbmVyKCdkcmFnZW5kJywgKCkgPT4gZHJhZ0VuZChzaG93VG9EbykpO1xuICBkaXYuYWRkRXZlbnRMaXN0ZW5lcignZHJvcCcsIChldikgPT4gZHJvcChldikpO1xuXG4gIHJldHVybiB0cnVlO1xufTtcblxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNsZWFyLXRleHQnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0YXNrcycpICE9PSBudWxsKSB7XG4gICAgdGFza3MgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0YXNrcycpKTtcbiAgfVxuICByZW1vdmVTZWxlY3RlZCh0YXNrcywgc2hvd1RvRG8pO1xufSk7XG5cbmRvY3VtZW50XG4gIC5xdWVyeVNlbGVjdG9yKCcucmV0dXJuJylcbiAgLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gYWRkVG9Ebyh0YXNrcywgc2hvd1RvRG8sIGdvVG9JbnB1dCkpO1xuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZhLXN5bmMnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZhLXN5bmMnKS5jbGFzc0xpc3QudG9nZ2xlKCdyb3RhdGUtc3luYycpO1xufSk7XG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pdGVtOm50aC1jaGlsZCgzKScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmEtc3luYycpLmNsYXNzTGlzdC50b2dnbGUoJ3JvdGF0ZS1zeW5jJyk7XG59KTtcblxuY29uc3QgcmVmcmVzaEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mYS1zeW5jJyk7XG5yZWZyZXNoQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICByZWZyZXNoKHNob3dUb0RvKTtcbiAgcmV0dXJuIHRydWU7XG59KTtcblxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmlucHV0JykuYWRkRXZlbnRMaXN0ZW5lcigna2V5cHJlc3MnLCAoZSkgPT4ge1xuICBpZiAoZS5rZXkgPT09ICdFbnRlcicpIHtcbiAgICBhZGRUb0RvKHRhc2tzLCBzaG93VG9EbywgZ29Ub0lucHV0KTtcbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn0pO1xuXG5kb2N1bWVudFxuICAucXVlcnlTZWxlY3RvcignLml0ZW06bnRoLWNoaWxkKDEpJylcbiAgLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gYWRkVG9Ebyh0YXNrcywgc2hvd1RvRG8sIGdvVG9JbnB1dCkpO1xuZG9jdW1lbnRcbiAgLnF1ZXJ5U2VsZWN0b3IoJy5pdGVtOm50aC1jaGlsZCgyKScpXG4gIC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHJlbW92ZVNlbGVjdGVkKHRhc2tzLCBzaG93VG9EbykpO1xuZG9jdW1lbnRcbiAgLnF1ZXJ5U2VsZWN0b3IoJy5pdGVtOm50aC1jaGlsZCgzKScpXG4gIC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHJlZnJlc2goc2hvd1RvRG8pKTtcblxucmVmcmVzaChzaG93VG9Ebyk7XG5cbnNob3dUb0RvKCk7XG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mYS1zeW5jJykudGl0bGUgPSAncmVtb3ZlIHRhc2tzIGNvbXBsZXRlZCBtb3JlIHRoYW4gb25lIG1vbnRoIGFnbyc7XG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaXRlbTpudGgtY2hpbGQoMyknKS50aXRsZSA9ICdyZW1vdmUgdGFza3MgY29tcGxldGVkIG1vcmUgdGhhbiBvbmUgbW9udGggYWdvJztcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pdGVtOm50aC1jaGlsZCgyKScpLnRpdGxlID0gJ3JlbW92ZSBjb21wbGV0ZWQgdGFza3MnO1xuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLml0ZW06bnRoLWNoaWxkKDEpJykudGl0bGUgPSAnYWRkIHRhc2tzJztcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jbGVhci10ZXh0JykudGl0bGUgPSAncmVtb3ZlIGNvbXBsZXRlZCB0YXNrcyc7XG5jb25zdCBhbGxDaGVja2JveGVzID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2hlY2tib3gnKSk7XG5hbGxDaGVja2JveGVzLmZvckVhY2goKGNoZWNrYm94KSA9PiB7XG4gIGNoZWNrYm94LnRpdGxlID0gJ21hcmsgYXMgY29tcGxldGVkJztcbiAgcmV0dXJuIHRydWU7XG59KTtcbmNvbnN0IGFsbFRpY2tNYXJrcyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmZhLWNoZWNrJykpO1xuYWxsVGlja01hcmtzLmZvckVhY2goKHRpY2tNYXJrKSA9PiB7XG4gIHRpY2tNYXJrLnRpdGxlID0gJ3VubWFyayBhcyBjb21wbGV0ZWQnO1xuICByZXR1cm4gdHJ1ZTtcbn0pO1xuY29uc3QgYWxsVG9kb0l0ZW1zID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudG8tZG8nKSk7XG5hbGxUb2RvSXRlbXMuZm9yRWFjaCgodG9kbykgPT4ge1xuICB0b2RvLnRpdGxlID0gJ2NsaWNrIHRvIGRlbGV0ZS9lZGl0LCBkcmFnIHRvIG1vdmUnO1xuICByZXR1cm4gdHJ1ZTtcbn0pO1xuY29uc3QgYWxsTW92ZUJ1dHRvbnMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2ZhLWFycm93cy1hbHQnKSk7XG5hbGxNb3ZlQnV0dG9ucy5mb3JFYWNoKChtb3ZlQnV0dG9uKSA9PiB7XG4gIG1vdmVCdXR0b24udGl0bGUgPSAnZHJhZyB3aXRoaW4gdGhlIGJveCB0byBtb3ZlJztcbiAgcmV0dXJuIHRydWU7XG59KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==