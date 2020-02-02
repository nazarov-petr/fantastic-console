import c from './index'
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
c.rc('Login', 'onLogin', 'request', loginRequest)
c.rc('Login', 'onLogin', 'responce', loginResponse)

