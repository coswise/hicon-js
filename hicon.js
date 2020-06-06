(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["hicon"] = factory();
	else
		root["hicon"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./dist/icons.json":
/*!*************************!*\
  !*** ./dist/icons.json ***!
  \*************************/
/*! exports provided: I-want-to-drink, XD, airplay, alert-circle, alert-square, alert-triangle, align-center, align-justify, align-left, align-right, anchor, archive, arrow-down-1, arrow-down-cricle, arrow-down-left-circle, arrow-down-left-square, arrow-down-left, arrow-down-right-circle, arrow-down-right-square, arrow-down-right, arrow-down-square, arrow-down, arrow-left-cricle, arrow-left-square, arrow-right-cricle, arrow-right-square, arrow-right, arrow-up-circle, arrow-up-left-cricle, arrow-up-left-square, arrow-up-left, arrow-up-right-circle, arrow-up-right-square, arrow-up-right, arrow-up-square, arrow-up, at, award, bag-2, bag-3, bag, bar-chart-1, bar-chart-2, bar-chart-down, bar-chart-up, battery-charging, battery-ending, battery-half, battery-off, battery, bell-off, bell, bitcoin-sign, bluetooth, bold, book-open, book, bookmark, bottombar, box, briefcase, calendar-10, calendar-17, calendar-2, calendar-meeting, calendar-monday, calendar, camera-off, camera, cast, check-circle-1, check-circle-2, check-square-1, check-square-2, check, chevron-left, chevron-right, chevron-up, chevrone-bottom, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock-1, clock-2, clock-3, clock-4, clock-5, clock-6, clock-7, clock-8, cloud-off, cloud-rain-heavy, cloud-rain-light, cloud-storm, cloud, cloudy-moon, cloudy, code-1, code, codepen, coffee-expresso, coffee, colour-picker, columns, command, compass, copy, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, cpu, credit-card, crop, crosshair, cup, database, delete, desktop, disco, dollar-sign, download-cloud, download, dribbble, drive, drop, edit-2, edit-3, edit, egual, email, euro-sign, external-link, eye-off, eye, face-mask, face-sad, face-smile, face, facebook, fast-forward-x3, fast-forward, female, figma, file-add, file-damaged, file-doc, file-presentation, file-remove, file-spreadsheet, file-text, file, filter, flag, fn, folder-add, folder-locked, folder-remove, folder-verified, folder, fork, frame, framer, gift-open, gift, github, globe, grid, hard-drive, hashtag, headphone, heart, help-circle, hicon, high-performance, home, inbox, info, instagram, intersex, italic, key, knife, label-empty, label-full, latte, layers, layout, lens, link-2, link, linkedin, list, loader-1, locked, login, logout, low-performance, male, map-pin, map, maximise-1, maximise, medium-performance, menu, message-empty-bubble, message-empty-circle, message-empty-square, message-full-bubble, message-full-square-1, message-full-square, mic-off, mic, microphone, minimise-1, minimise, minus-circle, minus-square, minus, moon, more-horizontal, more-vertical, mouse-pointer, move-horizontally, move-vertically, move, movie, music, navigator-2, navigator-3, navigator, option, package, paperclip, partially-sunny, pause, pen-tool, percent, phone-forwarded, phone-incoming, phone-missed, phone-off, phone-ring, phone, picture, pie-chart, play, plus-circle, plus-square, plus, pot, pound-sign, power, printer, radio, refresh-cw-1, refresh-cw, repeat-1, repeat, rewind-x3, rewind, rotate-acw, rotate-cw, rss, save-1, save, scissors, send, server, settings, share, shield-off, shield-safe, shield, shopping-cart, shuffle-2, shuffle, sidebar-left, sidebar-right, sketch, skip-back, slack, slash, slice, sliders-1, sliders-2, smartphone, snow, soap, speaker, spoon, spotify, square-2, square, star, status-offline, status-ok, status-transfering, sun-half, sun, sunrise, sunset, tablet, tag-empty, tag-full, tape, target, television-2, television, thermometer, thumbs-down, thumbs-up, toggle-left-2, toggle-left, toggle-right-2, toggle-right, tool, topbar, transgender-2, transgender, trash-1-open, trash-1, trash-2-open, trash-2, trash-3, trending-down, trending-up, triangle, truck, twitter, type, umbrella, underline, unlocked-2, unlocked, upload-cloud, upload, user-add, user-remove-1, user-remove, user-x, user, users, video-off, video, virus, voicemail, volume-high, volume-low, volume-off, volume, whatsapp, wifi-off, wifi-on, wind, x-circle, x-square, x, youtube-pause, youtube-stop, youtube, yuan-sign, zap-off, zap-on, zoom-in, zoom-out, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"I-want-to-drink\":\"<path d=\\\"M7.9282 15.4641L3.56561 8.85666C3.2341 8.35458 3.29107 7.69049 3.70324 7.25219V7.25219C4.1159 6.81338 4.77622 6.71611 5.29789 7.01729L8.8905 9.09149L10.6788 5.99401C11.3072 4.90564 12.7718 4.65968 13.7213 5.48308L19.2329 10.2631C19.5949 10.5771 19.6833 11.1036 19.4438 11.5186L14.8564 19.4641L7.9282 15.4641Z\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M6.79423 19.4282C6.31594 19.1521 6.15207 18.5405 6.42821 18.0622L7.92821 15.4641L14.8564 19.4641L13.3564 22.0622C13.0803 22.5405 12.4687 22.7044 11.9904 22.4282L6.79423 19.4282Z\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path>\",\"XD\":\"<path d=\\\"M20 6L20 19\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M4 6L12 19\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M12 6L4 19\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M20 19C15 19 14 16.3 14 14.5C14 12.7 15 10 20 10\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path>\",\"airplay\":\"<path d=\\\"M5 17C3.89543 17 3 16.2325 3 15.2857V6.71429C3 5.76751 3.89543 5 5 5H19C20.1046 5 21 5.76751 21 6.71429V15.2857C21 16.2325 20.1046 17 19 17\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M12 15L17.1962 21H6.80385L12 15Z\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path>\",\"alert-circle\":\"<circle cx=\\\"12\\\" cy=\\\"12\\\" r=\\\"10\\\" transform=\\\"rotate(-180 12 12)\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></circle><line x1=\\\"12\\\" y1=\\\"7\\\" x2=\\\"12\\\" y2=\\\"13\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></line><path d=\\\"M12 17L12 17.01\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path>\",\"alert-square\":\"<line x1=\\\"12\\\" y1=\\\"7\\\" x2=\\\"12\\\" y2=\\\"13\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></line><path d=\\\"M12 17L12 17.01\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><rect x=\\\"3\\\" y=\\\"3\\\" width=\\\"18\\\" height=\\\"18\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></rect>\",\"alert-triangle\":\"<line x1=\\\"12\\\" y1=\\\"8\\\" x2=\\\"12\\\" y2=\\\"14\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></line><path d=\\\"M12 18L12 18.01\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M22.3867 19.0423L13.7558 3.21895C12.9978 1.82922 11.0022 1.82922 10.2442 3.21895L1.61329 19.0423C0.886339 20.375 1.85097 22 3.36908 22H20.6309C22.149 22 23.1137 20.375 22.3867 19.0423Z\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path>\",\"align-center\":\"<line x1=\\\"21\\\" y1=\\\"6\\\" x2=\\\"3\\\" y2=\\\"6\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></line><line x1=\\\"19\\\" y1=\\\"10\\\" x2=\\\"5\\\" y2=\\\"10\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></line><line x1=\\\"21\\\" y1=\\\"14\\\" x2=\\\"3\\\" y2=\\\"14\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></line><line x1=\\\"19\\\" y1=\\\"18\\\" x2=\\\"5\\\" y2=\\\"18\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></line>\",\"align-justify\":\"<line x1=\\\"21\\\" y1=\\\"6\\\" x2=\\\"3\\\" y2=\\\"6\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></line><line x1=\\\"21\\\" y1=\\\"10\\\" x2=\\\"3\\\" y2=\\\"10\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></line><line x1=\\\"21\\\" y1=\\\"14\\\" x2=\\\"3\\\" y2=\\\"14\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></line><line x1=\\\"21\\\" y1=\\\"18\\\" x2=\\\"3\\\" y2=\\\"18\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></line>\",\"align-left\":\"<line x1=\\\"21\\\" y1=\\\"6\\\" x2=\\\"3\\\" y2=\\\"6\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></line><line x1=\\\"17\\\" y1=\\\"10\\\" x2=\\\"3\\\" y2=\\\"10\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></line><line x1=\\\"21\\\" y1=\\\"14\\\" x2=\\\"3\\\" y2=\\\"14\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></line><line x1=\\\"17\\\" y1=\\\"18\\\" x2=\\\"3\\\" y2=\\\"18\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></line>\",\"align-right\":\"<line x1=\\\"21\\\" y1=\\\"6\\\" x2=\\\"3\\\" y2=\\\"6\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></line><line x1=\\\"21\\\" y1=\\\"10\\\" x2=\\\"7\\\" y2=\\\"10\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></line><line x1=\\\"21\\\" y1=\\\"14\\\" x2=\\\"3\\\" y2=\\\"14\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></line><line x1=\\\"21\\\" y1=\\\"18\\\" x2=\\\"7\\\" y2=\\\"18\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></line>\",\"anchor\":\"<circle cx=\\\"12\\\" cy=\\\"5\\\" r=\\\"2\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></circle><path d=\\\"M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><line x1=\\\"12\\\" y1=\\\"8\\\" x2=\\\"12\\\" y2=\\\"21\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></line><line x1=\\\"6\\\" y1=\\\"12\\\" x2=\\\"3\\\" y2=\\\"12\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></line><line x1=\\\"21\\\" y1=\\\"12\\\" x2=\\\"18\\\" y2=\\\"12\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></line>\",\"archive\":\"<rect x=\\\"4\\\" y=\\\"10\\\" width=\\\"16\\\" height=\\\"11\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></rect><path d=\\\"M2 6C2 5.44772 2.44772 5 3 5H21C21.5523 5 22 5.44772 22 6V10H2V6Z\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><line x1=\\\"11\\\" y1=\\\"13\\\" x2=\\\"13\\\" y2=\\\"13\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></line>\",\"arrow-down-1\":\"<path d=\\\"M6.5 12.5L17.5 12.5\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M6.5 12.5L9 15.5\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M6.5 12.5L9 9.5\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path>\",\"arrow-down-cricle\":\"<path d=\\\"M12 16L12 8\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M12 16L15 13.5\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M12 16L9 13.5\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><rect x=\\\"3\\\" y=\\\"3\\\" width=\\\"18\\\" height=\\\"18\\\" rx=\\\"9\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></rect>\",\"arrow-down-left-circle\":\"<path d=\\\"M9.17157 14.8284L14.8284 9.17152\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M9.17157 14.8284L8.81802 10.9393\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M9.17157 14.8284L13.0607 15.1819\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><rect x=\\\"3\\\" y=\\\"3\\\" width=\\\"18\\\" height=\\\"18\\\" rx=\\\"9\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></rect>\",\"arrow-down-left-square\":\"<path d=\\\"M9.17157 14.8284L14.8284 9.17152\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M9.17157 14.8284L8.81802 10.9393\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M9.17157 14.8284L13.0607 15.1819\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><rect x=\\\"3\\\" y=\\\"3\\\" width=\\\"18\\\" height=\\\"18\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></rect>\",\"arrow-down-left\":\"<path d=\\\"M8.10049 15.6569L15.8787 7.87869\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M8.10049 15.6569L7.74694 11.7678\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M8.10049 15.6569L11.9896 16.0104\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path>\",\"arrow-down-right-circle\":\"<path d=\\\"M14.8284 14.8284L9.17158 9.17152\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M14.8284 14.8284L15.182 10.9393\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M14.8284 14.8284L10.9393 15.1819\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><rect x=\\\"3\\\" y=\\\"3\\\" width=\\\"18\\\" height=\\\"18\\\" rx=\\\"9\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></rect>\",\"arrow-down-right-square\":\"<path d=\\\"M14.8284 14.8284L9.17158 9.17152\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M14.8284 14.8284L15.182 10.9393\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M14.8284 14.8284L10.9393 15.1819\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><rect x=\\\"3\\\" y=\\\"3\\\" width=\\\"18\\\" height=\\\"18\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></rect>\",\"arrow-down-right\":\"<path d=\\\"M15.8995 15.6569L8.12133 7.87869\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M15.8995 15.6569L16.2531 11.7678\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M15.8995 15.6569L12.0104 16.0104\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path>\",\"arrow-down-square\":\"<path d=\\\"M12 16L12 8\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M12 16L15 13.5\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M12 16L9 13.5\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><rect x=\\\"3\\\" y=\\\"3\\\" width=\\\"18\\\" height=\\\"18\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></rect>\",\"arrow-down\":\"<path d=\\\"M12 18L12 7\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M12 18L15 15.5\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M12 18L9 15.5\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path>\",\"arrow-left-cricle\":\"<path d=\\\"M8 12L16 12\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M8 12L10.5 15\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M8 12L10.5 9\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><rect x=\\\"3\\\" y=\\\"3\\\" width=\\\"18\\\" height=\\\"18\\\" rx=\\\"9\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></rect>\",\"arrow-left-square\":\"<path d=\\\"M8 12L16 12\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M8 12L10.5 15\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M8 12L10.5 9\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><rect x=\\\"3\\\" y=\\\"3\\\" width=\\\"18\\\" height=\\\"18\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></rect>\",\"arrow-right-cricle\":\"<path d=\\\"M16 12L8 12\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M16 12L13.5 15\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M16 12L13.5 9\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><rect x=\\\"3\\\" y=\\\"3\\\" width=\\\"18\\\" height=\\\"18\\\" rx=\\\"9\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></rect>\",\"arrow-right-square\":\"<path d=\\\"M16 12L8 12\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M16 12L13.5 15\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M16 12L13.5 9\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><rect x=\\\"3\\\" y=\\\"3\\\" width=\\\"18\\\" height=\\\"18\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></rect>\",\"arrow-right\":\"<path d=\\\"M18 12L7 12\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M18 12L15.5 15\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M18 12L15.5 9\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path>\",\"arrow-up-circle\":\"<path d=\\\"M12 8L12 16\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M12 8L15 10.5\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M12 8L9 10.5\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><rect x=\\\"3\\\" y=\\\"3\\\" width=\\\"18\\\" height=\\\"18\\\" rx=\\\"9\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></rect>\",\"arrow-up-left-cricle\":\"<path d=\\\"M9.17157 9.17163L14.8284 14.8285\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M9.17157 9.17163L8.81802 13.0607\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M9.17157 9.17163L13.0607 8.81808\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><rect x=\\\"3\\\" y=\\\"3\\\" width=\\\"18\\\" height=\\\"18\\\" rx=\\\"9\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></rect>\",\"arrow-up-left-square\":\"<path d=\\\"M9.17157 9.17163L14.8284 14.8285\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M9.17157 9.17163L8.81802 13.0607\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M9.17157 9.17163L13.0607 8.81808\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><rect x=\\\"3\\\" y=\\\"3\\\" width=\\\"18\\\" height=\\\"18\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></rect>\",\"arrow-up-left\":\"<path d=\\\"M8.61092 8.11096L16.3891 15.8891\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M8.61092 8.11096L12.5 7.75741\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M8.61092 8.11096L8.25736 12\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path>\",\"arrow-up-right-circle\":\"<path d=\\\"M14.8284 9.17163L9.17158 14.8285\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M14.8284 9.17163L15.182 13.0607\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M14.8284 9.17163L10.9393 8.81808\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><rect x=\\\"3\\\" y=\\\"3\\\" width=\\\"18\\\" height=\\\"18\\\" rx=\\\"9\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></rect>\",\"arrow-up-right-square\":\"<path d=\\\"M14.8284 9.17163L9.17158 14.8285\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M14.8284 9.17163L15.182 13.0607\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M14.8284 9.17163L10.9393 8.81808\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><rect x=\\\"3\\\" y=\\\"3\\\" width=\\\"18\\\" height=\\\"18\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></rect>\",\"arrow-up-right\":\"<path d=\\\"M16.3891 8.11096L8.61091 15.8891\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M16.3891 8.11096L16.7426 12\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M16.3891 8.11096L12.5 7.75741\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path>\",\"arrow-up-square\":\"<path d=\\\"M12 8L12 16\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M12 8L15 10.5\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M12 8L9 10.5\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><rect x=\\\"3\\\" y=\\\"3\\\" width=\\\"18\\\" height=\\\"18\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></rect>\",\"arrow-up\":\"<path d=\\\"M12 7L12 18\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M12 7L15 9.5\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M12 7L9 9.5\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path>\",\"at\":\"<circle cx=\\\"12\\\" cy=\\\"12\\\" r=\\\"4\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></circle><path d=\\\"M16 15.6842C16 19.3684 20.4211 18.8421 21.2995 15.6842C21.7515 14.5441 22 13.3011 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C13.1035 22 14.1653 21.8213 15.1579 21.4912\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><line x1=\\\"16\\\" y1=\\\"7\\\" x2=\\\"16\\\" y2=\\\"16\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></line>\",\"award\":\"<circle cx=\\\"12\\\" cy=\\\"8\\\" r=\\\"6\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></circle><path d=\\\"M8.5 13L7 22L12 19L17 22L15.5 13\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path>\",\"bag-2\":\"<path d=\\\"M5 5H19V17C19 18.1046 18.1046 19 17 19H7C5.89543 19 5 18.1046 5 17V5Z\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M15 8L14.2 10L9.8 10L9 8\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path>\",\"bag-3\":\"<path d=\\\"M5 7H19V19C19 20.1046 18.1046 21 17 21H7C5.89543 21 5 20.1046 5 19V7Z\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M17.5 4H6.5L5 7H19L17.5 4Z\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M15 11L14.2 13L9.8 13L9 11\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path>\",\"bag\":\"<path d=\\\"M5 7H19V19C19 20.1046 18.1046 21 17 21H7C5.89543 21 5 20.1046 5 19V7Z\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M14.9333 3H9.06667L8 6H16L14.9333 3Z\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path>\",\"bar-chart-1\":\"<path d=\\\"M12 4L12 20\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M17 9L17 20\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M7 9L7 20\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path>\",\"bar-chart-2\":\"<path d=\\\"M12 9L12 20\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M17 4L17 20\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M7 4L7 20\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path>\",\"bar-chart-down\":\"<line x1=\\\"1\\\" y1=\\\"-1\\\" x2=\\\"12\\\" y2=\\\"-1\\\" transform=\\\"matrix(-4.37114e-08 1 1 4.37114e-08 14 8)\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></line><line x1=\\\"1\\\" y1=\\\"-1\\\" x2=\\\"6\\\" y2=\\\"-1\\\" transform=\\\"matrix(-4.37114e-08 1 1 4.37114e-08 19 14)\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></line><line x1=\\\"1\\\" y1=\\\"-1\\\" x2=\\\"17\\\" y2=\\\"-1\\\" transform=\\\"matrix(-4.37114e-08 1 1 4.37114e-08 9 3)\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></line>\",\"bar-chart-up\":\"<line x1=\\\"12\\\" y1=\\\"9\\\" x2=\\\"12\\\" y2=\\\"20\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></line><line x1=\\\"7\\\" y1=\\\"15\\\" x2=\\\"7\\\" y2=\\\"20\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></line><line x1=\\\"17\\\" y1=\\\"4\\\" x2=\\\"17\\\" y2=\\\"20\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></line>\",\"battery-charging\":\"<rect x=\\\"6\\\" y=\\\"9\\\" width=\\\"14\\\" height=\\\"8\\\" rx=\\\"1\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></rect><path d=\\\"M4 12.5C4 12.2239 4.22386 12 4.5 12V12C4.77614 12 5 12.2239 5 12.5V13.5C5 13.7761 4.77614 14 4.5 14V14C4.22386 14 4 13.7761 4 13.5V12.5Z\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M9 14.5L10.6863 12.1392C11.0851 11.5809 11.9149 11.5809 12.3137 12.1392L14 14.5\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M14 14.5L16.5 11.5\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path>\",\"battery-ending\":\"<rect x=\\\"6\\\" y=\\\"9\\\" width=\\\"14\\\" height=\\\"8\\\" rx=\\\"1\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></rect><path d=\\\"M4 12.5C4 12.2239 4.22386 12 4.5 12V12C4.77614 12 5 12.2239 5 12.5V13.5C5 13.7761 4.77614 14 4.5 14V14C4.22386 14 4 13.7761 4 13.5V12.5Z\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><line x1=\\\"16\\\" y1=\\\"10\\\" x2=\\\"16\\\" y2=\\\"16\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></line>\",\"battery-half\":\"<path d=\\\"M13 10V16M7 17H19C19.5523 17 20 16.5523 20 16V10C20 9.44772 19.5523 9 19 9H7C6.44772 9 6 9.44772 6 10V16C6 16.5523 6.44772 17 7 17ZM4.5 14C4.22386 14 4 13.7761 4 13.5V12.5C4 12.2239 4.22386 12 4.5 12C4.77614 12 5 12.2239 5 12.5V13.5C5 13.7761 4.77614 14 4.5 14Z\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path>\",\"battery-off\":\"<path d=\\\"M20 16V10C20 9.44772 19.5523 9 19 9L13 9M6 10V16C6 16.5523 6.44772 17 7 17H13\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M4 12.5C4 12.2239 4.22386 12 4.5 12V12C4.77614 12 5 12.2239 5 12.5V13.5C5 13.7761 4.77614 14 4.5 14V14C4.22386 14 4 13.7761 4 13.5V12.5Z\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><line x1=\\\"3.4137\\\" y1=\\\"3.03821\\\" x2=\\\"20.0382\\\" y2=\\\"20.5863\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\"></line>\",\"battery\":\"<path d=\\\"M6 10C6 9.44772 6.44772 9 7 9H19C19.5523 9 20 9.44772 20 10V16C20 16.5523 19.5523 17 19 17H7C6.44772 17 6 16.5523 6 16V10Z\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M4 12.5C4 12.2239 4.22386 12 4.5 12C4.77614 12 5 12.2239 5 12.5V13.5C5 13.7761 4.77614 14 4.5 14C4.22386 14 4 13.7761 4 13.5V12.5Z\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path>\",\"bell-off\":\"<path d=\\\"M6.5 10.5C6.5 14.7188 3 18 3 18H12H13M8.99655 4C9.88008 3.37284 10.9438 3 12.1007 3C15.24 3 17.656 5.74275 17.5341 8.87969C17.5127 9.42969 17.5 9.97677 17.5 10.5C17.5 11.9839 18.2158 13.6595 19 15.05\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M10 21C10.4886 21.6132 11.2035 22 12 22C12.7965 22 13.5114 21.6132 14 21\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><line x1=\\\"3.4137\\\" y1=\\\"3.03821\\\" x2=\\\"20.0382\\\" y2=\\\"20.5863\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\"></line>\",\"bell\":\"<path d=\\\"M6.48149 9.07777C6.39886 5.86945 8.89127 3 12.1007 3V3C15.24 3 17.656 5.74275 17.5341 8.87969C17.5127 9.42969 17.5 9.97677 17.5 10.5C17.5 13.7812 21 18 21 18H3C3 18 6.5 14.7188 6.5 10.5C6.5 10.0122 6.49331 9.5369 6.48149 9.07777Z\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M10 21C10.4886 21.6132 11.2035 22 12 22C12.7965 22 13.5114 21.6132 14 21\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path>\",\"bitcoin-sign\":\"<line x1=\\\"9\\\" y1=\\\"5.71429\\\" x2=\\\"9\\\" y2=\\\"18.1905\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></line><path d=\\\"M6 5.61902H12.3636C14.3719 5.61902 16 6.83425 16 8.3333C16 9.83236 14.3719 11.0476 12.3636 11.0476H9\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M13 11.0476C15.2091 11.0476 17 12.6679 17 14.6667C17 16.6654 15.2091 18.2857 13 18.2857H6\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><line x1=\\\"10\\\" y1=\\\"4.61902\\\" x2=\\\"10\\\" y2=\\\"2.99997\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></line><line x1=\\\"10\\\" y1=\\\"20\\\" x2=\\\"10\\\" y2=\\\"18.381\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></line><line x1=\\\"13\\\" y1=\\\"4.61902\\\" x2=\\\"13\\\" y2=\\\"2.99997\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></line><line x1=\\\"13\\\" y1=\\\"20\\\" x2=\\\"13\\\" y2=\\\"18.381\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></line>\",\"bluetooth\":\"<path d=\\\"M11.7059 12.4344L17 8.21722L11.7059 4L11.7059 12.5M11.7059 21L11.7059 12.5M11.7059 12.5L7.0175 15.8454L7 15.8578\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M11.7059 21L17 16.3667L11.7059 11.7334L7 8\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path>\",\"bold\":\"<path d=\\\"M14 5L7 5L7 20\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M14 20H7\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M14 12H7\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M13.5 12C15.433 12 17 10.433 17 8.5C17 6.567 15.433 5 13.5 5\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M14 20C16.2091 20 18 18.2091 18 16C18 13.7909 16.2091 12 14 12\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path>\",\"book-open\":\"<path d=\\\"M12 21V10C12 7.23858 9.76142 5 7 5H3V18.7143\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M3 19H7.5C10.5 19 11 20 12 21\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M12 21V10C12 7.23858 14.2386 5 17 5H21V18.7143\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M21 19H16.5C13.5 19 13 20 12 21\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path>\",\"book\":\"<path d=\\\"M18 16H6C4.89543 16 4 16.8954 4 18V18C4 19.1046 4.89543 20 6 20H18\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M18 16V3H7C5.34315 3 4 4.34315 4 6V18\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><line x1=\\\"17\\\" y1=\\\"16\\\" x2=\\\"17\\\" y2=\\\"20\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></line>\",\"bookmark\":\"<path d=\\\"M6 7.00006C6 5.3432 7.34315 4.00006 9 4.00006H15C16.6569 4.00006 18 5.3432 18 7.00006V21.0001L12 14.7667L6 21.0001V7.00006Z\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path>\",\"bottombar\":\"<rect x=\\\"3\\\" y=\\\"21\\\" width=\\\"18\\\" height=\\\"18\\\" rx=\\\"3\\\" transform=\\\"rotate(-90 3 21)\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></rect><line x1=\\\"4\\\" y1=\\\"15\\\" x2=\\\"20\\\" y2=\\\"15\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></line>\",\"box\":\"<path d=\\\"M12 11.2857L22 7V17.7143L12 22V11.2857Z\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M12 11.2857L2 7V17.7143L12 22V11.2857Z\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M12 3L2 7\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M12 3L22 7\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path>\",\"briefcase\":\"<path d=\\\"M2 11C2 9.89543 2.89543 9 4 9H20C21.1046 9 22 9.89543 22 11V18C22 19.1046 21.1046 20 20 20H4C2.89543 20 2 19.1046 2 18V11Z\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M14 6H10C8.89543 6 8 6.89543 8 8V20H16V8C16 6.89543 15.1046 6 14 6Z\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path>\",\"calendar-10\":\"<path d=\\\"M4 10H20V19C20 20.1046 19.1046 21 18 21H6C4.89543 21 4 20.1046 4 19V10Z\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M5.77778 5H4V10H20V5H18.2222M11.1111 5H12.8889\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><line x1=\\\"8\\\" y1=\\\"4\\\" x2=\\\"8\\\" y2=\\\"6\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></line><line x1=\\\"16\\\" y1=\\\"4\\\" x2=\\\"16\\\" y2=\\\"6\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></line><path d=\\\"M9.5 18V13L8 14.5\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><rect x=\\\"12.5\\\" y=\\\"13\\\" width=\\\"3\\\" height=\\\"5\\\" rx=\\\"1.5\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></rect>\",\"calendar-17\":\"<path d=\\\"M4 10H20V19C20 20.1046 19.1046 21 18 21H6C4.89543 21 4 20.1046 4 19V10Z\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M5.77778 5H4V10H20V5H18.2222M11.1111 5H12.8889\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><line x1=\\\"8\\\" y1=\\\"4\\\" x2=\\\"8\\\" y2=\\\"6\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></line><line x1=\\\"16\\\" y1=\\\"4\\\" x2=\\\"16\\\" y2=\\\"6\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></line><path d=\\\"M9.5 18V13L8 14.5\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M13.5 18L15.5 13H12.5\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path>\",\"calendar-2\":\"<path d=\\\"M4 10H20V19C20 20.1046 19.1046 21 18 21H6C4.89543 21 4 20.1046 4 19V10Z\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M5.77778 5H4V10H20V5H18.2222M11.1111 5H12.8889\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><line x1=\\\"8\\\" y1=\\\"4\\\" x2=\\\"8\\\" y2=\\\"6\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></line><line x1=\\\"16\\\" y1=\\\"4\\\" x2=\\\"16\\\" y2=\\\"6\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></line><path d=\\\"M7 13H7.01\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M7 16H7.01\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M10 13H10.01\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M10 16H10.01\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M13 13H13.01\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path>\",\"calendar-meeting\":\"<path d=\\\"M4 10H20V19C20 20.1046 19.1046 21 18 21H6C4.89543 21 4 20.1046 4 19V10Z\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M5.77778 5H4V10H20V5H18.2222M11.1111 5H12.8889\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><line x1=\\\"8\\\" y1=\\\"4\\\" x2=\\\"8\\\" y2=\\\"6\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></line><line x1=\\\"16\\\" y1=\\\"4\\\" x2=\\\"16\\\" y2=\\\"6\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></line><circle cx=\\\"9.654\\\" cy=\\\"14.5274\\\" r=\\\"0.827004\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></circle><path d=\\\"M8 18.1111V17.8354C8 16.9219 8.74052 16.1814 9.65401 16.1814V16.1814C10.5675 16.1814 11.308 16.9219 11.308 17.8354V18.1111\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><circle cx=\\\"14.346\\\" cy=\\\"14.5274\\\" r=\\\"0.827004\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></circle><path d=\\\"M12.692 18.1111V17.8354C12.692 16.9219 13.4325 16.1814 14.346 16.1814V16.1814C15.2595 16.1814 16 16.9219 16 17.8354V18.1111\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path>\",\"calendar-monday\":\"<rect x=\\\"14\\\" y=\\\"14\\\" width=\\\"3\\\" height=\\\"4\\\" rx=\\\"1.5\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></rect><path d=\\\"M4 10H20V19C20 20.1046 19.1046 21 18 21H6C4.89543 21 4 20.1046 4 19V10Z\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M5.77778 5H4V10H20V5H18.2222M11.1111 5H12.8889\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><line x1=\\\"8\\\" y1=\\\"4\\\" x2=\\\"8\\\" y2=\\\"6\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></line><line x1=\\\"16\\\" y1=\\\"4\\\" x2=\\\"16\\\" y2=\\\"6\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></line><line x1=\\\"7.00006\\\" y1=\\\"18.0001\\\" x2=\\\"7.00006\\\" y2=\\\"14.0001\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></line><path d=\\\"M11.0001 18.0001V14.0001L9.00006 15.5001L7.00006 14.0001\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path>\",\"calendar\":\"<path d=\\\"M4 10H20V19C20 20.1046 19.1046 21 18 21H6C4.89543 21 4 20.1046 4 19V10Z\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M5.77778 5H4V10H20V5H18.2222M11.1111 5H12.8889\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><line x1=\\\"8\\\" y1=\\\"4\\\" x2=\\\"8\\\" y2=\\\"6\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></line><line x1=\\\"16\\\" y1=\\\"4\\\" x2=\\\"16\\\" y2=\\\"6\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></line>\",\"camera-off\":\"<path d=\\\"M10 5H14L16 7.5H19C20.1046 7.5 21 8.39543 21 9.5V16.5M3 9.5V16.5C3 17.6046 3.89543 18.5 5 18.5H13.5\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M13 9.67088C13.4094 9.81529 13.7938 10.0512 14.1213 10.3787C14.4488 10.7062 14.6847 11.0906 14.8291 11.5M9.40105 14C9.52943 14.2222 9.68863 14.4313 9.87866 14.6214C10.0687 14.8114 10.2779 14.9706 10.5 15.099\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><line x1=\\\"3.4137\\\" y1=\\\"3.03821\\\" x2=\\\"20.0382\\\" y2=\\\"20.5863\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\"></line>\",\"camera\":\"<path d=\\\"M3 9.5C3 8.39543 3.89543 7.5 5 7.5H8L10 5H12H14L16 7.5H19C20.1046 7.5 21 8.39543 21 9.5V16.5C21 17.6046 20.1046 18.5 19 18.5H5C3.89543 18.5 3 17.6046 3 16.5V9.5Z\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><circle cx=\\\"12\\\" cy=\\\"12.5\\\" r=\\\"3\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></circle>\",\"cast\":\"<path d=\\\"M14 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5H5C3.89543 5 3 5.89543 3 7V8.5\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M7 18C7 16.3431 5.65685 15 4 15\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M10 18C10 14.6863 7.31371 12 4 12\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M4 18L4 18.01\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path>\",\"check-circle-1\":\"<path d=\\\"M15.5 10L11 14.5\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\"></path><path d=\\\"M9 12.5L11 14.5\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\"></path><rect x=\\\"3\\\" y=\\\"3\\\" width=\\\"18\\\" height=\\\"18\\\" rx=\\\"9\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></rect>\",\"check-circle-2\":\"<path d=\\\"M11.0057 6C7.68883 6 5 8.68629 5 12C5 15.3137 7.68883 18 11.0057 18C13.0879 18 14.9226 16.9413 16 15.3333\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\"></path><path d=\\\"M18 7.41429L11.9142 13.5001\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\"></path><path d=\\\"M9.5 11.5L11.9142 13.5\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\"></path>\",\"check-square-1\":\"<rect x=\\\"3\\\" y=\\\"3\\\" width=\\\"18\\\" height=\\\"18\\\" rx=\\\"3\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></rect><path d=\\\"M15.5 10L11 14.5\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\"></path><path d=\\\"M9 12.5L11 14.5\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\"></path>\",\"check-square-2\":\"<path d=\\\"M18 7.41429L11.9142 13.5001\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\"></path><path d=\\\"M9.5 11.5L11.9142 13.5\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\"></path><path d=\\\"M16 14.5V15C16 16.1046 15.1046 17 14 17H8C6.89543 17 6 16.1046 6 15V9C6 7.89543 6.89543 7 8 7H13\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\"></path>\",\"check\":\"<path d=\\\"M15.5 8.99999L9.41421 15.0858\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\"></path><path d=\\\"M7 13.0858L9.41422 15.0858\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\"></path>\",\"chevron-left\":\"<path d=\\\"M10 12.4L14.5 17.8\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M10 12.4L14.5 7.00006\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path>\",\"chevron-right\":\"<path d=\\\"M14.5 12.4L10 17.8\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M14.5 12.4L10 7.00006\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path>\",\"chevron-up\":\"<path d=\\\"M12.25 10.15L17.65 14.65\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M12.25 10.15L6.85004 14.65\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path>\",\"chevrone-bottom\":\"<path d=\\\"M12.25 14.6499L17.6499 10.1499\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M12.25 14.6499L6.85002 10.1499\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path>\",\"chevrons-down\":\"<path d=\\\"M12.2499 16.5L17.6499 12\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M12.2499 16.5L6.84998 12\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M12.2499 11.5L17.6499 7.00003\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M12.2499 11.5L6.84998 7.00003\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path>\",\"chevrons-left\":\"<path d=\\\"M7.00003 11.7501L11.5 17.1501\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M7.00003 11.7501L11.5 6.35016\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M12 11.7501L16.5 17.1501\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M12 11.7501L16.5 6.35016\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path>\",\"chevrons-right\":\"<path d=\\\"M16 11.7501L11.5 17.1501\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M16 11.7501L11.5 6.35016\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M11 11.7501L6.50003 17.1501\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M11 11.7501L6.50003 6.35016\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path>\",\"chevrons-up\":\"<path d=\\\"M12.4 7L17.7999 11.5\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M12.4 7L7 11.5\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M12.4 12L17.7999 16.5\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M12.4 12L7 16.5\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path>\",\"circle\":\"<circle cx=\\\"12\\\" cy=\\\"12\\\" r=\\\"9\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></circle>\",\"clipboard\":\"<path d=\\\"M9 5H6.14286C5.51167 5 5 5.51168 5 6.14286V19.8571C5 20.4883 5.51167 21 6.14286 21H17.8571C18.4883 21 19 20.4883 19 19.8571V6.14286C19 5.51167 18.4883 5 17.8571 5H15\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><rect x=\\\"9\\\" y=\\\"3\\\" width=\\\"6\\\" height=\\\"4\\\" rx=\\\"1\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></rect>\",\"clock-1\":\"<rect x=\\\"3\\\" y=\\\"3\\\" width=\\\"18\\\" height=\\\"18\\\" rx=\\\"9\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></rect><line x1=\\\"12\\\" y1=\\\"11\\\" x2=\\\"12\\\" y2=\\\"8\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></line><path d=\\\"M12 12L12 6.5\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path>\",\"clock-2\":\"<rect x=\\\"3\\\" y=\\\"3\\\" width=\\\"18\\\" height=\\\"18\\\" rx=\\\"9\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></rect><path d=\\\"M12 12L12 8\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M12 12L17 12\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path>\",\"clock-3\":\"<rect x=\\\"3\\\" y=\\\"3\\\" width=\\\"18\\\" height=\\\"18\\\" rx=\\\"9\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></rect><path d=\\\"M12 12L12 8\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M12 12L12 17\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path>\",\"clock-4\":\"<rect x=\\\"3\\\" y=\\\"3\\\" width=\\\"18\\\" height=\\\"18\\\" rx=\\\"9\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></rect><path d=\\\"M12 12L12 8\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M7 12L12 12\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path>\",\"clock-5\":\"<rect x=\\\"3\\\" y=\\\"3\\\" width=\\\"18\\\" height=\\\"18\\\" rx=\\\"9\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></rect><path d=\\\"M12 12L12 8\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M8 8L12 12\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path>\",\"clock-6\":\"<rect x=\\\"3\\\" y=\\\"3\\\" width=\\\"18\\\" height=\\\"18\\\" rx=\\\"9\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></rect><path d=\\\"M12 12L12 8\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M16 8L12 12\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path>\",\"clock-7\":\"<rect x=\\\"3\\\" y=\\\"3\\\" width=\\\"18\\\" height=\\\"18\\\" rx=\\\"9\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></rect><path d=\\\"M12 12L12 8\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M12 12L16 16\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path>\",\"clock-8\":\"<rect x=\\\"3\\\" y=\\\"3\\\" width=\\\"18\\\" height=\\\"18\\\" rx=\\\"9\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></rect><path d=\\\"M12 12L12 8\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M8 16L12 12\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path>\",\"cloud-off\":\"<path d=\\\"M11 7.52779C12.0615 6.57771 13.4633 6 15 6C18.3137 6 21 8.68629 21 12C21 13.3651 20.5441 14.5492 19.7762 15.5\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M6.5 10C4.567 10 3 11.567 3 13.5C3 15.433 4.567 17 6.5 17H12\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><line x1=\\\"2.4137\\\" y1=\\\"2.03821\\\" x2=\\\"19.0382\\\" y2=\\\"19.5863\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\"></line>\",\"cloud-rain-heavy\":\"<path d=\\\"M9 9C9 5.68629 11.6863 3 15 3C18.3137 3 21 5.68629 21 9C21 11.2208 19.7934 12.9626 18 14\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M8.30379 7.5C7.77702 7.18259 7.15983 7 6.5 7C4.567 7 3 8.567 3 10.5C3 12.433 4.567 14 6.5 14H18\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><line x1=\\\"18\\\" y1=\\\"17\\\" x2=\\\"18\\\" y2=\\\"21\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></line><line x1=\\\"15\\\" y1=\\\"20\\\" x2=\\\"15\\\" y2=\\\"21\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></line><line x1=\\\"15\\\" y1=\\\"14\\\" x2=\\\"15\\\" y2=\\\"17\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></line><line x1=\\\"12\\\" y1=\\\"16\\\" x2=\\\"12\\\" y2=\\\"20\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></line><line x1=\\\"9\\\" y1=\\\"20\\\" x2=\\\"9\\\" y2=\\\"21\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></line><line x1=\\\"9\\\" y1=\\\"14\\\" x2=\\\"9\\\" y2=\\\"17\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></line><line x1=\\\"6\\\" y1=\\\"17\\\" x2=\\\"6\\\" y2=\\\"21\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></line>\",\"cloud-rain-light\":\"<path d=\\\"M9 9C9 5.68629 11.6863 3 15 3C18.3137 3 21 5.68629 21 9C21 11.2208 19.7934 12.9626 18 14\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M8.30379 7.5C7.77702 7.18259 7.15983 7 6.5 7C4.567 7 3 8.567 3 10.5C3 12.433 4.567 14 6.5 14H18\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><line x1=\\\"18\\\" y1=\\\"17\\\" x2=\\\"18\\\" y2=\\\"18\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></line><line x1=\\\"15\\\" y1=\\\"20\\\" x2=\\\"15\\\" y2=\\\"21\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></line><line x1=\\\"15\\\" y1=\\\"14\\\" x2=\\\"15\\\" y2=\\\"15\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></line><line x1=\\\"12\\\" y1=\\\"17\\\" x2=\\\"12\\\" y2=\\\"18\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></line><line x1=\\\"9\\\" y1=\\\"20\\\" x2=\\\"9\\\" y2=\\\"21\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></line><line x1=\\\"9\\\" y1=\\\"14\\\" x2=\\\"9\\\" y2=\\\"15\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></line><line x1=\\\"6\\\" y1=\\\"17\\\" x2=\\\"6\\\" y2=\\\"18\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></line>\",\"cloud-storm\":\"<path d=\\\"M9 9C9 5.68629 11.6863 3 15 3C18.3137 3 21 5.68629 21 9C21 11.2208 19.7934 12.9626 18 14\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M8.30379 7.5C7.77702 7.18259 7.15983 7 6.5 7C4.567 7 3 8.567 3 10.5C3 12.433 4.567 14 6.5 14H18\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><line x1=\\\"17\\\" y1=\\\"20\\\" x2=\\\"17\\\" y2=\\\"21\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></line><line x1=\\\"17\\\" y1=\\\"14\\\" x2=\\\"17\\\" y2=\\\"15\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></line><line x1=\\\"10\\\" y1=\\\"17\\\" x2=\\\"10\\\" y2=\\\"18\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></line><line x1=\\\"7\\\" y1=\\\"20\\\" x2=\\\"7\\\" y2=\\\"21\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></line><line x1=\\\"7\\\" y1=\\\"14\\\" x2=\\\"7\\\" y2=\\\"15\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></line><line x1=\\\"4\\\" y1=\\\"17\\\" x2=\\\"4\\\" y2=\\\"18\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></line><path d=\\\"M12.5 14L14.5 17L12 19.5L14 22\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path>\",\"cloud\":\"<path d=\\\"M9 12C9 11.6394 9.03182 11.2862 9.0928 10.943M9.0928 10.943C9.59214 8.1334 12.0469 6 15 6C18.3137 6 21 8.68629 21 12C21 12.5425 20.928 13.0564 20.7931 13.5384C19.9872 16.4167 16.4262 17 13.4372 17H6.5C4.567 17 3 15.433 3 13.5C3 11.567 4.567 10 6.5 10C7.15983 10 7.77702 10.1826 8.30379 10.5L9.0928 10.943Z\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path>\",\"cloudy-moon\":\"<path d=\\\"M11 3C7.13401 3 4 6.13401 4 10C4 10.3395 4.02417 10.6734 4.07089 11\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M11 3C10.3388 4.71924 10.0623 6.2286 10.1243 7.5\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M9 15C9 11.6863 11.6863 9 15 9C18.3137 9 21 11.6863 21 15C21 17.2208 19.7934 18.9626 18 20\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M8.30379 13.5C7.77702 13.1826 7.15983 13 6.5 13C4.567 13 3 14.567 3 16.5C3 18.433 4.567 20 6.5 20H18\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path>\",\"cloudy\":\"<path d=\\\"M10 15C10 11.6863 12.6863 9 16 9C19.3137 9 22 11.6863 22 15C22 17.2208 20.7934 18.9626 19 20\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M9.30379 13.5C8.77702 13.1826 8.15983 13 7.5 13C5.567 13 4 14.567 4 16.5C4 18.433 5.567 20 7.5 20H19\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M8 10C8 6.68629 10.6863 4 14 4C16.0075 4 17.7848 4.98593 18.874 6.5\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M2 11.5C2 9.567 3.567 8 5.5 8C6.15983 8 6.77702 8.18259 7.30379 8.5\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path>\",\"code-1\":\"<path d=\\\"M9.49997 12.4L5 17.7999\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M9.49997 12.4L5 7\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><line x1=\\\"18\\\" y1=\\\"18\\\" x2=\\\"10\\\" y2=\\\"18\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></line>\",\"code\":\"<path d=\\\"M5 12.4L8.66664 8.00006\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M5 12.4L8.66664 16.8\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M19.25 12.4L15.5833 8.00006\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M19.25 12.4L15.5833 16.8\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path>\",\"codepen\":\"<path d=\\\"M12 15L22 8.5V15.5L12 22V15Z\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M12 15L22 8.5V15.5L12 22V15Z\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M2 15.5L12 22V15L2 8.5V15.5Z\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M2 8.5L12 2V9L2 15.5V8.5Z\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M12 9L22 15.5V8.5L12 2V9Z\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path>\",\"coffee-expresso\":\"<path d=\\\"M8 11H16L14.5 17H9.5L8 11Z\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M20 14C20 15.1046 18.8807 16 17.5 16C15 16 15.5 15.5 15.5 14C15.5 12.8954 16.1193 12 17.5 12C18.8807 12 20 12.8954 20 14Z\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><line x1=\\\"17\\\" y1=\\\"19\\\" x2=\\\"7\\\" y2=\\\"19\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></line>\",\"coffee\":\"<rect x=\\\"5\\\" y=\\\"11\\\" width=\\\"12\\\" height=\\\"10\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></rect><path d=\\\"M12.5 8C10.7679 8 14.2321 4 12.5 4\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M8.5 8C6.76795 8 10.2321 4 8.5 4\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M21 15.5C21 16.8807 19.8807 18 18.5 18C17.1193 18 17 16.8807 17 15.5C17 14.1193 17.1193 13 18.5 13C19.8807 13 21 14.1193 21 15.5Z\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path>\",\"colour-picker\":\"<path d=\\\"M10.5566 8.62411L14.1753 10.8096L8.69444 19.8846C8.37003 20.4218 7.76997 20.7295 7.14444 20.6796V20.6796C6.36571 20.6174 5.73623 20.0197 5.63385 19.2452L5.50014 18.2336C5.41328 17.5765 5.55264 16.9094 5.8953 16.3421L10.5566 8.62411Z\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><rect x=\\\"9.84003\\\" y=\\\"5.72208\\\" width=\\\"8.45496\\\" height=\\\"2.11374\\\" rx=\\\"1.05687\\\" transform=\\\"rotate(31.1299 9.84003 5.72208)\\\" fill=\\\"#333333\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></rect><path d=\\\"M13.2886 4.10089C13.8921 3.10161 15.1914 2.78078 16.1907 3.3843V3.3843C17.19 3.98781 17.5108 5.28713 16.9073 6.28641L14.7217 9.90512L11.103 7.7196L13.2886 4.10089Z\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path>\",\"columns\":\"<rect x=\\\"3\\\" y=\\\"3\\\" width=\\\"18\\\" height=\\\"18\\\" rx=\\\"3\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></rect><line x1=\\\"12\\\" y1=\\\"4\\\" x2=\\\"12\\\" y2=\\\"20\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></line>\",\"command\":\"<path d=\\\"M9 6.5C9 9.5 9 9 6.5 9C5.11929 9 4 7.88071 4 6.5C4 5.11929 5.11929 4 6.5 4C7.88071 4 9 5.11929 9 6.5Z\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M20 6.5C20 7.88071 18.8807 9 17.5 9C15 9 15 9 15 6.5C15 5.11929 16.1193 4 17.5 4C18.8807 4 20 5.11929 20 6.5Z\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M9 17.5312C9 14.5312 9 15.0312 6.5 15.0312C5.11929 15.0312 4 16.1505 4 17.5312C4 18.912 5.11929 20.0312 6.5 20.0312C7.88071 20.0312 9 18.912 9 17.5312Z\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M20 17.5312C20 16.1505 18.8807 15.0312 17.5 15.0312C15 15.0312 15 15.0312 15 17.5312C15 18.912 16.1193 20.0312 17.5 20.0312C18.8807 20.0312 20 18.912 20 17.5312Z\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><line x1=\\\"9\\\" y1=\\\"7\\\" x2=\\\"9\\\" y2=\\\"17\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></line><line x1=\\\"7\\\" y1=\\\"15\\\" x2=\\\"17\\\" y2=\\\"15\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></line><line x1=\\\"15\\\" y1=\\\"7\\\" x2=\\\"15\\\" y2=\\\"17\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></line><line x1=\\\"7\\\" y1=\\\"9\\\" x2=\\\"17\\\" y2=\\\"9\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></line>\",\"compass\":\"<path d=\\\"M13.5921 13.5L16.5 7.5L10.5 10.4079\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M10.4079 10.5L7.5 16.5L13.5 13.5921\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><rect x=\\\"3\\\" y=\\\"3\\\" width=\\\"18\\\" height=\\\"18\\\" rx=\\\"9\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></rect>\",\"copy\":\"<path d=\\\"M5.11765 15.7059C3.9481 15.7059 3 14.7578 3 13.5882V5.11765C3 3.9481 3.9481 3 5.11765 3H13.5882C14.7578 3 15.7059 3.9481 15.7059 5.11765V5.64706\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><rect x=\\\"8.29413\\\" y=\\\"8.29412\\\" width=\\\"12.7059\\\" height=\\\"12.7059\\\" rx=\\\"2\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></rect>\",\"corner-down-left\":\"<path d=\\\"M18 4V10.4C18 13.4928 15.4928 16 12.4 16H6\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M5.40002 16L9 12\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M5.40002 16L9 20\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path>\",\"corner-down-right\":\"<path d=\\\"M6 4V10.4C6 13.4928 8.50721 16 11.6 16H18\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M18.6 16L15 12\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M18.6 16L15 20\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path>\",\"corner-left-down\":\"<path d=\\\"M20 6L13.6 6C10.5072 6 8 8.50721 8 11.6L8 18\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M8 18.6001L12 15.0001\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M8 18.6001L4 15.0001\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path>\",\"corner-left-up\":\"<path d=\\\"M20 18L13.6 18C10.5072 18 8 15.4928 8 12.4L8 6\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M8 5.3999L12 8.99988\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M8 5.3999L4 8.99988\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path>\",\"corner-right-down\":\"<path d=\\\"M4 6L10.4 6C13.4928 6 16 8.50721 16 11.6L16 18\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M16 18.6001L12 15.0001\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M16 18.6001L20 15.0001\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path>\",\"corner-right-up\":\"<path d=\\\"M4 18L10.4 18C13.4928 18 16 15.4928 16 12.4L16 6\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M16 5.3999L12 8.99988\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M16 5.3999L20 8.99988\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path>\",\"corner-up-left\":\"<path d=\\\"M18.6 20V13.6C18.6 10.5072 16.0928 8 13 8H6.59998\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M6 8L9.59998 12\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M6 8L9.59998 4\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path>\",\"corner-up-right\":\"<path d=\\\"M6 20V13.6C6 10.5072 8.50721 8 11.6 8H18\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M18.6 8L15 12\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M18.6 8L15 4\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path>\",\"cpu\":\"<rect x=\\\"9\\\" y=\\\"9\\\" width=\\\"6\\\" height=\\\"6\\\" rx=\\\"1\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></rect><rect x=\\\"5\\\" y=\\\"5\\\" width=\\\"14\\\" height=\\\"14\\\" rx=\\\"2\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></rect><line x1=\\\"9\\\" y1=\\\"2\\\" x2=\\\"9\\\" y2=\\\"5\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></line><line x1=\\\"2\\\" y1=\\\"15\\\" x2=\\\"5\\\" y2=\\\"15\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></line><line x1=\\\"9\\\" y1=\\\"19\\\" x2=\\\"9\\\" y2=\\\"22\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></line><line x1=\\\"19\\\" y1=\\\"15\\\" x2=\\\"22\\\" y2=\\\"15\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></line><line x1=\\\"15\\\" y1=\\\"2\\\" x2=\\\"15\\\" y2=\\\"5\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></line><line x1=\\\"2\\\" y1=\\\"9\\\" x2=\\\"5\\\" y2=\\\"9\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></line><line x1=\\\"15\\\" y1=\\\"19\\\" x2=\\\"15\\\" y2=\\\"22\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></line><line x1=\\\"19\\\" y1=\\\"9\\\" x2=\\\"22\\\" y2=\\\"9\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></line>\",\"credit-card\":\"<rect x=\\\"2\\\" y=\\\"6\\\" width=\\\"20\\\" height=\\\"12\\\" rx=\\\"1\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></rect><line x1=\\\"21\\\" y1=\\\"10\\\" x2=\\\"3\\\" y2=\\\"10\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\"></line>\",\"crop\":\"<path d=\\\"M20 7H9.16667C7.97005 7 7 7.97005 7 9.16667V20\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M4 17H14.8333C16.03 17 17 16.03 17 14.8333V4\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path>\",\"crosshair\":\"<path d=\\\"M2 12C2 6.47715 6.47715 2 12 2M2 12C2 17.5228 6.47715 22 12 22M2 12H6.25M12 2C17.5228 2 22 6.47715 22 12M12 2V6.5M22 12C22 17.5228 17.5228 22 12 22M22 12L17.75 12M12 22V18\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path>\",\"cup\":\"<path d=\\\"M8 19H16L18 22H6L8 19Z\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M10 9V19H14V9\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M19 3C19 4.5913 18.2625 6.11742 16.9497 7.24264C15.637 8.36786 13.8565 9 12 9C10.1435 9 8.36301 8.36786 7.05025 7.24264C5.7375 6.11742 5 4.5913 5 3L19 3Z\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M9.625 12C7.96815 12 5.88991 13.2947 4.625 9.5C4.125 8 3.125 6 5.625 6\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M15 12C16.6569 12 18.7351 13.2947 20 9.5C20.5 8 21.5 6 19 6\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path>\",\"database\":\"<ellipse cx=\\\"12\\\" cy=\\\"6\\\" rx=\\\"8\\\" ry=\\\"2\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></ellipse><path d=\\\"M20 12C20 13.1046 16.4183 14 12 14C7.58172 14 4 13.1046 4 12\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M4 6V18C4 19.1046 7.58172 20 12 20C16.4183 20 20 19.1046 20 18V6\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path>\",\"delete\":\"<path d=\\\"M7 7H21V19H7L2 13L7 7Z\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M11.4142 11L15.5 15.0001\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M15.4571 10.957L11.457 15.0428\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path>\",\"desktop\":\"<rect x=\\\"3\\\" y=\\\"5\\\" width=\\\"18\\\" height=\\\"12.2778\\\" rx=\\\"2\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></rect><line x1=\\\"12\\\" y1=\\\"18\\\" x2=\\\"12\\\" y2=\\\"20\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></line><line x1=\\\"9\\\" y1=\\\"21\\\" x2=\\\"15\\\" y2=\\\"21\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></line>\",\"disco\":\"<rect x=\\\"3\\\" y=\\\"3\\\" width=\\\"18\\\" height=\\\"18\\\" rx=\\\"9\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></rect><rect x=\\\"10\\\" y=\\\"10\\\" width=\\\"4\\\" height=\\\"4\\\" rx=\\\"2\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></rect>\",\"dollar-sign\":\"<line x1=\\\"12\\\" y1=\\\"2\\\" x2=\\\"12\\\" y2=\\\"22\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></line><path d=\\\"M17 5H10.24C8.4506 5 7 6.567 7 8.5C7 10.433 8.4506 12 10.24 12H13.5385C15.4502 12 17 13.567 17 15.5C17 17.433 15.4502 19 13.5385 19H7\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path>\",\"download-cloud\":\"<path d=\\\"M3 12C3 9.79086 4.79086 8 7 8C7.26483 8 7.52364 8.02574 7.77408 8.07484\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M8 8C8.81364 5.65123 11.3744 4 14 4C17.3137 4 20 6.68629 20 10L20 12\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M12 19L12 11\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M12 19L15 16.5\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M12 19L9 16.5\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path>\",\"download\":\"<path d=\\\"M4 15V18H20V15\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M12 14L12 6\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M12 14L15 11.5\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M12 14L9 11.5\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path>\",\"dribbble\":\"<circle cx=\\\"12\\\" cy=\\\"12\\\" r=\\\"9\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></circle><path d=\\\"M15.5294 4.15187C14.9152 9.95935 12.6546 15.5136 9 20.1082\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M3.33243 13.0327C3.71886 13.011 4.10814 13 4.5 13C9.67038 13 14.3937 14.9141 18 18.0724\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M21 11.3171C19.7489 11.7593 18.4025 12 17 12C12.2964 12 8.22487 9.29381 6.25742 5.35352\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path>\",\"drive\":\"<path d=\\\"M11.015 16H20.5L18.485 20H9L11.015 16Z\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M15.6549 13.2162L11.0833 4.90559L15.5592 4.74316L20.1308 13.0538L15.6549 13.2162Z\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M3.5 15L8.16413 6.74096L10.6563 10.4624L5.99215 18.7215L3.5 15Z\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path>\",\"drop\":\"<path d=\\\"M11.5 18C11.6106 18 11.7208 17.9987 11.8304 17.996C18.6337 17.8323 17.1109 10.0479 12.0517 5.49638L11.5 5L10.9483 5.49638C5.88906 10.0479 4.3663 17.8323 11.1696 17.996C11.2792 17.9987 11.3894 18 11.5 18Z\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path>\",\"edit-2\":\"<path d=\\\"M14.767 5.01352L17.5484 7.88824L7.48685 17.623L3.94013 18.2717L4.70549 14.7483L14.767 5.01352Z\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><line x1=\\\"12\\\" y1=\\\"18\\\" x2=\\\"17\\\" y2=\\\"18\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></line>\",\"edit-3\":\"<path d=\\\"M19.767 3.33517L22.5484 6.2099L12.4869 15.9447L8.94013 16.5933L9.70549 13.0699L19.767 3.33517Z\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M20 14V17C20 18.6569 18.6569 20 17 20H7C5.34315 20 4 18.6569 4 17V7C4 5.34315 5.34315 4 7 4H12\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path>\",\"edit\":\"<path d=\\\"M14.767 5.01352L17.5484 7.88824L7.48685 17.623L3.94013 18.2717L4.70549 14.7483L14.767 5.01352Z\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path>\",\"egual\":\"<path d=\\\"M5 14L18 14\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\"></path><path d=\\\"M5 10L18 10\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\"></path>\",\"email\":\"<rect x=\\\"3\\\" y=\\\"6\\\" width=\\\"18\\\" height=\\\"12\\\" rx=\\\"2\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></rect><path d=\\\"M20.5737 7L12 13L3.42635 7\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path>\",\"euro-sign\":\"<line x1=\\\"15\\\" y1=\\\"14\\\" x2=\\\"6\\\" y2=\\\"14\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></line><line x1=\\\"15\\\" y1=\\\"10\\\" x2=\\\"6\\\" y2=\\\"10\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></line><path d=\\\"M18 4.25203C17.3608 4.08751 16.6906 4 16 4C11.5817 4 8 7.58172 8 12C8 16.4183 11.5817 20 16 20C16.6906 20 17.3608 19.9125 18 19.748\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path>\",\"external-link\":\"<line x1=\\\"10.8492\\\" y1=\\\"13.0606\\\" x2=\\\"19.435\\\" y2=\\\"4.47485\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></line><path d=\\\"M19.7886 4.12134L20.1421 8.01042\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M19.7886 4.12134L15.8995 3.76778\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M18 13.1465V17.6465C18 19.3033 16.6569 20.6465 15 20.6465H6C4.34315 20.6465 3 19.3033 3 17.6465V8.64648C3 6.98963 4.34315 5.64648 6 5.64648H10.5\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path>\",\"eye-off\":\"<path d=\\\"M14.3636 11.3568C14.2198 10.8204 13.9087 10.3735 13.5015 10.0572M9.63158 12.6247C9.78764 13.2072 10.141 13.6841 10.6005 14.0028\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M12 17C8.31328 17 5.36586 14.7393 3 12M21 12C20.2907 12.8212 19.5292 13.5994 18.7111 14.2866\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M12 7C15.6867 7 18.6341 9.53466 21 12M3 12C3.76993 11.1977 4.60145 10.3881 5.5 9.66081\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><line x1=\\\"3.4137\\\" y1=\\\"3.03821\\\" x2=\\\"20.0382\\\" y2=\\\"20.5863\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\"></line>\",\"eye\":\"<circle cx=\\\"12\\\" cy=\\\"12\\\" r=\\\"2\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></circle><path d=\\\"M3 12C5.36586 14.7393 8.31328 17 12 17C15.6867 17 18.6341 14.7393 21 12\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M21 12C18.6341 9.53466 15.6867 7 12 7C8.31328 7 5.36586 9.53466 3 12\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path>\",\"face-mask\":\"<path d=\\\"M6 9L7.0991 9.35007C10.2683 10.3595 13.7317 10.3595 16.9009 9.35007L18 9L17.1429 15.8797L16.9832 15.9509C13.8462 17.3497 10.1538 17.3497 7.01676 15.9509L6.85714 15.8797L6 9Z\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M7 16C5.5 15.0001 4.25512 14.0001 3 11.7222C1.5 9.00002 2.5 7.00002 6 8.99998\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M17 15.9997C18.5 14.9998 19.7449 13.9998 21 11.7219C22.5 8.99972 21.5 6.99972 18 8.99968\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path>\",\"face-sad\":\"<rect x=\\\"3\\\" y=\\\"3\\\" width=\\\"18.2842\\\" height=\\\"18.2842\\\" rx=\\\"9.14208\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></rect><path d=\\\"M15.7989 17.6273C15.7989 15.6077 14.1617 13.9705 12.1421 13.9705C10.1225 13.9705 8.48526 15.6077 8.48526 17.6273\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M8 10H8.01\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M16 10H16.01\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path>\",\"face-smile\":\"<rect x=\\\"3\\\" y=\\\"3\\\" width=\\\"18.2842\\\" height=\\\"18.2842\\\" rx=\\\"9.14208\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></rect><path d=\\\"M17.6274 13.9705C17.6274 15.9901 15.1715 17.6273 12.1421 17.6273C9.11269 17.6273 6.65686 15.9901 6.65686 13.9705\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M8 10H8.01\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M16 10H16.01\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path>\",\"face\":\"<rect x=\\\"3\\\" y=\\\"3\\\" width=\\\"18.2842\\\" height=\\\"18.2842\\\" rx=\\\"9.14208\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></rect><path d=\\\"M8 10H8.01\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M16 10H16.01\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><line x1=\\\"10.3994\\\" y1=\\\"15.7131\\\" x2=\\\"13.8847\\\" y2=\\\"15.7131\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></line>\",\"facebook\":\"<path d=\\\"M9 22H13V14H15.8787L17 10H13V7.00004C13 6.44776 13.4477 6.00004 14 6.00004H17V2C9 1.49998 9 4.50001 9 10H6V14H9V22Z\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path>\",\"fast-forward-x3\":\"<path d=\\\"M11.0833 12.0001L1 19.3334L1 4.66675L11.0833 12.0001Z\\\" stroke=\\\"#333333\\\" stroke-width=\\\"1.83333\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M7.41669 19.3334L17.5 12.0001L7.41669 4.66675\\\" stroke=\\\"#333333\\\" stroke-width=\\\"1.83333\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M12.9167 19.3334L23 12.0001L12.9167 4.66675\\\" stroke=\\\"#333333\\\" stroke-width=\\\"1.83333\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path>\",\"fast-forward\":\"<path d=\\\"M13.7778 12L4 19.1111L4 4.88892L13.7778 12Z\\\" stroke=\\\"#333333\\\" stroke-width=\\\"1.77778\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M10.2222 19.1111L20 12L10.2222 4.88892\\\" stroke=\\\"#333333\\\" stroke-width=\\\"1.77778\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path>\",\"female\":\"<path d=\\\"M17.4091 9.68183C17.4091 11.255 16.7761 12.6784 15.7487 13.7145C15.3645 14.102 14.9256 14.4346 14.4448 14.7C13.6265 15.1517 12.6856 15.4091 11.6818 15.4091C8.51874 15.4091 5.95455 12.8449 5.95455 9.68183C5.95455 6.51874 8.51874 3.95455 11.6818 3.95455C14.8449 3.95455 17.4091 6.51874 17.4091 9.68183Z\\\" stroke=\\\"#333333\\\" stroke-width=\\\"1.9091\\\"></path><path d=\\\"M11.5 15.5L11.5 21\\\" stroke=\\\"#333333\\\" stroke-width=\\\"1.9091\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M14 19L9 19\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path>\",\"figma\":\"<circle cx=\\\"16\\\" cy=\\\"12\\\" r=\\\"3\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></circle><path d=\\\"M12.5 19C12.5 20.6569 10.6378 22 8.9877 22C7.33764 22 6 20.6569 6 19C6 17.3431 7.33764 16 8.9877 16C13 16 12.5 16 12.5 19ZM12.5 19V2\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M9 2H16C17.6569 2 19 3.34315 19 5C19 6.65685 17.6569 8 16 8H9\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M16 15H9C7.34315 15 6 13.6569 6 12C6 10.3431 7.34315 9 9 9H16\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M9 8C7.34315 8 6 6.65685 6 5C6 3.34315 7.34315 2 9 2\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path>\",\"file-add\":\"<path d=\\\"M12.4615 4V9C12.4615 9.55228 12.9093 10 13.4615 10H18M12.4615 4L7 4C6.44772 4 6 4.44772 6 5V19C6 19.5523 6.44772 20 7 20H17C17.5523 20 18 19.5523 18 19V10M12.4615 4L18 10\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M12 13L12 17.5\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M14.25 15.25H9.75\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path>\",\"file-damaged\":\"<path d=\\\"M12.4615 4V9C12.4615 9.55228 12.9093 10 13.4615 10H18M12.4615 4L18 10M12.4615 4H8.5M18 10V15M15 20H7C6.44772 20 6 19.5523 6 19V10\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><line x1=\\\"3.4137\\\" y1=\\\"3.03821\\\" x2=\\\"20.0382\\\" y2=\\\"20.5863\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\"></line>\",\"file-doc\":\"<path d=\\\"M12.4615 4V9C12.4615 9.55228 12.9093 10 13.4615 10H18M12.4615 4L7 4C6.44772 4 6 4.44772 6 5V19C6 19.5523 6.44772 20 7 20H17C17.5523 20 18 19.5523 18 19V10M12.4615 4L18 10\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M10 12.5L10 16.5\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M10 12.0997C11 11.833 13 11.9396 13 14.5C13 17.0604 11 17.167 10 16.9003\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path>\",\"file-presentation\":\"<path d=\\\"M12.4615 4V9C12.4615 9.55228 12.9093 10 13.4615 10H18M12.4615 4L7 4C6.44772 4 6 4.44772 6 5V19C6 19.5523 6.44772 20 7 20H17C17.5523 20 18 19.5523 18 19V10M12.4615 4L18 10\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M10 12.5L10 17\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M10 12.0598C11 11.8998 13 11.9638 13 13.5C13 15.0362 11 15.1002 10 14.9402\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path>\",\"file-remove\":\"<path d=\\\"M12.4615 4V9C12.4615 9.55228 12.9093 10 13.4615 10H18M12.4615 4L7 4C6.44772 4 6 4.44772 6 5V19C6 19.5523 6.44772 20 7 20H17C17.5523 20 18 19.5523 18 19V10M12.4615 4L18 10\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M14.25 15.25H9.75\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path>\",\"file-spreadsheet\":\"<path d=\\\"M12.4615 4V9C12.4615 9.55228 12.9093 10 13.4615 10H18M12.4615 4L7 4C6.44772 4 6 4.44772 6 5V19C6 19.5523 6.44772 20 7 20H17C17.5523 20 18 19.5523 18 19V10M12.4615 4L18 10\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M10.5782 13.5062L13.4218 16.9939\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M13.4218 13.5062L10.5782 16.9939\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path>\",\"file-text\":\"<path d=\\\"M12.4615 4V9C12.4615 9.55228 12.9093 10 13.4615 10H18M12.4615 4L7 4C6.44772 4 6 4.44772 6 5V19C6 19.5523 6.44772 20 7 20H17C17.5523 20 18 19.5523 18 19V10M12.4615 4L18 10\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><line x1=\\\"10\\\" y1=\\\"14\\\" x2=\\\"14\\\" y2=\\\"14\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></line><line x1=\\\"10\\\" y1=\\\"11\\\" x2=\\\"11\\\" y2=\\\"11\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></line><line x1=\\\"10\\\" y1=\\\"17\\\" x2=\\\"14\\\" y2=\\\"17\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></line>\",\"file\":\"<path d=\\\"M12.4615 4V9C12.4615 9.55228 12.9093 10 13.4615 10H18M12.4615 4L7 4C6.44772 4 6 4.44772 6 5V19C6 19.5523 6.44772 20 7 20H17C17.5523 20 18 19.5523 18 19V10M12.4615 4L18 10\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path>\",\"filter\":\"<path d=\\\"M3 4H21L14 12V20L10 22V12L3 4Z\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path>\",\"flag\":\"<path d=\\\"M6 5.84406C6 5.05034 6.90404 4.53696 7.63209 4.85309C9.0023 5.44805 10.9748 6.01377 12.5 5.26923C14.5558 4.26565 17.4244 5.64267 18.5352 6.26305C18.8305 6.42799 19 6.74249 19 7.08074V13.0283C19 13.8471 18.0293 14.3735 17.2778 14.0484C15.9944 13.4932 14.1807 13.0275 12.5 13.7308C10.1037 14.7334 7.43704 13.3598 6.42261 12.7387C6.15074 12.5722 6 12.2731 6 11.9544V5.84406Z\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><line x1=\\\"6\\\" y1=\\\"6\\\" x2=\\\"6\\\" y2=\\\"19\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></line>\",\"fn\":\"<path d=\\\"M8.66667 6C7.19391 6 6 7.19391 6 8.66667V10.303M6 17.3939V10.303M6 10.303H8.66667\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M17.3333 17.3938V13.3938C17.3333 11.921 16.1394 10.7271 14.6667 10.7271C13.1939 10.7271 12 11.921 12 13.3938V17.3938V9.3938\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path>\",\"folder-add\":\"<path d=\\\"M3 7C3 5.89543 3.89543 5 5 5H7.72525C8.46646 5 9.10464 5.52318 9.25 6.25V6.25C9.39536 6.97682 10.0335 7.5 10.7748 7.5H19C20.1046 7.5 21 8.39543 21 9.5V17.5C21 18.6046 20.1046 19.5 19 19.5H5C3.89543 19.5 3 18.6046 3 17.5V7Z\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M14.5 13.5L9.5 13.5\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\"></path><path d=\\\"M12 11L12 16\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\"></path>\",\"folder-locked\":\"<path d=\\\"M3 7C3 5.89543 3.89543 5 5 5H7.72525C8.46646 5 9.10464 5.52318 9.25 6.25V6.25C9.39536 6.97682 10.0335 7.5 10.7748 7.5H19C20.1046 7.5 21 8.39543 21 9.5V17.5C21 18.6046 20.1046 19.5 19 19.5H5C3.89543 19.5 3 18.6046 3 17.5V7Z\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><circle cx=\\\"12.5\\\" cy=\\\"11.5\\\" r=\\\"1\\\" fill=\\\"#333333\\\" stroke=\\\"#333333\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></circle><path d=\\\"M12.2808 15L12.5 14.1231L12.7192 15L12.2808 15Z\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path>\",\"folder-remove\":\"<path d=\\\"M3 7C3 5.89543 3.89543 5 5 5H7.72525C8.46646 5 9.10464 5.52318 9.25 6.25V6.25C9.39536 6.97682 10.0335 7.5 10.7748 7.5H19C20.1046 7.5 21 8.39543 21 9.5V17.5C21 18.6046 20.1046 19.5 19 19.5H5C3.89543 19.5 3 18.6046 3 17.5V7Z\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M14.5 13.5L9.5 13.5\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\"></path>\",\"folder-verified\":\"<path d=\\\"M3 7C3 5.89543 3.89543 5 5 5H7.72525C8.46646 5 9.10464 5.52318 9.25 6.25V6.25C9.39536 6.97682 10.0335 7.5 10.7748 7.5H19C20.1046 7.5 21 8.39543 21 9.5V17.5C21 18.6046 20.1046 19.5 19 19.5H5C3.89543 19.5 3 18.6046 3 17.5V7Z\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M14 12.25L10.5 15.25\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M9 13.75L10.5 15.25\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path>\",\"folder\":\"<path d=\\\"M3 7C3 5.89543 3.89543 5 5 5H7.72525C8.46646 5 9.10464 5.52318 9.25 6.25V6.25C9.39536 6.97682 10.0335 7.5 10.7748 7.5H19C20.1046 7.5 21 8.39543 21 9.5V17.5C21 18.6046 20.1046 19.5 19 19.5H5C3.89543 19.5 3 18.6046 3 17.5V7Z\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path>\",\"fork\":\"<path d=\\\"M12.5 3V20.5\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M15 3V7C15 8.38071 13.8807 9.5 12.5 9.5C11.1193 9.5 10 8.38071 10 7L10 3\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path>\",\"frame\":\"<line x1=\\\"5\\\" y1=\\\"3\\\" x2=\\\"5\\\" y2=\\\"21\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></line><line x1=\\\"19\\\" y1=\\\"3\\\" x2=\\\"19\\\" y2=\\\"21\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></line><line x1=\\\"21\\\" y1=\\\"5\\\" x2=\\\"3\\\" y2=\\\"5\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></line><line x1=\\\"21\\\" y1=\\\"19\\\" x2=\\\"3\\\" y2=\\\"19\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></line>\",\"framer\":\"<path d=\\\"M5 16L12 23V16M5 16V9H19V2H4.5L18.5 16H12M5 16H12\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path>\",\"gift-open\":\"<g clip-path=\\\"url(#clip0)\\\"><rect x=\\\"5\\\" y=\\\"13\\\" width=\\\"14\\\" height=\\\"8\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></rect><line x1=\\\"12\\\" y1=\\\"14\\\" x2=\\\"12\\\" y2=\\\"20\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></line><rect x=\\\"6.03699\\\" y=\\\"3.86325\\\" width=\\\"16\\\" height=\\\"4\\\" transform=\\\"rotate(15.0252 6.03699 3.86325)\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></rect><path d=\\\"M14.1523 4.48849C14.1523 4.48849 12.055 3.92553 11.2549 3.71076C11.2549 3.71076 10.3336 3.28581 10.5483 2.48571C10.7631 1.6856 11.5858 1.21109 12.3859 1.42585C13.186 1.64062 14.3671 3.68839 14.1523 4.48849Z\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M14.1523 4.48848C14.1523 4.48848 16.2497 5.05145 17.0498 5.26622C17.0498 5.26622 18.0601 5.35975 18.2748 4.55965C18.4896 3.75954 18.0151 2.93683 17.215 2.72207C16.4149 2.5073 14.3671 3.68838 14.1523 4.48848Z\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><line x1=\\\"13.7635\\\" y1=\\\"5.93721\\\" x2=\\\"12.9858\\\" y2=\\\"8.83465\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></line></g><defs><clippath id=\\\"clip0\\\"><rect width=\\\"24\\\" height=\\\"24\\\" fill=\\\"white\\\"></rect></clippath></defs>\",\"gift\":\"<rect x=\\\"5\\\" y=\\\"12\\\" width=\\\"14\\\" height=\\\"8\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></rect><rect x=\\\"4\\\" y=\\\"8\\\" width=\\\"16\\\" height=\\\"4\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></rect><path d=\\\"M12 6.5C12 6.5 9.82843 6.5 9 6.5C9 6.5 8 6.32843 8 5.5C8 4.67157 8.67157 4 9.5 4C10.3284 4 12 5.67157 12 6.5Z\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M12 6.5C12 6.5 14.1716 6.5 15 6.5C15 6.5 16 6.32843 16 5.5C16 4.67157 15.3284 4 14.5 4C13.6716 4 12 5.67157 12 6.5Z\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><line x1=\\\"12\\\" y1=\\\"9\\\" x2=\\\"12\\\" y2=\\\"19\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></line>\",\"github\":\"<path d=\\\"M15.1586 22C15.334 20.0952 15.5792 16.6662 14.6321 15.8095C13.5793 16.2857 25.1608 14.381 19.37 5.33333C19.721 4.69841 19.8965 3.42857 19.37 2C17.7908 1.9999 16.2115 2.47629 15.1586 3.42857C14.8076 3.26988 13.6846 2.95248 12 2.95248\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M9.15591 22C9.10069 21.3343 9.0378 20.4823 9.01576 19.619M12 2.95248C10.4831 2.95248 9.4719 3.26988 9.15588 3.42857C8.20785 2.47629 6.78579 1.9999 5.36376 2C4.88971 3.42857 5.04776 4.69841 5.36376 5.33333C0.149524 14.381 10.5779 16.2857 9.62993 15.8095C9.13002 16.3117 8.99903 17.6979 9.00805 19.1429M9.00805 19.1429C7.46206 18.8254 4.89608 17.5238 3 16C5.84412 18.381 4.3701 19.619 9.01576 19.619M9.00805 19.1429C9.00904 19.3012 9.01171 19.4603 9.01576 19.619\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path>\",\"globe\":\"<rect x=\\\"3\\\" y=\\\"2.99997\\\" width=\\\"18\\\" height=\\\"18\\\" rx=\\\"9\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></rect><path d=\\\"M12 20.0645C9.03656 18.5918 7 15.5337 7 12C7 8.46628 9.03656 5.40822 12 3.93552\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M12 20.0645C9.03656 18.5918 7 15.5337 7 12C7 8.46628 9.03656 5.40822 12 3.93552\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M12 20.0645C14.9634 18.5918 17 15.5337 17 12C17 8.46628 14.9634 5.40822 12 3.93552\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M12 20.0645C14.9634 18.5918 17 15.5337 17 12C17 8.46628 14.9634 5.40822 12 3.93552\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M12 3.99997L12 20\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M20 12L4 12\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path>\",\"grid\":\"<rect x=\\\"3\\\" y=\\\"3\\\" width=\\\"7\\\" height=\\\"7\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></rect><rect x=\\\"3\\\" y=\\\"14\\\" width=\\\"7\\\" height=\\\"7\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></rect><rect x=\\\"14\\\" y=\\\"3\\\" width=\\\"7\\\" height=\\\"7\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></rect><rect x=\\\"14\\\" y=\\\"14\\\" width=\\\"7\\\" height=\\\"7\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></rect>\",\"hard-drive\":\"<path d=\\\"M3 15C3 14.4477 3.44772 14 4 14H20C20.5523 14 21 14.4477 21 15V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V15Z\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M21 15L19.348 7.56614C19.1447 6.65106 18.3331 6 17.3957 6H6.60434C5.66694 6 4.85532 6.65106 4.65197 7.56614L3 15\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M6 18L6 18.01\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M9 18L9 18.01\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path>\",\"hashtag\":\"<path d=\\\"M10 3L8 21\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M16 3L14 21\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M21.1108 9.02754L3 9.0083\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M21.1108 15.0192L3 15\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path>\",\"headphone\":\"<path d=\\\"M19 19V12C19 8.13401 15.866 5 12 5C8.13401 5 5 8.13401 5 12V19\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M5 19C6.65685 19 8 19.3807 8 18C8 17.7095 8.10932 15.3642 8 15C7.58972 13.6331 6.30827 14 5 14\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M19.0486 14.0033C17.3917 14.0033 16.0486 13.6226 16.0486 15.0033C16.0486 15.2938 15.9393 17.6391 16.0486 18.0033C16.4589 19.3702 17.7403 19.0033 19.0486 19.0033\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path>\",\"heart\":\"<path d=\\\"M12 20C16 16 21 12.5 21 9C21 6.23858 18.5 4.5 16 4.5C15 4.5 13 5 12 7C11 5 9 4.5 8 4.5C5.5 4.5 3 6.23858 3 9C3 12.5 8 16 12 20Z\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path>\",\"help-circle\":\"<circle cx=\\\"12\\\" cy=\\\"12\\\" r=\\\"10\\\" transform=\\\"rotate(-180 12 12)\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></circle><path d=\\\"M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><line x1=\\\"12\\\" y1=\\\"13\\\" x2=\\\"12\\\" y2=\\\"14\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></line><path d=\\\"M12 17L12 17.01\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path>\",\"hicon\":\"<circle cx=\\\"12\\\" cy=\\\"12\\\" r=\\\"9\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></circle><circle cx=\\\"16.366\\\" cy=\\\"4.36603\\\" r=\\\"1\\\" transform=\\\"rotate(30 16.366 4.36603)\\\" fill=\\\"#333333\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></circle><path d=\\\"M12 10L12 14\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path>\",\"high-performance\":\"<path d=\\\"M12 7C7.02944 7 3 11.0294 3 16H21C21 11.0294 16.9706 7 12 7Z\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><line x1=\\\"12\\\" y1=\\\"15.5858\\\" x2=\\\"14.5858\\\" y2=\\\"13\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></line><line x1=\\\"18\\\" y1=\\\"10.5858\\\" x2=\\\"18.5858\\\" y2=\\\"10\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></line><line x1=\\\"20\\\" y1=\\\"15\\\" x2=\\\"20.8284\\\" y2=\\\"15\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></line><path d=\\\"M3.5 15L3.82843 15\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><line x1=\\\"1\\\" y1=\\\"-1\\\" x2=\\\"1.82843\\\" y2=\\\"-1\\\" transform=\\\"matrix(0.707107 0.707107 0.707107 -0.707107 6 8)\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></line><line x1=\\\"12\\\" y1=\\\"7.82837\\\" x2=\\\"12\\\" y2=\\\"6.99994\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></line>\",\"home\":\"<path d=\\\"M4 8.65714L12 3L20 8.65714V21H4V8.65714Z\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path>\",\"inbox\":\"<path d=\\\"M2 12H7.5L8.6094 13.6641C9.1658 14.4987 10.1025 15 11.1056 15H12H12.8944C13.8975 15 14.8342 14.4987 15.3906 13.6641L16.5 12H22V18.5C22 19.0523 21.5523 19.5 21 19.5H3C2.44772 19.5 2 19.0523 2 18.5L2 12Z\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M22 12L19.4867 5.29775C19.1939 4.51715 18.4477 4 17.614 4H6.386C5.55231 4 4.80607 4.51715 4.51334 5.29775L2 12\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path>\",\"info\":\"<circle cx=\\\"12\\\" cy=\\\"12\\\" r=\\\"10\\\" transform=\\\"rotate(-180 12 12)\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></circle><line x1=\\\"12\\\" y1=\\\"17\\\" x2=\\\"12\\\" y2=\\\"11\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></line><path d=\\\"M12 7L12 7.01\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path>\",\"instagram\":\"<rect x=\\\"2\\\" y=\\\"2\\\" width=\\\"20\\\" height=\\\"20\\\" rx=\\\"5\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></rect><circle cx=\\\"12\\\" cy=\\\"12\\\" r=\\\"4\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></circle><path d=\\\"M18 6L18 6.01\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path>\",\"intersex\":\"<path d=\\\"M10.5 17.5L10.5 22.5\\\" stroke=\\\"#333333\\\" stroke-width=\\\"1.9091\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M13 20.5L8 20.5\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M16.4091 11.5C16.4091 13.0732 15.7761 14.4966 14.7487 15.5327C14.3645 15.9201 13.9256 16.2528 13.4448 16.5182C12.6265 16.9699 11.6856 17.2273 10.6818 17.2273C7.51874 17.2273 4.95455 14.6631 4.95455 11.5C4.95455 8.33692 7.51874 5.77272 10.6818 5.77272C13.8449 5.77272 16.4091 8.33692 16.4091 11.5Z\\\" stroke=\\\"#333333\\\" stroke-width=\\\"1.9091\\\"></path><path d=\\\"M15.4205 7.20453L19.9207 2.70434\\\" stroke=\\\"#333333\\\" stroke-width=\\\"1.9091\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M19.9208 6.01135L19.9208 2.70435\\\" stroke=\\\"#333333\\\" stroke-width=\\\"1.9091\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M16.5798 2.67046L19.9207 2.67047\\\" stroke=\\\"#333333\\\" stroke-width=\\\"1.9091\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path>\",\"italic\":\"<path d=\\\"M18.5 5H14.5M10.5 5L14.5 5M10 20L14.5 5\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M14 20H6\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path>\",\"key\":\"<circle cx=\\\"8\\\" cy=\\\"15\\\" r=\\\"3\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></circle><path d=\\\"M10 12.5858L17.0858 5.5\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><line x1=\\\"16.9142\\\" y1=\\\"7\\\" x2=\\\"18\\\" y2=\\\"8.08579\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></line><line x1=\\\"14.4142\\\" y1=\\\"9.5\\\" x2=\\\"15.5\\\" y2=\\\"10.5858\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></line>\",\"knife\":\"<path d=\\\"M11.5 3H12V12H9L11.5 3Z\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M12 11.5V20.5\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path>\",\"label-empty\":\"<path d=\\\"M7.19549 8H21V16H7.19549L3 12L7.19549 8Z\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M7 11.995L7 12.005\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path>\",\"label-full\":\"<path d=\\\"M7.19549 8H21V16H7.19549L3 12L7.19549 8Z\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M7 12L7 12.01\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><line x1=\\\"11\\\" y1=\\\"12\\\" x2=\\\"17\\\" y2=\\\"12\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></line>\",\"latte\":\"<path d=\\\"M6 9H18L17.524 11.8561L16.6907 16.8559L16 21H8L7.30932 16.8559L6.47602 11.8561L6 9Z\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><rect x=\\\"5\\\" y=\\\"6\\\" width=\\\"14\\\" height=\\\"3\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></rect><rect x=\\\"8\\\" y=\\\"3\\\" width=\\\"8\\\" height=\\\"3\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></rect>\",\"layers\":\"<path d=\\\"M3 13L12.2093 16L21 13\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M3 16L12.2093 19L21 16\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M3 9.7999L12.2093 7L21 9.7999L12.2093 13L3 9.7999Z\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path>\",\"layout\":\"<rect width=\\\"18\\\" height=\\\"18\\\" rx=\\\"3\\\" transform=\\\"matrix(1.39071e-07 1 1 -1.39071e-07 3 3)\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></rect><line x1=\\\"1\\\" y1=\\\"-1\\\" x2=\\\"17\\\" y2=\\\"-1\\\" transform=\\\"matrix(1 -1.82782e-07 -1.82782e-07 -1 3 8)\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></line><line x1=\\\"9\\\" y1=\\\"9\\\" x2=\\\"9\\\" y2=\\\"20\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></line>\",\"lens\":\"<path d=\\\"M19.9604 11.4802C19.9604 13.8094 19.0227 15.9176 17.5019 17.4512C16.9332 18.0247 16.2834 18.5173 15.5716 18.9102C14.3594 19.5793 12.9658 19.9604 11.4802 19.9604C6.79672 19.9604 3 16.1637 3 11.4802C3 6.79672 6.79672 3 11.4802 3C16.1637 3 19.9604 6.79672 19.9604 11.4802Z\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\"></path><path d=\\\"M18.1553 18.1553L21.8871 21.8871\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\"></path>\",\"link-2\":\"<path d=\\\"M7.29175 11.5751H17.1628\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M10.8793 9.55634C10.4983 9.21065 9.99259 9 9.43765 9H5.57506C4.15289 9 3 10.1529 3 11.5751C3 12.9972 4.15289 14.1501 5.57506 14.1501H9.43765C9.99259 14.1501 10.4983 13.9395 10.8793 13.5938\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M13.3002 13.5938C13.6812 13.9395 14.1869 14.1501 14.7419 14.1501L18.6044 14.1501C20.0266 14.1501 21.1795 12.9973 21.1795 11.5751C21.1795 10.1529 20.0266 9.00002 18.6044 9.00002L14.7419 9.00002C14.1869 9.00002 13.6812 9.21067 13.3002 9.55637\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path>\",\"link\":\"<path d=\\\"M17.143 12.4433L17.8787 13.179C19.0503 14.3506 19.0503 16.25 17.8787 17.4216L17.4216 17.8787C16.25 19.0503 14.3506 19.0503 13.179 17.8787L9.86485 14.5646C8.69328 13.393 8.69328 11.4935 9.86485 10.3219L10.0934 10.0934\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M6.32578 11.0255L5.59006 10.2898C4.41849 9.1182 4.41849 7.2187 5.59006 6.04713L6.04716 5.59003C7.21873 4.41846 9.11823 4.41846 10.2898 5.59003L13.6039 8.90416C14.7755 10.0757 14.7755 11.9752 13.6039 13.1468L13.3754 13.3754\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path>\",\"linkedin\":\"<path d=\\\"M18 22V15C18 13.8954 17.1046 13 16 13C14.8954 13 14 13.8954 14 15V22H10\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M10 22V15C10 11.6863 12.6863 9 16 9C19.3137 9 22 11.6863 22 15V22H18\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><rect x=\\\"3\\\" y=\\\"9\\\" width=\\\"4\\\" height=\\\"13\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></rect><circle cx=\\\"5\\\" cy=\\\"4\\\" r=\\\"2\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></circle>\",\"list\":\"<line x1=\\\"20\\\" y1=\\\"7\\\" x2=\\\"8\\\" y2=\\\"7\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></line><line x1=\\\"20\\\" y1=\\\"12\\\" x2=\\\"8\\\" y2=\\\"12\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></line><line x1=\\\"20\\\" y1=\\\"17\\\" x2=\\\"8\\\" y2=\\\"17\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></line><path d=\\\"M4 7L4 7.01\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M4 12L4 12.01\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M4 17L4 17.01\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path>\",\"loader-1\":\"<line x1=\\\"20.4282\\\" y1=\\\"12.2143\\\" x2=\\\"18.4998\\\" y2=\\\"12.2143\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></line><line x1=\\\"5.50021\\\" y1=\\\"12.2143\\\" x2=\\\"3.5718\\\" y2=\\\"12.2143\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></line><line x1=\\\"12.2143\\\" y1=\\\"3.57178\\\" x2=\\\"12.2143\\\" y2=\\\"5.50019\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></line><line x1=\\\"12.2143\\\" y1=\\\"18.4998\\\" x2=\\\"12.2143\\\" y2=\\\"20.4282\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></line><line x1=\\\"6.19197\\\" y1=\\\"5.88867\\\" x2=\\\"7.55556\\\" y2=\\\"7.25227\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></line><line x1=\\\"16.7476\\\" y1=\\\"16.4444\\\" x2=\\\"18.1112\\\" y2=\\\"17.808\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></line><line x1=\\\"5.88884\\\" y1=\\\"17.8077\\\" x2=\\\"7.25243\\\" y2=\\\"16.4441\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></line><line x1=\\\"16.4445\\\" y1=\\\"7.25223\\\" x2=\\\"17.8081\\\" y2=\\\"5.88864\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></line>\",\"locked\":\"<rect x=\\\"5.73685\\\" y=\\\"12.0526\\\" width=\\\"12.5263\\\" height=\\\"8.94737\\\" rx=\\\"2\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></rect><path d=\\\"M7.52631 12.0526V8.47368C7.52631 6.00294 9.52924 4 12 4C14.4707 4 16.4737 6.00294 16.4737 8.47368V12.0526\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path>\",\"login\":\"<path d=\\\"M9 4L6 4L6 20L9 20\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M18 12L10 12\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M12.5 9L10 12\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M12.5 15L10 12\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path>\",\"logout\":\"<path d=\\\"M9 4L6 4L6 20L9 20\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M10 12L18 12\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M15.5 9L18 12\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M15.5 15L18 12\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path>\",\"low-performance\":\"<path d=\\\"M12 7C7.02944 7 3 11.0294 3 16H21C21 11.0294 16.9706 7 12 7Z\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><line x1=\\\"1\\\" y1=\\\"-1\\\" x2=\\\"4.65685\\\" y2=\\\"-1\\\" transform=\\\"matrix(-0.707107 -0.707107 -0.707107 0.707107 12 17.0168)\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></line><line x1=\\\"18\\\" y1=\\\"10.5858\\\" x2=\\\"18.5858\\\" y2=\\\"10\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></line><line x1=\\\"20\\\" y1=\\\"15\\\" x2=\\\"20.8284\\\" y2=\\\"15\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></line><path d=\\\"M3.5 15H3.82843\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><line x1=\\\"1\\\" y1=\\\"-1\\\" x2=\\\"1.82843\\\" y2=\\\"-1\\\" transform=\\\"matrix(0.707107 0.707107 0.707107 -0.707107 6 8)\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></line><line x1=\\\"12\\\" y1=\\\"7.82837\\\" x2=\\\"12\\\" y2=\\\"6.99994\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></line>\",\"male\":\"<path d=\\\"M16.4091 13.5C16.4091 15.0732 15.7761 16.4966 14.7487 17.5327C14.3645 17.9201 13.9256 18.2528 13.4448 18.5182C12.6265 18.9699 11.6856 19.2273 10.6818 19.2273C7.51874 19.2273 4.95455 16.6631 4.95455 13.5C4.95455 10.3369 7.51874 7.77272 10.6818 7.77272C13.8449 7.77272 16.4091 10.3369 16.4091 13.5Z\\\" stroke=\\\"#333333\\\" stroke-width=\\\"1.9091\\\"></path><path d=\\\"M15.4205 9.20453L19.9207 4.70434\\\" stroke=\\\"#333333\\\" stroke-width=\\\"1.9091\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M19.9208 8.01135L19.9208 4.70435\\\" stroke=\\\"#333333\\\" stroke-width=\\\"1.9091\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M16.5798 4.67046L19.9207 4.67047\\\" stroke=\\\"#333333\\\" stroke-width=\\\"1.9091\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path>\",\"map-pin\":\"<path d=\\\"M12 4C10.9232 4 9.90314 4.24315 8.99181 4.67753C4.36697 6.88194 6.63951 13.225 9.67866 17.3496L12 20.5L14.3213 17.3496C17.3605 13.225 19.633 6.88194 15.0082 4.67753C14.0969 4.24315 13.0768 4 12 4Z\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><circle cx=\\\"12\\\" cy=\\\"10\\\" r=\\\"1\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></circle>\",\"map\":\"<path d=\\\"M3 5L9 6.5V20.5L3 19V5Z\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M14.5 5L20.5 6.5V20.5L14.5 19V5Z\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M14.5 5L9 6.5V20.5L14.5 19V5Z\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path>\",\"maximise-1\":\"<path d=\\\"M18.7782 5.12128L13.1213 10.7781\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M18.7782 5.12128L19.1317 9.01036\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M18.7782 5.12128L14.8891 4.76772\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M5.12132 18.7781L10.7782 13.1213\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M5.12132 18.7781L4.76777 14.8891\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M5.12132 18.7781L9.01041 19.1317\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path>\",\"maximise\":\"<path d=\\\"M16 20H18C19.1046 20 20 19.1046 20 18V16\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M8 4H6C4.89543 4 4 4.89543 4 6V8\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M8 20H6C4.89543 20 4 19.1046 4 18V16\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M16 4H18C19.1046 4 20 4.89543 20 6V8\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path>\",\"medium-performance\":\"<path d=\\\"M12 7C7.02944 7 3 11.0294 3 16H21C21 11.0294 16.9706 7 12 7Z\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><line x1=\\\"12\\\" y1=\\\"15.6567\\\" x2=\\\"12\\\" y2=\\\"11.9999\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></line><line x1=\\\"18\\\" y1=\\\"10.5858\\\" x2=\\\"18.5858\\\" y2=\\\"10\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></line><line x1=\\\"20\\\" y1=\\\"15\\\" x2=\\\"20.8284\\\" y2=\\\"15\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></line><path d=\\\"M3.5 15H3.82843\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><line x1=\\\"1\\\" y1=\\\"-1\\\" x2=\\\"1.82843\\\" y2=\\\"-1\\\" transform=\\\"matrix(0.707107 0.707107 0.707107 -0.707107 6 8)\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></line><line x1=\\\"12\\\" y1=\\\"7.82837\\\" x2=\\\"12\\\" y2=\\\"6.99994\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></line>\",\"menu\":\"<line x1=\\\"5\\\" y1=\\\"18\\\" x2=\\\"19\\\" y2=\\\"18\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></line><line x1=\\\"5\\\" y1=\\\"13\\\" x2=\\\"19\\\" y2=\\\"13\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></line><line x1=\\\"5\\\" y1=\\\"8\\\" x2=\\\"19\\\" y2=\\\"8\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></line>\",\"message-empty-bubble\":\"<path d=\\\"M3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C10.5124 21 9.10904 20.6391 7.8728 20C7.10187 19.6015 4.12089 21.5948 3.5 21C2.88698 20.4128 4.6319 17.2397 4.20404 16.5C3.43827 15.1762 3 13.6393 3 12Z\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path>\",\"message-empty-circle\":\"<path d=\\\"M3 9.08861C3 5.72597 5.72596 3 9.08861 3H15.1892C18.3984 3 21 5.60159 21 8.81081C21 12.02 18.3984 14.6216 15.1892 14.6216H9.21544C8.80354 14.6216 8.40975 14.7908 8.12626 15.0897L8.85172 15.7779L8.12626 15.0897L4.72547 18.6743C4.10352 19.3298 3 18.8897 3 17.986V15.6216V9.08861Z\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path>\",\"message-empty-square\":\"<path d=\\\"M3 4C3 3.44772 3.44772 3 4 3H20C20.5523 3 21 3.44772 21 4V13.6216C21 14.1739 20.5523 14.6216 20 14.6216H9.85942C9.03639 14.6216 8.24949 14.9598 7.68303 15.5568L4.72547 18.6743C4.10352 19.3298 3 18.8897 3 17.986V15.6216V4Z\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path>\",\"message-full-bubble\":\"<path d=\\\"M3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C10.5124 21 9.10904 20.6391 7.8728 20C7.10187 19.6015 4.12089 21.5948 3.5 21C2.88698 20.4128 4.6319 17.2397 4.20404 16.5C3.43827 15.1762 3 13.6393 3 12Z\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><line x1=\\\"8\\\" y1=\\\"14\\\" x2=\\\"16\\\" y2=\\\"14\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></line><line x1=\\\"8\\\" y1=\\\"10\\\" x2=\\\"16\\\" y2=\\\"10\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></line>\",\"message-full-square-1\":\"<path d=\\\"M3 9.08861C3 5.72597 5.72596 3 9.08861 3H15.1892C18.3984 3 21 5.60159 21 8.81081C21 12.02 18.3984 14.6216 15.1892 14.6216H9.21544C8.80354 14.6216 8.40975 14.7908 8.12626 15.0897L8.85172 15.7779L8.12626 15.0897L4.72547 18.6743C4.10352 19.3298 3 18.8897 3 17.986V15.6216V9.08861Z\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><line x1=\\\"8\\\" y1=\\\"10\\\" x2=\\\"16\\\" y2=\\\"10\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></line><line x1=\\\"8\\\" y1=\\\"7\\\" x2=\\\"16\\\" y2=\\\"7\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></line>\",\"message-full-square\":\"<path d=\\\"M3 4C3 3.44772 3.44772 3 4 3H20C20.5523 3 21 3.44772 21 4V13.6216C21 14.1739 20.5523 14.6216 20 14.6216H9.85942C9.03639 14.6216 8.24949 14.9598 7.68303 15.5568L4.72547 18.6743L5.41775 19.3311L4.72547 18.6743C4.10352 19.3298 3 18.8897 3 17.986V15.6216V4Z\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><line x1=\\\"8\\\" y1=\\\"10\\\" x2=\\\"16\\\" y2=\\\"10\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></line><line x1=\\\"8\\\" y1=\\\"7\\\" x2=\\\"16\\\" y2=\\\"7\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></line>\",\"mic-off\":\"<path d=\\\"M9.40135 12.5C9.63354 12.9014 9.95606 13.244 10.3411 13.5M9.17071 4C9.58254 2.83481 10.6938 2 12 2C13.6569 2 15 3.34315 15 5L15 10.5\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M6 11C6 14.3137 8.68629 17 12 17C12.4675 17 12.9225 16.9465 13.3592 16.8454M18 11C18 11.854 17.8216 12.6663 17.5 13.4017\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><line x1=\\\"12\\\" y1=\\\"18\\\" x2=\\\"12\\\" y2=\\\"20\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></line><line x1=\\\"10\\\" y1=\\\"21\\\" x2=\\\"14\\\" y2=\\\"21\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></line><line x1=\\\"2.4137\\\" y1=\\\"2.03821\\\" x2=\\\"19.0382\\\" y2=\\\"19.5863\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\"></line>\",\"mic\":\"<path d=\\\"M9 5C9 3.34315 10.3431 2 12 2C13.6569 2 15 3.34315 15 5V11C15 12.6569 13.6569 14 12 14C10.3431 14 9 12.6569 9 11V5Z\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M6 11C6 14.3137 8.68629 17 12 17C15.3137 17 18 14.3137 18 11\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><line x1=\\\"12\\\" y1=\\\"18\\\" x2=\\\"12\\\" y2=\\\"20\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></line><line x1=\\\"10\\\" y1=\\\"21\\\" x2=\\\"14\\\" y2=\\\"21\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></line>\",\"microphone\":\"<circle cx=\\\"16.5649\\\" cy=\\\"8\\\" r=\\\"3\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></circle><path d=\\\"M13.5649 8L6.06491 16.5L7.15688 17.7218L8.06491 18.5L16.5649 11\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M5 19.5L7 17.5\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path>\",\"minimise-1\":\"<path d=\\\"M13.1213 10.7782L18.7782 5.12134\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M13.1213 10.7782L12.7678 6.88911\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M13.1213 10.7782L17.0104 11.1318\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M10.7782 13.1213L5.12131 18.7781\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M10.7782 13.1213L11.1317 17.0104\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M10.7782 13.1213L6.88908 12.7677\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path>\",\"minimise\":\"<path d=\\\"M20 16H18C16.8954 16 16 16.8954 16 18V20\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M4 8H6C7.10457 8 8 7.10457 8 6V4\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M4 16H6C7.10457 16 8 16.8954 8 18V20\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M20 8H18C16.8954 8 16 7.10457 16 6V4\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path>\",\"minus-circle\":\"<path d=\\\"M7.75735 12L16.2426 12\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\"></path><rect x=\\\"3\\\" y=\\\"3\\\" width=\\\"18\\\" height=\\\"18\\\" rx=\\\"9\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></rect>\",\"minus-square\":\"<path d=\\\"M7.75735 12L16.2426 12\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\"></path><rect x=\\\"3\\\" y=\\\"3\\\" width=\\\"18\\\" height=\\\"18\\\" rx=\\\"3\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></rect>\",\"minus\":\"<path d=\\\"M6 12H18\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path>\",\"moon\":\"<path d=\\\"M12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19C15.171 19 18.1395 17.1814 19 14.2899\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M19 14C18.8319 14 18.6652 13.9941 18.5 13.9824C12.5 15 9.50001 11.5 12 5\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path>\",\"more-horizontal\":\"<path d=\\\"M17.005 11.995L17.005 12.005\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M12.005 11.995L12.005 12.005\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M7.005 11.995L7.005 12.005\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path>\",\"more-vertical\":\"<path d=\\\"M12 7H12.01\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M12 12H12.01\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M12 17H12.01\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path>\",\"mouse-pointer\":\"<path d=\\\"M7.53554 7.53554L17.435 10.364L10.364 17.435L7.53554 7.53554Z\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><line x1=\\\"13.8995\\\" y1=\\\"13.8994\\\" x2=\\\"16.7279\\\" y2=\\\"16.7279\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></line>\",\"move-horizontally\":\"<line x1=\\\"4.5\\\" y1=\\\"12.5\\\" x2=\\\"19.5\\\" y2=\\\"12.5\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></line><path d=\\\"M3.5 12.5L6 9.5\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M3.5 12.5L6 15.5\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M20 12.5L17.5 15.5\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M20 12.5L17.5 9.5\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path>\",\"move-vertically\":\"<line x1=\\\"12\\\" y1=\\\"20\\\" x2=\\\"12\\\" y2=\\\"5\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></line><path d=\\\"M12 21L9 18.5\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M12 21L15 18.5\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M12 4.5L15 7\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M12 4.5L9 7\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path>\",\"move\":\"<line x1=\\\"12\\\" y1=\\\"5\\\" x2=\\\"12\\\" y2=\\\"20\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></line><path d=\\\"M12 4L15 6.5\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M12 4L9 6.5\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M12 20.5L9 18\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M12 20.5L15 18\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><line x1=\\\"4.5\\\" y1=\\\"12.5\\\" x2=\\\"19.5\\\" y2=\\\"12.5\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></line><path d=\\\"M3.5 12.5L6 9.5\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M3.5 12.5L6 15.5\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M20 12.5L17.5 15.5\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M20 12.5L17.5 9.5\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path>\",\"movie\":\"<rect width=\\\"18\\\" height=\\\"18\\\" rx=\\\"3\\\" transform=\\\"matrix(1.39071e-07 1 1 -1.39071e-07 3 3)\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></rect><line x1=\\\"7\\\" y1=\\\"4\\\" x2=\\\"7\\\" y2=\\\"20\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></line><line x1=\\\"6\\\" y1=\\\"8\\\" x2=\\\"3\\\" y2=\\\"8\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></line><line x1=\\\"21\\\" y1=\\\"8\\\" x2=\\\"18\\\" y2=\\\"8\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></line><line x1=\\\"6\\\" y1=\\\"16\\\" x2=\\\"3\\\" y2=\\\"16\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></line><line x1=\\\"21\\\" y1=\\\"16\\\" x2=\\\"18\\\" y2=\\\"16\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></line><line x1=\\\"17\\\" y1=\\\"4\\\" x2=\\\"17\\\" y2=\\\"20\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></line><path d=\\\"M21 12L3 12\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\"></path>\",\"music\":\"<path d=\\\"M9 6L19 3.99999\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M19 17L19 4\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M9 17L9 6\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M9 17C9 18.1046 8.10457 19 7 19C5.89543 19 5 18.1046 5 17C5 15.8954 5.89543 15 7 15C7.59735 15 8.13353 15.2619 8.5 15.6771C8.81118 16.0297 9 16.4928 9 17Z\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M19 17C19 18.1046 18.1046 19 17 19C15.8954 19 15 18.1046 15 17C15 15.8954 15.8954 15 17 15C17.5973 15 18.1335 15.2619 18.5 15.6771C18.8112 16.0297 19 16.4928 19 17Z\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path>\",\"navigator-2\":\"<path d=\\\"M16.3185 7.68152L11.6084 17.4L10.8017 13.1983L6.60001 12.3916L16.3185 7.68152Z\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><rect x=\\\"3\\\" y=\\\"3\\\" width=\\\"18\\\" height=\\\"18\\\" rx=\\\"9\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></rect>\",\"navigator-3\":\"<path d=\\\"M11.5731 3L18 21L11.5172 16.7461L5 20.9513L11.5731 3Z\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path>\",\"navigator\":\"<path d=\\\"M20 4L12.2455 20L10.9174 13.0826L4 11.7545L20 4Z\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path>\",\"option\":\"<path d=\\\"M17 7L14 7\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M7 7L11 7L13 17L17 17\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path>\",\"package\":\"<path d=\\\"M12 11.2857L22 7V17.7143L12 22V11.2857Z\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M12 11.2857L2 7V17.7143L12 22V11.2857Z\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M12 3L2 7\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M12 3L22 7\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><line x1=\\\"16.6986\\\" y1=\\\"8.83824\\\" x2=\\\"7.6928\\\" y2=\\\"4.83564\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></line>\",\"paperclip\":\"<path d=\\\"M4.64711 12.8228L13.8472 4.29107C15.2117 3.02572 17.3354 3.09724 18.5906 4.4508C19.8459 5.80437 19.7573 7.92743 18.3928 9.19278L9.92211 17.048\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M9.92211 17.0481C9.11641 17.7953 7.95449 17.8523 7.32687 17.1756C6.69926 16.4988 6.84362 15.3444 7.64932 14.5973L14.9435 7.83302\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M4.75131 12.7262C2.67952 14.6475 2.52635 17.8509 4.40919 19.8812C6.29203 21.9116 9.49789 22 11.5697 20.0788L20.5 12\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path>\",\"partially-sunny\":\"<path d=\\\"M9 17C9 13.6863 11.6863 11 15 11C18.3137 11 21 13.6863 21 17C21 19.2208 19.7934 20.9626 18 22\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M8.30379 15.5C7.77702 15.1826 7.15983 15 6.5 15C4.567 15 3 16.567 3 18.5C3 20.433 4.567 22 6.5 22H18\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M8 11C8 8.79086 9.79086 7 12 7C13.0144 7 13.9407 7.37764 14.6458 8\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><line x1=\\\"12\\\" y1=\\\"4\\\" x2=\\\"12\\\" y2=\\\"2\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></line><line x1=\\\"12\\\" y1=\\\"4\\\" x2=\\\"12\\\" y2=\\\"2\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></line><line x1=\\\"5\\\" y1=\\\"11\\\" x2=\\\"3\\\" y2=\\\"11\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></line><line x1=\\\"19.071\\\" y1=\\\"4.34317\\\" x2=\\\"17.6568\\\" y2=\\\"5.75738\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></line><line x1=\\\"5.41421\\\" y1=\\\"5\\\" x2=\\\"6.82843\\\" y2=\\\"6.41421\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></line>\",\"pause\":\"<rect x=\\\"4\\\" y=\\\"4\\\" width=\\\"6\\\" height=\\\"16\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></rect><rect x=\\\"14\\\" y=\\\"4\\\" width=\\\"6\\\" height=\\\"16\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></rect>\",\"pen-tool\":\"<g clip-path=\\\"url(#clip0)\\\"><path d=\\\"M14.4153 18.6964L7.88293 19.2352L3.80865 3.84719L19.1966 7.92147L18.3043 14.8073\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><rect x=\\\"13.7081\\\" y=\\\"19.4036\\\" width=\\\"7.22447\\\" height=\\\"3\\\" transform=\\\"rotate(-45 13.7081 19.4036)\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></rect><line x1=\\\"5.92996\\\" y1=\\\"5.96852\\\" x2=\\\"10.8797\\\" y2=\\\"10.9183\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></line><circle cx=\\\"12.2939\\\" cy=\\\"12.3325\\\" r=\\\"2\\\" transform=\\\"rotate(-45 12.2939 12.3325)\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></circle></g><defs><clippath id=\\\"clip0\\\"><rect width=\\\"24\\\" height=\\\"24\\\" fill=\\\"white\\\"></rect></clippath></defs>\",\"percent\":\"<path d=\\\"M20.2534 4.66084L4.91424 20\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\"></path><circle cx=\\\"6\\\" cy=\\\"7\\\" r=\\\"2\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></circle><circle cx=\\\"18\\\" cy=\\\"17\\\" r=\\\"2\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></circle>\",\"phone-forwarded\":\"<path d=\\\"M20.4799 19.77L21.7373 16.9317C21.9833 16.3764 21.7614 15.7234 21.2279 15.4327L19.3651 14.4175C18.9042 14.1664 17.1263 13.3319 16.6465 13.5411L13.9204 15.127L13.3736 14.7875C12.1974 14.0466 10.6879 13.0862 9.60153 12.0241C9.15724 11.5898 9.09915 10.9165 9.37701 10.3607L10.2857 8.54342C10.4484 8.15591 9.57753 6.17005 8.96968 4.93854C8.6749 4.3413 8.06883 4 7.4028 4L3.92489 4C2.73571 4 1.83116 5.0678 2.02666 6.2408L2.10753 6.72602C3.6327 13.3965 9.54455 18.0951 16.6308 20.2834C18.0169 20.7114 19.8923 21.0964 20.4799 19.77Z\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M19.3333 6L14 6\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M19.3333 6L17.6667 4\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M19.3333 6L17.6667 8\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path>\",\"phone-incoming\":\"<path d=\\\"M20.4799 19.77L21.7373 16.9317C21.9833 16.3764 21.7614 15.7234 21.2279 15.4327L19.3651 14.4175C18.9042 14.1664 17.1263 13.3319 16.6465 13.5411L13.9204 15.127L13.3736 14.7875C12.1974 14.0466 10.6879 13.0862 9.60153 12.0241C9.15724 11.5898 9.09915 10.9165 9.37701 10.3607L10.2857 8.54342C10.4484 8.15591 9.57753 6.17005 8.96968 4.93854C8.6749 4.3413 8.06883 4 7.4028 4L3.92489 4C2.73571 4 1.83116 5.0678 2.02666 6.2408L2.10753 6.72602C3.6327 13.3965 9.54455 18.0951 16.6308 20.2834C18.0169 20.7114 19.8923 21.0964 20.4799 19.77Z\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M14 6L19.3333 6\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M14 6L15.6667 8\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M14 6L15.6667 4\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path>\",\"phone-missed\":\"<path d=\\\"M20.4799 19.77L21.7373 16.9317C21.9833 16.3764 21.7614 15.7234 21.2279 15.4327L19.3651 14.4175C18.9042 14.1664 17.1263 13.3319 16.6465 13.5411L13.9204 15.127L13.3736 14.7875C12.1974 14.0466 10.6879 13.0862 9.60153 12.0241C9.15724 11.5898 9.09915 10.9165 9.37701 10.3607L10.2857 8.54342C10.4484 8.15591 9.57753 6.17005 8.96968 4.93854C8.6749 4.3413 8.06883 4 7.4028 4L3.92489 4C2.73571 4 1.83116 5.0678 2.02666 6.2408L2.10753 6.72602C3.6327 13.3965 9.54455 18.0951 16.6308 20.2834C18.0169 20.7114 19.8923 21.0964 20.4799 19.77Z\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M14.659 7.591L17.841 4.40902\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M17.841 7.591L14.659 4.40902\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path>\",\"phone-off\":\"<path d=\\\"M13.9204 15.127L16.6465 13.5411C17.1263 13.3319 18.9042 14.1664 19.3651 14.4175L21.2279 15.4327C21.7614 15.7234 21.9833 16.3764 21.7373 16.9317L20.4799 19.77C19.8923 21.0964 18.0169 20.7114 16.6308 20.2834C15.0133 19.7839 13.4569 19.1536 12 18.3989M9.37701 10.3607L10.2857 8.54342C10.4484 8.15591 9.57753 6.17005 8.96968 4.93854C8.6749 4.3413 8.06883 4 7.4028 4L3.92489 4C2.73571 4 1.83116 5.0678 2.02666 6.2408L2.10753 6.72602C2.74321 9.50623 4.14092 11.9439 6.06808 14\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><line x1=\\\"20.2534\\\" y1=\\\"4.66086\\\" x2=\\\"3.16084\\\" y2=\\\"21.7534\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\"></line>\",\"phone-ring\":\"<path d=\\\"M20.4799 19.77L21.7373 16.9317C21.9833 16.3764 21.7614 15.7234 21.2279 15.4327L19.3651 14.4175C18.9042 14.1664 17.1263 13.3319 16.6465 13.5411L13.9204 15.127L13.3736 14.7875C12.1974 14.0466 10.6879 13.0862 9.60153 12.0241C9.15724 11.5898 9.09915 10.9165 9.37701 10.3607L10.2857 8.54342C10.4484 8.15591 9.57753 6.17005 8.96968 4.93854C8.6749 4.3413 8.06883 4 7.4028 4L3.92489 4C2.73571 4 1.83116 5.0678 2.02666 6.2408L2.10753 6.72602C3.6327 13.3965 9.54455 18.0951 16.6308 20.2834C18.0169 20.7114 19.8923 21.0964 20.4799 19.77Z\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M17.7194 9.75747C18.1945 8.68553 18.0727 7.42417 17.2958 6.50845C16.519 5.59273 15.2943 5.26697 14.1593 5.56101\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M14.5233 2.58351C16.243 2.4283 18.0088 3.08409 19.2107 4.50081C20.4126 5.91753 20.7719 7.76665 20.3385 9.43803\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path>\",\"phone\":\"<path d=\\\"M20.4799 19.77L21.7373 16.9317C21.9833 16.3764 21.7614 15.7234 21.2279 15.4327L19.3651 14.4175C18.9042 14.1664 17.1263 13.3319 16.6465 13.5411L13.9204 15.127L13.3736 14.7875C12.1974 14.0466 10.6879 13.0862 9.60153 12.0241C9.15724 11.5898 9.09915 10.9165 9.37701 10.3607L10.2857 8.54342C10.4484 8.15591 9.57753 6.17005 8.96968 4.93854C8.6749 4.3413 8.06883 4 7.4028 4L3.92489 4C2.73571 4 1.83116 5.0678 2.02666 6.2408L2.10753 6.72602C3.6327 13.3965 9.54455 18.0951 16.6308 20.2834C18.0169 20.7114 19.8923 21.0964 20.4799 19.77Z\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path>\",\"picture\":\"<path d=\\\"M7.5 20H21V14M7.5 20H3V4H21V14M7.5 20C7.66667 17 12.4 8.7 16 9.5C19.6 10.3 19.6667 15.3333 21 14\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><circle cx=\\\"7.5\\\" cy=\\\"8.5\\\" r=\\\"1.5\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></circle>\",\"pie-chart\":\"<path d=\\\"M7.35346 3C4.1736 4.67225 2 8.04849 2 11.9412C2 17.4965 6.42691 22 11.8878 22C15.9848 22 19.4998 19.4651 21 15.8529\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M22 12C22 10.6868 21.7413 9.38642 21.2388 8.17317C20.7362 6.95991 19.9997 5.85752 19.0711 4.92893C18.1425 4.00035 17.0401 3.26375 15.8268 2.7612C14.6136 2.25866 13.3132 2 12 2L12 12H22Z\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path>\",\"play\":\"<path d=\\\"M17.3125 12L7.6875 19L7.6875 5L17.3125 12Z\\\" stroke=\\\"#333333\\\" stroke-width=\\\"1.75\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path>\",\"plus-circle\":\"<path d=\\\"M12 7.75732L12 16.2426\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\"></path><path d=\\\"M7.75735 12L16.2426 12\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\"></path><rect x=\\\"3\\\" y=\\\"3\\\" width=\\\"18\\\" height=\\\"18\\\" rx=\\\"9\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></rect>\",\"plus-square\":\"<path d=\\\"M12 7.75732L12 16.2426\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\"></path><path d=\\\"M7.75735 12L16.2426 12\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\"></path><rect x=\\\"3\\\" y=\\\"3\\\" width=\\\"18\\\" height=\\\"18\\\" rx=\\\"3\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></rect>\",\"plus\":\"<line x1=\\\"12\\\" y1=\\\"6\\\" x2=\\\"12\\\" y2=\\\"18\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\"></line><line x1=\\\"6\\\" y1=\\\"12\\\" x2=\\\"18\\\" y2=\\\"12\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\"></line>\",\"pot\":\"<path d=\\\"M6 8H19V16C19 17.1046 18.1046 18 17 18H8C6.89543 18 6 17.1046 6 16V8Z\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M5 8H20\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M13.3333 6H11.6667L10 8H15L13.3333 6Z\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path>\",\"pound-sign\":\"<path d=\\\"M8.49927 10C9.42538 11.0335 10 12.4741 10 14.0674C10 16.1751 8.4945 18.0154 7 19\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M8.5493 10C8.19995 9.41165 8 8.72857 8 8C8 5.79086 9.83828 4 12.1059 4C13.9172 4 15.4546 5.14261 16 6.72832\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><line x1=\\\"7\\\" y1=\\\"19\\\" x2=\\\"16\\\" y2=\\\"19\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></line><line x1=\\\"8\\\" y1=\\\"13\\\" x2=\\\"14\\\" y2=\\\"13\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></line>\",\"power\":\"<path d=\\\"M8 5.07031C5.60879 6.45355 4 9.03893 4 12.0001C4 16.4183 7.58172 20.0001 12 20.0001C16.4183 20.0001 20 16.4183 20 12.0001C20 9.03893 18.3912 6.45355 16 5.07031\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M12 11L12 3\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path>\",\"printer\":\"<path d=\\\"M6 18H4C3.44772 18 3 17.5523 3 17V11C3 10.4477 3.44772 10 4 10H20C20.5523 10 21 10.4477 21 11V17C21 17.5523 20.5523 18 20 18H18\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><rect x=\\\"6\\\" y=\\\"4\\\" width=\\\"12\\\" height=\\\"6\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></rect><rect x=\\\"6\\\" y=\\\"15\\\" width=\\\"12\\\" height=\\\"7\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></rect>\",\"radio\":\"<circle cx=\\\"12\\\" cy=\\\"12\\\" r=\\\"2\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></circle><path d=\\\"M9.25127 7.82266C7.895 8.71691 7 10.2539 7 12C7 13.746 7.895 15.2831 9.25127 16.1773M14.7487 7.82266C16.105 8.71691 17 10.2539 17 12C17 13.746 16.105 15.2831 14.7487 16.1773\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M7.10215 5.6741C5.21479 7.13752 4 9.4269 4 12C4 14.5628 5.20503 16.8441 7.07938 18.3082M16.9029 5.67799C18.7874 7.14158 20 9.42918 20 12C20 14.5739 18.7845 16.8638 16.8962 18.3272\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path>\",\"refresh-cw-1\":\"<g clip-path=\\\"url(#clip0)\\\"><path d=\\\"M20.9557 14.2522L22.2538 17.8704\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M20.9557 14.2522L17.1628 14.8766\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M20.1621 15.7176C19.4014 17.4246 18.0903 18.9021 16.317 19.8558C12.0616 22.1446 6.75644 20.5503 4.46769 16.2948C3.92598 15.2876 3.60179 14.2216 3.47893 13.1507\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M3.54553 9.7478L2.24741 6.12964\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M3.54553 9.7478L7.33847 9.12342\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M4.3391 8.28241C5.09978 6.57537 6.41095 5.09788 8.1842 4.14416C12.4396 1.8554 17.7448 3.44972 20.0335 7.70517C20.5752 8.71237 20.8994 9.77837 21.0223 10.8493\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path></g><defs><clippath id=\\\"clip0\\\"><rect width=\\\"24\\\" height=\\\"24\\\" fill=\\\"white\\\" transform=\\\"matrix(1 0 0 -1 0 24)\\\"></rect></clippath></defs>\",\"refresh-cw\":\"<g clip-path=\\\"url(#clip0)\\\"><path d=\\\"M20.9557 9.7478L22.2538 6.12964\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M20.9557 9.7478L17.1628 9.12342\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M20.1621 8.28241C19.4014 6.57537 18.0903 5.09788 16.317 4.14416C12.0616 1.8554 6.75644 3.44972 4.46769 7.70517C3.92598 8.71237 3.60179 9.77837 3.47893 10.8493\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M3.54553 14.2522L2.24741 17.8704\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M3.54553 14.2522L7.33847 14.8766\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M4.3391 15.7176C5.09978 17.4246 6.41095 18.9021 8.1842 19.8558C12.4396 22.1446 17.7448 20.5503 20.0335 16.2948C20.5752 15.2876 20.8994 14.2216 21.0223 13.1507\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path></g><defs><clippath id=\\\"clip0\\\"><rect width=\\\"24\\\" height=\\\"24\\\" fill=\\\"white\\\"></rect></clippath></defs>\",\"repeat-1\":\"<path d=\\\"M15.5 12L5.72222 19.1111L5.72222 4.88889L15.5 12Z\\\" stroke=\\\"#333333\\\" stroke-width=\\\"1.77778\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><line x1=\\\"18.1667\\\" y1=\\\"4.88889\\\" x2=\\\"18.1667\\\" y2=\\\"19.1111\\\" stroke=\\\"#333333\\\" stroke-width=\\\"1.77778\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></line>\",\"repeat\":\"<path d=\\\"M21 13V11.6C21 8.50721 18.4928 6 15.4 6H4\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M3 6L6.59998 10\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M3 6L6.59998 2\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M3 11V12.4C3 15.4928 5.50721 18 8.6 18H20\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M21 18L17.4 14\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M21 18L17.4 22\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path>\",\"rewind-x3\":\"<path d=\\\"M12.9167 12.0001L23 19.3334L23 4.66675L12.9167 12.0001Z\\\" stroke=\\\"#333333\\\" stroke-width=\\\"1.83333\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M16.5833 19.3334L6.49998 12.0001L16.5833 4.66675\\\" stroke=\\\"#333333\\\" stroke-width=\\\"1.83333\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M11.0833 19.3334L0.99998 12.0001L11.0833 4.66675\\\" stroke=\\\"#333333\\\" stroke-width=\\\"1.83333\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path>\",\"rewind\":\"<path d=\\\"M10.2222 12L20 19.1111L20 4.88889L10.2222 12Z\\\" stroke=\\\"#333333\\\" stroke-width=\\\"1.77778\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M13.7778 19.1111L3.99999 12L13.7778 4.88889\\\" stroke=\\\"#333333\\\" stroke-width=\\\"1.77778\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path>\",\"rotate-acw\":\"<path d=\\\"M5.06697 5.91046L5.65392 1.99997\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M5.06697 5.91046L8.80751 7.19296\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M3 12.0609C3 17.0314 7.02944 21.0609 12 21.0609C16.9706 21.0609 21 17.0314 21 12.0609C21 7.09029 16.9706 3.06085 12 3.06085C9.92877 3.06085 8.02095 3.76052 6.5 4.9364\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path>\",\"rotate-cw\":\"<path d=\\\"M18.933 5.91052L18.3461 2.00003\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M18.933 5.91052L15.1925 7.19302\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M21 12.0609C21 17.0315 16.9706 21.0609 12 21.0609C7.02944 21.0609 3 17.0315 3 12.0609C3 7.09035 7.02944 3.06091 12 3.06091C14.0712 3.06091 15.9791 3.76058 17.5 4.93646\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path>\",\"rss\":\"<circle cx=\\\"6.08563\\\" cy=\\\"16.0856\\\" r=\\\"0.794731\\\" transform=\\\"rotate(60 6.08563 16.0856)\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></circle><path d=\\\"M12 17C13.0492 15.457 13.2177 13.4473 12.2622 11.7923C11.3066 10.1372 9.48195 9.27837 7.62106 9.41545\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M11.418 4.85722C14.1548 5.10403 16.7328 6.63378 18.2111 9.19432C19.6895 11.7549 19.7252 14.7524 18.5706 17.2459\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path>\",\"save-1\":\"<path d=\\\"M16 20V15C16 14.4477 15.5523 14 15 14H9C8.44772 14 8 14.4477 8 15V20\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M4 18V6C4 4.89543 4.89543 4 6 4H14.2325C14.7266 4 15.2032 4.18289 15.5705 4.51341L19.3379 7.90414C19.7594 8.28342 20 8.82375 20 9.39073V18C20 19.1046 19.1046 20 18 20H6C4.89543 20 4 19.1046 4 18Z\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M14.5 9H9C8.44772 9 8 8.55228 8 8V5\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path>\",\"save\":\"<path d=\\\"M16 20V15C16 14.4477 15.5523 14 15 14H9C8.44772 14 8 14.4477 8 15V20\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M4 18V6C4 4.89543 4.89543 4 6 4H14.2325C14.7266 4 15.2032 4.18289 15.5705 4.51341L19.3379 7.90414C19.7594 8.28342 20 8.82375 20 9.39073V18C20 19.1046 19.1046 20 18 20H6C4.89543 20 4 19.1046 4 18Z\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M14.5 9H9C8.44772 9 8 8.55228 8 8V5\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path>\",\"scissors\":\"<line x1=\\\"20\\\" y1=\\\"4.41421\\\" x2=\\\"8.41421\\\" y2=\\\"16\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></line><path d=\\\"M19.0858 20.5L13.5 14.9142M7.5 8.91421L9.5 10.9142\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><circle cx=\\\"6\\\" cy=\\\"18\\\" r=\\\"3\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></circle><circle cx=\\\"5.5\\\" cy=\\\"6.5\\\" r=\\\"3\\\" transform=\\\"rotate(90 5.5 6.5)\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></circle>\",\"send\":\"<path d=\\\"M19 4L12.854 20L10.5324 12.4676M19 4L3 10.146L10.5324 12.4676M19 4L10.5324 12.4676\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path>\",\"server\":\"<rect x=\\\"3\\\" y=\\\"4\\\" width=\\\"18\\\" height=\\\"7\\\" rx=\\\"2\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></rect><rect x=\\\"3\\\" y=\\\"14\\\" width=\\\"18\\\" height=\\\"7\\\" rx=\\\"2\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></rect><path d=\\\"M6 8L6 8.01\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M6 18L6 18.01\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path>\",\"settings\":\"<circle r=\\\"2\\\" transform=\\\"matrix(-1 0 0 1 12 12)\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></circle><path d=\\\"M20 10C21.1046 10 22 10.8954 22 12C22 13.1046 21.1046 14 20 14\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M4 10C2.89543 10 2 10.8954 2 12C2 13.1046 2.89543 14 4 14\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M17.732 17.9282C18.2843 18.8848 17.9566 20.108 17 20.6603C16.0434 21.2126 14.8202 20.8848 14.2679 19.9282\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M9.73205 4.07178C9.17976 3.11519 7.95658 2.78744 6.99999 3.33973C6.04341 3.89201 5.71566 5.11519 6.26794 6.07178\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M20 13.9999C19 13.9999 17.7484 14.0434 17.1962 15C16.6439 15.9566 17 16.5 17.5 17.5\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M6.50002 6.5C7.00002 7.5 7.35615 8.04343 6.80386 9.00002C6.25158 9.9566 5.00001 10 4.00001 10\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M14.2679 4.07177C14.8202 3.11519 16.0434 2.78744 17 3.33972C17.9566 3.89201 18.2843 5.11519 17.732 6.07177\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M6.26792 17.9282C5.71564 18.8848 6.04339 20.108 6.99997 20.6603C7.95656 21.2126 9.17974 20.8848 9.73203 19.9282\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M17.732 6.07185C17.232 6.93787 16.6439 8.0435 17.1962 9.00009C17.7485 9.95667 18.3971 9.91994 19.5131 9.98694\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M4.48686 14.0131C5.60289 14.0801 6.25158 14.0434 6.80387 15C7.35615 15.9566 6.76796 17.0622 6.26796 17.9282\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M9.73201 4.07179C10.232 4.93781 10.8955 5.99995 12 5.99995C13.1046 5.99995 13.3971 5.41985 14.0132 4.48682\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M9.98688 19.5131C10.6029 18.5801 10.8955 18 12 18C13.1046 18 13.768 19.0622 14.268 19.9282\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path>\",\"share\":\"<circle cx=\\\"17\\\" cy=\\\"12\\\" r=\\\"2\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></circle><circle cx=\\\"7\\\" cy=\\\"5\\\" r=\\\"2\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></circle><circle cx=\\\"7\\\" cy=\\\"19\\\" r=\\\"2\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></circle><path d=\\\"M9 6.50006L15 10.5\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M9 17.5L15 13\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path>\",\"shield-off\":\"<path d=\\\"M19 14V5.54054L11.5 3L8.5 4M4 8V12.0569C4 14.4506 5.07187 16.7185 6.92137 18.2381L11.5 22L14 19.9459\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><line x1=\\\"3.4137\\\" y1=\\\"3.03821\\\" x2=\\\"20.0382\\\" y2=\\\"20.5863\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\"></line>\",\"shield-safe\":\"<path d=\\\"M4 5.54054L11.5 3L19 5.54054V12.0569C19 14.4506 17.9281 16.7185 16.0786 18.2381L11.5 22L6.92137 18.2381C5.07187 16.7185 4 14.4506 4 12.0569V5.54054Z\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M14 10L10.5 13\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M9 11.5L10.5 13\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path>\",\"shield\":\"<path d=\\\"M4 5.54054L11.5 3L19 5.54054V12.0569C19 14.4506 17.9281 16.7185 16.0786 18.2381L11.5 22L6.92137 18.2381C5.07187 16.7185 4 14.4506 4 12.0569V5.54054Z\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path>\",\"shopping-cart\":\"<path d=\\\"M6 10H18L16.7143 17H7.28571L6 10Z\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M6 10L4.7724 5.65234H2.00003\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><circle cx=\\\"7.5\\\" cy=\\\"20.5\\\" r=\\\"0.5\\\" fill=\\\"#333333\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></circle><circle cx=\\\"16.5\\\" cy=\\\"20.5\\\" r=\\\"0.5\\\" fill=\\\"#333333\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></circle>\",\"shuffle-2\":\"<path d=\\\"M19.7782 4.46448L5.12132 19.1213\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M19.7782 4.46448L20.1317 8.35356\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M19.7782 4.46448L15.8891 4.11092\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M19.7782 19.1213L14.6569 14M5.12134 4.46449L10.1569 9.50003\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M19.7782 19.1213L15.8891 19.4749\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M19.7782 19.1213L20.1317 15.2323\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path>\",\"shuffle\":\"<path d=\\\"M20.5 4.99997C12.7218 4.99997 12 19.1213 5.12133 19.1213\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M21.4932 4.86951L19.32 8.11408\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M21.4932 4.86951L18.6937 2.14686\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M20.5 17.6029C17.9314 17.6029 16.1323 16.0629 14.6269 14.0001M5.12133 3.48165C7.88893 3.48165 9.65985 5.76762 11.2947 8.50006\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M21.4932 17.7334L19.32 14.4888\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M21.4932 17.7334L18.6937 20.456\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path>\",\"sidebar-left\":\"<rect x=\\\"3\\\" y=\\\"3\\\" width=\\\"18\\\" height=\\\"18\\\" rx=\\\"3\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></rect><line x1=\\\"9\\\" y1=\\\"4\\\" x2=\\\"9\\\" y2=\\\"20\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></line>\",\"sidebar-right\":\"<rect width=\\\"18\\\" height=\\\"18\\\" rx=\\\"3\\\" transform=\\\"matrix(-1 0 0 1 21 3)\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></rect><line x1=\\\"1\\\" y1=\\\"-1\\\" x2=\\\"17\\\" y2=\\\"-1\\\" transform=\\\"matrix(4.37114e-08 1 1 -4.37114e-08 16 3)\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></line>\",\"sketch\":\"<path d=\\\"M2.5 9L12 20.5M2.5 9H7M2.5 9L6 4M21.5 9L12 20.5M21.5 9L17.5 3.5M21.5 9H17M12 20.5L17 9M12 20.5L7 9M6 4L12 3M6 4L7 9M12 3L17.5 3.5M12 3L17 9M12 3L7 9M17.5 3.5L17 9M17 9H7\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path>\",\"skip-back\":\"<path d=\\\"M8.49999 12L18.2778 19.1111L18.2778 4.88889L8.49999 12Z\\\" stroke=\\\"#333333\\\" stroke-width=\\\"1.77778\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><line x1=\\\"0.888889\\\" y1=\\\"-0.888889\\\" x2=\\\"15.1111\\\" y2=\\\"-0.888889\\\" transform=\\\"matrix(-4.37114e-08 1 1 4.37114e-08 6.72223 4)\\\" stroke=\\\"#333333\\\" stroke-width=\\\"1.77778\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></line>\",\"slack\":\"<rect x=\\\"14\\\" y=\\\"1\\\" width=\\\"3\\\" height=\\\"10\\\" rx=\\\"1.5\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></rect><path d=\\\"M2.5 16C3.32843 16 4 15.3284 4 14.5V13H2.5C1.67157 13 1 13.6716 1 14.5C1 15.3284 1.67157 16 2.5 16Z\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M21.5 8C20.6716 8 20 8.67157 20 9.5V11H21.5C22.3284 11 23 10.3284 23 9.5C23 8.67157 22.3284 8 21.5 8Z\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M8 2.5C8 3.32843 8.67157 4 9.5 4L11 4L11 2.5C11 1.67157 10.3284 1 9.5 1C8.67157 1 8 1.67157 8 2.5Z\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M16 21.5C16 20.6716 15.3284 20 14.5 20L13 20L13 21.5C13 22.3284 13.6716 23 14.5 23C15.3284 23 16 22.3284 16 21.5Z\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><rect x=\\\"1\\\" y=\\\"10\\\" width=\\\"3\\\" height=\\\"10\\\" rx=\\\"1.5\\\" transform=\\\"rotate(-90 1 10)\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></rect><rect x=\\\"7\\\" y=\\\"13\\\" width=\\\"3\\\" height=\\\"10\\\" rx=\\\"1.5\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></rect><rect x=\\\"13\\\" y=\\\"17\\\" width=\\\"3\\\" height=\\\"10\\\" rx=\\\"1.5\\\" transform=\\\"rotate(-90 13 17)\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></rect>\",\"slash\":\"<rect x=\\\"3\\\" y=\\\"3\\\" width=\\\"18\\\" height=\\\"18\\\" rx=\\\"9\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></rect><path d=\\\"M6.375 6.375L17.625 17.625\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M6 6L18 18\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path>\",\"slice\":\"<path d=\\\"M12.1802 10L2.99999 20.57L10.6597 18.6133L11.2542 15.2457M12.1802 10L18.5 2.50009L20.5 4.00004L11.2542 15.2457M12.1802 10L11.2542 15.2457\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path>\",\"sliders-1\":\"<line x1=\\\"3\\\" y1=\\\"16\\\" x2=\\\"7\\\" y2=\\\"16\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></line><line x1=\\\"10\\\" y1=\\\"12\\\" x2=\\\"14\\\" y2=\\\"12\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></line><line x1=\\\"17\\\" y1=\\\"8\\\" x2=\\\"21\\\" y2=\\\"8\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></line><path d=\\\"M12 4L12 9M12 20L12 15\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M19 4L19 5M19 20L19 11\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M5 4L5 13M5 20L5 19\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path>\",\"sliders-2\":\"<line x1=\\\"3\\\" y1=\\\"16\\\" x2=\\\"7\\\" y2=\\\"16\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></line><line x1=\\\"17\\\" y1=\\\"16\\\" x2=\\\"21\\\" y2=\\\"16\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></line><line x1=\\\"10\\\" y1=\\\"8\\\" x2=\\\"14\\\" y2=\\\"8\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></line><path d=\\\"M12 4L12 5M12 20L12 11\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M5 4L5 13M5 20L5 19\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M19 4L19 13M19 20L19 19\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path>\",\"smartphone\":\"<rect x=\\\"6\\\" y=\\\"2\\\" width=\\\"12\\\" height=\\\"20\\\" rx=\\\"3\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></rect><path d=\\\"M12 18H12.01\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path>\",\"snow\":\"<line x1=\\\"3\\\" y1=\\\"12\\\" x2=\\\"21\\\" y2=\\\"12\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></line><line x1=\\\"12\\\" y1=\\\"21\\\" x2=\\\"12\\\" y2=\\\"3\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></line><path d=\\\"M17 17L7 7.00001\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M17 6.99998L7.00001 17\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M7.58333 11.8999L6 9.99995\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M7.58333 11.9001L6 13.8001\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M16 11.9001L17.5833 13.8001\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M16 11.9L17.5833 10\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M11.9001 7.58334L13.8001 6.00001\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M11.9 7.58334L10 6.00001\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M11.9001 17L13.8001 18.5834\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M11.9 17L10 18.5834\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path>\",\"soap\":\"<rect x=\\\"8\\\" y=\\\"9\\\" width=\\\"8\\\" height=\\\"11\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></rect><rect x=\\\"11\\\" y=\\\"7\\\" width=\\\"2\\\" height=\\\"2\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></rect><line x1=\\\"12\\\" y1=\\\"7\\\" x2=\\\"12\\\" y2=\\\"4\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></line><line x1=\\\"10\\\" y1=\\\"4\\\" x2=\\\"12\\\" y2=\\\"4\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></line><line x1=\\\"8\\\" y1=\\\"13\\\" x2=\\\"16\\\" y2=\\\"13\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></line><line x1=\\\"9\\\" y1=\\\"17\\\" x2=\\\"15\\\" y2=\\\"17\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></line>\",\"speaker\":\"<rect x=\\\"4.8\\\" y=\\\"3\\\" width=\\\"14.4\\\" height=\\\"18\\\" rx=\\\"3\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></rect><circle cx=\\\"12\\\" cy=\\\"15\\\" r=\\\"3\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></circle><circle cx=\\\"12\\\" cy=\\\"7\\\" r=\\\"1\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></circle>\",\"spoon\":\"<path d=\\\"M12.5 10V20.5\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><ellipse cx=\\\"12.5\\\" cy=\\\"6.5\\\" rx=\\\"2.5\\\" ry=\\\"3.5\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></ellipse>\",\"spotify\":\"<circle cx=\\\"12\\\" cy=\\\"12\\\" r=\\\"9\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></circle><path d=\\\"M6.72327 8.71889C8.34469 7.81994 10.2368 7.3656 12.2239 7.50804C14.211 7.65048 16.019 8.37004 17.4956 9.49107\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M16.7389 11.7864C15.3753 10.8937 13.7719 10.3259 12.0309 10.2011C10.2899 10.0763 8.62184 10.4096 7.14487 11.0986\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M15.8157 14.0451C14.6223 13.4032 13.277 12.9973 11.8378 12.8941C10.3986 12.791 9.00923 13.0008 7.73644 13.466\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path>\",\"square-2\":\"<rect x=\\\"3\\\" y=\\\"3\\\" width=\\\"18\\\" height=\\\"18\\\" rx=\\\"6\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></rect>\",\"square\":\"<rect x=\\\"4\\\" y=\\\"4\\\" width=\\\"16\\\" height=\\\"16\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></rect>\",\"star\":\"<path d=\\\"M12 3L14.7508 8.2138L20.5595 9.21885L16.4509 13.4462L17.2901 19.2812L12 16.68L6.70993 19.2812L7.54906 13.4462L3.44049 9.21885L9.24917 8.2138L12 3Z\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path>\",\"status-offline\":\"<path d=\\\"M18 17C19.7934 15.9626 21 14.2208 21 12C21 8.68629 18.3137 6 15 6C12.1032 6 9.06238 7.76966 8.5 10.5\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M8.30379 10.5C7.77702 10.1826 7.15983 10 6.5 10C4.567 10 3 11.567 3 13.5C3 15.433 4.567 17 6.5 17H18\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M16.5 13.5L13 10\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\"></path><path d=\\\"M16.5 10L13 13.5\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\"></path>\",\"status-ok\":\"<path d=\\\"M18 17C19.7934 15.9626 21 14.2208 21 12C21 8.68629 18.3137 6 15 6C12.1032 6 9.06238 7.76966 8.5 10.5\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M8.30379 10.5C7.77702 10.1826 7.15983 10 6.5 10C4.567 10 3 11.567 3 13.5C3 15.433 4.567 17 6.5 17H18\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M16.5 11L13.5 14\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\"></path><path d=\\\"M12 12.5L13.5 14\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\"></path>\",\"status-transfering\":\"<path d=\\\"M18 17C19.7934 15.9626 21 14.2208 21 12C21 8.68629 18.3137 6 15 6C12.1032 6 9.06238 7.76966 8.5 10.5\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M8.30379 10.5C7.77702 10.1826 7.15983 10 6.5 10C4.567 10 3 11.567 3 13.5C3 15.433 4.567 17 6.5 17H18\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><line x1=\\\"13\\\" y1=\\\"14\\\" x2=\\\"13\\\" y2=\\\"10\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\"></line><path d=\\\"M11 11.5L13 10\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\"></path><line x1=\\\"16\\\" y1=\\\"10\\\" x2=\\\"16\\\" y2=\\\"14\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\"></line><path d=\\\"M18 12.5L16 14\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\"></path>\",\"sun-half\":\"<path d=\\\"M8 15C8 12.7909 9.79086 11 12 11C14.2091 11 16 12.7909 16 15\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><line x1=\\\"12\\\" y1=\\\"8\\\" x2=\\\"12\\\" y2=\\\"6\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></line><line x1=\\\"12\\\" y1=\\\"8\\\" x2=\\\"12\\\" y2=\\\"6\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></line><line x1=\\\"5\\\" y1=\\\"15\\\" x2=\\\"3\\\" y2=\\\"15\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></line><line x1=\\\"21\\\" y1=\\\"15\\\" x2=\\\"19\\\" y2=\\\"15\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></line><line x1=\\\"19.071\\\" y1=\\\"8.34317\\\" x2=\\\"17.6568\\\" y2=\\\"9.75738\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></line><line x1=\\\"5.41421\\\" y1=\\\"9\\\" x2=\\\"6.82843\\\" y2=\\\"10.4142\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></line>\",\"sun\":\"<rect x=\\\"8\\\" y=\\\"8\\\" width=\\\"8\\\" height=\\\"8\\\" rx=\\\"4\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></rect><line x1=\\\"12\\\" y1=\\\"5\\\" x2=\\\"12\\\" y2=\\\"3\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></line><line x1=\\\"12\\\" y1=\\\"5\\\" x2=\\\"12\\\" y2=\\\"3\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></line><line x1=\\\"5\\\" y1=\\\"12\\\" x2=\\\"3\\\" y2=\\\"12\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></line><line x1=\\\"7.75739\\\" y1=\\\"16.6569\\\" x2=\\\"6.34317\\\" y2=\\\"18.0711\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></line><line x1=\\\"16.728\\\" y1=\\\"17.3137\\\" x2=\\\"18.1422\\\" y2=\\\"18.7279\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></line><line x1=\\\"12\\\" y1=\\\"21\\\" x2=\\\"12\\\" y2=\\\"19\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></line><line x1=\\\"21\\\" y1=\\\"12\\\" x2=\\\"19\\\" y2=\\\"12\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></line><line x1=\\\"19.071\\\" y1=\\\"5.34317\\\" x2=\\\"17.6568\\\" y2=\\\"6.75738\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></line><line x1=\\\"5.41421\\\" y1=\\\"6\\\" x2=\\\"6.82843\\\" y2=\\\"7.41421\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></line>\",\"sunrise\":\"<path d=\\\"M8 18C8 15.7909 9.79086 14 12 14C14.2091 14 16 15.7909 16 18\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><line x1=\\\"21\\\" y1=\\\"21\\\" x2=\\\"3\\\" y2=\\\"21\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></line><line x1=\\\"12\\\" y1=\\\"11\\\" x2=\\\"12\\\" y2=\\\"9\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></line><path d=\\\"M12 3L12 11\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M12 3L9 5.5\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M12 3L15 5.5\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><line x1=\\\"5\\\" y1=\\\"18\\\" x2=\\\"3\\\" y2=\\\"18\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></line><line x1=\\\"21\\\" y1=\\\"18\\\" x2=\\\"19\\\" y2=\\\"18\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></line><line x1=\\\"19.071\\\" y1=\\\"11.3432\\\" x2=\\\"17.6568\\\" y2=\\\"12.7574\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></line><line x1=\\\"5.41421\\\" y1=\\\"12\\\" x2=\\\"6.82843\\\" y2=\\\"13.4142\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></line>\",\"sunset\":\"<path d=\\\"M8 18C8 15.7909 9.79086 14 12 14C14.2091 14 16 15.7909 16 18\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><line x1=\\\"21\\\" y1=\\\"21\\\" x2=\\\"3\\\" y2=\\\"21\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></line><line x1=\\\"12\\\" y1=\\\"11\\\" x2=\\\"12\\\" y2=\\\"9\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></line><path d=\\\"M12 11L12 3\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M12 11L15 8.5\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M12 11L9 8.5\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><line x1=\\\"5\\\" y1=\\\"18\\\" x2=\\\"3\\\" y2=\\\"18\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></line><line x1=\\\"21\\\" y1=\\\"18\\\" x2=\\\"19\\\" y2=\\\"18\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></line><line x1=\\\"19.071\\\" y1=\\\"11.3432\\\" x2=\\\"17.6568\\\" y2=\\\"12.7574\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></line><line x1=\\\"5.41421\\\" y1=\\\"12\\\" x2=\\\"6.82843\\\" y2=\\\"13.4142\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></line>\",\"tablet\":\"<rect x=\\\"3\\\" y=\\\"2\\\" width=\\\"18\\\" height=\\\"20\\\" rx=\\\"3\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></rect><path d=\\\"M12 18H12.01\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path>\",\"tag-empty\":\"<path d=\\\"M11.5808 5.10265L21.3421 14.8639L13.8639 22.3421L4.10261 12.5808L3.73898 4.73901L11.5808 5.10265Z\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M7 8L7 8.01\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path>\",\"tag-full\":\"<path d=\\\"M11.5808 5.10265L21.3421 14.8639L13.8639 22.3421L4.10263 12.5808L3.739 4.73901L11.5808 5.10265Z\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M7 8L7 8.01\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M12 11L16.2427 15.2426M10 13L14.2427 17.2426\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path>\",\"tape\":\"<rect x=\\\"2\\\" y=\\\"6\\\" width=\\\"20\\\" height=\\\"12\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></rect><circle cx=\\\"17\\\" cy=\\\"13\\\" r=\\\"1\\\" fill=\\\"white\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></circle><circle cx=\\\"7\\\" cy=\\\"13\\\" r=\\\"1\\\" fill=\\\"white\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></circle><path d=\\\"M7 6H17L16 9H8L7 6Z\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path>\",\"target\":\"<rect x=\\\"3\\\" y=\\\"3\\\" width=\\\"18\\\" height=\\\"18\\\" rx=\\\"9\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></rect><rect x=\\\"7\\\" y=\\\"7\\\" width=\\\"10\\\" height=\\\"10\\\" rx=\\\"5\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></rect><rect x=\\\"11\\\" y=\\\"11\\\" width=\\\"2\\\" height=\\\"2\\\" rx=\\\"1\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></rect>\",\"television-2\":\"<path d=\\\"M20.375 6.91239C20.1541 6.73647 19.89 6.63808 19.6996 6.57806C19.485 6.51041 19.2392 6.4546 18.9798 6.40708C18.4594 6.31174 17.8078 6.23611 17.0839 6.17697C15.6314 6.05832 13.8102 6 12 6C10.1899 6 8.36857 6.05832 6.91616 6.17697C6.19223 6.2361 5.54057 6.31174 5.02019 6.40708C4.76081 6.4546 4.51502 6.51041 4.30039 6.57806C4.10999 6.63808 3.84592 6.73647 3.62505 6.91238C3.40949 7.08407 3.28462 7.29928 3.21392 7.44347C3.13621 7.60197 3.07764 7.77214 3.03167 7.93418C2.93954 8.25891 2.8713 8.64765 2.81984 9.05684C2.71614 9.88131 2.66667 10.9039 2.66667 11.9173C2.66667 12.9315 2.71622 13.9683 2.81921 14.8223C2.87049 15.2475 2.93757 15.6493 3.02556 15.9896C3.10107 16.2815 3.23096 16.696 3.49692 16.9986C3.73744 17.2723 4.07035 17.3907 4.22569 17.4424C4.43435 17.5118 4.67621 17.5666 4.92705 17.6119C5.43301 17.7034 6.08328 17.7755 6.81165 17.8317C8.27474 17.9445 10.1431 18 12 18C13.8569 18 15.7253 17.9445 17.1883 17.8317C17.9167 17.7755 18.567 17.7034 19.0729 17.6119C19.3238 17.5666 19.5657 17.5118 19.7743 17.4424C19.9296 17.3907 20.2626 17.2723 20.5031 16.9986C20.769 16.696 20.8989 16.2815 20.9744 15.9896C21.0624 15.6493 21.1295 15.2475 21.1808 14.8223C21.2838 13.9683 21.3333 12.9315 21.3333 11.9173C21.3333 10.9039 21.2839 9.88132 21.1802 9.05685C21.1287 8.64766 21.0605 8.25891 20.9683 7.93418C20.9224 7.77214 20.8638 7.60197 20.7861 7.44347C20.7154 7.29928 20.5905 7.08407 20.375 6.91239Z\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M6 15H6.01\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path>\",\"television\":\"<path d=\\\"M21.0254 8.40554C20.7987 8.20998 20.5218 8.09678 20.3141 8.02584C20.0833 7.94703 19.8184 7.88184 19.5383 7.82624C18.9764 7.71473 18.2727 7.62624 17.4908 7.55704C15.9221 7.41822 13.955 7.34998 12 7.34998C10.045 7.34997 8.0779 7.41821 6.50923 7.55704C5.7273 7.62623 5.02357 7.71473 4.46174 7.82624C4.18161 7.88184 3.91672 7.94703 3.68594 8.02583C3.4782 8.09677 3.20126 8.20998 2.97462 8.40553C2.76112 8.58976 2.63916 8.81815 2.56971 8.97159C2.49263 9.14189 2.43333 9.32752 2.38581 9.50895C2.29052 9.87283 2.21854 10.3144 2.16365 10.7872C2.05319 11.7386 2 12.9242 2 14.1032C2 15.283 2.05326 16.4858 2.16311 17.4726C2.21784 17.9643 2.28883 18.4229 2.38053 18.807C2.46043 19.1416 2.59126 19.5854 2.85131 19.906C3.08981 20.2 3.43086 20.3352 3.60561 20.3981C3.82965 20.4789 4.09015 20.5429 4.36115 20.596C4.90739 20.703 5.60964 20.7873 6.39637 20.853C7.97657 20.9851 9.99449 21.05 12 21.05C14.0055 21.05 16.0234 20.9851 17.6036 20.853C18.3904 20.7873 19.0926 20.703 19.6388 20.596C19.9098 20.5429 20.1703 20.4789 20.3944 20.3981C20.5691 20.3352 20.9102 20.2 21.1487 19.906C21.4087 19.5854 21.5396 19.1416 21.6195 18.807C21.7112 18.4229 21.7822 17.9643 21.8369 17.4726C21.9467 16.4858 22 15.283 22 14.1032C22 12.9242 21.9468 11.7386 21.8363 10.7872C21.7815 10.3144 21.7095 9.87284 21.6142 9.50896C21.5667 9.32752 21.5074 9.14189 21.4303 8.9716C21.3608 8.81815 21.2389 8.58976 21.0254 8.40554Z\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><line x1=\\\"11.4858\\\" y1=\\\"6.44995\\\" x2=\\\"8.39999\\\" y2=\\\"3.36416\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></line><line x1=\\\"1\\\" y1=\\\"-1\\\" x2=\\\"5.36396\\\" y2=\\\"-1\\\" transform=\\\"matrix(0.707107 -0.707107 -0.707107 -0.707107 11.1 6.44995)\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></line>\",\"thermometer\":\"<path d=\\\"M14 13.5V5C14 3.89543 13.1046 3 12 3C10.8954 3 10 3.89543 10 5V13.5\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M10 13.5352C8.8044 14.2268 8 15.5195 8 17C8 19.2092 9.79086 21 12 21C14.2091 21 16 19.2092 16 17C16 15.5195 15.1956 14.2268 14 13.5352\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path>\",\"thumbs-down\":\"<path d=\\\"M8 12L11.5409 19.0818C11.81 19.62 12.4136 19.9027 12.9992 19.7649V19.7649C13.5856 19.6269 14 19.1037 14 18.5013V14.3529H17.5767C18.8334 14.3529 19.7787 13.2075 19.5404 11.9736L18.1565 4.81033C18.0657 4.33987 17.6538 4 17.1747 4H8V12Z\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M4 11C4 11.5523 4.44772 12 5 12H8V4H5C4.44772 4 4 4.44772 4 5V11Z\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path>\",\"thumbs-up\":\"<path d=\\\"M8 12L11.5409 4.91816C11.81 4.38002 12.4136 4.09731 12.9992 4.23512V4.23512C13.5856 4.37308 14 4.8963 14 5.49867V9.64706H17.5767C18.8334 9.64706 19.7787 10.7925 19.5404 12.0264L18.1565 19.1897C18.0657 19.6601 17.6538 20 17.1747 20H8V12Z\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M4 13C4 12.4477 4.44772 12 5 12H8V20H5C4.44772 20 4 19.5523 4 19V13Z\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path>\",\"toggle-left-2\":\"<path d=\\\"M2 12C2 9.23858 4.23858 7 7 7H17C19.7614 7 22 9.23858 22 12V12C22 14.7614 19.7614 17 17 17H7C4.23858 17 2 14.7614 2 12V12Z\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><circle cx=\\\"7\\\" cy=\\\"12\\\" r=\\\"2\\\" fill=\\\"#333333\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></circle>\",\"toggle-left\":\"<path d=\\\"M2 12C2 9.23858 4.23858 7 7 7H17C19.7614 7 22 9.23858 22 12V12C22 14.7614 19.7614 17 17 17H7C4.23858 17 2 14.7614 2 12V12Z\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><circle cx=\\\"7\\\" cy=\\\"12\\\" r=\\\"2\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></circle>\",\"toggle-right-2\":\"<path d=\\\"M2 12C2 9.23858 4.23858 7 7 7H17C19.7614 7 22 9.23858 22 12V12C22 14.7614 19.7614 17 17 17H7C4.23858 17 2 14.7614 2 12V12Z\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><circle cx=\\\"17\\\" cy=\\\"12\\\" r=\\\"2\\\" fill=\\\"#333333\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></circle>\",\"toggle-right\":\"<path d=\\\"M2 12C2 9.23858 4.23858 7 7 7H17C19.7614 7 22 9.23858 22 12V12C22 14.7614 19.7614 17 17 17H7C4.23858 17 2 14.7614 2 12V12Z\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><circle cx=\\\"17\\\" cy=\\\"12\\\" r=\\\"2\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></circle>\",\"tool\":\"<path d=\\\"M11.5672 9.91603L3.68064 17.8026C2.65578 18.8275 2.45813 20.2915 3.23918 21.0725C4.02023 21.8535 5.48421 21.6559 6.50906 20.631L14.3956 12.7445\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M18.1588 3.32443L15.2376 6.24562C14.9168 6.56645 15.5113 7.23834 16.2923 8.01938C17.0734 8.80043 17.7452 9.39487 18.0661 9.07404L20.9873 6.15285\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M18.1474 3.33589C17.6014 3.13128 17.0102 3.01938 16.3928 3.01938C13.6314 3.01938 11.3928 5.25796 11.3928 8.01938C11.3928 8.63676 11.5047 9.22801 11.7093 9.77394M21.0763 6.26483C21.2809 6.81076 21.3928 7.40201 21.3928 8.01938C21.3928 10.7808 19.1542 13.0194 16.3928 13.0194C15.7754 13.0194 15.1842 12.9075 14.6382 12.7029\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path>\",\"topbar\":\"<rect width=\\\"18\\\" height=\\\"18\\\" rx=\\\"3\\\" transform=\\\"matrix(1.39071e-07 1 1 -1.39071e-07 3 3)\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></rect><line x1=\\\"1\\\" y1=\\\"-1\\\" x2=\\\"17\\\" y2=\\\"-1\\\" transform=\\\"matrix(1 -1.82782e-07 -1.82782e-07 -1 3 8)\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></line>\",\"transgender-2\":\"<path d=\\\"M15.4091 13.5C15.4091 15.0732 14.7761 16.4966 13.7487 17.5327C13.3645 17.9201 12.9256 18.2528 12.4448 18.5182C11.6265 18.9699 10.6856 19.2273 9.68183 19.2273C6.51874 19.2273 3.95455 16.6631 3.95455 13.5C3.95455 10.3369 6.51874 7.77272 9.68183 7.77272C12.8449 7.77272 15.4091 10.3369 15.4091 13.5Z\\\" stroke=\\\"#333333\\\" stroke-width=\\\"1.9091\\\"></path><path d=\\\"M17.3441 9.68182L14.0371 6.37483\\\" stroke=\\\"#333333\\\" stroke-width=\\\"1.9091\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M14.4205 9.20453L18.9207 4.70434\\\" stroke=\\\"#333333\\\" stroke-width=\\\"1.9091\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M18.9208 8.01135L18.9208 4.70435\\\" stroke=\\\"#333333\\\" stroke-width=\\\"1.9091\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M15.5798 4.67046L18.9207 4.67047\\\" stroke=\\\"#333333\\\" stroke-width=\\\"1.9091\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path>\",\"transgender\":\"<path d=\\\"M17.872 11.5C17.872 13.0732 17.239 14.4966 16.2116 15.5327C15.8274 15.9201 15.3885 16.2528 14.9077 16.5182C14.0894 16.9699 13.1486 17.2273 12.1447 17.2273C8.98165 17.2273 6.41745 14.6631 6.41745 11.5C6.41745 8.33692 8.98165 5.77272 12.1447 5.77272C15.3078 5.77272 17.872 8.33692 17.872 11.5Z\\\" stroke=\\\"#333333\\\" stroke-width=\\\"1.9091\\\"></path><path d=\\\"M12.1448 17.2272L12.1448 22\\\" stroke=\\\"#333333\\\" stroke-width=\\\"1.9091\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M14.5311 20.0909L9.75837 20.0909\\\" stroke=\\\"#333333\\\" stroke-width=\\\"1.9091\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M8.32655 4.37488L5.01956 7.68183\\\" stroke=\\\"#333333\\\" stroke-width=\\\"1.9091\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M16.2016 7.20453L20.7018 2.70433\\\" stroke=\\\"#333333\\\" stroke-width=\\\"1.9091\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M7.84927 7.2984L3.34908 2.79821\\\" stroke=\\\"#333333\\\" stroke-width=\\\"1.9091\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M20.7018 6.01135L20.7018 2.70435\\\" stroke=\\\"#333333\\\" stroke-width=\\\"1.9091\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M6.6561 2.79816L3.34909 2.79816\\\" stroke=\\\"#333333\\\" stroke-width=\\\"1.9091\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M17.3608 2.67046L20.7018 2.67047\\\" stroke=\\\"#333333\\\" stroke-width=\\\"1.9091\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M3.31519 6.13913L3.3152 2.79822\\\" stroke=\\\"#333333\\\" stroke-width=\\\"1.9091\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path>\",\"trash-1-open\":\"<path d=\\\"M5.82907 7.48718H18.6325V20.1197C18.6325 21.2242 17.7371 22.1197 16.6325 22.1197H7.82907C6.7245 22.1197 5.82907 21.2242 5.82907 20.1197V7.48718Z\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M4 4.74353L20.4615 4.74353\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M14.9134 2H9.54816L8.57266 4.74359H15.8889L14.9134 2Z\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><line x1=\\\"12.3163\\\" y1=\\\"11.2307\\\" x2=\\\"12.3163\\\" y2=\\\"18.376\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></line><line x1=\\\"9.57266\\\" y1=\\\"11.2307\\\" x2=\\\"9.57266\\\" y2=\\\"18.376\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></line><line x1=\\\"15.0598\\\" y1=\\\"11.2307\\\" x2=\\\"15.0598\\\" y2=\\\"18.376\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></line>\",\"trash-1\":\"<path d=\\\"M5.82907 6.65808H18.6325V19.2906C18.6325 20.3951 17.7371 21.2906 16.6325 21.2906H7.82907C6.7245 21.2906 5.82907 20.3951 5.82907 19.2906V6.65808Z\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M4 5.74365L20.4615 5.74365\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M14.9134 3H9.54816L8.57266 5.74359H15.8889L14.9134 3Z\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><line x1=\\\"12.3163\\\" y1=\\\"10.4017\\\" x2=\\\"12.3163\\\" y2=\\\"17.547\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></line><line x1=\\\"9.57266\\\" y1=\\\"10.4017\\\" x2=\\\"9.57266\\\" y2=\\\"17.547\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></line><line x1=\\\"15.0598\\\" y1=\\\"10.4017\\\" x2=\\\"15.0598\\\" y2=\\\"17.547\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></line>\",\"trash-2-open\":\"<path d=\\\"M5.82907 7.48718H18.6325V20.1197C18.6325 21.2242 17.7371 22.1197 16.6325 22.1197H7.82907C6.7245 22.1197 5.82907 21.2242 5.82907 20.1197V7.48718Z\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M4 4.74353L20.4615 4.74353\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M14.9134 2H9.54816L8.57266 4.74359H15.8889L14.9134 2Z\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path>\",\"trash-2\":\"<path d=\\\"M5.82907 6.65808H18.6325V19.2906C18.6325 20.3951 17.7371 21.2906 16.6325 21.2906H7.82907C6.7245 21.2906 5.82907 20.3951 5.82907 19.2906V6.65808Z\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M4 5.74365L20.4615 5.74365\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M14.9134 3H9.54816L8.57266 5.74359H15.8889L14.9134 3Z\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path>\",\"trash-3\":\"<path d=\\\"M5 7H19V19C19 20.1046 18.1046 21 17 21H7C5.89543 21 5 20.1046 5 19V7Z\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M17.5 4H6.5L5 7H19L17.5 4Z\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path>\",\"trending-down\":\"<g clip-path=\\\"url(#clip0)\\\"><path d=\\\"M21.6028 17.397L21.877 12.1878\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M21.6028 17.397L16.3937 17.6712\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M2 6.01929L9.53956 13.5589L13.652 9.44636L21.1916 16.9859\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path></g><defs><clippath id=\\\"clip0\\\"><rect width=\\\"24\\\" height=\\\"24\\\" fill=\\\"white\\\" transform=\\\"matrix(1 0 0 -1 0 24)\\\"></rect></clippath></defs>\",\"trending-up\":\"<g clip-path=\\\"url(#clip0)\\\"><path d=\\\"M21.6028 6.60303L21.877 11.8122\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M21.6028 6.60303L16.3937 6.32884\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M2 17.9807L9.53956 10.4411L13.652 14.5536L21.1916 7.01407\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path></g><defs><clippath id=\\\"clip0\\\"><rect width=\\\"24\\\" height=\\\"24\\\" fill=\\\"white\\\"></rect></clippath></defs>\",\"triangle\":\"<path d=\\\"M12 5L21 18H3L12 5Z\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path>\",\"truck\":\"<path d=\\\"M17 17V5H2V17H17ZM17 17H23V11L20.5 10H17\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><circle cx=\\\"18\\\" cy=\\\"19\\\" r=\\\"2\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></circle><circle cx=\\\"6\\\" cy=\\\"19\\\" r=\\\"2\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></circle><circle cx=\\\"18\\\" cy=\\\"19\\\" r=\\\"2\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></circle><circle cx=\\\"6\\\" cy=\\\"19\\\" r=\\\"2\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></circle>\",\"twitter\":\"<path d=\\\"M21 6.49998L22.5 3.49998L20 4.49998C14 0.499984 11.8333 5.49998 11.5 8.49998C7.1 8.49998 4 5.49998 3 3.99998C-0.2 9.99998 4.5 15 8 17C7.5 18 1 19 1 19C17.5 25 21 12.5 21 6.49998Z\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path>\",\"type\":\"<line x1=\\\"12\\\" y1=\\\"6\\\" x2=\\\"12\\\" y2=\\\"19\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></line><line x1=\\\"5\\\" y1=\\\"5\\\" x2=\\\"5\\\" y2=\\\"8\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></line><line x1=\\\"19\\\" y1=\\\"5\\\" x2=\\\"19\\\" y2=\\\"8\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></line><line x1=\\\"19\\\" y1=\\\"5\\\" x2=\\\"5\\\" y2=\\\"5\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></line><line x1=\\\"15\\\" y1=\\\"20\\\" x2=\\\"9\\\" y2=\\\"20\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></line>\",\"umbrella\":\"<path d=\\\"M21 11C21 8.87827 20.0518 6.84344 18.364 5.34315C16.6761 3.84285 14.3869 3 12 3C9.61305 3 7.32387 3.84285 5.63604 5.34315C3.94821 6.84344 3 8.87827 3 11L12 11H21Z\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M12 11L12 18.5C12 19.1667 11.5 20.5 10 20.5C8.5 20.5 8 19.5 8 18.5\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path>\",\"underline\":\"<path d=\\\"M7 12L7 5\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M17 12L17 5\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M7 12C7 14.2091 9.23858 16 12 16C14.7614 16 17 14.2091 17 12\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><line x1=\\\"7\\\" y1=\\\"20\\\" x2=\\\"17\\\" y2=\\\"20\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></line>\",\"unlocked-2\":\"<rect x=\\\"5.73685\\\" y=\\\"12.0526\\\" width=\\\"12.5263\\\" height=\\\"8.94737\\\" rx=\\\"2\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></rect><path d=\\\"M16.4737 8.47368C16.4737 6.00294 14.4707 4 12 4C9.52924 4 7.52631 6.00294 7.52631 8.47368\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path>\",\"unlocked\":\"<rect x=\\\"6\\\" y=\\\"12.0714\\\" width=\\\"12\\\" height=\\\"8.57143\\\" rx=\\\"2\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></rect><path d=\\\"M16.2857 8.64289C16.2857 6.27596 14.3669 4.35718 12 4.35718C9.63307 4.35718 7.71429 6.27596 7.71429 8.64289V12.0715\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path>\",\"upload-cloud\":\"<path d=\\\"M3 12C3 9.79086 4.79086 8 7 8C7.26483 8 7.52364 8.02574 7.77408 8.07484\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M8 8C8.81364 5.65123 11.3744 4 14 4C17.3137 4 20 6.68629 20 10L20 12\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M12 11L12 19\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M12 11L15 13.5\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M12 11L9 13.5\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path>\",\"upload\":\"<path d=\\\"M4 15V18H20V15\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M12 6L12 14\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M12 6L15 8.5\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M12 6L9 8.5\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path>\",\"user-add\":\"<circle cx=\\\"9\\\" cy=\\\"5\\\" r=\\\"3\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></circle><path d=\\\"M3 18V15C3 12.7909 4.79086 11 7 11H11C13.2091 11 15 12.7909 15 15V18\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M20.7249 7.25L15.7751 7.25\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\"></path><path d=\\\"M18.25 4.77515L18.25 9.72489\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\"></path>\",\"user-remove-1\":\"<circle cx=\\\"9\\\" cy=\\\"5\\\" r=\\\"3\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></circle><path d=\\\"M3 18V15C3 12.7909 4.79086 11 7 11H11C13.2091 11 15 12.7909 15 15V18\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M21 6L18 9\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\"></path><path d=\\\"M16.5 7.5L18 9\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\"></path>\",\"user-remove\":\"<circle cx=\\\"9\\\" cy=\\\"5\\\" r=\\\"3\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></circle><path d=\\\"M3 18V15C3 12.7909 4.79086 11 7 11H11C13.2091 11 15 12.7909 15 15V18\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M20.7249 7.25L15.7751 7.25\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\"></path>\",\"user-x\":\"<circle cx=\\\"9\\\" cy=\\\"5\\\" r=\\\"3\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></circle><path d=\\\"M3 18V15C3 12.7909 4.79086 11 7 11H11C13.2091 11 15 12.7909 15 15V18\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M20 9L16.5 5.5\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\"></path><path d=\\\"M20 5.5L16.5 9\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\"></path>\",\"user\":\"<circle cx=\\\"9\\\" cy=\\\"5\\\" r=\\\"3\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></circle><path d=\\\"M3 18V15C3 12.7909 4.79086 11 7 11H11C13.2091 11 15 12.7909 15 15V18\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path>\",\"users\":\"<circle cx=\\\"9\\\" cy=\\\"5\\\" r=\\\"3\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></circle><path d=\\\"M3 18V15C3 12.7909 4.79086 11 7 11H11C13.2091 11 15 12.7909 15 15V18\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M14 8C15.6569 8 17 6.65685 17 5C17 3.34315 15.6569 2 14 2\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M21 18V15C21 12.7909 19.2091 11 17 11H16.5\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path>\",\"video-off\":\"<path d=\\\"M10 16H5C4.44772 16 4 15.5523 4 15V9M10.5 8H14C14.5523 8 15 8.44772 15 9V12\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M15 11.2L20 8V16L15 12.8V11.2Z\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M11.1 7H11\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><line x1=\\\"2.4137\\\" y1=\\\"3.03821\\\" x2=\\\"19.0382\\\" y2=\\\"20.5863\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\"></line>\",\"video\":\"<rect x=\\\"4\\\" y=\\\"8\\\" width=\\\"11\\\" height=\\\"8\\\" rx=\\\"1\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></rect><path d=\\\"M15 11.2L20 8V16L15 12.8V11.2Z\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M11.1 7H11\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path>\",\"virus\":\"<path d=\\\"M11 22H13M19 12C19 15.866 15.866 19 12 19M19 12C19 8.13401 15.866 5 12 5M19 12H22M12 19C8.13401 19 5 15.866 5 12M12 19V22M5 12C5 8.13401 8.13401 5 12 5M5 12H2M12 5V2M11 2H13M22 13V11M17 16.899L19 19M18.1283 19.8567L19.8567 18.1282M16.899 7L19 5M19.8566 5.8717L18.1281 4.14322M2 13L2 11M7.05417 7.04634L5.00749 5.00746M4.14325 5.8717L5.87173 4.14322M6.98259 16.8812L4.91758 18.9025M5.87177 19.8567L4.14329 18.1282\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path>\",\"voicemail\":\"<circle cx=\\\"18\\\" cy=\\\"12\\\" r=\\\"3\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></circle><circle cx=\\\"6\\\" cy=\\\"12\\\" r=\\\"3\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></circle><path d=\\\"M18 15L6 15\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path>\",\"volume-high\":\"<path d=\\\"M7 9H3C2.44772 9 2 9.44772 2 10V14C2 14.5523 2.44772 15 3 15H7\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M7 9L11 6V18L7 15\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M15 15.7652C16.2742 15.1162 17.1469 13.7921 17.1469 12.2641C17.1469 10.7361 16.2742 9.41195 15 8.76294\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M17.3604 6.37402C19.2105 7.67686 20.4192 9.82931 20.4192 12.2641C20.4192 14.6988 19.2105 16.8513 17.3604 18.1541\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path>\",\"volume-low\":\"<path d=\\\"M7 9H3C2.44772 9 2 9.44772 2 10V14C2 14.5523 2.44772 15 3 15H7\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M7 9L11 6V18L7 15\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M15 15.7652C16.2742 15.1162 17.1469 13.7921 17.1469 12.2641C17.1469 10.7361 16.2742 9.41195 15 8.76294\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path>\",\"volume-off\":\"<path d=\\\"M7 9H3C2.44772 9 2 9.44772 2 10V14C2 14.5523 2.44772 15 3 15H7\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M7 9L11 6V18L7 15\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M20 10L16 14\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\"></path><path d=\\\"M16 10L20 14\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\"></path>\",\"volume\":\"<path d=\\\"M7 9H3C2.44772 9 2 9.44772 2 10V14C2 14.5523 2.44772 15 3 15H7\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M7 9L11 6V18L7 15\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path>\",\"whatsapp\":\"<path d=\\\"M16.3157 15.5611L16.9496 14.2002C17.0736 13.934 16.9617 13.6209 16.6928 13.4815L15.7537 12.9948C15.5214 12.8744 14.6252 12.4743 14.3833 12.5746L13.0091 13.3349L12.7334 13.1722C12.1405 12.8169 11.3796 12.3564 10.8319 11.8472C10.608 11.639 10.5787 11.3162 10.7188 11.0497L11.1768 10.1784C11.2588 9.99259 10.8198 9.04045 10.5134 8.44999C10.3648 8.16364 10.0593 8 9.72355 8L9.00396 8C8.34678 8 7.72187 8.28317 7.28471 8.77386C7.18886 8.88144 7.10635 8.97356 7.05707 9.02757C7.02839 9.059 7.00426 9.09411 6.98632 9.13269V9.13269C6.67141 9.80981 6.56917 10.5852 6.86243 11.2719C7.98128 13.8921 10.671 15.7533 13.8212 16.6786C14.5199 16.8838 16.0195 16.197 16.3157 15.5611Z\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C10.5124 21 9.10904 20.6391 7.8728 20C7.10187 19.6015 4.12089 21.5948 3.5 21C2.88698 20.4128 4.6319 17.2397 4.20404 16.5C3.43827 15.1762 3 13.6393 3 12Z\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path>\",\"wifi-off\":\"<circle cx=\\\"12.4781\\\" cy=\\\"18.901\\\" r=\\\"0.754806\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></circle><path d=\\\"M8.44006 16.8484C8.93303 15.8806 9.76374 15.1136 10.7769 14.7026\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M5.68484 14.126C6.29352 13.2617 7.06299 12.5187 7.94975 11.9406M19.2714 14.126C18.2465 12.6707 16.7659 11.5595 15.037 11\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M21.9735 11.4378C19.7622 8.62831 16.3308 6.82422 12.4781 6.82422C12.0028 6.82422 11.5339 6.85167 11.073 6.90509M3 11.4159C3.71198 10.5156 4.43776 9.86481 5.37441 9.19863\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><line x1=\\\"4.4137\\\" y1=\\\"4.03821\\\" x2=\\\"21.0382\\\" y2=\\\"21.5863\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\"></line>\",\"wifi-on\":\"<circle cx=\\\"12.4781\\\" cy=\\\"18.077\\\" r=\\\"0.754806\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></circle><path d=\\\"M16.5161 16.0243C15.7676 14.5547 14.2404 13.5481 12.4781 13.5481C10.7158 13.5481 9.1886 14.5547 8.44006 16.0243\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M5.68484 13.3019C7.18746 11.1681 9.66998 9.77405 12.4781 9.77405C15.2862 9.77405 17.7687 11.1681 19.2714 13.3019\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M21.9735 10.6136C19.7622 7.80409 16.3308 6 12.4781 6C8.6354 6 5.21187 7.79471 3 10.5916\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path>\",\"wind\":\"<path d=\\\"M16 21C17.3807 21 18.5 19.8807 18.5 18.5C18.5 17.1193 17.3807 16 16 16\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M8 16L16 16\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><line x1=\\\"4\\\" y1=\\\"11\\\" x2=\\\"16\\\" y2=\\\"11\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></line><path d=\\\"M16 11C17.3807 11 18.5 9.88071 18.5 8.5C18.5 7.11929 17.3807 6 16 6\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><line x1=\\\"4\\\" y1=\\\"6\\\" x2=\\\"9\\\" y2=\\\"6\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></line>\",\"x-circle\":\"<path d=\\\"M15 9L9 15\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\"></path><path d=\\\"M9 9L15 15\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\"></path><rect x=\\\"3\\\" y=\\\"3\\\" width=\\\"18\\\" height=\\\"18\\\" rx=\\\"9\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></rect>\",\"x-square\":\"<rect x=\\\"3\\\" y=\\\"3\\\" width=\\\"18\\\" height=\\\"18\\\" rx=\\\"2\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></rect><path d=\\\"M15 9L9 15\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\"></path><path d=\\\"M9 9L15 15\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\"></path>\",\"x\":\"<path d=\\\"M19 5L5 19\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\"></path><path d=\\\"M5 5L19 19\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\"></path>\",\"youtube-pause\":\"<path d=\\\"M21.0254 5.70559C20.7987 5.51003 20.5218 5.39682 20.3141 5.32589C20.0833 5.24708 19.8184 5.18189 19.5383 5.12629C18.9764 5.01478 18.2727 4.92629 17.4908 4.85709C15.9221 4.71827 13.955 4.65003 12 4.65002C10.045 4.65002 8.0779 4.71826 6.50923 4.85708C5.7273 4.92628 5.02357 5.01478 4.46174 5.12629C4.18161 5.18189 3.91672 5.24708 3.68594 5.32588C3.4782 5.39682 3.20126 5.51003 2.97462 5.70558C2.76112 5.88981 2.63916 6.1182 2.56971 6.27164C2.49263 6.44194 2.43333 6.62756 2.38581 6.809C2.29052 7.17288 2.21854 7.61445 2.16365 8.08721C2.05319 9.03861 2 10.2242 2 11.4033C2 12.5831 2.05326 13.7859 2.16311 14.7727C2.21784 15.2643 2.28883 15.723 2.38053 16.107C2.46043 16.4417 2.59126 16.8855 2.85131 17.2061C3.08981 17.5 3.43086 17.6352 3.60561 17.6982C3.82965 17.779 4.09015 17.8429 4.36115 17.896C4.90739 18.003 5.60964 18.0873 6.39637 18.1531C7.97657 18.2851 9.99449 18.35 12 18.35C14.0055 18.35 16.0234 18.2851 17.6036 18.1531C18.3904 18.0873 19.0926 18.003 19.6388 17.896C19.9098 17.8429 20.1703 17.779 20.3944 17.6982C20.5691 17.6352 20.9102 17.5 21.1487 17.2061C21.4087 16.8855 21.5396 16.4417 21.6195 16.1071C21.7112 15.723 21.7822 15.2643 21.8369 14.7727C21.9467 13.7859 22 12.5831 22 11.4033C22 10.2242 21.9468 9.03862 21.8363 8.08722C21.7815 7.61445 21.7095 7.17289 21.6142 6.809C21.5667 6.62757 21.5074 6.44194 21.4303 6.27164C21.3608 6.1182 21.2389 5.88981 21.0254 5.70559Z\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><rect x=\\\"7.5\\\" y=\\\"8.34998\\\" width=\\\"3\\\" height=\\\"6.3\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></rect><rect x=\\\"13.5\\\" y=\\\"8.34998\\\" width=\\\"3\\\" height=\\\"6.3\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></rect>\",\"youtube-stop\":\"<path d=\\\"M21.0254 5.70559C20.7987 5.51003 20.5218 5.39682 20.3141 5.32589C20.0833 5.24708 19.8184 5.18189 19.5383 5.12629C18.9764 5.01478 18.2727 4.92629 17.4908 4.85709C15.9221 4.71827 13.955 4.65003 12 4.65002C10.045 4.65002 8.0779 4.71826 6.50923 4.85708C5.7273 4.92628 5.02357 5.01478 4.46174 5.12629C4.18161 5.18189 3.91672 5.24708 3.68594 5.32588C3.4782 5.39682 3.20126 5.51003 2.97462 5.70558C2.76112 5.88981 2.63916 6.1182 2.56971 6.27164C2.49263 6.44194 2.43333 6.62756 2.38581 6.809C2.29052 7.17288 2.21854 7.61445 2.16365 8.08721C2.05319 9.03861 2 10.2242 2 11.4033C2 12.5831 2.05326 13.7859 2.16311 14.7727C2.21784 15.2643 2.28883 15.723 2.38053 16.107C2.46043 16.4417 2.59126 16.8855 2.85131 17.2061C3.08981 17.5 3.43086 17.6352 3.60561 17.6982C3.82965 17.779 4.09015 17.8429 4.36115 17.896C4.90739 18.003 5.60964 18.0873 6.39637 18.1531C7.97657 18.2851 9.99449 18.35 12 18.35C14.0055 18.35 16.0234 18.2851 17.6036 18.1531C18.3904 18.0873 19.0926 18.003 19.6388 17.896C19.9098 17.8429 20.1703 17.779 20.3944 17.6982C20.5691 17.6352 20.9102 17.5 21.1487 17.2061C21.4087 16.8855 21.5396 16.4417 21.6195 16.1071C21.7112 15.723 21.7822 15.2643 21.8369 14.7727C21.9467 13.7859 22 12.5831 22 11.4033C22 10.2242 21.9468 9.03862 21.8363 8.08722C21.7815 7.61445 21.7095 7.17289 21.6142 6.809C21.5667 6.62757 21.5074 6.44194 21.4303 6.27164C21.3608 6.1182 21.2389 5.88981 21.0254 5.70559Z\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><rect x=\\\"8.39999\\\" y=\\\"8.77002\\\" width=\\\"7.2\\\" height=\\\"5.46\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></rect>\",\"youtube\":\"<path d=\\\"M20.5245 6.00694C20.3025 5.81544 20.0333 5.70603 19.836 5.63863C19.6156 5.56337 19.3637 5.50148 19.0989 5.44892C18.5677 5.34348 17.9037 5.26005 17.1675 5.19491C15.6904 5.06419 13.8392 5 12 5C10.1608 5 8.30956 5.06419 6.83246 5.1949C6.09632 5.26005 5.43231 5.34348 4.9011 5.44891C4.63628 5.50147 4.38443 5.56337 4.16403 5.63863C3.96667 5.70603 3.69746 5.81544 3.47552 6.00694C3.26514 6.18846 3.14612 6.41237 3.07941 6.55976C3.00507 6.724 2.94831 6.90201 2.90314 7.07448C2.81255 7.42043 2.74448 7.83867 2.69272 8.28448C2.58852 9.18195 2.53846 10.299 2.53846 11.409C2.53846 12.5198 2.58859 13.6529 2.69218 14.5835C2.74378 15.047 2.81086 15.4809 2.89786 15.8453C2.97306 16.1603 3.09841 16.5895 3.35221 16.9023C3.58757 17.1925 3.92217 17.324 4.08755 17.3836C4.30223 17.461 4.55045 17.5218 4.80667 17.572C5.32337 17.6733 5.98609 17.7527 6.72664 17.8146C8.2145 17.9389 10.1134 18 12 18C13.8865 18 15.7855 17.9389 17.2733 17.8146C18.0139 17.7527 18.6766 17.6733 19.1933 17.572C19.4495 17.5218 19.6978 17.461 19.9124 17.3836C20.0778 17.324 20.4124 17.1925 20.6478 16.9023C20.9016 16.5895 21.0269 16.1603 21.1021 15.8453C21.1891 15.4809 21.2562 15.047 21.3078 14.5835C21.4114 13.6529 21.4615 12.5198 21.4615 11.409C21.4615 10.299 21.4115 9.18195 21.3073 8.28448C21.2555 7.83868 21.1874 7.42043 21.0969 7.07448C21.0517 6.90201 20.9949 6.72401 20.9206 6.55976C20.8539 6.41236 20.7349 6.18846 20.5245 6.00694Z\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M14.5385 11.5L10.0962 14.3578L10.0962 8.64207L14.5385 11.5Z\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path>\",\"yuan-sign\":\"<path d=\\\"M11 20L11 12M6 4L11 12M11 12L16 4\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><line x1=\\\"15\\\" y1=\\\"13\\\" x2=\\\"7\\\" y2=\\\"13\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></line><line x1=\\\"15\\\" y1=\\\"16\\\" x2=\\\"7\\\" y2=\\\"16\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></line>\",\"zap-off\":\"<path d=\\\"M11.1782 14.1376L7.2411 21.3182L14 17.4159M14.7627 11.7308L20.2542 13.8051L18.1845 15\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M11.201 14.1243L3.55392 9.87915L5.27289 8.8867M9.77068 6.2899L16.5671 2.36601L12.8914 9.2316\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><line x1=\\\"4.4137\\\" y1=\\\"4.03821\\\" x2=\\\"21.0382\\\" y2=\\\"21.5863\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\"></line>\",\"zap-on\":\"<path d=\\\"M12.0933 10.7226L20.2542 13.8051L7.2411 21.3182L11.1782 14.1376\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path><path d=\\\"M11.201 14.1243L3.55392 9.87915L16.5671 2.36601L12.0933 10.7225\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></path>\",\"zoom-in\":\"<path d=\\\"M19.9604 11.4802C19.9604 13.8094 19.0227 15.9176 17.5019 17.4512C16.9332 18.0247 16.2834 18.5173 15.5716 18.9102C14.3594 19.5793 12.9658 19.9604 11.4802 19.9604C6.79672 19.9604 3 16.1637 3 11.4802C3 6.79672 6.79672 3 11.4802 3C16.1637 3 19.9604 6.79672 19.9604 11.4802Z\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\"></path><path d=\\\"M18.1553 18.1553L21.8871 21.8871\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\"></path><path d=\\\"M8 11.5492H15.0983\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\"></path><path d=\\\"M8 11.5492H15.0983\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\"></path><path d=\\\"M11.5492 15.0984L11.5492 8.00006\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\"></path>\",\"zoom-out\":\"<path d=\\\"M19.9604 11.4802C19.9604 13.8094 19.0227 15.9176 17.5019 17.4512C16.9332 18.0247 16.2834 18.5173 15.5716 18.9102C14.3594 19.5793 12.9658 19.9604 11.4802 19.9604C6.79672 19.9604 3 16.1637 3 11.4802C3 6.79672 6.79672 3 11.4802 3C16.1637 3 19.9604 6.79672 19.9604 11.4802Z\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\"></path><path d=\\\"M18.1553 18.1553L21.8871 21.8871\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\"></path><path d=\\\"M8 11.5492H15.0983\\\" stroke=\\\"#333333\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\"></path>\"}");

/***/ }),

