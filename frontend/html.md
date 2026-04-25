# html

- [html](#html)
  - [기초](#기초)
    - [Element의 구조](#element의-구조)
    - [HTML 문서의 구조](#html-문서의-구조)
  - [레이아웃](#레이아웃)
    - [head](#head)
    - [body](#body)
    - [non semantic wrappers](#non-semantic-wrappers)
  - [texts](#texts)
  - [lists](#lists)
  - [table](#table)
  - [link and media](#link-and-media)
    - [a](#a)
    - [img](#img)
    - [video](#video)
    - [audio](#audio)
    - [object](#object)
    - [embed](#embed)
  - [form](#form)
    - [input](#input)
    - [textarea](#textarea)
    - [select](#select)
  - [global attributes](#global-attributes)

## 기초

HTML(HyperText Markup Language)는 **마크업 언어**로 브라우저에게 어떻게 문서의 구조를 짤지 말합니다. HTML은 `.html` 확장자의 **HTML documents**라는 문서에 있습니다. `index.html`는 일반적으로 홈페이지의 컨텐츠로 연결이 됩니다.

주석(Comment)는 `<!--` 와  `-->` 사이의 텍스트입니다.

### Element의 구조

<img src="./03-html/element-anatomy.png" width="500">

완전한 Element는

- **Opening tag**: Name of the element
- **The content**
- **Closing tag**: Same as the opening tag but with forward slash before the element name.

Not all elements follow this pattern. **Void elements** consist of a single tag, which is typically used to insert/embed something in the document and cannot contain other HTML content.

<img src="./03-html/element-attributes.png" width="500">

Elements can also have attributes, which contain extra information about the element that isn't part of its content. An attribute should have:

- A space between it and the element name. When an element has more than one attribute, the attributes should be separated by spaces too.
- The attribute name, followed by an equals sign (`=`).
- An attribute value, wrapped with opening and closing quote marks.

Boolean attributes are often added without values, where they are set to `true`.

### HTML 문서의 구조

- `<!DOCTYPE html>`: 파일이 HTML 형식이라는 것을 나타냄
- `<html>`: 페이지의 모든 컨텐츠를 감쌈. `root Element`라고도 하며 주언어 설정시 `lang="<lang-code>"`를 더함
- `<head>`: 기계가 읽는 document의 metadata(title, scripts, style 등)
- `<body>`: 브라우저에서 렌더링 될 부분
- 
## 레이아웃

### head

[Head 예문](./03-html/head.html)

- `<meta>`: The `<meta>` HTML element represents metadata that cannot be represented by other meta-related elements, such as `<base>`, `<link>`, `<script>`, `<style>`, or `<title>`.
    - `charset="UTF-8"`: Supports multi-lang. Commonly used text encoding for web.
    - `name`: Attribute specifying the type of meta element. Adding `"author"` and `"description"` may be helpful
    - `content`: Actual meta content.
- `<title>`: Adds a title
- `<style>`: Defines CSS to be used
- `<script>`: Defines JS to be used

There are some `<link>`s added to the `<head>` section. Examples are:

- `<link rel="icon" href="source/image.png" />`
- `<link rel="stylesheet" href="source/stylesheet.css" />`

And an external JS script is added as:

- `<script href="source/script.js" />`

### body  

- `<main>`: Main part of the page only to be used once per document.
- `<aside>`: Side bar
- `<nav>`: Navigation bar
- `<footer>`: Footer
- `<section>`: Generic standalone section of a document. Sections should always have a heading, with very few exceptions.
- `<article>`: Self-contained composition in a document, page, application, or site, which is intended to be independently distributable or reusable (e.g., in syndication).

[Line breaks](./03-html/line-breaks.html) are used as follows:

- `<br>`: Line break element; it is the only way to force a rigid structure in a situation where you want a series of fixed short lines.
- `<hr>`: Creates a horizontal rule in the document that denotes a thematic change in the text (such as a change in topic or scene).

### non semantic wrappers

[div-span](./03-html/div-span.html) are non-semantic wrappers. Use other tags where you can.

- `<div>`: Generic container for flow content. It has no effect on the content or layout until styled in some way using CSS
- `<span>`: generic inline container for phrasing content, which does not inherently represent anything. It can be used to group elements for styling purposes (using the class or id attributes), or because they share attribute values, such as lang. It should be used only when no other semantic element is appropriate. `<span>` is very much like a `<div>` element, but `<div>` is a block-level element whereas a `<span>` is an inline-level element.

## texts

[Texts](./03-html/texts.html)

- `<h1>`~`<h6>`: Headers
- `<p>`: Paragraph
- `<br>`: Line break
- `<hr>`: Horizontal Line (Actually draws one)
- `<strong>`/`<b>`: Makes text bold for strong importance, `<b>` is not semantic.
- `<em>`/`<i>`: Makes text italic for importance. `<i>` not semantic

Citations use:

- `<q>`: Inline quotation. `cite` attribute for reference.
- `<blockquote>`: Blockquote.
- `<cite>`: Inline citations. Not that useful.

More text ops:

- `<abbr>`: wrap around an abbreviation or acronym.
- `<sup>`: Superscript
- `<sub>`: Subscript

For marking up computer code:

- `<code>`: For marking up generic pieces of computer code.
- `<pre>`: For retaining whitespace (generally code blocks) — if you use indentation or excess whitespace inside your text, browsers will ignore it and you will not see it on your rendered page. If you wrap the text in `<pre></pre>` tags however, your whitespace will be rendered identically to how you see it in your text editor.
- `<var>`: For specifically marking up variable names.
- `<kbd>`: For marking up keyboard (and other types of) input entered into the computer.
- `<samp>`: For marking up the output of a computer program.

The time goes by [`<time>`](./03-html/time.html), and can take many types of `datetime` format.

## lists

- `<ul>` `<ol>`: Unordered/Ordered lists
    - `<li>`: Items inside lists
- `<dl>`: Description List
    - `<dt>`, `<dd>`: Description Term and related description

## table

[`<table>`](./03-html/table.html) contains tabular data

Properties

- `colspan`: represents the number of columns this cell must span
- `rowspan`: represents the number of rows this cell must span

Tags

- `<caption>`: Specifies the caption (or title) of a table, providing the table an accessible name or accessible description.
- `<tr>`: Row of cells in a table
- `<th>`: Defines a cell as the header of a group of table cells and may be used as a child of the `<tr>` element
- `<td>`: Defines a cell of a table that contains data and may be used as a child of the `<tr>` element.
- `<thead>`
- `<tbody>`
- `<tfoot>`
- `<colgroup>`, `<col>`: `<colgroup>` should be included as a child of the table, just after the opening `<table>` element
  - `span`: How many columns to span

## link and media

Hyperlinks are features of an HTML document that, when clicked or otherwise activated, cause the browser to navigate to other documents or resources, sometimes specific parts of documents. 

Each resource on the web has an address, known as a **URL (Uniform Resource Locator)**, which hyperlinks point to.

Elements like `<img>` and `<video>` are sometimes referred to as replaced elements. This is because the element's content and size are defined by an external resource.

### a

[`a`](./03-html/links.html), with its href attribute, creates a hyperlink to web pages, files, email addresses, locations in the same page, or anything else a URL can address.

Attributes:

- `href`: The URL that the hyperlink points to.
- `target`: Where to display the linked URL,
- `title`: Contains additional information about the link. Hovering over the link displays the title as a tooltip

In URLs, `#` represent fragment identifier pointing to a specific point(id) in a page.

When linking to non-html resources, leave a clear sign.

Emails can also be linked to, with `mailto:`. the use of the question mark (`?`) to separate the main URL from the field values, and ampersands (`&`) to separate each field in the `mailto:` URL. This is standard URL query notation. 

### img

[`<img>`](./03-html/image.html) tag embeds an image into the document. It is a void element, which cannot have any child content. It needs `src` and `alt` attributes to be useful.
  
Attributes:

- `src`: The image URL. At least one of `src` and `srcset` is required for an `<img>` element
- `srcset`: One or more strings separated by commas, indicating possible image sources for the user agent to use.
  - `<number>x`: Use this when the image stays the same size on the screen, but you want to serve a sharper version to high-density (Retina) displays.
  - `<number>w`: Switch based on the width of the browser.
- `alt`: Defines text that can replace the image in the page.
- `width`: Width
- `height`: height
- `sizes`: specify the layout width of the image for each of a list of media queries, or auto for lazy-loaded images to allow the browser to automatically select an image to display based on the layout size of the element. 

Images can be annotated by captions with `<figure>`.

### video

[`<video>`](./03-html/video.html) element allows you to embed a video. Some features to note are:

- `src`: Contains a path to the video you want to embed.
- `controls`: You must either use the `controls` attribute to include the browser's own control interface, or build your interface using the appropriate JavaScript API.

Paragraph inside the `<video>` tags are **fallback content** to be displayed if the page doesn't support the `<video>` element.

Using multiple sources help since it is possible that the video might not play for you, because different browsers support different video (and audio) formats. 

You can take out the `src` out of the `<video>` element and include separate `<source>` elements. In this case the browser will go through the `<source>` elements and play the first one that it has the codec to support.

`type` attribute contains the **MIME type** and browsers can use the type to immediately skip videos they don't understand. If not specified, browser will manually load.

Other `<video>` features:

- `width`: 가로 길이
- `height`: 세로 길이
- `autoplay`: 쓰지 말기
- `loop`: 끝나면 재시작. 쓰지 말기
- `muted`: 기본으로 무음 상태
- `poster`: 비디오 시작 전 표시될 이미지의 URL
- `preload`: 큰 파일을 버퍼링 하기 위해 사용되며 아래 value를 가질 수 있음:
  - `"none"`: 파일 버퍼링 x
  - `"auto"`: 미디어 파일 버퍼링
  - `"metadata"`: Metadata만 버퍼링

비디오에 텍스트를 넣기 위해선, **WebVTT** 포맷과 `<track>` Element 사용.
### audio

[`<audio>`](./03-html/audio.html) tag embeds sound content in documents. It may contain one or more audio sources, represented using the src attribute or the `<source>` element: the browser will choose the most suitable one.

The `<audio>` element doesn't support the `width`/`height` and `poster` attributes. Other than that, it's same as the `<video>`

### object

`<object>` tag represents an external resource, which can be treated as an image, a nested browsing context, or a resource to be handled by a plugin

### embed

`<embed>` tag embeds external content at the specified point in the document. This content is provided by an external application or other source of interactive content such as a browser plug-in. Not used much today, use `<iframe>` if you can.

## form

[`<form>`](./03-html/form.html) tag represents a document section containing interactive controls for submitting information.

`<label>` represents a caption for an item in a user interface.
  
- `for`: The value is the id of the labelable form control in the same document, associating the `<label>` with that form control. Note that its JavaScript reflection property is `htmlFor`.

`legend`: 
`fieldset`: 

### input

The `<input>` HTML element is used to create interactive controls for web-based forms in order to accept data from the user
  
`type` tag has many values:

- `button`: 버튼
- `submit`: submit 버튼
- `checkbox`: 여러개나 아무것도 선택하지 않는 것 가능
- `radio`: 한 개 선택
- `email`
- `color`
- `date`
- `file`
- `password`
  
Properties
 
- `name`: form control의 이름. form과 합께 name/value 쌍의 일부로 제출됨.
- `hidden`: 숨김
- `autofocus`: Boolean attribute indicating whether the element should be focused on page load or, if it is nested inside a `<dialog>` or `popover` element, when the `<dialog>` or `popover` is shown.
- `checked`: `radio`와 `checkbox`는 Boolean(true/falce) `checked` property가 있을 수 있음

### textarea

`textarea` represents a multi-line plain-text editing control, useful when you want to allow users to enter a sizeable amount of free-form text, for example a comment on a review or feedback form.

### select

[Click me](./03-html/select.html)

`<select>`는 드롭다운 메뉴를 생성합니다. 안에 `options` Element를 가지고 있습니다.

`<option>` value:

- `value`: Attribute containing the data value to submit to the server. If none specified, content will be the value.
- `selected`: Specifies the current selectedness of the element; that is, whether the `<option>` is selected or not.

## global attributes