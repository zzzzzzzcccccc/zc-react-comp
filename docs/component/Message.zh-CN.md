## Message

### Primary

```tsx
import React from 'react';
import { Button, Message } from 'zc-react-comp';

export default () => (
  <Button onClick={() => Message.show('primary message')}>
    Show Primary Message
  </Button>
);
```

### Warning

```tsx
import React from 'react';
import { Button, Message } from 'zc-react-comp';

export default () => (
  <Button
    type="warning"
    onClick={() =>
      Message.show({ type: 'warning', content: 'warning message' })
    }
  >
    Show Warning Message
  </Button>
);
```

### Danger

```tsx
import React from 'react';
import { Button, Message } from 'zc-react-comp';

export default () => (
  <Button
    type="danger"
    onClick={() => Message.show({ type: 'danger', content: 'danger message' })}
  >
    Show Danger Message
  </Button>
);
```

### Success

```tsx
import React from 'react';
import { Button, Message } from 'zc-react-comp';

export default () => (
  <Button
    type="success"
    onClick={() =>
      Message.show({ type: 'success', content: 'success message' })
    }
  >
    Show Success Message
  </Button>
);
```

### Default

```tsx
import React from 'react';
import { Button, Message } from 'zc-react-comp';

export default () => (
  <Button
    type="default"
    onClick={() =>
      Message.show({ type: 'default', content: 'default message' })
    }
  >
    Show Default Message
  </Button>
);
```

### Primary

```tsx
import React from 'react';
import { Button, Message } from 'zc-react-comp';

export default () => (
  <Button
    onClick={() => Message.show({ plain: true, content: 'plain message' })}
    plain
  >
    Show Plain Primary Message
  </Button>
);
```

### SetDuration

```tsx
import React from 'react';
import { Button, Message } from 'zc-react-comp';

export default () => (
  <Button
    onClick={() =>
      Message.show({
        type: 'primary',
        content: 'This is 10s remove',
        duration: 10000,
      })
    }
  >
    Show SetDuration Message
  </Button>
);
```

## API

| 属性 | 说明 | 类型 | 默认值 |
| ---- | ---- | ---- | ---- |
| top | 距离顶部距离 | string/number | 8px |
| zIndex | 层级 | number | 1024 |
| duration | 显示持续时间(ms) | number | 3000 |
| type | 类型 | primary/warning/danger/default/success | primary |
| content | 内容 | React.ReactNode | |
| loading | 是否加载中 | boolean | false |
| plain | 是否镂空 | boolean | false |

