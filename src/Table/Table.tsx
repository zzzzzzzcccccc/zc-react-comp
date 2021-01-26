import React, { FC, useEffect, useState } from 'react';
import classNames from 'classnames';
import Table, { ColumnProps } from 'antd/es/table';
import TableResizeableTitle from './TableResizeableTitle';
import { BaseTableProps } from './index';
import 'antd/es/table/style/index.less';
import './index.less';
import { ResizeCallbackData } from 'react-resizable';

const BaseTable: FC<BaseTableProps> = props => {
  const [rColumns, setRColumns] = useState(props.columns || []);

  const handleResize = (
    index: number,
    e: React.SyntheticEvent,
    data: ResizeCallbackData,
  ) => {
    let nextColumns = [...rColumns];
    nextColumns[index] = { ...nextColumns[index], width: data.size.width };
    setRColumns(nextColumns);
  };

  useEffect(() => {
    setRColumns([...props.columns]);
  }, [props.columns]);

  let formatColumns = [...rColumns];
  if (!!props.titleResizeable) {
    formatColumns = [...rColumns].map((col, index) => {
      return {
        ...col,
        onHeaderCell: (column: ColumnProps<object>) => ({
          width: column.width,
          onResize: (e: React.SyntheticEvent, data: ResizeCallbackData) =>
            handleResize(index, e, data),
        }),
      };
    });
  }

  return (
    <div
      className={classNames('r-zc-table', props.className)}
      style={props.style}
    >
      <Table
        {...props}
        pagination={false}
        columns={formatColumns}
        components={
          !!props.titleResizeable
            ? { header: { cell: TableResizeableTitle } }
            : undefined
        }
      />
    </div>
  );
};

export default BaseTable;
