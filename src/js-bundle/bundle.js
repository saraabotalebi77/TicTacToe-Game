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

/***/ "./src/js/func/count-down.js":
/*!***********************************!*\
  !*** ./src/js/func/count-down.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ showCountDown)\n/* harmony export */ });\nfunction showCountDown(){\r\n    const popup = document.querySelector(\".popup\");\r\n    popup.className = \"popup count-down--wrapper\";\r\n    popup.innerHTML = `<div class=\"count-down\">\r\n        <span class=\"count-down--number count-down--number3\">3</span>\r\n        <span class=\"count-down--number count-down--number2\">2</span>\r\n        <span class=\"count-down--number count-down--number1\">1</span>\r\n    </div>`;\r\n}\n\n//# sourceURL=webpack:///./src/js/func/count-down.js?");

/***/ }),

/***/ "./src/js/func/result-game.js":
/*!************************************!*\
  !*** ./src/js/func/result-game.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ResultGame)\n/* harmony export */ });\n/* harmony import */ var _timer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./timer.js */ \"./src/js/func/timer.js\");\n/* harmony import */ var _count_down_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./count-down.js */ \"./src/js/func/count-down.js\");\n/* harmony import */ var _tictactoe_elements_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tictactoe_elements.js */ \"./src/js/func/tictactoe_elements.js\");\n\r\n\r\n\r\nfunction ResultGame(result_game){\r\n    const audio_gameOver = document.querySelector(\"#audio-gameover\");\r\n    const popup  = document.querySelector(\".popup\");\r\n    popup.className = \"popup result-game-wrapper\";\r\n    popup.innerHTML = `<div class=\"result-game\">\r\n        <span class=\"result-game--title ${result_game==\"Win\" ? \"Win\" : result_game==\"Game Over !!!\" ? \"GameOver\" :\"Draw\"}\">${result_game}</span>\r\n        <div class=\"result-game--btns\">\r\n            <button class=\"restart-btn\">\r\n                <img src=\"./src/assets/images/restart.svg\"/>\r\n                <span>Restart</span> \r\n            </button>\r\n            <button class=\"quit-btn\">\r\n                <img src=\"./src/assets/images/off.svg\"/>\r\n                <span>Quit</span>\r\n            </button>\r\n        </div>\r\n    </div>\r\n    `;\r\n    (0,_timer_js__WEBPACK_IMPORTED_MODULE_0__.RestartTimer)();\r\n    audio_gameOver.play();\r\n    document.querySelector(\".quit-btn\").addEventListener(\"click\",()=>{\r\n        close();\r\n    })\r\n    document.querySelector(\".restart-btn\").addEventListener(\"click\",()=>{\r\n        document.querySelector(\".tictactoe\").remove();\r\n        (0,_count_down_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n        (0,_tictactoe_elements_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(1);\r\n    })\r\n\r\n}\n\n//# sourceURL=webpack:///./src/js/func/result-game.js?");

/***/ }),

/***/ "./src/js/func/tictactoe_elements.js":
/*!*******************************************!*\
  !*** ./src/js/func/tictactoe_elements.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ShowTicTacToe)\n/* harmony export */ });\n/* harmony import */ var _tictactoe_operation_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tictactoe_operation.js */ \"./src/js/func/tictactoe_operation.js\");\n/* harmony import */ var _timer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./timer.js */ \"./src/js/func/timer.js\");\n\r\n\r\n\r\nfunction ShowTicTacToe(restart_game){\r\n    setTimeout(()=>{\r\n        document.body.insertAdjacentHTML(\"afterbegin\",`\r\n        <div class=\"tictactoe\">\r\n            <div class=\"tictactoe--timer\">\r\n                <span class=\"hour\">00</span> : \r\n                <span class=\"minute\">00</span> : \r\n                <span class=\"second\">00</span>\r\n            </div>\r\n            <div class=\"tictactoe--game\">\r\n                <span data-number=\"1\" class=\"tictactoe--cell\"></span>\r\n                <span data-number=\"2\" class=\"tictactoe--cell\"></span>\r\n                <span data-number=\"3\" class=\"tictactoe--cell\"></span>\r\n                <span data-number=\"4\" class=\"tictactoe--cell\"></span>\r\n                <span data-number=\"5\" class=\"tictactoe--cell\"></span>\r\n                <span data-number=\"6\" class=\"tictactoe--cell\"></span>\r\n                <span data-number=\"7\" class=\"tictactoe--cell\"></span>\r\n                <span data-number=\"8\" class=\"tictactoe--cell\"></span>\r\n                <span data-number=\"9\" class=\"tictactoe--cell\"></span>\r\n            </div>\r\n        </div>\r\n        `);\r\n        (0,_timer_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n        (0,_tictactoe_operation_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(restart_game,document.querySelectorAll(\".tictactoe--cell\"));\r\n    },4200)\r\n} \n\n//# sourceURL=webpack:///./src/js/func/tictactoe_elements.js?");

