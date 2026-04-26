# javascript

- [javascript](#javascript)
  - [기초](#기초)
    - [JS 스크립트 가져오기](#js-스크립트-가져오기)
    - [expressions and statements](#expressions-and-statements)
    - [간단한 IO(입출력)](#간단한-io입출력)
  - [variables](#variables)
    - [var과 hoisting](#var과-hoisting)
  - [data types](#data-types)
    - [primitive data types](#primitive-data-types)
    - [object types](#object-types)
  - [Object 기초](#object-기초)
    - [Object 생성](#object-생성)
    - [instance](#instance)
    - [dom objects:](#dom-objects)
    - [browser objects](#browser-objects)
    - [undefined과 null](#undefined과-null)
    - [array object](#array-object)
    - [math object](#math-object)
  - [이벤트](#이벤트)
    - [mouse events](#mouse-events)
    - [keyboard events](#keyboard-events)
    - [document loading events](#document-loading-events)
    - [form events](#form-events)
  - [Type 변환 function](#type-변환-function)
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

## 기초

JavaScript는 HTML document가 유저와 상호작용하여 Dynamic한 웹사이트를 만들 수 있도록 하는 **프로그래밍 언어**입니다.

### JS 스크립트 가져오기

내부 script는 JS 코드를 HTML 내에서 `<script>`로 감싸서 사용 가능합니다. 다만 이는 코드와 HTML 구조를 합치는 것으로 나쁜 습관입니다.

외부 스크립트는 JS 파일을 `<head>`에 <script src="path/to/file" defer></script>"`로 추가해 주면 됩니다.

참고: `defer`의 경우 DOM Parsing이 완료된 후 스크립트를 실행하라는 것으로 필수는 아닙니다.

### expressions and statements

Comment(주석): `//`로 한줄 주석, `/* `와 `*/` 사이에 감싸서 Multi-Line 주석

Keywords는 변수명으로 사용 불가입니다.

### 간단한 IO(입출력)

아래는 모두 `Window` API의 일부입니다:

- `open()`: 기존 또는 존재하는 browsing context (탭, 윈도우, iframe 등)에 특정 name으로 로드합니다.

  ```javascript
  open()
  open(url)
  open(url, target)
  open(url, target, windowFeatures)
  ```

  위에서 url argument는 로드할 리소스의 주소입니다.

- `alert()`: 메시지가 포함된 dialog 띄움
- `confirm()`: 메시지가 포함된 dialog를 띄우고 확인 또는 취소.
- `prompt()`: 사용자의 입력을 받는 창 띄움
- `document.write()`: 위험한 고대 기술
- `console.log()`: 터미널에 출력

## variables

변수는 재사용(Reusability)와 가독성(Readability). 되도록 `const`를 사용, 값이 변하거나 기타 필요하다면 `let`를 사용하는 것이 원칙이며 `var`은 사용하지 않습니다.

`let` 은 재사용 가능한 block 범위의 변수를 선언합니다.

`const`는 block 범위의 local 변수를 선언합니다. `const`는 `=` 등의 `assignment operator`(할당 연산자)를 통해서 변경 불가하나, 해당 `const`가 Object일 경우 property는 추가, 변경, 삭제 가능합니다.

`var`는 function scope 또는 global scoped 변수를 선언합니다.

### var과 hoisting

`var`는 피하십시오

JavaScript의 `var`에는 **Hoisting**이라는 interpreter가 변수를 스크립트 실행 전 최상위로 올리는 프로세스가 있습니다. 이는 scope을 망가뜨리며 안타깝게도 JavaScript는 function 등도 이 모양입니다.

## data types

- `typeof()`: Object의 타입 확인.

JavaScript는 **Dynamic하게 Type된 언어**이며 이는 변수가 어떤 Data Type을 가질지 선언(declare) 안 해도 된다는 이야기이며 **약한 data type check**를 합니다.

또한 operation 중 자동으로 Type이 변화합니다.

### primitive data types

Numeric types:

- `Number`: 숫자를 선언할 때 씀
- `Bigint`: **아주아주 큰** 숫자.

Non-numeric types:

- `String`
- `Boolean`
- `Null`
- `Undefined`
- `Symbol`

`NaN`가 Output에 뜨면 **Not a Number**이라는 뜻입니다.

### object types

- `Object`
- `Array`
- `Function`
- `Date`
- `RegExp`
- `Set`
- `Map`
  
## Object 기초

Objects는 **properties**와 **methods**를 가짐

The **Object** type represents one of JavaScript's data types. It is used to store various keyed collections and more complex entities. Objects can be created using the `Object()` constructor or the object initializer / literal syntax.

### Object 생성

### instance

`new` keyword는 object의 새 instance를 생성하기 위해 사용

### dom objects:

Access

- `getElementById()`: ID로 선택
- `getElementsByClassName()`: Class이름으로 선택
- `getElementsByTagName()`: Tag 이름으로 선택
- `querySelector()`: Query로 선택
- `querySelectorAll()`: Query 해당되는 거 모두 선택
- `<element>.innerText`: window에 표시된 내용 가져옴. `display:none`의 내용이면 가져오지 않음
- `<element>.innerHTML`: `=`시 XSS 위험 있으며 기존 내용 날림
- `<element>.textContent`: 해당 Element의 text를 가져옴. `none` 무시하고 스크립트와 스타일도 가져옴. `=`시 기존 내용 날림

Manipulation

- `createElement()`: 새로운 Element 생성.
- `createTextNode()`: 새로운 Text Node 추가
- `appendChild()`: 해당 Element에 마지막 child로 추가
- `<node>.remove()`: Remove node.

Element 생성->Text Node 생성->Text Node를 Element에 `appendChild()` 함. 그 후 DOM 상 Element에 생성된 Element를 `appendChild()`하면 반영됨

### browser objects

- `windows`
- `document`
- `navigator`
- `history`
- `location`
- `screen`

### undefined과 null

- `undefined`: 선언되고 값(value)가 할당(assign) 되지 않은 경우
- `null`: 존재하지 않거나 invalid한 object나 주소를 나타냅니다. JS에서는 Primitive Type의 일종이지만 `typeof()`시 Object를 나타냅니다. 버그이지만 구 코드를 너무 많이 고장낼까봐 냅두고 있습니다.
  
### array object

``Array` object에는 다음과 같은 Method가 있음:

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

### math object

`Math` 메서드는 인스턴스 생성 없이 사용됨

Properties:

- `PI`: pi 값
- `E`:

Methods:

- `abs()`: 절댓값 return
- `random()`: `0` ~ `1` 사이 랜덤 return. 범위를 바꿀 수 있음
- `max()`: argument 중 최대치 return
- `min()`: argument 중 최소치 return
- `round()`: 반올림 return
- `ceil()`: 올림 return
- `floor()`: 내림 return
- `exp()`:
- `log()`:
- `pow()`:
- `sqrt()`:

## 이벤트

### mouse events

- `click`: 클릭
- `dblclick`: 더블클릭
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

## Type 변환 function

타입은 연산 시 자동으로 변환되지만 강제변환 해주는게 안전하며:

- `Number()`: `Number`로 타입 변환
- `parseInt()`: `String`을 지정된 radix(10진법, 2진법, 16진법 등)로 return
- `parseFloat()`
- `String()`: `String`으로 타입 변환
- `Boolean()`: `0`, `null`, `undefined`, `""`,`NaN` 등은 `false`, 나머지는 나머지 `true`가 됨

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
