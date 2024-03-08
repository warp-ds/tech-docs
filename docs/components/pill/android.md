
## Syntax

```kotlin example
@Composable
fun WarpPill(
    modifier: Modifier = Modifier,
    text: String,
    onClick: () -> Unit,
    style: WarpPillStyle = WarpPillStyle.Filter,
    selected: Boolean = false,
    closable: Boolean = false,
    iconContentDescription: String? = null
)
```

## Visual options

### Filter

The default style for the pill using the primary color for background. If closable is set to true the pill will show a close icon. 

```kotlin example
WarpPill(
    modifier = Modifier,
    text = "Filter",
    onClick = { },
    style = WarpPillStyle.Filter,
    selected = false,
    closable = true,
    iconContentDescription = "Close icon"
    )
```

### Suggestion

Suggestion style pill using gray color for background. As with the Filter pill, if closable is set to true the pill will show a close icon. 

```kotlin example
WarpPill(
    modifier = Modifier,
    text = "Suggestion",
    onClick = { },
    style = WarpPillStyle.Suggestion,
    selected = false,
    closable = true,
    iconContentDescription = "Close icon"
    )
```

### Legacy support
To support layouts still written in xml the WarpPill can be used as a custom view.

```xml example
<com.schibsted.nmp.warp.components.legacy.WarpPillView
    android:layout_width="wrap_content"
    android:layout_height="wrap_content"
    app:closable="true"
    app:iconContentDescr="Close icon"
    app:pillText="Filter pill"
    app:selected="false"
    app:warpPillStyle="filter" />

<com.schibsted.nmp.warp.components.legacy.WarpPillView
    android:layout_width="wrap_content"
    android:layout_height="wrap_content"
    app:closable="true"
    app:iconContentDescr="Close icon"
    app:pillText="Suggestion pill"
    app:selected="false"
    app:warpPillStyle="suggestion" />
```

### Parameters

<api-table type=android component="Pill" />

