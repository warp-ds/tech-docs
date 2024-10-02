### Warp Resources

Warp icons are located withing the Warp framework. They are ImageVectors created from vector drawables located in Icon/Icons.xcassets.  

### SwiftUI

To use an icon with SwiftUI the best way is to create an Icon object, which is a View. Returns empty if no match is found.


```swift
Warp.Icon.activeAds
```

### UIKit

To use an icon with Swift the best way is to create an Icon object and use its uiImage property, which is a UIImage. Returns empty if no match is found.

```swift
Warp.Icon.activeAds.uiImage
```

### Component

There is a possibility to create an icon by its name, pre-defined size and color.

```swift
func Warp.Icon(_ icon: Warp.Icon,
                size: Warp.IconSize = .default,
                color: Color = Warp.Color.token.icon)
```

```swift
Warp.Icon(.activeAds)
```

There are three provided sizes for icons. Also possible to enter a custom value in CGFloat.

```swift
public enum IconSize {        
    case small
    case `default`
    case large
    case custom(CGFloat)
}
```