/***/ "./node_modules/classnames/dedupe.js":
/*!*******************************************!*\
  !*** ./node_modules/classnames/dedupe.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2016 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var classNames = (function () {
		// don't inherit from Object so we can skip hasOwnProperty check later
		// http://stackoverflow.com/questions/15518328/creating-js-object-with-object-createnull#answer-21079232
		function StorageObject() {}
		StorageObject.prototype = Object.create(null);

		function _parseArray (resultSet, array) {
			var length = array.length;

			for (var i = 0; i < length; ++i) {
				_parse(resultSet, array[i]);
			}
		}

		var hasOwn = {}.hasOwnProperty;

		function _parseNumber (resultSet, num) {
			resultSet[num] = true;
		}

		function _parseObject (resultSet, object) {
			for (var k in object) {
				if (hasOwn.call(object, k)) {
					// set value to false instead of deleting it to avoid changing object structure
					// https://www.smashingmagazine.com/2012/11/writing-fast-memory-efficient-javascript/#de-referencing-misconceptions
					resultSet[k] = !!object[k];
				}
			}
		}

		var SPACE = /\s+/;
		function _parseString (resultSet, str) {
			var array = str.split(SPACE);
			var length = array.length;

			for (var i = 0; i < length; ++i) {
				resultSet[array[i]] = true;
			}
		}

		function _parse (resultSet, arg) {
			if (!arg) return;
			var argType = typeof arg;

			// 'foo bar'
			if (argType === 'string') {
				_parseString(resultSet, arg);

			// ['foo', 'bar', ...]
			} else if (Array.isArray(arg)) {
				_parseArray(resultSet, arg);

			// { 'foo': true, ... }
			} else if (argType === 'object') {
				_parseObject(resultSet, arg);

			// '130'
			} else if (argType === 'number') {
				_parseNumber(resultSet, arg);
			}
		}

		function _classNames () {
			// don't leak arguments
			// https://github.com/petkaantonov/bluebird/wiki/Optimization-killers#32-leaking-arguments
			var len = arguments.length;
			var args = Array(len);
			for (var i = 0; i < len; i++) {
				args[i] = arguments[i];
			}

			var classSet = new StorageObject();
			_parseArray(classSet, args);

			var list = [];

			for (var k in classSet) {
				if (classSet[k]) {
					list.push(k)
				}
			}

			return list.join(' ');
		}

		return _classNames;
	})();

	if ( true && module.exports) {
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),

/***/ "./node_modules/core-js/es/array/from.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/es/array/from.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
__webpack_require__(/*! ../../modules/es.array.from */ "./node_modules/core-js/modules/es.array.from.js");
var path = __webpack_require__(/*! ../../internals/path */ "./node_modules/core-js/internals/path.js");

