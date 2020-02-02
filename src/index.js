const browserColors = {
  component: 'red',
  file: 'red',
  method: 'blue',
  variable: 'green'
}
const nodeColors = {
  component: '\x1b[31m%s\x1b[0m',
  file: '\x1b[31m%s\x1b[0m',
  method: '\x1b[34m%s\x1b[0m',
  variable: '\x1b[32m%s\x1b[0m'
}
class FantasticConsole {
  isBrowser(){
    if ((typeof process !== 'undefined') && process && process.release && process.release.name === 'node'){
      return false;
    } else {
      return true;
    }
  }

  // Component Log
  cl(component = '', method = '', variable = '', value) {
    const styledDescriptionString = this.getComponentDescriptionString(component, method, variable)
    console.log(...styledDescriptionString, value)
  }

  // Component table
  ct(component = '', method = '', variable = '', value, columns) {
    const styledDescriptionString = this.getComponentDescriptionString(component, method, variable)
    console.log('')
    console.log(...styledDescriptionString)
    if (columns) {
      console.table(value, columns)
    } else {
      console.table(value)
    }
  }
  
  // File table
  ft(component = '', method = '', variable = '', value, columns) {
    const styledDescriptionString = this.getFileDescriptionString(component, method, variable)
    console.log('')
    console.log(...styledDescriptionString)
    if (columns) {
      console.table(value, columns)
    } else {
      console.table(value)
    }
  }

  // File log
  fl(file = '', method = '', variable = '', value ) {
    const styledDescriptionString = this.getFileDescriptionString(file, method, variable)
    console.log(...styledDescriptionString, value)
  }

  

  getComponentDescriptionString(component = '', method = '', variable = '') {
    const browserStyledDescriptionString = [
      `%c<${component}>.%c${method}() %c${variable}:`,
      `color: ${browserColors.component}`,
      `color: ${browserColors.method}`,
      `color: ${browserColors.variable}`
    ];
    
    const nodeDescriptionStyledString = [
      `${nodeColors.component}${nodeColors.method}${nodeColors.variable}`,
      `<${component}>`, `.${method}()`, ` ${variable}:`
    ]

    if (this.isBrowser()) {
      return browserStyledDescriptionString;
    } else {
      return nodeDescriptionStyledString
    }
    
  }

  getFileDescriptionString(file = '', method = '', variable = '') {
    const browserStyledDescriptionString = [
      `%c${file} %c ${method}() %c${variable}:`,
      `color: ${browserColors.file}`,
      `color: ${browserColors.method}`,
      `color: ${browserColors.variable}`
    ];
    
    const nodeDescriptionStyledString = [
      `${nodeColors.file}${nodeColors.method}${nodeColors.variable}`,
      `${file}`, ` ${method}()`, ` ${variable}:`
    ]
    
    if (this.isBrowser()) {
      return browserStyledDescriptionString
    } else {
      return nodeDescriptionStyledString
    }
  }

  

  log(message) {
    console.log(message)
  }


}


const fantasticConsole = new FantasticConsole();
export default fantasticConsole
