# css

- [css](#css)
  - [fundamentals](#fundamentals)
    - [ruleset](#ruleset)
    - [types](#types)
    - [casacading](#casacading)
  - [box model](#box-model)
    - [border](#border)
    - [margin](#margin)
    - [padding](#padding)
    - [document layout](#document-layout)
    - [positioning](#positioning)
  - [selectors](#selectors)
    - [combinator](#combinator)
    - [chaining selector](#chaining-selector)
    - [attribute selector](#attribute-selector)
  - [text styling](#text-styling)
    - [font](#font)
    - [text handling](#text-handling)
    - [list and table styling](#list-and-table-styling)
    - [text decoration](#text-decoration)
  - [background](#background)
    - [gradation](#gradation)
  - [responsive web commons](#responsive-web-commons)
    - [media query](#media-query)
  - [flexbox](#flexbox)
  - [grid](#grid)
    - [grid templates](#grid-templates)
  - [pseudo class](#pseudo-class)
    - [responsive classes](#responsive-classes)
    - [status classes](#status-classes)
    - [document structure classes](#document-structure-classes)
    - [logical classes](#logical-classes)
    - [pseudo elements](#pseudo-elements)
  - [css functions](#css-functions)
    - [css variables](#css-variables)
    - [math functions](#math-functions)
    - [visual functions](#visual-functions)
  - [transform](#transform)
  - [transition](#transition)
  - [animation](#animation)

## fundamentals

### ruleset

- [`textalign`](./03-css/)

### types

1. Inline stylesheets
2. External stylesheets
3. Inline styleshees

### casacading

Inherit parent style

hierarchy of priority:

1. `!important` flag: Priority #1. Don't use.
2. Origin
   1. 
3. Specificity
   1. 
4. Order

## box model

border:
margin: The padding sits between the border and the content area and is used to push the content away from the border.
padding:

### border

Properties:

- `border-style`:
  - `none`:
  - `hidden`:
  - `solid`:
  - `dotted`:
  - `dashed`:
  - `double`:
    - `border-width` is the gap between two lines.
- `border-width`:
- `border-color`:
- `border-radius`:

### margin

### padding

### document layout

- `display`
  - `block`
  - `inline`
  - `inline-block`
  - `none`
- `float`
  - `left`
  - `right`
  - `none`
- `clear`
  - `left`
  - `right`
  - `none`

### positioning

There are some properties worth noting:

- `top`:
- `bottom`:
- `left`:
- `right`

`position` property sets how an element is positioned in a document. Values include:

- `static`: The element is positioned according to the Normal Flow of the document. The `top`, `right`, `bottom`, `left`, and `z-index` properties have no effect. This is the default value.
- `relative`: The element is positioned according to the normal flow of the document, and then offset *relative to itself* based on the values of `top`, `right`, `bottom`, and `left`.
- `absolute`: The element is removed from the normal document flow, and no space is created for the element in the page layout. The element is positioned relative to its closest positioned ancestor (if any) or to the initial containing block.
- `fixed`: Same as `absolute` but positioned relative to its initial contianing block, which is the viewport in the case of visual media.

`margin-right:auto;` and `margin-top:auto` will give you center positioning

Or just use flexbox and `justify-content:center; align-items:center`

## selectors

Simple selectors include:

- `*`: Universal selectors
- `<tag>`: Type selectors
- `.<class-name>`: Class selectors
- `#<id-name>`: ID selectors

### combinator

More complex selectors:

- `Descendant selector`: Space between tags
- `Child selector`: `>`
- `Sibling combinator`: `~`
- `Adjacent selector`: `+`

### chaining selector

### attribute selector

[Attribute Selectors](./03-css/attribute-selectors.css)

The CSS attribute selector matches elements based on the element having a given attribute explicitly set, with options for defining an attribute value or substring value match.

- `[attr]`: Elements with an attribute name of `attr`.
- `[attr=value]`: Elements with an attribute name of `attr` whose value is exactly `value`.
- `[attr~=value]`: Elements with an attribute name of `attr` whose value is a whitespace-separated list of words, one of which is exactly `value`.
- `[attr|=value]`: Elements with an attribute name of `attr` whose value can be exactly `value `or can begin with `value` immediately followed by a hyphen, `-` (U+002D). It is often used for language subcode matches.
- `[attr^=value]`: Elements with an attribute name of `attr` whose value is prefixed (preceded) by `value`.
- `[attr$=value]`: Elements with an attribute name of `attr` whose value is suffixed (followed) by `value`.
- `[attr*=value]`: Elements with an attribute name of `attr` whose value contains at least one occurrence of `value` within the string.
- `[attr operator value i]`: Adding an `i` (or `I`) before the closing bracket causes the value to be compared case-insensitively (for characters within the ASCII range).
- `[attr operator value s]`: Adding an `s` (or `S`) before the closing bracket causes the value to be compared case-sensitively (for characters within the ASCII range).

## text styling

[font styling](./03-css/font.css)

### font

- `font-size`:

Web Font

### text handling

- `line-height`:
- `text-tramsform`:
- [`text-align`](./03-css/font-styling.css):
- `letter-spacing`

### list and table styling

- `list-style`
- `border-collapse`: Can be used for others too

### text decoration

- `text-decoration-color`:
- `text-decoration-line`:
  - `line-through`
- `text-decoration-style`:
- `text-decoration-thickness`:

## background

- `background-color`
- `background-clip`
- `background-position`
- `background-image`
- `background-repeat`
  - `no-repeat`
  - `repeat`
  - `repeat-x`
  - `repeat-y`
- `background-origin`: Sets the background's origin: from the border start, inside the border, or inside the padding. It is ignored when `background-attachment` is `fixed`.
- `background-attachment`
  - `scroll`
  - `fixed`
- `background-size`

`background` shorthand

### gradation

Linear gradient can be applied with:

`background: linear-gradient(<angle>,<starting-color>,<ending-color>)`

Radial gradient can be declared with

`background: radial-gradient(<circle || ecllipse>,<starting-color>,<ending-color>)`


## responsive web commons

### media query

[Media query (`@media`)](./03-css/media-query.css) CSS **at-rule** can be used to apply part of a style sheet based on the result of one or more media queries.

`em`:
`rem`:

- `viewport`:
- `object-fit` property sets how the content of a replaced element, such as an `<img>` or `<video>,` should be resized to fit its container.


Properties that apply to both flexbox and grid layouts include:

- `gap`: Shorthand property sets the gaps (also called gutters) between rows and columns. This property applies to multi-column, flex, and grid containers.

## flexbox

[Flexbox](./03-css/flexbox.css)

Flexbox is a one-dimensional layout method for arranging items in rows or columns. Items flex (expand) to fill additional space or shrink to fit into smaller spaces.

- Vertically center a block of content inside its parent.
- Make all the children of a container take up an equal amount of the available width/height, regardless of how much width/height is available.
- Make all columns in a multiple-column layout adopt the same height even if they contain a different amount of content.

Apply `display: flex;` to the container element. Some important terms for the containter are:

- Main axis: 
- Cross axis:

Properties for the flexbox containers
- `flex-direction`
  - `row`
  - `row-reverse`
  - `column`
  - `column-reverse`
- `flex-wrap`: Sets whether flex items are forced onto one line or can wrap onto multiple lines.
  - `wrap`: The flex items break into multiple lines
  - `nowrap`: Laid out in a single line which may cause the flex container to overflow. This is the default value.
  - `wrap-reverse`: Behaves the same as `wrap`, but cross-start and cross-end are inverted.
- `flex-flow`: Shorthand for direction and wrap
- `flex-basis`: Default size of flexbox element
- `flex-grow`
- `flex-shrink`
- `flex`: Shorthand for `flex-grow` and `flex-shrink`

Below are properties used for alignment of flexbox elements
- `justify-content`: Alignment along the main axis
  - `flex-start`
  - `flext-end`
  - `center`
  - `space-between`: First and last items to the border, and distribute space evenly
- `align-items`: Alignment along the cross aix
  - `flex-start`
  - `flext-end`
  - `center`
  - `strech`: Default. Stretch to fill cross axis

## grid

[grid](./03-css/grid.css)

Apply `display: grid;` to the container element

To define fixed columns and rows in grid containers:

- `grid-template-columns`
- `grid-template-rows`

To automatically add rows, `grid-auto-rows` and add row heights. 

The `repeat()` CSS function represents a repeated fragment of the track list, allowing a large number of columns or rows that exhibit a recurring pattern to be 
written in a more compact form. The function takes following arguments: 

- Repeat count: The first argument specifies the number of times that the track list should be repeated. It is specified with an integer value of `1` or more, or with the keyword values `auto-fill` or `auto-fit`. These keyword values repeat the set of tracks as many times as is needed to fill the grid container.
  - `auto-fill`: If the grid container has a definite or maximal size in the relevant axis, then the number of repetitions is the largest possible positive integer that does not cause the grid to overflow its grid container. 
  - `auto-fit`: Behaves the same as `auto-fill`, except that after placing the grid items any empty repeated tracks are collapsed.
- Tracks: The second argument specifies the set of tracks that will be repeated. Fundamentally this consists of one or more values, where each value represents the size of that track. 

The `minmax()` CSS function defines a size range greater than or equal to min and less than or equal to max. It is used with CSS grids. A function takes two parameters, `min` and `max`. Each parameter can be a `<length>`, a `<percentage>` or one of the keyword values `max-content`, `min-content`, or `auto`. The second parameter `max` also accepts `<flex>` values. (this `fr` units can only be used for `max`, and are invalid for `min`.) If `max` < `min`, then `max` is ignored and `minmax(min,max)` is treated as `min`.

### grid templates

Assign `grid-area` property to each grid itmes. Then place them with `grid-template-areas`

## pseudo class

### responsive classes

This section contains pseudo-classes that react to user actions.

- `:link`: Element that has not yet been visited
- `:visited`
- `:hover`
- `:active`: Element (such as a button) that is being activated by the user.
- `:focus`

### status classes

This section contains pseudo-classes that targets element states.

- `:target`:
- `:enabled`: Represents any enabled element.
- `:disabled`: 
- `:checked`

### document structure classes

This section contains pseudo-classes that targets element based on structure.

- `:first-child`:
- `:last-child`:
- `:only-child`:
- `:nth-child`:
  - `<number>`
  - `even`
  - `odd`
- `:nth-of-type`:
- `:root`

### logical classes

Requires a selector list, a comma-separated list of one or more selectors, as its argument.

- `:not()`: Elements that do not match a list of selectors.
- `:is()`: Selects any element that can be selected by one of the selectors in the argument list.
- `:has()`: Represents an element if any of the relative selectors that are passed as an argument match at least one element when anchored agains
  
### pseudo elements

Adds elements in specific parts of the document. Note there are 2 `:`.

- `::first-line`:
- `::first-letter`:
- `::before`:
- `::after`:

## css functions

**CSS value functions** are statements that invoke special data processing or calculations to return a CSS value for a CSS property. CSS value functions represent more complex data types and they may take some input arguments to calculate the return value.

### css variables

`:var()`

### math functions

- `calc()`
- `min()`
- `max()`
- `clamp()`

### visual functions

Visual effect functions here can be applied to `filter` property.

- `blur()`:
- `brightness()`:
- `contrast()`:
- `drop-shadow()`:
- `grayscale()`:
- `invert()`:
- `sepia()`:
- `opacity()`:
- `hue-rotate()`:
- `saturate()`

## transform

`transform` property is used with following functions:

- `translate()`: Used to move elements.
- `scale()`:
- `rotate()`:
- `skew()`:

## transition

Properties

- `transition-property`
- `transition-duration`
- `transition-timing-function`
- `transition-delay`
- `transition`

## animation

CSS `animation` property

- `animation`:
- `animation-delay`
- `animation-direction`
- `animation-duration`
- `animation-iteration-count`
- `animation-name`
- `animation-timing-function`

`@keyframes`

