//change font chat color
var fontColor = "#ccc"
$('.listTextContainer .message').each(function() {
	if ( $(this).parent().html().indexOf('color') < 0 ) { //flower
		$(this).css('color', fontColor)
	} else if ( $(this).parent().html().indexOf('#000000') > 0 ) { //black font
		$("span",this).css('color', fontColor)
	}
})