module.exports = path.Array.from;


/***/ }),

/***/ "./node_modules/core-js/internals/a-function.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/a-function.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') {
    throw TypeError(String(it) + ' is not a function');
  } return it;
};


/***/ }),

/***/ "./node_modules/core-js/internals/an-object.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/an-object.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");

module.exports = function (it) {
  if (!isObject(it)) {
    throw TypeError(String(it) + ' is not an object');
  } return it;
};


/***/ }),

/***/ "./node_modules/core-js/internals/array-from.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/array-from.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var bind = __webpack_require__(/*! ../internals/bind-context */ "./node_modules/core-js/internals/bind-context.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");
var callWithSafeIterationClosing = __webpack_require__(/*! ../internals/call-with-safe-iteration-closing */ "./node_modules/core-js/internals/call-with-safe-iteration-closing.js");
var isArrayIteratorMethod = __webpack_require__(/*! ../internals/is-array-iterator-method */ "./node_modules/core-js/internals/is-array-iterator-method.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");
var createProperty = __webpack_require__(/*! ../internals/create-property */ "./node_modules/core-js/internals/create-property.js");
var getIteratorMethod = __webpack_require__(/*! ../internals/get-iterator-method */ "./node_modules/core-js/internals/get-iterator-method.js");

// `Array.from` method
// https://tc39.github.io/ecma262/#sec-array.from
module.exports = function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
  var O = toObject(arrayLike);
  var C = typeof this == 'function' ? this : Array;
  var argumentsLength = arguments.length;
  var mapfn = argumentsLength > 1 ? arguments[1] : undefined;
  var mapping = mapfn !== undefined;
  var index = 0;
  var iteratorMethod = getIteratorMethod(O);
  var length, result, step, iterator;
  if (mapping) mapfn = bind(mapfn, argumentsLength > 2 ? arguments[2] : undefined, 2);
  // if the target is not iterable or it's an array with the default iterator - use a simple case
  if (iteratorMethod != undefined && !(C == Array && isArrayIteratorMethod(iteratorMethod))) {
    iterator = iteratorMethod.call(O);
    result = new C();
    for (;!(step = iterator.next()).done; index++) {
      createProperty(result, index, mapping
        ? callWithSafeIterationClosing(iterator, mapfn, [step.value, index], true)
        : step.value
      );
    }
  } else {
    length = toLength(O.length);
    result = new C(length);
    for (;length > index; index++) {
      createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
    }
  }
  result.length = index;
  return result;
};


