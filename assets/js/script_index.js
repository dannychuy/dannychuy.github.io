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
    if ($('#third-text').css('display') == 'none') {
      $('#third-text').css('font-size', '60px');
      $('#third-text').text('SIKE');
      $('#third-text').fadeIn();
      setTimeout(function() { 
      $('#third-text').text('JK'); 
      $('#third-text').css('font-size', '20px');
      }, 700);
      setTimeout(function() { 
      $('#third-text').text('I\'m small again :('); 
      $('#third-text').css('font-size', '20px');
      }, 1000);
    } else {
      $('#third-text').fadeOut();
    }
  });
});

