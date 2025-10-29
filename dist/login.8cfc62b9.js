// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
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

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        globalObject
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
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
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"7vTeY":[function(require,module,exports,__globalThis) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "b3c595598cfc62b9";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && ![
        'localhost',
        '127.0.0.1',
        '0.0.0.0'
    ].includes(hostname) ? 'wss' : 'ws';
    var ws;
    if (HMR_USE_SSE) ws = new EventSource('/__parcel_hmr');
    else try {
        ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === 'undefined' ? typeof chrome === 'undefined' ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes('test.js');
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === 'reload') fullReload();
        else if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') window.dispatchEvent(new CustomEvent('parcelhmraccept'));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    if (ws instanceof WebSocket) {
        ws.onerror = function(e) {
            if (e.message) console.error(e.message);
        };
        ws.onclose = function() {
            console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
        };
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, '') : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + '</div>').join('')}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ''}
      </div>
    `;
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ('reload' in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute('href');
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', // $FlowFixMe
    href.split('?')[0] + '?' + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === 'js') {
        if (typeof document !== 'undefined') {
            let script = document.createElement('script');
            script.src = asset.url + '?t=' + Date.now();
            if (asset.outputFormat === 'esmodule') script.type = 'module';
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === 'function') {
            // Worker scripts
            if (asset.outputFormat === 'esmodule') return import(asset.url + '?t=' + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + '?t=' + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != 'undefined' && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"6rimH":[function(require,module,exports,__globalThis) {
/*
=================================================================
 VDoctor - Local Storage Authentication & Homepage Logic
=================================================================
 This file handles all client-side logic for the VDoctor project.
 It uses the browser's localStorage for user authentication,
 removing the need for a backend service like Firebase for this feature.

 Features:
 - User Registration (stores user data locally)
 - User Login (checks credentials against local data)
 - Session Management (maintains login state across pages)
 - Dynamic Navbar (shows Login/Register or Logout)
 - Doctor Search/Filter
 - Testimonial Slider
=================================================================
*/ /**
 * Displays a message in a designated message container.
 * @param {string} message - The message to display.
 * @param {boolean} isError - True if the message is an error, false for success.
 */ const showMessage = (message, isError = false)=>{
    const messageContainer = document.getElementById('message-container');
    if (!messageContainer) return;
    messageContainer.textContent = message;
    messageContainer.className = 'message-container'; // Reset classes
    if (isError) messageContainer.classList.add('error');
    else messageContainer.classList.add('success');
    messageContainer.style.display = 'block';
};
/**
 * Toggles the loading spinner visibility on a button.
 * @param {HTMLButtonElement} button - The button element.
 * @param {boolean} isLoading - True to show the spinner, false to hide it.
 */ const toggleLoading = (button, isLoading)=>{
    if (!button) return;
    const btnText = button.querySelector('.btn-text');
    const spinner = button.querySelector('.spinner');
    if (isLoading) {
        btnText.style.display = 'none';
        spinner.style.display = 'block';
        button.disabled = true;
    } else {
        btnText.style.display = 'inline';
        spinner.style.display = 'none';
        button.disabled = false;
    }
};
// --- AUTHENTICATION LOGIC ---
// Moved inside DOMContentLoaded below
/**
 * Checks auth state from localStorage and updates the navbar accordingly.
 */ const checkAuthState = ()=>{
    const authLinksContainer = document.getElementById('auth-links');
    if (!authLinksContainer) return;
    const user = JSON.parse(localStorage.getItem('vdoctor_currentUser'));
    if (user) {
        // User is signed in
        authLinksContainer.innerHTML = `
            <button id="logout-btn" class="btn btn-secondary nav-btn">LOGOUT</button>
        `;
        const logoutBtn = document.getElementById('logout-btn');
        logoutBtn?.addEventListener('click', async ()=>{
            localStorage.removeItem('vdoctor_currentUser');
            window.location.reload();
        });
    } else // User is signed out
    authLinksContainer.innerHTML = `
            <a href="login.html" class="btn btn-secondary nav-btn">LOGIN</a>
            <a href="register.html" class="btn btn-secondary nav-btn">REGISTER</a>
        `;
};
document.addEventListener('DOMContentLoaded', ()=>{
    // Always check the authentication state on any page that loads this script.
    checkAuthState();
    // Handle Registration
    const registerForm = document.getElementById('register-form');
    if (registerForm) registerForm.addEventListener('submit', (e)=>{
        e.preventDefault();
        const button = registerForm.querySelector('button[type="submit"]');
        toggleLoading(button, true);
        const fullName = document.getElementById('fullName').value.trim();
        const email = document.getElementById('email').value.trim().toLowerCase();
        const password = document.getElementById('password').value.trim();
        // Get existing users from localStorage or initialize an empty array
        const users = JSON.parse(localStorage.getItem('vdoctor_users')) || [];
        // Check if user already exists (case-insensitive email)
        const userExists = users.some((user)=>user.email.toLowerCase() === email);
        if (userExists) {
            showMessage('An account with this email already exists.', true);
            toggleLoading(button, false);
        } else {
            // Add new user
            users.push({
                fullName,
                email,
                password
            });
            localStorage.setItem('vdoctor_users', JSON.stringify(users));
            showMessage('Registration successful! Redirecting to login...', false);
            setTimeout(()=>window.location.href = 'login.html', 2000);
        }
    });
    // Handle Login
    const loginForm = document.getElementById('login-form');
    if (loginForm) loginForm.addEventListener('submit', (e)=>{
        e.preventDefault();
        const button = loginForm.querySelector('button[type="submit"]');
        toggleLoading(button, true);
        const email = document.getElementById('email').value.trim().toLowerCase();
        const password = document.getElementById('password').value.trim();
        const users = JSON.parse(localStorage.getItem('vdoctor_users')) || [];
        // Find user with matching credentials (case-insensitive email)
        const user = users.find((u)=>u.email.toLowerCase() === email && u.password === password);
        if (user) {
            // Store current user's info to simulate a session
            localStorage.setItem('vdoctor_currentUser', JSON.stringify({
                email: user.email,
                fullName: user.fullName
            }));
            showMessage('Login successful! Redirecting...', false);
            setTimeout(()=>window.location.href = 'index.html', 1500);
        } else {
            showMessage('Invalid email or password.', true);
            toggleLoading(button, false);
        }
    });
    // Expanded Symptom to Specialty Mapping with more comprehensive keywords
    const symptomMapping = {
        // Cardiologist
        'chest': 'Consult with a Cardiologist',
        'heart': 'Consult with a Cardiologist',
        'palpitations': 'Consult with a Cardiologist',
        'shortness': 'Consult with a Cardiologist',
        'breath': 'Consult with a Cardiologist',
        'cardiac': 'Consult with a Cardiologist',
        'hypertension': 'Consult with a Cardiologist',
        'blood pressure': 'Consult with a Cardiologist',
        // Dermatologist
        'skin': 'Consult with a Dermatologist',
        'rash': 'Consult with a Dermatologist',
        'acne': 'Consult with a Dermatologist',
        'eczema': 'Consult with a Dermatologist',
        'hair': 'Consult with a Dermatologist',
        'loss': 'Consult with a Dermatologist',
        'dermatitis': 'Consult with a Dermatologist',
        'psoriasis': 'Consult with a Dermatologist',
        // Dentist
        'tooth': 'Consult with a Dentist',
        'teeth': 'Consult with a Dentist',
        'dental': 'Consult with a Dentist',
        'mouth': 'Consult with a Dentist',
        'gum': 'Consult with a Dentist',
        'cavity': 'Consult with a Dentist',
        'pain': 'Consult with a Dentist',
        // Neurology
        'headache': 'Consult with a Neurologist',
        'migraine': 'Consult with a Neurologist',
        'dizziness': 'Consult with a Neurologist',
        'seizure': 'Consult with a Neurologist',
        'neurological': 'Consult with a Neurologist',
        'brain': 'Consult with a Neurologist',
        'numbness': 'Consult with a Neurologist',
        // Pediatrics
        'child': 'Consult with a Pediatrician',
        'baby': 'Consult with a Pediatrician',
        'pediatric': 'Consult with a Pediatrician',
        'vaccination': 'Consult with a Pediatrician',
        'fever': 'Consult with a Pediatrician',
        'growth': 'Consult with a Pediatrician',
        // Gynecology
        'pregnancy': 'Consult with a Gynecologist',
        'menstrual': 'Consult with a Gynecologist',
        'gynecological': 'Consult with a Gynecologist',
        'women': 'Consult with a Gynecologist',
        'female': 'Consult with a Gynecologist',
        'period': 'Consult with a Gynecologist',
        // Orthopedics
        'joint': 'Consult with an Orthopedic Surgeon',
        'back': 'Consult with an Orthopedic Surgeon',
        'bone': 'Consult with an Orthopedic Surgeon',
        'fracture': 'Consult with an Orthopedic Surgeon',
        'arthritis': 'Consult with an Orthopedic Surgeon',
        'knee': 'Consult with an Orthopedic Surgeon',
        'shoulder': 'Consult with an Orthopedic Surgeon',
        // Urology
        'urinary': 'Consult with a Urologist',
        'kidney': 'Consult with a Urologist',
        'bladder': 'Consult with a Urologist',
        'prostate': 'Consult with a Urologist',
        'urine': 'Consult with a Urologist',
        // General Medicine
        'stomach': 'Consult with a General Physician',
        'cough': 'Consult with a General Physician',
        'cold': 'Consult with a General Physician',
        'fever': 'Consult with a General Physician',
        'general': 'Consult with a General Physician'
    };
    // Function to check symptoms and suggest specialties
    const checkSymptoms = ()=>{
        const symptomsInput = document.getElementById('symptoms-input');
        const symptomResults = document.getElementById('symptom-results');
        const suggestedSpecialties = document.getElementById('suggested-specialties');
        if (!symptomsInput || !symptomResults || !suggestedSpecialties) return;
        const symptoms = symptomsInput.value.trim().toLowerCase();
        if (!symptoms) {
            suggestedSpecialties.innerHTML = '<li>Please enter some symptoms.</li>';
            symptomResults.style.display = 'block';
            return;
        }
        const words = symptoms.split(/\s+/);
        const suggestions = new Set();
        words.forEach((word)=>{
            if (symptomMapping[word]) suggestions.add(symptomMapping[word]);
        });
        if (suggestions.size > 0) {
            suggestedSpecialties.innerHTML = '';
            suggestions.forEach((suggestion)=>{
                const li = document.createElement('li');
                li.textContent = suggestion;
                suggestedSpecialties.appendChild(li);
            });
        } else suggestedSpecialties.innerHTML = '<li>No specific specialty suggested. Please consult a General Physician.</li>';
        symptomResults.style.display = 'block';
    };
    // Event listener for symptom checker button
    const checkSymptomsBtn = document.getElementById('check-symptoms-btn');
    if (checkSymptomsBtn) checkSymptomsBtn.addEventListener('click', checkSymptoms);
    // Event listener for search suggested button
    const searchSuggestedBtn = document.getElementById('search-suggested-btn');
    if (searchSuggestedBtn) searchSuggestedBtn.addEventListener('click', ()=>{
        const suggestedItems = document.querySelectorAll('#suggested-specialties li');
        if (suggestedItems.length > 0) {
            const firstSpecialty = suggestedItems[0].textContent;
            // Extract specialty from "Consult with a [Specialty]"
            const specialtyMatch = firstSpecialty.match(/Consult with a (.+)/);
            const specialty = specialtyMatch ? specialtyMatch[1] : firstSpecialty;
            const specializationSearch = document.getElementById('specialization-search');
            const locationSearch = document.getElementById('location-search');
            if (specializationSearch) specializationSearch.value = specialty;
            // Set default location if not set
            if (locationSearch && !locationSearch.value) locationSearch.value = 'USA'; // Default location
            // Trigger search
            const searchBtn = document.getElementById('search-btn');
            if (searchBtn) searchBtn.click();
        }
    });
    // Testimonial Slider Logic
    const testimonials = [
        {
            quote: "VDoctor made booking a consultation so easy. The virtual consultation saved me so much time!",
            author: "Jennifer Robinson, LELEANDM USA",
            image: "https://picsum.photos/200/200?random=1"
        },
        {
            quote: "The doctors are highly professional and caring. I had a wonderful experience and would highly recommend this platform.",
            author: "John Doe, HealthFirst UK",
            image: "https://picsum.photos/200/200?random=2"
        },
        {
            quote: "A seamless and efficient way to get medical advice. The platform is user-friendly and the service is top-notch.",
            author: "Priya Sharma, MediConnect India",
            image: "https://picsum.photos/200/200?random=3"
        }
    ];
    const sliderContainer = document.querySelector('.testimonial-card-container');
    const nextBtn = document.querySelector('.next-btn');
    const prevBtn = document.querySelector('.prev-btn');
    let currentSlide = 0;
    const renderTestimonials = ()=>{
        if (!sliderContainer) return;
        sliderContainer.innerHTML = '';
        testimonials.forEach((t, index)=>{
            const card = document.createElement('div');
            card.classList.add('testimonial-card');
            if (index === currentSlide) card.classList.add('active');
            card.innerHTML = `
                <div class="testimonial-profile">
                    <img src="${t.image}" alt="${t.author}" class="testimonial-avatar">
                    <div class="testimonial-info">
                        <p class="testimonial-quote">"${t.quote}"</p>
                        <p class="testimonial-author">- ${t.author}</p>
                    </div>
                </div>
            `;
            sliderContainer.appendChild(card);
        });
    };
    const showSlide = (index)=>{
        const slides = document.querySelectorAll('.testimonial-card');
        if (index >= slides.length) currentSlide = 0;
        else if (index < 0) currentSlide = slides.length - 1;
        else currentSlide = index;
        slides.forEach((slide)=>slide.classList.remove('active'));
        slides[currentSlide].classList.add('active');
    };
    if (nextBtn && prevBtn) {
        renderTestimonials(); // Initial render
        nextBtn.addEventListener('click', ()=>{
            showSlide(currentSlide + 1);
        });
        prevBtn.addEventListener('click', ()=>{
            showSlide(currentSlide - 1);
        });
    }
    // Floating Chatbot Logic
    const chatIcon = document.getElementById('chat-icon');
    const chatWindow = document.getElementById('chat-window');
    const closeChat = document.getElementById('close-chat');
    const chatMessages = document.getElementById('chat-messages');
    const chatInput = document.getElementById('chat-input');
    const sendBtn = document.getElementById('send-btn');
    // Toggle chat window
    if (chatIcon) chatIcon.addEventListener('click', ()=>{
        chatWindow.style.display = chatWindow.style.display === 'none' ? 'flex' : 'none';
    });
    if (closeChat) closeChat.addEventListener('click', ()=>{
        chatWindow.style.display = 'none';
    });
    // Medical Q&A Knowledge Base
    const medicalResponses = {
        'hello': 'Hello! How can I help you with your health questions today?',
        'hi': 'Hi there! I\'m here to answer your medical questions. What would you like to know?',
        'headache': 'Headaches can have many causes including stress, dehydration, lack of sleep, or medical conditions. If persistent or severe, consult a doctor. Try resting in a dark room and staying hydrated.',
        'fever': "A fever is your body's natural response to infection. Rest, stay hydrated, and monitor your temperature. If over 103\xb0F (39.4\xb0C) or lasting more than 3 days, see a doctor.",
        'cough': 'Coughs can be caused by colds, allergies, or infections. Stay hydrated, use honey for soothing, and rest. If persistent with chest pain or shortness of breath, consult a healthcare provider.',
        'stomach pain': 'Stomach pain can result from indigestion, gas, or more serious conditions. Try eating smaller meals and avoiding trigger foods. If severe or persistent, seek medical attention.',
        'blood pressure': 'Blood pressure measures the force of blood against artery walls. Normal is less than 120/80 mmHg. High blood pressure often has no symptoms but can lead to serious health issues.',
        'diabetes': 'Diabetes is a condition where blood sugar levels are too high. Type 1 is autoimmune, Type 2 is lifestyle-related. Management includes diet, exercise, and sometimes medication.',
        'heart disease': 'Heart disease includes conditions affecting the heart. Risk factors include high blood pressure, high cholesterol, smoking, and family history. Prevention focuses on healthy lifestyle.',
        'cancer': 'Cancer is abnormal cell growth that can spread. Early detection is crucial. Risk factors vary by type, but include genetics, lifestyle, and environmental factors.',
        'vaccines': 'Vaccines help prevent infectious diseases by stimulating immunity. They\'re safe and effective. Consult your doctor about recommended vaccinations for your age and health conditions.',
        'mental health': 'Mental health is as important as physical health. Common conditions include anxiety and depression. Therapy, medication, and lifestyle changes can help. Don\'t hesitate to seek professional help.',
        'exercise': 'Regular exercise improves cardiovascular health, strengthens muscles, and boosts mental health. Aim for 150 minutes of moderate activity per week.',
        'diet': 'A balanced diet includes fruits, vegetables, whole grains, lean proteins, and healthy fats. Limit processed foods, sugar, and salt. Stay hydrated and eat mindfully.',
        'sleep': 'Adults need 7-9 hours of quality sleep per night. Poor sleep can affect mood, immunity, and cognitive function. Maintain a consistent sleep schedule.',
        'stress': 'Stress is normal but chronic stress can harm health. Practice relaxation techniques like deep breathing, meditation, or yoga. Seek support when needed.',
        'emergency': 'For medical emergencies, call emergency services immediately (911 in US). Signs include chest pain, difficulty breathing, severe bleeding, or loss of consciousness.',
        'appointment': 'To book an appointment, use our search feature to find doctors by specialty and location, then click "Book Appointment" on their profile.',
        'symptoms': 'Our AI Symptom Checker can help suggest medical specialties based on your symptoms. Try describing what you\'re experiencing.',
        'default': 'I\'m here to help with general health information. For personalized medical advice, please consult a qualified healthcare professional. What specific health topic would you like to know about?'
    };
    const addMessage = (message, isUser = false)=>{
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('message');
        if (isUser) messageDiv.classList.add('user-message');
        else messageDiv.classList.add('bot-message');
        messageDiv.innerHTML = `
            <div class="message-avatar">
                ${isUser ? '<i class="fas fa-user"></i>' : '<i class="fas fa-robot"></i>'}
            </div>
            <div class="message-content">
                <p>${message}</p>
            </div>
        `;
        chatMessages.appendChild(messageDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    };
    const getBotResponse = (userMessage)=>{
        const message = userMessage.toLowerCase().trim();
        // Check for exact matches first
        if (medicalResponses[message]) return medicalResponses[message];
        // Check for keywords in the message
        for (const [key, response] of Object.entries(medicalResponses)){
            if (key !== 'default' && message.includes(key)) return response;
        }
        // Default response
        return medicalResponses['default'];
    };
    const handleSendMessage = ()=>{
        const message = chatInput.value.trim();
        if (!message) return;
        addMessage(message, true);
        chatInput.value = '';
        // Simulate typing delay
        setTimeout(()=>{
            const response = getBotResponse(message);
            addMessage(response);
        }, 500);
    };
    if (sendBtn && chatInput) {
        sendBtn.addEventListener('click', handleSendMessage);
        chatInput.addEventListener('keypress', (e)=>{
            if (e.key === 'Enter') handleSendMessage();
        });
    }
    // Only run this logic on the homepage
    if (document.getElementById('doctor-grid')) {
        // Doctor Data - Limited to 3 best doctors with high ratings
        const doctors = [
            {
                name: 'Dr. Mehnaz',
                specialization: 'Cardiologist',
                location: 'Canada',
                availableDates: [
                    '2024-10-15',
                    '2024-10-16',
                    '2024-10-17'
                ],
                image: 'public/448fb44937b4973fffc5202effb13d3c91eae9c7@2x.png',
                rating: 5.0
            },
            {
                name: 'Dr. Emily Carter',
                specialization: 'Cardiologist',
                location: 'USA',
                availableDates: [
                    '2024-10-18',
                    '2024-10-19',
                    '2024-10-20'
                ],
                image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=250&h=250&q=80',
                rating: 4.9
            },
            {
                name: 'Dr. Michael Lee',
                specialization: 'Cardiologist',
                location: 'UK',
                availableDates: [
                    '2024-10-21',
                    '2024-10-22',
                    '2024-10-23'
                ],
                image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=250&h=250&q=80',
                rating: 4.8
            }
        ];
        const doctorGrid = document.getElementById('doctor-grid');
        const noResultsMessage = document.getElementById('no-results-message');
        // Function to render doctors
        const renderDoctors = (filteredDoctors)=>{
            doctorGrid.innerHTML = '';
            filteredDoctors.forEach((doc)=>{
                const doctorCard = `
                    <div class="doctor-card">
                        <img src="${doc.image}" alt="${doc.name}" class="doctor-image">
                        <div class="doctor-info">
                            <h3 class="doctor-name">${doc.name}</h3>
                            <p class="doctor-specialization">${doc.specialization}</p>
                            <p class="doctor-location">${doc.location}</p>
                            <p class="doctor-rating">Rating: ${doc.rating} <i class="fa-solid fa-star"></i></p>
                            <p class="doctor-availability">Available: ${doc.availableDates.join(', ')}</p>
                            <button class="btn btn-primary book-btn" data-doctor="${doc.name}">Book Appointment</button>
                        </div>
                    </div>
                `;
                doctorGrid.innerHTML += doctorCard;
            });
            // Add event listeners to book buttons
            const bookButtons = document.querySelectorAll('.book-btn');
            bookButtons.forEach((button)=>{
                button.addEventListener('click', (e)=>{
                    const doctorName = e.target.getAttribute('data-doctor');
                    const doctor = doctors.find((d)=>d.name === doctorName);
                    if (doctor) {
                        // Redirect to Google Form with pre-filled data if possible
                        const formUrl = `https://forms.gle/5wWvhfe4NNLit21A7?usp=pp_url&entry.123456789=${encodeURIComponent(doctorName)}`;
                        window.open(formUrl, '_blank');
                    }
                });
            });
            if (filteredDoctors.length === 0) noResultsMessage.style.display = 'block';
            else noResultsMessage.style.display = 'none';
        };
        // Initial render
        if (doctorGrid) renderDoctors(doctors);
        // Search/Filter Logic
        const searchForm = document.getElementById('doctor-search-form');
        const specializationSearch = document.getElementById('specialization-search');
        const locationSearch = document.getElementById('location-search');
        const dateSearch = document.getElementById('date-search');
        const filterDoctors = (e)=>{
            e.preventDefault(); // Prevent form submission
            const specQuery = specializationSearch.value.toLowerCase();
            const locQuery = locationSearch.value.toLowerCase();
            const dateQuery = dateSearch.value;
            const filtered = doctors.filter((doc)=>{
                // If query is empty, it's a match. Otherwise, check for inclusion.
                const matchesSpec = specQuery === '' || doc.specialization.toLowerCase().includes(specQuery);
                const matchesLoc = locQuery === '' || doc.location.toLowerCase().includes(locQuery);
                const matchesDate = dateQuery === '' || doc.availableDates.includes(dateQuery);
                return matchesSpec && matchesLoc && matchesDate;
            });
            renderDoctors(filtered);
        };
        const searchBtn = document.getElementById('search-btn');
        if (searchBtn) searchBtn.addEventListener('click', ()=>{
            const specialization = specializationSearch.value;
            const location = locationSearch.value;
            const date = dateSearch.value;
            const params = new URLSearchParams();
            if (specialization) params.append('specialization', specialization);
            if (location) params.append('location', location);
            if (date) params.append('date', date);
            window.location.href = `result.html?${params.toString()}`;
        });
        if (searchForm) {
            searchForm.addEventListener('submit', filterDoctors);
            // Also filter on change for a more interactive feel
            specializationSearch.addEventListener('change', (e)=>filterDoctors(e));
            locationSearch.addEventListener('change', (e)=>filterDoctors(e));
            dateSearch.addEventListener('change', (e)=>filterDoctors(e));
        }
    }
});

},{}]},["7vTeY","6rimH"], "6rimH", "parcelRequire94c2")

//# sourceMappingURL=login.8cfc62b9.js.map
