# javascript

- [javascript](#javascript)
  - [fundamentals](#fundamentals)
    - [using js scripts](#using-js-scripts)
    - [expressions and statements](#expressions-and-statements)
    - [simple io](#simple-io)
  - [variables](#variables)
    - [var and hoisting](#var-and-hoisting)
  - [data types](#data-types)
    - [primitive data types](#primitive-data-types)
    - [object types](#object-types)
    - [undefined and null](#undefined-and-null)
    - [data type conversion functions](#data-type-conversion-functions)
  - [numerical operations](#numerical-operations)
  - [string operations](#string-operations)
    - [string properties](#string-properties)
    - [string methods](#string-methods)
  - [operators](#operators)
    - [arithmetic operator](#arithmetic-operator)
    - [allocation operator](#allocation-operator)
    - [comparison operator](#comparison-operator)
    - [conditional operator](#conditional-operator)
    - [logical operator](#logical-operator)
  - [loop](#loop)
    - [if statement](#if-statement)
    - [switch statement](#switch-statement)
    - [for statement](#for-statement)
    - [while statement](#while-statement)
    - [break and continue](#break-and-continue)
  - [function](#function)
    - [reusable functions](#reusable-functions)
    - [anonymous functions](#anonymous-functions)
    - [immediately invoked function expression](#immediately-invoked-function-expression)
    - [arrow functions](#arrow-functions)
  - [event](#event)
    - [mouse events](#mouse-events)
    - [keyboard events](#keyboard-events)
    - [document loading events](#document-loading-events)
    - [form events](#form-events)
    - [even handler](#even-handler)
  - [object fundamentals](#object-fundamentals)
    - [creating objects](#creating-objects)
    - [instance](#instance)
  - [built in objects](#built-in-objects)
    - [array object](#array-object)
    - [date object](#date-object)
    - [math object](#math-object)
    - [browser objects](#browser-objects)
  - [dom objects:](#dom-objects)

## fundamentals

### using js scripts

Internal scripts can be defined by wrapping JS codes inside `<script>` tag
External scripts can be linked by adding `<script src="path/to/file"></script>"`.

### expressions and statements

Comments: `//` for one-line comment and texts inside `/* ` and `*/` for multi-line comment.

Keywords cannot be used as variable names.

### simple io

Below are all part of the `Window` API:

- `open()`: Loads a specified resource into a new or existing browsing context (that is, a tab, a window, or an iframe) under a specified name.

  ```javascript
  open()
  open(url)
  open(url, target)
  open(url, target, windowFeatures)
  ```

- `alert()`: Instructs the browser to display a dialog with an optional message, and to wait until the user dismisses the dialog.
- `confirm()`: Instructs the browser to display a dialog with an optional message, and to wait until the user either confirms or cancels the dialog.
- `prompt()`
- `document.write()`
- `console.log()`

## variables

Variables are used for reusability and readability. Use `const` when you can, `let` when you have to, and don't use `var`

`let` declaration declares re-assignable, block-scoped local variables, optionally initializing each to a value.

`const` declaration declares block-scoped local variables. The value of a constant can't be changed through reassignment using the assignment operator, but if a constant is an object, its properties can be added, updated, or removed.

`var` statement declares function-scoped or globally-scoped variables, optionally initializing each to a value.

### var and hoisting

Avoid `var` when you can.

JavaScript **Hoisting** refers to the process whereby the interpreter appears to move the declaration of functions, variables, classes, or imports to the top of their scope, prior to execution of the code. This happens to JavaScript functions.

## data types

- `typeof()`: Checks for object type.

JavaScript is **Dynamically typed language**, which means you don't need to specify what data type a variable will contain,It has **weak data type check**.

Also, data types can be automatically converted doing calculation.

### primitive data types

Numeric types:

- `Number`: Number type you'd use.
- `Bigint`: For **VERY VERY LARGE** numbers.

Non-numeric types:

- `String`
- `Boolean`
- `Null`
- `Undefined`
- `Symbol`

`NaN` in result means that it is **Not a Number**.

### object types

- `Object`
- `Array`
- `Function`
- `Date`
- `RegExp`
- `Set`
- `Map`

### undefined and null

- `undefined`
- `null`

### data type conversion functions

- `Number()`: Make it a `Number`
- `parseInt()`: Parses a string argument and returns an integer of the specified radix.
- `parseFloat()`
- `String()`
- `Boolean()`

## numerical operations

- `toFixed()`: Returns a string representing this number using fixed-point notation with the specified number of decimal places.

## string operations

You can use `"`, `'`, or `\`` to wrap strings. The back tick is called **Template literal**s.

Template literals are literals delimited with backtick (`\``) characters, allowing for multi-line strings, string interpolation with embedded expressions, and special constructs called tagged templates.

Template literals are sometimes informally called template strings, because they are used most commonly for string interpolation (to create strings by doing substitution of placeholders). However, a tagged template literal may not result in a string; it can be used with a custom tag function to perform whatever operations you want on the different parts of the template literal.

Inside a template literal, you can wrap JavaScript variables or expressions inside `${ }`, and the result will be included in the string:

You can also use **square bracket notation** like `Array`s to get a character at specific index.

### string properties

- `length`: Retrieves length of the string

### string methods

- `includes()`: Checks if the string contains given substring. Returns `true` or `false`.
- `startsWith()`, `endsWith()`: Check if the string starts/ends with certain substring.
- `indexOf()`: Returns index of the first occurence of the substring. `-1` if not present. You can [search for subsequent occurences](./03-javascript/string-operations.js) by giving greater index than the first occurent for the second parameter.
- `slice()`: 

## operators

Reserved syntax(keywords) consisting of punctuation or alphanumeric characters that carries out built-in functionality.

### arithmetic operator

- `+`:
- `-`:
- `*`:
- `/`:
- `%`:
- `++`: Increment by 1
- `--`: Decrement by 1

### allocation operator

- `=`:
- `+=`:
- `-=`:
- `*=`
- `/=`:
- `%=`:

### comparison operator

Returns `true` or `false`.

- `==`, `!=`: Automatically converts when comparing.
- `===`, `!==`: Does not covert when comparing.
- `<`, `<=`:
- `>`, `>-`:

### conditional operator

Also called ternary operator, conditional operator uses `?` and `:`.

`(condition)?<operation-when-true>:<operation-when-false>`

### logical operator

OR operator uses `||`.

AND operator uses `&&`

NOT operator uses `!`

## loop

### if statement

### switch statement

`switch` `case` `break`

### for statement

### while statement

`while` statement

`do`~`while` statement

### break and continue

## function

### reusable functions

### anonymous functions

### immediately invoked function expression

### arrow functions

## event

### mouse events

- `click`:
- `dblclick`:
- `mousedown`:
- `mouseup`:
- `mousemove`:
- `mouseover`:
- `mouseout`:

### keyboard events

- `keydown`:
- `keyup`:
- `keypress`:

### document loading events

- `abort`:
- `error`:
- `load`:
- `resize`:
- `scroll`:
- `unload`:

### form events

- `blur`:
- `change`:
- `focus`:
- `reset`:
- `submit`:

### even handler

Naming convention for event handlers is `on` + `<event>`, where the first letter of `<event>` is capitalized.

## object fundamentals

Objects have **properties** and **methods**

The **Object** type represents one of JavaScript's data types. It is used to store various keyed collections and more complex entities. Objects can be created using the `Object()` constructor or the object initializer / literal syntax.

### creating objects



### instance

`new` keyword is used to create an instance of an object.

## built in objects

### array object

Methods of `Array` object includes:

- `concat()`:
- `every()`:
- `filter()`:
- `forEach()`:
- `indexOf()`:
- `join()`:
- `push()`:
- `unshift()`:
- `pop()`:
- `shift()`:
- `splice()`:
- `slice()`:
- `reverse()`:
- `sort()`:
- `toString()`:

### date object

### math object

`Math` method is used without creating an instance.

Properties:

- `E`:
- `PI`:
- `SQRT2`:
- `SQRT1_2`:
- `LN2`:
- `LN10`:
- `LOG2E`:
- `LOG10E`:

Methods:

- `abs()`:
- `cos()`:
- `sin()`:
- `tan()`:
- `acos()`:
- `asin()`:
- `atan()`:
- `round()`:
- `ceil()`:
- `floor()`:
- `exp()`:
- `log()`:
- `pow()`:
- `random()`:
- `max()`:
- `min()`:
- `sqrt()`:
  
### browser objects

Some [browser related objects](../browser/browser-objects.md) are:

- `windows`
- `document`
- `navigator`
- `history`
- `location`
- `screen`

## dom objects:

Some [DOM](../document-object.md) related objects are:

Access

- `getElementById()`: 
- `getElementByClassName()`:
- `getElementByTagName()`:
- `querySelector()`:
- `querySelectorAll()`:
- `<element>.innerText`: What's displayed on the windows. Does not bring you `display:none`
- `<element>.innerHTML`: Brings all there is.
- `<element>.textContet`:

Manipulation

- `createElement()`: Creates a new HTML element that has the specified localName.
- `createTextNode()`:
- `appendChild()`
- `<node>.remove()`: Remove node.