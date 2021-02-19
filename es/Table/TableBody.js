function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

import React from 'react';
import { cssPrefix } from './index';
import TableCell from './TableCell';

var TableBody = /*#__PURE__*/function (_React$Component) {
  _inherits(TableBody, _React$Component);

  var _super = _createSuper(TableBody);

  function TableBody() {
    var _this;

    _classCallCheck(this, TableBody);

    _this = _super.apply(this, arguments);
    _this.scrollDivRef = /*#__PURE__*/React.createRef();

    _this.setScrollY = function (scrollTop) {
      if (_this.scrollDivRef && _this.scrollDivRef.current) {
        _this.scrollDivRef.current.scrollTop = scrollTop;
      }
    };

    _this.handleScroll = function (e) {
      var onScroll = _this.props.onScroll;
      var _e$target = e.target,
          scrollLeft = _e$target.scrollLeft,
          scrollTop = _e$target.scrollTop;
      onScroll && onScroll(scrollLeft, scrollTop);
    };

    return _this;
  }

  _createClass(TableBody, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          dataSource = _this$props.dataSource,
          endColumns = _this$props.endColumns,
          rowKey = _this$props.rowKey,
          scroll = _this$props.scroll;
      return /*#__PURE__*/React.createElement("div", {
        className: "".concat(cssPrefix, "-body"),
        onScroll: this.handleScroll,
        ref: this.scrollDivRef,
        style: {
          maxHeight: scroll && scroll.y,
          overflowX: scroll && scroll.x ? 'scroll' : undefined,
          overflowY: scroll && scroll.y ? 'scroll' : undefined
        }
      }, /*#__PURE__*/React.createElement("table", {
        style: {
          width: scroll && scroll.x
        }
      }, /*#__PURE__*/React.createElement("colgroup", null, endColumns.map(function (item) {
        return /*#__PURE__*/React.createElement("col", {
          key: item.dataIndex,
          style: {
            width: item.width,
            minWidth: item.width
          }
        });
      })), /*#__PURE__*/React.createElement("tbody", null, dataSource.map(function (record, recordIndex) {
        return /*#__PURE__*/React.createElement("tr", {
          key: rowKey ? record[rowKey] : recordIndex,
          "data-row-key": rowKey ? record[rowKey] : recordIndex
        }, endColumns.map(function (column) {
          return /*#__PURE__*/React.createElement(TableCell, {
            key: column.dataIndex,
            type: "body",
            column: column,
            record: record,
            index: recordIndex
          });
        }));
      }))));
    }
  }]);

  return TableBody;
}(React.Component);

export default TableBody;