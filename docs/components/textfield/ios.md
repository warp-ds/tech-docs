
## Syntax

```swift
Warp.Input(
    placeholder: String = "",
    title: String? = nil,
    additionalInformation: String? = nil,
    infoToolTipView: AnyView? = nil,
    leftView: AnyView? = nil,
    rightView: AnyView? = nil,
    errorMessage: String? = nil,
    helpMessage: String? = nil,
    isAnimated: Bool = true,
    text: Binding<String>,
    state: InputState = Warp.inputDefaultInactiveState,
    colorProvider: ColorProvider = Config.colorProvider
)
```

## Params

<api-table type=iOS component="TextField" />