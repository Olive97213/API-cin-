// navbar

let popcorn = document.querySelector(".popcorn");
let navbar = document.querySelector(".navbar");
let accueil = document.querySelector(".accueil");
let bobine = document.querySelector(".bobine");
let clap = document.querySelector(".clap");


popcorn.onclick = function () {
  popcorn.classList.toggle("active");
  
  
  function createPopcorn() {
  for (let i = 0; i < 10; i++) {
    let popcornItem = document.createElement("div");
    popcornItem.classList.add("popcorn-animation");
    navbar.appendChild(popcornItem);
  }
  
}

if (popcorn.classList.contains("active")) {
    createPopcorn();
  } 
  else {
    clearPopcorn();
  }
};


function clearPopcorn() {
  let popcornItems = document.querySelectorAll(".popcorn-animation");
  popcornItems.forEach(function (popcornItem) {
    navbar.removeChild(popcornItem);
  });
}



// let animationIcone = ["accueil", "bobine", "clap"];



// function moveAccueil(){
// for (let i = 0; i < 1; i++){
//   let accueilItem = document.createElement("div");
//   popcornItem.classList.add("accueil");
//   navbar.appendChild(accueilItem);
// }

// if (popcorn.classList.contains("active")) {
//   moveAccueil();
// }
// else {
//   clearAccueil();
// }

// }

// function clearAccueil() {
//   let accueilItems = document.querySelectorAll(".accueil");
//   accueilItems.forEach(function (accueilItem) {
//     navbar.removeChild(accueilItem);
//   });
// }