/***/ }),

/***/ "./src/js/func/tictactoe_operation.js":
/*!********************************************!*\
  !*** ./src/js/func/tictactoe_operation.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ TicTacToeOperation)\n/* harmony export */ });\n/* harmony import */ var _result_game_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./result-game.js */ \"./src/js/func/result-game.js\");\n\r\n// definition variables\r\nlet not_selected_homes = [1, 2, 3, 4, 5, 6, 7, 8, 9], selected_homes_by_user = [], selected_homes_by_system = [];\r\nlet winner_homes_list = [[1, 2, 3], [3, 6, 9], [1, 4, 7], [7, 8, 9], [1, 5, 9], [2, 5, 8], [3, 5, 7], [4, 5, 6]]; \r\n\r\nfunction remove_selected_home(home_id){\r\n    const index = not_selected_homes.indexOf(home_id);\r\n    not_selected_homes.splice(index, 1);\r\n}\r\nfunction check_win(player_chosen_homes, player){\r\n    for (let i = 0; i < winner_homes_list.length; i++) {\r\n        if (player_chosen_homes.includes(winner_homes_list[i][0]) && player_chosen_homes.includes(winner_homes_list[i][1]) && player_chosen_homes.includes(winner_homes_list[i][2])) {\r\n            if (player == \"user\") {\r\n                document.querySelectorAll(\".tictactoe--cell\")[winner_homes_list[i][0]-1].classList.add(\"win-cells\");\r\n                document.querySelectorAll(\".tictactoe--cell\")[winner_homes_list[i][1]-1].classList.add(\"win-cells\");\r\n                document.querySelectorAll(\".tictactoe--cell\")[winner_homes_list[i][2]-1].classList.add(\"win-cells\");\r\n                (0,_result_game_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"Win\");\r\n            }\r\n            else {\r\n                (0,_result_game_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"Game Over !!!\");\r\n            }\r\n            return 1;\r\n        }\r\n    }\r\n    if(not_selected_homes.length==0){\r\n       (0,_result_game_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"Draw !!!\");\r\n    }\r\n}\r\nfunction select_homes_for_winning_system(required_homes_for_winning_system,home_one,home_two){\r\n    if(!required_homes_for_winning_system.includes(home_one)){\r\n        required_homes_for_winning_system.push(home_one)\r\n    }\r\n    if(!required_homes_for_winning_system.includes(home_two)){\r\n        required_homes_for_winning_system.push(home_two)\r\n    }\r\n}\r\nfunction selecting_home_by_system() {\r\n    const required_homes_for_winning_user = [];\r\n    const required_homes_for_winning_system = [];\r\n    let choosen_home;\r\n    for (let i = 0; i < winner_homes_list.length; i++){\r\n        //Choosing homes to win the system\r\n        if (selected_homes_by_system.includes(winner_homes_list[i][0]) && selected_homes_by_system.includes(winner_homes_list[i][1]) && not_selected_homes.includes(winner_homes_list[i][2])){\r\n            choosen_home = winner_homes_list[i][2];\r\n            break;\r\n        } else if (selected_homes_by_system.includes(winner_homes_list[i][0]) && selected_homes_by_system.includes(winner_homes_list[i][2]) && not_selected_homes.includes(winner_homes_list[i][1])){\r\n            choosen_home = winner_homes_list[i][1];\r\n            break;\r\n        } else if (selected_homes_by_system.includes(winner_homes_list[i][2]) && selected_homes_by_system.includes(winner_homes_list[i][1]) && not_selected_homes.includes(winner_homes_list[i][0])){\r\n            choosen_home = winner_homes_list[i][0];\r\n            break;\r\n        }\r\n        //Choosing homes to win the user\r\n        if (selected_homes_by_user.includes(winner_homes_list[i][0]) && selected_homes_by_user.includes(winner_homes_list[i][1]) && not_selected_homes.includes(winner_homes_list[i][2])) {\r\n            required_homes_for_winning_user.push(winner_homes_list[i][2]);\r\n\r\n        }else if (selected_homes_by_user.includes(winner_homes_list[i][0]) && selected_homes_by_user.includes(winner_homes_list[i][2]) && not_selected_homes.includes(winner_homes_list[i][1])) {\r\n            required_homes_for_winning_user.push(winner_homes_list[i][1]);\r\n\r\n        }else if (selected_homes_by_user.includes(winner_homes_list[i][2]) && selected_homes_by_user.includes(winner_homes_list[i][1]) && not_selected_homes.includes(winner_homes_list[i][0])) {\r\n            required_homes_for_winning_user.push(winner_homes_list[i][0]);\r\n        }\r\n        //Selecting homes to get close to winning the system\r\n        if(selected_homes_by_system.includes(winner_homes_list[i][0])\r\n        && (not_selected_homes.includes(winner_homes_list[i][2]) || selected_homes_by_system.includes(winner_homes_list[i][2]))\r\n        && (not_selected_homes.includes(winner_homes_list[i][1]) || selected_homes_by_system.includes(winner_homes_list[i][1]))){\r\n            select_homes_for_winning_system(required_homes_for_winning_system,winner_homes_list[i][2],winner_homes_list[i][1]);\r\n        }\r\n        else if(selected_homes_by_system.includes(winner_homes_list[i][1])\r\n        && (not_selected_homes.includes(winner_homes_list[i][2]) || selected_homes_by_system.includes(winner_homes_list[i][2]))\r\n        && (not_selected_homes.includes(winner_homes_list[i][0]) || selected_homes_by_system.includes(winner_homes_list[i][0]))){\r\n            select_homes_for_winning_system(required_homes_for_winning_system,winner_homes_list[i][2],winner_homes_list[i][0]);\r\n        }\r\n        else if(selected_homes_by_system.includes(winner_homes_list[i][2])\r\n        && (not_selected_homes.includes(winner_homes_list[i][1]) || selected_homes_by_system.includes(winner_homes_list[i][1]))\r\n        && (not_selected_homes.includes(winner_homes_list[i][0]) || selected_homes_by_system.includes(winner_homes_list[i][0]))){\r\n            select_homes_for_winning_system(required_homes_for_winning_system,winner_homes_list[i][1],winner_homes_list[i][0]);\r\n        }\r\n    }\r\n    //Home selection by the system\r\n    if(!choosen_home){\r\n        if (not_selected_homes.includes(5)){\r\n            choosen_home = 5;\r\n        }\r\n        else if (required_homes_for_winning_system.length == 0 && required_homes_for_winning_user.length == 0){\r\n            const random = parseInt(Math.random() * 10);\r\n            const index = random >= not_selected_homes.length ? not_selected_homes.length-1 : random;\r\n            choosen_home = not_selected_homes[index];\r\n        }\r\n        else if(required_homes_for_winning_user.length!=0 && required_homes_for_winning_system.length!=0){\r\n            for(let i=0 ; i<required_homes_for_winning_system.length ; i++){\r\n                if(required_homes_for_winning_user.includes(required_homes_for_winning_system[i])){\r\n                    choosen_home = required_homes_for_winning_system[i];\r\n                    break;\r\n                }\r\n            }\r\n            if(!choosen_home){\r\n                choosen_home = required_homes_for_winning_user[0];\r\n            }\r\n        }\r\n        else if(required_homes_for_winning_user.length!=0){\r\n            choosen_home = required_homes_for_winning_user[0];\r\n        }\r\n        else if(required_homes_for_winning_system.length!=0){\r\n            choosen_home = required_homes_for_winning_system[0];\r\n        }\r\n    }\r\n    selected_homes_by_system.push(choosen_home);\r\n    document.querySelectorAll('.tictactoe--cell')[choosen_home-1].classList.add(\"system-selected\");\r\n    remove_selected_home(choosen_home);\r\n    check_win(selected_homes_by_system, \"system\");\r\n}\r\nfunction TicTacToeOperation(restart_game,tictactoe__cells){\r\n    const click_audio = document.querySelector(\"#audio-clicked\");\r\n    if(restart_game){\r\n        not_selected_homes = [1, 2, 3, 4, 5, 6, 7, 8, 9];\r\n        selected_homes_by_user = [];\r\n        selected_homes_by_system = [];\r\n    }\r\n    tictactoe__cells.forEach(cell => {\r\n        cell.addEventListener(\"click\", () => {\r\n            if(not_selected_homes.includes(parseInt(cell.getAttribute(\"data-number\")))){\r\n                selected_homes_by_user.push(parseInt(cell.getAttribute(\"data-number\")));\r\n                cell.classList.add(\"user-selected\");\r\n                click_audio.play();\r\n                remove_selected_home(parseInt(cell.getAttribute(\"data-number\")));\r\n                let result_game = check_win(selected_homes_by_user, \"user\");\r\n                if(not_selected_homes.length!=0 && !result_game){\r\n                    selecting_home_by_system();\r\n                }\r\n            }\r\n        })\r\n    });\r\n}\n\n//# sourceURL=webpack:///./src/js/func/tictactoe_operation.js?");

