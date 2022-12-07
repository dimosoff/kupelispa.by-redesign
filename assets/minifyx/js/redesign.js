const searchButton = document.querySelector(".header-search-button");
const searchElement = document.querySelector(".header-search");
const topline = document.querySelector(".topline");
const menuButton = document.querySelector(".toggle-mnu");

const elementsToHide = [topline, searchElement];
const toggleButtons = [menuButton, searchButton];
const allElements = elementsToHide.concat(toggleButtons);

if (topline) {
  addClassOnScroll("body", topline.clientHeight, "scrolled");
}

if (searchButton && searchElement) {
  const searchClose = document.querySelector(".search-close");
  searchButton.addEventListener("click", function (e) {
    searchElement.classList.toggle("active");
    if (!searchElement.classList.contains("active")) return;
    document.getElementById("search").focus();
  });
  searchClose.addEventListener("click", function () {
    searchElement.classList.remove("active");
  });
}

menuButton.addEventListener("click", function () {
  menuButton.classList.toggle("on");
  topline.classList.toggle("active");
});

document.body.addEventListener(
  "click",
  function (e) {
    allElements.forEach((elem) => {
      let isBtn = false;
      toggleButtons.forEach((btn) => {
        if (btn === e.currentTarget || btn.contains(e.target)) {
          isBtn = true;
          return false;
        }
      });
      if (isBtn) return;

      if (!elem.contains(e.target)) {
        elem.classList.remove("active");
        menuButton.classList.remove("on");
      }
    });
  },
  {
    capture: true,
  }
);

function addClassOnScroll(item, topOffset, nameOfClass) {
  window.addEventListener("scroll", function () {
    if (scrollY > topOffset) {
      document.querySelector(item).classList.add(nameOfClass);
    } else {
      document.querySelector(item).classList.remove(nameOfClass);
    }
  });
  if (scrollY > topOffset) {
    document.querySelector(item).classList.add(nameOfClass);
  }
}
