A powerful library for beautiful console.log() output. The idea behind it to always know what and where is being console.loged. Works both in browser and Node.js console

## Install
`npm install fantastic-console`
or
`yarn add fantastic-console`

## Usage
```
import c from fantastic-console
...
c.cl('Login', 'onLogin', 'request', loginRequest)
```


## Methods
   
|method|name|
|---|---|
|`.cl(component, method, variable, value)`|Component Log|
|`.fl(file, method, variable, value)`|File Log|
|`.ct(file, method, variable, value [,columns])`|Component Table|
|`.ft(file, method, variable, value) [,columns]`|File Table|
|`.ctrace(file, method, variable, value)`|Component Trace|
|`.ftrace(file, method, variable, value)`|File Trace|
|`.cfull(file, method, variable, value)`|Component Trace|
|`.ffrace(file, method, variable, value)`|File Trace|

### Log (.cl & .fl)
Component Log and File Log. This is what you should use instead of console.log(). It is almost the same, but it gives you an exact file/ component, method and variable names
```
c.cl('Login', 'onLogin', 'responce', loginResponce)
c.fl('LoginService.js', 'post', 'request', loginRequest)
```
![1](https://user-images.githubusercontent.com/15689774/73613222-1f741d80-45fc-11ea-9c38-ebed64d562ca.jpg)


### Table (.ct & .ft)
Component Table and File Table. Same as console.tabel() but with a pretty name. `columns` parameter allows you to set columns. Please refer to [console.table() documentation](https://developer.mozilla.org/en-US/docs/Web/API/Console/table)
```
c.ct('People', 'onGetPeople', 'responce', people)
c.ft('People.js', 'onGetPeople', 'responce', people, ['firstName', 'age'])

```
![2](https://user-images.githubusercontent.com/15689774/73613223-1f741d80-45fc-11ea-83fa-5586a3e98d88.jpg)


### Trace (.ctrace & .ftrace)
Component Trace and File Trace. Trace is collapsed by default in the browser console.
```
c.ctrace('People', 'onGetPeople', 'responce')
c.ftrace('People.js', 'onGetPeople', 'responce')
```
![3](https://user-images.githubusercontent.com/15689774/73613224-1f741d80-45fc-11ea-81f1-1908af02ec30.jpg)


### Full (.cfull & .ffull)
This methods combines the 3 previous methods, displaying data, table and trace. **Please note that this method only displays trace in the browser console**. 
```
c.cfull('Login', 'post', 'request', loginRequest)
c.ffull('LoginService.js', 'post', 'request', loginRequest)
```
![4](https://user-images.githubusercontent.com/15689774/73613225-1f741d80-45fc-11ea-854d-bac50cbd51b8.jpg)
