> Typography

# Text Overflow

Utilities for controlling text overflow in an element.

## Quick reference

<qr-table />

## Basic usage

### Truncate
Use `truncate` to truncate overflowing text with an ellipsis (`…`) if needed.

<container>
  <div class="mx-24 -my-32 max-w-[320] mx-a p-24 pd-bg-white pd-text-slate-700 dark:pd-bg-slate-900 dark:pd-text-slate-400">
    <p class="truncate">
      A really long finnish word that has nothing to do with warp technology is
      Lentokonesuihkuturbiinimoottoriapumekaanikkoaliupseerioppilas meaning
      Aeroplane jet turbine motor assistant mechanic non-commissioned officer in training.
    </p>
  </div>
</container>

```html
<p class="truncate ...">...</p>
```

### Ellipsis
Use `text-ellipsis` to truncate overflowing text with an ellipsis (`…`) if needed.

<container>
  <div class="mx-24 -my-32 max-w-[320] mx-a p-24 pd-bg-white pd-text-slate-700 dark:pd-bg-slate-900 dark:pd-text-slate-400">
    <p class="text-ellipsis break-normal! overflow-hidden">
      A really long finnish word that has nothing to do with warp technology is
      <span class="pd-text-slate-900 dark:pd-text-slate-200">Lentokonesuihkuturbiinimoottoriapumekaanikkoaliupseerioppilas</span> meaning
      Aeroplane jet turbine motor assistant mechanic non-commissioned officer in training.
    </p>
  </div>
</container>

```html
<p class="text-ellipsis ...">...</p>
```

### Clip
Use `text-clip` to clip the text at the limit of the content area.

<container>
  <div class="mx-24 -my-32 max-w-[320] mx-a p-24 pd-bg-white pd-text-slate-700 dark:pd-bg-slate-900 dark:pd-text-slate-400">
    <p class="text-clip break-normal! overflow-hidden">
      A really long finnish word that has nothing to do with warp technology is
      <span class="pd-text-slate-900 dark:pd-text-slate-200">Lentokonesuihkuturbiinimoottoriapumekaanikkoaliupseerioppilas</span> meaning
      Aeroplane jet turbine motor assistant mechanic non-commissioned officer in training.
    </p>
  </div>
</container>

```html
<p class="text-clip ...">...</p>
```
