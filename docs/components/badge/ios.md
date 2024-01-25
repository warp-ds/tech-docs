
## Syntax

```swift example
func Warp.Badge(
            text: String,
            variant: Warp.Badge.Variant,
            position: Warp.Badge.Position = .default
        )
```

```swift example
Warp.Badge(
        text: "Success",
        variant: .success,
        position: .bottomLeft
    )
```

There are a variety of variants and positions supported for the badge component:

```swift example
Warp.Badge.Variant {
    /// Used to convey general information that isn’t critical.
    case info
    /// Used to communicate success.
    case success
    /// Used to communicate warning.
    case warning
    /// Used to communicate error.
    case error
    /// Used to communicate disabled.
    case disabled
    /// Used to communicate sponsored.
    case sponsored
    /// Used to communicate neutral.
    case neutral
}

Warp.Badge.Position {
    case `default`
    case topLeft
    case topRight
    case bottomLeft
    case bottomRight
}
```

### Legacy support
Coming soon

### Parameters

<api-table type=iOS component="Badge" />