/***/ }),

/***/ "./node_modules/core-js/internals/array-includes.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/array-includes.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");
var toAbsoluteIndex = __webpack_require__(/*! ../internals/to-absolute-index */ "./node_modules/core-js/internals/to-absolute-index.js");

// `Array.prototype.{ indexOf, includes }` methods implementation
// false -> Array#indexOf
// https://tc39.github.io/ecma262/#sec-array.prototype.indexof
// true  -> Array#includes
// https://tc39.github.io/ecma262/#sec-array.prototype.includes
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),

/***/ "./node_modules/core-js/internals/bind-context.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/bind-context.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var aFunction = __webpack_require__(/*! ../internals/a-function */ "./node_modules/core-js/internals/a-function.js");

// optional / simple context binding
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 0: return function () {
      return fn.call(that);
    };
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "./node_modules/core-js/internals/call-with-safe-iteration-closing.js":
/*!****************************************************************************!*\
  !*** ./node_modules/core-js/internals/call-with-safe-iteration-closing.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");

// call something on iterator step with safe closing on error
module.exports = function (iterator, fn, value, ENTRIES) {
  try {
    return ENTRIES ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (error) {
    var returnMethod = iterator['return'];
    if (returnMethod !== undefined) anObject(returnMethod.call(iterator));
    throw error;
  }
};


/***/ }),

