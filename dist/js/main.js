/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js"
/*!******************!*\
  !*** ./index.js ***!
  \******************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/timer */ \"./modules/timer.js\");\n/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/menu */ \"./modules/menu.js\");\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/modal */ \"./modules/modal.js\");\n/* harmony import */ var _modules_validForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/validForm */ \"./modules/validForm.js\");\n/* harmony import */ var _modules_tabds__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/tabds */ \"./modules/tabds.js\");\n\r\n\r\n\r\n\r\n\r\n(0,_modules_timer__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('29 september 2026');\r\n(0,_modules_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n(0,_modules_modal__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n(0,_modules_validForm__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n(0,_modules_tabds__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n\n//# sourceURL=webpack:///./index.js?\n}");

/***/ },

/***/ "./modules/menu.js"
/*!*************************!*\
  !*** ./modules/menu.js ***!
  \*************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst menu = () => {\r\n    const menuBtn = document.querySelector('.menu');\r\n    const menu = document.querySelector(\"menu\");\r\n    const closeBtn = menu.querySelector(\".close-btn\");\r\n    const menuItems = menu.querySelectorAll(\"ul>li>a\");\r\n\r\n    const handleMenu = () => {\r\n        menu.classList.toggle('active-menu');\r\n    }\r\n\r\n    menuBtn.addEventListener(\"click\", handleMenu);\r\n\r\n    closeBtn.addEventListener(\"click\", handleMenu);\r\n\r\n    menuItems.forEach(menuItem => menuItem.addEventListener(\"click\", handleMenu))\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);\n\n//# sourceURL=webpack:///./modules/menu.js?\n}");

/***/ },

/***/ "./modules/modal.js"
/*!**************************!*\
  !*** ./modules/modal.js ***!
  \**************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst modal = () => {\r\n    const modal = document.querySelector('.popup');\r\n    const buttons = document.querySelectorAll('.popup-btn');\r\n    const closeeBtn = modal.querySelector('.popup-close');\r\n    let opacity = 0;\r\n    let position = -50;\r\n\r\n    const animate = () => {\r\n        opacity += 0.02;\r\n        position += 1;\r\n\r\n        modal.style.opacity = opacity;\r\n        modal.style.transform = `translateY(${position}px)`;\r\n\r\n        if (opacity < 1) {\r\n            requestAnimationFrame(animate);\r\n        }\r\n    };\r\n\r\n    buttons.forEach(btn => {\r\n        btn.addEventListener('click', () => {\r\n            modal.style.display = \"block\";\r\n\r\n            if (window.innerWidth < 768) {\r\n                modal.style.opacity = '1';\r\n                modal.style.transform = 'translateY(0)';\r\n                return;\r\n            }\r\n\r\n            opacity = 0;\r\n            position = -50;\r\n\r\n            modal.style.opacity = opacity;\r\n            modal.style.transform = `translateY(${position}px)`;\r\n\r\n            animate();\r\n        })\r\n    });\r\n    \r\n    modal.addEventListener('click',(e)=>{\r\n        if(!e.target.closest('.popup-content') || e.target.classList.contains('popup-close')){\r\n            modal.style.display = 'none';\r\n        }\r\n    });\r\n\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);\n\n//# sourceURL=webpack:///./modules/modal.js?\n}");

/***/ },

/***/ "./modules/tabds.js"
/*!**************************!*\
  !*** ./modules/tabds.js ***!
  \**************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst tabs = () =>{\r\n    const tabPanel = document.querySelector('.service-header');\r\n    const tabs = document.querySelectorAll('.service-header-tab');\r\n    const tabContent = document.querySelectorAll('.service-tab');\r\n\r\n\r\n    tabPanel.addEventListener(\"click\",(e)=>{\r\n        if(e.target.closest('.service-header-tab')){\r\n            const tabBtn = e.target.closest('.service-header-tab');\r\n            tabs.forEach((tab,index)=>{\r\n                if(tab === tabBtn){\r\n                    tab.classList.add(\"active\");\r\n                    tabContent[index].classList.remove(\"d-none\");\r\n                } else{\r\n                    tab.classList.remove(\"active\");\r\n                    tabContent[index].classList.add(\"d-none\");\r\n                   \r\n                }\r\n            })\r\n        }\r\n    })\r\n\r\n    // console.log(tabPanel);\r\n    // console.log(tabs);\r\n    // console.log(tabContent);\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tabs);\n\n//# sourceURL=webpack:///./modules/tabds.js?\n}");

/***/ },

