

## Syntax

There are 2 options - button with pre-defined content and custom content. This showcases the pre-defined option with a text and an optional icon.
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
    @DrawableRes icon: Int? = null,
    iconContentDescr: String? = null
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

Disabled is an anti-pattern and is not supported. There will ALWAYS be users who
don't understand why an element is disabled, or users who can't even see that it
is disabled because of poor lighting conditions or other reasons.

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

An optional icon can be displayed at the start of the button text. Always remember to include a content description string for accessibility :) 

```kotlin example
WarpButton(
    onClick = { },
    buttonStyle = WarpButtonStyle.Secondary,
    text = "With icon",
    icon = R.drawable.ic_duck,
    iconContentDescr = "Duck icon"
)
```

### Legacy support
To support layouts still written in xml the WarpButton can be used as a custom view.

```xml example
<com.schibsted.nmp.warp.components.WarpButtonView
    android:layout_width="wrap_content"
    android:layout_height="wrap_content"
    app:warpButtonStyle="primary"
    app:buttonIcon="@drawable/ic_duck"
    app:buttonIconContentDescr="Icon content description"
    app:buttonText="Send"
    app:loading="false"
    app:enabled="true"/>
```

### Parameters

<api-table type=android component="Button" />

