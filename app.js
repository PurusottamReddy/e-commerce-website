let slideIndex = 0;
let slides;
let slideInterval;

function showSlides(n) {
  slides = document.getElementsByClassName("slide");

  if (n >= slides.length) slideIndex = 0;
  if (n < 0) slideIndex = slides.length - 1;

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex].style.display = "block";
}

function changeSlide(n) {
  clearInterval(slideInterval);
  slideIndex += n;
  showSlides(slideIndex);
  autoSlide(); // restart auto
}

function autoSlide() {
  slideInterval = setInterval(() => {
    slideIndex++;
    showSlides(slideIndex);
  }, 3000);
}

document.addEventListener("DOMContentLoaded", function () {
  slides = document.getElementsByClassName("slide");
  showSlides(slideIndex);
  autoSlide();
});


let carts= document.getElementById("cart");
carts.addEventListener("click",pageCart);

function pageCart(){
  window.location.href="cart.html";
}

let contactBtn=document.getElementById("contactus");
contactBtn.addEventListener("click",goToContact);
function goToContact(){
  document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
};

document.getElementById("mobile").addEventListener("click",()=>{
  window.location.href="mobiles.html";
});



//dark md chnge
dark =document.getElementById("dark");
dark.addEventListener("click",()=>{
document.body.classList.toggle("dark-mode");});
dark.addEventListener("click",()=>{
  document.body.classList.toggle("dark-mode");
//   if(document.body.classList.contains("dark-mode")){
//     setTimeout(()=>{
// alert("dark mode activated");},1000);
//   }
//   else{
//     setTimeout(()=>{
// alert("light mode activated");},1000);
//   }
// console.log("wrokingg");
});




//scroll
const scroll=document.getElementById("scroll");
window.addEventListener("scroll",()=>{
  if(window.scrollY>100){
    scroll.classList.add("show");
  }
  else{
    scroll.classList.remove("show");
  }
});

scroll.addEventListener("click",()=>{
  window.scrollTo({top:0,behavior:"smooth"});
  setTimeout(()=>{
    alert("Moved to top");},2000);

});
