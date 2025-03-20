$(document).ready(function() {
  // Your code here
  $(window).scroll(function() {
    if(this.scrollY > 20) {
      $('.navbar').addClass("sticky");
    }else{
        $('.navbar').removeClass("sticky");
    }
  });
  // toggle menu/navbar scripts
  $('.menu-btn').click(function(){
    $('.navbar .menu').toggleClass("active");
    $('.menu-btn i').toggleClass("active");
  })
          

});


