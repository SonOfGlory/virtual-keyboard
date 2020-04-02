let lang = {
  keyArrEn: [
    ['`', '1', "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", 'Backspace', ],
    ['Tab', "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]", 'DEL', ],
    ['CapsLock', "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'", `\\`, 'Enter'],
    ["Shift", '\\', "z", "x", "c", "v", "b", "n", "m", ",", ".", "/", '↑', "shift", ],
    ["Ctrl", "Win", "Alt", " ", "alt", "Ру", "←", "↓", "→", ],
  ],
[
  [{
    class:'esc',key:'esc',value:'Esc'},{class:'margin-l',value:'F1'},{value:'F2'},{value:'F3'},{value:'F4'},{class:margin-l,value:'F5'},{value:'F6'},{value:'F7'},{value:'F7'},{value:'F7'},{value:'F8'},{class:'margin-l',value:'F9'},{value:'F10'},{value:'F11'},{value:'F12'},{class:'margin-l pad-sm', key='print',value:'PrtSc'},{class:'pad-sm', key='scrolllock',value:'ScrLk'},{class:'margin-l half', key:'calculator',value:'<i class="fa fa-calculator"></i>'},{key:'desktop',value:'<i class="fa fa-desktop"></i>'},{key:'mail',value:'<i class="fa fa-envelope-o"></i>'},{class:'home',value:'<i class="fa fa-home"></i>'}],
  [{class:'bl backtick',alt:'~', value:'`'},{class:'bl one',alt:'!', value:'1'}]
]

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


  keyArrEnShift: [
    ['~', '!', "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", 'Backspace', ],
    ['Tab', "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "{", "}", 'DEL', ],
    ['CapsLock', "a", "s", "d", "f", "g", "h", "j", "k", "l", ":", '"', `|`, 'Enter'],
    ["Shift", '|', "z", "x", "c", "v", "b", "n", "m", "<", ">", "?", '↑', "shift", ],
    ["Ctrl", "Win", "Alt", " ", "alt", "Ру", "←", "↓", "→", ],
  ],
  keyArrRu: [
    ['ё', '1', "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", 'Backspace', ],
    ['Tab', "й", "ц", "у", "к", "е", "н", "г", "ш", "щ", "з", "х", "ъ", 'DEL', ],
    ['CapsLock', "ф", "ы", "в", "а", "п", "р", "о", "л", "д", "ж", "э", `\\`, 'Enter'],
    ["Shift", '\\', "я", "ч", "с", "м", "и", "т", "ь", "б", "ю", ".", '↑', "shift", ],
    ["Ctrl", "Win", "Alt", " ", "alt", "En", "←", "↓", "→", ],
  ],
  keyArrRuShift: [
    ['Ё', '!', '"', "№", ";", "%", ":", "?", "*", "(", ")", "_", "+", 'Backspace', ],
    ['Tab', "й", "ц", "у", "к", "е", "н", "г", "ш", "щ", "з", "х", "ъ", 'DEL', ],
    ['CapsLock', "ф", "ы", "в", "а", "п", "р", "о", "л", "д", "ж", "э", `/`, 'Enter'],
    ["Shift", '/', "я", "ч", "с", "м", "и", "т", "ь", "б", "ю", ",", '↑', "shift", ],
    ["Ctrl", "Win", "Alt", " ", "alt", "En", "←", "↓", "→", ],
  ],

};