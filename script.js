
var el_list = document.querySelectorAll('.unscrollable'); // returns NodeList
var el_array = [...el_list]; // converts NodeList to Array
el_array.forEach(el => {

el.addEventListener('wheel', function(e) {
    e.preventDefault();
  });

});



