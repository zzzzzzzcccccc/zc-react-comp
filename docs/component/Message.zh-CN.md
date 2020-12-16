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

More skills for writing demo: https://d.umijs.org/guide/demo-principle
