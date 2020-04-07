window.onload = () => {
  document.querySelector('.wrapper').addEventListener("click", (e) => {if (event.target.tagName =='LI') clickDownHandler(e.target.dataset.key)});
  document.addEventListener("keydown", (e) => clickDownHandler(e.code));

  // мышь: text (value) = event.target.innerText or innerHTML | dataKey (id) = event.target.getAttribute('data-key');
  // клава: text (value) = e.key | dataKey (id) = e.code

  
  function clickDownHandler(event) {
    console.log(event);
    let element = document.querySelector(`[data-key="${event}"]`);
   
    const keyState = document.querySelector('.keystate span');
    const dataKey = event;
    const $textArea = document.querySelector('.text-area .inner');
    
    if (dataKey != undefined) {
      if(dataKey == 'Backspace') {
        let text = document.querySelector('.text-area .inner').innerText;
        text = text.substring(0, (text.length-1));
        $textArea.innerHTML = text;	
      }
      
      if(dataKey == 'CapsLock') {
        document.querySelector('.caps').classList.toggle('on');
        if(document.querySelector('.caps').classList.contains('on')) { 
          keyState.innerHTML('Caps on');
          keyState.style('visibility: visible');
        } else {
          keyState.style('visibility: hidden');
        }
      }

      if(dataKey.includes('Shift')) {
        document.querySelector('.caps').classList.toggle('on');
        if(document.querySelector('.caps').classList.contains('on')) { 
          keyState.innerHTML('Caps on');
          keyState.style('visibility: visible');
        } else {
          keyState.style('visibility: hidden');
        }
      }
      
      if(dataKey == 'ContextMenu') {
        document.querySelector('.fn').classList.toggle('on');
        if(document.querySelector('.fn').classList.contains('on')) { 
          keyState.innerHTML('Function on');
          keyState.style('visibility','visible');
        } else {
          keyState.style('visibility','hidden');
        }			
      }
      
      if(dataKey.includes('Enter')) {
        $textArea.insertAdjacentHTML('beforeend','<br>');
      }	
      
      if(dataKey == 'Tab') {
        $textArea.insertAdjacentHTML('beforeend','&nbsp;&nbsp;&nbsp;&nbsp;');
        // An actually tab '&#09;' isn't "tabby" enough for me.
      }			
      
      // Function Keys
      if(document.querySelector('.fn').classList.contains('on') && element.getAttribute('data-function') != undefined) {
        let keyFunction = element.setAttribute('data-function');
        alert(keyFunction);
      }

      else 
    // No data-key defined
    {
      var text = '';
      if(document.querySelector('.caps').classList.contains('on')) {
        text = element.innerHTML;
        
        if(element.classList.contains('bl')) {
          // It's got additional character functions
          var altKey = element.getAttribute('data-alt');
          text = altKey;
        }			
      }		
      else 
      {
        text = element.innerHTML.toLowerCase();
        /* console.log(element.innerHTML); */
      }
      $textArea.insertAdjacentHTML('beforeend', text);
      /* console.log($textArea.innerHTML); */
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
