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

})