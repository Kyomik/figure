$( document ).ready(function(){
$('.btn-nav').on('click', function(e){
  e.preventDefault();
  $(this).toggleClass('btn-nav_active');
});
});
