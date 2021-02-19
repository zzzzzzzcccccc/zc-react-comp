function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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
import { formatColumns } from './TableUtils';
import TableHeader from './TableHeader';
import TableBody from './TableBody';
import TableFixed from './TableFixed';
import { getScrollbarSize } from '../utils';
import "./index.css";

var Table = /*#__PURE__*/function (_React$Component) {
  _inherits(Table, _React$Component);

  var _super = _createSuper(Table);

  function Table(props) {
    var _this;

    _classCallCheck(this, Table);

    _this = _super.call(this, props);
    _this.headerRef = /*#__PURE__*/React.createRef();
    _this.bodyRef = /*#__PURE__*/React.createRef();
    _this.leftTableRef = /*#__PURE__*/React.createRef();
    _this.rightTableRef = /*#__PURE__*/React.createRef();

    _this.getFixedProps = function (fixedType) {
      var _this$state = _this.state,
          leftColumns = _this$state.leftColumns,
          rightColumns = _this$state.rightColumns,
          theadHeight = _this$state.theadHeight,
          scrollBarX = _this$state.scrollBarX,
          scrollBarY = _this$state.scrollBarY;
      var _this$props = _this.props,
          scroll = _this$props.scroll,
          dataSource = _this$props.dataSource,
          rowKey = _this$props.rowKey;
      return {
        fixedType: fixedType,
        endColumns: fixedType === 'left' ? leftColumns : rightColumns,
        theadHeight: theadHeight,
        scrollBarX: scrollBarX,
        scrollBarY: scrollBarY,
        scroll: scroll,
        dataSource: dataSource,
        rowKey: rowKey,
        onScroll: _this.handleFixedScroll
      };
    };

    _this.handleResize = function (column, width) {
      var endColumns = _toConsumableArray(_this.state.endColumns);

      for (var i = 0; i < endColumns.length; i++) {
        if (endColumns[i].dataIndex === column.dataIndex) {
          endColumns[i].width = width;
          break;
        }
      }

      _this.setState({
        endColumns: endColumns
      });
    };

    _this.handleFixedScroll = function (scrollLeft, scrollTop) {
      _this.bodyRef && _this.bodyRef.current && _this.bodyRef.current.setScrollY(scrollTop);
    };

    _this.handleScroll = function (scrollLeft, scrollTop) {
      var onScroll = _this.props.onScroll;
      _this.headerRef && _this.headerRef.current && _this.headerRef.current.setScrollX(scrollLeft);
      _this.leftTableRef && _this.leftTableRef.current && _this.leftTableRef.current.setScrollY(scrollTop);
      _this.rightTableRef && _this.rightTableRef.current && _this.rightTableRef.current.setScrollY(scrollTop);
      onScroll && onScroll(scrollLeft, scrollTop);
    };

    _this.setColumns = function (columns) {
      var _formatColumns = formatColumns(columns),
          genColumns = _formatColumns.genColumns,
          originColumns = _formatColumns.originColumns;

      var _getScrollbarSize = getScrollbarSize(),
          scrollBarX = _getScrollbarSize.scrollBarX,
          scrollBarY = _getScrollbarSize.scrollBarY;

      var endColumns = genColumns.filter(function (v) {
        return v.isEndColumn;
      });

      _this.setState({
        scrollBarX: scrollBarX,
        scrollBarY: scrollBarY,
        genColumns: genColumns,
        originColumns: originColumns,
        endColumns: endColumns,
        leftColumns: endColumns.filter(function (v) {
          return v.fixed === 'left';
        }),
        rightColumns: endColumns.filter(function (v) {
          return v.fixed === 'right';
        })
      });
    };

    _this.state = {
      originColumns: [],
      genColumns: [],
      endColumns: [],
      leftColumns: [],
      rightColumns: [],
      theadHeight: 0,
      scrollBarX: 0,
      scrollBarY: 0
    };
    return _this;
  }

  _createClass(Table, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var columns = this.props.columns;
      this.setColumns(columns);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props2 = this.props,
          dataSource = _this$props2.dataSource,
          className = _this$props2.className,
          style = _this$props2.style,
          size = _this$props2.size,
          rowKey = _this$props2.rowKey,
          bordered = _this$props2.bordered,
          scroll = _this$props2.scroll;
      var _this$state2 = this.state,
          originColumns = _this$state2.originColumns,
          endColumns = _this$state2.endColumns,
          leftColumns = _this$state2.leftColumns,
          rightColumns = _this$state2.rightColumns,
          theadHeight = _this$state2.theadHeight,
          scrollBarX = _this$state2.scrollBarX,
          scrollBarY = _this$state2.scrollBarY;
      return /*#__PURE__*/React.createElement("div", {
        className: classNames(cssPrefix, "".concat(cssPrefix, "-").concat(size), bordered && "".concat(cssPrefix, "-border"), className),
        style: style
      }, /*#__PURE__*/React.createElement("div", {
        className: "".concat(cssPrefix, "-wrapper")
      }, /*#__PURE__*/React.createElement(TableHeader, {
        originColumns: originColumns,
        ref: this.headerRef,
        scroll: scroll,
        onResize: this.handleResize,
        theadChange: function theadChange(thead) {
          return _this2.setState({
            theadHeight: thead.offsetHeight
          });
        },
        scrollBarX: scrollBarX,
        scrollBarY: scrollBarY,
        endColumns: endColumns
      }), !dataSource && dataSource.length <= 0 ? /*#__PURE__*/React.createElement("div", null, "null") : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(TableBody, {
        dataSource: dataSource,
        ref: this.bodyRef,
        rowKey: rowKey,
        onScroll: this.handleScroll,
        scroll: scroll,
        scrollBarX: scrollBarX,
        scrollBarY: scrollBarY,
        endColumns: endColumns
      }), (leftColumns.length > 0 || rightColumns.length > 0) && theadHeight > 0 && /*#__PURE__*/React.createElement("div", {
        className: "".concat(cssPrefix, "-fixed")
      }, leftColumns.length > 0 && /*#__PURE__*/React.createElement(TableFixed, Object.assign({}, this.getFixedProps('left'), {
        ref: this.leftTableRef
      })), rightColumns.length > 0 && /*#__PURE__*/React.createElement(TableFixed, Object.assign({}, this.getFixedProps('right'), {
        ref: this.rightTableRef
      }))))));
    }
  }]);

  return Table;
}(React.Component);

Table.defaultProps = {
  size: "middle",
  bordered: false
};
export default Table;