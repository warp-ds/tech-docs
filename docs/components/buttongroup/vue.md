## Import

> Use in entire app

```js
import { ButtonGroup } from "@warp-ds/vue";
app.use(ButtonGroup);
```

> Use in one component and special imports

```js
import { wButtonGroup, wButtonGroupItem } from "@warp-ds/vue";
```

## Syntax

```js
  <w-button-group>
    <w-button-group-item :selected="props.selected">
      <w-clickable label radio v-model="radioModel" value="foo">Foo</w-clickable>
    </w-button-group-item>
    <w-button-group-item :selected="active('Radio') && radioModel === 'bar'">
      <w-clickable label radio v-model="radioModel" value="bar">Bar</w-clickable>
    </w-button-group-item>
    <w-button-group-item :selected="active('Radio') && radioModel === 'baz'">
      <w-clickable label radio v-model="radioModel" value="baz">Baz</w-clickable>
    </w-button-group-item>
  </w-button-group>
```

## Props

### ButtonGroup props

<api-table type="vue" component="ButtonGroup" />

### ButtonGroupItem props

<api-table type="vue" component="ButtonGroupItem" />

