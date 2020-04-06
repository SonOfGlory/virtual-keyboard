document.addEventListener("DOMContentLoaded", function(event) { 
    document.querySelector('body').innerHTML=`
        <div class="container text-area">
            <div class="msg">Type something by clicking keys on the keyboard. The characters will appear here:</div>
            <div class="inner"></div>
        </div>
        <div class="keyboard wrapper">
        <ul>
            <li class="esc" data-key="esc">Esc</li>
            <li class="margin-left">F1</li>
            <li>F2</li>
            <li>F3</li>
            <li>F4</li>
            <li class="margin-left">F5</li>
            <li>F6</li>
            <li>F7</li>
            <li>F8</li>
            <li class="margin-left">F9</li>
            <li>F10</li>
            <li>F11</li>
            <li>F12</li>
            <li class="margin-left pad-sm" data-key="print">PrtSc</li>
            <li class="pad-sm" data-key="scrolllock">ScrLk</li>
            <li class="pad-sm" data-key="pause">Pause</li>
            <li class="margin-left half" data-key="calculator"> <i class="fa fa-calculator"></i></li>
            <li data-key="desktop"><i class="fa fa-desktop"></i></li>
            <li data-key="mail"><i class="fa fa-envelope-o"></i></li>
            <li data-key="home"><i class="fa fa-home"></i></li>
        </ul>
        <ul>
            <li class="bl backtick" data-alt="~">\`</li>
            <li class="bl one" data-alt="!">1</li>
            <li class="bl two" data-alt="@">2</li>
            <li class="bl three" data-alt="#">3</li>
            <li class="bl four" data-alt="$">4</li>
            <li class="bl five" data-alt="%">5</li>
            <li class="bl six" data-alt="^">6</li>
            <li class="bl seven" data-alt="&amp;">7</li>
            <li class="bl eight" data-alt="*">8</li>
            <li class="bl nine" data-alt="(">9</li>
            <li class="bl zero" data-alt=")">0</li>
            <li class="bl hyphen" data-alt="_">-</li>
            <li class="bl equals" data-alt="+">=</li>
            <li class="backspace" data-key="backspace"><i class="fa fa-long-arrow-left"></i></li>
            <li class="margin-left pad-sm" data-key="insert">Ins</li>
            <li class="pad-sm" data-key="home">Home</li>
            <li class="pad-sm" data-key="pageup">PgUp</li>
            <li class="margin-left half pad-sm" data-key="numlock">Num</li>
            <li>/</li>
            <li>*</li>
            <li data-key="minus"><i class="fa fa-minus"></i></li>
        </ul>
        <ul>
            <li class="tab" data-key="tab">Tab</li>
            <li>Q</li>
            <li>W</li>
            <li>E</li>
            <li>R</li>
            <li>T</li>
            <li>Y</li>
            <li>U</li>
            <li>I</li>
            <li>O</li>
            <li>P</li>
            <li class="bl squareleft" data-alt="{">&#91;</li>
            <li class="bl squareright" data-alt="}">&#93;</li>
            <li class="bl backslash" data-alt="|">\</li>
            <li class="margin-left pad-sm vol-off" data-key="backspace" data-function="mute">Del<i class="fa fa-volume-off"></i></li>
            <li class="pad-sm vol-down" data-key="end" data-function="vol-down">End<i class="fa fa-volume-down"></i></li>
            <li class="pad-sm vol-up" data-key="pagedown" data-function="vol-up">PgDn<i class="fa fa-volume-up"></i></li>
            <li class="margin-left half">7</li>
            <li>8</li>
            <li>9</li>
            <li class="num-plus" data-key="plus"><i class="fa fa-plus"></i></li>
        </ul>
        <ul>
            <li class="caps" data-key="caps">Caps</li>
            <li>A</li>
            <li>S</li>
            <li>D</li>
            <li>F</li>
            <li>G</li>
            <li>H</li>
            <li>J</li>
            <li>K</li>
            <li>L</li>
            <li class="bl semicolon" data-alt=":">;</li>
            <li class="bl apostrophe" data-alt="&quot;">'</li>
            <li class="enter" data-key="enter"> <i class="fa fa-sign-in"></i></li>
            <li class="wide">4</li>
            <li>5</li>
            <li>6</li>
        </ul>
        <ul>
            <li class="shift" data-key="caps"> <i class="fa fa-arrow-up"></i></li>
            <li>Z</li>
            <li>X</li>
            <li>C</li>
            <li>V</li>
            <li>B</li>
            <li>N</li>
            <li>M</li>
            <li class="bl comma" data-alt="&lt;">,</li>
            <li class="bl fullstop" data-alt="&gt;">.</li>
            <li class="bl forwardslash" data-alt="?">/</li>
            <li class="shift" data-key="caps"><i class="fa fa-arrow-up"></i></li>
            <li class="pad-sm arrow-up" data-key="up"><i class="fa fa-caret-up"></i></li>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li class="num-enter" data-key="enter"><i class="fa fa-sign-in"></i></li>
        </ul>
        <ul>
            <li class="pad" data-key="ctrlleft">Ctrl</li>
            <li class="pad" data-key="windows"><i class="fa fa-windows"></i></li>
            <li class="pad" data-key="altleft">Alt</li>
            <li class="spacebar">&nbsp;</li>
            <li class="pad" data-key="altright">Alt</li>
            <li class="pad" data-key="windows"><i class="fa fa-windows"></i></li>
            <li class="pad fn" data-key="function">Fn</li>
            <li class="pad" data-key="ctrlright">Ctrl</li>
            <li class="margin-left pad-sm" data-key="left"><i class="fa fa-caret-left"></i></li>
            <li class="pad-sm" data-key="down"><i class="fa fa-caret-down"></i></li>
            <li class="pad-sm" data-key="right"><i class="fa fa-caret-right"></i></li>
            <li class="margin-left half zero-wide">0</li>
            <li data-key="backspace">Del</li>
        </ul>
    </div>`
  });