import React, { useEffect } from 'react';
import classNames from 'classnames';
import { CSSTransition } from 'react-transition-group';
import ReactDOM from 'react-dom';
import Mask from '../Mask';
import Button from '../Button';
import "./index.css";
import { toggleBodyOverflow } from '../utils';
import varStyle from '../assets/styles/varStyle';
var cssPrefix = 'r-zc-confirm-modal';

var Modal = function Modal(_ref) {
  var _ref$zIndex = _ref.zIndex,
      zIndex = _ref$zIndex === void 0 ? varStyle.modalZIndex : _ref$zIndex,
      _ref$top = _ref.top,
      top = _ref$top === void 0 ? '20%' : _ref$top,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? 360 : _ref$width,
      _ref$title = _ref.title,
      title = _ref$title === void 0 ? '提示' : _ref$title,
      _ref$content = _ref.content,
      content = _ref$content === void 0 ? '' : _ref$content,
      _ref$style = _ref.style,
      style = _ref$style === void 0 ? {} : _ref$style,
      className = _ref.className,
      _ref$okText = _ref.okText,
      okText = _ref$okText === void 0 ? '确认' : _ref$okText,
      _ref$cancelText = _ref.cancelText,
      cancelText = _ref$cancelText === void 0 ? '取消' : _ref$cancelText,
      _ref$buttonSize = _ref.buttonSize,
      buttonSize = _ref$buttonSize === void 0 ? 'normal' : _ref$buttonSize,
      onOk = _ref.onOk,
      onCancel = _ref.onCancel;
  useEffect(function () {
    toggleBodyOverflow();
    return function () {
      toggleBodyOverflow(false);
    };
  }, []);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Mask, {
    style: {
      zIndex: zIndex
    }
  }), /*#__PURE__*/React.createElement(CSSTransition, {
    in: true,
    timeout: 400,
    classNames: "z-modal",
    appear: true
  }, /*#__PURE__*/React.createElement("div", {
    className: classNames(cssPrefix, className),
    style: Object.assign(Object.assign({}, style), {
      zIndex: zIndex,
      width: "".concat(width, "px"),
      marginLeft: "".concat(width / 2 * -1, "px"),
      top: top
    })
  }, /*#__PURE__*/React.createElement("div", {
    className: "".concat(cssPrefix, "-title")
  }, title), /*#__PURE__*/React.createElement("div", {
    className: "".concat(cssPrefix, "-content")
  }, content), /*#__PURE__*/React.createElement("div", {
    className: "".concat(cssPrefix, "-footer")
  }, cancelText && /*#__PURE__*/React.createElement(Button, {
    type: "default",
    onClick: onCancel,
    size: buttonSize
  }, cancelText), okText && /*#__PURE__*/React.createElement(Button, {
    onClick: onOk,
    size: buttonSize
  }, okText)))));
};

var ConfirmModal = {
  show: function show() {
    var opt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var div = document.createElement('div');
    document.body.appendChild(div);

    var remove = function remove() {
      ReactDOM.unmountComponentAtNode(div);
      document.body.removeChild(div);
    };

    var onOk = function onOk() {
      if (opt.onOk) {
        opt.onOk();
      }

      remove();
    };

    var onCancel = function onCancel() {
      if (opt.onCancel) {
        opt.onCancel();
      }

      remove();
    };

    ReactDOM.render( /*#__PURE__*/React.createElement(Modal, Object.assign({}, opt, {
      onOk: onOk,
      onCancel: onCancel
    })), div);
  }
};
export default ConfirmModal;