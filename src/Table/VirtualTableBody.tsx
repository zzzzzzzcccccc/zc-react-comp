import React, { FC, useState, useRef, useEffect, useContext } from 'react';
import { BaseVirtualTableBodyProps, cssPrefix } from './index';
import classNames from 'classnames';
import { GridOnScrollProps, VariableSizeGrid as Grid } from 'react-window';
import ResizeObserver from 'rc-resize-observer';
import TableCell from './TableCell';
import { BaseTableContext } from './BaseTable';

const VirtualTableBody: FC<BaseVirtualTableBodyProps> = ({
  virtualScroll,
  scroll,
  onScroll,
  genColumns,
  dataSource,
}) => {
  const context = useContext(BaseTableContext)
  const [tableWidth, setTableWidth] = useState(0);
  const notWidthColumnCount = genColumns!.filter(({ width }) => !width).length;
  const mergedColumns = genColumns!.map(column => {
    if (column.width) {
      return column;
    }

    return {
      ...column,
      width: Math.floor(tableWidth / (genColumns.length - notWidthColumnCount)),
    };
  });
  const gridRef = useRef<any>();

  const resetVirtualGrid = () => {
    gridRef.current.resetAfterIndices({
      columnIndex: 0,
      shouldForceUpdate: false,
    });
  };

  useEffect(() => {
    resetVirtualGrid();
  }, [tableWidth]);

  const handleScroll = (props: GridOnScrollProps) => {
    const { scrollLeft, scrollTop } = props;
    context && context.onBodyScroll && context.onBodyScroll(scrollLeft, scrollTop);
    onScroll && onScroll(scrollLeft, scrollTop);
  };

  return (
    <ResizeObserver onResize={({ width }) => setTableWidth(width)}>
      <div className={classNames(`${cssPrefix}-body`)}>
        <Grid
          ref={gridRef}
          columnWidth={index => mergedColumns[index].width}
          rowHeight={() => virtualScroll.itemHeight}
          columnCount={mergedColumns.length}
          className={`${cssPrefix}-body-virtual`}
          height={parseFloat(scroll && (scroll.y as string))}
          rowCount={dataSource.length}
          onScroll={handleScroll}
          width={tableWidth}
        >
          {({ columnIndex, rowIndex, style }) => {
            return (
              <div
                style={style}
                className={classNames(
                  `${cssPrefix}-virtual-cell`,
                  columnIndex === mergedColumns.length - 1 &&
                    `${cssPrefix}-virtual-cell-last`,
                )}
              >
                <TableCell
                  column={mergedColumns[columnIndex]}
                  renderType="body"
                  index={rowIndex}
                  record={dataSource[rowIndex]}
                />
              </div>
            );
          }}
        </Grid>
      </div>
    </ResizeObserver>
  );
};

export default VirtualTableBody;
