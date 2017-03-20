webpackHotUpdate(0,{

/***/ 80:
/* unknown exports provided */
/* all exports used */
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ 31);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _Profile = __webpack_require__(/*! ./Components/Github/Profile */ 180);\n\nvar _Profile2 = _interopRequireDefault(_Profile);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar clientID = '52070d85f08d61c28d33';\nvar clientSecret = '1a0b4f3f3d5e4ec2d701d1d8078f398a1df12c7f';\n\nvar App = function (_Component) {\n    _inherits(App, _Component);\n\n    function App(props) {\n        _classCallCheck(this, App);\n\n        var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));\n\n        _this.state = {\n            username: 'josefano',\n            userData: [],\n            userRepos: [],\n            perPage: 5\n        };\n        return _this;\n    }\n\n    _createClass(App, [{\n        key: 'componentDidMount',\n        value: function componentDidMount() {\n            this.getUserData();\n        }\n    }, {\n        key: 'render',\n        value: function render() {\n            return _react2.default.createElement(\n                'div',\n                null,\n                _react2.default.createElement(\n                    'h2',\n                    null,\n                    'Hi ',\n                    this.state.username\n                ),\n                _react2.default.createElement(\n                    'p',\n                    null,\n                    'Insert a new todo'\n                ),\n                _react2.default.createElement(_Profile2.default, { userData: this.state.userData })\n            );\n        }\n\n        /**\n         *  Get user data\n         */\n\n    }, {\n        key: 'getUserData',\n        value: function getUserData() {\n            $.ajax({\n                url: 'https://api.github.com/users/' + this.state.username + '?client_id=' + this.props.clientID + '&client_secret=' + this.props.clientSecret,\n                dataType: 'json',\n                cache: false,\n                success: function (result) {\n                    console.log(result);\n                    this.setState({\n                        userData: result\n                    });\n                }.bind(this),\n                error: function (xhr, status, err) {\n                    alert(err);\n                    this.setState({\n                        username: null\n                    });\n                }.bind(this)\n\n            });\n        }\n\n        /**\n         *  Get user repos\n         */\n\n    }, {\n        key: 'getUserData',\n        value: function getUserData() {\n            $.ajax({\n                url: 'https://api.github.com/users/' + this.state.username + '?client_id=' + this.props.clientID + '&client_secret=' + this.props.clientSecret,\n                dataType: 'json',\n                cache: false,\n                success: function (result) {\n                    console.log(result);\n                    this.setState({\n                        userData: result\n                    });\n                }.bind(this),\n                error: function (xhr, status, err) {\n                    alert(err);\n                    this.setState({\n                        username: null\n                    });\n                }.bind(this)\n\n            });\n        }\n    }]);\n\n    return App;\n}(_react.Component);\n\nexports.default = App;\n\n\nApp.propTypes = {\n    name: _react2.default.PropTypes.string.isRequired\n};\n\nApp.defaultProps = {\n    clientID: clientID,\n    clientSecret: clientSecret\n};//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiODAuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL0FwcC5qcz8xNGIxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvZmlsZSBmcm9tICcuL0NvbXBvbmVudHMvR2l0aHViL1Byb2ZpbGUnO1xuXG5jb25zdCBjbGllbnRJRCA9ICc1MjA3MGQ4NWYwOGQ2MWMyOGQzMyc7XG5jb25zdCBjbGllbnRTZWNyZXQgPSAnMWEwYjRmM2YzZDVlNGVjMmQ3MDFkMWQ4MDc4ZjM5OGExZGYxMmM3Zic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFwcCBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcyl7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIHVzZXJuYW1lIDogJ2pvc2VmYW5vJyxcbiAgICAgICAgICAgIHVzZXJEYXRhIDogW10sXG4gICAgICAgICAgICB1c2VyUmVwb3MgOiBbXSxcbiAgICAgICAgICAgIHBlclBhZ2UgOiA1XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpe1xuICAgICAgICB0aGlzLmdldFVzZXJEYXRhKClcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxoMj5IaSB7dGhpcy5zdGF0ZS51c2VybmFtZX08L2gyPlxuICAgICAgICAgICAgICAgIDxwPkluc2VydCBhIG5ldyB0b2RvPC9wPlxuICAgICAgICAgICAgICAgIDxQcm9maWxlIHVzZXJEYXRhPXt0aGlzLnN0YXRlLnVzZXJEYXRhfSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogIEdldCB1c2VyIGRhdGFcbiAgICAgKi9cbiAgICBnZXRVc2VyRGF0YSgpe1xuICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgdXJsOiAnaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS91c2Vycy8nICsgdGhpcy5zdGF0ZS51c2VybmFtZSArICc/Y2xpZW50X2lkPScgKyB0aGlzLnByb3BzLmNsaWVudElEICsgJyZjbGllbnRfc2VjcmV0PScgKyB0aGlzLnByb3BzLmNsaWVudFNlY3JldCxcbiAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsXG4gICAgICAgICAgICBjYWNoZSA6IGZhbHNlLFxuICAgICAgICAgICAgc3VjY2VzcyA6IGZ1bmN0aW9uKHJlc3VsdCl7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgdXNlckRhdGE6IHJlc3VsdFxuICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIH0uYmluZCh0aGlzKSxcbiAgICAgICAgICAgIGVycm9yIDogZnVuY3Rpb24oeGhyLHN0YXR1cyxlcnIpe1xuICAgICAgICAgICAgICAgIGFsZXJ0KGVycilcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgdXNlcm5hbWU6IG51bGxcbiAgICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICB9LmJpbmQodGhpcylcblxuICAgICAgICB9KVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqICBHZXQgdXNlciByZXBvc1xuICAgICAqL1xuICAgIGdldFVzZXJEYXRhKCl7XG4gICAgICAgICQuYWpheCh7XG4gICAgICAgICAgICB1cmw6ICdodHRwczovL2FwaS5naXRodWIuY29tL3VzZXJzLycgKyB0aGlzLnN0YXRlLnVzZXJuYW1lICsgJz9jbGllbnRfaWQ9JyArIHRoaXMucHJvcHMuY2xpZW50SUQgKyAnJmNsaWVudF9zZWNyZXQ9JyArIHRoaXMucHJvcHMuY2xpZW50U2VjcmV0LFxuICAgICAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcbiAgICAgICAgICAgIGNhY2hlIDogZmFsc2UsXG4gICAgICAgICAgICBzdWNjZXNzIDogZnVuY3Rpb24ocmVzdWx0KXtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICB1c2VyRGF0YTogcmVzdWx0XG4gICAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgfS5iaW5kKHRoaXMpLFxuICAgICAgICAgICAgZXJyb3IgOiBmdW5jdGlvbih4aHIsc3RhdHVzLGVycil7XG4gICAgICAgICAgICAgICAgYWxlcnQoZXJyKVxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICB1c2VybmFtZTogbnVsbFxuICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIH0uYmluZCh0aGlzKVxuXG4gICAgICAgIH0pXG4gICAgfVxuXG59XG5cbkFwcC5wcm9wVHlwZXMgPSB7XG4gICAgbmFtZSA6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZFxufVxuXG5BcHAuZGVmYXVsdFByb3BzID0ge1xuICAgIGNsaWVudElELFxuICAgIGNsaWVudFNlY3JldFxufVxuXG5cblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9BcHAuanMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQUZBO0FBUUE7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBOzs7Ozs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFsQkE7QUFvQkE7QUFDQTtBQUNBOzs7Ozs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFsQkE7QUFvQkE7Ozs7OztBQTVFQTtBQUNBO0FBQ0E7QUE4RUE7QUFDQTtBQURBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFGQSIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ })

})