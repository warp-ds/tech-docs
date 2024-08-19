---
title: 'WARP Android release v.0.0.28'
date: 2024-08-20
---

Checkbox component & Compose update

---

# Warp Android release 0.0.28

## 2024-08-20

### WarpSwitch

```kotlin example
fun WarpCheckbox(
    modifier: Modifier = Modifier,
    text: String,
    onCheckedChange: ((Boolean) -> Unit) = {},
    style: WarpCheckboxStyle = WarpCheckboxStyle.Neutral,
    enabled: Boolean = true,
    checked: Boolean = false,
)
```

* Checkbox component now available in Warp, ([more info here](https://warp-ds.github.io/tech-docs/components/checkbox/))
* Supports Finn, Tori & DBA
* Supports legacy layouts written in XML



