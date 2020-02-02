"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _colors = _interopRequireDefault(require("colors"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const browserColors = {
  component: 'red',
  method: 'blue',
  variable: 'green'
};
const nodeColors = {
  component: 'red',
  method: 'blue',
  variable: 'green'
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
    const nodeDescriptionStyledString = [`<${component}>`[nodeColors['component']], `.${method}()`[nodeColors['method']], `${variable}:`[nodeColors['variable']]];

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