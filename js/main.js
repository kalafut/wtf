import Vue from 'vue';
import catalog from './catalog';

//var Vue = require('vue');

function calc(x_raw,y_raw, selectedLangs) {
  var x,y;

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

  var matches = [];

  catalog.forEach(action => {
    var langs = Object.keys(action.tests);
    langs.forEach(lang => {
      if(selectedLangs.indexOf(lang) != -1) {
          var [test, rqmts] = action.tests[lang];

          if(typeof(x) === rqmts[0] && typeof(y) === rqmts[1]) {
            matches = matches.concat({language: lang, results: test(x,y)});
          }
      }
    });
  });

  return matches;
}

Vue.config.debug = true;
var demo = new Vue({
  el: '#demo',
  data: {
    x: '9',
    y: '3',
    languages: []
  },
  computed: {
    matches: function() {
      return calc(this.x, this.y, this.languages);
    }
  }
});
