const styleStorage = {
  keyboardStyle: [
    ['esc', 'margin-left', '', '', '', 'margin-left', '', '', '', 'margin-left', '', '', '', 'margin-left pad-sm', 'pad-sm', 'pad-sm', 'margin-left half', '', '', ''], ['bl backtick', 'bl one', 'bl two', 'bl three', 'bl four', 'bl five', 'bl six', 'bl seven', 'bl eight', 'bl nine', 'bl zero', 'bl hyphen', 'bl equals', 'backspace', 'margin-left pad-sm', 'pad-sm', 'pad-sm', 'margin-left half pad-sm', '', '', ''], ['tab', '', '', '', '', '', '', '', '', '', '', 'bl squareleft', 'bl squareright', 'bl backslash', 'margin-left pad-sm vol-off', 'pad-sm vol-down', 'pad-sm vol-up', 'margin-left half', '', '', 'num-plus'], ['caps', '', '', '', '', '', '', '', '', '', 'bl semicolon', 'bl apostrophe', 'enter', 'wide', '', ''], ['shift', '', '', '', '', '', '', '', 'bl comma', 'bl fullstop', 'bl forwardslash', 'shift', 'pad-sm arrow-up', '', '', '', 'num-enter'], ['pad', 'pad', 'pad', 'spacebar', 'pad', 'pad', 'pad fn', 'pad', 'margin-left pad-sm', 'pad-sm', 'pad-sm', 'margin-left half zero-wide', '']
  ]}
