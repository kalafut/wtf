export default {
  sqrt: function(x,y) {
    if (Math.sqrt(x) === y) {
      return "Math.sqrt(" + x + ")";
    }
  },
  //js_sqrt.config = { x: [ "string" ], y: [ "string" ] };

  trim: function(x,y) {
    if (x.trim() === y) {
      return "trim()";
    }
  },
  //js_trim.config = { x: [ "string" ], y: [ "string" ] };

  stringLength: function(x,y) {
    if (x.length === y) {
      return "length";
    }
  }
};
//js_string_length.config = { x: [ "string" ], y: [ "number" ] };

