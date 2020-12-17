## ConfirmModal

### Normal

```tsx
import React from 'react';
import { ConfirmModal, Button } from 'zc-react-comp';

export default () => (
  <Button onClick={() => ConfirmModal.show({ content: 'Confirm Modal' })}>
    Show Confirm Modal
  </Button>
);
```

### Callback

```tsx
import React from 'react';
import { ConfirmModal, Button, Message } from 'zc-react-comp';

export default () => {
  return (
    <Button
      onClick={() =>
        ConfirmModal.show({
          content: 'Confirm Modal',
          onOk: () => Message.show('onOK'),
          onCancel: () => Message.show({ type: 'danger', content: 'onCancel' }),
        })
      }
    >
      Show Confirm Modal
    </Button>
  );
};
```

### Alert

```tsx
import React from 'react';
import { ConfirmModal, Button } from 'zc-react-comp';

export default () => (
  <Button
    onClick={() =>
      ConfirmModal.show({
        content: 'Confirm Modal',
        cancelText: false,
        okText: '我知道了',
      })
    }
  >
    Show Alert Modal
  </Button>
);
```

More skills for writing demo: https://d.umijs.org/guide/demo-principle
