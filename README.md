A powerful libery for beautiful console.log() output. The idea behind it to always know what and where is being console.loged. Works both in browser and Node.js console

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
   
|metod|name|
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
Component Log and File Log. This is what you shuld use instead of console.log(). It is almost the same, but it gives you an exact file/ component, method and variable names
```
c.cl('Login', 'onLogin', 'responce', loginResponse)
c.fl('LoginService.js', 'post', 'request', loginRequest)
```
output

### Table (.ct & .ft)
Component Table and File Table. Same as console.tabel() but with preatty name
```
c.cl('Login', 'onLogin', 'responce', loginResponse)
c.fl('LoginService.js', 'post', 'request', loginRequest)
```