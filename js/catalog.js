import js from './checkers/js.js';
import go from './checkers/go.js';
import py from './checkers/py.js';

var catalog = [
  {
    desc: "Calculate the square root",
    params: [ "number", "number" ],
    tests: {
      js: [ js.sqrt, ["number","number"] ],
      go: [ go.sqrt, ["number","number"] ]
      //go: lib.go_sqrt
    }
  },
  {
    desc: "Trim leading and trailing whitespace",
    tests: {
      js: [ js.trim, ["string", "string"] ]
    }
  },
  {
    desc: "String length",
    tests: {
      go: [ go.stringLength, [ "string", "number" ] ],
      js: [ js.stringLength, [ "string", "number" ] ],
      py: [ py.stringLength, [ "string", "number" ] ],
    }
  },

];

export default catalog;
