## Import

```js

```

## Visual options

#### Default

```js
<w-expandable title="I'm expandable">
  <p>with expanded content</p>
</w-expandable>
```

#### Expandable box

```js
<w-expandable title="I'm expandable" box="">
  <p>with expanded content</p>
</w-expandable>
```

#### Expandable box with custom title

This can be used if more control over styling is needed than the `title` prop allows

```js
<w-expandable box="">
  <div slot="title" class="flex flex-row items-center">
    <f-icon-bag16></f-icon-bag16>
    <p class="ml-8 mb-0">This is a title with an icon</p>
  </div>
  <p>with expanded content</p>
</w-expandable>
```

#### With expanded prop

```js
<w-expandable box="" info="" title="I'm expanded by default" expanded="">
  <p>content should be visible</p>
</w-expandable>
```

## Props

<api-table type="elements" component="Expandable" />
