## SubTitle

### Line

```tsx
import React from 'react';
import { SubTitle } from 'zc-react-comp';

export default () => <SubTitle>我是副标题</SubTitle>;
```

### Point

```tsx
import React from 'react';
import { SubTitle } from 'zc-react-comp';

export default () => <SubTitle type="point">我是副标题</SubTitle>;
```

### ShowBorder

```tsx
import React from 'react';
import { SubTitle } from 'zc-react-comp';

export default () => <SubTitle border>我是副标题</SubTitle>;
```

### ClearType

```tsx
import React from 'react';
import { SubTitle } from 'zc-react-comp';

export default () => <SubTitle type="false">我是副标题</SubTitle>;
```

### Shadow

```tsx
import React from 'react';
import { SubTitle } from 'zc-react-comp';

export default () => <SubTitle shadow>我是副标题</SubTitle>;
```

## API

| 属性    | 说明             | 类型       | 默认值 |
| ------- | ---------------- | ---------- | ------ |
| type    | 类型             | line/point | line   |
| shadow  | 是否显示阴影     | boolean    | false  |
| border  | 是否显示底部边线 | boolean    | false  |
| onClick | 点击事件         | function   |        |
