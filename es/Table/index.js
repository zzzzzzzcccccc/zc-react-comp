import BaseTable from './BaseTable';
export var isTableCellHeader = function isTableCellHeader(renderType) {
  return renderType === 'header';
};
export var cssPrefix = 'r-zc-table';
export default BaseTable;