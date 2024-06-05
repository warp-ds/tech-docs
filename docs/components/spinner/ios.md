

## Syntax

```swift example
func Warp.Spinner(size: SpinnerSize = .default,
                    duration: CGFloat = 1,
                    lineWidth: CGFloat = 3)
```
```swift example
Warp.Spinner(size: .large)
```
## Visual options

There are a variety of variants supported for the Spinner component:

```swift example
public enum SpinnerSize: Hashable {        
        case small
        case `default`
        case large
        case custom(Double)
        
        var value: Double {
            switch self {
            case .small:
                return 16
            case .default:
                return 24
            case .large:
                return 32
            case .custom(let size):
                return size
            }
        }
    }
```

### Legacy support
Coming soon

### Parameters

<api-table type=iOS component="Spinner" />