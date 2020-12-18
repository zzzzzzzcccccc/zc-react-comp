import React from 'react';

var TableCol = function TableCol(_ref) {
  var columns = _ref.columns;
  return /*#__PURE__*/ React.createElement(
    'colgroup',
    null,
    columns.map(function(item) {
      return /*#__PURE__*/ React.createElement('col', null);
    }),
  );
};

export default TableCol;
