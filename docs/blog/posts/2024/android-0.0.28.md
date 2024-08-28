---
title: 'WARP Android release v.0.0.28'
date: 2024-08-29
---

Switch, Spinner & Radio components!
---

# Warp Android release 0.0.28

## 2024-08-29

### WarpSwitch
```kotlin example
fun WarpSwitch(
    modifier: Modifier = Modifier,
    checked: Boolean = false,
    onCheckedChange: ((Boolean) -> Unit) = { },
    enabled: Boolean = true,
)
```

* Switch component now available in Warp, ([more info here](https://warp-ds.github.io/tech-docs/components/switch/))
* Supports Finn, Tori & DBA
* Supports legacy layouts written in XML

### WarpRadio
```kotlin example
fun WarpRadio(
    modifier: Modifier = Modifier,
    text: String,
    selected: Boolean = false,
    isError: Boolean = false,
    enabled: Boolean = true,
    onClick: (() -> Unit)? = null,
    interactionSource: MutableInteractionSource = remember { MutableInteractionSource() }
)
```
* Radio component now available in Warp, ([more info here](https://warp-ds.github.io/tech-docs/components/radio/))
* Supports vertical & horizontal layout
* Supports Finn, Tori & DBA
* Supports legacy layouts written in XML

### WarpSpinner
```kotlin example
fun WarpSpinner(
    modifier: Modifier = Modifier,
    size: WarpSpinnerSize = WarpSpinnerSize.Default,
)
```

* Spinner component now available in Warp, ([more info here](https://warp-ds.github.io/tech-docs/components/spinner/))
* Supports Finn, Tori & DBA
* Supports legacy layouts written in XML
