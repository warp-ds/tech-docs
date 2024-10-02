### Warp Resources

Warp icons are located withing the WarpResources object. They are ImageVectors created from vector drawables located in res/drawable.  

```kotlin
object WarpResources {
    val icons : WarpIcons
    @Composable
    get() = WarpIcons
}
```

### Compose

To use an icon with compose the best way is to create an Icon object. Always provide content description for accessibility purposes. 


```kotlin
Icon(
        imageVector = WarpTheme.icons.animalPaw,
        contentDescription = "Image of an animal paw",
        tint = WarpTheme.colors.icon.primary,
        modifier = Modifier.size(WarpTheme.dimensions.icon.default)
    )
```

There are three provided sizes for icons. Also possible to enter a custom value in Dp.

```kotlin
object WarpIconDimensions {
    val small = 16.dp
    val default = 24.dp
    val large = 32.dp
}
```
There is a possibility to retrieve an icon by its name string. Returns null if no match is found.

```kotlin
icons.getIconByName(LocalContext.current, "animalpaw")
```

### XML

The icons are available as vector drawables in the Warp library inside res/drawable. The default size is 32 Dp.

```xml
<ImageView
    android:layout_width="wrap_content"
    android:layout_height="wrap_content"
    android:src="@drawable/animalpaw"
    />
```