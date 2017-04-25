$(document).ready(function() {

  //Showing and hiding of the sidebar when the user clicks on #sidebar-button:
  //   (When the user clicks on an the sidebar button)
  // If the sidebar container has the "active" class:
  // Remove the "no-scroll" class from the body tag
  // Remove the "active" class from the sidebar button
  // Remove the "active" class from the sidebar container
  // Remove the "active" class from the page wrapper
  // Otherwise:
  // Add the "active" class to sidebar button
  // Add the "active" class to sidebar container
  // Add the "active" class to the page wrapper
  // Add the "no-scroll" class to the body tag with a delay of 300 ms (code above)
  $( "#sidebar-button" ).click(function() {
    if ($('#sidebar-container').hasClass('sidebar-active')) {
      $( "#sidebar-button" ).removeClass( "button-active" );
      $( "#sidebar-container" ).removeClass( "sidebar-active" );
      $( "#foreground" ).removeClass( "foreground-active" );
      $( ".page-wrapper" ).removeClass( "wrapper-active" );
    }
    else {
      $( "#sidebar-button" ).addClass( "button-active" );
      $( "#sidebar-container" ).addClass( "sidebar-active" );
      $( "#foreground" ).addClass( "foreground-active" );
      $( ".page-wrapper" ).addClass( "wrapper-active" );
      setTimeout(function() {
      }, 300);
    }
  });

  //Hiding of the sidebar when the user clicks on the page wrapper
    $( ".page-wrapper" ).click(function() {
    if ($('#sidebar-container').hasClass('sidebar-active')) {
      $( "#sidebar-button" ).removeClass( "button-active" );
      $( "#sidebar-container" ).removeClass( "sidebar-active" );
      $( "#foreground" ).removeClass( "foreground-active" );
      $( ".page-wrapper" ).removeClass( "wrapper-active" );
      }
    });
});