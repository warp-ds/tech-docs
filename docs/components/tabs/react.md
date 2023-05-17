## Import

```js
import { Tab, Tabs, TabPanel } from '@warp-ds/react';
```

## Visual options

### Examples

#### Default
The following example demonstrates how the Tab, Tabs, and TabPanel components can be used to switch between panels.

```js
<>
  <Tabs>
    <Tab label="Tab 1" name="one" isActive />
    <Tab label="Tab 2" name="two" />
    <Tab label="Tab 3" name="three" />
  </Tabs>
  <div>
    <TabPanel name="one">Tab one selected!</TabPanel>
    <TabPanel name="two">Tab two selected!</TabPanel>
    <TabPanel name="three">Tab three selected!</TabPanel>
  </div>
</>
```
#### Tabs with left icons

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
        fillRule="evenodd"
        clipRule="evenodd"
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
#### Tabs with icons over the label

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
        fillRule="evenodd"
        clipRule="evenodd"
        d= /* ... */
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

## Props
### Tabs
<api-table type="react" component="Tabs" />
### Tab
<api-table type="react" component="Tab" />
