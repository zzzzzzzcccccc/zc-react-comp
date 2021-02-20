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
import classNames from 'classnames';
import { cssPrefix } from './index';
import TableCell from './TableCell';
import { rowActionProps } from './TableUtils';

var TableFixed = /*#__PURE__*/function (_React$Component) {
  _inherits(TableFixed, _React$Component);

  var _super = _createSuper(TableFixed);

  function TableFixed() {
    var _this;

    _classCallCheck(this, TableFixed);

    _this = _super.apply(this, arguments);
    _this.scrollDivRef = /*#__PURE__*/React.createRef();
    _this.bodyTableRef = /*#__PURE__*/React.createRef();

    _this.setScrollY = function (scrollTop) {
      if (_this.scrollDivRef && _this.scrollDivRef.current) {
        _this.scrollDivRef.current.scrollTop = scrollTop;
      }
    };

    _this.handleScroll = function (e) {
      var dom = e.target;
      _this.props.onScroll && _this.props.onScroll(dom.scrollLeft, dom.scrollTop);
    };

    return _this;
  }

  _createClass(TableFixed, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          fixedType = _this$props.fixedType,
          theadHeight = _this$props.theadHeight,
          endColumns = _this$props.endColumns,
          dataSource = _this$props.dataSource,
          scrollBarX = _this$props.scrollBarX,
          scrollBarY = _this$props.scrollBarY,
          scroll = _this$props.scroll,
          rowKey = _this$props.rowKey,
          onRow = _this$props.onRow,
          onCell = _this$props.onCell,
          bodyRef = _this$props.bodyRef,
          leftFixedRef = _this$props.leftFixedRef,
          rightFixedRef = _this$props.rightFixedRef,
          rowClassName = _this$props.rowClassName;
      var style = {
        bottom: scroll && scroll.x ? scrollBarX : undefined
      };

      var renderColGroup = function renderColGroup() {
        return /*#__PURE__*/React.createElement("colgroup", null, endColumns.map(function (item) {
          return /*#__PURE__*/React.createElement("col", {
            key: item.dataIndex,
            style: {
              width: item.width,
              minWidth: item.width
            }
          });
        }));
      };

      return /*#__PURE__*/React.createElement("div", {
        className: classNames("".concat(cssPrefix, "-fixed-item"), "".concat(cssPrefix, "-fixed-item-").concat(fixedType)),
        style: style
      }, /*#__PURE__*/React.createElement("div", {
        className: "".concat(cssPrefix, "-header")
      }, /*#__PURE__*/React.createElement("table", null, renderColGroup(), /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", {
        style: {
          height: theadHeight
        }
      }, endColumns.map(function (column) {
        return /*#__PURE__*/React.createElement(TableCell, {
          key: column.dataIndex,
          type: "header",
          column: column
        });
      }))))), /*#__PURE__*/React.createElement("div", {
        style: {
          marginRight: fixedType === 'left' ? -1 * scrollBarY : undefined,
          paddingBottom: 0
        }
      }, /*#__PURE__*/React.createElement("div", {
        className: "".concat(cssPrefix, "-body"),
        style: {
          maxHeight: scroll && scroll.y,
          overflow: 'scroll'
        },
        onScroll: this.handleScroll,
        ref: this.scrollDivRef
      }, /*#__PURE__*/React.createElement("table", {
        ref: this.bodyTableRef
      }, renderColGroup(), /*#__PURE__*/React.createElement("tbody", null, dataSource.map(function (record, recordIndex) {
        return /*#__PURE__*/React.createElement("tr", Object.assign({
          key: rowKey ? record[rowKey] : recordIndex,
          "data-row-key": rowKey ? record[rowKey] : recordIndex,
          className: classNames(rowClassName && rowClassName(record, recordIndex))
        }, rowActionProps(onRow, record, recordIndex, leftFixedRef || undefined, rightFixedRef || undefined, bodyRef)), endColumns.map(function (column) {
          return /*#__PURE__*/React.createElement(TableCell, {
            onCell: onCell,
            key: column.dataIndex,
            type: "body",
            column: column,
            index: recordIndex,
            record: record
          });
        }));
      }))))));
    }
  }]);

  return TableFixed;
}(React.Component);

export default TableFixed;