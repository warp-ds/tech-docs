> Layout

# Display

Utilities for controlling the display box type of elements.

## Quick reference

<qr-table />

## Basic usage

### Block And Inline
Use `inline`, `inline-block`, and `block` to control the flow of text and elements.

<container>
  <div class="flex justify-center">
    <div class="relative rounded overflow-auto">
      <div style="max-width:300px" class="mx-auto pd-bg-white p-16 rounded pd-text-slate-500 dark:pd-bg-slate-800 dark:pd-text-slate-400">
        When controlling the flow of text, using the CSS property <span class="inline pd-bg-sky-100 font-bold pd-text-sm pd-text-slate-900 pd-font-mono rounded dark:pd-bg-slate-600 dark:pd-text-slate-200">display: inline</span>
        will cause the text inside the element to wrap normally.
        <br><br>
        While using the property
        <span class="inline-block pd-bg-sky-100 font-bold pd-text-sm pd-text-slate-900 pd-font-mono rounded dark:pd-bg-slate-600 dark:pd-text-slate-200">display: inline-block</span>
        will wrap the element to prevent the text inside from extending beyond its parent.
        <br><br>
        Lastly, using the property
        <span class="block pd-bg-sky-100 font-bold pd-text-sm pd-text-slate-900 pd-font-mono rounded dark:pd-bg-slate-600 dark:pd-text-slate-200">display: block</span>
        will put the element on its own line and fill its parent.
      </div>
    </div>
  </div>
</container>

```html
<div>
  When controlling the flow of text, using the CSS property
  <span class="inline">display: inline</span>
  will cause the text inside the element to wrap normally.

  While using the property <span class="inline-block">display: inline-block</span>
  will wrap the element to prevent the text inside from extending beyond its parent.

  Lastly, using the property <span class="block">display: block</span>
  will put the element on its own line and fill its parent.
</div>
```

### Flow Root
Use `flow-root` to create a block-level element with its own block formatting context.

<container>
  <div class="flex justify-center">
    <div class="relative rounded-xl overflow-auto">
      <div style="max-width:300px" class="mx-auto pd-bg-white p-16 rounded pd-text-slate-500 dark:pd-bg-slate-800 dark:pd-text-slate-400">
        <box striped class="h-16"> </box>
        Well, let me tell you something, funny boy. Y'know that little stamp, the one that says "New York Public Library"? Well that may not mean anything to you, but that means a lot to me. One whole hell of a lot.
        <box striped class="h-16 mb-2"> </box>
        <box striped class="h-16"> </box>
        Sure, go ahead, laugh if you want to. I've seen your type before: Flashy, making the scene, flaunting convention. Yeah, I know what you're thinking. What's this guy making such a big stink about old library books? Well, let me give you a hint, junior.
        <box striped class="h-16"> </box>
      </div>
    </div>
  </div>
</container>

```html
  <div class="flow-root ...">
    <div class="my-16 ...">Well, let me tell you something, ...</div>
  </div>
  <div class="flow-root ...">
    <div class="my-16 ...">Sure, go ahead, laugh if you want...</div>
  </div>
```

## Flex

Use `flex` to create a block-level flex container.

<container>
  <div class="flex justify-center">
    <div class="relative rounded-xl overflow-auto">
      <div style="width:300px;" class="mx-auto pd-bg-white p-16 rounded pd-text-slate-500 dark:pd-bg-slate-800 dark:pd-text-slate-400">
       <div class="flex items-center">
          <img src="/classes/matter.jpg" class="h-64 mr-16 rounded-full" alt="AI generated picture of 1950s scientists working on a warp drive" />
          <div class="">
            <div class="font-bold">Justina Matter</div>
            <span>Warp Scientist</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</container>

```html
<div class="flex items-center">
  <img src="..." alt="..."/>
  <div>
    <div>Justina Matter</div>
    <span>Warp Scientist</span>
  </div>
</div>
```

### Inline Flex
Use `inline-flex` to create an inline flex container that flows with text.

<container>
  <div class="flex justify-center">
    <div class="relative rounded-xl overflow-auto">
      <div style="width:300px;" class="mx-auto pd-bg-white p-16 rounded pd-text-slate-500 dark:pd-bg-slate-800 dark:pd-text-slate-400">
        <p>I spent most of the day researching ways to take advantage of the fact that bottles can be returned for 10 cents in Michigan, but only 5 cents here.<span class="inline-flex items-baseline">
          <img src="/classes/matter.jpg" alt="" class="self-center w-24 h-24 rounded-full mx-4" />
          <span class="font-bold">Justina</span>
        </span>
        keeps telling me there is no way to make it work, that she has run the numbers on every possible approach, but I just have to believe there's a way to make it work, there's simply too much opportunity here.</p>
      </div>
    </div>
  </div>
</container>

```html
<p>
  Today I spent most of the day researching ways to ...
  <span class="inline-flex items-baseline ...">
    <img src="..." alt="..." class="self-center rounded-full ..." />
    <span class="...">Kramer</span>
  </span>
  keeps telling me there is no way to make it work, that ...
</p>
```

### Grid
Use `grid` to create a grid container.

<container>
  <box striped class="grid grid-cols-4 gap-16" fg-color="var(--tw-cyan-fg)" bg-color="var(--tw-cyan-bg)">
    <div class="pd-bg-cyan-500 ex-box">01</div>
    <div class="pd-bg-cyan-500 ex-box">02</div>
    <div class="pd-bg-cyan-500 ex-box">03</div>
    <div class="pd-bg-cyan-500 ex-box">04</div>
    <div class="pd-bg-cyan-500 ex-box">05</div>
    <div class="pd-bg-cyan-500 ex-box">06</div>
    <div class="pd-bg-cyan-500 ex-box">07</div>
    <div class="pd-bg-cyan-500 ex-box">08</div>
  </box>
