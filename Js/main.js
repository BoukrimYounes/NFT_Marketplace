let navMenu = document.querySelector(".nav_menu");
let navItems = document.querySelector(".nav_items");
let bxMenu = document.querySelector(".bx-menu");

console.log(navMenu);
console.log(navItems);
console.log(bxMenu);

navMenu.addEventListener("click", () => {
  navItems.classList.toggle("add");
  bxMenu.classList.toggle("bx-x");
});

let year = document.getElementById("copyright-year");
console.log(year);

var date = new Date();
console.log(date);

let y = date.getFullYear();

year.innerHTML = y;
