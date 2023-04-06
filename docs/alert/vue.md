## Import

#### Use in entire app

```js
import { Alert } from "@warp-ds/vue";
app.use(Alert);
```

#### Use in one component and special imports

```js
import { wAlert } from "@warp-ds/vue";
```

## Usage

```js
<w-alert v-model="showAlert" info title="I am a title">
  <p>I am an excellent message for the user.</p>
</w-alert>
```

## Props

<api-table vue component="Alert" />
