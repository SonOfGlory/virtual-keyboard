document.addEventListener("DOMContentLoaded", function(event) {
	// TODO: Add more lighting functions
	var $keystate = document.querySelector('.keystate span');


	document.querySelector('.wrapper').addEventListener("click", function(event) {
		if (event.target.tagName =='LI') {
		// TODO: Add even more logic for special keys...
		var dataKey = event.target.getAttribute('data-key');
		var $textArea = document.querySelector('.text-area .inner');
		
		if (event.target.getAttribute('data-key') != undefined) {
			if(dataKey == 'backspace') {
				var text = document.querySelector('.text-area .inner').innerText;
				backspace = text.substring(0, (text.length-1));
				$textArea.innerHTML = backspace;	
			}
			
			if(dataKey == 'caps') {
				document.querySelector('.caps').classList.toggle('on');
				if(document.querySelector('.caps').classList.contains('on')) { 
					$keystate.classList.add('Caps on');
					$keystate.style('visibility','visible');
				} else {
					$keystate.style('visibility','hidden');
				}
			}
			
			if(dataKey == 'function') {
				document.querySelector('.fn').classList.toggle('on');
				if(document.querySelector('.fn').classList.contains('on')) { 
					$keystate.innerHTML('Function on');
					$keystate.css('visibility','visible');
				} else {
					$keystate.css('visibility','hidden');
				}			
			}
			
			if(dataKey == 'enter') {
				$textArea.innerHTML = $textArea.innerHTML + "<br>";	
			}	
			
			if(dataKey == 'tab') {
				$textArea.append('&nbsp;&nbsp;&nbsp;&nbsp;');	
				// An actually tab '&#09;' isn't "tabby" enough for me.
			}			
			
			// Function Keys
			if(document.querySelector('.fn').classList.contains('on') && event.target.getAttribute('data-function') != undefined) {
				var keyFunction = event.target.getAttribute('data-function');
				alert(keyFunction);
			}		
		} 
		else 
		// No data-key defined
		{
			var text = '';
			if(document.querySelector('.caps').classList.contains('on')) {
				text = event.target.innerHTML;
				
				if(event.target.classList.contains('bl')) {
					// It's got additional character functions
					var altKey = event.target.getAttribute('data-alt');
					text = altKey;
				}			
			}		
			else 
			{
				text = event.target.innerHTML.toLowerCase();
			}		
			$textArea.append(text);		
		}
		}
	});

})


/* 
document.addEventListener("DOMContentLoaded", function(event) {
	// TODO: Add more lighting functions
	var $keystate = $('.keystate span');


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
					$keystate.text('Caps on');
					$keystate.css('visibility','visible');
				} else {
					$keystate.css('visibility','hidden');
				}
			}
			
			if(dataKey == 'function') {
				$('.fn').toggleClass('on');
				if($('.fn').hasClass('on')) { 
					$keystate.text('Function on');
					$keystate.css('visibility','visible');
				} else {
					$keystate.css('visibility','hidden');
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

/* document.addEventListener("DOMContentLoaded",function(e){
	var c=$(".keystate span");
	$("li").on("click",function(){
		var dataKey=event.target.attr("data-key"),
		textArea=$(".text-area .inner");
		if(void 0!=event.target.attr("data-key"))
		{
			if("backspace"==dataKey)
			{
				var text=$(".text-area .inner").text();
				text=text.substring(0,text.length-1);
				textArea.text(text)
			}
			"caps"==dataKey&&($(".caps").toggleClass("on"),$(".caps").hasClass("on")?(c.text("Caps on"),c.css("visibility","visible")):c.css("visibility","hidden"));
			"function"==dataKey&&($(".fn").toggleClass("on"),$(".fn").hasClass("on")?(c.text("Function on"),c.css("visibility","visible")):c.css("visibility","hidden"));
			"enter"==dataKey&&textArea.append("<br/>");
			"tab"==dataKey&&textArea.append("&nbsp;&nbsp;&nbsp;&nbsp;");
			$(".fn").hasClass("on")&&void 0!=event.target.attr("data-function")&&(dataKey=event.target.attr("data-function"),alert(dataKey))
		}
		else $(".caps").hasClass("on")?(text=event.target.text(),event.target.hasClass("bl")&&(text=event.target.attr("data-alt"))):text=event.target.text().toLowerCase(),textArea.append(text)
	})
}); */
