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

/***/ "./src/content.js":
/*!************************!*\
  !*** ./src/content.js ***!
  \************************/
/*! exports provided: about, menu, contact */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"about\", function() { return about; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"menu\", function() { return menu; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"contact\", function() { return contact; });\nconst about = () => {\n  const aboutElement = document.createElement(\"div\")\n\n  const aboutText = document.createElement(\"p\")\n  const aboutText2 = document.createElement(\"p\")\n  const aboutText3 = document.createElement(\"p\")  \n  aboutText.textContent = \"Eat at JSoe's!\"\n  aboutText2.textContent = \"We've been open since forever!\"\n  aboutText3.textContent = \"Our website is only JavaScript!?\"  \n\n  aboutElement.appendChild(aboutText)\n  aboutElement.appendChild(aboutText2)\n  aboutElement.appendChild(aboutText3)\n\n  return aboutElement\n}\n\nconst menu = () => {\n  const menuElement = document.createElement(\"div\")\n  menuElement.className = \"has-text-centered\"\n\n  const cheeseburger = document.createElement(\"p\")\n  const fries = document.createElement(\"p\")\n  const drink = document.createElement(\"p\")\n\n  cheeseburger.textContent = \"Black Bean Burger ... 10.99\"\n  fries.textContent = \"Sweet Potato Fries ... 3.99\"\n  drink.textContent = \"Iced Tea ... 2.99\"\n\n  menuElement.appendChild(cheeseburger)\n  menuElement.appendChild(fries)  \n  menuElement.appendChild(drink)  \n\n  return menuElement\n}\n\nconst contact = () => {\n  const contactElement = document.createElement(\"div\")\n  contactElement.className = \"field has-addons\"\n\n  const textField = document.createElement(\"input\")\n  textField.className = \"input\"\n  textField.type = \"text\"\n  textField.placeholder = \"Send a message into the void!\"\n  textField.rows = 3\n\n  const submitButton = document.createElement(\"button\")\n  submitButton.className = \"button is-info\"\n  submitButton.textContent = \"Send it!\"\n\n  contactElement.appendChild(textField)\n  contactElement.appendChild(submitButton) \n\n  return contactElement\n}\n\n\n\n//# sourceURL=webpack:///./src/content.js?");

/***/ }),

/***/ "./src/footer.js":
/*!***********************!*\
  !*** ./src/footer.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst footer = () => {\n  const footerElement = document.createElement(\"div\")\n  footerElement.className = \"footer has-text-centered\"\n  footerElement.style.cssText = `position: fixed;\n                                 width: inherit;\n                                 bottom: 0;\n                                 overflow:hidden;`\n\n  footerElement.innerHTML = `<p>This is a webpage made using only JavaScript.</p>`\n  footerElement.innerHTML += `<p>Check it out on <a href=\"https://github.com/brxck/odin-restaurant\">GitHub.</a></p>`\n\n  return footerElement\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (footer);\n\n//# sourceURL=webpack:///./src/footer.js?");

/***/ }),

/***/ "./src/header.js":
/*!***********************!*\
  !*** ./src/header.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst header = () => {\n  let headerElement = document.createElement(\"div\")\n  headerElement.className = \"section\"\n\n  let titleElement = document.createElement(\"h1\")  \n  titleElement.innerHTML = \"<em>JS</em>oe's Diner\"\n  titleElement.className = \"title\"\n  headerElement.appendChild(titleElement)\n  \n  return headerElement\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (header);\n\n//# sourceURL=webpack:///./src/header.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header */ \"./src/header.js\");\n/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer */ \"./src/footer.js\");\n/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./render */ \"./src/render.js\");\n/* harmony import */ var _tabs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tabs */ \"./src/tabs.js\");\n/* harmony import */ var _content__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./content */ \"./src/content.js\");\n\n\n\n\n\n\nconst tabList = [\n                  {title: \"About\", content: Object(_content__WEBPACK_IMPORTED_MODULE_4__[\"about\"])()}, \n                  {title: \"Menu\", content: Object(_content__WEBPACK_IMPORTED_MODULE_4__[\"menu\"])()},\n                  {title: \"Contact\", content: Object(_content__WEBPACK_IMPORTED_MODULE_4__[\"contact\"])()}\n                ]\n\nconst elements = [Object(_header__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(), Object(_tabs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(tabList), Object(_footer__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()]\n\nObject(_render__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(elements)\n\n//# sourceURL=webpack:///./src/index.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\nconst tabs = (tabs) => {\n  const tabsElement = document.createElement(\"div\")\n  const tabsList = document.createElement(\"ul\")\n  tabsElement.className = \"tabs\"\n  tabsElement.appendChild(tabsList)\n\n  const fragment = document.createDocumentFragment()\n  const tabView = document.createElement(\"div\")\n  tabView.style.width = \"20%\"\n  fragment.appendChild(tabsElement)\n  fragment.appendChild(tabView)\n\n  tabs.forEach(tab => createTab(tab, tabsList, tabView))\n\n  // Make first tab active by simulating mouseclick\n  tabsList.firstChild.dispatchEvent(new Event(\"click\"))\n\n  return fragment\n}\n\nconst createTab = (tab, tabsList, tabView) => {\n  let newTab = document.createElement(\"li\")\n  newTab.innerHTML = `<a>${tab.title}</a>`\n\n  // Make tab visible and toggle status on click\n  newTab.addEventListener(\"click\", () => {\n    tabView.innerHTML = \"\"\n    tabView.append(tab.content)\n\n    Array.from(tabsList.children).forEach(tab => { tab.className = \"\" })\n    newTab.className = \"is-active\"\n  })\n\n  tabsList.append(newTab)\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (tabs);\n\n//# sourceURL=webpack:///./src/tabs.js?");

/***/ })

/******/ });