/***/ "./node_modules/core-js/internals/check-correctness-of-iteration.js":
/*!**************************************************************************!*\
  !*** ./node_modules/core-js/internals/check-correctness-of-iteration.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var ITERATOR = wellKnownSymbol('iterator');
var SAFE_CLOSING = false;

try {
  var called = 0;
  var iteratorWithReturn = {
    next: function () {
      return { done: !!called++ };
    },
    'return': function () {
      SAFE_CLOSING = true;
    }
  };
  iteratorWithReturn[ITERATOR] = function () {
    return this;
  };
  // eslint-disable-next-line no-throw-literal
  Array.from(iteratorWithReturn, function () { throw 2; });
} catch (error) { /* empty */ }

module.exports = function (exec, SKIP_CLOSING) {
  if (!SKIP_CLOSING && !SAFE_CLOSING) return false;
  var ITERATION_SUPPORT = false;
  try {
    var object = {};
    object[ITERATOR] = function () {
      return {
        next: function () {
          return { done: ITERATION_SUPPORT = true };
        }
      };
    };
    exec(object);
  } catch (error) { /* empty */ }
  return ITERATION_SUPPORT;
};


/***/ }),

/***/ "./node_modules/core-js/internals/classof-raw.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/classof-raw.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "./node_modules/core-js/internals/classof.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/internals/classof.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var classofRaw = __webpack_require__(/*! ../internals/classof-raw */ "./node_modules/core-js/internals/classof-raw.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
// ES3 wrong here
var CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (error) { /* empty */ }
};

