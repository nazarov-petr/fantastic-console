import colors from "colors"
const browserColors = {
  component: 'red',
  method: 'blue',
  variable: 'green'
}
const nodeColors = {
  component: 'red',
  method: 'blue',
  variable: 'green'
}
class AwesomeConsoleLog {
  isBrowser(){
    if ((typeof process !== 'undefined') && process && process.release && process.release.name === 'node'){
      return false;
    } else {
      return true;
    }
  }

  rclog(component = '', method = '', variable = '', value = '') {
    
    
    const browserStyledDescriptionString = [
      `%c<${component}>.%c${method}() %c${variable}:`,
      `color: ${browserColors.component}`,
      `color: ${browserColors.method}`,
      `color: ${browserColors.variable}`
    ];
    
    const nodeDescriptionStyledString = [
      `<${component}>`[nodeColors['component']],
      `.${method}()`[nodeColors['method']],
      `${variable}:`[nodeColors['variable']],
    ]
    if (this.isBrowser) {
      console.log(...nodeDescriptionStyledString, value);
    } else {
      console.log(...browserStyledDescriptionString, value)
    }
    
  }
  log(message) {
    console.log(message)
  }


}


const awesomeConsoleLog = new AwesomeConsoleLog();
export default awesomeConsoleLog;
