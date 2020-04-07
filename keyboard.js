// let div = document.createElement('div');
// div.className = 'container text-area';
// div.innerHTML = `<div class="msg">Type something by clicking keys on the keyboard. The characters will appear here:</div>
// <div class="inner"></div>`;
// let keyboardWrapper = document.createElement('div')
// keyboardWrapper.className = 'keyboard wrapper';
// document.body.append(div);
// document.body.append(keyboardWrapper);
const styleStorage = [
  /* Default DOS-like style */
  [
    ['esc', 'margin-left', '', '', '', 'margin-left', '', '', '', 'margin-left', '', '', '', 'margin-left pad-sm', 'pad-sm', 'pad-sm', 'margin-left half', '', '', ''], ['bl backtick', 'bl one', 'bl two', 'bl three', 'bl four', 'bl five', 'bl six', 'bl seven', 'bl eight', 'bl nine', 'bl zero', 'bl hyphen', 'bl equals', 'backspace', 'margin-left pad-sm', 'pad-sm', 'pad-sm', 'margin-left half pad-sm', '', '', ''], ['tab', '', '', '', '', '', '', '', '', '', '', 'bl squareleft', 'bl squareright', 'bl backslash', 'margin-left pad-sm vol-off', 'pad-sm vol-down', 'pad-sm vol-up', 'margin-left half', '', '', 'num-plus'], ['caps', '', '', '', '', '', '', '', '', '', 'bl semicolon', 'bl apostrophe', 'enter', 'wide', '', ''], ['shift', '', '', '', '', '', '', '', 'bl comma', 'bl fullstop', 'bl forwardslash', 'shift', 'pad-sm arrow-up', '', '', '', 'num-enter'], ['pad', 'pad', 'pad', 'spacebar', 'pad', 'pad', 'pad fn', 'pad', 'margin-left pad-sm', 'pad-sm', 'pad-sm', 'margin-left half zero-wide', '']
  ]]
