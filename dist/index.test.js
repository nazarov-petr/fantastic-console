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
}]; // c.log('======= React Component Log =======')
// c.cl('Login', 'onLogin', 'responce', loginResponse)
// c.cl('', 'onLogin', 'responce', loginResponse)
// c.cl('Login', '', 'responce', loginResponse)
// c.cl('Login', 'onLogin', '', loginResponse)
// c.cl('Login', 'onLogin', 'responce')
// c.fl('LoginService.js', 'post', 'request', loginRequest)
// c.fl('', 'post', 'request', loginRequest)
// c.fl('LoginService.js', '', 'request', loginRequest)
// c.fl('LoginService.js', 'post', '', loginRequest)
// c.fl('LoginService.js', 'post', 'request', )

_index.default.ct('People', 'onGetPeople', 'responce', people);

_index.default.ct('People', 'onGetPeople', 'responce', people, ['firstName', 'age']);

_index.default.ft('People.js', 'onGetPeople', 'responce', people);

_index.default.ft('People.js', 'onGetPeople', 'responce', people, ['firstName', 'age']);