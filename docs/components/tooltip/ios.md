

## Syntax

```swift example
func Warp.Tooltip(
            title: String,
            arrowEdge: Edge = .top
        )
```

```swift example
Warp.Tooltip(title: "This is a Tooltip")
```

There are a variety of positions supported for the Tooltip component:

```swift example
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

<api-table type=iOS component="Tooltip" />