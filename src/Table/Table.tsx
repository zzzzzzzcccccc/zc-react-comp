import React from 'react';
import classNames from 'classnames';
import { TableProps, TableState, cssPrefix, IColumn, ITheadColumn, TableFixedProps } from './index';
import { formatColumns } from './TableUtils'
import TableHeader from './TableHeader';
import TableBody from './TableBody';
import TableFixed from './TableFixed';
import { getScrollbarSize } from '../utils';
import './index.less';

class Table extends React.Component<TableProps, TableState> {
  static defaultProps = {
    size: "middle",
    bordered: false,
  };
  private headerRef = React.createRef<TableHeader>();
  private bodyRef = React.createRef<TableBody>();
  private leftTableRef = React.createRef<TableFixed>();
  private rightTableRef = React.createRef<TableFixed>();
  constructor(props: TableProps) {
    super(props);
    this.state = {
      originColumns: [],
      genColumns: [],
      endColumns: [],
      leftColumns: [],
      rightColumns: [],
      theadHeight: 0,
      scrollBarX: 0,
      scrollBarY: 0,
    };
  }

  getFixedProps = (fixedType: 'left' | 'right'): TableFixedProps => {
    const { leftColumns, rightColumns, theadHeight, scrollBarX, scrollBarY } = this.state;
    const { scroll, dataSource, rowKey } = this.props;
    return {
      fixedType,
      endColumns: fixedType === 'left' ? leftColumns : rightColumns,
      theadHeight,
      scrollBarX,
      scrollBarY,
      scroll,
      dataSource,
      rowKey,
      onScroll: this.handleFixedScroll,
    }
  };

  handleResize = (column: ITheadColumn, width: number) => {
    let endColumns = [...this.state.endColumns];
    for (let i = 0; i < endColumns.length; i++) {
      if (endColumns[i].dataIndex === column.dataIndex) {
        endColumns[i].width = width;
        break;
      }
    }
    this.setState({ endColumns });
  };

  handleFixedScroll = (scrollLeft: number, scrollTop: number) => {
    this.bodyRef && this.bodyRef.current && this.bodyRef.current.setScrollY(scrollTop);
  };

  handleScroll = (scrollLeft: number, scrollTop: number) => {
    const { onScroll } = this.props;
    this.headerRef && this.headerRef.current && this.headerRef.current.setScrollX(scrollLeft);
    this.leftTableRef && this.leftTableRef.current && this.leftTableRef.current.setScrollY(scrollTop);
    this.rightTableRef && this.rightTableRef.current && this.rightTableRef.current.setScrollY(scrollTop);
    onScroll && onScroll(scrollLeft, scrollTop);
  };

  setColumns = (columns: IColumn[]) => {
    const { genColumns, originColumns } = formatColumns(columns);
    const { scrollBarX, scrollBarY } = getScrollbarSize();
    const endColumns = genColumns.filter(v => v.isEndColumn);
    this.setState({
      scrollBarX,
      scrollBarY,
      genColumns,
      originColumns,
      endColumns,
      leftColumns: endColumns.filter(v => v.fixed === 'left'),
      rightColumns: endColumns.filter(v => v.fixed === 'right'),
    });
  };

  componentDidMount() {
    const { columns } = this.props;
    this.setColumns(columns);
  }

  render() {
    const { dataSource, className, style, size, rowKey, bordered, scroll } = this.props;
    const { originColumns, endColumns, leftColumns, rightColumns, theadHeight, scrollBarX, scrollBarY } = this.state;
    return(
      <div className={classNames(cssPrefix, `${cssPrefix}-${size}`, bordered && `${cssPrefix}-border`, className)}
           style={style}>
        <div className={`${cssPrefix}-wrapper`}>
          <TableHeader originColumns={originColumns}
                       ref={this.headerRef}
                       scroll={scroll}
                       onResize={this.handleResize}
                       theadChange={(thead) => this.setState({ theadHeight: thead.offsetHeight })}
                       scrollBarX={scrollBarX}
                       scrollBarY={scrollBarY}
                       endColumns={endColumns} />
          {!dataSource && dataSource.length <= 0 ? <div>null</div> :
          <>
            <TableBody dataSource={dataSource}
                       ref={this.bodyRef}
                       rowKey={rowKey}
                       onScroll={this.handleScroll}
                       scroll={scroll}
                       scrollBarX={scrollBarX}
                       scrollBarY={scrollBarY}
                       endColumns={endColumns} />
            {(leftColumns.length > 0 || rightColumns.length > 0)  && theadHeight > 0 &&
            <div className={`${cssPrefix}-fixed`}>
              {leftColumns.length > 0 && <TableFixed {...this.getFixedProps('left')} ref={this.leftTableRef} />}
              {rightColumns.length > 0 && <TableFixed {...this.getFixedProps('right')} ref={this.rightTableRef} /> }
            </div>}
          </>}
        </div>
      </div>
    );
  }
}

export default Table;
