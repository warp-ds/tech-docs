## Import

#### Use in entire app

```js
import { Expandable } from "@warp-ds/vue";
app.use(Expandable);
```

#### Use in one component and special imports

```js
import { wExpandable, wExpandTransition, wWillExpand } from "@warp-ds/vue";
```

## Usage

```js
<w-expandable title="I am expandable">
  <p>Hello there I am some informative content</p>
</w-expandable>
```

## Visual options

#### Default

```js
<w-expandable title="I am expandable">
  <p>Hello there I am some informative content</p>
</w-expandable>
```

#### Expandable box

```js
<w-expandable title="I am expandable" box>
  <p>Hello there I am some informative content</p>
</w-expandable>
```

#### Expandable animated box

```js
<w-expandable title="I am expandable" box animated>
  <p>Hello there I am some informative content</p>
</w-expandable>
```

## Animation

#### You should only use this feature under careful supervision of your friendly local UXer.

The w-expandable component can be animated using the animated prop.

```js
<w-expandable animated title="I am expandable">
  <p>Hello there I am some informative content</p>
</w-expandable>
```

The wExpandTransition component can wrap one or more wWillExpand components.

```js
<w-expand-transition group>
  <w-will-expand v-if="expanded">Hello</w-will-expand>
  <w-will-expand v-else>Hi</w-will-expand>
<w-expand-transition>
```

## Props

<api-table type="vue" component="Expandable" />
