## Import

> Use in entire app

```js
import { Breadcrumbs } from "@warp-ds/vue";
app.use(Breadcrumbs);
```

> Use in one component and special imports

```js
import { wBreadcrumbs } from "@warp-ds/vue";
```

## Syntax

```js
<w-breadcrumbs>
  <a href="#/url/1">Page 1</a>
  <a href="#/url/2">Page 2</a>
  <span aria-current="page">Current Page</span>
</w-breadcrumbs>
```

## Props

<api-table type="vue" component="Breadcrumbs" />