// getting tag from ES6+ `Object.prototype.toString`
module.exports = function (it) {
  var O, tag, result;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (tag = tryGet(O = Object(it), TO_STRING_TAG)) == 'string' ? tag
    // builtinTag case
    : CORRECT_ARGUMENTS ? classofRaw(O)
    // ES3 arguments fallback
    : (result = classofRaw(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : result;
};


/***/ }),

/***/ "./node_modules/core-js/internals/copy-constructor-properties.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/internals/copy-constructor-properties.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var ownKeys = __webpack_require__(/*! ../internals/own-keys */ "./node_modules/core-js/internals/own-keys.js");
var getOwnPropertyDescriptorModule = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ "./node_modules/core-js/internals/object-get-own-property-descriptor.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");

module.exports = function (target, source) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!has(target, key)) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
  }
};


/***/ }),

/***/ "./node_modules/core-js/internals/correct-prototype-getter.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/correct-prototype-getter.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

module.exports = !fails(function () {
  function F() { /* empty */ }
  F.prototype.constructor = null;
  return Object.getPrototypeOf(new F()) !== F.prototype;
});


/***/ }),

/***/ "./node_modules/core-js/internals/create-iterator-constructor.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/internals/create-iterator-constructor.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var IteratorPrototype = __webpack_require__(/*! ../internals/iterators-core */ "./node_modules/core-js/internals/iterators-core.js").IteratorPrototype;
var create = __webpack_require__(/*! ../internals/object-create */ "./node_modules/core-js/internals/object-create.js");
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "./node_modules/core-js/internals/create-property-descriptor.js");
var setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ "./node_modules/core-js/internals/set-to-string-tag.js");
var Iterators = __webpack_require__(/*! ../internals/iterators */ "./node_modules/core-js/internals/iterators.js");

