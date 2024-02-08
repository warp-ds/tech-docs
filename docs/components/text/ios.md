

## Syntax

```swift example
func Warp.Text(
        _ text: String,
        style: Warp.TextStyle
)
```
```swift example
Warp.Text("This is a text", style: .body)
```
## Visual options

There are a variety of variants supported for the Text component:

```swift example
    public enum TextStyle {
        case display
        case title1
        case title2
        case title3
        case title4
        case title5
        case title6
        case preamble
        case body
        case bodyStrong
        case caption
        case captionStrong
        case detail
        case detailStrong
}
```

### Legacy support
Coming soon

### Parameters

<api-table type=iOS component="Text" />