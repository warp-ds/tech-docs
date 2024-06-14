
# Getting started for iOS developers

This page describes how to get started building an application with Warp components.

If you have any questions or need clarification, please don't hesitate to reach out to the Warp team on the [#nmp-warp-design-system](https://sch-chat.slack.com/archives/C04NF2K46LB) channel on Slack!


## 1. Integrate Warp

A guide on how to integrate Warp into your project.

### Swift Package Manager
You can use the url for Warp on Xcode default package manager or use it like below in your Package.swift file:

```swift
dependencies: [
    .package(url: "https://github.com/warp-ds/warp-ios.git")
]
```
You can use a specific branch or version, but we suggest using our latest version like this to avoid conflict between dependencies:

```swift
dependencies: [
    .package(url: "https://github.com/warp-ds/warp-ios.git", "0.0.1"..."999.0.0")
]
```

## 2. Apply theme

To start using Warp you must first initialize the theme depending on the selected target of the project.

```swift
Warp.Config.warpTheme = .tori
```

Right now we support `.finn` and `.tori` with `.finn` as the default one.

## 3. Use Warp components

Use the Warp components just like any other SwiftUI or UIKit view. The selected target will give it the correct colors and styling. 

```swift exmaple
Warp.Button.create(
    for: .primary,
    title: "button",
    icon: Image(systemName: "plus"),
    action: {}
)
```

### Legacy support
All Warp components will provide a bridge to be able to use with legacy code. Check each component's documentations for more information.