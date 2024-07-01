
## Syntax

```swift example
Warp.Modal(
        title: String,
        subtitle: String? = nil,
        bodyText: String,
        primaryButton: ButtonConstructor? = nil,
        secondaryButton: ButtonConstructor? = nil,
        hasCloseButton: Bool = false,
        onDismiss: (() -> Void)? = nil,
        isPresented: Binding<Bool>,
        colorProvider: ColorProvider = Config.colorProvider
        )
```

## Visual options
The default style for the modal requires a title and a body text.
The buttons displayed are WarpButtons using Primary and Secondary style.

### Subtitle

It's possible to add an optional subtitle.

```swift example
Warp.Modal(
        title: "Modal Title",
        subtitle: "Subtitle",
        bodyText: "This is the body of the modal dialog.",
        primaryButton: ("Title", {}),
        secondaryButton: ("Button Title", {}),
        hasCloseButton: true,
        isPresented: .constant(true)
    )
```

### Single button

It's possible to just show one button.

```swift example
Warp.Modal(
        title: "Modal Title",
        subtitle: "Subtitle",
        bodyText: "This is the body of the modal dialog.",
        primaryButton: ("Title", {}),
        hasCloseButton: true,
        isPresented: .constant(true)
    )
```


### No buttons

It's possible to show a modal without buttons. In this case it is recommended to show the close icon.

```swift example
Warp.Modal(
        title: "Modal Title",
        subtitle: "Subtitle",
        bodyText: "This is the body of the modal dialog.",
        hasCloseButton: true,
        isPresented: .constant(true)
    )
```


### Parameters

<api-table type=iOS component="Modal" />

