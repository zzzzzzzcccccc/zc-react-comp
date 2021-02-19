function _slicedToArray(arr, i) {
  return (
    _arrayWithHoles(arr) ||
    _iterableToArrayLimit(arr, i) ||
    _unsupportedIterableToArray(arr, i) ||
    _nonIterableRest()
  );
}

function _nonIterableRest() {
  throw new TypeError(
    'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
  );
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === 'string') return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === 'Object' && o.constructor) n = o.constructor.name;
  if (n === 'Map' || n === 'Set') return Array.from(o);
  if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === 'undefined' || !(Symbol.iterator in Object(arr)))
    return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;
  try {
    for (
      var _i = arr[Symbol.iterator](), _s;
      !(_n = (_s = _i.next()).done);
      _n = true
    ) {
      _arr.push(_s.value);
      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i['return'] != null) _i['return']();
    } finally {
      if (_d) throw _e;
    }
  }
  return _arr;
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

import React, { useRef, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { CSSTransition } from 'react-transition-group';
import classNames from 'classnames';
import Mask from '../Mask';
import Button from '../Button';
import LocalConsumer from '../ConfigProvider/LocalConsumer';
import { toggleBodyOverflow } from '../utils';
import './index.css';
var cssPrefix = 'r-zc-drawer';

var Drawer = function Drawer(_ref) {
  var _ref$layoutDom = _ref.layoutDom,
    layoutDom = _ref$layoutDom === void 0 ? document.body : _ref$layoutDom,
    className = _ref.className,
    style = _ref.style,
    _ref$visible = _ref.visible,
    visible = _ref$visible === void 0 ? false : _ref$visible,
    _ref$position = _ref.position,
    position = _ref$position === void 0 ? 'right' : _ref$position,
    zIndex = _ref.zIndex,
    _ref$showMask = _ref.showMask,
    showMask = _ref$showMask === void 0 ? true : _ref$showMask,
    _ref$destroyOnClose = _ref.destroyOnClose,
    destroyOnClose =
      _ref$destroyOnClose === void 0 ? true : _ref$destroyOnClose,
    children = _ref.children,
    _ref$maskClosable = _ref.maskClosable,
    maskClosable = _ref$maskClosable === void 0 ? true : _ref$maskClosable,
    onClose = _ref.onClose,
    _ref$title = _ref.title,
    title = _ref$title === void 0 ? '' : _ref$title,
    _ref$showCloseIcon = _ref.showCloseIcon,
    showCloseIcon = _ref$showCloseIcon === void 0 ? true : _ref$showCloseIcon,
    _ref$footer = _ref.footer,
    footer = _ref$footer === void 0 ? '' : _ref$footer,
    _ref$footerAlign = _ref.footerAlign,
    footerAlign = _ref$footerAlign === void 0 ? 'right' : _ref$footerAlign,
    okText = _ref.okText,
    cancelText = _ref.cancelText,
    _ref$lockBody = _ref.lockBody,
    lockBody = _ref$lockBody === void 0 ? false : _ref$lockBody,
    _ref$loading = _ref.loading,
    loading = _ref$loading === void 0 ? false : _ref$loading,
    onOk = _ref.onOk;
  var wrapperRef = useRef();
  var titleRef = useRef();
  var footerRef = useRef();

  var _useState = useState(undefined),
    _useState2 = _slicedToArray(_useState, 2),
    bodyHeight = _useState2[0],
    setBodyHeight = _useState2[1];

  var closeDrawer = function closeDrawer(e) {
    if (loading) {
      return;
    }

    onClose(e);
  };

  var getBodyHeight = function getBodyHeight() {
    setBodyHeight(
      wrapperRef.current.offsetHeight -
        titleRef.current.offsetHeight -
        footerRef.current.offsetHeight,
    );
  };

  useEffect(
    function() {
      if (lockBody) {
        toggleBodyOverflow(visible);
      }

      if (title && visible) {
        getBodyHeight();
        window.onresize = getBodyHeight;
      }

      if (!visible) {
        window.onresize = null;
      }
    },
    [visible],
  );
  return /*#__PURE__*/ ReactDOM.createPortal(
    /*#__PURE__*/ React.createElement(LocalConsumer, null, function(local) {
      return /*#__PURE__*/ React.createElement(
        'div',
        {
          className: classNames(cssPrefix, className),
          style: {
            display: visible ? 'block' : 'none',
          },
        },
        showMask &&
          visible &&
          /*#__PURE__*/ React.createElement(Mask, {
            style: {
              zIndex: zIndex,
            },
            onClick: function onClick(e) {
              return maskClosable && closeDrawer(e);
            },
          }),
        destroyOnClose && !visible
          ? null
          : /*#__PURE__*/ React.createElement(
              CSSTransition,
              {
                timeout: 400,
                in: visible,
                classNames: 'z-drawer-'.concat(position),
                appear: true,
              },
              /*#__PURE__*/ React.createElement(
                'div',
                {
                  className: ''.concat(cssPrefix, '-wrapper'),
                  ref: wrapperRef,
                  style: Object.assign(
                    Object.assign(Object.assign({}, style), {
                      zIndex: zIndex,
                    }),
                    getPositionStyle(position),
                  ),
                },
                title
                  ? /*#__PURE__*/ React.createElement(
                      React.Fragment,
                      null,
                      /*#__PURE__*/ React.createElement(
                        'div',
                        {
                          className: ''.concat(cssPrefix, '-wrapper-title'),
                          ref: titleRef,
                        },
                        /*#__PURE__*/ React.createElement(
                          'div',
                          {
                            className: ''.concat(
                              cssPrefix,
                              '-wrapper-title-info',
                            ),
                          },
                          title,
                        ),
                        showCloseIcon &&
                          /*#__PURE__*/ React.createElement(
                            'div',
                            {
                              className: ''.concat(
                                cssPrefix,
                                '-wrapper-title-close',
                              ),
                              onClick: function onClick(e) {
                                return onClose && onClose(e);
                              },
                            },
                            '\xD7',
                          ),
                      ),
                      /*#__PURE__*/ React.createElement(
                        'div',
                        {
                          className: ''.concat(cssPrefix, '-wrapper-body'),
                          style: {
                            height: bodyHeight,
                          },
                        },
                        children,
                      ),
                      /*#__PURE__*/ React.createElement(
                        'div',
                        {
                          className: ''.concat(cssPrefix, '-wrapper-footer'),
                          ref: footerRef,
                          style: {
                            textAlign: footerAlign,
                          },
                        },
                        footer
                          ? footer
                          : /*#__PURE__*/ React.createElement(
                              React.Fragment,
                              null,
                              /*#__PURE__*/ React.createElement(
                                Button,
                                {
                                  type: 'default',
                                  onClick: function onClick(e) {
                                    return closeDrawer(e);
                                  },
                                },
                                cancelText || local.cancel,
                              ),
                              /*#__PURE__*/ React.createElement(
                                Button,
                                {
                                  onClick: onOk,
                                  loading: loading,
                                },
                                okText || local.ok,
                              ),
                            ),
                      ),
                    )
                  : children,
              ),
            ),
      );
    }),
    layoutDom,
  );
};

var getPositionStyle = function getPositionStyle(position) {
  switch (position) {
    case 'left':
      return {
        left: 0,
        top: 0,
        bottom: 0,
      };

    case 'right':
      return {
        top: 0,
        right: 0,
        bottom: 0,
      };

    case 'top':
      return {
        top: 0,
        left: 0,
        right: 0,
      };

    case 'bottom':
      return {
        left: 0,
        right: 0,
        bottom: 0,
      };

    default:
      return {};
  }
};

export default Drawer;