/***/ }),

/***/ "./src/js/func/timer.js":
/*!******************************!*\
  !*** ./src/js/func/timer.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   RestartTimer: () => (/* binding */ RestartTimer),\n/* harmony export */   \"default\": () => (/* binding */ Timer)\n/* harmony export */ });\n//definition variables\r\nlet hour = 0;\r\nlet minute = 0;\r\nlet second = 0;\r\nlet timer = null;\r\nfunction RestartTimer(){\r\n    clearInterval(timer);\r\n}\r\n//starting the timer and display it on the web page\r\nfunction Timer(){\r\n    const hour_element =  document.querySelector(\".hour\");\r\n    const minute_element = document.querySelector(\".minute\");\r\n    const second_element = document.querySelector(\".second\");\r\n    if(timer){\r\n        RestartTimer();\r\n    }\r\n    timer = setInterval(()=>{\r\n        second++;\r\n        if(second==60){\r\n            minute++;\r\n            second=0;\r\n            if(minute==60){\r\n                hour++;\r\n                minute=0;\r\n            }\r\n        }\r\n        hour_element.innerHTML = `${hour<10 ? `0${hour}` : hour}`;\r\n        minute_element.innerHTML = `${minute<10 ? `0${minute}` : minute}`;\r\n        second_element.innerHTML = `${second<10 ? `0${second}` : second}`\r\n    },1000);\r\n}\r\n\n\n//# sourceURL=webpack:///./src/js/func/timer.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _func_count_down_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./func/count-down.js */ \"./src/js/func/count-down.js\");\n/* harmony import */ var _func_tictactoe_elements_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./func/tictactoe_elements.js */ \"./src/js/func/tictactoe_elements.js\");\n\r\n\r\n\r\n\r\n\r\nwindow.addEventListener(\"load\",()=>{\r\n    (0,_func_count_down_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n    (0,_func_tictactoe_elements_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n})\r\n\n\n//# sourceURL=webpack:///./src/js/index.js?");

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
/******/ 			// no module.id needed
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/index.js");
/******/ 	
/******/ })()
;