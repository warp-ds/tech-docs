> Typography

# Font Variant Numeric

Utilities for controlling the variant of numbers.

## Quick reference

<qr-table />

::: warning `normal-nums` not yet supported
This class is not yet supported! If you need this, reach out to us on [#nmp-warp-design-system](https://sch-chat.slack.com/archives/C04P0GYTHPV).
:::

## Basic usage

### Applying numeric variants
Use the `tabular-nums` to activating the set of figures where numbers are all the same size, allowing them to be easily aligned like in tables. (The font in use has to have support for this, like `font-mono`). !TODO: Discuss the support for this in warp. We might to have to theme this somehow, these fonts might look too different to some of the brand fonts and perhaps need different weights to match them better to the brand font.)

<container>
  <span class="pd-font-medium pd-text-sm pd-text-slate-500 pd-font-mono dark:pd-text-slate-400">with tabular-nums + pd-font-mono</span>
  <table class="border-collapse table! w-full border-y pd-border-slate-400 dark:pd-border-slate-500 pd-bg-white dark:pd-bg-slate-800 pd-text-sm">
    <thead class="pd-bg-slate-50 dark:pd-bg-slate-700">
      <tr>
        <th class="border first:border-l-0 last:border-r-0 pd-border-slate-300 dark:pd-border-slate-600 pd-font-semibold px-16 py-8 pd-text-slate-900 dark:pd-text-slate-200 text-right">#</th>
        <th class="border first:border-l-0 last:border-r-0 pd-border-slate-300 dark:pd-border-slate-600 pd-font-semibold px-16 py-8 pd-text-slate-900 dark:pd-text-slate-200 text-left">Scientist</th>
        <th class="border first:border-l-0 last:border-r-0 pd-border-slate-300 dark:pd-border-slate-600 pd-font-semibold px-16 py-8 pd-text-slate-900 dark:pd-text-slate-200 !text-right"># Coffee</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="border first:border-l-0 last:border-r-0 pd-border-slate-300 dark:pd-border-slate-700 px-4 py-4 pd-text-slate-500 dark:pd-text-slate-400">1</td>
        <td class="border first:border-l-0 last:border-r-0 pd-border-slate-300 dark:pd-border-slate-700 px-4 py-4 pd-text-slate-500 dark:pd-text-slate-400">Justina Matter</td>
        <td class="border first:border-l-0 last:border-r-0 pd-border-slate-300 dark:pd-border-slate-700 px-4 py-4 pd-text-slate-500 dark:pd-text-slate-400 text-right tabular-nums pd-font-mono">1 111 111</td>
      </tr>
      <tr>
        <td class="border first:border-l-0 last:border-r-0 pd-border-slate-300 dark:pd-border-slate-700 px-4 py-4 pd-text-slate-500 dark:pd-text-slate-400">2</td>
        <td class="border first:border-l-0 last:border-r-0 pd-border-slate-300 dark:pd-border-slate-700 px-4 py-4 pd-text-slate-500 dark:pd-text-slate-400">Narve Hoops</td>
        <td class="border first:border-l-0 last:border-r-0 pd-border-slate-300 dark:pd-border-slate-700 px-4 py-4 pd-text-slate-500 dark:pd-text-slate-400 text-right tabular-nums pd-font-mono">4 444 444</td>
      </tr>
      <tr>
        <td class="border first:border-l-0 last:border-r-0 pd-border-slate-300 dark:pd-border-slate-700 px-4 py-4 pd-text-slate-500 dark:pd-text-slate-400">3</td>
        <td class="border first:border-l-0 last:border-r-0 pd-border-slate-300 dark:pd-border-slate-700 px-4 py-4 pd-text-slate-500 dark:pd-text-slate-400">Dagny Calamity</td>
        <td class="border first:border-l-0 last:border-r-0 pd-border-slate-300 dark:pd-border-slate-700 px-4 py-4 pd-text-slate-500 dark:pd-text-slate-400 text-right tabular-nums pd-font-mono">88 888 888</td>
      </tr>
    </tbody>
  </table>
  <span class="pd-font-medium pd-text-sm pd-text-slate-500 pd-font-mono dark:pd-text-slate-400">Without tabular-nums</span>
  <table class="border-collapse table! w-full border-y pd-border-slate-400 dark:pd-border-slate-500 pd-bg-white dark:pd-bg-slate-800 pd-text-sm">
    <thead class="pd-bg-slate-50 dark:pd-bg-slate-700">
      <tr>
        <th class="border first:border-l-0 last:border-r-0 pd-border-slate-300 dark:pd-border-slate-600 pd-font-semibold px-16 py-8 pd-text-slate-900 dark:pd-text-slate-200 text-right">#</th>
        <th class="border first:border-l-0 last:border-r-0 pd-border-slate-300 dark:pd-border-slate-600 pd-font-semibold px-16 py-8 pd-text-slate-900 dark:pd-text-slate-200 text-left">Scientist</th>
        <th class="border first:border-l-0 last:border-r-0 pd-border-slate-300 dark:pd-border-slate-600 pd-font-semibold px-16 py-8 pd-text-slate-900 dark:pd-text-slate-200 !text-right"># Coffee</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="border first:border-l-0 last:border-r-0 pd-border-slate-300 dark:pd-border-slate-700 px-4 py-4 pd-text-slate-500 dark:pd-text-slate-400">1</td>
        <td class="border first:border-l-0 last:border-r-0 pd-border-slate-300 dark:pd-border-slate-700 px-4 py-4 pd-text-slate-500 dark:pd-text-slate-400">Justina Matter</td>
        <td class="border first:border-l-0 last:border-r-0 pd-border-slate-300 dark:pd-border-slate-700 px-4 py-4 pd-text-slate-500 dark:pd-text-slate-400 text-right">1 111 111</td>
      </tr>
      <tr>
        <td class="border first:border-l-0 last:border-r-0 pd-border-slate-300 dark:pd-border-slate-700 px-4 py-4 pd-text-slate-500 dark:pd-text-slate-400">2</td>
        <td class="border first:border-l-0 last:border-r-0 pd-border-slate-300 dark:pd-border-slate-700 px-4 py-4 pd-text-slate-500 dark:pd-text-slate-400">Narve Hoops</td>
        <td class="border first:border-l-0 last:border-r-0 pd-border-slate-300 dark:pd-border-slate-700 px-4 py-4 pd-text-slate-500 dark:pd-text-slate-400 text-right">4 444 444</td>
      </tr>
      <tr>
        <td class="border first:border-l-0 last:border-r-0 pd-border-slate-300 dark:pd-border-slate-700 px-4 py-4 pd-text-slate-500 dark:pd-text-slate-400">3</td>
        <td class="border first:border-l-0 last:border-r-0 pd-border-slate-300 dark:pd-border-slate-700 px-4 py-4 pd-text-slate-500 dark:pd-text-slate-400">Dagny Calamity</td>
        <td class="border first:border-l-0 last:border-r-0 pd-border-slate-300 dark:pd-border-slate-700 px-4 py-4 pd-text-slate-500 dark:pd-text-slate-400 text-right">88 888 888</td>
      </tr>
    </tbody>
  </table>
</container>

```html
<table>
  <thead>
    <tr>
      <th>#</th>
      <th>Scientist</th>
      <th># Coffee</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Justina Matter</td>
      <td class="tabular-nums font-mono ...">1 111 111</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Narve Hoops</td>
      <td class="tabular-nums font-mono ...">4 444 444</td>
    </tr>
    <tr>
      <td>3</td>
      <td>Dagny Calamity</td>
      <td class="tabular-nums font-mono ...">88 888 888</td>
    </tr>
  </tbody>
</table>
```
