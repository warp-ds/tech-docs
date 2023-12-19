
## Syntax
'' ios

    var warpTextField = Warp.Input(config: <#T##Warp.InputConfiguration#>, text: <#T##Binding<String>#>, state: <#T##Binding<Warp.InputState>#>, colorProvider: <#T##ColorProvider#>)
    
        /// Input that will have common design for a search text field.
    var searchField = Warp.Input.createSearchTextField(text: <#T##Binding<String>#>)

    /// Input that will resolve common needs to work with decimals.
    var decimalField = Warp.Input.createDecimalTextField(text: <#T##Binding<String>#>)

    /// Input that will be used to handle secure text,
    /// it will contain a button as right view in order to secure/unsecure current text.
     var secureField = Warp.Input.createSecureTextField(configuration: <#T##Warp.InputConfiguration#>, text: <#T##Binding<String>#>, state: <#T##Binding<Warp.InputState>#>, isSecured: <#T##Binding<Bool>#>)

    /// Input that that will contain a button as right view, that will have the responsibility of discarding current text.
    var withDiscardButton = Warp.Input.createWithDiscardButton(configuration: <#T##Warp.InputConfiguration#>, text: <#T##Binding<String>#>, state: <#T##Binding<Warp.InputState>#>)    

```
## Examples
@State var text = ""

let warpField = Warp.Input.createSearchTextField(text: $text)

let warpfield2 = Warp.Input(config: .default, text: $text, state: .constant(.active))

let warpDiscardField = Warp.Input.createWithDiscardButton(configuration: .default, text: $text, state: .constant(.normal))



## Value

A binding for the textfields value must be provided

```IOS
    @State private var textFieldText = ""

     Warp.Input.createSearchTextField(text: $textFieldText)
          .padding()
    }, label: {
        Text("TextField")
    }
```

## Labeling

A visual label should be provided for the TextField using the `label` param.
Add the `optionalLabel` param to indicate that the textfield is not required.

```kotlin
WarpTextField(
    value = "",
    onValueChange = { },            
    label = "Price",         
    optionalLabel = "(optional)"  
    )
```
## Help text

TextFields can provide additional context with `helpText` if the label and placeholder aren't enough.

```kotlin
WarpTextField(
    value = "",
    onValueChange = { },            
    label = "Address",         
    helpText = "Street name & house nr"  
    )
```
## Validation

TextFields can communicate to the user whether the current value is invalid. Implement your own validation logic in your app and set the `isError` prop to display it as invalid.

`isError` is often paired with `helpText` to provide feedback to the user about the error.

```kotlin
var text by rememberSaveable { mutableStateOf("") }
var isError by remember { mutableStateOf(false)}
var errorText by remember { mutableStateOf("")}

WarpTextField(
    value = text,
    onValueChange = { text = it },            
    label = "Zipcode",
    isError = isError,          
    helpText = errorText  
    )
```


## Visual options

### Placeholder

Placeholder text can be used to describe the expected value or formatting for the TextField. Placeholder text will only appear when the TextField is empty, and should not be used as a substitute for labeling the component with a visible label.

```kotlin
WarpTextField(
    value = "",
    onValueChange = { },            
    label = "E-mail",         
    placeholderText = "email@mail.com"  
    )
```

### Disabled

Keep in mind that using disabled in its current form is an anti-pattern. There will ALWAYS be users who don't understand why an element is disabled, or users who can't even see that it is disabled because of poor lighting conditions or other reasons. Please consider more informative alternatives before choosing to use disabled on an element.

```kotlin
WarpTextField(
    value = "",
    onValueChange = { },            
    label = "E-mail",         
    enabled = false  
    )
```



### Read only

The readOnly boolean prop makes the TextField's text content immutable. 

```kotlin
WarpTextField(
    value = "",
    onValueChange = { },            
    label = "Name",
    readOnly = true 
    )
```

### Icons
 
WarpTextField supports showing a leading and/or a trailing icon. The component expects a @Composable which ideally should be an icon composable.

```kotlin
val leadingIcon: @Composable () -> Unit = { Icon(Icons.Filled.Email, contentDescription = "Content description for the leading icon") }

WarpTextField(
    value = "",
    onValueChange = { },            
    label = "E-mail",
    leadingIcon = leadingIcon 
    )
```

## Legacy suport
To support layouts still written in xml the WarpTextField can be used as a custom view.

```xml example
<com.schibsted.nmp.warp.components.WarpTextFieldView
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        app:label="Label"
        app:optionalLabel="(optional)"
        app:placeholderText="Placeholder text inside the textField"
        app:helpText="Help text under the textfield"
        app:textFieldEnabled="true"
        app:readOnly="false"
        app:leadingIcon="@drawable/leading_icon"
        app:leadingIconContentDescr="Leading icon description"
        app:trailingIcon="@drawable/trailing_icon"
        app:trailingIconContentDescr="Trailing icon description"
        app:isError="false"
        />
```
