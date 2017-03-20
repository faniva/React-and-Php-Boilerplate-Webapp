webpackHotUpdate(0,{

/***/ 80:
/* unknown exports provided */
/* all exports used */
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ 31);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _Profile = __webpack_require__(/*! ./Components/Github/Profile */ 180);\n\nvar _Profile2 = _interopRequireDefault(_Profile);\n\nvar _Search = __webpack_require__(/*! ./Components/Github/Search */ 183);\n\nvar _Search2 = _interopRequireDefault(_Search);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar clientID = '52070d85f08d61c28d33';\nvar clientSecret = '1a0b4f3f3d5e4ec2d701d1d8078f398a1df12c7f';\n\nvar App = function (_Component) {\n    _inherits(App, _Component);\n\n    function App(props) {\n        _classCallCheck(this, App);\n\n        var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));\n\n        _this.state = {\n            username: 'josefano',\n            userData: [],\n            userRepos: [],\n            perPage: 5\n        };\n        return _this;\n    }\n\n    _createClass(App, [{\n        key: 'componentDidMount',\n        value: function componentDidMount() {\n            this.getUserData();\n            this.getUserRepos();\n        }\n    }, {\n        key: 'render',\n        value: function render() {\n            return _react2.default.createElement(\n                'div',\n                null,\n                _react2.default.createElement(\n                    'h2',\n                    null,\n                    'Hi ',\n                    this.state.username\n                ),\n                _react2.default.createElement(\n                    'p',\n                    null,\n                    'Insert a new todo'\n                ),\n                _react2.default.createElement(_Search2.default, { onFormSubmit: this.handleFormSubmit.bind(this) }),\n                _react2.default.createElement(_Profile2.default, this.state)\n            );\n        }\n    }, {\n        key: 'handleFormSubmit',\n        value: function handleFormSubmit(username) {\n            alert(username);\n        }\n\n        /**\n         *  Get user data\n         */\n\n    }, {\n        key: 'getUserData',\n        value: function getUserData() {\n            $.ajax({\n                url: 'https://api.github.com/users/' + this.state.username + '?client_id=' + this.props.clientID + '&client_secret=' + this.props.clientSecret,\n                dataType: 'json',\n                cache: false,\n                success: function (result) {\n                    console.log(result);\n                    this.setState({\n                        userData: result\n                    });\n                }.bind(this),\n                error: function (xhr, status, err) {\n                    alert(err);\n                    this.setState({\n                        username: null\n                    });\n                }.bind(this)\n\n            });\n        }\n\n        /**\n         *  Get user repos\n         */\n\n    }, {\n        key: 'getUserRepos',\n        value: function getUserRepos() {\n            $.ajax({\n                url: 'https://api.github.com/users/' + this.state.username + '/repos?per_page=' + this.state.perPage + '&client_id=' + this.props.clientID + '&client_secret=' + this.props.clientSecret + '&sort=created',\n                dataType: 'json',\n                cache: false,\n                success: function (result) {\n                    console.log(result);\n                    this.setState({\n                        userRepos: result\n                    });\n                }.bind(this),\n                error: function (xhr, status, err) {\n                    alert(err);\n                }.bind(this)\n\n            });\n        }\n    }]);\n\n    return App;\n}(_react.Component);\n\nexports.default = App;\n\n\nApp.propTypes = {\n    name: _react2.default.PropTypes.string.isRequired\n};\n\nApp.defaultProps = {\n    clientID: clientID,\n    clientSecret: clientSecret\n};//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiODAuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL0FwcC5qcz8xNGIxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvZmlsZSBmcm9tICcuL0NvbXBvbmVudHMvR2l0aHViL1Byb2ZpbGUnO1xuaW1wb3J0IFNlYXJjaCBmcm9tICcuL0NvbXBvbmVudHMvR2l0aHViL1NlYXJjaCc7XG5cbmNvbnN0IGNsaWVudElEID0gJzUyMDcwZDg1ZjA4ZDYxYzI4ZDMzJztcbmNvbnN0IGNsaWVudFNlY3JldCA9ICcxYTBiNGYzZjNkNWU0ZWMyZDcwMWQxZDgwNzhmMzk4YTFkZjEyYzdmJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXBwIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKXtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgdXNlcm5hbWUgOiAnam9zZWZhbm8nLFxuICAgICAgICAgICAgdXNlckRhdGEgOiBbXSxcbiAgICAgICAgICAgIHVzZXJSZXBvcyA6IFtdLFxuICAgICAgICAgICAgcGVyUGFnZSA6IDVcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCl7XG4gICAgICAgIHRoaXMuZ2V0VXNlckRhdGEoKVxuICAgICAgICB0aGlzLmdldFVzZXJSZXBvcygpXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8aDI+SGkge3RoaXMuc3RhdGUudXNlcm5hbWV9PC9oMj5cbiAgICAgICAgICAgICAgICA8cD5JbnNlcnQgYSBuZXcgdG9kbzwvcD5cbiAgICAgICAgICAgICAgICA8U2VhcmNoIG9uRm9ybVN1Ym1pdD17dGhpcy5oYW5kbGVGb3JtU3VibWl0LmJpbmQodGhpcyl9IC8+XG4gICAgICAgICAgICAgICAgPFByb2ZpbGUgey4uLnRoaXMuc3RhdGV9IC8+XG5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cblxuICAgIGhhbmRsZUZvcm1TdWJtaXQodXNlcm5hbWUpe1xuICAgICAgICBhbGVydCh1c2VybmFtZSlcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiAgR2V0IHVzZXIgZGF0YVxuICAgICAqL1xuICAgIGdldFVzZXJEYXRhKCl7XG4gICAgICAgICQuYWpheCh7XG4gICAgICAgICAgICB1cmw6ICdodHRwczovL2FwaS5naXRodWIuY29tL3VzZXJzLycgKyB0aGlzLnN0YXRlLnVzZXJuYW1lICsgJz9jbGllbnRfaWQ9JyArIHRoaXMucHJvcHMuY2xpZW50SUQgKyAnJmNsaWVudF9zZWNyZXQ9JyArIHRoaXMucHJvcHMuY2xpZW50U2VjcmV0LFxuICAgICAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcbiAgICAgICAgICAgIGNhY2hlIDogZmFsc2UsXG4gICAgICAgICAgICBzdWNjZXNzIDogZnVuY3Rpb24ocmVzdWx0KXtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICB1c2VyRGF0YTogcmVzdWx0XG4gICAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgfS5iaW5kKHRoaXMpLFxuICAgICAgICAgICAgZXJyb3IgOiBmdW5jdGlvbih4aHIsc3RhdHVzLGVycil7XG4gICAgICAgICAgICAgICAgYWxlcnQoZXJyKVxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICB1c2VybmFtZTogbnVsbFxuICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIH0uYmluZCh0aGlzKVxuXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogIEdldCB1c2VyIHJlcG9zXG4gICAgICovXG4gICAgZ2V0VXNlclJlcG9zKCl7XG4gICAgICAgICQuYWpheCh7XG4gICAgICAgICAgICB1cmw6ICdodHRwczovL2FwaS5naXRodWIuY29tL3VzZXJzLycgKyB0aGlzLnN0YXRlLnVzZXJuYW1lICsgJy9yZXBvcz9wZXJfcGFnZT0nKyB0aGlzLnN0YXRlLnBlclBhZ2UgKycmY2xpZW50X2lkPScgKyB0aGlzLnByb3BzLmNsaWVudElEICsgJyZjbGllbnRfc2VjcmV0PScgKyB0aGlzLnByb3BzLmNsaWVudFNlY3JldCArICcmc29ydD1jcmVhdGVkJyxcbiAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsXG4gICAgICAgICAgICBjYWNoZSA6IGZhbHNlLFxuICAgICAgICAgICAgc3VjY2VzcyA6IGZ1bmN0aW9uKHJlc3VsdCl7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgdXNlclJlcG9zOiByZXN1bHRcbiAgICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICB9LmJpbmQodGhpcyksXG4gICAgICAgICAgICBlcnJvciA6IGZ1bmN0aW9uKHhocixzdGF0dXMsZXJyKXtcbiAgICAgICAgICAgICAgICBhbGVydChlcnIpXG5cbiAgICAgICAgICAgIH0uYmluZCh0aGlzKVxuXG4gICAgICAgIH0pXG4gICAgfVxuXG59XG5cbkFwcC5wcm9wVHlwZXMgPSB7XG4gICAgbmFtZSA6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZFxufVxuXG5BcHAuZGVmYXVsdFByb3BzID0ge1xuICAgIGNsaWVudElELFxuICAgIGNsaWVudFNlY3JldFxufVxuXG5cblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9BcHAuanMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQUZBO0FBUUE7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFKQTtBQVFBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFsQkE7QUFvQkE7QUFDQTtBQUNBOzs7Ozs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFmQTtBQWlCQTs7Ozs7O0FBaEZBO0FBQ0E7QUFDQTtBQWtGQTtBQUNBO0FBREE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUZBIiwic291cmNlUm9vdCI6IiJ9");

/***/ })

})