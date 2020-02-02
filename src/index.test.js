import acl from './index'
//date
const loginRequest = {
  email: 'foo',
  password: 'bar'
}
const loginResponse = {
  access_token: "xxxx",
  expires_in: 2592000,
  refresh_token: "yyyy",
  token_type: "Bearer"
}
console.log('======= React Component Log =======')
acl.rclog('Login', 'onLogin', 'request', loginRequest)
acl.rclog('Login', 'onLogin', 'responce', loginResponse)