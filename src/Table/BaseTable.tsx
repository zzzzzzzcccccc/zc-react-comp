import React, { FC, useState } from 'react';
import classNames from 'classnames';
import { BaseTableProps, cssPrefix, IBaseTableContext } from './index';
import { convertToRows, BaseTableContext } from './tableUitls';
import TableHeader from './TableHeader';
import TableBody from './TableBody';
import VirtualTableBody from './VirtualTableBody';
import FixedBaseTable from './FixedBaseTable';
import './index.less';

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
  onResize,
  virtualScroll,
}) => {
  const context: IBaseTableContext = {}
  const { originColumns, genColumns } = convertToRows(columns);
  const [endColumns, setEndColumns] = useState(genColumns.filter(v => v.isEndColumn));

  const handleResize = (index: number, width: number) => {
    let updateEndColumns = [...endColumns];
    updateEndColumns[index].width = width;
    setEndColumns(updateEndColumns);
    onResize && onResize(updateEndColumns[index].dataIndex, width);
  };

  const handleBodyScroll = (x: number, y: number) => {
    setTableScroll(x, y);
    onScroll && onScroll(x, y);
  };

  const setTableScroll = (x: number, y: number) => {
    if (context.headerRefCurrent) {
      context.headerRefCurrent.scrollLeft = x;
    }
    if (context.leftFixedBodyRefCurrent) {
      context.leftFixedBodyRefCurrent.scrollTop = y;
    }
    if (context.rightFixedBodyRefCurrent) {
      context.rightFixedBodyRefCurrent.scrollTop = y;
    }
  };

  return (
    <BaseTableContext.Provider value={context}>
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
            <FixedBaseTable hideHeader={hideHeader} rowKey={rowKey} fixed="left" scroll={scroll} genColumns={genColumns} dataSource={dataSource} />
            <FixedBaseTable hideHeader={hideHeader} rowKey={rowKey} fixed="right" scroll={scroll} genColumns={genColumns} dataSource={dataSource} />
          </div>
        </div>
      </div>
    </BaseTableContext.Provider>
  );
};

export default BaseTable;
