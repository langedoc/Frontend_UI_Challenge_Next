"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/detailed/page",{

/***/ "(app-pages-browser)/./src/components/Detailed/Detailed.jsx":
/*!**********************************************!*\
  !*** ./src/components/Detailed/Detailed.jsx ***!
  \**********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Detailed)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Detailed_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Detailed.scss */ \"(app-pages-browser)/./src/components/Detailed/Detailed.scss\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var _contexts_MovieContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../contexts/MovieContext */ \"(app-pages-browser)/./src/contexts/MovieContext.jsx\");\n/* harmony import */ var _CustomButton_CustomButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../CustomButton/CustomButton */ \"(app-pages-browser)/./src/components/CustomButton/CustomButton.jsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Detailed() {\n    _s();\n    const searchParams = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.useSearchParams)();\n    const movie = JSON.parse(searchParams.get('movie') || 'null');\n    const { setWishlist, wishlist, listType } = (0,_contexts_MovieContext__WEBPACK_IMPORTED_MODULE_4__.useMovieContext)();\n    if (!movie) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"detailed\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                children: \"Please select a movie from the home page\"\n            }, void 0, false, {\n                fileName: \"/Users/yulia/Documents/take-home-assignments/mytheresa/Frontend_UI_Challenge_Next/src/components/Detailed/Detailed.jsx\",\n                lineNumber: 15,\n                columnNumber: 17\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/yulia/Documents/take-home-assignments/mytheresa/Frontend_UI_Challenge_Next/src/components/Detailed/Detailed.jsx\",\n            lineNumber: 14,\n            columnNumber: 13\n        }, this);\n    }\n    const handleAddMovie = ()=>{\n        if (!wishlist.some((item)=>item.id === movie.id)) {\n            setWishlist([\n                ...wishlist,\n                movie\n            ]);\n        }\n    };\n    const handleRemoveMovie = ()=>{\n        setWishlist(wishlist.filter((item)=>item.id !== movie.id));\n    };\n    const getListStyle = ()=>{\n        if (listType === \"popular\") {\n            return \"popular\";\n        } else if (listType === \"upcoming\") {\n            return \"upcoming\";\n        } else if (listType === \"topRated\") {\n            return \"topRated\";\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"detailed \".concat(getListStyle()),\n        \"data-testid\": \"detailed-page\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"detailed_main\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"detailed_main_poster\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: movie.poster_path ? \"https://image.tmdb.org/t/p/w500\".concat(movie.poster_path) : placeholder,\n                            alt: \"movie poster\"\n                        }, void 0, false, {\n                            fileName: \"/Users/yulia/Documents/take-home-assignments/mytheresa/Frontend_UI_Challenge_Next/src/components/Detailed/Detailed.jsx\",\n                            lineNumber: 44,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/yulia/Documents/take-home-assignments/mytheresa/Frontend_UI_Challenge_Next/src/components/Detailed/Detailed.jsx\",\n                        lineNumber: 43,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"detailed_main_info\",\n                        children: [\n                            wishlist.some((item)=>item.id === movie.id) ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_CustomButton_CustomButton__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                onClick: handleRemoveMovie,\n                                children: \"Remove from Wishlist\"\n                            }, void 0, false, {\n                                fileName: \"/Users/yulia/Documents/take-home-assignments/mytheresa/Frontend_UI_Challenge_Next/src/components/Detailed/Detailed.jsx\",\n                                lineNumber: 53,\n                                columnNumber: 25\n                            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_CustomButton_CustomButton__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                onClick: handleAddMovie,\n                                children: \"Add to Wishlist\"\n                            }, void 0, false, {\n                                fileName: \"/Users/yulia/Documents/take-home-assignments/mytheresa/Frontend_UI_Challenge_Next/src/components/Detailed/Detailed.jsx\",\n                                lineNumber: 55,\n                                columnNumber: 25\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                children: movie.title\n                            }, void 0, false, {\n                                fileName: \"/Users/yulia/Documents/take-home-assignments/mytheresa/Frontend_UI_Challenge_Next/src/components/Detailed/Detailed.jsx\",\n                                lineNumber: 57,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: movie.overview\n                            }, void 0, false, {\n                                fileName: \"/Users/yulia/Documents/take-home-assignments/mytheresa/Frontend_UI_Challenge_Next/src/components/Detailed/Detailed.jsx\",\n                                lineNumber: 58,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/yulia/Documents/take-home-assignments/mytheresa/Frontend_UI_Challenge_Next/src/components/Detailed/Detailed.jsx\",\n                        lineNumber: 51,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/yulia/Documents/take-home-assignments/mytheresa/Frontend_UI_Challenge_Next/src/components/Detailed/Detailed.jsx\",\n                lineNumber: 42,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"detailed_additional\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                children: \"Language:\"\n                            }, void 0, false, {\n                                fileName: \"/Users/yulia/Documents/take-home-assignments/mytheresa/Frontend_UI_Challenge_Next/src/components/Detailed/Detailed.jsx\",\n                                lineNumber: 62,\n                                columnNumber: 20\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                fileName: \"/Users/yulia/Documents/take-home-assignments/mytheresa/Frontend_UI_Challenge_Next/src/components/Detailed/Detailed.jsx\",\n                                lineNumber: 62,\n                                columnNumber: 46\n                            }, this),\n                            \" \",\n                            movie.original_language.toUpperCase()\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/yulia/Documents/take-home-assignments/mytheresa/Frontend_UI_Challenge_Next/src/components/Detailed/Detailed.jsx\",\n                        lineNumber: 62,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                children: \"Release Date:\"\n                            }, void 0, false, {\n                                fileName: \"/Users/yulia/Documents/take-home-assignments/mytheresa/Frontend_UI_Challenge_Next/src/components/Detailed/Detailed.jsx\",\n                                lineNumber: 63,\n                                columnNumber: 20\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                fileName: \"/Users/yulia/Documents/take-home-assignments/mytheresa/Frontend_UI_Challenge_Next/src/components/Detailed/Detailed.jsx\",\n                                lineNumber: 63,\n                                columnNumber: 50\n                            }, this),\n                            \" \",\n                            movie.release_date\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/yulia/Documents/take-home-assignments/mytheresa/Frontend_UI_Challenge_Next/src/components/Detailed/Detailed.jsx\",\n                        lineNumber: 63,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                children: \"Rating:\"\n                            }, void 0, false, {\n                                fileName: \"/Users/yulia/Documents/take-home-assignments/mytheresa/Frontend_UI_Challenge_Next/src/components/Detailed/Detailed.jsx\",\n                                lineNumber: 64,\n                                columnNumber: 20\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                fileName: \"/Users/yulia/Documents/take-home-assignments/mytheresa/Frontend_UI_Challenge_Next/src/components/Detailed/Detailed.jsx\",\n                                lineNumber: 64,\n                                columnNumber: 44\n                            }, this),\n                            \" \",\n                            movie.vote_average,\n                            \" (\",\n                            movie.vote_count,\n                            \" votes)\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/yulia/Documents/take-home-assignments/mytheresa/Frontend_UI_Challenge_Next/src/components/Detailed/Detailed.jsx\",\n                        lineNumber: 64,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/yulia/Documents/take-home-assignments/mytheresa/Frontend_UI_Challenge_Next/src/components/Detailed/Detailed.jsx\",\n                lineNumber: 61,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/yulia/Documents/take-home-assignments/mytheresa/Frontend_UI_Challenge_Next/src/components/Detailed/Detailed.jsx\",\n        lineNumber: 41,\n        columnNumber: 9\n    }, this);\n}\n_s(Detailed, \"EnZ2VG3nSLTlAp4K2R49pGT9lLI=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_3__.useSearchParams,\n        _contexts_MovieContext__WEBPACK_IMPORTED_MODULE_4__.useMovieContext\n    ];\n});\n_c = Detailed;\n;\nvar _c;\n$RefreshReg$(_c, \"Detailed\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0RldGFpbGVkL0RldGFpbGVkLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQTBCO0FBQ0Q7QUFDeUI7QUFDWTtBQUNOO0FBRXpDLFNBQVNJOztJQUNwQixNQUFNQyxlQUFlSixnRUFBZUE7SUFDcEMsTUFBTUssUUFBUUMsS0FBS0MsS0FBSyxDQUFDSCxhQUFhSSxHQUFHLENBQUMsWUFBWTtJQUN0RCxNQUFNLEVBQUVDLFdBQVcsRUFBRUMsUUFBUSxFQUFFQyxRQUFRLEVBQUUsR0FBR1YsdUVBQWVBO0lBRTNELElBQUksQ0FBQ0ksT0FBTztRQUNSLHFCQUNJLDhEQUFDTztZQUFJQyxXQUFVO3NCQUNYLDRFQUFDQzswQkFBRzs7Ozs7Ozs7Ozs7SUFHaEI7SUFFQSxNQUFNQyxpQkFBaUI7UUFDbkIsSUFBSSxDQUFDTCxTQUFTTSxJQUFJLENBQUNDLENBQUFBLE9BQVFBLEtBQUtDLEVBQUUsS0FBS2IsTUFBTWEsRUFBRSxHQUFHO1lBQzlDVCxZQUFZO21CQUFJQztnQkFBVUw7YUFBTTtRQUNwQztJQUNKO0lBRUEsTUFBTWMsb0JBQW9CO1FBQ3RCVixZQUFZQyxTQUFTVSxNQUFNLENBQUNILENBQUFBLE9BQVFBLEtBQUtDLEVBQUUsS0FBS2IsTUFBTWEsRUFBRTtJQUM1RDtJQUVBLE1BQU1HLGVBQWU7UUFDakIsSUFBSVYsYUFBYSxXQUFXO1lBQ3hCLE9BQU87UUFDWCxPQUFPLElBQUlBLGFBQWEsWUFBWTtZQUNoQyxPQUFPO1FBQ1gsT0FBTyxJQUFJQSxhQUFhLFlBQVk7WUFDaEMsT0FBTztRQUNYO0lBQ0o7SUFFQSxxQkFDSSw4REFBQ0M7UUFBSUMsV0FBVyxZQUEyQixPQUFmUTtRQUFrQkMsZUFBWTs7MEJBQ3RELDhEQUFDVjtnQkFBSUMsV0FBVTs7a0NBQ1gsOERBQUNEO3dCQUFJQyxXQUFVO2tDQUNYLDRFQUFDVTs0QkFDR0MsS0FDSW5CLE1BQU1vQixXQUFXLEdBQUcsa0NBQW9ELE9BQWxCcEIsTUFBTW9CLFdBQVcsSUFBS0M7NEJBRWhGQyxLQUFJOzs7Ozs7Ozs7OztrQ0FHWiw4REFBQ2Y7d0JBQUlDLFdBQVU7OzRCQUNWSCxTQUFTTSxJQUFJLENBQUNDLENBQUFBLE9BQVFBLEtBQUtDLEVBQUUsS0FBS2IsTUFBTWEsRUFBRSxrQkFDdkMsOERBQUNoQixrRUFBWUE7Z0NBQUMwQixTQUFTVDswQ0FBbUI7Ozs7O3FEQUUxQyw4REFBQ2pCLGtFQUFZQTtnQ0FBQzBCLFNBQVNiOzBDQUFnQjs7Ozs7OzBDQUUzQyw4REFBQ2M7MENBQUl4QixNQUFNeUIsS0FBSzs7Ozs7OzBDQUNoQiw4REFBQ0M7MENBQUcxQixNQUFNMkIsUUFBUTs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUcxQiw4REFBQ3BCO2dCQUFJQyxXQUFVOztrQ0FDWCw4REFBQ2tCOzswQ0FBRSw4REFBQ0U7MENBQU87Ozs7OzswQ0FBa0IsOERBQUNDOzs7Ozs0QkFBSTs0QkFBRTdCLE1BQU04QixpQkFBaUIsQ0FBQ0MsV0FBVzs7Ozs7OztrQ0FDdkUsOERBQUNMOzswQ0FBRSw4REFBQ0U7MENBQU87Ozs7OzswQ0FBc0IsOERBQUNDOzs7Ozs0QkFBSTs0QkFBRTdCLE1BQU1nQyxZQUFZOzs7Ozs7O2tDQUMxRCw4REFBQ047OzBDQUFFLDhEQUFDRTswQ0FBTzs7Ozs7OzBDQUFnQiw4REFBQ0M7Ozs7OzRCQUFJOzRCQUFFN0IsTUFBTWlDLFlBQVk7NEJBQUM7NEJBQUdqQyxNQUFNa0MsVUFBVTs0QkFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUl6RjtHQTdEd0JwQzs7UUFDQ0gsNERBQWVBO1FBRVFDLG1FQUFlQTs7O0tBSHZDRSIsInNvdXJjZXMiOlsiL1VzZXJzL3l1bGlhL0RvY3VtZW50cy90YWtlLWhvbWUtYXNzaWdubWVudHMvbXl0aGVyZXNhL0Zyb250ZW5kX1VJX0NoYWxsZW5nZV9OZXh0L3NyYy9jb21wb25lbnRzL0RldGFpbGVkL0RldGFpbGVkLmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0ICcuL0RldGFpbGVkLnNjc3MnO1xuaW1wb3J0IHsgdXNlU2VhcmNoUGFyYW1zIH0gZnJvbSAnbmV4dC9uYXZpZ2F0aW9uJztcbmltcG9ydCB7IHVzZU1vdmllQ29udGV4dCB9IGZyb20gJy4uLy4uL2NvbnRleHRzL01vdmllQ29udGV4dCc7XG5pbXBvcnQgQ3VzdG9tQnV0dG9uIGZyb20gJy4uL0N1c3RvbUJ1dHRvbi9DdXN0b21CdXR0b24nO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZXRhaWxlZCgpIHtcbiAgICBjb25zdCBzZWFyY2hQYXJhbXMgPSB1c2VTZWFyY2hQYXJhbXMoKTtcbiAgICBjb25zdCBtb3ZpZSA9IEpTT04ucGFyc2Uoc2VhcmNoUGFyYW1zLmdldCgnbW92aWUnKSB8fCAnbnVsbCcpO1xuICAgIGNvbnN0IHsgc2V0V2lzaGxpc3QsIHdpc2hsaXN0LCBsaXN0VHlwZSB9ID0gdXNlTW92aWVDb250ZXh0KCk7XG4gICAgXG4gICAgaWYgKCFtb3ZpZSkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXRhaWxlZFwiPlxuICAgICAgICAgICAgICAgIDxoMz5QbGVhc2Ugc2VsZWN0IGEgbW92aWUgZnJvbSB0aGUgaG9tZSBwYWdlPC9oMz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZUFkZE1vdmllID0gKCkgPT4ge1xuICAgICAgICBpZiAoIXdpc2hsaXN0LnNvbWUoaXRlbSA9PiBpdGVtLmlkID09PSBtb3ZpZS5pZCkpIHtcbiAgICAgICAgICAgIHNldFdpc2hsaXN0KFsuLi53aXNobGlzdCwgbW92aWVdKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZVJlbW92ZU1vdmllID0gKCkgPT4ge1xuICAgICAgICBzZXRXaXNobGlzdCh3aXNobGlzdC5maWx0ZXIoaXRlbSA9PiBpdGVtLmlkICE9PSBtb3ZpZS5pZCkpO1xuICAgIH1cblxuICAgIGNvbnN0IGdldExpc3RTdHlsZSA9ICgpID0+IHtcbiAgICAgICAgaWYgKGxpc3RUeXBlID09PSBcInBvcHVsYXJcIikge1xuICAgICAgICAgICAgcmV0dXJuIFwicG9wdWxhclwiO1xuICAgICAgICB9IGVsc2UgaWYgKGxpc3RUeXBlID09PSBcInVwY29taW5nXCIpIHtcbiAgICAgICAgICAgIHJldHVybiBcInVwY29taW5nXCI7XG4gICAgICAgIH0gZWxzZSBpZiAobGlzdFR5cGUgPT09IFwidG9wUmF0ZWRcIikge1xuICAgICAgICAgICAgcmV0dXJuIFwidG9wUmF0ZWRcIjtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YGRldGFpbGVkICR7Z2V0TGlzdFN0eWxlKCl9YH0gZGF0YS10ZXN0aWQ9XCJkZXRhaWxlZC1wYWdlXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRldGFpbGVkX21haW5cIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRldGFpbGVkX21haW5fcG9zdGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbW92aWUucG9zdGVyX3BhdGggPyBgaHR0cHM6Ly9pbWFnZS50bWRiLm9yZy90L3AvdzUwMCR7bW92aWUucG9zdGVyX3BhdGh9YCA6IHBsYWNlaG9sZGVyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJtb3ZpZSBwb3N0ZXJcIlxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGV0YWlsZWRfbWFpbl9pbmZvXCI+XG4gICAgICAgICAgICAgICAgICAgIHt3aXNobGlzdC5zb21lKGl0ZW0gPT4gaXRlbS5pZCA9PT0gbW92aWUuaWQpID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPEN1c3RvbUJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVSZW1vdmVNb3ZpZX0+UmVtb3ZlIGZyb20gV2lzaGxpc3Q8L0N1c3RvbUJ1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDdXN0b21CdXR0b24gb25DbGljaz17aGFuZGxlQWRkTW92aWV9PkFkZCB0byBXaXNobGlzdDwvQ3VzdG9tQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICA8aDI+e21vdmllLnRpdGxlfTwvaDI+XG4gICAgICAgICAgICAgICAgICAgIDxwPnttb3ZpZS5vdmVydmlld308L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGV0YWlsZWRfYWRkaXRpb25hbFwiPlxuICAgICAgICAgICAgICAgIDxwPjxzdHJvbmc+TGFuZ3VhZ2U6PC9zdHJvbmc+PGJyLz4ge21vdmllLm9yaWdpbmFsX2xhbmd1YWdlLnRvVXBwZXJDYXNlKCl9PC9wPlxuICAgICAgICAgICAgICAgIDxwPjxzdHJvbmc+UmVsZWFzZSBEYXRlOjwvc3Ryb25nPjxici8+IHttb3ZpZS5yZWxlYXNlX2RhdGV9PC9wPlxuICAgICAgICAgICAgICAgIDxwPjxzdHJvbmc+UmF0aW5nOjwvc3Ryb25nPjxici8+IHttb3ZpZS52b3RlX2F2ZXJhZ2V9ICh7bW92aWUudm90ZV9jb3VudH0gdm90ZXMpPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59OyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVNlYXJjaFBhcmFtcyIsInVzZU1vdmllQ29udGV4dCIsIkN1c3RvbUJ1dHRvbiIsIkRldGFpbGVkIiwic2VhcmNoUGFyYW1zIiwibW92aWUiLCJKU09OIiwicGFyc2UiLCJnZXQiLCJzZXRXaXNobGlzdCIsIndpc2hsaXN0IiwibGlzdFR5cGUiLCJkaXYiLCJjbGFzc05hbWUiLCJoMyIsImhhbmRsZUFkZE1vdmllIiwic29tZSIsIml0ZW0iLCJpZCIsImhhbmRsZVJlbW92ZU1vdmllIiwiZmlsdGVyIiwiZ2V0TGlzdFN0eWxlIiwiZGF0YS10ZXN0aWQiLCJpbWciLCJzcmMiLCJwb3N0ZXJfcGF0aCIsInBsYWNlaG9sZGVyIiwiYWx0Iiwib25DbGljayIsImgyIiwidGl0bGUiLCJwIiwib3ZlcnZpZXciLCJzdHJvbmciLCJiciIsIm9yaWdpbmFsX2xhbmd1YWdlIiwidG9VcHBlckNhc2UiLCJyZWxlYXNlX2RhdGUiLCJ2b3RlX2F2ZXJhZ2UiLCJ2b3RlX2NvdW50Il0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/Detailed/Detailed.jsx\n"));

/***/ })

});