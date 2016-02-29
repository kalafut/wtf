//import * as lib from './library.js';
import js from './checkers/js.js';

var catalog = [
  {
    desc: "Calculate the square root",
    tests: {
      js: js.sqrt,
      //go: lib.go_sqrt
    }
  },
  {
    desc: "Trim leading and trailing whitespace",
    tests: {
      js: js.trim,
    }
  },
  {
    desc: "String length",
    tests: {
      //js: js.stringLength,
    }
  },

];

export default catalog;
