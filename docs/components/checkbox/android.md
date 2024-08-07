
## Syntax

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

The default style for the checkbox is WarpCheckboxStyle.Neutral and will be used if nothing is passed in the style param. 

```kotlin example
WarpCheckbox(
    text = "Check this!",
    onCheckedChange = { }
    )
```

There are three types of checkbox styles:

```kotlin example
WarpCheckboxStyle {
    Neutral,
    Disabled,
    Negative,
}
```

To display a disbaled checkbox - either set the style to WarpCheckboxStyle.Disabled or set enabled to false
```kotlin example
WarpCheckbox(
    text = "Check this!",
    style = WarpCheckboxStyle.Disabled,
    onCheckedChange = { }
    )

WarpCheckbox(
    text = "Check this!",
    onCheckedChange = { },
    enabled = false
    )
```

### Legacy support
To support layouts still written in xml the WarpCheckbox can be used as a custom view. To add functionality, set onCheckChanged listener.

```kotlin example
fun setOnCheckedChangeListener(onCheckedChangeListener: ((Boolean) -> Unit))
```

```xml example
<com.schibsted.nmp.warp.components.legacy.WarpCheckboxView
    android:id="@+id/warp_checkbox_disabled_selected"
    android:layout_width="wrap_content"
    android:layout_height="wrap_content"
    android:layout_margin="@dimen/space2"
    app:checkboxEnabled="true"
    app:checkboxText="Selected checkbox"
    app:checked="true"
    app:warpCheckboxStyle="neutral" />
```

### Parameters

<api-table type=android component="Checkbox" />

