

## Syntax

```swift example
func Warp.Callout(
            size: Warp.CalloutSize,
            type: Warp.CalloutType,
            title: String,
            arrowEdge: Edge
        )
```

```swift example
Warp.Callout(title: "This is a Callout")
```

There are a variety of variants and positions supported for the Callout component:

```swift example
public enum CalloutSize {
    case small
    case `default`
}

public enum CalloutType {
    case inline
    case popover(onTapped: () -> Void)
}

public enum Edge {
    case top
    case leading
    case bottom
    case trailing
}
```

### Legacy support
Coming soon

### Parameters

<api-table type=iOS component="Callout" />