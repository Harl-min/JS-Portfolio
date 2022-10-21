// btns = document.getElementsByClassName("nav-item");
//     for (var i = 0; i < btns.length; i++) {
//         btns[i].addEventListener("click", function () {
// 			console.log(i);
//         });
//     }
      

// alert ()

var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab")
}

// var tablink = document.getElementsByClassName("tab-link");
// var tabcontents = document.getElementsByClassName("carousel-wrapper");

// function opentab(tabname) {
//     for(tablink of tablink){
//         tablink.classList.remove("active-click");
//     }
//     for(tabcontent of tabcontents){
//         tabcontent.classList.remove("active-card");
//     }
//     event.currentTarget.classList.add("active-click");
//     document.getElementById(tabname).classList.add("active-card")
// }