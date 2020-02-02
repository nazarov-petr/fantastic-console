import c from './index'
//date
const loginRequest = {
  email: 'foo',
  password: 'bar'
}
const loginResponce = {
  access_token: "xxxx",
  expires_in: 2592000,
  refresh_token: "yyyy",
  token_type: "Bearer"
}

const people = [
  {
    'firstName' : 'Jon',
    'lastName' : 'Doe',
    'age' : 22,
  },
  {
    'firstName' : 'Jane',
    'lastName' : 'Smith',
    'age' : 18,
  },
  {
    'firstName' : 'Harry',
    'lastName' : 'Potter',
    'age' : 20,
  },
]

c.log('======= Component Log =======')
c.cl('Login', 'onLogin', 'responce', loginResponce)

c.log('======= File Log =======')
c.fl('LoginService.js', 'post', 'request', loginRequest)

c.log('======= Tables =======')
c.ct('People', 'onGetPeople', 'responce', people)
c.ft('People.js', 'onGetPeople', 'responce', people, ['firstName', 'age'])

c.log('======= Trace =======')
c.ctrace('People', 'onGetPeople', 'responce')
c.ftrace('People.js', 'onGetPeople', 'responce')

c.log('======= Full =======')
c.cfull('Login', 'post', 'request', loginRequest)
c.ffull('LoginService.js', 'post', 'request', loginRequest)
