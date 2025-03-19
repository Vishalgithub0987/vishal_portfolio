$(document).ready(function() {
  // Your code here
  $(window).scroll(function() {
    if(this.scrollY > 20) {
      $('.navbar').addClass("sticky");
    }else{
        $('.navbar').removeClass("sticky");
    }
  })
});