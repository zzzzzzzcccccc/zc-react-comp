import { __rest } from "tslib";
import React from 'react';
import { Resizable } from 'react-resizable';

var TableResizeableTitle = function TableResizeableTitle(props) {
  var onResize = props.onResize,
      width = props.width,
      restProps = __rest(props, ["onResize", "width"]);

  if (!width) {
    return /*#__PURE__*/React.createElement("th", Object.assign({}, restProps));
  }

  return /*#__PURE__*/React.createElement(Resizable, {
    width: parseFloat(width + ''),
    height: 0,
    onResize: onResize,
    draggableOpts: {
      enableUserSelectHack: false
    }
  }, /*#__PURE__*/React.createElement("th", Object.assign({}, restProps)));
};

export default TableResizeableTitle;