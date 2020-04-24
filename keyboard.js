/* eslint-disable no-param-reassign */
document.addEventListener('DOMContentLoaded', () => {
  document.body.innerHTML = `
  <div class="container text-area">
    <div class="msg">
      Made on Win10. Press (Ctrl or Alt)+Shift for language. Type something by clicking keys on the keyboard. The characters will appear here:
    </div>
    <div class="inner"></div>
  </div>
  <div class="container keystate">
    <span> &nbsp;</span>
  </div>
  <div class="keyboard wrapper"></div>`;
  document.querySelector('body > div.keyboard.wrapper').innerHTML = '';
  const layoutStyleArray = [ /* Default DOS-like style */
    [
      ['esc', 'margin-left', '', '', '', 'margin-left', '', '', '', 'margin-left', '', '', '', 'margin-left pad-sm', 'pad-sm', 'pad-sm', 'margin-left half', '', '', ''], ['bl backtick', 'bl one', 'bl two', 'bl three', 'bl four', 'bl five', 'bl six', 'bl seven', 'bl eight', 'bl nine', 'bl zero', 'bl hyphen', 'bl equals', 'backspace', 'margin-left pad-sm', 'pad-sm', 'pad-sm', 'margin-left half pad-sm', '', '', ''], ['tab', '', '', '', '', '', '', '', '', '', '', 'bl squareleft', 'bl squareright', 'bl backslash', 'margin-left pad-sm vol-off', 'pad-sm vol-down', 'pad-sm vol-up', 'margin-left half', '', '', 'num-plus'], ['caps', '', '', '', '', '', '', '', '', '', 'bl semicolon', 'bl apostrophe', 'enter', 'wide', '', ''], ['shift', '', '', '', '', '', '', '', 'bl comma', 'bl fullstop', 'bl forwardslash', 'shift', 'pad-sm arrow-up', '', '', '', 'num-enter'], ['pad', 'pad', 'pad', 'spacebar', 'pad', 'pad', 'pad fn', 'pad', 'margin-left pad-sm', 'pad-sm', 'pad-sm', 'margin-left half zero-wide', '']
    ]];
  const keyLayoutArray = [ /* English */ /* English Shift */ /* Russian */ /* Russian Shift */
    [
      ['Esc', 'F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7', 'F8', 'F9', 'F10', 'F11', 'F12', 'PrtSc', 'ScrLk', 'Pause', '<i class="fa fa-calculator"></i>', '<i class="fa fa-desktop"></i>', '<i class="fa fa-envelope-o"></i>', '<i class="fa fa-home"></i>'], ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', '<i class="fa fa-long-arrow-left"></i>', 'Ins', 'Home', 'PgUp', 'Num', '/', '*', '-'], ['Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '&#91;', '&#93;', '\\', 'Del<i class="fa fa-volume-off"></i>', 'End<i class="fa fa-volume-down"></i>', 'PgDn<i class="fa fa-volume-up"></i>', '7', '8', '9', '+'], ['CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", '<i class="fa fa-sign-in"></i>', '4', '5', '6'], ['<i class="fa fa-arrow-up"></i>', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '<i class="fa fa-arrow-up"></i>', '↑', '1', '2', '3', '<i class="fa fa-sign-in"></i>'], ['Ctrl', '<i class="fa fa-windows"></i>', 'Alt', '&nbsp;', 'Alt', '<i class="fa fa-windows"></i>', 'Fn', 'Ctrl', '←', '↓', '→', '0', 'Del']], [['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''], ['~', '!', '@', '#', '$', '%', '^', '&amp;', '*', '(', ')', '_', '+', '', '', '', '', '', '', '', ''], ['', '', '', '', '', '', '', '', '', '', '', '{', '}', '|', '', '', '', '', '', '', ''], ['', '', '', '', '', '', '', '', '', '', ':', '&quot;', '', '', '', ''], ['', '', '', '', '', '', '', '', '&lt;', '&gt;', '?', '', '', '', '', '', ''], ['', '', '', '', '', '', '', '', '', '', '', '', '']], [['Esc', 'F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7', 'F8', 'F9', 'F10', 'F11', 'F12', 'PrtSc', 'ScrLk', 'Pause', '<i class="fa fa-calculator"></i>', '<i class="fa fa-desktop"></i>', '<i class="fa fa-envelope-o"></i>', '<i class="fa fa-home"></i>'], ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', '<i class="fa fa-long-arrow-left"></i>', 'Ins', 'Home', 'PgUp', 'Num', '/', '*', '-'], ['Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\', 'Del<i class="fa fa-volume-off"></i>', 'End<i class="fa fa-volume-down"></i>', 'PgDn<i class="fa fa-volume-up"></i>', '7', '8', '9', '+'], ['CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', '<i class="fa fa-sign-in"></i>', '4', '5', '6'], ['<i class="fa fa-arrow-up"></i>', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', '<i class="fa fa-arrow-up"></i>', '↑', '1', '2', '3', '<i class="fa fa-sign-in"></i>'], ['Ctrl', '<i class="fa fa-windows"></i>', 'Alt', '&nbsp;', 'Alt', '<i class="fa fa-windows"></i>', 'Fn', 'Ctrl', '←', '↓', '→', '0', 'Del']], [['Esc', 'F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7', 'F8', 'F9', 'F10', 'F11', 'F12', 'PrtSc', 'ScrLk', 'Pause', '', '', '', ''], ['Ё', '!', '&quot;', '№', ';', '%', ':', '?', '*', '(', ')', '_', '+', '', '', '', '', '', '', '', ''], ['Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '/', '', '', '', '7', '8', '9', '+'], ['CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', '', '', '', '4', '5', '6'], ['', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', '', '', ',', '', '↑', '1', '2', '3', ''], ['', '', '', '', '', '', '', '', '', '', '', '', '']
    ]
  ];
  const JSKeycodes = [
    ['Escape', 'F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7', 'F8', 'F9', 'F10', 'F11', 'F12', 'PrintScreen', 'ScrollLock', 'Pause', '', '', '', 'BrowserHome'], ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace', 'Insert', 'Home', 'PageUp', 'NumLock', 'NumpadDivide', 'NumpadMultiply', 'NumpadSubtract'], ['Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'Delete', 'End', 'PageDown', 'Numpad7', 'Numpad8', 'Numpad9', 'NumpadAdd'], ['CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter', 'Numpad4', 'Numpad5', 'Numpad6'], ['ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ShiftRight', 'ArrowUp', 'Numpad1', 'Numpad2', 'Numpad3', 'NumpadEnter'], ['ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'MetaRight', 'function', 'ControlRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'Numpad0', 'NumpadDecimal']
  ];

  const languageIndexJSON = localStorage.getItem('virtual-keyboard');
  let languageIndex = 0;
  if (languageIndexJSON !== null) {
    languageIndex = JSON.parse(languageIndexJSON);
  }

  function keyboardSynthesis(styleNumber, languageNumber) {
    layoutStyleArray[styleNumber].forEach((row, rowNumber) => {
      const rowWrapper = document.createElement('ul');
      rowWrapper.innerHTML = (row.map((value, position) => `<li class="${value}" data-key="${JSKeycodes[rowNumber][position]}" data-alt="${keyLayoutArray[languageNumber + 1][rowNumber][position]}">${keyLayoutArray[languageNumber][rowNumber][position]}</li>`).join(''));
      document.querySelector('.keyboard.wrapper').append(rowWrapper);
    });
  }

  function capitalizationHandler(toggler) {
    if (toggler === 'on') {
      document.querySelectorAll('li[data-key*="Key"]').forEach((letter) => { letter.innerHTML = letter.innerHTML.toUpperCase(); });
      document.querySelectorAll('.bl').forEach((altLetter) => { altLetter.classList.add('shift-pressed'); });
    } else {
      document.querySelectorAll('li[data-key*="Key"]').forEach((letter) => {
        const prevValue = letter.innerHTML;
        letter.innerHTML = prevValue.toLowerCase();
        document.querySelectorAll('.bl').forEach((altLetter) => { altLetter.classList.remove('shift-pressed'); });
        document.querySelector('.shift').classList.remove('on');
      });
    }
  }

  function clickUpHandler(event) {
    const element = document.querySelector(`[data-key="${event}"]`);
    element.classList.remove('active');
    if (event.includes('Shift')) {
      capitalizationHandler('off');
    }
  }

  function langChangeHandler(event) {
    if (event.shiftKey && (event.ctrlKey || event.altKey)) {
      languageIndex += 2;
      if (languageIndex === keyLayoutArray.length) {
        languageIndex %= keyLayoutArray.length;
      }
      document.querySelector('body > div.keyboard.wrapper').innerHTML = '';
      keyboardSynthesis(0, languageIndex);
      localStorage.setItem('virtual-keyboard', JSON.stringify(languageIndex));
    }
  }

  function clickDownHandler(event) {
    const element = document.querySelector(`[data-key="${event}"]`);
    element.classList.add('active');
    const keyState = document.querySelector('.keystate span');
    const $textArea = document.querySelector('.text-area .inner');

    if (event !== undefined) {
      if (event === 'Backspace') {
        let text = $textArea.innerText;
        text = text.substring(0, (text.length - 1));
        $textArea.innerHTML = text;
      } else if (event === 'CapsLock') {
        document.querySelector('.caps').classList.toggle('on');
        if (document.querySelector('.caps').classList.contains('on')) {
          capitalizationHandler('on');
          keyState.innerHTML = 'Caps on';
          keyState.style.visibility = 'visible';
        } else {
          capitalizationHandler('off');
          keyState.style.visibility = 'hidden';
        }
      } else if (event.includes('Shift')) {
        capitalizationHandler('on');
        document.querySelector('.shift').classList.toggle('on');
      } else if (event === 'function') {
        document.querySelector('.fn').classList.toggle('on');
        if (document.querySelector('.fn').classList.contains('on')) {
          keyState.innerHTML = 'Function on';
          keyState.style.visibility = 'visible';
        } else {
          keyState.style.visibility = 'hidden';
        }
      } else if (event.includes('Enter')) {
        $textArea.insertAdjacentHTML('beforeend', '<br>');
      } else if (event.includes('Meta')) {
        $textArea.insertAdjacentHTML('beforeend', '');
      } else if (event === 'Tab') {
        $textArea.insertAdjacentHTML('beforeend', '&nbsp;&nbsp;&nbsp;&nbsp;');
      } else if (event.includes('Alt')) {
        $textArea.insertAdjacentHTML('beforeend', '');
      } else if (event.includes('Control')) {
        $textArea.insertAdjacentHTML('beforeend', '');
      } else if (event.includes('Meta')) {
        $textArea.insertAdjacentHTML('beforeend', '');
      } /* Function Keys */ else if (document.querySelector('.fn').classList.contains('on') && element.getAttribute('data-function') !== undefined) {
        element.setAttribute('data-function');
      } /*   No data-key defined */ else {
        let text = '';
        if (document.querySelector('.caps').classList.contains('on') || document.querySelector('.shift').classList.contains('on')) {
          text = element.innerHTML;
          if (element.classList.contains('bl')) {
            text = element.getAttribute('data-alt');
          }
        } else {
          text = element.innerHTML;
        }
        $textArea.insertAdjacentHTML('beforeend', text);
      }
    }
  }
  keyboardSynthesis(0, languageIndex);

  document.querySelector('.wrapper').addEventListener('mousedown', (e) => {
    if (e.target.tagName === 'LI') clickDownHandler(e.target.dataset.key);
    else if (e.target.tagName === 'I') clickDownHandler(e.target.parentNode.dataset.key);
  });
  document.body.addEventListener('mouseup', (e) => {
    if (e.target.tagName === 'LI') clickUpHandler(e.target.dataset.key);
    else if (e.target.tagName === 'I') clickUpHandler(e.target.parentNode.dataset.key);
  });
  document.addEventListener('keydown', (e) => {
    if (e.code === 'Tab') {
      e.preventDefault();
    }
    clickDownHandler(e.code);
    langChangeHandler(e);
  });
  document.addEventListener('keyup', (e) => clickUpHandler(e.code));
});
