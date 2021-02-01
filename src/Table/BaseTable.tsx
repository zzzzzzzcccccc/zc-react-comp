import React, { FC, useState } from 'react';
import classNames from 'classnames';
import { BaseTableProps, cssPrefix } from './index';
import { convertToRows } from './tableUitls';
import TableHeader from './TableHeader';
import TableBody from './TableBody';
import './index.less';
import VirtualTableBody from '@/Table/VirtualTableBody';

const BaseTable: FC<BaseTableProps> = ({
  className,
  style,
  columns,
  dataSource,
  size = 'middle',
  rowKey = '',
  scroll,
  bordered = false,
  hideHeader = false,
  onScroll,
  virtualScroll,
}) => {
  const { originColumns, genColumns } = convertToRows(columns);
  const [endColumns, setEndColumns] = useState(
    genColumns.filter(v => v.isEndColumn),
  );

  const handleResize = (index: number, width: number) => {
    let updateEndColumns = [...endColumns];
    updateEndColumns[index].width = width;
    setEndColumns(updateEndColumns);
  };

  const handleBodyScroll = (x: number, y: number) => {
    onScroll && onScroll(x, y);
  };

  return (
    <div
      className={classNames(
        cssPrefix,
        `${cssPrefix}-${size}`,
        bordered && `${cssPrefix}-bordered`,
        className,
      )}
      style={style}
    >
      <div className={`${cssPrefix}-wrapper`}>
        <div className={`${cssPrefix}-content`}>
          <TableHeader
            style={{ display: hideHeader ? 'none' : 'block' }}
            originColumns={originColumns}
            scroll={scroll}
            onResize={handleResize}
            genColumns={endColumns}
          />
          {virtualScroll && virtualScroll.itemHeight ? (
            <VirtualTableBody
              genColumns={endColumns}
              virtualScroll={virtualScroll}
              rowKey={rowKey}
              scroll={scroll}
              onScroll={handleBodyScroll}
              dataSource={dataSource}
            />
          ) : (
            <TableBody
              genColumns={endColumns}
              rowKey={rowKey}
              scroll={scroll}
              onScroll={handleBodyScroll}
              dataSource={dataSource}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default BaseTable;
