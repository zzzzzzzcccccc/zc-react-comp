## SelectBox

### 基本用法

```tsx
import React from 'react';
import { SelectBox, SelectBoxItem } from 'zc-react-comp';

export default () => (
  <SelectBox>
    <SelectBoxItem value={'A'}>选项A</SelectBoxItem>
    <SelectBoxItem value={'B'}>选项B</SelectBoxItem>
    <SelectBoxItem value={'C'}>选项C</SelectBoxItem>
    <SelectBoxItem value={'D'}>选项D</SelectBoxItem>
    <SelectBoxItem value={'E'}>选项E</SelectBoxItem>
  </SelectBox>
);
```

### 小

```tsx
import React from 'react';
import { SelectBox, SelectBoxItem } from 'zc-react-comp';

export default () => (
  <SelectBox size="small">
    <SelectBoxItem value={'A'}>选项A</SelectBoxItem>
    <SelectBoxItem value={'B'}>选项B</SelectBoxItem>
    <SelectBoxItem value={'C'}>选项C</SelectBoxItem>
    <SelectBoxItem value={'D'}>选项D</SelectBoxItem>
    <SelectBoxItem value={'E'}>选项E</SelectBoxItem>
  </SelectBox>
);
```

### 大

```tsx
import React from 'react';
import { SelectBox, SelectBoxItem } from 'zc-react-comp';

export default () => (
  <SelectBox size="large">
    <SelectBoxItem value={'A'}>选项A</SelectBoxItem>
    <SelectBoxItem value={'B'}>选项B</SelectBoxItem>
    <SelectBoxItem value={'C'}>选项C</SelectBoxItem>
    <SelectBoxItem value={'D'}>选项D</SelectBoxItem>
    <SelectBoxItem value={'E'}>选项E</SelectBoxItem>
  </SelectBox>
);
```

### 全局禁用

```tsx
import React from 'react';
import { SelectBox, SelectBoxItem } from 'zc-react-comp';

export default () => (
  <SelectBox disabled>
    <SelectBoxItem value={'A'}>选项A</SelectBoxItem>
    <SelectBoxItem value={'B'}>选项B</SelectBoxItem>
    <SelectBoxItem value={'C'}>选项C</SelectBoxItem>
    <SelectBoxItem value={'D'}>选项D</SelectBoxItem>
    <SelectBoxItem value={'E'}>选项E</SelectBoxItem>
  </SelectBox>
);
```

### 部分禁用

```tsx
import React from 'react';
import { SelectBox, SelectBoxItem } from 'zc-react-comp';

export default () => (
  <SelectBox>
    <SelectBoxItem value={'A'} disabled>
      选项A
    </SelectBoxItem>
    <SelectBoxItem value={'B'}>选项B</SelectBoxItem>
    <SelectBoxItem value={'C'}>选项C</SelectBoxItem>
    <SelectBoxItem value={'D'} disabled>
      选项D
    </SelectBoxItem>
    <SelectBoxItem value={'E'}>选项E</SelectBoxItem>
  </SelectBox>
);
```

### 多选模式

```tsx
import React from 'react';
import { SelectBox, SelectBoxItem } from 'zc-react-comp';

export default () => (
  <SelectBox multiple>
    <SelectBoxItem value={'A'}>选项A</SelectBoxItem>
    <SelectBoxItem value={'B'}>选项B</SelectBoxItem>
    <SelectBoxItem value={'C'}>选项C</SelectBoxItem>
    <SelectBoxItem value={'D'}>选项D</SelectBoxItem>
    <SelectBoxItem value={'E'}>选项E</SelectBoxItem>
  </SelectBox>
);
```

### 默认值

```tsx
import React from 'react';
import { SelectBox, SelectBoxItem } from 'zc-react-comp';

export default () => (
  <SelectBox
    multiple
    defaultValue={['A', 'E']}
    onChange={val => console.log(val)}
  >
    <SelectBoxItem value={'A'}>选项A</SelectBoxItem>
    <SelectBoxItem value={'B'}>选项B</SelectBoxItem>
    <SelectBoxItem value={'C'}>选项C</SelectBoxItem>
    <SelectBoxItem value={'D'}>选项D</SelectBoxItem>
    <SelectBoxItem value={'E'}>选项E</SelectBoxItem>
  </SelectBox>
);
```

## API

### SelectBox

| 属性 | 说明 | 类型 | 默认值 |
| ---- | ---- | ---- | ---- |
| multiple | 是否多选 | boolean | false |
| disabled | 是否禁用 | boolean | false |
| size | 尺寸 | normal/large/small | normal |
| onChange | 值变化事件 | function(val:any) | |
| defaultValue | 初始化默认值 | any | undefined |

### SelectBoxItem

| 属性 | 说明 | 类型 | 默认值 |
| ---- | ---- | ---- | ---- |
| disabled | 是否禁用 | boolean | false |
| value | 值 | any | undefined |
| onClick | 点击事件 | function(value: any, e: React.MouseEvent) | |
