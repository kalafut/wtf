function valid(params, reqs) {
  if(params.length != reqs.length) {
    return false;
  }
  for(var i=0; i < params.length; i++) {
    if(typeof(params[i]) != reqs[i]) {
      return false;
    }
  }
  return true;
}

export default {
  sqrt(x,y) {
    if (Math.sqrt(x) === y) {
      return "Math.sqrt(" + x + ")";
    }
  },
  //js_sqrt.config = { x: [ "string" ], y: [ "string" ] };

  trim(x,y) {
    if (x.trim() === y) {
      return "trim()";
    }
  },
  //js_trim.config = { x: [ "string" ], y: [ "string" ] };

  stringLength(x,y) {
    if (x.length === y) {
      return "length";
    }
  }
};
//js_string_length.config = { x: [ "string" ], y: [ "number" ] };

