## Collapse

### 基本

```tsx
import React from 'react';
import { Collapse, CollapseItem } from 'zc-react-comp';

export default () => (
  <Collapse>
    <CollapseItem value="1" title="折叠1">
      内容1
    </CollapseItem>
    <CollapseItem value="2" title="折叠2">
      内容2
    </CollapseItem>
    <CollapseItem value="3" title="折叠3">
      内容3
    </CollapseItem>
    <CollapseItem value="4" title="折叠4">
      内容4
    </CollapseItem>
  </Collapse>
);
```

### 手风情模式

```tsx
import React from 'react';
import { Collapse, CollapseItem } from 'zc-react-comp';

export default () => (
  <Collapse multiple={false}>
    <CollapseItem value="1" title="折叠1">
      内容1
    </CollapseItem>
    <CollapseItem value="2" title="折叠2">
      内容2
    </CollapseItem>
    <CollapseItem value="3" title="折叠3">
      内容3
    </CollapseItem>
    <CollapseItem value="4" title="折叠4">
      内容4
    </CollapseItem>
  </Collapse>
);
```

### 禁用

```tsx
import React from 'react';
import { Collapse, CollapseItem } from 'zc-react-comp';

export default () => (
  <Collapse defaultValue={['1', '2']}>
    <CollapseItem value="1" title="折叠1" disabled>
      内容1
    </CollapseItem>
    <CollapseItem value="2" title="折叠2" disabled>
      内容2
    </CollapseItem>
    <CollapseItem value="3" title="折叠3" disabled>
      内容3
    </CollapseItem>
    <CollapseItem value="4" title="折叠4">
      内容4
    </CollapseItem>
  </Collapse>
);
```

## API

### Collapse

| 属性         | 说明             | 类型               | 默认值    |
| ------------ | ---------------- | ------------------ | --------- |
| multiple     | 是否多选         | boolean            | true      |
| defaultValue | 默认展开值       | any[]              | undefined |
| onChange     | 折叠变化触发函数 | function(val: any) |           |

### CollapseItem

| 属性     | 说明     | 类型                                                        | 默认值    |
| -------- | -------- | ----------------------------------------------------------- | --------- |
| title    | 标题     | React.ReactNode                                             |           |
| value    | 唯一标识 | any                                                         | undefined |
| disabled | 是否禁用 | boolean                                                     | false     |
| onToggle | 切换事件 | function(collapsed: boolean, val: any, e: React.MouseEvent) |           |
