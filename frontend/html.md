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
  - [form](#form)
    - [input](#input)
    - [select](#select)

## 기초

HTML(HyperText Markup Language)는 **마크업 언어**로 브라우저에게 어떻게 문서의 구조를 짤지 말합니다. HTML은 `.html` 확장자의 **HTML documents**라는 문서에 있습니다. `index.html`는 일반적으로 홈페이지의 컨텐츠로 연결이 됩니다.

주석(Comment)는 `<!--` 와  `-->` 사이의 텍스트입니다.

### Element의 구조

<img src="./03-html/element-anatomy.png" width="500">

완전한 Element는

- **Opening tag**: Element 이름
- **The content**: Element의 컨텐츠(내용)
- **Closing tag**: Opening tag와 같지만 Element 이름 전 `/`.

모든 Element가 해당 패턴을 따르지는 않습니다. **Void elements** 는 태그가 하나뿐이며, 일반적으로 리소스를 document에 넣기 위해 사용되며 다른 HTML 컨텐츠를 포함 할 수 없습니다..

<img src="./03-html/element-attributes.png" width="500">

Element는 **attribute**을 가질 수 있는데 이는 Element의 추가 정보를 제공합니다. Attribute는:

- Element 이름과의 space로 떨어져 있어야 함. 복수의 Attribute이 있을 경우도 마찬가지로 space로 떨어져 있어야 함
- Attribute 이름 후 (`=`).
- Attribute value(값)이 열고 닫는 `"`나 `'`안에 있어야 합니다.

Boolean(`true`/`false`) attribute은 value 없이 적히는 경우가 많으며 그 경우 `true`입니다.

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

- `<h1>`~`<h6>`: 헤더. `h1`은 document 당 1개씩 사용하고 총 태그의 계층이 페이지 당 3개가 넘지 않는 것이 좋음
- `<p>`: 문단
- `<br>`: 줄바꿈
- `<hr>`: 줄바꿈. 수평으로 직선 쭉 그음.
- `<strong>`/`<b>`: 큰 강조를 위한 볼드체. `<b>`는 sementic하지 않음.
- `<em>`/`<i>`: 중요함을 나타내기 위한 이탤릭채. `<i>` 는 sementic하지 않음.

인용:

- `<q>`: 인라인 인용. `cite` attribute에 레퍼런스 추가 가능.
- `<blockquote>`: 여러줄짜리 인용.
- `<cite>`: 인라인 인용. 많이 안 씀

추가 텍스트 작업:

- `<abbr>`: 줄임말 등에
- `<sup>`: 위에 작게 쓰는 글자.
- `<sub>`: 아래 작게 쓰는 글자

- `<pre>`: 해당 태그 안에 있는 내용은 `<br>` 등이 없어도 줄바꿈 등이 유지됨

시간은 [`<time>`](./03-html/time.html)이며 다양한 `datetime` 형식 사용 가능.

## lists

- `<ul>` `<ol>`: Unordered/Ordered lists
    - `<li>`: 리스트 안의 개별 아이템
- `<dl>`: Description List
    - `<dt>`, `<dd>`: Description Term and related description

## table

[`<table>`](./03-html/table.html)은 테이블 데이터를 표현.

Properties

- `colspan`: 해당 셀이 몇 column(열)을 차지하는가
- `rowspan`: 해당 셀이 몇 row(행)을 차지하는가

관련 Tags

- `<caption>`: 테이블의 캡션(or title)을 설정해서 표의 이름 설정이나 설명을 함
- `<tr>`: 표의 한 줄
- `<th>`: 표의 헤더를 표현하며 `<tr>`의 child Element
- `<td>`: Defines a cell of a table that contains data and may be used as a child of the `<tr>` element.

아래는 `<table>` 내에서의 구획 구분

- `<thead>`
- `<tbody>`
- `<tfoot>`

CSS 스타일링 등을 목적으로 열을 그룹 지을 수 있음

- `<colgroup>`, `<col>`: `<colgroup>`은 `<table>` Element 직후 설정되어야 함
  - `span`: 몇 개의 열이나 span(차지)할지

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

[`<audio>`](./03-html/audio.html) 태그는 음성 리소스를 embed 합니다. 하나 또는 그 이상의 오디오 소스를 embed 가능하며, `src` Attribute이나 `<source>` Element(브라우저가 가장 적합한 걸 고름)로 표현.

`<audio>` Element는 `width`/`height`와`poster` Attributes이 없다는 거 외에는 `<video>`와 동일

## form

[`<form>`](./03-html/form.html) 태크는 정보 제출을 위한 상호작용 가능한 섹션입니다.

`<label>`는 유저 인터페이스 상의 구역을 나타냅니다.
  
- `for`: `<label>`을 해당 `id`를 가진 form control과 연관시킴. 자바스크립트 상에선 `htmlFor`.

`legend`: 
`fieldset`: 

### input

[`<input>`]() Element는 사용자에게 데이터를 입력받기 위한 웹 form에서 사용됩니다.
  
`<type>` tag has many values:

- `button`: 버튼
- `submit`: submit 버튼
- `checkbox`: 여러개나 아무것도 선택하지 않는 것 가능
- `radio`: 한 개 선택
- `email`
- `color`
- `date`
- `file`
- `password`
- 
Properties
 
- `name`: form control의 이름. form과 합께 name/value 쌍의 일부로 제출됨.
- `hidden`: 숨김
- `autofocus`: Boolean으로 해당 Element가 페이지 로드 시 `focus` 되어야 할지 표기
- `checked`: `radio`와 `checkbox`는 Boolean(true/falce) `checked` property가 있을 수 있음

[`<textarea>`](./03-html/textarea.html)는 여러줄 짜리 텍스트 입력창을 생셩하는 `<input>`과 별개의 Element입니다.

### select

[Click me](./03-html/select.html)

`<select>`는 드롭다운 메뉴를 생성합니다. 안에 `options` Element를 가지고 있습니다.

`<option>` value:

- `value`: 서버에 제출할 값(value). 명시되지 않으면 `<option>`의 컨텐츠가 value임
- `selected`: 현재 option이 `select`되었는지 표기; 
