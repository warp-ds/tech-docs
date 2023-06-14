<br>

## Visual accessibility

Visual elements in graphs should be possible to perceive and distinguish from each other for everyone who can see. Therefore, we need to be mindful of font-sizes, colour contrasts and colour combinations, animations and responsiveness.

### 1. Don’t rely on colour alone to explain data
![Red design tag](/dataviz-tag-design.svg) 

**Why:** People with colour vision deficiencies may not be able to perceive color differences. In addition, charts or graphs can be printed in black and white or viewed on a monochrome displays.

::: details
How to handle this criteria:

#### Use patterns or symbols in addition to colour
A drawback is that many patterns can make the graph look busy, making it harder to read for everyone. This will have to be assessed by designers on a case-to-case basis.

(examples will be provided here)

#### Add in-line labelling
Adding a text label to the different categories in-line in the graph means people can just read the text.

#### Include additional visual categorisation in the legend
If icons, shapes or patterns are used, they should be included in the legend.
:::

### 2. Text has a colour contrast of 4.5:1 or 3:1 with the background
![Red design tag](/dataviz-tag-design.svg) 
- Normal text, less than 24px (18pt) must have a contrast ratio of at least 4.5:1.
- Large text, at least 24px (18pt) or 19px (14pt) bold, must have a contrast ratio of at least 3:1. This applies to Display, T1 and T2 i Figma.

In Figma, you can use the plugin [Contrast](https://www.figma.com/community/plugin/748533339900865323/Contrast) to check the contrast. You need to pass the AA contrast.

Or enter the hex values in [WebAIMs contrast checker](https://webaim.org/resources/contrastchecker/). 

NB: the actual text size for a given text style in Figma might not be the same across all NMP brands.

### 3. Graphical elements have a minimum colour contrast of 3:1 with the background
![Red design tag](/dataviz-tag-design.svg) 
This applies to visual elements that are necessary to understand the information, and does not apply to decorative elements. 

Axis lines may have less contrast than 3:1 as long as they are not crucial for reading the chart.

In Figma, you can use the plugin [Contrast](https://www.figma.com/community/plugin/748533339900865323/Contrast) to check the contrast levels.

### 4. Graphical elements have a minimum colour contrast of 3:1 with adjacent elements
![Red design tag](/dataviz-tag-design.svg) 
When shapes are placed close to each other it might be hard to differentiate between then. This typically happens in a pie chart, stacked bar chart, or when hovering. 

::: details
#### Possible solutions:
- add at least 1px margin between elements to keep them distinguishable
- use somethine other than colour, such as patterns or shapes, to distinguish between elemeents.

#### Exceptions:
- Lines that cross each other in a line chart. It is fine that they don't have good contrast between each other. It is more important that the contrast against the background is good enough.
- Charts that use sequential or diverging colour scales, for example choropleth maps or a heat maps.
:::

### 5. Text elements within the chart are minimum 12px
![Red design tag](/dataviz-tag-design.svg) 
As long as you stick to the fonts sizes in the design system (which you should), you'll be fine.

### 6. Insert at least 1px spacing between adjacent graphical elements
![Red design tag](/dataviz-tag-design.svg) 
If you put data elements with different colours next to each other the contrast can be so low that it is hard to differentiate between the elements. Adding white space between the elements can help. 

This applies to areas and bars, not lines.

### 7. Avoid visual clutter
![Red design tag](/dataviz-tag-design.svg) 
The more visual elements you add to a graph, the less attention the other elements receive. Consider carefully if you really need:
- grid lines
- axes
- tick marks on axes
- axes labels
- legend

However, make sure that the encoding of all the data is explained to the users.

### 8. The colour scheme is safe for colour blindness.
![Red design tag](/dataviz-tag-design.svg) 

::: details

:::

### 9. User preferences, such as high contrast mode, are respected
![Blue tech tag](/dataviz-tag-tech.svg)


### 10. It's possible to zoom in to 400% without breaking the layout. 
![Blue tech tag](/dataviz-tag-tech.svg)


### 11. Allow animations to be turned off, and follow the user's system/browser preferences
![Red design tagn and blue tech tag](/dataviz-tag-design-and-tech.svg)

