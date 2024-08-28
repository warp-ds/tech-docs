
## Syntax

```kotlin example
fun WarpRadio(
    modifier: Modifier = Modifier,
    text: String,
    selected: Boolean = false,
    isError: Boolean = false,
    enabled: Boolean = true,
    onClick: (() -> Unit)? = null,
    interactionSource: MutableInteractionSource = remember { MutableInteractionSource() }
)

fun VerticalWarpRadioGroup(
    modifier: Modifier = Modifier,
    title: String? = null,
    options: List<String>,
    selectedOption: String? = null,
    helpText: String? = null,
    enabled: Boolean = true,
    isError: Boolean = false,
    onOptionSelected: (String) -> Unit
)

fun HorizontalWarpRadioGroup(
    modifier: Modifier = Modifier,
    title: String? = null,
    options: List<String>,
    selectedOption: String? = null,
    helpText: String? = null,
    enabled: Boolean = true,
    isError: Boolean = false,
    onOptionSelected: (String) -> Unit
)
```

There is support for two types of radio groups - vertical and horizontal. But there is also the option to create your own radio group if needed.

```kotlin example
val radioOptions = listOf("Option 1", "Option 2", "Option 3", "Option 4", "Option 5")
val (selectedOption, onOptionSelected) = remember { mutableStateOf(radioOptions[0]) }

HorizontalWarpRadioGroup(
    modifier = Modifier.horizontalScroll(rememberScrollState()),
    options = radioOptions,
    selectedOption = selectedOption,
    enabled = enabled,
    isError = isError,
    onOptionSelected = onOptionSelected,
    )
```
There is support for optioanl title and help text when using the the radio group

```kotlin example
val radioOptions = listOf("Orange", "Apple", "Pear", "Mango", "Kiwi")
val (selectedOption, onOptionSelected) = remember { mutableStateOf(radioOptions[0]) }

VerticalWarpRadioGroup(
    title = "Choose a fruit",
    options = radioOptions,
    selectedOption = selectedOption,
    enabled = enabled,
    isError = isError,
    onOptionSelected = onOptionSelected,
    helpText = "Required"
)
```


### Legacy support
To support layouts still written in xml the Radio can be used as a custom view. Horizontal or vertical group is not supported.

```kotlin example
fun setOnClickListener(onClick: OnClickListener?)
```

```xml example
<com.schibsted.nmp.warp.components.legacy.WarpRadioView
    android:id="@+id/radio"
    android:layout_width="wrap_content"
    android:layout_height="wrap_content"
    android:layout_marginTop="@dimen/space2"
    app:radioSelected="false"
    app:radioText="Radio button" />
```

### Parameters Radio 

<api-table type=android component="Radio" />

### Parameters Vertical/Horizontal Radio Group

<api-table type=android component="RadioGroup" />


