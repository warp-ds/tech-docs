
# Getting started for iOS developers

This page describes how to get started building an application with Warp components.

## 1. Integrate Warp

A guide on how to integrate Warp into your project.

### Swift Package Manager

```swift
dependencies: [
    .package(url: "https://github.com/warp-ds/warp-ios.git")
]
```

## 2. Use Warp components

Creating component:

    Button:

        Warp.Button(type: <#T##Warp.ButtonType#>, title: <#T##String#>, imageSystemName: <#T##String?#>, action: <#T##() -> Void#>, size: <#T##Warp.ButtonSize#>, isEnabled: <#T##Bool#>, fullWidth: <#T##Bool#>, colorProvider: <#T##ColorProvider#>)

        Warp.Button.create(for: .primary, title: "Warp", icon: Image(systemName: "plus")) {
            print("Warp button")
       }

    Textfield:
        Warp.Input(config: <#T##Warp.InputConfiguration#>, text: <#T##Binding<String>#>, state: <#T##Binding<Warp.InputState>#>)

        Warp.Input(config: .default, text: $searchTextFieldText, state: .constant(.active))

    Typography:
        Text(text)
            .font(from: Warp.Typography.title1)

        var allCases: [(typography: Warp.Typography, name: String)] = [
            (.display, "Display"),
            (.title1, "Title 1"),
            (.title2, "Title 2"),
            (.title3, "Title 3"),
            (.title4, "Title 4"),
            (.title5, "Title 5"),
            (.title6, "Title 6"),
            (.preamble, "Preamble"),
            (.body, "Body"),
            (.bodyStrong, "Body Strong"),
            (.caption, "Caption"),
            (.captionStrong, "Caption Strong"),
            (.detail, "Detail"),
            (.detailStrong, "Detail Strong"),
        ] 



           
