## Spinner

### Line

```tsx
import React from 'react';
import { Spinner } from 'zc-react-comp';

export default () => <Spinner />;
```

### Point

```tsx
import React from 'react';
import { Spinner } from 'zc-react-comp';

export default () => <Spinner type="point" />;
```

### Text

```tsx
import React from 'react';
import { Spinner } from 'zc-react-comp';

export default () => <Spinner>Loading</Spinner>;
```

## API

| 属性 | 说明 | 类型 | 默认值 |
| ---- | ---- | ---- | ---- |
| size | 尺寸 | string/number | |
| type | 类型 | line/point | line |
| color | 颜色 | string | #4569d4 |
