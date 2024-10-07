

var menu_button = document.getElementById("menu_button");
var menu = document.getElementById("menu");
menu_button.addEventListener("click", function(){
    menu.classList.toggle("opened_menu");
});