### Import

> Use in entire app

```js
import { Badge } from "@warp-ds/vue";
app.use(Badge);
```

> Use in one component and special imports

```js
import { wBadge } from "@warp-ds/badge";
```

### Syntax

```vue-html
<w-badge>Default badge rendered as neutral variant</w-badge>
<w-badge variant="info">Info variant badge</w-badge>
<w-badge variant="price" position="top-left">Price badge with a top-left position</w-badge>
```

### Props

<api-table type=vue component="Badge" />
