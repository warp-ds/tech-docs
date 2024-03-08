

## Syntax

```swift example
Warp.Button.create(
        for buttonType: Warp.ButtonType,
        title: String,
        leadingIcon: Image? = nil,
        trailingIcon: Image? = nil,
        action: @escaping () -> Void,
        size: Warp.ButtonSize = .big,
        isEnabled: Bool = true,
        fullWidth: Bool = false,
        colorProvider: ColorProvider = Warp.Config.colorProvider
    )
```

## Visual options

### Primary

The primary button is a call to action. As a general rule, there should only be
one of them on the screen. This guides the user towards the happy path.

```swift example
Warp.Button.create(
    for: .primary,
    title: "Save",
    action: {}
)
```

### Secondary

Secondary buttons are without background, and are often used for secondary actions. Also available as `tertiary` style.

```swift example
Warp.Button.create(
    for: .secondary,
    title: "Save",
    action: {}
)
Warp.Button.create(
    for: .tertiary,
    title: "Save",
    action: {}
)
```

### Negative

Used for destructive actions, like deletion. Shouldn't be used on the same
screen as a primary button.

```swift example
Warp.Button.create(
    for: .critical,
    title: "Cancel",
    action: {}
)
```

### Loading/In progress

Used for visual feedback that the action the user triggered is loading.

```swift example
Warp.Button.create(
    for: .primary,
    title: "Save",
    isLoading: true,
    action: {}
)
```

### Disabled

Disabled is an anti-pattern and is not supported. There will ALWAYS be users who
don't understand why an element is disabled, or users who can't even see that it
is disabled because of poor lighting conditions or other reasons.

```swift example
Warp.Button.create(
    for: .primary,
    title: "Save",
    isEnabled: false,
    action: {}
)
```

### Legacy support
The bridge will be added soon.

### Parameters

<api-table type=iOS component="Button" />