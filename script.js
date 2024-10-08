

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



function slider_1(num){
    var activeHeader = document.querySelector(".slider_header_active");
    var currentSliderNo = Number(activeHeader.dataset.slider1header) ;
    var nextSliderNo = currentSliderNo + 1;
    var previousSliderNo = currentSliderNo - 1;
    var allHeaders = document.querySelectorAll(".slider_header");
    var allContents = document.querySelectorAll(".part_3_content");
    console.log("prev - " + currentSliderNo);

    if (currentSliderNo == allHeaders.length) {
        nextSliderNo = 1;
    }else{
        nextSliderNo = currentSliderNo + 1;
    }

    if (currentSliderNo == 1) {
        previousSliderNo = 9;
    }else{
        previousSliderNo = currentSliderNo - 1;
    }


    if (num == +1) {
        // activeHeader.classList.remove("slider_header_active");

        for (let i = 0; i < allHeaders.length; i++) {
            const element = allHeaders[i];
            const elcontent = allContents[i];
            element.classList.remove("slider_header_active");
            element.classList.remove("slider_header_passive");
            element.classList.add("slider_header_none");
            elcontent.classList.remove("slider_content_visible");
            elcontent.classList.add("slider_content_none");

            if (element.dataset.slider1header == nextSliderNo) {
                console.log("curr - " +nextSliderNo);
                element.classList.remove("slider_header_none");
                element.classList.add("slider_header_active");
                console.log("next - "  + Number(nextSliderNo + 1));
                allContents[i].classList.remove("slider_content_none");
                allContents[i].classList.add("slider_content_visible");
            }

            if (element.dataset.slider1header == Number(nextSliderNo) - 1 || element.dataset.slider1header == Number(nextSliderNo) + 1) {
                element.classList.remove("slider_header_none");
                element.classList.add("slider_header_passive");
            }
            
        }
    }else{
        for (let i = 0; i < allHeaders.length; i++) {
            const element = allHeaders[i];
            const elcontent = allContents[i];
            element.classList.remove("slider_header_active");
            element.classList.remove("slider_header_passive");
            element.classList.add("slider_header_none");
            elcontent.classList.remove("slider_content_visible");
            elcontent.classList.add("slider_content_none");

            if (element.dataset.slider1header == previousSliderNo) {
                console.log("previous" + element.dataset.slider1header);
                element.classList.remove("slider_header_none");
                element.classList.add("slider_header_active");
                allContents[i].classList.remove("slider_content_none");
                allContents[i].classList.add("slider_content_visible");
                
            }

            if (element.dataset.slider1header == previousSliderNo - 1 || element.dataset.slider1header == previousSliderNo + 1) {
                element.classList.remove("slider_header_none");
                element.classList.add("slider_header_passive");
            }
    }


    }
}