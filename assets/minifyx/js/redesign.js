const searchButton = document.querySelector(".header-search-button");
const searchElement = document.querySelector(".header-search");
const topline = document.querySelector(".topline");

if (topline) {
  addClassOnScroll('body', topline.clientHeight, 'scrolled');
}

if (searchButton && searchElement) {
  const searchClose = document.querySelector(".search-close");
  searchButton.addEventListener("click", function () {
    searchElement.classList.toggle("active");
  });
  searchClose.addEventListener("click", function () {
    searchElement.classList.remove("active");
  });
}

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