var menuItems=document.getElementById("menuItems")
menuItems.style.maxHeight="0px"
function toggleMenu() {
  if ( menuItems.style.maxHeight=="0px") {
    menuItems.style.maxHeight="150px"
  } 
  else{
    menuItems.style.maxHeight="0px"
  }

    
}