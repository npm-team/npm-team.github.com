// MENU

$( ".icon" ).click(function() {
  $( ".menu" ).slideToggle(175);
  $( this ).toggleClass( "opened" );
  
  if($(window).width() > 992) {
  $('.site-header h1').slideToggle(300);
  }
});
