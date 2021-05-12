parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"NVij":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.LEVEL=exports.CLASS_LIST=exports.OBJECT_TYPE=exports.DIRECTIONS=exports.CELL_SIZE=exports.GRID_SIZE=void 0;var o=20;exports.GRID_SIZE=o;var e=20;exports.CELL_SIZE=e;var r={ArrowLeft:{code:37,movement:-1,rotation:180},ArrowUp:{code:38,movement:-o,rotation:270},ArrowRight:{code:39,movement:1,rotation:0},ArrowDown:{code:40,movement:o,rotation:90}};exports.DIRECTIONS=r;var t={BLANK:"blank",WALL:"wall",DOT:"dot",BLINKY:"blinky",PINKY:"pinky",INKY:"inky",CLYDE:"clyde",PILL:"pill",PACMAN:"pacman",GHOST:"ghost",SCARED:"scared",GHOSTLAIR:"lair"};exports.OBJECT_TYPE=t;var L=[t.BLANK,t.WALL,t.DOT,t.BLINKY,t.PINKY,t.INKY,t.CLYDE,t.PILL,t.PACMAN,t.GHOSTLAIR];exports.CLASS_LIST=L;var I=[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,1,1,2,2,2,2,2,2,2,2,1,1,2,1,1,2,1,1,1,2,1,1,2,1,1,1,2,1,1,2,1,1,7,1,1,2,1,1,1,2,1,1,2,1,1,1,2,1,1,7,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,1,2,1,1,2,1,2,1,1,1,1,1,1,2,1,2,1,1,2,1,1,2,2,2,2,1,2,2,2,1,1,2,2,2,1,2,2,2,2,1,1,1,1,1,2,1,1,1,2,1,1,2,1,1,1,2,1,1,1,1,0,0,0,1,2,1,2,2,2,2,2,2,2,2,1,2,1,0,0,0,0,0,0,1,2,1,2,1,9,9,9,9,1,2,1,2,1,0,0,0,1,1,1,1,2,1,2,1,9,9,9,9,1,2,1,2,1,1,1,1,1,0,0,0,2,2,2,1,9,9,9,9,1,2,2,2,0,0,0,1,1,1,1,1,2,1,2,1,9,9,9,9,1,2,1,2,1,1,1,1,0,0,0,1,2,1,2,1,1,1,1,1,1,2,1,2,1,0,0,0,0,0,0,1,2,1,2,0,0,0,0,0,0,2,1,2,1,0,0,0,1,1,1,1,2,1,1,1,2,1,1,2,1,1,1,2,1,1,1,1,1,2,2,2,2,1,2,2,2,1,1,2,2,2,1,2,2,2,2,1,1,2,1,1,2,1,2,1,1,1,1,1,1,2,1,2,1,1,2,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,1,7,1,1,2,1,1,1,2,1,1,2,1,1,1,2,1,1,7,1,1,2,1,1,2,1,1,1,2,1,1,2,1,1,1,2,1,1,2,1,1,2,2,2,2,2,2,2,2,1,1,2,2,2,2,2,2,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];exports.LEVEL=I;
},{}],"BD91":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.randomMovement=t;var e=require("./setup");function t(t,r,o){for(var n=r,a=t+n.movement,s=Object.keys(e.DIRECTIONS);o(a,e.OBJECT_TYPE.WALL)||o(a,e.OBJECT_TYPE.GHOST);){var v=s[Math.floor(Math.random()*s.length)];a=t+(n=e.DIRECTIONS[v]).movement}return{nextMovePos:a,direction:n}}
},{"./setup":"NVij"}],"ixeg":[function(require,module,exports) {
function e(e,o){(null==o||o>e.length)&&(o=e.length);for(var l=0,r=new Array(o);l<o;l++)r[l]=e[l];return r}module.exports=e,module.exports.default=module.exports,module.exports.__esModule=!0;
},{}],"fk2o":[function(require,module,exports) {
var r=require("./arrayLikeToArray.js");function e(e){if(Array.isArray(e))return r(e)}module.exports=e,module.exports.default=module.exports,module.exports.__esModule=!0;
},{"./arrayLikeToArray.js":"ixeg"}],"rp83":[function(require,module,exports) {
function e(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}module.exports=e,module.exports.default=module.exports,module.exports.__esModule=!0;
},{}],"IOZJ":[function(require,module,exports) {
var r=require("./arrayLikeToArray.js");function e(e,t){if(e){if("string"==typeof e)return r(e,t);var o=Object.prototype.toString.call(e).slice(8,-1);return"Object"===o&&e.constructor&&(o=e.constructor.name),"Map"===o||"Set"===o?Array.from(e):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?r(e,t):void 0}}module.exports=e,module.exports.default=module.exports,module.exports.__esModule=!0;
},{"./arrayLikeToArray.js":"ixeg"}],"v5FO":[function(require,module,exports) {
function e(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}module.exports=e,module.exports.default=module.exports,module.exports.__esModule=!0;
},{}],"YtCi":[function(require,module,exports) {
var e=require("./arrayWithoutHoles.js"),r=require("./iterableToArray.js"),o=require("./unsupportedIterableToArray.js"),u=require("./nonIterableSpread.js");function t(t){return e(t)||r(t)||o(t)||u()}module.exports=t,module.exports.default=module.exports,module.exports.__esModule=!0;
},{"./arrayWithoutHoles.js":"fk2o","./iterableToArray.js":"rp83","./unsupportedIterableToArray.js":"IOZJ","./nonIterableSpread.js":"v5FO"}],"ZBnv":[function(require,module,exports) {
function o(o,e){if(!(o instanceof e))throw new TypeError("Cannot call a class as a function")}module.exports=o,module.exports.default=module.exports,module.exports.__esModule=!0;
},{}],"NoOd":[function(require,module,exports) {
function e(e,o){for(var r=0;r<o.length;r++){var t=o[r];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}function o(o,r,t){return r&&e(o.prototype,r),t&&e(o,t),o}module.exports=o,module.exports.default=module.exports,module.exports.__esModule=!0;
},{}],"p2kp":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=a(require("@babel/runtime/helpers/toConsumableArray")),t=a(require("@babel/runtime/helpers/classCallCheck")),i=a(require("@babel/runtime/helpers/createClass")),s=require("./setup");function a(e){return e&&e.__esModule?e:{default:e}}var r=function(){function a(e){(0,t.default)(this,a),this.dotCount=0,this.grid=[],this.DOMGrid=e}return(0,i.default)(a,[{key:"showGameStatus",value:function(e){var t=document.createElement("div");t.classList.add("game-status"),t.innerHTML="".concat(e?"WIN!":"GAME OVER!"),this.DOMGrid.appendChild(t)}},{key:"createGrid",value:function(e){var t=this;this.dotCount=0,this.grid=[],this.DOMGrid.innerHTML="",this.DOMGrid.style.cssText="grid-template-columns: repeat(".concat(s.GRID_SIZE,", ").concat(s.CELL_SIZE,"px);"),e.forEach(function(e){var i=document.createElement("div");i.classList.add("square",s.CLASS_LIST[e]),i.style.cssText="width: ".concat(s.CELL_SIZE,"px; height: ").concat(s.CELL_SIZE,"px;"),t.DOMGrid.appendChild(i),t.grid.push(i),s.CLASS_LIST[e]===s.OBJECT_TYPE.DOT&&t.dotCount++})}},{key:"addObject",value:function(t,i){var s;(s=this.grid[t].classList).add.apply(s,(0,e.default)(i))}},{key:"removeObject",value:function(t,i){var s;(s=this.grid[t].classList).remove.apply(s,(0,e.default)(i))}},{key:"objectExist",value:function(e,t){return this.grid[e].classList.contains(t)}},{key:"rotateDiv",value:function(e,t){this.grid[e].style.transform="rotate(".concat(t,"deg)")}},{key:"moveCharacter",value:function(e){if(e.shouldMove()){var t=e.getNextMove(this.objectExist.bind(this)),i=t.nextMovePos,s=t.direction,a=e.makeMove(),r=a.classesToRemove,o=a.classesToAdd;e.rotation&&i!==e.pos&&(this.rotateDiv(i,e.dir.rotation),this.rotateDiv(e.pos,0)),this.removeObject(e.pos,r),this.addObject(i,o),e.setNewPos(i,s)}}}],[{key:"createGameBoard",value:function(e,t){var i=new this(e);return i.createGrid(t),i}}]),a}(),o=r;exports.default=o;
},{"@babel/runtime/helpers/toConsumableArray":"YtCi","@babel/runtime/helpers/classCallCheck":"ZBnv","@babel/runtime/helpers/createClass":"NoOd","./setup":"NVij"}],"xwXl":[function(require,module,exports) {
function e(e,o,r){return o in e?Object.defineProperty(e,o,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[o]=r,e}module.exports=e,module.exports.default=module.exports,module.exports.__esModule=!0;
},{}],"naqe":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=r(require("@babel/runtime/helpers/classCallCheck")),t=r(require("@babel/runtime/helpers/createClass")),i=r(require("@babel/runtime/helpers/defineProperty")),s=require("./setup");function r(e){return e&&e.__esModule?e:{default:e}}var o=function(){function r(t,o){var u=this;(0,e.default)(this,r),(0,i.default)(this,"handleKeyInput",function(e,t){var i;e.keyCode>=37&&e.keyCode<=40&&(i=s.DIRECTIONS[e.key],t(u.pos+i.movement,s.OBJECT_TYPE.WALL)||(u.dir=i))}),this.pos=o,this.speed=t,this.dir=null,this.timer=0,this.powerPill=!1,this.rotation=!0}return(0,t.default)(r,[{key:"shouldMove",value:function(){if(this.dir)return this.timer===this.speed?(this.timer=0,!0):void this.timer++}},{key:"getNextMove",value:function(e){var t=this.pos+this.dir.movement;return(e(t,s.OBJECT_TYPE.WALL)||e(t,s.OBJECT_TYPE.GHOSTLAIR))&&(t=this.pos),{nextMovePos:t,direction:this.dir}}},{key:"makeMove",value:function(){return{classesToRemove:[s.OBJECT_TYPE.PACMAN],classesToAdd:[s.OBJECT_TYPE.PACMAN]}}},{key:"setNewPos",value:function(e){this.pos=e}}]),r}(),u=o;exports.default=u;
},{"@babel/runtime/helpers/classCallCheck":"ZBnv","@babel/runtime/helpers/createClass":"NoOd","@babel/runtime/helpers/defineProperty":"xwXl","./setup":"NVij"}],"BSCL":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=o(require("@babel/runtime/helpers/toConsumableArray")),t=o(require("@babel/runtime/helpers/classCallCheck")),i=o(require("@babel/runtime/helpers/createClass")),s=require("./setup"),r=require("./ghostmoves");function o(e){return e&&e.__esModule?e:{default:e}}var n=function(){function r(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:5,i=arguments.length>1?arguments[1]:void 0,o=arguments.length>2?arguments[2]:void 0,n=arguments.length>3?arguments[3]:void 0;(0,t.default)(this,r),this.name=n,this.movement=o,this.startPos=i,this.pos=i,this.dir=s.DIRECTIONS.ArrowRight,this.speed=e,this.timer=0,this.isScared=!1,this.rotation=!1}return(0,i.default)(r,[{key:"shouldMove",value:function(){if(this.timer===this.speed)return this.timer=0,!0;this.timer++}},{key:"getNextMove",value:function(e){var t=this.movement(this.pos,this.dir,e);return{nextMovePos:t.nextMovePos,direction:t.direction}}},{key:"makeMove",value:function(){var t=[s.OBJECT_TYPE.GHOST,s.OBJECT_TYPE.SCARED,this.name],i=[s.OBJECT_TYPE.GHOST,this.name];return this.isScared&&(i=[].concat((0,e.default)(i),[s.OBJECT_TYPE.SCARED])),{classesToRemove:t,classesToAdd:i}}},{key:"setNewPos",value:function(e,t){this.pos=e,this.dir=t}}]),r}(),u=n;exports.default=u;
},{"@babel/runtime/helpers/toConsumableArray":"YtCi","@babel/runtime/helpers/classCallCheck":"ZBnv","@babel/runtime/helpers/createClass":"NoOd","./setup":"NVij","./ghostmoves":"BD91"}],"LAbX":[function(require,module,exports) {
module.exports="munch.7fbea03a.wav";
},{}],"mqJk":[function(require,module,exports) {
module.exports="pill.d14505de.wav";
},{}],"Zfvf":[function(require,module,exports) {
module.exports="game_start.9b237711.wav";
},{}],"zCmu":[function(require,module,exports) {
module.exports="death.b90f13bb.wav";
},{}],"PIU3":[function(require,module,exports) {
module.exports="eat_ghost.1334dcca.wav";
},{}],"Focm":[function(require,module,exports) {
"use strict";var e=require("./setup"),t=require("./ghostmoves"),r=c(require("./GameBoard")),n=c(require("./Pacman")),o=c(require("./Ghost")),u=c(require("./sounds/munch.wav")),a=c(require("./sounds/pill.wav")),i=c(require("./sounds/game_start.wav")),d=c(require("./sounds/death.wav")),s=c(require("./sounds/eat_ghost.wav"));function c(e){return e&&e.__esModule?e:{default:e}}var l=document.querySelector("#game"),E=document.querySelector("#score"),m=document.querySelector("#start-button"),T=1e4,v=80,f=r.default.createGameBoard(l,e.LEVEL),P=0,p=null,w=!1,C=!1,O=null;function L(e){new Audio(e).play()}function Y(e,t){L(d.default),document.removeEventListener("keydown",function(t){return e.handleKeyInput(t,f.objectExist.bind(f))}),f.showGameStatus(w),clearInterval(p),m.classList.remove("hide")}function _(t,r){var n=r.find(function(e){return t.pos===e.pos});n&&(t.powerPill?(L(s.default),f.removeObject(n.pos,[e.OBJECT_TYPE.GHOST,e.OBJECT_TYPE.SCARED,n.name]),n.pos=n.startPos,P+=100):(f.removeObject(t.pos,[e.OBJECT_TYPE.PACMAN]),f.rotateDiv(t.pos,0),Y(t,l)))}function B(t,r){f.moveCharacter(t),_(t,r),r.forEach(function(e){return f.moveCharacter(e)}),_(t,r),f.objectExist(t.pos,e.OBJECT_TYPE.DOT)&&(L(u.default),f.removeObject(t.pos,[e.OBJECT_TYPE.DOT]),f.dotCount--,P+=10),f.objectExist(t.pos,e.OBJECT_TYPE.PILL)&&(L(a.default),f.removeObject(t.pos,[e.OBJECT_TYPE.PILL]),t.powerPill=!0,P+=50,clearTimeout(O),O=setTimeout(function(){return t.powerPill=!1},T)),t.powerPill!==C&&(C=t.powerPill,r.forEach(function(e){return e.isScared=t.powerPill})),0===f.dotCount&&(w=!0,Y(t,l)),E.innerHTML=P}function h(){L(i.default),w=!1,C=!1,P=0,m.classList.add("hide"),f.createGrid(e.LEVEL);var r=new n.default(2,287);f.addObject(287,[e.OBJECT_TYPE.PACMAN]),document.addEventListener("keydown",function(e){return r.handleKeyInput(e,f.objectExist.bind(f))});var u=[new o.default(5,188,t.randomMovement,e.OBJECT_TYPE.BLINKY),new o.default(4,209,t.randomMovement,e.OBJECT_TYPE.PINKY),new o.default(3,230,t.randomMovement,e.OBJECT_TYPE.INKY),new o.default(2,251,t.randomMovement,e.OBJECT_TYPE.CLYDE)];p=setInterval(function(){return B(r,u)},v)}m.addEventListener("click",h);
},{"./setup":"NVij","./ghostmoves":"BD91","./GameBoard":"p2kp","./Pacman":"naqe","./Ghost":"BSCL","./sounds/munch.wav":"LAbX","./sounds/pill.wav":"mqJk","./sounds/game_start.wav":"Zfvf","./sounds/death.wav":"zCmu","./sounds/eat_ghost.wav":"PIU3"}]},{},["Focm"], null)
//# sourceMappingURL=js-pacman-FINISHED.321eaea2.js.map