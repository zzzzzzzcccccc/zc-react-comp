import React, { FC } from 'react';
import classNames from 'classnames';
import { cssPrefix, TableCellProps, isTableCellHeader } from './index';

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

  const renderCell = (): React.ReactNode =>
    isTableCellHeader(renderType) ? renderHeaderCell() : renderBodyCell();

  return (
    <span
      title={column.ellipsis && (renderCell() as string)}
      className={classNames(
        `${cssPrefix}-cell`,
        `${cssPrefix}-cell-${renderType}`,
        column.ellipsis && `${cssPrefix}-cell-ellipsis`,
        className,
      )}
      style={style}
    >
      {renderCell()}
    </span>
  );
};

export default TableCell;
