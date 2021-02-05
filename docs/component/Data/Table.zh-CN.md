## Table

### 基础

```tsx
import React from 'react';
import { Table } from 'zc-react-comp';

export default () => {
  const dataSource = [
    { id: 1, name: '张三1', age: 21, sex: '男' },
    { id: 2, name: '张三2', age: 22, sex: '女' },
    { id: 3, name: '张三3', age: 23, sex: '男' },
    { id: 4, name: '张三4', age: 24, sex: '女' },
    { id: 5, name: '张三5', age: 25, sex: '男' },
  ];
  const columns = [
    { title: '姓名', dataIndex: 'name', width: 100 },
    { title: '性别', dataIndex: 'sex' },
    { title: '年龄', dataIndex: 'age', width: 100 },
  ];
  return <Table rowKey="id" dataSource={dataSource} columns={columns} />;
};
```

### 小尺寸

```tsx
import React from 'react';
import { Table } from 'zc-react-comp';

export default () => {
  const dataSource = [
    { id: 1, name: '张三1', age: 21, sex: '男' },
    { id: 2, name: '张三2', age: 22, sex: '女' },
    { id: 3, name: '张三3', age: 23, sex: '男' },
    { id: 4, name: '张三4', age: 24, sex: '女' },
    { id: 5, name: '张三5', age: 25, sex: '男' },
  ];
  const columns = [
    { title: '姓名', dataIndex: 'name', width: 100 },
    { title: '性别', dataIndex: 'sex' },
    { title: '年龄', dataIndex: 'age', width: 100 },
  ];
  return (
    <Table rowKey="id" size="small" dataSource={dataSource} columns={columns} />
  );
};
```

### 大尺寸

```tsx
import React from 'react';
import { Table } from 'zc-react-comp';

export default () => {
  const dataSource = [
    { id: 1, name: '张三1', age: 21, sex: '男' },
    { id: 2, name: '张三2', age: 22, sex: '女' },
    { id: 3, name: '张三3', age: 23, sex: '男' },
    { id: 4, name: '张三4', age: 24, sex: '女' },
    { id: 5, name: '张三5', age: 25, sex: '男' },
  ];
  const columns = [
    { title: '姓名', dataIndex: 'name', width: 100 },
    { title: '性别', dataIndex: 'sex' },
    { title: '年龄', dataIndex: 'age', width: 100 },
  ];
  return (
    <Table rowKey="id" size="large" dataSource={dataSource} columns={columns} />
  );
};
```

### 隐藏头部

```tsx
import React from 'react';
import { Table } from 'zc-react-comp';

export default () => {
  const dataSource = [
    { id: 1, name: '张三1', age: 21, sex: '男' },
    { id: 2, name: '张三2', age: 22, sex: '女' },
    { id: 3, name: '张三3', age: 23, sex: '男' },
    { id: 4, name: '张三4', age: 24, sex: '女' },
    { id: 5, name: '张三5', age: 25, sex: '男' },
  ];
  const columns = [
    { title: '姓名', dataIndex: 'name', width: 100 },
    { title: '性别', dataIndex: 'sex' },
    { title: '年龄', dataIndex: 'age', width: 100 },
  ];
  return (
    <Table hideHeader rowKey="id" dataSource={dataSource} columns={columns} />
  );
};
```

### 表头嵌套表头固定滚动某些列可以拖动宽度

