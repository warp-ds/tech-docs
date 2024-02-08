
## Syntax

```swift example
func Warp.Alert(
            style: Warp.AlertStyle,
            title: String,
            subtitle: String,
            link: ButtonConstructor?,
            primaryButton: ButtonConstructor?,
            secondaryButton: ButtonConstructor?
        )
```

ButtonConstructor is a typealias for `(title: String, action: () -> Void)`.

```swift example
Warp.Alert(
    style: .critical,
    title: "This is the critical variant of the alert component",
    subtitle: "With an additional description"
    )
```

There are four types of alert styles:

```swift example
public enum AlertStyle {
    /// Display messages to provide user with general information.
    case info
    /// Indicate that something is not working as expected.
    case warning
    /// Indicate a severe problem or error.
    case critical
    /// Indicating a successful action or completing a task.
    case success
}
```

It is possible to add an optional link text, primary button and a secondary button or all together.
```swift example
Warp.Alert(
    style: .critical,
    title: "This is the critical variant of the alert component",
    subtitle: "With an additional description",
    link: (title: "Link to more information", action: {}),
    primaryButton: (title: "Button", action: {}),
    secondaryButton: (title: "Button", action: {})
    )
```


### Legacy suport
Coming soon

### Parameters

<api-table type=iOS component="Alert" />

