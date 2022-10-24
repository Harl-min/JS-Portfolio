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
};

var collectionlinks = document.getElementsByClassName("collection-links");
var collcontents = document.getElementsByClassName("coll-contents");

function opencontent(collname) {
    for(collectionlink of collectionlinks){
        collectionlink.classList.remove("active-link");
    }
    for(collcontent of collcontents){
        collcontent.classList.remove("active-content");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(collname).classList.add("active-content")
}

// const tabs = document.querySelectorAll(".tabs p");
// const contents = document.querySelectorAll(".content");

// tabs.forEach((tab, index) => {
//     tab.addEventListener("click", () => {

//         tabs.forEach(tab => tab.classList.remove("active"))
//         tab.classList.add("active");

//         contents.forEach((c) => c.classList.remove("active"));
//         contents[index].classList.add("active");
//     });
// });

$(function(){
    var flag=0;
    
    $('.share').on('click',function(){
     if(flag == 0)
      {
        $(this).siblings('.one').animate({
        top:'160px',
        left:'50%',
      },200);
      
       $(this).siblings('.two').delay(200).animate({
        top:'260px',
        left:'40%'
      },200);
      
       $(this).siblings('.three').delay(300).animate({
        top:'260px',
        left:'60%'
      },200);
                
      $('.one i,.two i, .three i').delay(500).fadeIn(200);  
        flag = 1;
      }
      
      
    else{
      $('.one, .two, .three').animate({
          top:'300px',
          left:'50%'
        },200);
        
    $('.one i,.two i, .three i').delay(500).fadeOut(200);
        flag = 0;
      }
    });
  });