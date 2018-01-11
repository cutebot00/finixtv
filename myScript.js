//change chat font color
var fontColor = "#ddd";
setInterval(function() {
  $(".listTextContainer .message").each(function() {
    if ( $(this).parent().html().indexOf("color") < 0 ) { //flower
      $(this).css("color", fontColor);
    } else if ( $(this).parent().html().indexOf("#000000") > 0 ) { //black font
      $("span",this).css("color", fontColor);
    }
  });
}, 500);
