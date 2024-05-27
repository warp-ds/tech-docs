

## Syntax

```swift example
func Warp.Pill(
            text: String,
            icon: Image? = nil,
            onTap: @escaping () -> Void = {},
            onClose: (() -> Void)?,
            iconContentDescription: String?,
            style: Warp.PillStyle
        )
```
```swift example
Warp.Pill(
        text: "This is a toast"
)
```
## Visual options

There are a variety of variants supported for the pill component:

```swift example
public enum PillStyle {
    /// Used to represent a removable value the user has chosen.
    case filter
    /// Used to represent a proposed/recommended value a user can choose.
    case suggestion
}
```

### Legacy support
Coming soon

### Parameters

<api-table type=iOS component="Pill" />