webpackHotUpdate(0,{

/***/ 180:
/* unknown exports provided */
/* all exports used */
/*!******************************************!*\
  !*** ./src/Components/Github/Profile.js ***!
  \******************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ 31);\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Profile = function (_Component) {\n    _inherits(Profile, _Component);\n\n    function Profile() {\n        _classCallCheck(this, Profile);\n\n        return _possibleConstructorReturn(this, (Profile.__proto__ || Object.getPrototypeOf(Profile)).apply(this, arguments));\n    }\n\n    _createClass(Profile, [{\n        key: \"render\",\n        value: function render() {\n            return _react2.default.createElement(\n                \"div\",\n                { className: \"columns\" },\n                _react2.default.createElement(\n                    \"div\",\n                    { className: \"column is-one-third profile-pic\" },\n                    _react2.default.createElement(\"img\", { src: this.props.userData.avatar_url, alt: \"\" })\n                ),\n                _react2.default.createElement(\n                    \"div\",\n                    { className: \"column profile-details\" },\n                    _react2.default.createElement(\n                        \"div\",\n                        { className: \"stats\" },\n                        _react2.default.createElement(\n                            \"span\",\n                            { className: \"tag is-primary\" },\n                            this.props.userData.public_repos,\n                            \" Repos\"\n                        ),\n                        _react2.default.createElement(\n                            \"span\",\n                            { className: \"tag is-primary\" },\n                            this.props.userData.public_gists\n                        ),\n                        _react2.default.createElement(\n                            \"span\",\n                            { className: \"tag is-primary\" },\n                            this.props.userData.followers\n                        ),\n                        _react2.default.createElement(\n                            \"span\",\n                            { className: \"tag is-primary\" },\n                            this.props.userData.following\n                        )\n                    ),\n                    _react2.default.createElement(\"div\", { className: \"user-info\" })\n                )\n            );\n        }\n    }]);\n\n    return Profile;\n}(_react.Component);\n\nexports.default = Profile;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTgwLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9Db21wb25lbnRzL0dpdGh1Yi9Qcm9maWxlLmpzP2FiMTkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2ZpbGUgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbnNcIj5cclxuICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW4gaXMtb25lLXRoaXJkIHByb2ZpbGUtcGljXCI+XHJcbiAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17dGhpcy5wcm9wcy51c2VyRGF0YS5hdmF0YXJfdXJsfSBhbHQ9XCJcIi8+XHJcbiAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW4gcHJvZmlsZS1kZXRhaWxzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGF0c1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0YWcgaXMtcHJpbWFyeVwiPnt0aGlzLnByb3BzLnVzZXJEYXRhLnB1YmxpY19yZXBvc30gUmVwb3M8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRhZyBpcy1wcmltYXJ5XCI+e3RoaXMucHJvcHMudXNlckRhdGEucHVibGljX2dpc3RzfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGFnIGlzLXByaW1hcnlcIj57dGhpcy5wcm9wcy51c2VyRGF0YS5mb2xsb3dlcnN9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0YWcgaXMtcHJpbWFyeVwiPnt0aGlzLnByb3BzLnVzZXJEYXRhLmZvbGxvd2luZ308L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1c2VyLWluZm9cIj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcblxyXG5cclxufVxyXG5cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9Db21wb25lbnRzL0dpdGh1Yi9Qcm9maWxlLmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQ0E7Ozs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7O0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSkE7QUFNQTtBQVBBO0FBSkE7QUFpQkE7Ozs7OztBQXJCQSIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ })

})