const keyValueStorage = {
  valueEnglish: [['Esc', 'F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7', 'F8', 'F9', 'F10', 'F11', 'F12', 'PrtSc', 'ScrLk', 'Pause', '<i class="fa fa-calculator"></i>', '<i class="fa fa-desktop"></i>', '<i class="fa fa-envelope-o"></i>', '<i class="fa fa-home"></i>'], ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', '<i class="fa fa-long-arrow-left"></i>', 'Ins', 'Home', 'PgUp', 'Num', '/', '*', '-'], ['Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '&#91;', '&#93;', '\\', 'Del<i class="fa fa-volume-off"></i>', 'End<i class="fa fa-volume-down"></i>', 'PgDn<i class="fa fa-volume-up"></i>', '7', '8', '9', '+'], ['CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", '<i class="fa fa-sign-in"></i>', '4', '5', '6'], ['<i class="fa fa-arrow-up"></i>', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '<i class="fa fa-arrow-up"></i>', '↑', '1', '2', '3', '<i class="fa fa-sign-in"></i>'], ['Ctrl', '<i class="fa fa-windows"></i>', 'Alt', '&nbsp;', 'Alt', '<i class="fa fa-windows"></i>', 'Fn', 'Ctrl', '←', '↓', '→', '0', 'Del']],
  valueEnglishAlt: [
      ['', '','','','','','','','','','','','','','','','','','','' ],
      ['~', '!', "@", "#", "$", "%", "^", "&amp;", "*", "(", ")", "_", "+", '','','','','','','',''],
      ['', "", "", "", "", "", "", "", "", "", "", "{", "}", '|','','','','','','',''],
      ['', "", "", "", "", "", "", "", "", "", ":", '&quot;','','','',''],
      ["", "", "", "", "", "", "", "", "&lt;", "&gt;", "?", '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', '', '', '', '']
    ],
  valueRussian: [
      ['Esc', 'F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7', 'F8', 'F9', 'F10', 'F11', 'F12', 'PrtSc', 'ScrLk', 'Pause', '<i class="fa fa-calculator"></i>', '<i class="fa fa-desktop"></i>', '<i class="fa fa-envelope-o"></i>', '<i class="fa fa-home"></i>'],
      ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', '<i class="fa fa-long-arrow-left"></i>', 'Ins', 'Home', 'PgUp', 'Num', '/', '*', '-'],
      ['Tab', "й", "ц", "у", "к", "е", "н", "г", "ш", "щ", "з", "х", "ъ", '\\', 'Del<i class="fa fa-volume-off"></i>', 'End<i class="fa fa-volume-down"></i>', 'PgDn<i class="fa fa-volume-up"></i>', '7', '8', '9', '+'],
      ['CapsLock', "ф", "ы", "в", "а", "п", "р", "о", "л", "д", "ж", "э", '<i class="fa fa-sign-in"></i>', '4', '5', '6'],
      ['<i class="fa fa-arrow-up"></i>', "я", "ч", "с", "м", "и", "т", "ь", "б", "ю", ".", '<i class="fa fa-arrow-up">', '↑', '1', '2', '3', '<i class="fa fa-sign-in">'],
      ['Ctrl', '<i class="fa fa-windows">', 'Alt', '&nbsp;', 'Alt', '<i class="fa fa-windows"></i>', 'Fn', 'Ctrl', '←', '↓', '→', '0', 'Del']
    ],
    valueRussianAlt: [
      ['Esc', 'F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7', 'F8', 'F9', 'F10', 'F11', 'F12', 'PrtSc', 'ScrLk', 'Pause', '<i class="fa fa-calculator"></i>', '<i class="fa fa-desktop"></i>', '<i class="fa fa-envelope-o"></i>', '<i class="fa fa-home"></i>'],
      ['Ё', '!', '"', "№", ";", "%", ":", "?", "*", "(", ")", "_", "+", '<i class="fa fa-long-arrow-left"></i>', 'Ins', 'Home', 'PgUp', 'Num', '/', '*', '-'],
      ['Tab', "й", "ц", "у", "к", "е", "н", "г", "ш", "щ", "з", "х", "ъ", '/', 'Del<i class="fa fa-volume-off"></i>', 'End<i class="fa fa-volume-down"></i>', 'PgDn<i class="fa fa-volume-up"></i>', '7', '8', '9', '+'],
      ['CapsLock', "ф", "ы", "в", "а", "п", "р", "о", "л", "д", "ж", "э", '<i class="fa fa-sign-in"></i>', '4', '5', '6'],
      ['<i class="fa fa-arrow-up"></i>', "я", "ч", "с", "м", "и", "т", "ь", "б", "ю", ",", '<i class="fa fa-arrow-up">', '↑', '1', '2', '3', '<i class="fa fa-sign-in">'],
      ['', '', '', '', '', '', '', '', '', '', '', '', '']
    ], 
  };

// 1) создаем <ul>
// 2) итерируем по массиву
// 3) заходим в массив массивов хранящий стили, а также в вид клавиш и (на позднем этапе) их значения, нужные JS чтобы связать клавишу на экране с событием ее нажатия на клавиатуре
// 4) каким-то образом выбирем из каждого из них  первый массив-строку для клавиатуры
// 5) формируем из них <li>, желательно через map()
// 6) проверка конца строки: если конец строки возвращаемся в 1) или повторяем последовательность если не получится через рекурсию.
// 7) переходим к следующей строке каждого из массива массивов, хранящего стили

  function keyboardSynthesis(style, language, alt) {
    language.forEach((row, rowNumber)  => { 
      let rowWrapper = document.createElement('ul');
     /*  row.forEach((value, position)  => {
        let button = document.createElement('li');
        button.innerHTML = `class="${style[rowNumber][position]}" data-alt="${alt[rowNumber][position]}">${value}`;
        rowWrapper.appendChild(button);
      }) */
      rowWrapper.innerHTML = (row.map((value, position) => `<li class="${style[rowNumber][position]}" data-alt="${alt[rowNumber][position]}">${value}</li>`).join(''));
      document.querySelector(".keyboard.wrapper").append(rowWrapper);
    })
  };

  document.addEventListener("DOMContentLoaded", function() {
    keyboardSynthesis(styleStorage.keyboardStyle, keyValueStorage.valueEnglish, keyValueStorage.valueEnglishAlt);
  });

/*   keyboardSynthesis(styleStorage.keyboardStyle, keyValueStorage.valueEnglish, keyValueStorage.valueEnglishAlt); */


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