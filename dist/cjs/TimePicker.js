"use strict";
'use client';
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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
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
var react_1 = __importStar(require("react"));
var react_dom_1 = require("react-dom");
var prop_types_1 = __importDefault(require("prop-types"));
var make_event_props_1 = __importDefault(require("make-event-props"));
var clsx_1 = __importDefault(require("clsx"));
var react_clock_1 = __importDefault(require("react-clock"));
var react_fit_1 = __importDefault(require("react-fit"));
var TimeInput_js_1 = __importDefault(require("./TimeInput.js"));
var propTypes_js_1 = require("./shared/propTypes.js");
var isBrowser = typeof document !== 'undefined';
var baseClassName = 'react-time-picker';
var outsideActionEvents = ['mousedown', 'focusin', 'touchstart'];
var allViews = ['hour', 'minute', 'second'];
var iconProps = {
    xmlns: 'http://www.w3.org/2000/svg',
    width: 19,
    height: 19,
    viewBox: '0 0 19 19',
    stroke: 'black',
    strokeWidth: 2,
};
var ClockIcon = (react_1.default.createElement("svg", __assign({}, iconProps, { className: "".concat(baseClassName, "__clock-button__icon ").concat(baseClassName, "__button__icon"), fill: "none" }),
    react_1.default.createElement("circle", { cx: "9.5", cy: "9.5", r: "7.5" }),
    react_1.default.createElement("path", { d: "M9.5 4.5 v5 h4" })));
var ClearIcon = (react_1.default.createElement("svg", __assign({}, iconProps, { className: "".concat(baseClassName, "__clear-button__icon ").concat(baseClassName, "__button__icon") }),
    react_1.default.createElement("line", { x1: "4", x2: "15", y1: "4", y2: "15" }),
    react_1.default.createElement("line", { x1: "15", x2: "4", y1: "4", y2: "15" })));
