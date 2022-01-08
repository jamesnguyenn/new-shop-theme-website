//Selector
let $ = document.querySelector.bind(document);
let $$ = document.querySelectorAll.bind(document);
let stickyMenu = $(".sticky-menu");
let iconSticky = $(".menu-sticky-logo");
let linkMenu = $$(".menu-item");
let menu = $(".menu");
console.log(linkMenu);
//Listener
iconSticky.addEventListener("click", () => {
  menu.classList.toggle("menu-active");
});
// iconSticky.addEventListener("click", () => {
//   menu.classList.toggle("sticky-menu");
// });
iconSticky.addEventListener("click", () => {
  iconSticky.classList.toggle("menu-sticky-cancel-active");
});
iconSticky.addEventListener("click", noScroll);

linkMenu.forEach((element) => {
  element.onclick = function () {
    $(".menu-item.menu-active-main").classList.remove("menu-active-main");
    this.classList.add("menu-active-main");
  };
});
//Function
function noScroll() {
  let body = document.body.classList.toggle("scroll-body");
  return body;
}
