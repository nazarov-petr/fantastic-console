"use strict";

var _index = _interopRequireDefault(require("./index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//date
const loginRequest = {
  email: 'foo',
  password: 'bar'
};
const loginResponse = {
  access_token: "xxxx",
  expires_in: 2592000,
  refresh_token: "yyyy",
  token_type: "Bearer"
};
console.log('======= React Component Log =======');

_index.default.rclog('Login', 'onLogin', 'request', loginRequest);

_index.default.rclog('Login', 'onLogin', 'responce', loginResponse);