```tsx
import React from 'react';
import { Table } from 'zc-react-comp';

export default () => {
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      width: 100,
      ellipsis: true,
      fixed: 'left'
    },
    {
      title: 'Other',
      children: [
        {
          title: 'Age',
          dataIndex: 'age',
          key: 'age',
          width: 150,
          resize: true,
        },
        {
          title: 'Address',
          children: [
            {
              title: 'Street',
              dataIndex: 'street',
              key: 'street',
              width: 150,
              resize: true,
            },
            {
              title: 'Block',
              children: [
                {
                  title: 'Building',
                  dataIndex: 'building',
                  key: 'building',
                  width: 100,
                  resize: true,
                },
                {
                  title: 'Door No.',
                  dataIndex: 'number',
                  key: 'number',
                  width: 100,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      title: 'Company',
      children: [
        {
          title: 'Company Address',
          dataIndex: 'companyAddress',
          key: 'companyAddress',
        },
        {
          title: 'Company Name',
          dataIndex: 'companyName',
          key: 'companyName',
        },
      ],
    },
    {
      width: 100,
      title: 'Gender',
      dataIndex: 'gender',
      key: 'gender',
      fixed: 'right',
    },
  ];

  const data = [];
  for (let i = 0; i < 100; i++) {
    data.push({
      key: i,
      name: 'John Brown',
      age: i + 1,
      street: 'Lake Park',
      building: 'C',
      number: 2035,
      companyAddress: 'Lake Street 42',
      companyName: 'SoftLake Co',
      gender: 'M',
    });
  }
  return (
    <Table
      dataSource={data}
      bordered
      columns={columns}
      scroll={{ x: '1400px', y: '500px' }}
      rowKey="key"
    />
  );
};
```

### 虚拟滚动

```tsx
import React from 'react';
import { Table } from 'zc-react-comp';

export default () => {
  let dataSource = [];
  for (let i = 0; i < 10000; i++) {
    dataSource = [
      ...dataSource,
      {
        id: i + 1,
        name: `张三${i + 1}`,
        sex: 'MMMM',
        age: Math.floor(Math.random() * 1000),
        a: i + 1,
        b: i + 2,
        c: i + 3,
        d: i + 4,
        e: i + 5,
      },
    ];
  }
  const columns = [
    { title: '姓名', dataIndex: 'name', width: 100, ellipsis: true },
    { title: '性别', dataIndex: 'sex', width: 400, ellipsis: true },
    { title: 'a', dataIndex: 'a', width: 400, ellipsis: true },
    { title: 'b', dataIndex: 'b', width: 400, ellipsis: true },
    { title: 'c', dataIndex: 'c', width: 400, ellipsis: true },
    { title: 'd', dataIndex: 'd', width: 400, ellipsis: true },
    { title: '年龄', dataIndex: 'age', width: 100, ellipsis: true },
  ];
  return (
    <Table
      rowKey="id"
      dataSource={dataSource}
      bordered
      scroll={{ y: 500, x: '100%' }}
      virtualScroll={{ itemHeight: 36 }}
      columns={columns}
    />
  );
};
```

## API

### Table

| 属性          | 说明                                           | 类型                                      | 默认值         |
| ------------- | ---------------------------------------------- | ----------------------------------------- | -------------- |
| dataSource    | 源数据                                         | object[]                                  | []             |
| columns       | [表头配置](/zh-CN/component/data/table?anchor=api#column) | IColumn[]                                 | []             |
| rowKey        | 唯一标识                                       | string                                    | 若不传则为索引 |
| size          | 尺寸                                           | small/middle/large                        | middle         |
| scroll        | 表格滚动                                       | {x: 1000/1000px/100%, y: 1000/100px/50% } |                |
| bordered      | 是否显示边框                                   | boolean                                   | false          |
| hideHeader    | 是否隐藏头部                                   | boolean                                   | false          |
| onScroll      | 内容滚动监听                                   | (x, y) => void                            |                |
| virtualScroll | 虚拟滚动配置(需要配合 scroll.y)                | { itemHeight: number }                    |                |

### Column

| 属性      | 说明                             | 类型                                    | 默认值 |
| --------- | -------------------------------- | --------------------------------------- | ------ |
| title     | 文案                             | React.ReactNode                         |        |
| dataIndex | 字段索引                         | string                                  |        |
| width     | 宽度                             | number                                  |        |
| children  | 子集                             | IColumn[]                               |        |
| render    | 自定义渲染内容                   | (val, record, index) => React.ReactNode |        |
| resize    | 是否可以调整宽度(必须设置 width) | boolean                                 | false  |
| fixed     | 列冻结                        | left/right                             | |
