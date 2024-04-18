> Typography

# Word Break
Utilities for controlling word breaks in an element.

## Quick reference

<qr-table />

## Basic usage
### Normal
Use `break-normal` to only add line breaks at normal word break points.

<container>
  <div class="mx-24 -my-32 max-w-[320] mx-a p-24 pd-bg-white pd-text-slate-700 dark:pd-bg-slate-900 dark:pd-text-slate-400">
    <p class="break-normal">
      A really long finnish word that has nothing to do with warp technology is
       <span class="pd-text-slate-900 dark:pd-text-slate-200">Lentokonesuihkuturbiinimoottoriapumekaanikkoaliupseerioppilas</span> meaning
      Aeroplane jet turbine motor assistant mechanic non-commissioned officer in training.
    </p>
  </div>
</container>

```html
<p class="break-normal ...">...</p>
```

### Break Words
Use `break-words` to add line breaks mid-word if needed.

<container>
  <div class="mx-24 -my-32 max-w-[320] mx-a p-24 pd-bg-white pd-text-slate-700 dark:pd-bg-slate-900 dark:pd-text-slate-400">
    <p class="break-words">
      A really long finnish word that has nothing to do with warp technology is
       <span class="pd-text-slate-900 dark:pd-text-slate-200">Lentokonesuihkuturbiinimoottoriapumekaanikkoaliupseerioppilas</span> meaning
      Aeroplane jet turbine motor assistant mechanic non-commissioned officer in training.
    </p>
  </div>
</container>

```html
<p class="break-words ...">...</p>
```

### Break All
Use `break-all` to add line breaks whenever necessary, without trying to preserve whole words.

<container>
  <div class="mx-24 -my-32 max-w-[320] mx-a p-24 pd-bg-white pd-text-slate-700 dark:pd-bg-slate-900 dark:pd-text-slate-400">
    <p class="break-all">
      A really long finnish word that has nothing to do with warp technology is
       <span class="pd-text-slate-900 dark:pd-text-slate-200">Lentokonesuihkuturbiinimoottoriapumekaanikkoaliupseerioppilas</span> meaning
      Aeroplane jet turbine motor assistant mechanic non-commissioned officer in training.
    </p>
  </div>
</container>

```html
<p class="break-all ...">...</p>
```

