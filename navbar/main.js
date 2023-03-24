// navbar

let popcorn = document.querySelector(".popcorn");
let navbar = document.querySelector(".navbar");

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
  } else {
    clearPopcorn();
  }
};


function clearPopcorn() {
  let popcornItems = document.querySelectorAll(".popcorn-animation");
  popcornItems.forEach(function (popcornItem) {
    navbar.removeChild(popcornItem);
  });
}

