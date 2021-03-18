var menuItems=document.getElementById("menuItems")



menuItems.style.maxHeight="0px"
function toggleMenu() {
  if ( menuItems.style.maxHeight=="0px") {
    menuItems.style.maxHeight="150px"
    document.getElementById("MyElement").classList.remove('fa-bars');
    document.getElementById("MyElement").classList.add('fa-times');
  } 
  else{
    menuItems.style.maxHeight="0px"
    document.getElementById("MyElement").classList.remove('fa-times');
    document.getElementById("MyElement").classList.add('fa-bars');
  }
  

    
}

$('.owl-carousel').owlCarousel({
  loop:true,
  margin:10,
  center:true,
  nav:true,
  dots:false,
  navText : ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
  responsive:{
      0:{
          items:1
      },
      600:{
          items:3
      },
      1000:{
          items:3
      }
  }
})


var typed = new Typed('.element', {
  strings: [
   'PROGRAMMER',
   'FREELANCER',
   'WEB_DEVELOPER'],
   typeSpeed: 90,
   backSpeed: 90,
   loop: true,
  smartBackspace: true // Default value
});