/***/ "./modules/timer.js"
/*!**************************!*\
  !*** ./modules/timer.js ***!
  \**************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst timer = (deadline) => {\r\n    const timerHours = document.getElementById('timer-hours');\r\n    const timerMinutes = document.getElementById('timer-minutes');\r\n    const timerSeconds = document.getElementById('timer-seconds');\r\n\r\n\r\n    const getTimeRemaining = () => {\r\n        let dateStop = new Date(deadline).getTime();\r\n        let dateNow = new Date().getTime();\r\n        let timeRenaining = (dateStop - dateNow) / 1000;\r\n        // let days = Math.floor(timeRenaining / 60 / 60 / 24);\r\n        let hours = Math.floor(timeRenaining / 60 / 60 % 24);\r\n        let minutes = Math.floor((timeRenaining / 60) % 60);\r\n        let seconds = Math.floor(timeRenaining % 60);\r\n\r\n        return { timeRenaining, hours, minutes, seconds }\r\n\r\n    }\r\n\r\n    const pad = num => ('0' + num).slice(-2);\r\n\r\n    const updateClock = () => {\r\n\r\n        let getTime = getTimeRemaining();\r\n\r\n        timerHours.textContent = pad(getTime.hours);\r\n        timerMinutes.textContent = pad(getTime.minutes);\r\n        timerSeconds.textContent = pad(getTime.seconds);\r\n\r\n        if (getTime.timeRenaining <= 0) {\r\n            clearInterval(intervalId);\r\n            timerHours.textContent = '00';\r\n            timerMinutes.textContent = '00';\r\n            timerSeconds.textContent = '00';\r\n        }\r\n    }\r\n\r\n    const intervalId = setInterval(updateClock, 1000);\r\n    updateClock();\r\n\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timer);\n\n//# sourceURL=webpack:///./modules/timer.js?\n}");

/***/ },

/***/ "./modules/validForm.js"
/*!******************************!*\
  !*** ./modules/validForm.js ***!
  \******************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst validForm = () => {\r\n\r\n    const inputCalc = document.querySelectorAll(\"#calc input\");\r\n    const inputsForm = document.querySelectorAll('form input');\r\n\r\n    inputCalc.forEach(input => {\r\n        input.addEventListener('input', (e) => {\r\n            e.target.value = e.target.value.replace(/\\D+/g, \"\");\r\n        });\r\n    });\r\n\r\n\r\n\r\n    inputsForm.forEach(input => {\r\n\r\n        input.addEventListener('input', (e) => {\r\n            if (input.type === 'text' || input.placeholder === 'Ваше сообщение') {\r\n                e.target.value = e.target.value.replace(/[^а-я\\s-]/gi, '');\r\n            }\r\n\r\n            if (input.type === 'email') {\r\n                e.target.value = e.target.value.replace(/[^a-z0-9@\\-_.!~*']/gi, '');\r\n            }\r\n\r\n            if (input.type === 'tel') {\r\n                e.target.value = e.target.value.replace(/[^0-9()\\-]/g, '');\r\n            }\r\n\r\n        });\r\n\r\n    });\r\n\r\n\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validForm);\n\n//# sourceURL=webpack:///./modules/validForm.js?\n}");

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	const __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		const cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		const module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			const e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	// define getter/value functions for harmony exports
/******/ 	__webpack_require__.d = (exports, definition) => {
/******/ 		for(var key in definition) {
/******/ 			if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 				Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 			}
/******/ 		}
/******/ 	};
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop));
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = (exports) => {
/******/ 		Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	let __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;