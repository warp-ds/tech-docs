

## Syntax

```swift example
func Warp.Toast(
        style: Warp.ToastStyle,
        title: String,
        toastEdge: Warp.ToastEdge,
        isPresented: Binding<Bool>
)
```
```swift example
Warp.Toast(
        style: .success,
        title: "This is a toast",
        toastEdge: .top,
        isPresented: .constant(true)
)
```
## Visual options

There are a variety of variants and positions supported for the toast component:

```swift example
public enum ToastStyle {
    /// Disruptive message describes a critical, fatal error that affects action. Example: Internal server error
    case error
    /// Positive message, which describes successful action. Example: Item added
    case success
    /// Non-critical message, which describes unsuccessful action. Example: Internet disconnected
    case warning
}

public enum ToastEdge {
    case top
    case bottom
}
```

### Legacy support
Coming soon

### Parameters

<api-table type=iOS component="Toast" />