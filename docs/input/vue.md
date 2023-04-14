## Import

#### Use in entire app

```js
import { Forms } from '@warp-ds/vue'
app.use(Forms)
```

#### Use in one component and special imports

```js
import { wInput } from '@warp-ds/vue'
```

## Usage

```js
<w-input label="A label" hint="A hint" v-model="model" />
```

## Props

The props documented below have defaults set or are unique to this component, all typical HTML5 attributes are valid props. See Field for additional props.

<api-table type=vue component="Input"/>

### Masking

To use input masking, first provide the default export from the `cleave.js` package as shown below. Once you've done that, any [options](https://github.com/nosir/cleave.js/blob/master/doc/options.md) from Cleave are valid options on the mask prop.

```js
// in setup, if you only need masking in one component
import { provide } from 'vue'
import Cleave from 'cleave.js'

export default {
  setup() {
    provide('Cleave', Cleave)
  }
}

// or install app-wide by using the provide method on app
app.provide('Cleave', Cleave)
```

## Validation

### Validating Elements

Every form element accepts a prop rules which takes an array of functions. These functions will be run in order until one returns an object. If all functions return true the field is considered valid.

```js
[v => v.trim().length > 5 || { valid: false, hint: 'This should be longer' }]
```
The function has one argument, the current value of the form element — and can either return true or an object with attributes described below

<api-table type=vue component="InputAttributes"/>

### Collecting Validation with wForm

The wForm component registers element descendants at any level, and provides the aggregate validation status.

<api-table type=vue component="InputValidation"/>

### Programatic validation

The wField component can provide access to programatic validation beyond what wForm's props can. For information on which methods are available, see the documentation on Field.

```js
<w-field #control="{ form }">
  <button @click="submit(form)">Submit</button>
</w-field>
```

### Validation and required Form Elements

If the form element is marked required, a special rule will be inserted before any user-defined rules.

The required prop can accept a function that will be used as the required-rule.

