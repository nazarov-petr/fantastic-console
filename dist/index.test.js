"use strict";

var _index = _interopRequireDefault(require("./index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//date
const loginRequest = {
  email: 'foo',
  password: 'bar'
};
const loginResponce = {
  access_token: "xxxx",
  expires_in: 2592000,
  refresh_token: "yyyy",
  token_type: "Bearer"
};
const people = [{
  'firstName': 'Jon',
  'lastName': 'Doe',
  'age': 22
}, {
  'firstName': 'Jane',
  'lastName': 'Smith',
  'age': 18
}, {
  'firstName': 'Harry',
  'lastName': 'Potter',
  'age': 20
}];

_index.default.log('======= Component Log =======');

_index.default.cl('Login', 'onLogin', 'responce', loginResponce);

_index.default.log('======= File Log =======');

_index.default.fl('LoginService.js', 'post', 'request', loginRequest);

_index.default.log('======= Tables =======');

_index.default.ct('People', 'onGetPeople', 'responce', people);

_index.default.ft('People.js', 'onGetPeople', 'responce', people, ['firstName', 'age']);

_index.default.log('======= Trace =======');

_index.default.ctrace('People', 'onGetPeople', 'responce');

_index.default.ftrace('People.js', 'onGetPeople', 'responce');

_index.default.log('======= Full =======');

_index.default.cfull('Login', 'post', 'request', loginRequest);

_index.default.ffull('LoginService.js', 'post', 'request', loginRequest);