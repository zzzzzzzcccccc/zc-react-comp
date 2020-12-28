function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

import React, { useEffect, useState, useRef } from 'react';
import ReactDOM from 'react-dom';
import { CSSTransition } from 'react-transition-group';
import classNames from 'classnames';
import Mask from '../Mask';
import Button from '../Button';
import "./index.css";
import { toggleBodyOverflow } from '../utils';
import varStyle from '../assets/styles/varStyle';
var cssPrefix = 'r-zc-modal';

var Modal = function Modal(_ref) {
  var visible = _ref.visible,
      className = _ref.className,
      style = _ref.style,
      _ref$zIndex = _ref.zIndex,
      zIndex = _ref$zIndex === void 0 ? varStyle.modalZIndex : _ref$zIndex,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? 600 : _ref$width,
      _ref$top = _ref.top,
      top = _ref$top === void 0 ? 50 : _ref$top,
      title = _ref.title,
      _ref$destroyOnClose = _ref.destroyOnClose,
      destroyOnClose = _ref$destroyOnClose === void 0 ? true : _ref$destroyOnClose,
      children = _ref.children,
      footer = _ref.footer,
      _ref$okText = _ref.okText,
      okText = _ref$okText === void 0 ? '确认' : _ref$okText,
      _ref$cancelText = _ref.cancelText,
      cancelText = _ref$cancelText === void 0 ? '取消' : _ref$cancelText,
      _ref$footerAlign = _ref.footerAlign,
      footerAlign = _ref$footerAlign === void 0 ? 'right' : _ref$footerAlign,
      loading = _ref.loading,
      _ref$layoutDom = _ref.layoutDom,
      layoutDom = _ref$layoutDom === void 0 ? document.body : _ref$layoutDom,
      onOk = _ref.onOk,
      onClose = _ref.onClose,
      _ref$isMove = _ref.isMove,
      isMove = _ref$isMove === void 0 ? false : _ref$isMove;
  var wrapperRef = useRef();

  var _useState = useState(0),
      _useState2 = _slicedToArray(_useState, 2),
      actualLeft = _useState2[0],
      setActualLeft = _useState2[1];

  var _useState3 = useState(0),
      _useState4 = _slicedToArray(_useState3, 2),
      actualTop = _useState4[0],
      setActualTop = _useState4[1];

  var _useState5 = useState(false),
      _useState6 = _slicedToArray(_useState5, 2),
      moving = _useState6[0],
      setMoving = _useState6[1];

  var _useState7 = useState(0),
      _useState8 = _slicedToArray(_useState7, 2),
      diffX = _useState8[0],
      setDiffX = _useState8[1];

  var _useState9 = useState(0),
      _useState10 = _slicedToArray(_useState9, 2),
      diffY = _useState10[0],
      setDiffY = _useState10[1];

  var getPosition = function getPosition(e) {
    var dom = e.target; // @ts-ignore

    var _dom$getBoundingClien = dom.getBoundingClientRect(),
        X = _dom$getBoundingClien.left,
        Y = _dom$getBoundingClien.top;

    var mouseX = e.clientX;
    var mouseY = e.clientY;
    var diffX = mouseX - X;
    var diffY = mouseY - Y;
    return {
      X: X,
      Y: Y,
      mouseX: mouseX,
      mouseY: mouseY,
      diffX: diffX,
      diffY: diffY
    };
  };

  var onMouseMove = function onMouseMove(e) {
    if (!moving) {
      return;
    }

    var position = getPosition(e);
    var x = position.mouseX - diffX;
    var y = position.mouseY - diffY;
    var _document$body = document.body,
        clientWidth = _document$body.clientWidth,
        clientHeight = _document$body.clientHeight;
    var maxHeight = clientHeight - wrapperRef.current.offsetHeight;
    var maxWidth = clientWidth - wrapperRef.current.offsetWidth;
    var left = x > 0 ? x < maxWidth ? x : maxWidth : 0;
    var top = y > 0 ? y < maxHeight ? y : maxHeight : 0;
    setActualLeft(left);
    setActualTop(top);
  };

  var onMouseUp = function onMouseUp() {
    moving && setMoving(false);
  };

  var handleMouseDown = function handleMouseDown(e) {
    if (!isMove) {
      return;
    }

    var _getPosition = getPosition(e),
        diffX = _getPosition.diffX,
        diffY = _getPosition.diffY;

    window.onmousemove = onMouseMove;
    window.onmouseup = onMouseUp;
    setMoving(true);
    setDiffX(diffX);
    setDiffY(diffY);
  };

  var setDefaultLeftTop = function setDefaultLeftTop() {
    var clientWidth = document.documentElement.clientWidth || document.body.clientWidth;
    setActualTop(top);
    setActualLeft((clientWidth - width) / 2);
  };

  useEffect(function () {
    toggleBodyOverflow(visible);
    setDefaultLeftTop();

    window.onresize = function () {
      return setDefaultLeftTop();
    };

    return function () {
      window.onmousemove = null;
      window.onmouseup = null;
      setMoving(false);
    };
  }, [visible]);
  return /*#__PURE__*/ReactDOM.createPortal( /*#__PURE__*/React.createElement("div", null, visible && /*#__PURE__*/React.createElement(Mask, {
    style: {
      zIndex: zIndex
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: classNames(cssPrefix),
    style: {
      display: visible ? 'block' : 'none',
      zIndex: zIndex
    }
  }, /*#__PURE__*/React.createElement(CSSTransition, {
    timeout: 400,
    in: visible,
    classNames: "z-modal",
    appear: true
  }, destroyOnClose && !visible ? /*#__PURE__*/React.createElement("div", null) : /*#__PURE__*/React.createElement("div", {
    ref: wrapperRef,
    className: classNames("".concat(cssPrefix, "-info"), className),
    style: Object.assign(Object.assign({}, style), {
      top: "".concat(actualTop, "px"),
      left: "".concat(actualLeft, "px"),
      width: "".concat(width, "px")
    })
  }, /*#__PURE__*/React.createElement("div", {
    className: "".concat(cssPrefix, "-title"),
    onMouseDown: handleMouseDown,
    style: {
      cursor: moving ? 'all-scroll' : 'auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "".concat(cssPrefix, "-title-info")
  }, title), /*#__PURE__*/React.createElement("div", {
    className: "".concat(cssPrefix, "-title-close"),
    onClick: function onClick() {
      return !loading && onClose();
    }
  }, "\xD7")), /*#__PURE__*/React.createElement("div", {
    className: "".concat(cssPrefix, "-body")
  }, children), footer ? footer : /*#__PURE__*/React.createElement("div", {
    className: "".concat(cssPrefix, "-footer"),
    style: {
      textAlign: footerAlign
    }
  }, cancelText && /*#__PURE__*/React.createElement(Button, {
    type: "default",
    onClick: function onClick() {
      return !loading && onClose();
    }
  }, cancelText), okText && /*#__PURE__*/React.createElement(Button, {
    onClick: function onClick() {
      return !loading && onOk();
    },
    loading: loading
  }, okText)))))), layoutDom);
};

export default Modal;