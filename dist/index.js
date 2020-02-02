"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
const browserColors = {
  component: 'red',
  method: 'blue',
  variable: 'green'
};
const nodeColors = {
  component: '\x1b[31m%s\x1b[0m',
  method: '\x1b[34m%s\x1b[0m',
  variable: '\x1b[32m%s\x1b[0m'
};

class AwesomeConsoleLog {
  isBrowser() {
    if (typeof process !== 'undefined' && process && process.release && process.release.name === 'node') {
      return false;
    } else {
      return true;
    }
  }

  rclog(component = '', method = '', variable = '', value = '') {
    const browserStyledDescriptionString = [`%c<${component}>.%c${method}() %c${variable}:`, `color: ${browserColors.component}`, `color: ${browserColors.method}`, `color: ${browserColors.variable}`];
    const nodeDescriptionStyledString = [`<${nodeColors.component}>.${nodeColors.method}()${nodeColors.variable}:`, component, method, variable];

    if (this.isBrowser()) {
      console.log(...browserStyledDescriptionString, value);
    } else {
      console.log(...nodeDescriptionStyledString, value);
    }
  }

  log(message) {
    console.log(message);
  }

}

const awesomeConsoleLog = new AwesomeConsoleLog();
var _default = awesomeConsoleLog;
exports.default = _default;