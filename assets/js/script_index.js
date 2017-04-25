$(document).ready(function() {

  $('#carousel-next').click(function() {
    var shift = parseInt($('#carousel').css('margin-left').replace("px", ""));
    if (shift  <= -3840) {
      $('#carousel').css('margin-left', "0px");
    } else {
      $('#carousel').css('margin-left', (shift - 960) + "px"); 
    };  
  });

  $('#carousel-prev').click(function() {
    var shift = parseInt($('#carousel').css('margin-left').replace("px", ""));
    if (shift >= 0) {
      $('#carousel').css('margin-left', "-3840px");
    } else {
      $('#carousel').css('margin-left', (shift + 960) + "px");
    };
  });
});

