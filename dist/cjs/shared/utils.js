"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.safeMax = exports.safeMin = exports.getAmPmLabels = void 0;
var dateFormatter_js_1 = require("./dateFormatter.js");
var nines = ['9', '٩'];
var ninesRegExp = new RegExp("[".concat(nines.join(''), "]"));
var amPmFormatter = (0, dateFormatter_js_1.getFormatter)({ hour: 'numeric' });
function getAmPmLabels(locale) {
    var amString = amPmFormatter(locale, new Date(2017, 0, 1, 9));
    var pmString = amPmFormatter(locale, new Date(2017, 0, 1, 21));
    var _a = amString.split(ninesRegExp), am1 = _a[0], am2 = _a[1];
    var _b = pmString.split(ninesRegExp), pm1 = _b[0], pm2 = _b[1];
    if (pm2 !== undefined) {
        // If pm2 is undefined, nine was not found in pmString - this locale is not using 12-hour time
        if (am1 !== pm1) {
            return [am1, pm1].map(function (el) { return el.trim(); });
        }
        if (am2 !== pm2) {
            return [am2, pm2].map(function (el) { return el.trim(); });
        }
    }
    // Fallback
    return ['AM', 'PM'];
}
exports.getAmPmLabels = getAmPmLabels;
function isValidNumber(num) {
    return num !== null && num !== false && !Number.isNaN(Number(num));
}
function safeMin() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return Math.min.apply(Math, args.filter(isValidNumber));
}
exports.safeMin = safeMin;
function safeMax() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return Math.max.apply(Math, args.filter(isValidNumber));
}
exports.safeMax = safeMax;