var TimePicker = function TimePicker(props) {
    var _a;
    var amPmAriaLabel = props.amPmAriaLabel, autoFocus = props.autoFocus, className = props.className, clearAriaLabel = props.clearAriaLabel, _b = props.clearIcon, clearIcon = _b === void 0 ? ClearIcon : _b, clockAriaLabel = props.clockAriaLabel, _c = props.clockIcon, clockIcon = _c === void 0 ? ClockIcon : _c, _d = props.closeClock, shouldCloseClockOnSelect = _d === void 0 ? true : _d, dataTestid = props["data-testid"], hourAriaLabel = props.hourAriaLabel, hourPlaceholder = props.hourPlaceholder, disableClock = props.disableClock, disabled = props.disabled, format = props.format, id = props.id, _e = props.isOpen, isOpenProps = _e === void 0 ? null : _e, locale = props.locale, maxTime = props.maxTime, _f = props.maxDetail, maxDetail = _f === void 0 ? 'minute' : _f, minTime = props.minTime, minuteAriaLabel = props.minuteAriaLabel, minutePlaceholder = props.minutePlaceholder, _g = props.name, name = _g === void 0 ? 'time' : _g, nativeInputAriaLabel = props.nativeInputAriaLabel, onClockClose = props.onClockClose, onClockOpen = props.onClockOpen, onChangeProps = props.onChange, onFocusProps = props.onFocus, onInvalidChange = props.onInvalidChange, _h = props.openClockOnFocus, openClockOnFocus = _h === void 0 ? true : _h, required = props.required, value = props.value, secondAriaLabel = props.secondAriaLabel, secondPlaceholder = props.secondPlaceholder, shouldCloseClock = props.shouldCloseClock, shouldOpenClock = props.shouldOpenClock, otherProps = __rest(props, ["amPmAriaLabel", "autoFocus", "className", "clearAriaLabel", "clearIcon", "clockAriaLabel", "clockIcon", "closeClock", 'data-testid', "hourAriaLabel", "hourPlaceholder", "disableClock", "disabled", "format", "id", "isOpen", "locale", "maxTime", "maxDetail", "minTime", "minuteAriaLabel", "minutePlaceholder", "name", "nativeInputAriaLabel", "onClockClose", "onClockOpen", "onChange", "onFocus", "onInvalidChange", "openClockOnFocus", "required", "value", "secondAriaLabel", "secondPlaceholder", "shouldCloseClock", "shouldOpenClock"]);
    var _j = (0, react_1.useState)((_a = isOpenProps !== null && isOpenProps !== void 0 ? isOpenProps : autoFocus) !== null && _a !== void 0 ? _a : null), isOpen = _j[0], setIsOpen = _j[1];
    var wrapper = (0, react_1.useRef)(null);
    var clockWrapper = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(function () {
        var _a;
        setIsOpen((_a = isOpenProps !== null && isOpenProps !== void 0 ? isOpenProps : autoFocus) !== null && _a !== void 0 ? _a : null);
    }, [isOpenProps]);
    function openClock(_a) {
        var reason = _a.reason;
        if (shouldOpenClock) {
            if (!shouldOpenClock({ reason: reason })) {
                return;
            }
        }
        setIsOpen(true);
        if (onClockOpen) {
            onClockOpen();
        }
    }
    var closeClock = (0, react_1.useCallback)(function (_a) {
        var reason = _a.reason;
        if (shouldCloseClock) {
            if (!shouldCloseClock({ reason: reason })) {
                return;
            }
        }
        setIsOpen(false);
        if (onClockClose) {
            onClockClose();
        }
    }, [onClockClose, shouldCloseClock]);
    function toggleClock() {
        if (isOpen) {
            closeClock({ reason: 'buttonClick' });
        }
        else {
            openClock({ reason: 'buttonClick' });
        }
    }
    function onChange(value, shouldCloseClock) {
        if (shouldCloseClock === void 0) { shouldCloseClock = shouldCloseClockOnSelect; }
        if (shouldCloseClock) {
            closeClock({ reason: 'select' });
        }
        if (onChangeProps) {
            onChangeProps(value);
        }
    }
    function onFocus(event) {
        if (onFocusProps) {
            onFocusProps(event);
        }
        if (
        // Internet Explorer still fires onFocus on disabled elements
        disabled ||
            isOpen ||
            !openClockOnFocus ||
            event.target.dataset.select === 'true') {
            return;
        }
        openClock({ reason: 'focus' });
    }
    var onKeyDown = (0, react_1.useCallback)(function (event) {
        if (event.key === 'Escape') {
            closeClock({ reason: 'escape' });
        }
    }, [closeClock]);
    function clear() {
        onChange(null);
    }
    function stopPropagation(event) {
        event.stopPropagation();
    }
    var onOutsideAction = (0, react_1.useCallback)(function (event) {
        var wrapperEl = wrapper.current;
        var clockWrapperEl = clockWrapper.current;
        // Try event.composedPath first to handle clicks inside a Shadow DOM.
        var target = ('composedPath' in event ? event.composedPath()[0] : event.target);
        if (target &&
            wrapperEl &&
            !wrapperEl.contains(target) &&
            (!clockWrapperEl || !clockWrapperEl.contains(target))) {
            closeClock({ reason: 'outsideAction' });
        }
    }, [clockWrapper, closeClock, wrapper]);
    var handleOutsideActionListeners = (0, react_1.useCallback)(function (shouldListen) {
        if (shouldListen === void 0) { shouldListen = isOpen; }
        outsideActionEvents.forEach(function (event) {
            if (shouldListen) {
                document.addEventListener(event, onOutsideAction);
            }
            else {
                document.removeEventListener(event, onOutsideAction);
            }
        });
        if (shouldListen) {
            document.addEventListener('keydown', onKeyDown);
        }
        else {
            document.removeEventListener('keydown', onKeyDown);
        }
    }, [isOpen, onOutsideAction, onKeyDown]);
    (0, react_1.useEffect)(function () {
        handleOutsideActionListeners();
        return function () {
            handleOutsideActionListeners(false);
        };
    }, [handleOutsideActionListeners]);
    function renderInputs() {
        var valueFrom = (Array.isArray(value) ? value : [value])[0];
        var ariaLabelProps = {
            amPmAriaLabel: amPmAriaLabel,
            hourAriaLabel: hourAriaLabel,
            minuteAriaLabel: minuteAriaLabel,
            nativeInputAriaLabel: nativeInputAriaLabel,
            secondAriaLabel: secondAriaLabel,
        };
        var placeholderProps = {
            hourPlaceholder: hourPlaceholder,
            minutePlaceholder: minutePlaceholder,
            secondPlaceholder: secondPlaceholder,
        };
        return (react_1.default.createElement("div", { className: "".concat(baseClassName, "__wrapper") },
            react_1.default.createElement(TimeInput_js_1.default, __assign({}, ariaLabelProps, placeholderProps, { 
                // eslint-disable-next-line jsx-a11y/no-autofocus
                autoFocus: autoFocus, className: "".concat(baseClassName, "__inputGroup"), disabled: disabled, format: format, isClockOpen: isOpen, locale: locale, maxDetail: maxDetail, maxTime: maxTime, minTime: minTime, name: name, onChange: onChange, onInvalidChange: onInvalidChange, required: required, value: valueFrom })),
            clearIcon !== null && (react_1.default.createElement("button", { "aria-label": clearAriaLabel, className: "".concat(baseClassName, "__clear-button ").concat(baseClassName, "__button"), disabled: disabled, onClick: clear, onFocus: stopPropagation, type: "button" }, typeof clearIcon === 'function' ? react_1.default.createElement(clearIcon) : clearIcon)),
            clockIcon !== null && !disableClock && (react_1.default.createElement("button", { "aria-expanded": isOpen || false, "aria-label": clockAriaLabel, className: "".concat(baseClassName, "__clock-button ").concat(baseClassName, "__button"), disabled: disabled, onClick: toggleClock, onFocus: stopPropagation, type: "button" }, typeof clockIcon === 'function' ? react_1.default.createElement(clockIcon) : clockIcon))));
    }
    function renderClock() {
        if (isOpen === null || disableClock) {
            return null;
        }
        var clockClassName = props.clockClassName, timePickerClassName = props.className, // Unused, here to exclude it from clockProps
        onChangeProps = props.onChange, // Unused, here to exclude it from clockProps
        portalContainer = props.portalContainer, value = props.value, clockProps = __rest(props, ["clockClassName", "className", "onChange", "portalContainer", "value"]);
        var className = "".concat(baseClassName, "__clock");
        var classNames = (0, clsx_1.default)(className, "".concat(className, "--").concat(isOpen ? 'open' : 'closed'));
        var valueFrom = (Array.isArray(value) ? value : [value])[0];
        var clock = react_1.default.createElement(react_clock_1.default, __assign({ className: clockClassName, value: valueFrom }, clockProps));
        return portalContainer ? ((0, react_dom_1.createPortal)(react_1.default.createElement("div", { ref: clockWrapper, className: classNames }, clock), portalContainer)) : (react_1.default.createElement(react_fit_1.default, null,
            react_1.default.createElement("div", { ref: function (ref) {
                    if (ref && !isOpen) {
                        ref.removeAttribute('style');
                    }
                }, className: classNames }, clock)));
    }
    var eventProps = (0, react_1.useMemo)(function () { return (0, make_event_props_1.default)(otherProps); }, [otherProps]);
    return (react_1.default.createElement("div", __assign({ className: (0, clsx_1.default)(baseClassName, "".concat(baseClassName, "--").concat(isOpen ? 'open' : 'closed'), "".concat(baseClassName, "--").concat(disabled ? 'disabled' : 'enabled'), className), "data-testid": dataTestid, id: id }, eventProps, { onFocus: onFocus, ref: wrapper }),
        renderInputs(),
        renderClock()));
};
var isValue = prop_types_1.default.oneOfType([propTypes_js_1.isTime, prop_types_1.default.instanceOf(Date)]);
var isValueOrValueArray = prop_types_1.default.oneOfType([isValue, (0, propTypes_js_1.rangeOf)(isValue)]);
TimePicker.propTypes = {
    amPmAriaLabel: prop_types_1.default.string,
    autoFocus: prop_types_1.default.bool,
    className: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.arrayOf(prop_types_1.default.string)]),
    clearAriaLabel: prop_types_1.default.string,
    clearIcon: prop_types_1.default.oneOfType([prop_types_1.default.node, prop_types_1.default.func]),
    clockAriaLabel: prop_types_1.default.string,
    clockClassName: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.arrayOf(prop_types_1.default.string)]),
    clockIcon: prop_types_1.default.oneOfType([prop_types_1.default.node, prop_types_1.default.func]),
    closeClock: prop_types_1.default.bool,
    'data-testid': prop_types_1.default.string,
    disableClock: prop_types_1.default.bool,
    disabled: prop_types_1.default.bool,
    format: prop_types_1.default.string,
    hourAriaLabel: prop_types_1.default.string,
    hourPlaceholder: prop_types_1.default.string,
    id: prop_types_1.default.string,
    isOpen: prop_types_1.default.bool,
    locale: prop_types_1.default.string,
    maxDetail: prop_types_1.default.oneOf(allViews),
    maxTime: propTypes_js_1.isTime,
    minTime: propTypes_js_1.isTime,
    minuteAriaLabel: prop_types_1.default.string,
    minutePlaceholder: prop_types_1.default.string,
    name: prop_types_1.default.string,
    nativeInputAriaLabel: prop_types_1.default.string,
    onChange: prop_types_1.default.func,
    onClockClose: prop_types_1.default.func,
    onClockOpen: prop_types_1.default.func,
    onFocus: prop_types_1.default.func,
    openClockOnFocus: prop_types_1.default.bool,
    required: prop_types_1.default.bool,
    secondAriaLabel: prop_types_1.default.string,
    secondPlaceholder: prop_types_1.default.string,
    value: isValueOrValueArray,
};
if (isBrowser) {
    TimePicker.propTypes.portalContainer = prop_types_1.default.instanceOf(HTMLElement);
}
exports.default = TimePicker;
