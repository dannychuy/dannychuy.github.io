$(document).ready(function() {

  $('#carousel-next').click(function() {
    var shift = parseInt($('#carousel').css('margin-left').replace("px", ""));
    shift = Math.trunc(shift / 960);
    if (shift  <= -4) {
      $('#carousel').css('margin-left', "0px");
    } else {
      $('#carousel').css('margin-left', (shift - 1) * 960 + "px"); 
    };  
  });

  $('#carousel-prev').click(function() {
    var shift = parseInt($('#carousel').css('margin-left').replace("px", ""));
    shift = Math.trunc(shift / 960);
    if (shift  >= 0) {
      $('#carousel').css('margin-left', "-3840px");
    } else {
      $('#carousel').css('margin-left', (shift + 1) * 960 + "px"); 
    }; 
  });

  $('#third-section').click(function () {
    $('#third-text').fadeOut();
  });
});

