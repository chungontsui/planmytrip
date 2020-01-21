// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"app.js":[function(require,module,exports) {
Vue.component('todo-item', {
  props: ['leg'],
  template: "\n    <form class=\"form-inline\">\n    <div class=\"form-group mb-2\">\n    In&nbsp;\n    <select class='form-control' v-model='leg.whenToTravel' v-on:change=\"$emit('data-change')\">\n    <option value='0'>Same day</option>\n    <option value='1'>Next day</option>\n    <option value='2'>1 day</option>\n    <option value='3'>2 days</option>\n    <option value='4'>3 days</option>\n    <option value='5'>4 days</option>\n    <option value='6'>5 days</option>\n    </select>\n    &nbsp;\n    </div>\n    <div class=\"form-group mb-2\">\n    <label for=\"staticEmail2\" class=\"sr-only\">Email</label>\n    <input type=\"text\" class=\"form-control\" v-model=\"leg.startingPoint\" id=\"startingPoint\" value=\"email@example.com\">\n    </div>\n    <div class=\"form-group mx-sm-3 mb-2\">\n    <input type=\"text\" class=\"form-control\" v-model=\"leg.destination\" id=\"destination\" placeholder=\"Password\">\n    </div>\n    <div class=\"form-group mx-sm-3 mb-2\">\n    <input type=\"number\" class=\"form-control\" v-model=\"leg.timeToGetThereInMin\" id=\"timeToGetThereInMin\" placeholder=\"\">\n    </div>\n    <div class=\"form-group mx-sm-3 mb-2\">\n    <select class=\"form-control\" v-model='leg.beginTravel' v-on:change=\"$emit('data-change')\">\n    <option value='1'>01:00</option>\n    <option value='2'>02:00</option>\n    <option value='3'>03:00</option>\n    <option value='4'>04:00</option>\n    <option value='5'>05:00</option>\n    <option value='6'>06:00</option>\n    <option value='7'>07:00</option>\n    <option value='8'>08:00</option>\n    <option value='9'>09:00</option>\n    <option value='10'>10:00</option>\n    <option value='11'>11:00</option>\n    <option value='12'>12:00</option>\n    <option value='13'>13:00</option>\n    <option value='14'>14:00</option>\n    <option value='15'>15:00</option>\n    <option value='16'>16:00</option>\n    <option value='17'>17:00</option>\n    <option value='18'>18:00</option>\n    <option value='19'>19:00</option>\n    <option value='20'>20:00</option>\n    <option value='21'>21:00</option>\n    <option value='22'>22:00</option>\n    <option value='23'>23:00</option>\n    <option value='24'>24:00</option>\n    </select>\n    </div>\n    <button><i class=\"fas fa-camera\"></i></button>\n    </form>\n    " // ,
  // methods:{
  //     calculateStayDuration: function(value){
  //     }
  // }

});
var app = new Vue({
  el: '#app',
  data: {
    message: '',
    tripLegs: [{
      id: 1,
      startingPoint: "Christchurch",
      destination: "Dunedin",
      timeToGetThereInMin: 300,
      beginTravel: 9,
      stayDurationAtDestInMin: 720
    }, //Till Midnight                                                                                     
    {
      id: 2,
      whenToTravel: 1,
      startingPoint: "Dunedin",
      destination: "Queenstown",
      timeToGetThereInMin: 180,
      beginTravel: 9,
      stayDurationAtDestInMin: 720
    }, {
      id: 3,
      whenToTravel: 1,
      startingPoint: "Queenstown",
      destination: "Christchurch",
      timeToGetThereInMin: 300,
      beginTravel: 9,
      stayDurationAtDestInMin: 0
    }],
    tripTotalMin: 0
  },
  methods: {
    addLeg: function addLeg() {
      this.tripLegs.push(this.tripLegs.length + 1);
      this.message = this.tripLegs[this.tripLegs.length - 1].startingPoint;
    },
    calculateTotalTime: function calculateTotalTime() {
      var _totalMin = 0; //let _stayDuration = 
      // this.tripLegs.forEach(leg=>{
      //     _totalMin = _totalMin + (leg.beginTravel * 60) + leg.timeToGetThereInMin + leg.stayDurationAtDestInMin;
      // });

      var _stayDuration = 0;

      for (var i = 0; i < this.tripLegs.length; i++) {
        _stayDuration = 0; //if(this.tripLegs[i].whenToTravel && this.tripLegs[i].whenToTravel !== undefined){

        if (i > 0) {
          var lastLeg = this.tripLegs[i - 1];
          console.log(this.tripLegs[i].whenToTravel);
          _stayDuration = this.tripLegs[i].whenToTravel * 1440 + this.tripLegs[i].beginTravel * 60 - (lastLeg.beginTravel * 60 + lastLeg.timeToGetThereInMin);
          console.log('between leg ' + lastLeg.id + ' and leg ' + this.tripLegs[i].id + ', duration:' + _stayDuration);
        } //_stayDuration = (this.tripLegs[i].beginTravel * 60) - (((lastLeg.beginTravel * 60) + lastLeg.timeToGetThereInMin) - (this.tripLegs[i].whenToTravel * 1440))
        //}
        // if(i < (this.tripLegs.length -1)){
        //     //get the next leg's whenToTravel to work out the present legs duration of stay
        //     _stayDuration = this.triplegs[(i + 1)].whenToTravel * 1440
        // }


        _totalMin = _totalMin + this.tripLegs[i].timeToGetThereInMin + _stayDuration;

        if (i > 0) {
          _totalMin += this.tripLegs[i].beginTravel * 60;
        }
      }

      console.log("_totalMin: " + _totalMin);
      this.tripTotalMin = Math.ceil(_totalMin / 1440);
    }
  }
});
},{}],"../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "51708" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","app.js"], null)
//# sourceMappingURL=/app.c328ef1a.js.map