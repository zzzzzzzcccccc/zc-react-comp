import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import LocalConsumer from '../ConfigProvider/LocalConsumer';
import { CSSTransition } from 'react-transition-group';
import classNames from 'classnames';
import Mask from '../Mask';
import Button from '../Button';
import { toggleBodyOverflow } from '../utils';
import DragBox from '../DragBox';
import varStyle from '../assets/styles/varStyle';
import "./index.css";
var cssPrefix = 'r-zc-modal';
var dragBox = null;

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
      okText = _ref.okText,
      cancelText = _ref.cancelText,
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
  var titleRef = useRef();

  var setWrapperTopLeft = function setWrapperTopLeft(top, left) {
    var dom = wrapperRef.current;
    dom.style.top = top + 'px';
    dom.style.left = left + 'px';
  };

  var setDefaultLeftTop = function setDefaultLeftTop() {
    var clientWidth = document.documentElement.clientWidth || document.body.clientWidth;
    setWrapperTopLeft(top, (clientWidth - width) / 2);
  };

  var initDrag = function initDrag() {
    if (!isMove) {
      return;
    }

    dragBox = new DragBox(titleRef.current, wrapperRef.current);
    dragBox.init();
  };

  var removeDrag = function removeDrag() {
    if (!isMove || !dragBox) {
      return;
    }

    dragBox.remove();
    dragBox = null;
  };

  useEffect(function () {
    toggleBodyOverflow(visible);

    if (visible) {
      setDefaultLeftTop();

      window.onresize = function () {
        return setDefaultLeftTop();
      };

      initDrag();
    } else {
      removeDrag();
    }

    return function () {
      window.onresize = null;
      removeDrag();
    };
  }, [visible]);
  return /*#__PURE__*/ReactDOM.createPortal( /*#__PURE__*/React.createElement(LocalConsumer, null, function (local) {
    return /*#__PURE__*/React.createElement("div", null, visible && /*#__PURE__*/React.createElement(Mask, {
      style: {
        zIndex: zIndex
      }
    }), /*#__PURE__*/React.createElement("div", {
      className: classNames(cssPrefix),
      style: {
        display: visible ? 'block' : 'none',
        zIndex: zIndex
      }
    }, destroyOnClose && !visible ? null : /*#__PURE__*/React.createElement(CSSTransition, {
      timeout: 400,
      in: visible,
      classNames: "z-modal",
      appear: true
    }, /*#__PURE__*/React.createElement("div", {
      ref: wrapperRef,
      className: classNames("".concat(cssPrefix, "-info"), className),
      style: Object.assign(Object.assign({}, style), {
        width: "".concat(width, "px")
      })
    }, /*#__PURE__*/React.createElement("div", {
      ref: titleRef,
      className: "".concat(cssPrefix, "-title"),
      style: {
        cursor: isMove ? 'move' : 'auto'
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "".concat(cssPrefix, "-title-info")
    }, title !== undefined ? title : local.title), /*#__PURE__*/React.createElement("div", {
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
    }, /*#__PURE__*/React.createElement(Button, {
      type: "default",
      onClick: function onClick() {
        return !loading && onClose();
      }
    }, cancelText || local.cancel), /*#__PURE__*/React.createElement(Button, {
      onClick: function onClick() {
        return !loading && onOk();
      },
      loading: loading
    }, okText || local.ok))))));
  }), layoutDom);
};

export default Modal;