const keyValueStorage = [
  /* English */
  [['Esc', 'F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7', 'F8', 'F9', 'F10', 'F11', 'F12', 'PrtSc', 'ScrLk', 'Pause', '<i class="fa fa-calculator"></i>', '<i class="fa fa-desktop"></i>', '<i class="fa fa-envelope-o"></i>', '<i class="fa fa-home"></i>'], ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', '<i class="fa fa-long-arrow-left"></i>', 'Ins', 'Home', 'PgUp', 'Num', '/', '*', '-'], ['Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '&#91;', '&#93;', '\\', 'Del<i class="fa fa-volume-off"></i>', 'End<i class="fa fa-volume-down"></i>', 'PgDn<i class="fa fa-volume-up"></i>', '7', '8', '9', '+'], ['CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", '<i class="fa fa-sign-in"></i>', '4', '5', '6'], ['<i class="fa fa-arrow-up"></i>', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '<i class="fa fa-arrow-up"></i>', '↑', '1', '2', '3', '<i class="fa fa-sign-in"></i>'], ['Ctrl', '<i class="fa fa-windows"></i>', 'Alt', '&nbsp;', 'Alt', '<i class="fa fa-windows"></i>', 'Fn', 'Ctrl', '←', '↓', '→', '0', 'Del']],
  [ /* English Shift */
      ['', '','','','','','','','','','','','','','','','','','','' ],
      ['~', '!', "@", "#", "$", "%", "^", "&amp;", "*", "(", ")", "_", "+", '','','','','','','',''],
      ['', "", "", "", "", "", "", "", "", "", "", "{", "}", '|','','','','','','',''],
      ['', "", "", "", "", "", "", "", "", "", ":", '&quot;','','','',''],
      ["", "", "", "", "", "", "", "", "&lt;", "&gt;", "?", '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', '', '', '', '']
  ],
  [ /* Russian */
      ['Esc', 'F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7', 'F8', 'F9', 'F10', 'F11', 'F12', 'PrtSc', 'ScrLk', 'Pause', '<i class="fa fa-calculator"></i>', '<i class="fa fa-desktop"></i>', '<i class="fa fa-envelope-o"></i>', '<i class="fa fa-home"></i>'],
      ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', '<i class="fa fa-long-arrow-left"></i>', 'Ins', 'Home', 'PgUp', 'Num', '/', '*', '-'],
      ['Tab', "й", "ц", "у", "к", "е", "н", "г", "ш", "щ", "з", "х", "ъ", '\\', 'Del<i class="fa fa-volume-off"></i>', 'End<i class="fa fa-volume-down"></i>', 'PgDn<i class="fa fa-volume-up"></i>', '7', '8', '9', '+'],
      ['CapsLock', "ф", "ы", "в", "а", "п", "р", "о", "л", "д", "ж", "э", '<i class="fa fa-sign-in"></i>', '4', '5', '6'],
      ['<i class="fa fa-arrow-up"></i>', "я", "ч", "с", "м", "и", "т", "ь", "б", "ю", ".", '<i class="fa fa-arrow-up"></i>', '↑', '1', '2', '3', '<i class="fa fa-sign-in"></i>'],
      ['Ctrl', '<i class="fa fa-windows"></i>', 'Alt', '&nbsp;', 'Alt', '<i class="fa fa-windows"></i>', 'Fn', 'Ctrl', '←', '↓', '→', '0', 'Del']
  ],
  [ /* Russian Shift */
      ['Esc', 'F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7', 'F8', 'F9', 'F10', 'F11', 'F12', 'PrtSc', 'ScrLk', 'Pause', '', '', '', ''],
      ['Ё', '!', '&quot;', "№", ";", "%", ":", "?", "*", "(", ")", "_", "+", '','','','','','','',''],
      ['Tab', "й", "ц", "у", "к", "е", "н", "г", "ш", "щ", "з", "х", "ъ", '/', '', '', '', '7', '8', '9', '+'],
      ['CapsLock', "ф", "ы", "в", "а", "п", "р", "о", "л", "д", "", "", '', '4', '5', '6'],
      ['', "я", "ч", "с", "м", "и", "т", "ь", "", "", ",", '', '↑', '1', '2', '3', ''],
      ['', '', '', '', '', '', '', '', '', '', '', '', '']
  ]
];

  JSKeycodes = [
    ['Esc', 'F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7', 'F8', 'F9', 'F10', 'F11', 'F12', 'PrintScreen', 'ScrollLock', 'Pause', '', '', '', 'BrowserHome'],
    ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace', 'Insert', 'Home', 'PageUp', 'NumLock', 'NumpadDivide', 'NumpadMultiply','NumpadSubtract'],
    ['Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'Delete', 'End', 'PageDown', 'Numpad7', 'Numpad8', 'Numpad9','NumpadAdd'],
    ['CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter', 'Numpad4', 'Numpad5', 'Numpad6'],
    ['ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ShiftRight', 'ArrowUp', 'Numpad1', 'Numpad2', 'Numpad3', 'NumpadEnter'],
    ['ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'MetaRight', 'ContextMenu', 'ControlRight',  'ArrowLeft', 'ArrowDown', 'ArrowRight', 'Numpad0', 'NumpadDecimal'],
  ]

  function keyboardSynthesis(styleNumber, languageNumber) {
    // if (document.querySelector('.keyboard.wrapper').innerHTML == '') {
      styleStorage[styleNumber].forEach((row, rowNumber)  => { 
        let rowWrapper = document.createElement('ul');
        rowWrapper.innerHTML = (row.map((value, position) => `<li class="${value}" data-key="${JSKeycodes[rowNumber][position]}" data-alt="${keyValueStorage[languageNumber+1][rowNumber][position]}">${keyValueStorage[languageNumber][rowNumber][position]}</li>`).join(''));
        document.querySelector(".keyboard.wrapper").append(rowWrapper);
      })
    // }
  };

  let languageIndex=0

  function keyClickHandler(event) {
    /* event.target. */
    if (event.shiftKey && (event.ctrlKey || event.altKey)) {
      languageIndex=languageIndex+2;
      if (languageIndex === keyValueStorage.length) languageIndex=languageIndex%keyValueStorage.length;
      document.querySelector("body > div.keyboard.wrapper").innerHTML="";
      keyboardSynthesis(0, languageIndex);
    }
  }

  document.addEventListener("DOMContentLoaded", function() {
    document.body.innerHTML=`
        <div class="container text-area">
            <div class="msg">Ctrl+Shift or Alt+Shift to switch the language. Type something by clicking keys on the keyboard. The characters will appear here:</div>
            <div class="inner"></div>
        </div>
        <div class="keyboard wrapper"></div>`
    document.querySelector("body > div.keyboard.wrapper").innerHTML="";
    keyboardSynthesis(0, 0);

    document.addEventListener("keydown", (e) => keyClickHandler(e));
    });

/* var curLang = 'en' // en, pl, ua

var keysMap = {
  key_z: {
    en: 'z',
    pl: 'plz',
    uaL: 'r'
  },
}
curPressKey = 'key_z'

console.log( keysMap[curPressKey][curLang] ) */
/* function keyListener(event) {
  var x = event.which || event.keyCode;
  document.querySelector("body > div.container.text-area > div.inner").innerHTML = "The Unicode value is: " + x;
} */