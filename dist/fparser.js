!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.Formula=e():t.Formula=e()}(this,(()=>{return t={91:function(t,e){var r,n;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=function(r){"use strict";function n(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&i(t,e)}function i(t,e){return i=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},i(t,e)}function o(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=a(t);if(e){var i=a(this).constructor;r=Reflect.construct(n,arguments,i)}else r=n.apply(this,arguments);return function(t,e){if(e&&("object"===u(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,r)}}function a(t){return a=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},a(t)}function u(t){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},u(t)}function s(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?s(Object(r),!0).forEach((function(e){c(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function c(t,e,r){return(e=m(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function f(t){return function(t){if(Array.isArray(t))return p(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||h(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function h(t,e){if(t){if("string"==typeof t)return p(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?p(t,e):void 0}}function p(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function v(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function y(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,m(n.key),n)}}function b(t,e,r){return e&&y(t.prototype,e),r&&y(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t}function m(t){var e=function(t,e){if("object"!==u(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,e||"default");if("object"!==u(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"===u(e)?e:String(e)}Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var g={PI:Math.PI,E:Math.E,LN2:Math.LN2,LN10:Math.LN10,LOG2E:Math.LOG2E,LOG10E:Math.LOG10E,SQRT1_2:Math.SQRT1_2,SQRT2:Math.SQRT2},d=function(){function t(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return v(this,t),this.formulaExpression=null,this.options=Object.assign({memoization:!1},r),this._variables=[],this._memory={},this.setFormula(e),this}return b(t,[{key:"setFormula",value:function(t){return t&&(this.formulaExpression=null,this._variables=[],this._memory={},this.formulaStr=t,this.formulaExpression=this.parse(t)),this}},{key:"enableMemoization",value:function(){this.options.memoization=!0}},{key:"disableMemoization",value:function(){this.options.memoization=!1,this._memory={}}},{key:"splitFunctionParams",value:function(t){var e,r=0,n="",i=[],o=function(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=h(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var n=0,i=function(){};return{s:i,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,a=!0,u=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return a=t.done,t},e:function(t){u=!0,o=t},f:function(){try{a||null==r.return||r.return()}finally{if(u)throw o}}}}(t.split(""));try{for(o.s();!(e=o.n()).done;){var a=e.value;if(","===a&&0===r)i.push(n),n="";else if("("===a)r++,n+=a;else if(")"===a){if(n+=a,--r<0)throw new Error("ERROR: Too many closing parentheses!")}else n+=a}}catch(t){o.e(t)}finally{o.f()}if(0!==r)throw new Error("ERROR: Too many opening parentheses!");return n.length>0&&i.push(n),i}},{key:"cleanupInputString",value:function(t){return t=t.replace(/[\s]+/g,""),Object.keys(g).forEach((function(e){t=t.replace(new RegExp("\\b".concat(e,"\\b"),"g"),"[".concat(e,"]"))})),t}},{key:"parse",value:function(t){return t=this.cleanupInputString(t),this._do_parse(t)}},{key:"_do_parse",value:function(t){for(var e=this,r=t.length-1,n=0,i=0,o=[],a="",u="",s=null,l=0;n<=r;){switch(i){case 0:if((a=t.charAt(n)).match(/[0-9.]/))i="within-nr",u="",n--;else if(this.isOperator(a)){if("-"===a&&(0===o.length||this.isOperatorExpr(o[o.length-1]))){i="within-nr",u="-";break}if(n===r||this.isOperatorExpr(o[o.length-1])){i=-1;break}o.push(w.createOperatorExpression(a)),i=0}else"("===a?(i="within-parentheses",u="",l=0):"["===a?(i="within-named-var",u=""):a.match(/[a-zA-Z]/)&&(n<r&&t.charAt(n+1).match(/[a-zA-Z0-9_]/)?(u=a,i="within-func"):(o.length>0&&o[o.length-1]instanceof O&&o.push(w.createOperatorExpression("*")),o.push(new _(a)),this.registerVariable(a),i=0,u=""));break;case"within-nr":(a=t.charAt(n)).match(/[0-9.]/)?(u+=a,n===r&&(o.push(new O(u)),i=0)):("-"===u&&(u=-1),o.push(new O(u)),u="",i=0,n--);break;case"within-func":if((a=t.charAt(n)).match(/[a-zA-Z0-9_]/))u+=a;else{if("("!==a)throw new Error("Wrong character for function at position "+n);s=u,u="",l=0,i="within-func-parentheses"}break;case"within-named-var":if("]"===(a=t.charAt(n)))o.push(new _(u)),this.registerVariable(u),u="",i=0;else{if(!a.match(/[a-zA-Z0-9_]/))throw new Error("Character not allowed within named variable: "+a);u+=a}break;case"within-parentheses":case"within-func-parentheses":if(")"===(a=t.charAt(n)))if(l<=0){if("within-parentheses"===i)o.push(new E(this._do_parse(u)));else if("within-func-parentheses"===i){var c=this.splitFunctionParams(u).map((function(t){return e._do_parse(t)}));o.push(new j(s,c,this)),s=null}i=0}else l--,u+=a;else"("===a?(l++,u+=a):u+=a}n++}if(0!==i)throw new Error("Could not parse formula: Syntax error.");return this.buildExpressionTree(o)}},{key:"buildExpressionTree",value:function(t){if(t.length<1)return null;for(var e=f(t),r=0,n=null;r<e.length;)if((n=e[r])instanceof S){if(0===r||r===e.length-1)throw new Error("Wrong operator position!");n.base=e[r-1],n.exponent=e[r+1],e[r-1]=n,e.splice(r,2)}else r++;for(r=0,n=null;r<e.length;)if((n=e[r])instanceof k){if(0===r||r===e.length-1)throw new Error("Wrong operator position!");n.left=e[r-1],n.right=e[r+1],e[r-1]=n,e.splice(r,2)}else r++;for(r=0,n=null;r<e.length;)if((n=e[r])instanceof x){if(0===r||r===e.length-1)throw new Error("Wrong operator position!");n.left=e[r-1],n.right=e[r+1],e[r-1]=n,e.splice(r,2)}else r++;if(1!==e.length)throw new Error("Could not parse formula: incorrect syntax?");return e[0]}},{key:"isOperator",value:function(t){return"string"==typeof t&&t.match(/[\+\-\*\/\^]/)}},{key:"isOperatorExpr",value:function(t){return t instanceof x||t instanceof k||t instanceof S}},{key:"registerVariable",value:function(t){this._variables.indexOf(t)<0&&this._variables.push(t)}},{key:"getVariables",value:function(){return this._variables}},{key:"evaluate",value:function(t){var e=this;if(t instanceof Array)return t.map((function(t){return e.evaluate(t)}));var r=this.getExpression();if(!(r instanceof w))throw new Error("No expression set: Did you init the object with a Formula?");if(this.options.memoization){var n=this.resultFromMemory(t);return null!==n||(n=r.evaluate(l(l({},g),t)),this.storeInMemory(t,n)),n}return r.evaluate(l(l({},g),t))}},{key:"hashValues",value:function(t){return JSON.stringify(t)}},{key:"resultFromMemory",value:function(t){var e=this.hashValues(t),r=this._memory[e];return void 0!==r?r:null}},{key:"storeInMemory",value:function(t,e){this._memory[this.hashValues(t)]=e}},{key:"getExpression",value:function(){return this.formulaExpression}},{key:"getExpressionString",value:function(){return this.formulaExpression?this.formulaExpression.toString():""}}],[{key:"calc",value:function(e,r){return r=r||{},new t(e,arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}).evaluate(r)}}]),t}();r.default=d;var w=function(){function t(){v(this,t)}return b(t,[{key:"evaluate",value:function(){throw new Error("Must be defined in child classes")}},{key:"toString",value:function(){return""}}],[{key:"createOperatorExpression",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;if("^"===t)return new S(t,e,r);if("*"===t||"/"===t)return new k(t,e,r);if("+"===t||"-"===t)return new x(t,e,r);throw new Error("Unknown operator: ".concat(t))}}]),t}(),E=function(t){n(r,t);var e=o(r);function r(t){var n;if(v(this,r),(n=e.call(this)).innerExpression=t,!(n.innerExpression instanceof w))throw new Error("No inner expression given for bracket expression");return n}return b(r,[{key:"evaluate",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this.innerExpression.evaluate(t)}},{key:"toString",value:function(){return"(".concat(this.innerExpression.toString(),")")}}]),r}(w),O=function(t){n(r,t);var e=o(r);function r(t){var n;if(v(this,r),(n=e.call(this)).value=Number(t),isNaN(n.value))throw new Error("Cannot parse number: "+t);return n}return b(r,[{key:"evaluate",value:function(){return this.value}},{key:"toString",value:function(){return String(this.value)}}]),r}(w),x=function(t){n(r,t);var e=o(r);function r(t){var n,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;if(v(this,r),n=e.call(this),!["+","-"].includes(t))throw new Error("Operator not allowed in Plus/Minus expression: ".concat(t));return n.operator=t,n.left=i,n.right=o,n}return b(r,[{key:"evaluate",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if("+"===this.operator)return this.left.evaluate(t)+this.right.evaluate(t);if("-"===this.operator)return this.left.evaluate(t)-this.right.evaluate(t);throw new Error("Unknown operator for PlusMinus expression")}},{key:"toString",value:function(){return"".concat(this.left.toString()," ").concat(this.operator," ").concat(this.right.toString())}}]),r}(w),k=function(t){n(r,t);var e=o(r);function r(t){var n,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;if(v(this,r),n=e.call(this),!["*","/"].includes(t))throw new Error("Operator not allowed in Multiply/Division expression: ".concat(t));return n.operator=t,n.left=i,n.right=o,n}return b(r,[{key:"evaluate",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if("*"===this.operator)return this.left.evaluate(t)*this.right.evaluate(t);if("/"===this.operator)return this.left.evaluate(t)/this.right.evaluate(t);throw new Error("Unknown operator for MultDiv expression")}},{key:"toString",value:function(){return"".concat(this.left.toString()," ").concat(this.operator," ").concat(this.right.toString())}}]),r}(w),S=function(t){n(r,t);var e=o(r);function r(){var t,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return v(this,r),(t=e.call(this)).base=n,t.exponent=i,t}return b(r,[{key:"evaluate",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Math.pow(this.base.evaluate(t),this.exponent.evaluate(t))}},{key:"toString",value:function(){return"".concat(this.base.toString(),"^").concat(this.exponent.toString())}}]),r}(w),j=function(t){n(r,t);var e=o(r);function r(t,n){var i,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return v(this,r),(i=e.call(this)).fn=t,i.argumentExpressions=n||[],i.formulaObject=o,i.blacklisted=void 0,i}return b(r,[{key:"evaluate",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};t=t||{};var e=this.argumentExpressions.map((function(e){return e.evaluate(t)}));if(t[this.fn]instanceof Function)return t[this.fn].apply(this,e);if(this.formulaObject&&this.formulaObject[this.fn]instanceof Function){if(this.isBlacklisted())throw new Error("Blacklisted function called: "+this.fn);return this.formulaObject[this.fn].apply(this.formulaObject,e)}if(Math[this.fn]instanceof Function)return Math[this.fn].apply(this,e);throw new Error("Function not found: "+this.fn)}},{key:"toString",value:function(){return"".concat(this.fn,"(").concat(this.argumentExpressions.map((function(t){return t.toString()})).join(", "),")")}},{key:"isBlacklisted",value:function(){return void 0===this.blacklisted&&(this.blacklisted=d.functionBlacklist.includes(this.formulaObject?this.formulaObject[this.fn]:null)),this.blacklisted}}]),r}(w),_=function(t){n(r,t);var e=o(r);function r(t){var n;return v(this,r),(n=e.call(this)).varName=t||"",n}return b(r,[{key:"evaluate",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(void 0!==t[this.varName])return Number(t[this.varName]);throw new Error("Cannot evaluate "+this.varName+": No value given")}},{key:"toString",value:function(){return"".concat(this.varName)}}]),r}(w);d.Expression=w,d.BracketExpression=E,d.PowerExpression=S,d.MultDivExpression=k,d.PlusMinusExpression=x,d.ValueExpression=O,d.VariableExpression=_,d.FunctionExpression=j,d.MATH_CONSTANTS=g,d.functionBlacklist=Object.getOwnPropertyNames(d.prototype).filter((function(t){return d.prototype[t]instanceof Function})).map((function(t){return d.prototype[t]})),t.exports=e.default},void 0===(n=r.apply(e,[e]))||(t.exports=n)}},e={},function r(n){var i=e[n];if(void 0!==i)return i.exports;var o=e[n]={exports:{}};return t[n].call(o.exports,o,o.exports,r),o.exports}(91);var t,e}));
//# sourceMappingURL=fparser.js.map