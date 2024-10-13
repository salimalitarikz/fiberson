

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
    console.log("current slider " + currentSliderNo);

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
                element.classList.remove("slider_header_none");
                element.classList.add("slider_header_active");
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
                element.classList.remove("slider_header_none");
                element.classList.add("slider_header_active");
                allContents[i].classList.remove("slider_content_none");
                allContents[i].classList.add("slider_content_visible");
                
            }

            if (element.dataset.slider1header == previousSliderNo - 1 || element.dataset.slider1header == previousSliderNo + 1) {

               

                element.classList.remove("slider_header_none");
                element.classList.add("slider_header_passive");

                
            }

            // if (previousSliderNo == 1) {
            //     allHeaders[8].classList.remove("slider_header_none");
            //     allHeaders[8].classList.add("slider_header_passive");
            // }
    }


    }


    
    if (num == -1 && previousSliderNo == 1) {        
        let fakeElement1 = document.createElement("h1");
        fakeElement1.setAttribute("id","fakeElement1");
        let firstHeader = document.getElementById("first_header");
        let allHeadersDiv = document.getElementById("allHeadersDiv");
        fakeElement1.classList.add("slider_header_passive");
        fakeElement1.innerHTML = `Elektronik <br> İşlemler`;
        allHeadersDiv.insertBefore(fakeElement1,firstHeader);
    }
    else{
        if (document.contains(document.getElementById("fakeElement1"))) {
            document.getElementById("fakeElement1").remove();
        }   else {
        }
    }

    if (num == -1 && previousSliderNo == 9) {        
        let fakeElement2 = document.createElement("h1");
        fakeElement2.setAttribute("id","fakeElement2");
        let lastHeader = document.getElementById("last_header");
        let allHeadersDiv = document.getElementById("allHeadersDiv");
        fakeElement2.classList.add("slider_header_passive");
        fakeElement2.innerHTML = `Elektrik <br> Tesisatı`;
        allHeadersDiv.insertBefore(fakeElement2,lastHeader.nextSibling);
    }
    else{

        if (document.contains(document.getElementById("fakeElement2"))) {
            document.getElementById("fakeElement2").remove();
        }   else {
        }
    }

    if (num == +1 && nextSliderNo == 9) {        
        let fakeElement3 = document.createElement("h1");
        fakeElement3.setAttribute("id","fakeElement3");
        let lastHeader = document.getElementById("last_header");
        let allHeadersDiv = document.getElementById("allHeadersDiv");
        fakeElement3.classList.add("slider_header_passive");
        fakeElement3.innerHTML = `Elektrik <br> Tesisatı`;
        allHeadersDiv.insertBefore(fakeElement3,last_header.nextSibling);
    }
    else{
        if (document.contains(document.getElementById("fakeElement3"))) {
            document.getElementById("fakeElement3").remove();
        }   else {
        }
    }

    if (num == +1 && nextSliderNo == 1) {        
        let fakeElement4 = document.createElement("h1");
        fakeElement4.setAttribute("id","fakeElement4");
        let firstHeader = document.getElementById("first_header");
        let allHeadersDiv = document.getElementById("allHeadersDiv");
        fakeElement4.classList.add("slider_header_passive");
        fakeElement4.innerHTML = `Elektronik <br> İşlemler`;
        allHeadersDiv.insertBefore(fakeElement4,first_header);
    }
    else{
        if (document.contains(document.getElementById("fakeElement4"))) {
            document.getElementById("fakeElement4").remove();
        }   else {
        }
    }



}


////// ANIMATINS

// SCROLL 


  


window.addEventListener("scroll", function(){
    const banner = document.getElementById('banner_1');
    const ad1 = this.document.getElementById("banner_1_ad_1");
    const ad2 = this.document.getElementById("banner_1_ad_2");
    const ad3 = this.document.getElementById("banner_1_ad_3");
    const banner_header = this.document.querySelector("#banner_1 > h1")
    const scrollPosition = window.scrollY; // Sayfanın ne kadar aşağı kaydırıldığı
    const windowHeight = window.innerHeight; // Tarayıcı ekranının yüksekliği
    // window height part
    const whp = windowHeight/10;




    // Eğer scroll miktarı, elementin pozisyonuna eşit ya da fazlaysa animasyonu başlat
    if (scrollPosition < (whp*4)  && scrollPosition >  (whp*1))  {
        ad1.classList.add('banner_added');
    }else{
        ad1.classList.remove('banner_added');
    }
    if (scrollPosition < (whp*7)  && scrollPosition >  (whp*4)){
        ad1.classList.remove('banner_added');
        ad2.classList.add('banner_added');
    }
    else{
        ad2.classList.remove('banner_added');
    }
    if ( scrollPosition >  (whp*7)) {
        ad1.classList.remove('banner_added');
        ad2.classList.remove('banner_added');
        ad3.classList.add('banner_added');
    }
    else{
        ad3.classList.remove('banner_added');
    }
    
   
});



/// INTERSECTION OBSERVER

