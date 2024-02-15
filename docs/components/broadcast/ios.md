
## Syntax

```swift example
func Warp.Broadcast(
            text: String,
            broadcastEdge: Warp.BroadcastEdge,
            isPresented: Binding<Bool>
        )
```

```swift example
Warp.Broadcast(
        text: "Broadcast",
        broadcastEdge: .top,
        isPresented: .constant(true)
    )
```

There are a variety of positions supported for the broadcast component:

```swift example
Warp.BroadcastEdge {
    case top
    case bottom
}
```

### Legacy support
Coming soon

### Parameters

<api-table type=iOS component="Broadcast" />