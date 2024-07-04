
## Syntax

```swift example
// If you need a `Expandable` with a custom view use this
Warp.Expandable(
            style: Warp.ExpandableStyle,
            title: String,
            @ViewBuilder expandableView: () -> Content,
            isAnimated: Bool = true,
            isExpanded: Bool = false,
            colorProvider: ColorProvider = Config.colorProvider
        )

// If you need a `Expandable` with a simple String use this instead
Warp.Expandable(
        style: Warp.ExpandableStyle,
        title: String,
        subtitle: String,
        isAnimated: Bool = true,
        isExpanded: Bool = false,
        colorProvider: ColorProvider = Warp.Config.colorProvider
    )
```

## Visual options
```swift example
    enum ExpandableStyle {
        /// Basic expandable component with clear background.
        case `default`

        /// Expandable component with a boxed layout. Round corners
        case box

        /// Expandable component with a boxed layout. Square corners
        case boxBleed
    }
```

### Legacy support
The bridge will be added soon.

### Parameters

<api-table type=iOS component="Expandable" />

