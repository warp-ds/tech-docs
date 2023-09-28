
# Getting started for Android developers

This page describes how to get started building an application with Warp components.

If you have any questions or need clarification, please don't hesitate to reach out to the Warp team on the #nmp-warp-design-system channel on Slack!


## 1. Integrate Warp

A guide on how to integrate Warp into your project.

### Gradle

Warp is used together with a brand theme and should be installed for a specific flavor of the code. Currently only Finn and Tori are supported.

```gradle
implementation("com.schibsted.nmp.warp:warp-android:0.0.2")

finnImplementation("com.schibsted.nmp.warp:warp-finn:0.0.3")

toriImplementation("com.schibsted.nmp.warp:warp-tori:0.0.3")
```



## 2. Apply theme
To start using Warp you must first initialize the theme depending on the selected flavor of the code.

```kotlin
const val FINN = "finn"
const val TORI = "tori"

@Composable
fun BrandTheme(flavor: String, content: @Composable () -> Unit) {
    when (flavor) {
        FINN -> FinnWarpTheme(content)
        TORI -> ToriWarpTheme(content)
    }
}
```

## 3. Use Warp components
Use the composable theme which you initiated earlier to be able to use Warp components. The selected flavor of the code will give it the correct colors and styling. 

```kotlin exmaple
@Composable
fun MainScreen() {
    val flavor = viewModel.flavor.collectAsState()

    BrandTheme(flavor = flavor.value) {

      Column(
        modifier = Modifier
            .fillMaxWidth()
            .verticalScroll(rememberScrollState())
            .padding(vertical = 16.dp)
        ) {
            WarpTextField(
              value = text,
              onValueChange = { text = it },
              label = "E-mail address",
              placeholderText = "email@mail.com",
              )
            WarpButton(
              onClick = {  },
              buttonStyle = WarpButtonStyle.Primary,
              text = "Submit"
              )
          }
    }
}
```
### Legacy support
All Warp components have xml support to be able to use Warp with legacy layouts. Use Warp components as any other custom View components.

```xml example
<?xml version="1.0" encoding="utf-8"?>
<androidx.constraintlayout.widget.ConstraintLayout xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:app="http://schemas.android.com/apk/res-auto"
    android:layout_width="match_parent"
    android:layout_height="match_parent">
    
  <com.schibsted.nmp.warp.components.WarpButtonView
      android:id="@+id/warp_button"
      android:layout_width="wrap_content"
      android:layout_height="wrap_content"
      app:layout_constraintStart_toStartOf="parent"
      app:layout_constraintTop_toTopOf="parent"
      app:warpButtonStyle="primary"
      app:buttonText="Send"
      app:loading="false"
      app:enabled="true"/>

  <com.schibsted.nmp.warp.components.WarpTextFieldView
      android:layout_width="wrap_content"
      android:layout_height="wrap_content"
      app:layout_constraintStart_toStartOf="parent"
      app:layout_constraintTop_toBottomOf="@id/warp_button"
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
      app:isError="false"/>

</androidx.constraintlayout.widget.ConstraintLayout>
```
