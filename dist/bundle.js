/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/header.js":
/*!***********************!*\
  !*** ./src/header.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst header = () => {\n  let headerElement = document.createElement(\"div\")\n  headerElement.className = \"section\"\n\n  let titleElement = document.createElement(\"h1\")  \n  titleElement.textContent = \"odin-restaurant\"\n  titleElement.className = \"title\"\n  headerElement.appendChild(titleElement)\n  \n  return headerElement\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (header);\n\n//# sourceURL=webpack:///./src/header.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header */ \"./src/header.js\");\n/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./render */ \"./src/render.js\");\n/* harmony import */ var _tabs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tabs */ \"./src/tabs.js\");\n\n\n\n\nconst tabList = [\n                  {title: \"About\", content: \"about\"}, \n                  {title: \"Menu\", content: \"menu\"},\n                  {title: \"Contact\", content: \"contact\"}\n                ]\n\nconst elements = [Object(_header__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(), Object(_tabs__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(tabList)]\n\nObject(_render__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(elements)\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/render.js":
/*!***********************!*\
  !*** ./src/render.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst contentDiv = document.getElementById(\"content\")\n\nconst render = (elements) => {\n  for (let i in elements) {\n    contentDiv.append(elements[i])\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (render);\n\n//# sourceURL=webpack:///./src/render.js?");

/***/ }),

/***/ "./src/tabs.js":
/*!*********************!*\
  !*** ./src/tabs.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst tabs = (tabs) => {\n  const tabsElement = document.createElement(\"div\")\n  const tabsList = document.createElement(\"ul\")\n  tabsElement.className = \"tabs\"\n  tabsElement.appendChild(tabsList)\n\n  const fragment = document.createDocumentFragment()\n  const tabView = document.createElement(\"div\")\n  fragment.appendChild(tabsElement)\n  fragment.appendChild(tabView)\n\n  tabs.forEach(tab => createTab(tab, tabsList, tabView))\n\n  return fragment\n}\n\nconst createTab = (tab, tabsList, tabView) => {\n  let newTab = document.createElement(\"li\")\n  newTab.innerHTML = `<a>${tab.title}</a>`\n  newTab.addEventListener(\"click\", () => {\n    tabView.innerHTML = \"\"\n    tabView.append(tab.content)\n  })\n\n  tabsList.append(newTab)\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (tabs);\n\n//# sourceURL=webpack:///./src/tabs.js?");

/***/ })

/******/ });