var returnThis = function () { return this; };

module.exports = function (IteratorConstructor, NAME, next) {
  var TO_STRING_TAG = NAME + ' Iterator';
  IteratorConstructor.prototype = create(IteratorPrototype, { next: createPropertyDescriptor(1, next) });
  setToStringTag(IteratorConstructor, TO_STRING_TAG, false, true);
  Iterators[TO_STRING_TAG] = returnThis;
  return IteratorConstructor;
};


/***/ }),

/***/ "./node_modules/core-js/internals/create-property-descriptor.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/internals/create-property-descriptor.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "./node_modules/core-js/internals/create-property.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/internals/create-property.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ "./node_modules/core-js/internals/to-primitive.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "./node_modules/core-js/internals/create-property-descriptor.js");

module.exports = function (object, key, value) {
  var propertyKey = toPrimitive(key);
  if (propertyKey in object) definePropertyModule.f(object, propertyKey, createPropertyDescriptor(0, value));
  else object[propertyKey] = value;
};


/***/ }),

/***/ "./node_modules/core-js/internals/define-iterator.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/internals/define-iterator.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var createIteratorConstructor = __webpack_require__(/*! ../internals/create-iterator-constructor */ "./node_modules/core-js/internals/create-iterator-constructor.js");
var getPrototypeOf = __webpack_require__(/*! ../internals/object-get-prototype-of */ "./node_modules/core-js/internals/object-get-prototype-of.js");
var setPrototypeOf = __webpack_require__(/*! ../internals/object-set-prototype-of */ "./node_modules/core-js/internals/object-set-prototype-of.js");
var setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ "./node_modules/core-js/internals/set-to-string-tag.js");
var hide = __webpack_require__(/*! ../internals/hide */ "./node_modules/core-js/internals/hide.js");
var redefine = __webpack_require__(/*! ../internals/redefine */ "./node_modules/core-js/internals/redefine.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "./node_modules/core-js/internals/is-pure.js");
var Iterators = __webpack_require__(/*! ../internals/iterators */ "./node_modules/core-js/internals/iterators.js");
var IteratorsCore = __webpack_require__(/*! ../internals/iterators-core */ "./node_modules/core-js/internals/iterators-core.js");

var IteratorPrototype = IteratorsCore.IteratorPrototype;
var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
var ITERATOR = wellKnownSymbol('iterator');
var KEYS = 'keys';
var VALUES = 'values';
var ENTRIES = 'entries';

var returnThis = function () { return this; };

module.exports = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
  createIteratorConstructor(IteratorConstructor, NAME, next);

  var getIterationMethod = function (KIND) {
    if (KIND === DEFAULT && defaultIterator) return defaultIterator;
    if (!BUGGY_SAFARI_ITERATORS && KIND in IterablePrototype) return IterablePrototype[KIND];
    switch (KIND) {
      case KEYS: return function keys() { return new IteratorConstructor(this, KIND); };
      case VALUES: return function values() { return new IteratorConstructor(this, KIND); };
      case ENTRIES: return function entries() { return new IteratorConstructor(this, KIND); };
    } return function () { return new IteratorConstructor(this); };
  };

  var TO_STRING_TAG = NAME + ' Iterator';
  var INCORRECT_VALUES_NAME = false;
  var IterablePrototype = Iterable.prototype;
  var nativeIterator = IterablePrototype[ITERATOR]
    || IterablePrototype['@@iterator']
    || DEFAULT && IterablePrototype[DEFAULT];
  var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
  var anyNativeIterator = NAME == 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
  var CurrentIteratorPrototype, methods, KEY;

  // fix native
  if (anyNativeIterator) {
    CurrentIteratorPrototype = getPrototypeOf(anyNativeIterator.call(new Iterable()));
    if (IteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
      if (!IS_PURE && getPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {
        if (setPrototypeOf) {
          setPrototypeOf(CurrentIteratorPrototype, IteratorPrototype);
        } else if (typeof CurrentIteratorPrototype[ITERATOR] != 'function') {
          hide(CurrentIteratorPrototype, ITERATOR, returnThis);
        }
      }
      // Set @@toStringTag to native iterators
      setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true, true);
      if (IS_PURE) Iterators[TO_STRING_TAG] = returnThis;
    }
  }

  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
    INCORRECT_VALUES_NAME = true;
    defaultIterator = function values() { return nativeIterator.call(this); };
  }

  // define iterator
  if ((!IS_PURE || FORCED) && IterablePrototype[ITERATOR] !== defaultIterator) {
    hide(IterablePrototype, ITERATOR, defaultIterator);
  }
  Iterators[NAME] = defaultIterator;

  // export additional methods
  if (DEFAULT) {
    methods = {
      values: getIterationMethod(VALUES),
      keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
      entries: getIterationMethod(ENTRIES)
    };
    if (FORCED) for (KEY in methods) {
      if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
        redefine(IterablePrototype, KEY, methods[KEY]);
      }
    } else $({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME }, methods);
  }

  return methods;
};


/***/ }),

/***/ "./node_modules/core-js/internals/descriptors.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/descriptors.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

// Thank's IE8 for his funny defineProperty
module.exports = !fails(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/internals/document-create-element.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/internals/document-create-element.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");

var document = global.document;
// typeof document.createElement is 'object' in old IE
var exist = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return exist ? document.createElement(it) : {};
};


/***/ }),

/***/ "./node_modules/core-js/internals/enum-bug-keys.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/enum-bug-keys.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// IE8- don't enum bug keys
module.exports = [
  'constructor',
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'valueOf'
];


/***/ }),

/***/ "./node_modules/core-js/internals/export.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/internals/export.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var getOwnPropertyDescriptor = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ "./node_modules/core-js/internals/object-get-own-property-descriptor.js").f;
var hide = __webpack_require__(/*! ../internals/hide */ "./node_modules/core-js/internals/hide.js");
var redefine = __webpack_require__(/*! ../internals/redefine */ "./node_modules/core-js/internals/redefine.js");
var setGlobal = __webpack_require__(/*! ../internals/set-global */ "./node_modules/core-js/internals/set-global.js");
var copyConstructorProperties = __webpack_require__(/*! ../internals/copy-constructor-properties */ "./node_modules/core-js/internals/copy-constructor-properties.js");
var isForced = __webpack_require__(/*! ../internals/is-forced */ "./node_modules/core-js/internals/is-forced.js");

