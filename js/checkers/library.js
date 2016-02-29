export function js_sqrt(x,y) {
  if (Math.sqrt(x) === y) {
    return "Math.sqrt(" + x + ")";
  }
}
js_sqrt.config = { x: [ "string" ], y: [ "string" ] };

export function go_sqrt(x,y) {
  if (js_sqrt(x,y) !== undefined) {
    return "math.Sqrt(" + x + ")";
  }
}
go_sqrt.config = { x: [ "string" ], y: [ "string" ] };

export function js_trim(x,y) {
  if (x.trim() === y) {
    return "trim()";
  }
}
js_trim.config = { x: [ "string" ], y: [ "string" ] };

export function js_string_length(x,y) {
  if (x.length === y) {
    return "length";
  }
}
js_string_length.config = { x: [ "string" ], y: [ "number" ] };

