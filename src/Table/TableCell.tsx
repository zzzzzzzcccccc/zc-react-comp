import React, { FC } from 'react';
import classNames from 'classnames';
import { cssPrefix, TableCellProps } from './index';

const TableCell: FC<TableCellProps> = ({
  className,
  style,
  column,
  renderType,
  record,
  index,
}) => {
  const renderHeaderCell = (): React.ReactNode => {
    return column.title;
  };

  const renderBodyCell = (): React.ReactNode => {
    return column.render
      ? column.render(record[column.dataIndex], record, index)
      : record[column.dataIndex];
  };

  return (
    <span
      className={classNames(
        `${cssPrefix}-cell`,
        `${cssPrefix}-cell-${renderType}`,
        column.ellipsis && `${cssPrefix}-cell-ellipsis`,
        className,
      )}
      style={style}
    >
      {renderType === 'header' ? renderHeaderCell() : renderBodyCell()}
    </span>
  );
};

export default TableCell;
