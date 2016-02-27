$(".xy").on("input", calc);

function calc() {
  $("#output").text("");

  var x_raw = $("#x").val();
  var y_raw = $("#y").val();

  try {
    x = eval(x_raw);
    y = eval(y_raw);
  }
  catch(err) {
    return;
  }

  var tx = typeof(x);
  var ty = typeof(y);

  if(tx==="undefined" || ty==="undefined") {
    return;
  }

  catalog.js.forEach(function(test) {
    if(test.x.indexOf(tx) != -1) {
      test.f(x,y);
    }
  });
}

function js_sqrt(x,y) {
  if (Math.sqrt(x) === y) {
    $("#output").append("Math.sqrt()");
  }
}

function js_trim(x,y) {
  if (x.trim() === y) {
    $("#output").append("trim()");
  }
}

function js_string_length(x,y) {
  if (x.length === y) {
    $("#output").append("length");
  }
}

var catalog = {
  js: [
    { f: js_trim, x: [ "string" ], y: [ "string" ] },
    { f: js_sqrt, x: [ "number" ], y: [ "number" ] },
    { f: js_string_length, x: [ "string" ], y: [ "number" ] },
  ]
};