</container>

```html{1}
<div class="grid gap-4 grid-cols-3 grid-rows-3">
  <div>01</div>
  <!-- ... -->
  <div>08</div>
</div>
```

### Inline Grid
Use `inline-grid` to create a inline grid container.

<container>
  <box striped class="inline-grid grid-cols-3 gap-16 mr-16" fg-color="var(--tw-pink-fg)" bg-color="var(--tw-pink-bg)">
    <div class="pd-bg-pink-500 ex-box">01</div>
    <div class="pd-bg-pink-500 ex-box">02</div>
    <div class="pd-bg-pink-500 ex-box">03</div>
    <div class="pd-bg-pink-500 ex-box">04</div>
    <div class="pd-bg-pink-500 ex-box">05</div>
    <div class="pd-bg-pink-500 ex-box">06</div>
  </box>
  <box striped class="inline-grid grid-cols-3 gap-16" fg-color="var(--tw-pink-fg)" bg-color="var(--tw-pink-bg)">
    <div class="pd-bg-pink-500 ex-box">01</div>
    <div class="pd-bg-pink-500 ex-box">02</div>
    <div class="pd-bg-pink-500 ex-box">03</div>
    <div class="pd-bg-pink-500 ex-box">04</div>
    <div class="pd-bg-pink-500 ex-box">05</div>
    <div class="pd-bg-pink-500 ex-box">06</div>
  </box>
</container>

```html{1,6}
<span class="inline-grid grid-cols-3 gap-16">
  <span>01</span>
  <!-- ... -->
  <span>06</span>
</span>
<span class="inline-grid grid-cols-3 gap-16">
  <span>01</span>
  <!-- ... -->
  <span>06</span>
</span>
```

### Contents
Use contents to create a “phantom” container whose children act like direct children of the parent.
<container>
  <box striped fg-color="var(--tw-violet-fg)" bg-color="var(--tw-violet-bg)">
    <div class="flex gap-16">
      <div class="pd-bg-violet-500 flex-1 ex-box">01</div>
      <div class="contents">
        <div class="pd-bg-violet-500 flex-1 ex-box">02</div>
        <div class="pd-bg-violet-500 flex-1 ex-box">03</div>
      </div>
      <div class="pd-bg-violet-500 flex-1 ex-box">04</div>
    </div>
  </box>
</container>

```html{3}
<div class="flex ...">
  <div class="flex-1 ...">01</div>
  <div class="contents">
    <div class="flex-1 ...">02</div>
    <div class="flex-1 ...">03</div>
  </div>
  <div class="flex-1 ...">04</div>
</div>
```

### Table
Use the `table`, `table-row`, `table-cell`, `table-caption`, `table-column`, `table-column-group`, `table-header-group`, `table-row-group`, and `table-footer-group` utilities to create elements that behave like their respective table elements.

<container>
<div class="table w-full">
  <div class="table-header-group font-bold">
    <div class="table-row">
      <div class="table-cell text-left">Song</div>
      <div class="table-cell text-left">Artist</div>
      <div class="table-cell text-left">Year</div>
    </div>
  </div>
  <div class="table-row-group">
    <div class="table-row">
      <div class="table-cell">Manic Depression</div>
      <div class="table-cell">Jimi Hendrix</div>
      <div class="table-cell">1967</div>
    </div>
    <div class="table-row">
      <div class="table-cell">(Ballad Of) The Hip Death Goddess</div>
      <div class="table-cell">Ultimate Spinach</div>
      <div class="table-cell">1968</div>
    </div>
    <div class="table-row">
      <div class="table-cell">Sonic Prayer</div>
      <div class="table-cell">Earthless</div>
      <div class="table-cell">2017</div>
    </div>
  </div>
</div>
</container>

```html
<div class="table w-full ...">
  <div class="table-header-group ...">
    <div class="table-row">
      <div class="table-cell text-left ...">Song</div>
      <div class="table-cell text-left ...">Artist</div>
      <div class="table-cell text-left ...">Year</div>
    </div>
  </div>
  <div class="table-row-group">
    <div class="table-row">
      <div class="table-cell ...">Manic Depression</div>
      <div class="table-cell ...">Jimi Hendrix</div>
      <div class="table-cell ...">1967</div>
    </div>
    <div class="table-row">
      <div class="table-cell ...">(Ballad Of) The Hip Death Goddess</div>
      <div class="table-cell ...">Ultimate Spinach</div>
      <div class="table-cell ...">1968</div>
    </div>
    <div class="table-row">
      <div class="table-cell ...">Sonic Prayer</div>
      <div class="table-cell ...">Earthless</div>
      <div class="table-cell ...">2017</div>
    </div>
  </div>
</div>
```

### Hidden
Use `hidden` to set an element to `display: none` and remove it from the page layout (compare with `.invisible` from the `visibility` documentation).

<container>
  <box striped class="grid grid-cols-3 gap-16" fg-color="var(--tw-purple-fg)" bg-color="var(--tw-purple-bg)">
    <div class="pd-bg-purple-500 ex-box hidden">01</div>
    <div class="pd-bg-purple-500 ex-box">02</div>
    <div class="pd-bg-purple-500 ex-box">03</div>
  </box>
</container>

```html{1}
<div class="grid grid-cols-3 gap-16">
  <div class="hidden ...">01</div>
  <div>02</div>
  <div>03</div>
</div>
```

### Breakpoints and media queries
You can also use variant modifiers to target media queries like responsive breakpoints, dark mode, prefers-reduced-motion, and more. For example, use `md:inline-flex` to apply the `inline-flex` utility at only medium screen sizes and above.

```html
<div class="flex md:inline-flex">
  <!-- ... -->
</div>
```
