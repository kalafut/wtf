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
      return [`Math.sqrt(${x})`, "HI!"];
    }
    return [];
  },

  trim(x,y) {
    if (x.trim() === y) {
      return ["trim()"];
    }
    return [];
  },

  stringLength(x,y) {
    if (x.length === y) {
      return [`${x}.length`];
    }
    return []
  }
};

