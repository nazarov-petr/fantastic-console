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
  
  log(message) {
    console.log(message)
  }

  // Component Log
  cl(component = '', method = '', variable = '', value) {
    const styledDescriptionString = this.getComponentDescriptionString(component, method, variable)
    console.log(...styledDescriptionString, value)
  }

  // Component Log
  fl(component = '', method = '', variable = '', value) {
    const styledDescriptionString = this.getFileDescriptionString(component, method, variable)
    console.log(...styledDescriptionString, value)
  }

  // Component Table
  ct(component = '', method = '', variable = '', value, columns) {
    const styledDescriptionString = this.getComponentDescriptionString(component, method, variable);
    this.table(styledDescriptionString, value, columns)
  }
  // File Table
  ft(file = '', method = '', variable = '', value, columns) {
    const styledDescriptionString = this.getFileDescriptionString(file, method, variable);
    this.table(styledDescriptionString, value, columns)
  }

  // Component Trace
  ctrace(component = '', method = '', variable = '') {
    const styledDescriptionString = this.getComponentDescriptionString(component, method, variable);
    this.trace(styledDescriptionString)
  }

  // File Trace
  ftrace(file = '', method = '', variable = '') {
    const styledDescriptionString = this.getFileDescriptionString(file, method, variable);
    this.trace(styledDescriptionString)
  }

  // Component Full
  cfull(file = '', method = '', variable = '', value) {
    const styledDescriptionString = this.getComponentDescriptionString(file, method, variable)
    this.full(styledDescriptionString, value)
  }

  // File Full
  ffull(file = '', method = '', variable = '', value) {
    const styledDescriptionString = this.getFileDescriptionString(file, method, variable)
    this.full(styledDescriptionString, value)
  }


  // Private Methods
  isBrowser(){
    if ((typeof process !== 'undefined') && process && process.release && process.release.name === 'node'){
      return false;
    } else {
      return true;
    }
  }

  table(styledDescriptionString, value, columns) {
    console.groupCollapsed(...styledDescriptionString); 
      if (columns) {
        console.table(value, columns);
      } else {
        console.table(value);
      }
    console.groupEnd()
  }

  trace(styledDescriptionString) {
    console.groupCollapsed(...styledDescriptionString); 
      console.trace();
    console.groupEnd()
  }

  full (styledDescriptionString, value){
    console.groupCollapsed(...styledDescriptionString) 

      console.group('value')
        console.log(value)
      console.groupEnd()
      
      
      console.groupCollapsed('table')
        console.table(value)
      console.groupEnd()
      if (this.isBrowser()){
        console.groupCollapsed('trace')
          console.trace()
        console.groupEnd()
      }

    console.groupEnd()
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

}


const fantasticConsole = new FantasticConsole();
export default fantasticConsole
