
## Syntax

```kotlin example
@Composable
fun WarpAlert(
    modifier: Modifier = Modifier,
    type: WarpAlertType = WarpAlertType.Info,
    title: String? = null,
    body: String,
    linkText: String? = null,
    linkAction: (() -> Unit)? = null,
    secondaryButtonText: String? = null,
    secondaryButtonAction: (() -> Unit)? = null,
    quietButtonText: String? = null,
    quietButtonAction: (() -> Unit)? = null,
)
```

The default style for the alert is Info and will be used if nothing is passed in the type param. 

```kotlin example
WarpAlert(
    type = WarpAlertType.Critical,
    title = "This is the critical variant of the alert element",
    body = "With an additional description"
    )
```

There are four types of alert styles:

```kotlin example
WarpAlertType {
    Info,
    Positive,
    Critical,
    Warning
}
```

It is possible to add an optional title, link text, secondary button and a quiet button or all together.
```kotlin example
WarpAlert(
    modifier = Modifier.padding(WarpTheme.dimensions.space2),        
    title = "This is the info variant with all options",
    body = "Click here to read more",
    type = WarpAlertType.Warning,
    linkText = "A link to read more here",
    linkAction = {  },
    secondaryButtonText = "Button",
    secondaryButtonAction = {  },
    quietButtonText = "Quiet Button",
    quietButtonAction = {  }
    )
```


### Legacy support
To support layouts still written in xml the WarpAlert can be used as a custom view. To add functionality to the optional link and buttons, set click listeners.

```kotlin example
fun setLinkOnClickListener(onClick: OnClickListener?)
fun setSecondaryButtonOnClickListener(onClick: OnClickListener?)
fun setQuietButtonOnClickListener(onClick: OnClickListener?)
```

```xml example
<com.schibsted.nmp.warp.components.legacy.WarpAlertView
    android:layout_width="match_parent"
    android:layout_height="wrap_content"
    app:warpAlertType="critical"
    app:title="This is the title"
    app:body="This is the body"
    app:linkText="This is the link"
    app:quietButtonText="Button"
    app:secondaryButtonText="Button"/>
```

### Parameters

<api-table type=android component="Alert" />

