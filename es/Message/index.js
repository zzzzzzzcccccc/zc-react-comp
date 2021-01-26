function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import ReactDOM from 'react-dom';
import "./index.css";
import varStyle from '../assets/styles/varStyle';
var cssPrefix = 'r-zc-message';

var MessageComp = function MessageComp(_ref) {
  var _ref$top = _ref.top,
      top = _ref$top === void 0 ? '8px' : _ref$top,
      _ref$zIndex = _ref.zIndex,
      zIndex = _ref$zIndex === void 0 ? varStyle.messageZIndex : _ref$zIndex,
      list = _ref.list,
      onEnd = _ref.onEnd;

  var _useState = useState(list),
      _useState2 = _slicedToArray(_useState, 2),
      messageList = _useState2[0],
      setMessageList = _useState2[1];

  useEffect(function () {
    setMessageList(list);
  }, [list]);
  return /*#__PURE__*/React.createElement("div", {
    className: cssPrefix,
    style: {
      top: top,
      zIndex: zIndex
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "".concat(cssPrefix, "-info")
  }, messageList.map(function (item) {
    return /*#__PURE__*/React.createElement(MessageCompItem, {
      "data-msg-id": item.messageId,
      onEnd: onEnd,
      key: item.messageId,
      record: item
    });
  })));
};

var MessageCompItem = function MessageCompItem(_ref2) {
  var _ref2$record = _ref2.record,
      record = _ref2$record === void 0 ? {} : _ref2$record,
      onEnd = _ref2.onEnd;
  var timer;
  var duration = record.duration,
      messageId = record.messageId,
      type = record.type,
      className = record.className,
      style = record.style,
      content = record.content,
      plain = record.plain;

  var setTimer = function setTimer() {
    timer = setTimeout(function () {
      return onEnd(messageId);
    }, duration);
  };

  var removeTimer = function removeTimer() {
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
  };

  var onMouseEnter = function onMouseEnter(e) {
    return removeTimer();
  };

  var onMouseLeave = function onMouseLeave(e) {
    return setTimer();
  };

  useEffect(function () {
    setTimer();
    return function () {
      removeTimer();
      onEnd(messageId);
    };
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    className: classNames("".concat(cssPrefix, "-info-item"), "".concat(cssPrefix, "-info").concat(!!plain ? '-plain' : '', "-").concat(type), className),
    onMouseEnter: onMouseEnter,
    onMouseLeave: onMouseLeave,
    "data-msg-id": messageId,
    style: style
  }, /*#__PURE__*/React.createElement("div", {
    className: classNames("".concat(cssPrefix, "-info-item-content"))
  }, /*#__PURE__*/React.createElement("span", null), content));
};

var div;
var messageList = [];
var Message = {
  show: function show() {
    var opt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

    if (!div) {
      div = document.createElement('div');
      document.body.appendChild(div);
    }

    var config = {};

    if (_typeof(opt) === 'object') {
      config = opt;
      config.type = config.type || 'primary';
      config.duration = config.duration || 3000;
    } else {
      config.type = 'primary';
      config.content = opt;
      config.duration = 3000;
    }

    config.messageId = new Date().getTime() + '';
    messageList = [].concat(_toConsumableArray(messageList), [config]);

    var handleRemove = function handleRemove(messageId) {
      messageList = messageList.filter(function (v) {
        return v.messageId !== messageId;
      });
      ReactDOM.render( /*#__PURE__*/React.createElement(MessageComp, {
        list: messageList,
        onEnd: handleRemove
      }), div);
    };

    ReactDOM.render( /*#__PURE__*/React.createElement(MessageComp, {
      list: messageList,
      onEnd: handleRemove
    }), div);
  }
};
export default Message;