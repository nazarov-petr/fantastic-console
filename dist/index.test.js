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
}]; // c.log('======= Component Log =======')
// c.cl('Login', 'onLogin', 'responce', loginResponse)
// c.log('======= File Log =======')
// c.fl('LoginService.js', 'post', 'request', loginRequest)
// c.log('======= Tables =======')
// c.ct('People', 'onGetPeople', 'responce', people)
// c.ft('People.js', 'onGetPeople', 'responce', people, ['firstName', 'age'])
// c.log('======= Trace =======')
// c.ctrace('People', 'onGetPeople', 'responce')
// c.ftrace('People.js', 'onGetPeople', 'responce')

_index.default.log('======= Full =======');

_index.default.cfull('Login', 'post', 'request', loginRequest);

_index.default.ffull('LoginService.js', 'post', 'request', loginRequest);