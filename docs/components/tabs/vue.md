## Import

### Use in entire app
```js
import { Tabs } from '@warp-ds/vue';
app.use(Tabs);
```

### Use in one component and special imports

```js
import { wTabs } from '@warp-ds/vue';
```

## Visual options

### Examples

#### Default
The following example demonstrates how the Tab, Tabs, and TabPanel components can be used to switch between panels.

```js
<Tabs>
  <Tab label="Tab 1" name="one" isActive />
  <Tab label="Tab 2" name="two" />
  <Tab label="Tab 3" name="three" />
</Tabs>
```
#### default with left icons

```js
function Example() {
  const svgicon = (
    <svg
      width="16"
      height="14"
      viewBox="0 0 16 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d= /* string */
        fill="#474445"
      />
    </svg>
  );
  return (
    <Tabs>
      <Tab label="Tab 1" name="one" isActive>
        {svgicon}
      </Tab>
      <Tab label="Tab 2" name="two">
        {svgicon}
      </Tab>
      <Tab label="Tab 3" name="three">
        {svgicon}
      </Tab>
    </Tabs>
  );
}
```
#### default with icons over the label

```js
function Example() {
  const svgicon = (
    <svg
      width="16"
      height="14"
      viewBox="0 0 16 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="/* string */"
        fill="#474445"
      />
    </svg>
  );
  return (
    <Tabs>
      <Tab label="Tab 1" name="one" over isActive>
        {svgicon}
      </Tab>
      <Tab label="Tab 2" name="two" over>
        {svgicon}
      </Tab>
      <Tab label="Tab 3" name="three" over>
        {svgicon}
      </Tab>
    </Tabs>
  );
}
```

#### Contained

```js
<Tabs contained>
  <Tab label="Tab 1" name="one" isActive />
  <Tab label="Tab 2" name="two" />
  <Tab label="Tab 3" name="three" />
</Tabs>
```

#### Contained with left icons

```js
function Example() {
  const svgicon = (
    <svg
      width="16"
      height="14"
      viewBox="0 0 16 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="/* string */"
        fill="#474445"
      />
    </svg>
  );
  return (
    <Tabs contained>
      <Tab label="Tab 1" name="one" isActive>
        {svgicon}
      </Tab>
      <Tab label="Tab 2" name="two">
        {svgicon}
      </Tab>
      <Tab label="Tab 3" name="three">
        {svgicon}
      </Tab>
    </Tabs>
  );
}
```

#### Contained with icons over the label

```js
function Example() {
  const svgicon = (
    <svg
      width="16"
      height="14"
      viewBox="0 0 16 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="/* string */"
        fill="#474445"
      />
    </svg>
  );
  return (
    <Tabs contained>
      <Tab label="Tab 1" name="one" over isActive>
        {svgicon}
      </Tab>
      <Tab label="Tab 2" name="two" over>
        {svgicon}
      </Tab>
      <Tab label="Tab 3" name="three" over>
        {svgicon}
      </Tab>
    </Tabs>
  );
}

```

## Props

<api-table type="react" component="Tabs" />
