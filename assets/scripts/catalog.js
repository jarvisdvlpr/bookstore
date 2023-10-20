let hamburger= document.querySelector(".hamburger");
let mobMenu = document.querySelector(".mobile_menu");
let navLink= document.querySelectorAll(".mobile_menu ul a") 

hamburger.addEventListener("click", ()=>{
    mobMenu.classList.toggle("active")
    hamburger.classList.toggle("active")
})

navLink.forEach((item)=>{
    item.addEventListener("click", ()=>{
        hamburger.classList.remove("active")
        mobMenu.classList.remove("active")
    })
})

// !popup

let userBtn = document.querySelector(".user_account");
let popUp = document.querySelector(".popup");
let form = document.querySelector(".popup form");

userBtn.addEventListener("click", function(event) {
  popUp.style.display = "block";
  event.stopPropagation();
});

form.addEventListener("click", function(event) {
  event.stopPropagation();
});

document.addEventListener("click", function() {
  popUp.style.display = "none";
});

var swiper = new Swiper(".slide_content", {
  slidesPerView: 4,
  spaceBetween: 25,
  centerSlide: true, // Remove quotes around true
  fade: true,        // Remove quotes around true
  grabCursor: true,  // Remove quotes around true
  pagination: {
      el: ".swiper-pagination",
      clickable: true
  },
  breakpoints: {
      0: {
          slidesPerView: 1,
      },
      500: {
          slidesPerView: 2,
      },
      992: {
          slidesPerView: 3,
      }
  }
});
