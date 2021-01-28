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

### 表头嵌套表头固定滚动

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
      fixed: 'left',
      filters: [
        {
          text: 'Joe',
          value: 'Joe',
        },
        {
          text: 'John',
          value: 'John',
        },
      ],
      onFilter: (value, record) => record.name.indexOf(value) === 0,
    },
    {
      title: 'Other',
      children: [
        {
          title: 'Age',
          dataIndex: 'age',
          key: 'age',
          width: 150,
          sorter: (a, b) => a.age - b.age,
        },
        {
          title: 'Address',
          children: [
            {
              title: 'Street',
              dataIndex: 'street',
              key: 'street',
              width: 150,
            },
            {
              title: 'Block',
              children: [
                {
                  title: 'Building',
                  dataIndex: 'building',
                  key: 'building',
                  width: 100,
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
