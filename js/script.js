
$(document).ready(function(){
  $("#mobile_menus").click(function(){
    $(".dropdown").slideToggle(300);
})

$(".mobile_btn").click(function(){
    $(".menu").toggleClass("active_menu");
    $(".mobile_menu").toggleClass("active");
})  
  
    $(window).scroll(function(){
      if ($(window).scrollTop() >= 100) {
        $('.header_section').addClass('sticky');
       }
       else {
        $('.header_section').removeClass('sticky');
       }
    });    
      
      
  
  })
  
  