let layoutStorage = {
  valueEnglish: [
    ['Esc', 'F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7', 'F8', 'F9', 'F10', 'F11', 'F12', 'PrtSc', 'ScrLk', 'Pause', '<i class="fa fa-calculator"></i>', '<i class="fa fa-desktop"></i>', '<i class="fa fa-envelope-o"></i>', '<i class="fa fa-home"></i>'],
    ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', '<i class="fa fa-long-arrow-left"></i>', 'Ins', 'Home', 'PgUp', 'Num', '/', '*', '-'],
    ['Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '&#91;', '&#93;', '\\', 'Del<i class="fa fa-volume-off"></i>', 'End<i class="fa fa-volume-down"></i>', 'PgDn<i class="fa fa-volume-up"></i>', '7', '8', '9', '+'],
    ['CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", '<i class="fa fa-sign-in"></i>','4','5','6'],
    ['<i class="fa fa-arrow-up"></i>', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '<i class="fa fa-arrow-up">', '↑', '1', '2', '3', '<i class="fa fa-sign-in">'],
    ['Ctrl', '<i class="fa fa-windows">', 'Alt', '&nbsp;', 'Alt', '<i class="fa fa-windows"></i>', 'Fn', 'Ctrl', '←', '↓', '→', '0', 'Del']
  ],

  class: [
    ['esc','margin-left','','','','margin-left','','','','margin-left','','','','margin-left pad-sm','pad-sm','pad-sm','margin-left half','','',''],
    ['bl backtick','bl one','bl two','bl three','bl four','bl five','bl six','bl seven','bl eight','bl nine','bl zero','bl hyphen','bl equals','backspace','margin-left pad-sm', 'pad-sm','pad-sm','margin-left half pad-sm','','',''],
    ['tab','','','','','','','','','','','bl squareleft','bl squareright',`bl backslash`, 'margin-left pad-sm vol-off','pad-sm vol-down','pad-sm vol-up','margin-left half','','','num-plus'],
    ['caps', '', '', '', '', '', '', '', '', '', 'bl semicolon', 'bl apostrophe','enter','wide','',''],
    ['shift', '', '', '', '', '', '', '', 'bl comma', 'bl fullstop', 'bl forwardslash','shift','pad-sm arrow-up','','','','num-enter'],
    ['pad', 'pad', 'pad', 'pad', 'pad', 'pad','pad fn','pad', 'margin-left pad-sm', 'pad-sm', 'pad-sm→','pad-sm','margin-left half zero-wide']
  ],
  
  valueEnglishAlt: [
    ['','','','','','','','','','','','','','','','','','','','' ],
    ['~', '!', "@", "#", "$", "%", "^", "&amp;", "*", "(", ")", "_", "+", '','','','','','','',''],
    ['Tab', "", "", "", "", "", "", "", "", "", "", "{", "}", '|','','','','','','',''],
    ['CapsLock', "a", "s", "d", "f", "g", "h", "j", "k", "l", ":", '&quot;','','','',''],
    ["Shift", '|', "z", "x", "c", "v", "b", "n", "m", "<", ">", "?", '↑', "shift", ],
    ["Ctrl", "Win", "Alt", " ", "alt", "Ру", "←", "↓", "→", ],
  ],
  valueRussian: [
    ['ё', '1', "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", 'Backspace', ],
    ['Tab', "й", "ц", "у", "к", "е", "н", "г", "ш", "щ", "з", "х", "ъ", 'DEL', ],
    ['CapsLock', "ф", "ы", "в", "а", "п", "р", "о", "л", "д", "ж", "э", `\\`, 'Enter'],
    ["Shift", '\\', "я", "ч", "с", "м", "и", "т", "ь", "б", "ю", ".", '↑', "shift", ],
    ["Ctrl", "Win", "Alt", " ", "alt", "En", "←", "↓", "→", ],
  ],
  valueRussianShift: [
    ['Ё', '!', '"', "№", ";", "%", ":", "?", "*", "(", ")", "_", "+", 'Backspace', ],
    ['Tab', "й", "ц", "у", "к", "е", "н", "г", "ш", "щ", "з", "х", "ъ", 'DEL', ],
    ['CapsLock', "ф", "ы", "в", "а", "п", "р", "о", "л", "д", "ж", "э", `/`, 'Enter'],
    ["Shift", '/', "я", "ч", "с", "м", "и", "т", "ь", "б", "ю", ",", '↑', "shift", ],
    ["Ctrl", "Win", "Alt", " ", "alt", "En", "←", "↓", "→", ],
  ],

};

var curLang = 'en' // en, pl, ua

var keysMap = {
  key_z: {
    en: 'z',
    pl: 'plz',
    uaL: 'r'
  },
}
curPressKey = 'key_z'

console.log( keysMap[curPressKey][curLang] )