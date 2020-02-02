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
   
|metod|example|name|output format
|---|---|---|---|
|`.cl(component, method, variable, value)`|.rc('Login', 'onLogin', 'request', loginRequest)|Component Log|`<Component>.method()variable: value`|  |
|  |  |  |  |  |
|  |  |  |  |  |