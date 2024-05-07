
## Syntax

```kotlin example
@Composable
fun WarpModal(
    title: String,
    body: String,
    onDismiss: () -> Unit,
    modifier: Modifier = Modifier,
    subtitle: String? = null,
    confirmButtonText: String? = null,
    dismissButtonText: String? = null,
    onConfirm: (() -> Unit)? = null,
    showCloseIcon: Boolean = false,
    closeIconContentDescription: String? = null,
    dismissOnClickOutside: Boolean = true,
    dismissOnBackPress: Boolean = true
)
```

## Visual options
The default style for the modal requires a title and a body text.
The buttons displayed are Primary style for the positive button and Secondary style for the negative button.

### Subtitle

It's possible to add an optional subtitle.

```kotlin example
var openModal by remember { mutableStateOf(false) }
if(openModal) {
    WarpModal(
        title = "Hello warp!",
        body = "Some important text here, not too long, not too short.",
        subtitle = "Warp",
        dismissButtonText = "Nope",
        confirmButtonText = "Meow",
        onConfirm = { openModal = false },
        onDismiss = { openModal = false }
    )
}
```

### Close icon

There is a optional close icon that can be displayed in the top right corner. Uses the same dismiss function as the dismiss button would. Always remember to provide the icon content description :)

```kotlin example
var openModal by remember { mutableStateOf(false) }
if(openModal) {
    WarpModal(
        title = "Hello warp!",
        body = "Close icon variant X",  
        onDismiss = { openModal = false },
        showCloseIcon = true,
        closeIconContentDescription = "Close dialog",
        dismissButtonText = "Nope",
        confirmButtonText = "Meow",
        onConfirm = { openModal = false }
    )
}
```

### No buttons

It's possible to show a modal without buttons. In this case it is recommended to show the close icon.

```kotlin example
var openModal by remember { mutableStateOf(false) }
if(openModal) {
    WarpModal(
        title = "Hello warp!",
        body = "No buttons variant",  
        onDismiss = { openModal = false },
        showCloseIcon = true,
        closeIconContentDescription = "Close dialog"
    )
}
```


### Parameters

<api-table type=android component="Modal" />

