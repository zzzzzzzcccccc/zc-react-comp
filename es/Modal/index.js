import React, { useEffect } from 'react';
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
      top = _ref$top === void 0 ? '50px' : _ref$top,
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
      onClose = _ref.onClose;
  useEffect(function () {
    toggleBodyOverflow(visible);
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
    className: classNames("".concat(cssPrefix, "-info"), className),
    style: Object.assign(Object.assign({}, style), {
      top: top,
      marginLeft: "".concat(width / 2 * -1, "px"),
      width: "".concat(width, "px")
    })
  }, /*#__PURE__*/React.createElement("div", {
    className: "".concat(cssPrefix, "-title")
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