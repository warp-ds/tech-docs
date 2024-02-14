

## Syntax

There are 2 options - button with pre-defined content and custom content. This showcases the pre-defined option with a text and an optional leading or trailing icon.
```kotlin example
@Composable
fun WarpButton(
    text: String,
    onClick: () -> Unit,
    modifier: Modifier = Modifier,
    enabled: Boolean = true,
    buttonStyle: WarpButtonStyle = WarpButtonStyle.Primary,
    maxLines: Int = 1,
    loading: Boolean = false,
    @DrawableRes leadingIcon: Int? = null,
    leadingIconContentDescr: String? = null,
    @DrawableRes trailingIcon: Int? = null,
    trailingIconContentDescr: String? = null
)
```
To add custom content follow this syntax:
```kotlin example
@Composable
fun WarpButton(
    onClick: () -> Unit,
    modifier: Modifier = Modifier,
    enabled: Boolean = true,
    buttonStyle: WarpButtonStyle = WarpButtonStyle.Primary,
    loading: Boolean = false,
    content: @Composable RowScope.() -> Unit
)
```

## Visual options

The button supports a variety of styles: 
```kotlin example
WarpButtonStyle {
    Primary,
    Secondary,
    Quiet,
    Negative,
    NegativeQuiet,
    Utility,
    UtilityQuiet,
    UtilityOverlay,
}
```

### Primary

The primary button is a call to action. As a general rule, there should only be
one of them on the screen. This guides the user towards the happy path. This is the default style.

```kotlin example
WarpButton(
    onClick = { }, 
    buttonStyle = WarpButtonStyle.Primary, 
    text = "Save"
)
```

### Secondary

Secondary buttons are without background, and are often used for secondary actions. Also available as `quiet` style.

```kotlin example
WarpButton(
    onClick = { }, 
    buttonStyle = WarpButtonStyle.Secondary, 
    text = "Save"
)
WarpButton(
    onClick = { }, 
    buttonStyle = WarpButtonStyle.Quiet, 
    text = "Save"
)
```

### Negative

Used for destructive actions, like deletion. Shouldn't be used on the same
screen as a primary button.

```kotlin example
WarpButton(
    onClick = { }, 
    buttonStyle = WarpButtonStyle.Negative, 
    text = "Cancel"
)
```

### Loading/In progress

Used for visual feedback that the action the user triggered is loading.

```kotlin example
var loading by remember { mutableStateOf(false) }
var buttonText by remember { mutableStateOf("Save") }
val onClickAction = { }

WarpButton(
    onClick = onClickAction, 
    buttonStyle = WarpButtonStyle.Primary, 
    text = buttonText,
    loading = loading
)
```

### Disabled

```kotlin example
var enabled by remember { mutableStateOf(false) }

WarpButton(
    onClick = { }, 
    buttonStyle = WarpButtonStyle.Secondary, 
    text = "Edit",
    enabled = enabled
)
```

### Icon

An optional leading or trailing icon can be displayed at the start of the button text. Always remember to include a content description string for accessibility :) 

```kotlin example
WarpButton(
    onClick = { },
    buttonStyle = WarpButtonStyle.Secondary,
    text = "With icon",
    leadingIcon = R.drawable.ic_duck,
    leadingIconContentDescr = "Duck icon"
)

WarpButton(
    onClick = { },
    buttonStyle = WarpButtonStyle.Secondary,
    text = "With icon",
    trailingIcon = R.drawable.ic_clock,
    trailingIconContentDescr = "Clock icon"
)
```

### Legacy support
To support layouts still written in xml the WarpButton can be used as a custom view.

```xml example
<com.schibsted.nmp.warp.components.WarpButtonView
    android:layout_width="wrap_content"
    android:layout_height="wrap_content"
    app:warpButtonStyle="primary"
    app:buttonLeadingIcon="@drawable/ic_duck"
    app:buttonleadingIconContentDescr="Icon content description"
    app:buttonTrailingIcon="@drawable/ic_clock"
    app:buttonTrailingIconContentDescr="Icon content description"
    app:buttonText="Send"
    app:loading="false"
    app:enabled="true"/>
```

### Parameters

<api-table type=android component="Button" />

