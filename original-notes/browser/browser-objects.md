# browser-objects

- [browser-objects](#browser-objects)
  - [window object](#window-object)
  - [history object](#history-object)
  - [location object](#location-object)
  - [screen object](#screen-object)
  - [navigator object](#navigator-object)

## window object

`window` represents a window containing a DOM document; the `document` property points to the DOM document loaded in that window. A window for a given document can be obtained using the `document.defaultView` property.

A global variable, `window`, representing the window in which the script is running, is exposed to JavaScript code.

properties

- `document`: Returns a reference to the document that the window contains.

- `frameElement`: Returns the element in which the window is embedded, or null if the window is not embedded.
- `innerHeight`: Gets the height of the content area of the browser window including, if rendered, the horizontal scrollbar.
- `innerWidth`: Gets the width of the content area of the browser window including, if rendered, the vertical scrollbar
- `localStorage`:
- `sessionStorage`:
- `location`: Gets/sets the location, or current URL, of the window object.
- `name`: Gets/sets the name of the window.
- `parent`: Returns a reference to the parent of the current window or subframe.
- `outerHeight`: Gets the height of the outside of the browser window.
- `outerWidth`: Gets the width of the outside of the browser window.
- `pageXOffset`, `scrollX`: Returns the number of pixels that the document has already been scrolled horizontally.
- `pageYOffset`, `scrollY`: Returns the number of pixels that the document has already been scrolled vertically.
- `screenX`: Returns the horizontal distance from the left border of the user's browser viewport to the left side of the screen.
- `screenY`: Returns the vertical distance from the top border of the user's browser viewport to the top side of the screen.

Methods:

- `alert()`: Displays an alert dialog.
- `focus()`: Sets focus on the current window.
- `blur()`: Sets focus away from the window.
- [`open()`](./03-browser-objects/window-open.js): Loads a specified resource into a new or existing browsing context (that is, a tab, a window, or an iframe) under a specified name.

  ```javascript
  open()
  open(url)
  open(url, target)
  open(url, target, windowFeatures)
  ```

  - `url`: A string indicating the URL or path of the resource to be loaded. If an empty string (`""`) is specified or this parameter is omitted, a blank page is opened into the targeted browsing context.
  - `target`: A string, without whitespace, specifying the name of the browsing context the resource is being loaded into. If the name doesn't identify an existing context, a new context is created and given the specified name.
  - `windowFeatures`:
    - `popup`: Popup

- `close()`: Closes the current window.
- `confirm()`: Displays a dialog with a message that the user needs to respond to.
- `moveBy()`: Moves the current window by a specified amount.
- `moveTo()`: Moves the window to the specified coordinates.
- `postMessage()`: Provides a secure means for one window to send a string of data to another window, which need not be within the same domain as the first.
- `print()`: Opens the Print Dialog to print the current document.
- `prompt()`: Returns the text entered by the user in a prompt dialog.
- `resizeBy()`: Resizes the current window by a certain amount.
- `resizeTo()`: Dynamically resizes window.
- `scroll()`: Scrolls the window to a particular place in the document.
- `sizeToContent()`: Sizes the window according to its content.
- `stop()`: This method stops window loading.

## history object

The `History `interface of the `History` API allows manipulation of the browser session history, that is the pages visited in the tab or frame that the current page is loaded in. There is only one instance of `history` (It is a singleton.) accessible via the global object `history`.

Property:

- `length`: Returns an `Integer` representing the number of elements in the session history, including the currently loaded page. For example, for a page loaded in a new tab this property returns `1`.

Methods:

- `back()`: This asynchronous method goes to the previous page in session history. Equivalent to `history.go(-1)`.
- `forward()`: This asynchronous method goes to the next page in session history. Equivalent to `history.go(1)`.
- `go()`: Asynchronously loads a page from the session history, identified by its relative location to the current page, for example `-1` for the previous page or `1` for the next page.

## location object

The `Location` interface represents the location (URL) of the object it is linked to. Changes done on it are reflected on the object it relates to. Both the `Document` and `Window` interface have such a linked `Location`, accessible via `Document.location` and `Window.location` respectively.

Instance properties

- `href`: A stringifier that returns a string containing the entire URL. If changed, the associated document navigates to the new page. It can be set from a different origin than the associated document.

Instance methods

- `Location.assign()`: Loads the resource at the URL provided in parameter.
- `Location.reload()`: Reloads the current URL, like the Refresh button.
- `Location.replace()`: Replaces the current resource with the one at the provided URL (redirects to the provided URL).
- `Location.toString()`: Returns a string containing the whole URL.

## screen object

The `Screen` interface represents a screen, usually the one on which the current window is being rendered, and is obtained using `window.screen`.

## navigator object

The `navigator` object contains

The `Navigator.userAgent` read-only property of the `Navigator` interface returns the `User-Agent` (UA) string for the current browser.
