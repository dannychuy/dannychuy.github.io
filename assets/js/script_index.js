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

  document.addEventListener('DOMContentLoaded', function(){
          Typed.new('#first-header', {
          strings: ["Danny Chuy"],
          typeSpeed: 10
          });
          $("span").remove(".typed-cursor");

          setTimeout(function(){
            Typed.new('#first-about', {
            strings: ["antidisestablishmentarianism", "floccinaucinihilipilification", "pneumonoultramicroscopicsilicovolcanoconiosis", "bae."],
            typeSpeed: 10
            });
          }, 900); 
      });
});

