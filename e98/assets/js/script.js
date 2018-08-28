var windowOffset = 70;
$(document).ready(function(){
  $('body').scrollspy({target: ".navbar", offset: 50});   
  $("#navbar a, #enroll-btn, .sect").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      $('html, body').animate({
        scrollTop: $(this.hash).offset().top - windowOffset
      }, 800, function(){
      });
    }
  });
});

$(document).ready(function(){
    $('[data-toggle="popover"]').popover(); 
});