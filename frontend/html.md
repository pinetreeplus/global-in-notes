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
  - [link와 media](#link와-media)
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

- `<meta>`: `<meta>` HTML Element는 `<base>`, `<link>`, `<script>`, `<style>`, `<title>` 등과 같이 다른 태그로 표현 못하는 메타더이터를 표현합니다.
    - `charset="UTF-8"`: 다국어 지원하는 인코딩으로 웹에서 흔히 쓰임.
    - `name`: 메타데이터의 타입을 지시하는 Attribute. `"author"`, `"description"` 등이 있음
    - `content`: 실제 메타 컨텐츠
- `<title>`: 제목 추가(맨 상단에 뜸/북마크 시에도 뜸)
- `<style>`: CSS 지정
- `<script>`: 스크립트 지정

`<head>`에 흔히 추가 되는 `<link>`가 있습니다.

```html
<link rel="icon" href="source/image.png" />
<link rel="stylesheet" href="source/stylesheet.css" />
```

외부 JS 스크립트 연결은 `<link>`가 아닌 `<script>` 태그를 사용합니다:

```html
<script href="source/script.js" />
```

### body  

`<body>` 태그 내에는 일반적으로 다음과 같은 섹션이 있습니다.

- `<main>`: Document 당 하나씩만 쓰이는 내용부
- `<aside>`: 사이드바
- `<nav>`: 네이베이션 바
- `<footer>`: 푸터(아래 연락처 등)
- `<section>`: Document의 독립적인 부분. 일부 예외를 제외하고 항상 header를 사용해야 합니다.
- `<article>`: Document에서 자기완성적인 부분으로 독립적으로 배포/재사용 가능하여야 합니다.

[줄바꿈](./03-html/line-breaks.html)은 다음과 같이 사용됩니다.:

- `<br>`: 줄 바꿈 element
- `<hr>`: 테마의 변경 등에 사용되며 줄바꿈과 함계 수평방향으로 직선을 긋습니다.

### non semantic wrappers

[div-span](./03-html/div-span.html) 은 semantic하지 않은 wrapper입니다. 다른 태그가 사용 가능하면 그걸 사용하는게 좋습니다.

- `<div>`: `block` 레벨 컨테이너입니다.
- `<span>`: `inline` 레벨 컨테이너입니다.

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
- `<th>`: 표의 헤더를 표현하며 `<tr>` Element의 child가 될 수 있습니다
- `<td>`: 표의 셀 하나를 표현하며 `<tr>` Element의 child가 될 수 있습니다.

아래는 `<table>` 내에서의 구획 구분

- `<thead>`
- `<tbody>`
- `<tfoot>`

CSS 스타일링 등을 목적으로 열을 그룹 지을 수 있음

- `<colgroup>`, `<col>`: `<colgroup>`은 `<table>` Element 직후 설정되어야 함
  - `span`: 몇 개의 열이나 span(차지)할지

## link와 media

하이퍼링크는 클릭 또는 다른 방식으로 activated 된 경우 다른 리소스, 페이지, 페이지의 부분 등으로 navigate하게 하는 요소입니다. 웹에서의 모든 리소스는 **URL (Uniform Resource Locator)**라고 하이퍼링크가 가르키는 주소가 있습니다.

`<img>`나 `<video>` 등은 **replaced elements** 라고도 불립니다. 이는 해당 Element의 크기나 사이즈 등이 외부 리소스에 의해 정해지기 때문입니다.

### a

[`a`](./03-html/links.html)는 `href` attribute와 함께 웹페이지, 파일, 이메일 주소, 같은 페이지의 다른 부분 등으로의 하이퍼 링크를 생성합니다.

Attributes:

- `href`: 하이퍼링크가 가르키는 주소
- `target`: 어디에 링크된 URL을 표시할지
- `title`: 링크에 대한 추가 정보로 마우스를 올리면 설명으로 뜹니다.

URL에서 `#`는 **fragment identifier**로 같은 페이지 안의 특정 부분(`id`)을 가르킵니다.

Emails can also be linked to, with `mailto:`. the use of the question mark (`?`) to separate the main URL from the field values, and ampersands (`&`) to separate each field in the `mailto:` URL. This is standard URL query notation. 

### img

[`<img>`](./03-html/image.html) 태그는 document에 이미지를 embed 합니다. 이는 **void element**로 자식 컨텐츠를 가질 수 없습니다(closing tag 없음). 제대로 사용하기 위해서는 `src`와 `alt` attribute이 필요합니다.
  
Attributes:

- `src`: 이미지 URL. `src`나 `srcset` 둘 중 하나는 `<img>` Element에 필수입니다.
- `alt`: 대체 텍스트
- `width`: 가로 길이
- `height`: 세로 길이
- `sizes`: specify the layout width of the image for each of a list of media queries, or `auto` for lazy-loaded images to allow the browser to automatically select an image to display based on the layout size of the element. 

이미지는 `<figure>`로 설명 텍스트를 곁들일 수 있습니다.

### video

[`<video>`](./03-html/video.html) Element는 비디오를 embed 가능하게 해줍니다:

- `src`: 비디오의 경로
- `controls`: 비디오 컨트롤 바. 이걸 쓰던가 JS로 직접 만들어야 합니다.

`<video>` 태그 안의 `<p>`는 페이지가  `<video>` Element를 지원 안 할시 보여지는 **fallback content** 입니다.

여러 source를 사용 시 한 포맷이 작동 안 해도 유저가 비디오를 실행할 수 있을 확률이 올라갑니다. `src`를 `<video>` Element에서 뺀 후 별도의 `<source>` Element로 나열할 수 있습니다.이 경우 브라우저가 `<source>` 리스트를 넘기면서 첫 번쨰로 재생 가능한 비디오(포맷)을 사용할 것입니다. `type` Attribute는 **MIME type**을 포함하여 브라우저가 모르는 포맷을 바로 넘길 수 있게 합니다. 지시 안 할시 비디오를 일일히 로드해 봅니다.

추가 `<video>` property:

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
