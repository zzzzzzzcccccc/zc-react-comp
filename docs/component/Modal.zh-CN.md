## Modal

### Modal

```tsx
import React, { useState } from 'react';
import { Modal, Button, Message } from 'zc-react-comp';

export default () => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <Button onClick={() => setVisible(true)}>Show Modal</Button>
      <Modal
        title="Title"
        visible={visible}
        onClose={() => setVisible(false)}
        onOk={() => Message.show('Ok!')}
      >
        <div style={{ padding: '20px' }}>Show Modal</div>
      </Modal>
    </>
  );
};
```

### Loading

```tsx
import React, { useState } from 'react';
import { Modal, Button, Message } from 'zc-react-comp';

export default () => {
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  return (
    <>
      <Button onClick={() => setVisible(true)}>Show Modal</Button>
      <Modal
        title="Title"
        visible={visible}
        onClose={() => setVisible(false)}
        okText="设置加载"
        onOk={() => setLoading(!loading)}
        loading={loading}
      >
        <div style={{ padding: '20px' }}>
          <Button
            onClick={() => {
              setLoading(false);
              setVisible(false);
            }}
          >
            Close Loading
          </Button>
        </div>
      </Modal>
    </>
  );
};
```

### MoreBlock

```tsx
import React, { useState } from 'react';
import { Modal, Button, Message } from 'zc-react-comp';

export default () => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <Button onClick={() => setVisible(true)}>Show Modal</Button>
      <Modal
        destroyOnClose
        title="Title"
        width={1000}
        visible={visible}
        onClose={() => setVisible(false)}
        onOk={() => Message.show('Ok!')}
      >
        <div style={{ padding: '20px', height: '2000px' }}>Show Modal</div>
      </Modal>
    </>
  );
};
```

More skills for writing demo: https://d.umijs.org/guide/demo-principle
