## Tag

### Style

```tsx
import React from 'react';
import { Tag } from 'zc-react-comp';

export default () => (
  <>
    <Tag>Primary主要</Tag>
    <Tag type="warning">Warning警告</Tag>
    <Tag type="danger">Danger危险</Tag>
    <Tag type="default">Default信息</Tag>
    <Tag type="success">Success成功</Tag>
  </>
);
```

### Plain

```tsx
import React from 'react';
import { Tag } from 'zc-react-comp';

export default () => (
  <>
    <Tag plain>Primary主要</Tag>
    <Tag type="warning" plain>
      Warning警告
    </Tag>
    <Tag type="danger" plain>
      Danger危险
    </Tag>
    <Tag type="default" plain>
      Default信息
    </Tag>
    <Tag type="success" plain>
      Success成功
    </Tag>
  </>
);
```

### Size

```tsx
import React from 'react';
import { Tag } from 'zc-react-comp';

export default () => (
  <>
    <Tag>Primary主要</Tag>
    <Tag size="small">Primary主要</Tag>
    <Tag size="large">Primary主要</Tag>
  </>
);
```

### Close

```tsx
import React from 'react';
import { Tag, Message } from 'zc-react-comp';

export default () => (
  <>
    <Tag onClose={() => Message.show('closed')}>Primary主要</Tag>
    <Tag onClose={() => Message.show('closed')} plain>
      Primary主要
    </Tag>
    <Tag onClose={() => Message.show('closed')} size="large" plain>
      Primary主要
    </Tag>
    <Tag onClose={() => Message.show('closed')} size="small" plain>
      Primary主要
    </Tag>
  </>
);
```
