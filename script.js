

var menu_button = document.getElementById("menu_button");
var menu = document.getElementById("menu");
menu_button.addEventListener("click", function(){
    menu.classList.toggle("opened_menu");
    menu_button.classList.toggle("opened_menu_button");
});



function request_project(){
    var request_project_page = document.getElementById("request_project");
    request_project_page.classList.toggle("opened_req_proj");
}