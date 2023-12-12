

## Syntax

```kotlin example
@Composable
fun WarpButton(
    text: String, 
    onClick: () -> Unit, 
    modifier: Modifier = Modifier, 
    enabled: Boolean = true, 
    buttonStyle: WarpButtonStyle, 
    maxLines: Int = 1, 
    loading: Boolean = false
)
```

```swift example

     Warp.Button(type: <#T##Warp.ButtonType#>, title: <#T##String#>, imageSystemName: <#T##String?#>, action: <#T##() -> Void#>, size: <#T##Warp.ButtonSize#>, isEnabled: <#T##Bool#>, fullWidth: <#T##Bool#>, colorProvider: <#T##ColorProvider#>)

    Warp.Button(type: .critical, title: "Warp", image: nil, action: {
        print("tap tap")
    }, size: .big, isEnabled: true, fullWidth: true, colorProvider: Warp.Config.colorProvider)

     Warp.Button.create(for: .primary, title: "Warp", icon: Image(systemName: "plus")) {
        print("tap tap")
    }

## Visual options

### Primary

The primary button is a call to action. As a general rule, there should only be
one of them on the screen. This guides the user towards the happy path.

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
    buttonStyle = WarpButtonStyle.Critical, 
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

### Legacy suport
To support layouts still written in xml the WarpButton can be used as a custom view.

```xml example
<com.schibsted.nmp.warp.components.WarpButtonView
    android:layout_width="wrap_content"
    android:layout_height="wrap_content"
    app:warpButtonStyle="primary"
    app:buttonText="Send"
    app:loading="false"
    app:enabled="true"/>
```

### Parameters

<api-table type=android component="Button" />

