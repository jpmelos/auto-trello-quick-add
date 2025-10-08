# Auto Trello Quick Add

A bookmarklet and user script that automates the Trello card quick-add flow by
automatically clicking the "Send to" and "Done" buttons on Trello's quick add
card page.

## Description

The bookmarklet and script streamline the process of adding cards to Trello
boards via the quick add URL (`https://trello.com/en/add-card*`). When you
click the bookmarklet, the script kicks off and automatically:

1. Clicks the "Send to" button as soon as it's available.
1. Clicks the "Done" button after the card has been sent.

## Installation

1. Install the bookmarklet. See the code below.
1. Install [Tampermonkey](https://www.tampermonkey.net/).
1. Create a new script in your user script manager and copy the contents of
   `main.js` into it.
1. Save the script.

## Usage

1. Click the bookmarklet.
1. The script will automatically click the "Send to" button and then the "Done"
   button.

## How It Works

The bookmarklet opens the Trello card quick-add flow already property set.

The script uses `MutationObserver`s to detect when the buttons are available in
the Trello flow's DOM and clicks them automatically.

## Bookmarklet

```
javascript:(function(win){win.open('https://trello.com/en/add-card?source=%27+win.location.host+%27&mode=popup&url=%27+encodeURIComponent(win.location.href)+%27&idList=598c69441c673ec6b256a221%27,%27add-trello-card%27,%27width=500,height=600,left=%27+(win.screenX+(win.outerWidth-500)/2)+%27,top=%27+(win.screenY+(win.outerHeight-740)/2));})(window);
```

### The unescaped JavaScript

```javascript
(function(win) {
    win.open(
        'https://trello.com/en/add-card' +
        '?source=' + win.location.host +
        '&mode=popup' +
        '&url=' + encodeURIComponent(win.location.href) +
        '&idList=598c69441c673ec6b256a221',
        'add-trello-card',
        'width=500,height=600,left=' +
        (win.screenX + (win.outerWidth - 500) / 2) +
        ',top=' +
        (win.screenY + (win.outerHeight - 740) / 2)
    );
})(window);
```

## License

MIT License

Copyright (c) 2025 João Sampaio

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the “Software”), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
of the Software, and to permit persons to whom the Software is furnished to do
so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
