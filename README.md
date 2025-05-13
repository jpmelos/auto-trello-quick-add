# Auto Trello Quick Add

A user script that automates the Trello card quick-add flow by automatically
clicking the "Send to" and "Done" buttons on Trello's quick add card page.

## Description

This script streamlines the process of adding cards to Trello boards via the
quick add URL (`https://trello.com/en/add-card*`). It automatically:

1. Clicks the "Send to" button as soon as it's available.
2. Clicks the "Done" button after the card has been sent.

## Installation

1. Install [Tampermonkey](https://www.tampermonkey.net/).
2. Create a new script in your user script manager and copy the contents of
   `main.js` into it.
3. Save the script.

## Usage

1. Navigate to a Trello quick add URL.
2. The script will automatically click the "Send to" button and then the "Done"
   button.

## How It Works

The script uses `MutationObserver`s to detect when the buttons are available in
the DOM and clicks them automatically.

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
