window.onload = () => {
  document.querySelector('.wrapper').addEventListener("mousedown", (e) => {if (event.target.tagName =='LI') clickDownHandler(e.target.dataset.key)});
  document.body.addEventListener("mouseup", (e) => {if (event.target.tagName =='LI') clickUpHandler(e.target.dataset.key)});
  document.addEventListener("keydown", (e) => clickDownHandler(e.code));
  document.addEventListener("keyup", (e) => clickUpHandler(e.code));

  function clickUpHandler(event) {
    const element = document.querySelector(`[data-key="${event}"]`);
    element.classList.remove('active');
    if (event.includes('Shift')) {
      capitalizationHandler('off');
    }
  }

  function capitalizationHandler(toggler) {
    if (toggler == 'on') document.querySelectorAll('li[data-key*="Key"]').forEach((letter) => {letter.innerHTML = letter.innerHTML.toUpperCase()})
    else document.querySelectorAll('li[data-key*="Key"]').forEach((letter) => {letter.innerHTML = letter.innerHTML.toLowerCase()})
  }
  
  function clickDownHandler(event) {
    const element = document.querySelector(`[data-key="${event}"]`);
    element.classList.add('active');
    const keyState = document.querySelector('.keystate span');
    const $textArea = document.querySelector('.text-area .inner');
    
    if (event != undefined) {
      if(event == 'Backspace') {
        let text = document.querySelector('.text-area .inner').innerText;
        text = text.substring(0, (text.length-1));
        $textArea.innerHTML = text;
        return;
      }
      
      if (event == 'CapsLock') {
        document.querySelector('.caps').classList.toggle('on');
        if(document.querySelector('.caps').classList.contains('on')) {
          capitalizationHandler('on');
          keyState.innerHTML='Caps on';
          keyState.style.visibility='visible';
        } else {
          capitalizationHandler('off');
          keyState.style.visibility='hidden';
        }
        return;
      }

      if (event.includes('Shift')) {
        capitalizationHandler('on');
        return;
      }
      
      if (event == 'ContextMenu') {
        document.querySelector('.fn').classList.toggle('on');
        if(document.querySelector('.fn').classList.contains('on')) { 
          keyState.innerHTML = 'Function on';
          keyState.style.visibility='visible';
        } else {
          keyState.style.visibility='hidden';
        }			
      }
      
      if (event.includes('Enter')) {
        $textArea.insertAdjacentHTML('beforeend','<br>');
      }	
      
      if (event == 'Tab') {
        $textArea.insertAdjacentHTML('beforeend','&nbsp;&nbsp;&nbsp;&nbsp;');
      }			
      
      // Function Keys
      if (document.querySelector('.fn').classList.contains('on') && element.getAttribute('data-function') != undefined) {
        let keyFunction = element.setAttribute('data-function');
        alert(keyFunction);
      }

      // No data-key defined
      else {
        let text = '';
        if(document.querySelector('.caps').classList.contains('on')) {
          text = element.innerHTML;
          if(element.classList.contains('bl')) {
            var altKey = element.getAttribute('data-alt');
            text = altKey;
          }	
        }		
        else 
        { 
          text = element.innerHTML;
        }
        $textArea.insertAdjacentHTML('beforeend', text);
      }
    } 
  };

}


/* 
document.addEventListener("DOMContentLoaded", function(event) {
  // TODO: Add more lighting functions
  var keyState = $('.keystate span');


  $('li').on('click', function() {
    // TODO: Add even more logic for special keys...
    var dataKey = $(this).attr('data-key');
    var $textArea = $('.text-area .inner');
    
    if ($(this).attr('data-key') != undefined) {
      if(dataKey == 'backspace') {
        var text = $('.text-area .inner').text();
        var trimmed = text.substring(0,text.length-1);
        $textArea.text(trimmed);	
      }
      
      if(dataKey == 'caps') {
        $('.caps').toggleClass('on');
        if($('.caps').hasClass('on')) { 
          keyState.text('Caps on');
          keyState.css('visibility','visible');
        } else {
          keyState.css('visibility','hidden');
        }
      }
      
      if(dataKey == 'function') {
        $('.fn').toggleClass('on');
        if($('.fn').hasClass('on')) { 
          keyState.text('Function on');
          keyState.css('visibility','visible');
        } else {
          keyState.css('visibility','hidden');
        }			
      }
      
      if(dataKey == 'enter') {
        $textArea.append('<br/>');	
      }	
      
      if(dataKey == 'tab') {
        $textArea.append('&nbsp;&nbsp;&nbsp;&nbsp;');	
        // An actually tab '&#09;' isn't "tabby" enough for me.
      }			
      
      // Function Keys
      if($('.fn').hasClass('on') && $(this).attr('data-function') != undefined) {
        var keyFunction = $(this).attr('data-function');
        alert(keyFunction);
      }		
    } 
    else 
    // No data-key defined
    {
      var text = '';
      if($('.caps').hasClass('on')) {
        text = $(this).text();
        
        if($(this).hasClass('bl')) {
          // It's got additional character functions
          var altKey = $(this).attr('data-alt');
          text = altKey;
        }			
      }		
      else 
      {
        text = $(this).text().toLowerCase();
      }		
      $textArea.append(text);		
    }
    
  });

}) */

/*  // if (event.code == 'KeyZ' && (event.ctrlKey || event.shiftKey)) {
      //   /* alert('Отменить!') */
      //   document.querySelector("body > div.keyboard.wrapper").innerHTML="";
      //   keyboardSynthesis(styleStorage.styleWin, keyValueStorage.Russian, keyValueStorage.RussianAlt);
      // } */
