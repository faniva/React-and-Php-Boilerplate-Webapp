webpackHotUpdate(0,{

/***/ 80:
/* unknown exports provided */
/* all exports used */
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ 31);\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar clientID = '52070d85f08d61c28d33';\nvar clientSecret = '1a0b4f3f3d5e4ec2d701d1d8078f398a1df12c7f';\n\nvar App = function (_Component) {\n    _inherits(App, _Component);\n\n    function App(props) {\n        _classCallCheck(this, App);\n\n        var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));\n\n        _this.state = {\n            username: 'josefano',\n            userData: [],\n            userRepos: [],\n            perPage: 5\n        };\n        return _this;\n    }\n\n    _createClass(App, [{\n        key: 'componentDidMount',\n        value: function componentDidMount() {\n            this.getUserData();\n        }\n    }, {\n        key: 'render',\n        value: function render() {\n            return _react2.default.createElement(\n                'div',\n                null,\n                _react2.default.createElement(\n                    'h2',\n                    null,\n                    'Hi ',\n                    this.state.username\n                ),\n                _react2.default.createElement(\n                    'p',\n                    null,\n                    'Insert a new todo'\n                ),\n                _react2.default.createElement(Profile, null)\n            );\n        }\n\n        /**\n         *  Get user data\n         */\n\n    }, {\n        key: 'getUserData',\n        value: function getUserData() {\n            $.ajax({\n                url: 'https://api.github.com/users/' + this.state.username + '?client_id=' + this.props.clientID + '&client_secret=' + this.props.clientSecret,\n                dataType: 'json',\n                cache: false,\n                success: function (result) {\n                    console.log(result);\n                    this.setState({\n                        userData: result\n                    });\n                }.bind(this),\n                error: function (xhr, status, err) {\n                    alert(err);\n                    this.setState({\n                        username: null\n                    });\n                }.bind(this)\n\n            });\n        }\n    }]);\n\n    return App;\n}(_react.Component);\n\nexports.default = App;\n\n\nApp.propTypes = {\n    name: _react2.default.PropTypes.string.isRequired\n};\n\nApp.defaultProps = {\n    clientID: clientID,\n    clientSecret: clientSecret\n};//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiODAuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL0FwcC5qcz8xNGIxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IGNsaWVudElEID0gJzUyMDcwZDg1ZjA4ZDYxYzI4ZDMzJztcbmNvbnN0IGNsaWVudFNlY3JldCA9ICcxYTBiNGYzZjNkNWU0ZWMyZDcwMWQxZDgwNzhmMzk4YTFkZjEyYzdmJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXBwIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKXtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgdXNlcm5hbWUgOiAnam9zZWZhbm8nLFxuICAgICAgICAgICAgdXNlckRhdGEgOiBbXSxcbiAgICAgICAgICAgIHVzZXJSZXBvcyA6IFtdLFxuICAgICAgICAgICAgcGVyUGFnZSA6IDVcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCl7XG4gICAgICAgIHRoaXMuZ2V0VXNlckRhdGEoKVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGgyPkhpIHt0aGlzLnN0YXRlLnVzZXJuYW1lfTwvaDI+XG4gICAgICAgICAgICAgICAgPHA+SW5zZXJ0IGEgbmV3IHRvZG88L3A+XG4gICAgICAgICAgICAgICAgPFByb2ZpbGUgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqICBHZXQgdXNlciBkYXRhXG4gICAgICovXG4gICAgZ2V0VXNlckRhdGEoKXtcbiAgICAgICAgJC5hamF4KHtcbiAgICAgICAgICAgIHVybDogJ2h0dHBzOi8vYXBpLmdpdGh1Yi5jb20vdXNlcnMvJyArIHRoaXMuc3RhdGUudXNlcm5hbWUgKyAnP2NsaWVudF9pZD0nICsgdGhpcy5wcm9wcy5jbGllbnRJRCArICcmY2xpZW50X3NlY3JldD0nICsgdGhpcy5wcm9wcy5jbGllbnRTZWNyZXQsXG4gICAgICAgICAgICBkYXRhVHlwZTogJ2pzb24nLFxuICAgICAgICAgICAgY2FjaGUgOiBmYWxzZSxcbiAgICAgICAgICAgIHN1Y2Nlc3MgOiBmdW5jdGlvbihyZXN1bHQpe1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgIHVzZXJEYXRhOiByZXN1bHRcbiAgICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICB9LmJpbmQodGhpcyksXG4gICAgICAgICAgICBlcnJvciA6IGZ1bmN0aW9uKHhocixzdGF0dXMsZXJyKXtcbiAgICAgICAgICAgICAgICBhbGVydChlcnIpXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgIHVzZXJuYW1lOiBudWxsXG4gICAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgfS5iaW5kKHRoaXMpXG5cbiAgICAgICAgfSlcbiAgICB9XG5cbn1cblxuQXBwLnByb3BUeXBlcyA9IHtcbiAgICBuYW1lIDogUmVhY3QuUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkXG59XG5cbkFwcC5kZWZhdWx0UHJvcHMgPSB7XG4gICAgY2xpZW50SUQsXG4gICAgY2xpZW50U2VjcmV0XG59XG5cblxuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL0FwcC5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBOzs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBRkE7QUFRQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7Ozs7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBSUE7QUFDQTtBQWxCQTtBQW9CQTs7Ozs7O0FBbERBO0FBQ0E7QUFDQTtBQW9EQTtBQUNBO0FBREE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUZBIiwic291cmNlUm9vdCI6IiJ9");

/***/ })

})