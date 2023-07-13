"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/subscribe";
exports.ids = ["pages/api/subscribe"];
exports.modules = {

/***/ "micro":
/*!************************!*\
  !*** external "micro" ***!
  \************************/
/***/ ((module) => {

module.exports = require("micro");

/***/ }),

/***/ "micro-cors":
/*!*****************************!*\
  !*** external "micro-cors" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("micro-cors");

/***/ }),

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ "(api)/./src/pages/api/subscribe.js":
/*!************************************!*\
  !*** ./src/pages/api/subscribe.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var micro__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! micro */ \"micro\");\n/* harmony import */ var micro__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(micro__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var micro_cors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! micro-cors */ \"micro-cors\");\n/* harmony import */ var micro_cors__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(micro_cors__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst corsMiddleware = micro_cors__WEBPACK_IMPORTED_MODULE_1___default()();\nlet client;\nconst connectToDb = async ()=>{\n    if (!client) {\n        const uri = process.env.MONGODB_URI;\n        client = new mongodb__WEBPACK_IMPORTED_MODULE_2__.MongoClient(uri, {\n            useNewUrlParser: true,\n            useUnifiedTopology: true\n        });\n        await client.connect();\n    }\n    return client.db(\"Cluster0\");\n};\nconst handler = async (req, res)=>{\n    if (req.method === \"POST\") {\n        const db = await connectToDb();\n        const collection = db.collection(\"subscriptions\");\n        try {\n            await collection.insertOne({\n                email: req.body.email\n            });\n            (0,micro__WEBPACK_IMPORTED_MODULE_0__.send)(res, 200, {\n                status: \"Ok\"\n            });\n        } catch (err) {\n            (0,micro__WEBPACK_IMPORTED_MODULE_0__.send)(res, 500, {\n                status: \"Error\",\n                message: err.toString()\n            });\n        }\n    } else {\n        (0,micro__WEBPACK_IMPORTED_MODULE_0__.send)(res, 405, {\n            status: \"Method Not Allowed\"\n        });\n    }\n};\nprocess.on(\"exit\", (code)=>{\n    if (client) {\n        client.close();\n    }\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (corsMiddleware(handler));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL3N1YnNjcmliZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQTZCO0FBQ0M7QUFDUTtBQUV0QyxNQUFNRyxpQkFBaUJGLGlEQUFJQTtBQUUzQixJQUFJRztBQUVKLE1BQU1DLGNBQWM7SUFDbEIsSUFBSSxDQUFDRCxRQUFRO1FBQ1gsTUFBTUUsTUFBTUMsUUFBUUMsR0FBRyxDQUFDQyxXQUFXO1FBQ25DTCxTQUFTLElBQUlGLGdEQUFXQSxDQUFDSSxLQUFLO1lBQUVJLGlCQUFpQjtZQUFNQyxvQkFBb0I7UUFBSztRQUNoRixNQUFNUCxPQUFPUSxPQUFPO0lBQ3RCO0lBRUEsT0FBT1IsT0FBT1MsRUFBRSxDQUFDO0FBQ25CO0FBRUEsTUFBTUMsVUFBVSxPQUFPQyxLQUFLQztJQUMxQixJQUFJRCxJQUFJRSxNQUFNLEtBQUssUUFBUTtRQUN6QixNQUFNSixLQUFLLE1BQU1SO1FBQ2pCLE1BQU1hLGFBQWFMLEdBQUdLLFVBQVUsQ0FBQztRQUVqQyxJQUFJO1lBQ0YsTUFBTUEsV0FBV0MsU0FBUyxDQUFDO2dCQUFFQyxPQUFPTCxJQUFJTSxJQUFJLENBQUNELEtBQUs7WUFBQztZQUNuRHBCLDJDQUFJQSxDQUFDZ0IsS0FBSyxLQUFLO2dCQUFFTSxRQUFRO1lBQUs7UUFDaEMsRUFBRSxPQUFPQyxLQUFLO1lBQ1p2QiwyQ0FBSUEsQ0FBQ2dCLEtBQUssS0FBSztnQkFBRU0sUUFBUTtnQkFBU0UsU0FBU0QsSUFBSUUsUUFBUTtZQUFHO1FBQzVEO0lBQ0YsT0FBTztRQUNMekIsMkNBQUlBLENBQUNnQixLQUFLLEtBQUs7WUFBRU0sUUFBUTtRQUFxQjtJQUNoRDtBQUNGO0FBRUFmLFFBQVFtQixFQUFFLENBQUMsUUFBUSxDQUFDQztJQUNsQixJQUFJdkIsUUFBUTtRQUNWQSxPQUFPd0IsS0FBSztJQUNkO0FBQ0Y7QUFFQSxpRUFBZXpCLGVBQWVXLFFBQVFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sc2F0LXBhcnRuZXJzLy4vc3JjL3BhZ2VzL2FwaS9zdWJzY3JpYmUuanM/MTUyMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBzZW5kIH0gZnJvbSAnbWljcm8nO1xuaW1wb3J0IGNvcnMgZnJvbSAnbWljcm8tY29ycyc7XG5pbXBvcnQgeyBNb25nb0NsaWVudCB9IGZyb20gJ21vbmdvZGInO1xuXG5jb25zdCBjb3JzTWlkZGxld2FyZSA9IGNvcnMoKTtcblxubGV0IGNsaWVudDtcblxuY29uc3QgY29ubmVjdFRvRGIgPSBhc3luYyAoKSA9PiB7XG4gIGlmICghY2xpZW50KSB7XG4gICAgY29uc3QgdXJpID0gcHJvY2Vzcy5lbnYuTU9OR09EQl9VUkk7XG4gICAgY2xpZW50ID0gbmV3IE1vbmdvQ2xpZW50KHVyaSwgeyB1c2VOZXdVcmxQYXJzZXI6IHRydWUsIHVzZVVuaWZpZWRUb3BvbG9neTogdHJ1ZSB9KTtcbiAgICBhd2FpdCBjbGllbnQuY29ubmVjdCgpO1xuICB9XG5cbiAgcmV0dXJuIGNsaWVudC5kYihcIkNsdXN0ZXIwXCIpO1xufVxuXG5jb25zdCBoYW5kbGVyID0gYXN5bmMgKHJlcSwgcmVzKSA9PiB7XG4gIGlmIChyZXEubWV0aG9kID09PSAnUE9TVCcpIHtcbiAgICBjb25zdCBkYiA9IGF3YWl0IGNvbm5lY3RUb0RiKCk7XG4gICAgY29uc3QgY29sbGVjdGlvbiA9IGRiLmNvbGxlY3Rpb24oJ3N1YnNjcmlwdGlvbnMnKTtcblxuICAgIHRyeSB7XG4gICAgICBhd2FpdCBjb2xsZWN0aW9uLmluc2VydE9uZSh7IGVtYWlsOiByZXEuYm9keS5lbWFpbCB9KTtcbiAgICAgIHNlbmQocmVzLCAyMDAsIHsgc3RhdHVzOiAnT2snIH0pO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgc2VuZChyZXMsIDUwMCwgeyBzdGF0dXM6ICdFcnJvcicsIG1lc3NhZ2U6IGVyci50b1N0cmluZygpIH0pO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBzZW5kKHJlcywgNDA1LCB7IHN0YXR1czogJ01ldGhvZCBOb3QgQWxsb3dlZCcgfSk7XG4gIH1cbn07XG5cbnByb2Nlc3Mub24oJ2V4aXQnLCAoY29kZSkgPT4ge1xuICBpZiAoY2xpZW50KSB7XG4gICAgY2xpZW50LmNsb3NlKCk7XG4gIH1cbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBjb3JzTWlkZGxld2FyZShoYW5kbGVyKTtcbiJdLCJuYW1lcyI6WyJzZW5kIiwiY29ycyIsIk1vbmdvQ2xpZW50IiwiY29yc01pZGRsZXdhcmUiLCJjbGllbnQiLCJjb25uZWN0VG9EYiIsInVyaSIsInByb2Nlc3MiLCJlbnYiLCJNT05HT0RCX1VSSSIsInVzZU5ld1VybFBhcnNlciIsInVzZVVuaWZpZWRUb3BvbG9neSIsImNvbm5lY3QiLCJkYiIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJjb2xsZWN0aW9uIiwiaW5zZXJ0T25lIiwiZW1haWwiLCJib2R5Iiwic3RhdHVzIiwiZXJyIiwibWVzc2FnZSIsInRvU3RyaW5nIiwib24iLCJjb2RlIiwiY2xvc2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/subscribe.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/subscribe.js"));
module.exports = __webpack_exports__;

})();