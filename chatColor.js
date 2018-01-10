function chatColor() {
	$('.listTextContainer').each(function() {
		if ($(this).html().indexOf('style')<=0) {
			$('span',this).css('color','#ddd')
		}
	})
}