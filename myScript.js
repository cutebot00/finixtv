//change font chat color
setInterval(function(){
	$('.listTextContainer').each(function() {
		if ($(this).html().indexOf('style')<=0) {
			$('span',this).css('color','#ddd')
		}
	})
}, 500)