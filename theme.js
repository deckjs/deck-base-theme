/*!
 * @deck/base-theme v1.0.1
 *
 * Copyright 2015, 
 */

!function(e){if("object"==typeof exports)module.exports=e();else if("function"==typeof define&&define.amd)define(e);else{var f;"undefined"!=typeof window?f=window:"undefined"!=typeof global?f=global:"undefined"!=typeof self&&(f=self),f.theme=e()}}(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(_dereq_,module,exports){
module.exports = function() {
  return function(deck) {
    var addClass = function(el, cls) {
        el.classList.add('bespoke-' + cls);
      },

      removeClass = function(el, cls) {
        el.className = el.className
          .replace(new RegExp('bespoke-' + cls +'(\\s|$)', 'g'), ' ')
          .trim();
      },

      deactivate = function(el, index) {
        var activeSlide = deck.slides[deck.slide()],
          offset = index - deck.slide(),
          offsetClass = offset > 0 ? 'after' : 'before';

        ['before(-\\d+)?', 'after(-\\d+)?', 'active', 'inactive'].map(removeClass.bind(null, el));

        if (el !== activeSlide) {
          ['inactive', offsetClass, offsetClass + '-' + Math.abs(offset)].map(addClass.bind(null, el));
        }
      };

    addClass(deck.parent, 'parent');
    deck.slides.map(function(el) { addClass(el, 'slide'); });

    deck.on('activate', function(e) {
      deck.slides.map(deactivate);
      addClass(e.slide, 'active');
      removeClass(e.slide, 'inactive');
    });
  };
};

},{}],2:[function(_dereq_,module,exports){
var inserted = {};

module.exports = function (css, options) {
    if (inserted[css]) return;
    inserted[css] = true;
    
    var elem = document.createElement('style');
    elem.setAttribute('type', 'text/css');

    if ('textContent' in elem) {
      elem.textContent = css;
    } else {
      elem.styleSheet.cssText = css;
    }
    
    var head = document.getElementsByTagName('head')[0];
    if (options && options.prepend) {
        head.insertBefore(elem, head.childNodes[0]);
    } else {
        head.appendChild(elem);
    }
};

},{}],3:[function(_dereq_,module,exports){

var classes = _dereq_('bespoke-classes');
var insertCss = _dereq_('insert-css');

module.exports = function() {
  var css = "/*! normalize.css v3.0.0 | MIT License | git.io/normalize */html{font-family:sans-serif;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}body{margin:0}article,aside,details,figcaption,figure,footer,header,hgroup,main,nav,section,summary{display:block}audio,canvas,progress,video{display:inline-block;vertical-align:baseline}audio:not([controls]){display:none;height:0}[hidden],template{display:none}a{background:0 0}a:active,a:hover{outline:0}abbr[title]{border-bottom:1px dotted}b{font-weight:700}dfn{font-style:italic}mark{background:#ff0;color:#000}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sup{top:-.5em}sub{bottom:-.25em}img{border:0}svg:not(:root){overflow:hidden}figure{margin:1em 40px}hr{box-sizing:content-box;height:0}pre{overflow:auto}kbd,pre,samp{font-family:monospace,monospace;font-size:1em}button,input,optgroup,select,textarea{color:inherit;font:inherit;margin:0}button{overflow:visible}button,select{text-transform:none}button,html input[type=\"button\"],input[type=\"reset\"],input[type=\"submit\"]{-webkit-appearance:button;cursor:pointer}button[disabled],html input[disabled]{cursor:default}button::-moz-focus-inner,input::-moz-focus-inner{border:0;padding:0}input{line-height:normal}input[type=\"checkbox\"],input[type=\"radio\"]{box-sizing:border-box;padding:0}input[type=\"number\"]::-webkit-inner-spin-button,input[type=\"number\"]::-webkit-outer-spin-button{height:auto}input[type=\"search\"]{-webkit-appearance:textfield;box-sizing:content-box}input[type=\"search\"]::-webkit-search-cancel-button,input[type=\"search\"]::-webkit-search-decoration{-webkit-appearance:none}fieldset{border:1px solid silver;margin:0 2px;padding:.35em .625em .75em}legend{border:0;padding:0}textarea{overflow:auto}optgroup{font-weight:700}table{border-collapse:collapse;border-spacing:0}th,*{padding:0}*{margin:0}html{-webkit-text-size-adjust:auto;-ms-text-size-adjust:auto;text-size-adjust:auto}.bespoke-parent{font-size:1.5em;font-family:gill sans,helvetica,arial,arial,sans-serif;overflow:hidden;text-align:center;background-position:50% 50%;letter-spacing:1.2px;text-rendering:optimizeLegibility}.bespoke-parent,.bespoke-scale-parent{position:absolute;top:0;left:0;right:0;bottom:0}.bespoke-scale-parent{pointer-events:none;z-index:1}.bespoke-scale-parent .bespoke-active{pointer-events:auto}.bespoke-slide{width:720px;height:480px;position:absolute;top:50%;left:50%;margin-left:-360px;margin-top:-240px;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-ms-flex-align:center;align-items:center;z-index:1;-webkit-justify-content:inherit;-ms-flex-pack:inherit;justify-content:inherit}.bespoke-inactive{opacity:0;pointer-events:none}.bespoke-backdrop{position:absolute;top:0;left:0;right:0;bottom:0;opacity:0}.bespoke-backdrop-active{opacity:1}.bespoke-progress-parent{position:absolute;top:0;left:0;right:0;height:.3vw;z-index:1}.bespoke-progress-bar{background:#fff;position:absolute;top:0;left:0;height:100%}.bespoke-bullet-inactive{opacity:0}h1 strong{font-weight:600}h1,h2,h3,p,li{padding-left:20px;padding-right:20px}p,pre{font-weight:200}h1{margin:.17em 0}h2{font-size:1.1em;margin:.1em 0}h2,h3{font-style:normal}h3{font-size:.6em;margin:1.1em 0}h1,h2,h3{font-weight:500;-webkit-font-smoothing:antialiased;text-shadow:rgba(0,0,0,.01)0 0 1px;text-rendering:optimizeLegibility;letter-spacing:0}h1{max-width:660px;font-style:normal;font-size:49.3px;margin-bottom:-5px}ul,ol{padding:0;margin:0}li{list-style:none;margin:.2em;font-style:normal;-webkit-transform:translateX(-6px);-ms-transform:translateX(-6px);transform:translateX(-6px)}ol li{list-style:decimal;padding-left:0;margin-left:20px}ol li:before{content:''}ul li{list-style:disc;padding-left:0}ul li:first-child,ul li li:first-child,ol li:first-child,ol li li:first-child{margin-top:10px}ul,ol{text-align:left;width:625px;-webkit-margin-before:0;-webkit-margin-after:.8em}ul,ol,ul li ul,ol li ol{-webkit-margin-end:15px;-webkit-padding-start:30px}ul li ul,ol li ol{width:595px;-webkit-margin-before:.35em;-webkit-margin-after:0}ul li,ol li{margin-top:10px;margin-bottom:15px}ul li ul li ul,ol li ol li ol{width:600px}pre{background:none!important}code{font-family:prestige elite std,consolas,courier new,monospace!important;font-style:normal;font-weight:200!important;text-align:left}a{color:currentColor;text-decoration:none}a,a:visited,a:active,a:link{word-wrap:break-word;border:none}table{margin-top:30px;max-width:660px;margin-left:-14px;text-align:left}table,th{font-weight:400}th{padding-top:10px;padding-bottom:10px;text-align:center}td{font-weight:300;padding:12px;font-size:18px}strong{font-weight:600}ul,ol{font-size:30px}li{font-size:1em;font-weight:500;-webkit-font-smoothing:antialiased;text-shadow:rgba(0,0,0,.01)0 0 1px;text-rendering:optimizeLegibility;letter-spacing:.8px}code{letter-spacing:.05em;color:#555;font-size:.9em}pre code{font-size:1em;letter-spacing:.03em}pre.language-javascript{padding:0;margin:0 0 .25em}code.lang-sh,code.lang-bash{font-family:monaco!important;display:block;padding:4px 8px 3px;font-size:23px;width:547px;-webkit-font-smoothing:antialiased}blockquote{font-style:italic;font-family:helvetica;font-weight:300;width:500px;display:-webkit-flex;display:-ms-flexbox;display:flex;height:73%;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column}.bespoke-slide>ul>li>ul>li,.bespoke-slide>ol>li>ol>li{width:92.5%}.bespoke-slide>ul,.bespoke-slide>ol{margin-left:25px;margin-top:5px;width:90%;line-height:.99}";
  insertCss(css, { prepend: true });

  return function(deck) {
    classes()(deck);
  };
};

},{"bespoke-classes":1,"insert-css":2}]},{},[3])
(3)
});