/*
  options.target      - name of the target object
  options.global      - target is the global object
  options.stat        - export as static methods of target
  options.proto       - export as prototype methods of target
  options.real        - real prototype method for the `pure` version
  options.forced      - export even if the native feature is available
  options.bind        - bind methods to the target, required for the `pure` version
  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe      - use the simple assignment of property instead of delete + defineProperty
  options.sham        - add a flag to not completely full polyfills
  options.enumerable  - export as enumerable property
  options.noTargetGet - prevent calling a getter on target
*/
module.exports = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
  if (GLOBAL) {
    target = global;
  } else if (STATIC) {
    target = global[TARGET] || setGlobal(TARGET, {});
  } else {
    target = (global[TARGET] || {}).prototype;
  }
  if (target) for (key in source) {
    sourceProperty = source[key];
    if (options.noTargetGet) {
      descriptor = getOwnPropertyDescriptor(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];
    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contained in target
    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty === typeof targetProperty) continue;
      copyConstructorProperties(sourceProperty, targetProperty);
    }
    // add a flag to not completely full polyfills
    if (options.sham || (targetProperty && targetProperty.sham)) {
      hide(sourceProperty, 'sham', true);
    }
    // extend global
    redefine(target, key, sourceProperty, options);
  }
};


/***/ }),

/***/ "./node_modules/core-js/internals/fails.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/internals/fails.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};


/***/ }),

/***/ "./node_modules/core-js/internals/function-to-string.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/internals/function-to-string.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(/*! ../internals/shared */ "./node_modules/core-js/internals/shared.js");

module.exports = shared('native-function-to-string', Function.toString);


/***/ }),

/***/ "./node_modules/core-js/internals/get-iterator-method.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/internals/get-iterator-method.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(/*! ../internals/classof */ "./node_modules/core-js/internals/classof.js");
var Iterators = __webpack_require__(/*! ../internals/iterators */ "./node_modules/core-js/internals/iterators.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var ITERATOR = wellKnownSymbol('iterator');

module.exports = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),

/***/ "./node_modules/core-js/internals/global.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/internals/global.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var O = 'object';
var check = function (it) {
  return it && it.Math == Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports =
  // eslint-disable-next-line no-undef
  check(typeof globalThis == O && globalThis) ||
  check(typeof window == O && window) ||
  check(typeof self == O && self) ||
  check(typeof global == O && global) ||
  // eslint-disable-next-line no-new-func
  Function('return this')();

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/core-js/internals/has.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/internals/has.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;

module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "./node_modules/core-js/internals/hidden-keys.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/hidden-keys.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "./node_modules/core-js/internals/hide.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/internals/hide.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "./node_modules/core-js/internals/create-property-descriptor.js");

module.exports = DESCRIPTORS ? function (object, key, value) {
  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "./node_modules/core-js/internals/html.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/internals/html.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");

var document = global.document;

module.exports = document && document.documentElement;


/***/ }),

/***/ "./node_modules/core-js/internals/ie8-dom-define.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/ie8-dom-define.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var createElement = __webpack_require__(/*! ../internals/document-create-element */ "./node_modules/core-js/internals/document-create-element.js");

// Thank's IE8 for his funny defineProperty
module.exports = !DESCRIPTORS && !fails(function () {
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/internals/indexed-object.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/indexed-object.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var classof = __webpack_require__(/*! ../internals/classof-raw */ "./node_modules/core-js/internals/classof-raw.js");

var split = ''.split;

module.exports = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins
  return !Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof(it) == 'String' ? split.call(it, '') : Object(it);
} : Object;


/***/ }),

/***/ "./node_modules/core-js/internals/internal-state.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/internal-state.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_WEAK_MAP = __webpack_require__(/*! ../internals/native-weak-map */ "./node_modules/core-js/internals/native-weak-map.js");
var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var hide = __webpack_require__(/*! ../internals/hide */ "./node_modules/core-js/internals/hide.js");
var objectHas = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var sharedKey = __webpack_require__(/*! ../internals/shared-key */ "./node_modules/core-js/internals/shared-key.js");
var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ "./node_modules/core-js/internals/hidden-keys.js");

var WeakMap = global.WeakMap;
var set, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject(it) || (state = get(it)).type !== TYPE) {
      throw TypeError('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};

if (NATIVE_WEAK_MAP) {
  var store = new WeakMap();
  var wmget = store.get;
  var wmhas = store.has;
  var wmset = store.set;
  set = function (it, metadata) {
    wmset.call(store, it, metadata);
    return metadata;
  };
  get = function (it) {
    return wmget.call(store, it) || {};
  };
  has = function (it) {
    return wmhas.call(store, it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys[STATE] = true;
  set = function (it, metadata) {
    hide(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return objectHas(it, STATE) ? it[STATE] : {};
  };
  has = function (it) {
    return objectHas(it, STATE);
  };
}

module.exports = {
  set: set,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};


/***/ }),

/***/ "./node_modules/core-js/internals/is-array-iterator-method.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/is-array-iterator-method.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
var Iterators = __webpack_require__(/*! ../internals/iterators */ "./node_modules/core-js/internals/iterators.js");

var ITERATOR = wellKnownSymbol('iterator');
var ArrayPrototype = Array.prototype;

// check on default Array iterator
module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayPrototype[ITERATOR] === it);
};


/***/ }),

/***/ "./node_modules/core-js/internals/is-forced.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/is-forced.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

var replacement = /#|\.prototype\./;

var isForced = function (feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true
    : value == NATIVE ? false
    : typeof detection == 'function' ? fails(detection)
    : !!detection;
};

var normalize = isForced.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced.data = {};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';

module.exports = isForced;


/***/ }),

/***/ "./node_modules/core-js/internals/is-object.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/is-object.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "./node_modules/core-js/internals/is-pure.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/internals/is-pure.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = false;


/***/ }),

/***/ "./node_modules/core-js/internals/iterators-core.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/iterators-core.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var getPrototypeOf = __webpack_require__(/*! ../internals/object-get-prototype-of */ "./node_modules/core-js/internals/object-get-prototype-of.js");
var hide = __webpack_require__(/*! ../internals/hide */ "./node_modules/core-js/internals/hide.js");
var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "./node_modules/core-js/internals/is-pure.js");

var ITERATOR = wellKnownSymbol('iterator');
var BUGGY_SAFARI_ITERATORS = false;

var returnThis = function () { return this; };

// `%IteratorPrototype%` object
// https://tc39.github.io/ecma262/#sec-%iteratorprototype%-object
var IteratorPrototype, PrototypeOfArrayIteratorPrototype, arrayIterator;

if ([].keys) {
  arrayIterator = [].keys();
  // Safari 8 has buggy iterators w/o `next`
  if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS = true;
  else {
    PrototypeOfArrayIteratorPrototype = getPrototypeOf(getPrototypeOf(arrayIterator));
    if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype = PrototypeOfArrayIteratorPrototype;
  }
}

if (IteratorPrototype == undefined) IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
if (!IS_PURE && !has(IteratorPrototype, ITERATOR)) hide(IteratorPrototype, ITERATOR, returnThis);

module.exports = {
  IteratorPrototype: IteratorPrototype,
  BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS
};


/***/ }),

/***/ "./node_modules/core-js/internals/iterators.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/iterators.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "./node_modules/core-js/internals/native-symbol.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/native-symbol.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
  // Chrome 38 Symbol has incorrect toString conversion
  // eslint-disable-next-line no-undef
  return !String(Symbol());
});


/***/ }),

/***/ "./node_modules/core-js/internals/native-weak-map.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/internals/native-weak-map.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var nativeFunctionToString = __webpack_require__(/*! ../internals/function-to-string */ "./node_modules/core-js/internals/function-to-string.js");

var WeakMap = global.WeakMap;

module.exports = typeof WeakMap === 'function' && /native code/.test(nativeFunctionToString.call(WeakMap));


/***/ }),

/***/ "./node_modules/core-js/internals/object-create.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/object-create.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var defineProperties = __webpack_require__(/*! ../internals/object-define-properties */ "./node_modules/core-js/internals/object-define-properties.js");
var enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ "./node_modules/core-js/internals/enum-bug-keys.js");
var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ "./node_modules/core-js/internals/hidden-keys.js");
var html = __webpack_require__(/*! ../internals/html */ "./node_modules/core-js/internals/html.js");
var documentCreateElement = __webpack_require__(/*! ../internals/document-create-element */ "./node_modules/core-js/internals/document-create-element.js");
var sharedKey = __webpack_require__(/*! ../internals/shared-key */ "./node_modules/core-js/internals/shared-key.js");
var IE_PROTO = sharedKey('IE_PROTO');

var PROTOTYPE = 'prototype';
var Empty = function () { /* empty */ };

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = documentCreateElement('iframe');
  var length = enumBugKeys.length;
  var lt = '<';
  var script = 'script';
  var gt = '>';
  var js = 'java' + script + ':';
  var iframeDocument;
  iframe.style.display = 'none';
  html.appendChild(iframe);
  iframe.src = String(js);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + script + gt + 'document.F=Object' + lt + '/' + script + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (length--) delete createDict[PROTOTYPE][enumBugKeys[length]];
  return createDict();
};

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : defineProperties(result, Properties);
};

hiddenKeys[IE_PROTO] = true;


/***/ }),

/***/ "./node_modules/core-js/internals/object-define-properties.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/object-define-properties.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var objectKeys = __webpack_require__(/*! ../internals/object-keys */ "./node_modules/core-js/internals/object-keys.js");

module.exports = DESCRIPTORS ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = objectKeys(Properties);
  var length = keys.length;
  var i = 0;
  var key;
  while (length > i) definePropertyModule.f(O, key = keys[i++], Properties[key]);
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-define-property.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/internals/object-define-property.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ../internals/ie8-dom-define */ "./node_modules/core-js/internals/ie8-dom-define.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ "./node_modules/core-js/internals/to-primitive.js");

var nativeDefineProperty = Object.defineProperty;

exports.f = DESCRIPTORS ? nativeDefineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return nativeDefineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-get-own-property-descriptor.js":
/*!******************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-own-property-descriptor.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var propertyIsEnumerableModule = __webpack_require__(/*! ../internals/object-property-is-enumerable */ "./node_modules/core-js/internals/object-property-is-enumerable.js");
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "./node_modules/core-js/internals/create-property-descriptor.js");
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
var toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ "./node_modules/core-js/internals/to-primitive.js");
var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ../internals/ie8-dom-define */ "./node_modules/core-js/internals/ie8-dom-define.js");

var nativeGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

exports.f = DESCRIPTORS ? nativeGetOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return nativeGetOwnPropertyDescriptor(O, P);
  } catch (error) { /* empty */ }
  if (has(O, P)) return createPropertyDescriptor(!propertyIsEnumerableModule.f.call(O, P), O[P]);
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-get-own-property-names.js":
/*!*************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-own-property-names.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var internalObjectKeys = __webpack_require__(/*! ../internals/object-keys-internal */ "./node_modules/core-js/internals/object-keys-internal.js");
var enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ "./node_modules/core-js/internals/enum-bug-keys.js");

var hiddenKeys = enumBugKeys.concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys);
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-get-own-property-symbols.js":
/*!***************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-own-property-symbols.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "./node_modules/core-js/internals/object-get-prototype-of.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-prototype-of.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");
var sharedKey = __webpack_require__(/*! ../internals/shared-key */ "./node_modules/core-js/internals/shared-key.js");
var CORRECT_PROTOTYPE_GETTER = __webpack_require__(/*! ../internals/correct-prototype-getter */ "./node_modules/core-js/internals/correct-prototype-getter.js");

var IE_PROTO = sharedKey('IE_PROTO');
var ObjectPrototype = Object.prototype;

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
module.exports = CORRECT_PROTOTYPE_GETTER ? Object.getPrototypeOf : function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectPrototype : null;
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-keys-internal.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/internals/object-keys-internal.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
var arrayIncludes = __webpack_require__(/*! ../internals/array-includes */ "./node_modules/core-js/internals/array-includes.js");
var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ "./node_modules/core-js/internals/hidden-keys.js");

var arrayIndexOf = arrayIncludes(false);

module.exports = function (object, names) {
  var O = toIndexedObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !has(hiddenKeys, key) && has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-keys.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/object-keys.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__(/*! ../internals/object-keys-internal */ "./node_modules/core-js/internals/object-keys-internal.js");
var enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ "./node_modules/core-js/internals/enum-bug-keys.js");

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
module.exports = Object.keys || function keys(O) {
  return internalObjectKeys(O, enumBugKeys);
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-property-is-enumerable.js":
/*!*************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-property-is-enumerable.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var nativePropertyIsEnumerable = {}.propertyIsEnumerable;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !nativePropertyIsEnumerable.call({ 1: 2 }, 1);

exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor(this, V);
  return !!descriptor && descriptor.enumerable;
} : nativePropertyIsEnumerable;


/***/ }),

/***/ "./node_modules/core-js/internals/object-set-prototype-of.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/internals/object-set-prototype-of.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var validateSetPrototypeOfArguments = __webpack_require__(/*! ../internals/validate-set-prototype-of-arguments */ "./node_modules/core-js/internals/validate-set-prototype-of-arguments.js");

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
module.exports = Object.setPrototypeOf || ('__proto__' in {} ? function () {
  var correctSetter = false;
  var test = {};
  var setter;
  try {
    setter = Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set;
    setter.call(test, []);
    correctSetter = test instanceof Array;
  } catch (error) { /* empty */ }
  return function setPrototypeOf(O, proto) {
    validateSetPrototypeOfArguments(O, proto);
    if (correctSetter) setter.call(O, proto);
    else O.__proto__ = proto;
    return O;
  };
}() : undefined);


/***/ }),

/***/ "./node_modules/core-js/internals/own-keys.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/internals/own-keys.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var getOwnPropertyNamesModule = __webpack_require__(/*! ../internals/object-get-own-property-names */ "./node_modules/core-js/internals/object-get-own-property-names.js");
var getOwnPropertySymbolsModule = __webpack_require__(/*! ../internals/object-get-own-property-symbols */ "./node_modules/core-js/internals/object-get-own-property-symbols.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");

var Reflect = global.Reflect;

// all object keys, includes non-enumerable and symbols
module.exports = Reflect && Reflect.ownKeys || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;
};


/***/ }),

/***/ "./node_modules/core-js/internals/path.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/internals/path.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");


/***/ }),

/***/ "./node_modules/core-js/internals/redefine.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/internals/redefine.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var shared = __webpack_require__(/*! ../internals/shared */ "./node_modules/core-js/internals/shared.js");
var hide = __webpack_require__(/*! ../internals/hide */ "./node_modules/core-js/internals/hide.js");
var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var setGlobal = __webpack_require__(/*! ../internals/set-global */ "./node_modules/core-js/internals/set-global.js");
var nativeFunctionToString = __webpack_require__(/*! ../internals/function-to-string */ "./node_modules/core-js/internals/function-to-string.js");
var InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ "./node_modules/core-js/internals/internal-state.js");

var getInternalState = InternalStateModule.get;
var enforceInternalState = InternalStateModule.enforce;
var TEMPLATE = String(nativeFunctionToString).split('toString');

shared('inspectSource', function (it) {
  return nativeFunctionToString.call(it);
});

(module.exports = function (O, key, value, options) {
  var unsafe = options ? !!options.unsafe : false;
  var simple = options ? !!options.enumerable : false;
  var noTargetGet = options ? !!options.noTargetGet : false;
  if (typeof value == 'function') {
    if (typeof key == 'string' && !has(value, 'name')) hide(value, 'name', key);
    enforceInternalState(value).source = TEMPLATE.join(typeof key == 'string' ? key : '');
  }
  if (O === global) {
    if (simple) O[key] = value;
    else setGlobal(key, value);
    return;
  } else if (!unsafe) {
    delete O[key];
  } else if (!noTargetGet && O[key]) {
    simple = true;
  }
  if (simple) O[key] = value;
  else hide(O, key, value);
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, 'toString', function toString() {
  return typeof this == 'function' && getInternalState(this).source || nativeFunctionToString.call(this);
});


/***/ }),

/***/ "./node_modules/core-js/internals/require-object-coercible.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/require-object-coercible.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// `RequireObjectCoercible` abstract operation
// https://tc39.github.io/ecma262/#sec-requireobjectcoercible
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on " + it);
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/internals/set-global.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/set-global.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var hide = __webpack_require__(/*! ../internals/hide */ "./node_modules/core-js/internals/hide.js");

module.exports = function (key, value) {
  try {
    hide(global, key, value);
  } catch (error) {
    global[key] = value;
  } return value;
};


/***/ }),

/***/ "./node_modules/core-js/internals/set-to-string-tag.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/set-to-string-tag.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js").f;
var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');

module.exports = function (it, TAG, STATIC) {
  if (it && !has(it = STATIC ? it : it.prototype, TO_STRING_TAG)) {
    defineProperty(it, TO_STRING_TAG, { configurable: true, value: TAG });
  }
};


/***/ }),

/***/ "./node_modules/core-js/internals/shared-key.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/shared-key.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(/*! ../internals/shared */ "./node_modules/core-js/internals/shared.js");
var uid = __webpack_require__(/*! ../internals/uid */ "./node_modules/core-js/internals/uid.js");

var keys = shared('keys');

module.exports = function (key) {
  return keys[key] || (keys[key] = uid(key));
};


/***/ }),

/***/ "./node_modules/core-js/internals/shared.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/internals/shared.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var setGlobal = __webpack_require__(/*! ../internals/set-global */ "./node_modules/core-js/internals/set-global.js");
var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "./node_modules/core-js/internals/is-pure.js");

var SHARED = '__core-js_shared__';
var store = global[SHARED] || setGlobal(SHARED, {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.1.3',
  mode: IS_PURE ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "./node_modules/core-js/internals/string-at.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/string-at.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ../internals/to-integer */ "./node_modules/core-js/internals/to-integer.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");

// CONVERT_TO_STRING: true  -> String#at
// CONVERT_TO_STRING: false -> String#codePointAt
module.exports = function (that, pos, CONVERT_TO_STRING) {
  var S = String(requireObjectCoercible(that));
  var position = toInteger(pos);
  var size = S.length;
  var first, second;
  if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
  first = S.charCodeAt(position);
  return first < 0xD800 || first > 0xDBFF || position + 1 === size
    || (second = S.charCodeAt(position + 1)) < 0xDC00 || second > 0xDFFF
      ? CONVERT_TO_STRING ? S.charAt(position) : first
      : CONVERT_TO_STRING ? S.slice(position, position + 2) : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-absolute-index.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/to-absolute-index.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ../internals/to-integer */ "./node_modules/core-js/internals/to-integer.js");

var max = Math.max;
var min = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(length, length).
module.exports = function (index, length) {
  var integer = toInteger(index);
  return integer < 0 ? max(integer + length, 0) : min(integer, length);
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-indexed-object.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/to-indexed-object.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// toObject with fallback for non-array-like ES3 strings
var IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ "./node_modules/core-js/internals/indexed-object.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");

module.exports = function (it) {
  return IndexedObject(requireObjectCoercible(it));
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-integer.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/to-integer.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var ceil = Math.ceil;
var floor = Math.floor;

// `ToInteger` abstract operation
// https://tc39.github.io/ecma262/#sec-tointeger
module.exports = function (argument) {
  return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-length.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/to-length.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ../internals/to-integer */ "./node_modules/core-js/internals/to-integer.js");

var min = Math.min;

// `ToLength` abstract operation
// https://tc39.github.io/ecma262/#sec-tolength
module.exports = function (argument) {
  return argument > 0 ? min(toInteger(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-object.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/to-object.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");

// `ToObject` abstract operation
// https://tc39.github.io/ecma262/#sec-toobject
module.exports = function (argument) {
  return Object(requireObjectCoercible(argument));
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-primitive.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/to-primitive.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");

// 7.1.1 ToPrimitive(input [, PreferredType])
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "./node_modules/core-js/internals/uid.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/internals/uid.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var id = 0;
var postfix = Math.random();

module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + postfix).toString(36));
};


/***/ }),

/***/ "./node_modules/core-js/internals/validate-set-prototype-of-arguments.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/core-js/internals/validate-set-prototype-of-arguments.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");

module.exports = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) {
    throw TypeError("Can't set " + String(proto) + ' as a prototype');
  }
};


/***/ }),

/***/ "./node_modules/core-js/internals/well-known-symbol.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/well-known-symbol.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var shared = __webpack_require__(/*! ../internals/shared */ "./node_modules/core-js/internals/shared.js");
var uid = __webpack_require__(/*! ../internals/uid */ "./node_modules/core-js/internals/uid.js");
var NATIVE_SYMBOL = __webpack_require__(/*! ../internals/native-symbol */ "./node_modules/core-js/internals/native-symbol.js");

var Symbol = global.Symbol;
var store = shared('wks');

module.exports = function (name) {
  return store[name] || (store[name] = NATIVE_SYMBOL && Symbol[name]
    || (NATIVE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.from.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.from.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var from = __webpack_require__(/*! ../internals/array-from */ "./node_modules/core-js/internals/array-from.js");
var checkCorrectnessOfIteration = __webpack_require__(/*! ../internals/check-correctness-of-iteration */ "./node_modules/core-js/internals/check-correctness-of-iteration.js");

var INCORRECT_ITERATION = !checkCorrectnessOfIteration(function (iterable) {
  Array.from(iterable);
});

// `Array.from` method
// https://tc39.github.io/ecma262/#sec-array.from
$({ target: 'Array', stat: true, forced: INCORRECT_ITERATION }, {
  from: from
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.string.iterator.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.iterator.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var codePointAt = __webpack_require__(/*! ../internals/string-at */ "./node_modules/core-js/internals/string-at.js");
var InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ "./node_modules/core-js/internals/internal-state.js");
var defineIterator = __webpack_require__(/*! ../internals/define-iterator */ "./node_modules/core-js/internals/define-iterator.js");

var STRING_ITERATOR = 'String Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(STRING_ITERATOR);

// `String.prototype[@@iterator]` method
// https://tc39.github.io/ecma262/#sec-string.prototype-@@iterator
defineIterator(String, 'String', function (iterated) {
  setInternalState(this, {
    type: STRING_ITERATOR,
    string: String(iterated),
    index: 0
  });
// `%StringIteratorPrototype%.next` method
// https://tc39.github.io/ecma262/#sec-%stringiteratorprototype%.next
}, function next() {
  var state = getInternalState(this);
  var string = state.string;
  var index = state.index;
  var point;
  if (index >= string.length) return { value: undefined, done: true };
  point = codePointAt(string, index, true);
  state.index += point.length;
  return { value: point, done: false };
});


/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./src/default-attrs.json":
/*!********************************!*\
  !*** ./src/default-attrs.json ***!
  \********************************/
/*! exports provided: xmlns, width, height, viewBox, fill, stroke, stroke-width, stroke-linecap, stroke-linejoin, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"xmlns\":\"http://www.w3.org/2000/svg\",\"width\":24,\"height\":24,\"viewBox\":\"0 0 24 24\",\"fill\":\"none\",\"stroke\":\"currentColor\",\"stroke-width\":2,\"stroke-linecap\":\"round\",\"stroke-linejoin\":\"round\"}");

/***/ }),

/***/ "./src/icon.js":
/*!*********************!*\
  !*** ./src/icon.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dedupe = __webpack_require__(/*! classnames/dedupe */ "./node_modules/classnames/dedupe.js");

var _dedupe2 = _interopRequireDefault(_dedupe);

var _defaultAttrs = __webpack_require__(/*! ./default-attrs.json */ "./src/default-attrs.json");

var _defaultAttrs2 = _interopRequireDefault(_defaultAttrs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Icon = function () {
  function Icon(name, contents) {
    var tags = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

    _classCallCheck(this, Icon);

    this.name = name;
    this.contents = contents;
    this.tags = tags;
    this.attrs = _extends({}, _defaultAttrs2.default, { class: 'hicon hicon-' + name });
  }

  /**
   * Create an SVG string.
   * @param {Object} attrs
   * @returns {string}
   */


  _createClass(Icon, [{
    key: 'toSvg',
    value: function toSvg() {
      var attrs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var combinedAttrs = _extends({}, this.attrs, attrs, { class: (0, _dedupe2.default)(this.attrs.class, attrs.class) });

      return '<svg ' + attrsToString(combinedAttrs) + '>' + this.contents + '</svg>';
    }

    /**
     * Return string representation of an `Icon`.
     *
     * Added for backward compatibility. If old code expects `hicon.icons.<name>`
     * to be a string, `toString()` will get implicitly called.
     *
     * @returns {string}
     */

  }, {
    key: 'toString',
    value: function toString() {
      return this.contents;
    }
  }]);

  return Icon;
}();

/**
 * Convert attributes object to string of HTML attributes.
 * @param {Object} attrs
 * @returns {string}
 */


function attrsToString(attrs) {
  return Object.keys(attrs).map(function (key) {
    return key + '="' + attrs[key] + '"';
  }).join(' ');
}

exports.default = Icon;

/***/ }),

/***/ "./src/icons.js":
/*!**********************!*\
  !*** ./src/icons.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _icon = __webpack_require__(/*! ./icon */ "./src/icon.js");

var _icon2 = _interopRequireDefault(_icon);

var _icons = __webpack_require__(/*! ../dist/icons.json */ "./dist/icons.json");

var _icons2 = _interopRequireDefault(_icons);

var _tags = __webpack_require__(/*! ./tags.json */ "./src/tags.json");

var _tags2 = _interopRequireDefault(_tags);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = Object.keys(_icons2.default).map(function (key) {
  return new _icon2.default(key, _icons2.default[key], _tags2.default[key]);
}).reduce(function (object, icon) {
  object[icon.name] = icon;
  return object;
}, {});

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _icons = __webpack_require__(/*! ./icons */ "./src/icons.js");

var _icons2 = _interopRequireDefault(_icons);

var _toSvg = __webpack_require__(/*! ./to-svg */ "./src/to-svg.js");

var _toSvg2 = _interopRequireDefault(_toSvg);

var _replace = __webpack_require__(/*! ./replace */ "./src/replace.js");

var _replace2 = _interopRequireDefault(_replace);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = { icons: _icons2.default, toSvg: _toSvg2.default, replace: _replace2.default };

/***/ }),

/***/ "./src/replace.js":
/*!************************!*\
  !*** ./src/replace.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /* eslint-env browser */


var _dedupe = __webpack_require__(/*! classnames/dedupe */ "./node_modules/classnames/dedupe.js");

var _dedupe2 = _interopRequireDefault(_dedupe);

var _icons = __webpack_require__(/*! ./icons */ "./src/icons.js");

var _icons2 = _interopRequireDefault(_icons);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Replace all HTML elements that have a `load-hicon` attribute with SVG markup
 * corresponding to the element's `load-hicon` attribute value.
 * @param {Object} attrs
 */
function replace() {
  var attrs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  if (typeof document === 'undefined') {
    throw new Error('`hicon.replace()` only works in a browser environment.');
  }

  var elementsToReplace = document.querySelectorAll('[load-hicon]');

  Array.from(elementsToReplace).forEach(function (element) {
    return replaceElement(element, attrs);
  });
}

/**
 * Replace a single HTML element with SVG markup
 * corresponding to the element's `load-hicon` attribute value.
 * @param {HTMLElement} element
 * @param {Object} attrs
 */
function replaceElement(element) {
  var attrs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var elementAttrs = getAttrs(element);
  var name = elementAttrs['load-hicon'];
  delete elementAttrs['load-hicon'];

  var svgString = _icons2.default[name].toSvg(_extends({}, attrs, elementAttrs, { class: (0, _dedupe2.default)(attrs.class, elementAttrs.class) }));
  var svgDocument = new DOMParser().parseFromString(svgString, 'image/svg+xml');
  var svgElement = svgDocument.querySelector('svg');

  element.parentNode.replaceChild(svgElement, element);
}

/**
 * Get the attributes of an HTML element.
 * @param {HTMLElement} element
 * @returns {Object}
 */
function getAttrs(element) {
  return Array.from(element.attributes).reduce(function (attrs, attr) {
    attrs[attr.name] = attr.value;
    return attrs;
  }, {});
}

exports.default = replace;

/***/ }),

/***/ "./src/tags.json":
/*!***********************!*\
  !*** ./src/tags.json ***!
  \***********************/
/*! exports provided: facebook, hicons, lens, zoom-in, zoom-out, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"facebook\":[\"facebook\"],\"hicons\":[\"hicons\"],\"lens\":[\"lens\"],\"zoom-in\":[\"magnifying glass\"],\"zoom-out\":[\"magnifying glass\"]}");

/***/ }),

/***/ "./src/to-svg.js":
/*!***********************!*\
  !*** ./src/to-svg.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _icons = __webpack_require__(/*! ./icons */ "./src/icons.js");

var _icons2 = _interopRequireDefault(_icons);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Create an SVG string.
 * @deprecated
 * @param {string} name
 * @param {Object} attrs
 * @returns {string}
 */
function toSvg(name) {
  var attrs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  console.warn('hicon.toSvg() is deprecated. Please use hicon.icons[name].toSvg() instead.');

  if (!name) {
    throw new Error('The required `key` (icon name) parameter is missing.');
  }

  if (!_icons2.default[name]) {
    throw new Error('No icon matching \'' + name + '\'. See the complete list of icons at https://hicon.cosm.ws');
  }

  return _icons2.default[name].toSvg(attrs);
}

exports.default = toSvg;

/***/ }),

/***/ 0:
/*!**************************************************!*\
  !*** multi core-js/es/array/from ./src/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! core-js/es/array/from */"./node_modules/core-js/es/array/from.js");
module.exports = __webpack_require__(/*! /Users/cosimo/Documents/Works/Hicons/webpack/test_5/a/src/index.js */"./src/index.js");


/***/ })

/******/ });
});
//# sourceMappingURL=hicon.js.map