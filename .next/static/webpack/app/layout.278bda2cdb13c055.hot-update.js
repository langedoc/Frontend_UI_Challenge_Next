"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./src/services/api.js":
/*!*****************************!*\
  !*** ./src/services/api.js ***!
  \*****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   BASE_URL: () => (/* binding */ BASE_URL),\n/* harmony export */   apiKey: () => (/* binding */ apiKey),\n/* harmony export */   fetchRequest: () => (/* binding */ fetchRequest),\n/* harmony export */   getPopularMovies: () => (/* binding */ getPopularMovies),\n/* harmony export */   getTopRatedMovies: () => (/* binding */ getTopRatedMovies),\n/* harmony export */   getUpcomingMovies: () => (/* binding */ getUpcomingMovies)\n/* harmony export */ });\n/* provided dependency */ var process = __webpack_require__(/*! process */ \"(app-pages-browser)/./node_modules/next/dist/build/polyfills/process.js\");\n/*\n    Get your API key from [The Movie Database](https://www.themoviedb.org/settings/api)\n    Create `.env` file in the root of the project and add your API key to it\n*/ const apiKey = \"api_key=\".concat(process.env.API_KEY);\nconst BASE_URL = \"https://api.themoviedb.org/3/movie\";\nasync function fetchRequest(url) {\n    try {\n        const response = await fetch(\"\".concat(BASE_URL).concat(url));\n        if (!response.ok) {\n            throw new Error(\"HTTP error! status: \".concat(response.status));\n        }\n        return await response.json();\n    } catch (error) {\n        console.error('Fetch error:', error);\n        throw error; // Re-throw to handle in components\n    }\n}\nasync function getPopularMovies() {\n    return fetchRequest(\"/popular?\".concat(apiKey));\n}\nasync function getTopRatedMovies() {\n    return fetchRequest(\"/top_rated?\".concat(apiKey));\n}\nasync function getUpcomingMovies() {\n    return fetchRequest(\"/upcoming?\".concat(apiKey));\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9zZXJ2aWNlcy9hcGkuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOzs7QUFHQSxHQUVPLE1BQU1BLFNBQVMsV0FBK0IsT0FBcEJDLE9BQU9BLENBQUNDLEdBQUcsQ0FBQ0MsT0FBTyxFQUFHO0FBRWhELE1BQU1DLFdBQVcscUNBQXFDO0FBRXRELGVBQWVDLGFBQWFDLEdBQUc7SUFDbEMsSUFBSTtRQUNBLE1BQU1DLFdBQVcsTUFBTUMsTUFBTSxHQUFjRixPQUFYRixVQUFlLE9BQUpFO1FBRTNDLElBQUksQ0FBQ0MsU0FBU0UsRUFBRSxFQUFFO1lBQ2QsTUFBTSxJQUFJQyxNQUFNLHVCQUF1QyxPQUFoQkgsU0FBU0ksTUFBTTtRQUMxRDtRQUVBLE9BQU8sTUFBTUosU0FBU0ssSUFBSTtJQUM5QixFQUFFLE9BQU9DLE9BQU87UUFDWkMsUUFBUUQsS0FBSyxDQUFDLGdCQUFnQkE7UUFDOUIsTUFBTUEsT0FBTyxtQ0FBbUM7SUFDcEQ7QUFDSjtBQUVPLGVBQWVFO0lBQ2xCLE9BQU9WLGFBQWEsWUFBbUIsT0FBUEw7QUFDcEM7QUFFTyxlQUFlZ0I7SUFDbEIsT0FBT1gsYUFBYSxjQUFxQixPQUFQTDtBQUN0QztBQUVPLGVBQWVpQjtJQUNsQixPQUFPWixhQUFhLGFBQW9CLE9BQVBMO0FBQ3JDIiwic291cmNlcyI6WyIvVXNlcnMveXVsaWEvRG9jdW1lbnRzL3Rha2UtaG9tZS1hc3NpZ25tZW50cy9teXRoZXJlc2EvRnJvbnRlbmRfVUlfQ2hhbGxlbmdlX05leHQvc3JjL3NlcnZpY2VzL2FwaS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICAgIEdldCB5b3VyIEFQSSBrZXkgZnJvbSBbVGhlIE1vdmllIERhdGFiYXNlXShodHRwczovL3d3dy50aGVtb3ZpZWRiLm9yZy9zZXR0aW5ncy9hcGkpXG4gICAgQ3JlYXRlIGAuZW52YCBmaWxlIGluIHRoZSByb290IG9mIHRoZSBwcm9qZWN0IGFuZCBhZGQgeW91ciBBUEkga2V5IHRvIGl0XG4qL1xuXG5leHBvcnQgY29uc3QgYXBpS2V5ID0gYGFwaV9rZXk9JHtwcm9jZXNzLmVudi5BUElfS0VZfWA7XG5cbmV4cG9ydCBjb25zdCBCQVNFX1VSTCA9IFwiaHR0cHM6Ly9hcGkudGhlbW92aWVkYi5vcmcvMy9tb3ZpZVwiO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZmV0Y2hSZXF1ZXN0KHVybCkge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7QkFTRV9VUkx9JHt1cmx9YCk7XG4gICAgICAgIFxuICAgICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEhUVFAgZXJyb3IhIHN0YXR1czogJHtyZXNwb25zZS5zdGF0dXN9YCk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHJldHVybiBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignRmV0Y2ggZXJyb3I6JywgZXJyb3IpO1xuICAgICAgICB0aHJvdyBlcnJvcjsgLy8gUmUtdGhyb3cgdG8gaGFuZGxlIGluIGNvbXBvbmVudHNcbiAgICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRQb3B1bGFyTW92aWVzKCkge1xuICAgIHJldHVybiBmZXRjaFJlcXVlc3QoYC9wb3B1bGFyPyR7YXBpS2V5fWApO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0VG9wUmF0ZWRNb3ZpZXMoKSB7XG4gICAgcmV0dXJuIGZldGNoUmVxdWVzdChgL3RvcF9yYXRlZD8ke2FwaUtleX1gKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFVwY29taW5nTW92aWVzKCkge1xuICAgIHJldHVybiBmZXRjaFJlcXVlc3QoYC91cGNvbWluZz8ke2FwaUtleX1gKTtcbn1cbiJdLCJuYW1lcyI6WyJhcGlLZXkiLCJwcm9jZXNzIiwiZW52IiwiQVBJX0tFWSIsIkJBU0VfVVJMIiwiZmV0Y2hSZXF1ZXN0IiwidXJsIiwicmVzcG9uc2UiLCJmZXRjaCIsIm9rIiwiRXJyb3IiLCJzdGF0dXMiLCJqc29uIiwiZXJyb3IiLCJjb25zb2xlIiwiZ2V0UG9wdWxhck1vdmllcyIsImdldFRvcFJhdGVkTW92aWVzIiwiZ2V0VXBjb21pbmdNb3ZpZXMiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/services/api.js\n"));

/***/ })

});