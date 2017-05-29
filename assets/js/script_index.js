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
    setTimeout(function() { 
    $('#third-text').css('font-size', '100px');
    $('#third-text').text('SIKE');
    $('#third-text').fadeIn();
    }, 700);
    setTimeout(function() { 
    $('#third-text').text('I\'M BIG'); 
    $('#third-text').css('font-size', '100px');
    }, 1400);
    setTimeout(function() { 
    $('#third-text').text('JK'); 
    $('#third-text').css('font-size', '20px');
    }, 2800);
    setTimeout(function() { 
    $('#third-text').text('I am small :('); 
    $('#third-text').css('font-size', '20px');
    }, 3500);  
  });
});

