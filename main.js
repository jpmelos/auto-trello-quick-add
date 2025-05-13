// ==UserScript==
// @name         Auto Trello Quick Add
// @version      1.0
// @description  Auto click Trello quick add buttons.
// @match        https://trello.com/en/add-card*
// ==/UserScript==

(function () {
  "use strict";

  const sendToButtonSelector = 'input[value^="Send to"]';
  const doneButtonSelector = 'input[value="Done"]';

  function clickButton(selector) {
    const button = document.querySelector(selector);
    if (button) {
      button.click();
      return true;
    }
    return false;
  }

  function clickSendToButton() {
    if (clickButton(sendToButtonSelector)) {
      setUpDoneButtonObserver();
      return true;
    }
    return false;
  }

  function clickDoneButton() {
    return clickButton(doneButtonSelector);
  }

  function setUpSendToButtonObserver() {
    const observer = new MutationObserver((mutations) => {
      if (clickSendToButton()) {
        observer.disconnect();
      }
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });
  }

  function setUpDoneButtonObserver() {
    const observer = new MutationObserver((mutations) => {
      if (clickDoneButton()) {
        observer.disconnect();
      }
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });
  }

  if (clickButton(sendToButtonSelector)) return;
  setUpSendToButtonObserver();
})();
