"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var date_utils_1 = require("@wojtekmaj/date-utils");
var Input_js_1 = __importDefault(require("./Input.js"));
var utils_js_1 = require("../shared/utils.js");
function MinuteInput(_a) {
    var hour = _a.hour, maxTime = _a.maxTime, minTime = _a.minTime, _b = _a.showLeadingZeros, showLeadingZeros = _b === void 0 ? true : _b, otherProps = __rest(_a, ["hour", "maxTime", "minTime", "showLeadingZeros"]);
    function isSameHour(date) {
        return hour === (0, date_utils_1.getHours)(date).toString();
    }
    var maxMinute = (0, utils_js_1.safeMin)(59, maxTime && isSameHour(maxTime) && (0, date_utils_1.getMinutes)(maxTime));
    var minMinute = (0, utils_js_1.safeMax)(0, minTime && isSameHour(minTime) && (0, date_utils_1.getMinutes)(minTime));
    return (react_1.default.createElement(Input_js_1.default, __assign({ max: maxMinute, min: minMinute, name: "minute", showLeadingZeros: showLeadingZeros }, otherProps)));
}
exports.default = MinuteInput;
