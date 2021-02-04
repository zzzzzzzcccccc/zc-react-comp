## Button

### Primary

```tsx
import React from 'react';
import { Button } from 'zc-react-comp';

export default () => <Button type="primary">Primary Button</Button>;
```

### Warning

```tsx
import React from 'react';
import { Button } from 'zc-react-comp';

export default () => <Button type="warning">Warning Button</Button>;
```

### Danger

```tsx
import React from 'react';
import { Button } from 'zc-react-comp';

export default () => <Button type="danger">Danger Button</Button>;
```

### Success

```tsx
import React from 'react';
import { Button } from 'zc-react-comp';

export default () => <Button type="success">Success Button</Button>;
```

### Default

```tsx
import React from 'react';
import { Button } from 'zc-react-comp';

export default () => <Button type="default">Default Button</Button>;
```

### Plain

```tsx
import React from 'react';
import { Button } from 'zc-react-comp';

export default () => (
  <Button type="primary" plain>
    Plain Primary Button
  </Button>
);
```

### Size

```tsx
import React from 'react';
import { Button } from 'zc-react-comp';

export default () => (
  <>
    <Button type="primary">Noraml Plain Primary Button</Button>
    <Button type="primary" size="large">
      Large Primary Button
    </Button>
    <Button type="primary" size="small">
      Small Primary Button
    </Button>
  </>
);
```

### Loading

```tsx
import React from 'react';
import { Button } from 'zc-react-comp';

export default () => (
  <>
    <Button type="primary" loading>
      Loading
    </Button>
    <Button type="primary" loading size="large">
      Loading
    </Button>
    <Button type="primary" loading size="small">
      Loading
    </Button>
  </>
);
```

### Block

```tsx
import React from 'react';
import { Button } from 'zc-react-comp';

export default () => (
  <Button type="primary" block onClick={() => console.log(44)}>
    Block Primary Button
  </Button>
);
```

### Disabled

```tsx
import React from 'react';
import { Button } from 'zc-react-comp';

export default () => (
  <Button type="primary" disabled>
    Disabled Primary Button
  </Button>
);
```

## API

| 属性     | 说明            | 类型                                   | 默认值  |
| -------- | --------------- | -------------------------------------- | ------- |
| type     | 类型            | primary/warning/danger/default/success | primary |
| disabled | 是否禁用        | boolean                                | false   |
| block    | 是否 block 按钮 | boolean                                | false   |
| plain    | 是否镂空        | boolean                                | false   |
| size     | 按钮尺寸        | normal/large/small                     | normal  |
| loading  | 是否加载中      | boolean                                | false   |
| onClick  | 点击事件        | function                               |         |
