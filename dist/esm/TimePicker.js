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
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import makeEventProps from 'make-event-props';
import clsx from 'clsx';
import Clock from 'react-clock';
import Fit from 'react-fit';
import TimeInput from './TimeInput.js';
import { isTime, rangeOf } from './shared/propTypes.js';
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
var ClockIcon = (React.createElement("svg", __assign({}, iconProps, { className: "".concat(baseClassName, "__clock-button__icon ").concat(baseClassName, "__button__icon"), fill: "none" }),
    React.createElement("circle", { cx: "9.5", cy: "9.5", r: "7.5" }),
    React.createElement("path", { d: "M9.5 4.5 v5 h4" })));
var ClearIcon = (React.createElement("svg", __assign({}, iconProps, { className: "".concat(baseClassName, "__clear-button__icon ").concat(baseClassName, "__button__icon") }),
    React.createElement("line", { x1: "4", x2: "15", y1: "4", y2: "15" }),
    React.createElement("line", { x1: "15", x2: "4", y1: "4", y2: "15" })));
var TimePicker = function TimePicker(props) {
    var _a;
    var amPmAriaLabel = props.amPmAriaLabel, autoFocus = props.autoFocus, className = props.className, clearAriaLabel = props.clearAriaLabel, _b = props.clearIcon, clearIcon = _b === void 0 ? ClearIcon : _b, clockAriaLabel = props.clockAriaLabel, _c = props.clockIcon, clockIcon = _c === void 0 ? ClockIcon : _c, _d = props.closeClock, shouldCloseClockOnSelect = _d === void 0 ? true : _d, dataTestid = props["data-testid"], hourAriaLabel = props.hourAriaLabel, hourPlaceholder = props.hourPlaceholder, disableClock = props.disableClock, disabled = props.disabled, format = props.format, id = props.id, _e = props.isOpen, isOpenProps = _e === void 0 ? null : _e, locale = props.locale, maxTime = props.maxTime, _f = props.maxDetail, maxDetail = _f === void 0 ? 'minute' : _f, minTime = props.minTime, minuteAriaLabel = props.minuteAriaLabel, minutePlaceholder = props.minutePlaceholder, _g = props.name, name = _g === void 0 ? 'time' : _g, nativeInputAriaLabel = props.nativeInputAriaLabel, onClockClose = props.onClockClose, onClockOpen = props.onClockOpen, onChangeProps = props.onChange, onFocusProps = props.onFocus, onInvalidChange = props.onInvalidChange, _h = props.openClockOnFocus, openClockOnFocus = _h === void 0 ? true : _h, required = props.required, value = props.value, secondAriaLabel = props.secondAriaLabel, secondPlaceholder = props.secondPlaceholder, shouldCloseClock = props.shouldCloseClock, shouldOpenClock = props.shouldOpenClock, otherProps = __rest(props, ["amPmAriaLabel", "autoFocus", "className", "clearAriaLabel", "clearIcon", "clockAriaLabel", "clockIcon", "closeClock", 'data-testid', "hourAriaLabel", "hourPlaceholder", "disableClock", "disabled", "format", "id", "isOpen", "locale", "maxTime", "maxDetail", "minTime", "minuteAriaLabel", "minutePlaceholder", "name", "nativeInputAriaLabel", "onClockClose", "onClockOpen", "onChange", "onFocus", "onInvalidChange", "openClockOnFocus", "required", "value", "secondAriaLabel", "secondPlaceholder", "shouldCloseClock", "shouldOpenClock"]);
    var _j = useState((_a = isOpenProps !== null && isOpenProps !== void 0 ? isOpenProps : autoFocus) !== null && _a !== void 0 ? _a : null), isOpen = _j[0], setIsOpen = _j[1];
    var wrapper = useRef(null);
    var clockWrapper = useRef(null);
    useEffect(function () {
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
    var closeClock = useCallback(function (_a) {
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
    var onKeyDown = useCallback(function (event) {
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
    var onOutsideAction = useCallback(function (event) {
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
    var handleOutsideActionListeners = useCallback(function (shouldListen) {
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
    useEffect(function () {
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
        return (React.createElement("div", { className: "".concat(baseClassName, "__wrapper") },
            React.createElement(TimeInput, __assign({}, ariaLabelProps, placeholderProps, { 
                // eslint-disable-next-line jsx-a11y/no-autofocus
                autoFocus: autoFocus, className: "".concat(baseClassName, "__inputGroup"), disabled: disabled, format: format, isClockOpen: isOpen, locale: locale, maxDetail: maxDetail, maxTime: maxTime, minTime: minTime, name: name, onChange: onChange, onInvalidChange: onInvalidChange, required: required, value: valueFrom })),
            clearIcon !== null && (React.createElement("button", { "aria-label": clearAriaLabel, className: "".concat(baseClassName, "__clear-button ").concat(baseClassName, "__button"), disabled: disabled, onClick: clear, onFocus: stopPropagation, type: "button" }, typeof clearIcon === 'function' ? React.createElement(clearIcon) : clearIcon)),
            clockIcon !== null && !disableClock && (React.createElement("button", { "aria-expanded": isOpen || false, "aria-label": clockAriaLabel, className: "".concat(baseClassName, "__clock-button ").concat(baseClassName, "__button"), disabled: disabled, onClick: toggleClock, onFocus: stopPropagation, type: "button" }, typeof clockIcon === 'function' ? React.createElement(clockIcon) : clockIcon))));
    }
    function renderClock() {
        if (isOpen === null || disableClock) {
            return null;
        }
        var clockClassName = props.clockClassName, timePickerClassName = props.className, // Unused, here to exclude it from clockProps
        onChangeProps = props.onChange, // Unused, here to exclude it from clockProps
        portalContainer = props.portalContainer, value = props.value, clockProps = __rest(props, ["clockClassName", "className", "onChange", "portalContainer", "value"]);
        var className = "".concat(baseClassName, "__clock");
        var classNames = clsx(className, "".concat(className, "--").concat(isOpen ? 'open' : 'closed'));
        var valueFrom = (Array.isArray(value) ? value : [value])[0];
        var clock = React.createElement(Clock, __assign({ className: clockClassName, value: valueFrom }, clockProps));
        return portalContainer ? (createPortal(React.createElement("div", { ref: clockWrapper, className: classNames }, clock), portalContainer)) : (React.createElement(Fit, null,
            React.createElement("div", { ref: function (ref) {
                    if (ref && !isOpen) {
                        ref.removeAttribute('style');
                    }
                }, className: classNames }, clock)));
    }
    var eventProps = useMemo(function () { return makeEventProps(otherProps); }, [otherProps]);
    return (React.createElement("div", __assign({ className: clsx(baseClassName, "".concat(baseClassName, "--").concat(isOpen ? 'open' : 'closed'), "".concat(baseClassName, "--").concat(disabled ? 'disabled' : 'enabled'), className), "data-testid": dataTestid, id: id }, eventProps, { onFocus: onFocus, ref: wrapper }),
        renderInputs(),
        renderClock()));
};
var isValue = PropTypes.oneOfType([isTime, PropTypes.instanceOf(Date)]);
var isValueOrValueArray = PropTypes.oneOfType([isValue, rangeOf(isValue)]);
TimePicker.propTypes = {
    amPmAriaLabel: PropTypes.string,
    autoFocus: PropTypes.bool,
    className: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),
    clearAriaLabel: PropTypes.string,
    clearIcon: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
    clockAriaLabel: PropTypes.string,
    clockClassName: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),
    clockIcon: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
    closeClock: PropTypes.bool,
    'data-testid': PropTypes.string,
    disableClock: PropTypes.bool,
    disabled: PropTypes.bool,
    format: PropTypes.string,
    hourAriaLabel: PropTypes.string,
    hourPlaceholder: PropTypes.string,
    id: PropTypes.string,
    isOpen: PropTypes.bool,
    locale: PropTypes.string,
    maxDetail: PropTypes.oneOf(allViews),
    maxTime: isTime,
    minTime: isTime,
    minuteAriaLabel: PropTypes.string,
    minutePlaceholder: PropTypes.string,
    name: PropTypes.string,
    nativeInputAriaLabel: PropTypes.string,
    onChange: PropTypes.func,
    onClockClose: PropTypes.func,
    onClockOpen: PropTypes.func,
    onFocus: PropTypes.func,
    openClockOnFocus: PropTypes.bool,
    required: PropTypes.bool,
    secondAriaLabel: PropTypes.string,
    secondPlaceholder: PropTypes.string,
    value: isValueOrValueArray,
};
if (isBrowser) {
    TimePicker.propTypes.portalContainer = PropTypes.instanceOf(HTMLElement);
}
export default TimePicker;
