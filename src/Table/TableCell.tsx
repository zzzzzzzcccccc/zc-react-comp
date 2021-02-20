import React, { FC } from 'react';
import classNames from 'classnames';
import { Resizable, ResizeCallbackData } from 'react-resizable';
import { TableCellProps, cssPrefix, ITheadColumn } from './index';
import { cellActionProps } from './TableUtils'

const TableCell:FC<TableCellProps> = ({
  type,
  column,
  record,
  index,
  onResize,
  onCell={},
}) => {
  const cssClassName = classNames(`${cssPrefix}-cell`, `${cssPrefix}-cell-${type}`);

  const handleResize = (column: ITheadColumn) => (e: React.SyntheticEvent, data: ResizeCallbackData) => {
    e.stopPropagation();
    if (data.size.width < 20) {
      return;
    }
    onResize && onResize(column, data.size.width);
  };

  const renderTh = () => {
    return(
      <th rowSpan={column.rowSpan}
          colSpan={column.colSpan}
          style={{ textAlign: column.align }}>
              <span className={cssClassName}
                    title={typeof column.title ? column.title as string : undefined}>
                {column.title}
              </span>
      </th>
    )
  };

  const renderMap = {
    "header": () => {
      if (column.width && column.resize && !column.fixed && !column.children) {
        return (
          <Resizable width={typeof column.width === 'string' ? parseInt(column.width) : column.width}
                     draggableOpts={{ enableUserSelectHack: false }}
                     onResize={handleResize(column)}
                     height={0}>
            {renderTh()}
          </Resizable>
        )
      }
      return renderTh();
    },
    "body": () => {
      return(
        <td style={{ textAlign: column.align }}
            {...cellActionProps(onCell, column.dataIndex, record, index)}>
          <span className={cssClassName}
                title={column.render ? undefined : record[column.dataIndex] || ''}>
            {column.render ? column.render(record[column.dataIndex], record, index) : record[column.dataIndex] || ''}
          </span>
        </td>
      )
    }
  };

  return renderMap[type]();
};

export default TableCell;
