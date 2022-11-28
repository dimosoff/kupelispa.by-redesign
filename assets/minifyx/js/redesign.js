const searchButton = document.querySelector(".header-search-button");
const searchElement = document.querySelector(".header-search");
const topline = document.querySelector(".topline");
const searchInput = document.getElementById("search");

if (topline) {
  addClassOnScroll("body", topline.clientHeight, "scrolled");
}

if (searchButton && searchElement) {
  const searchClose = document.querySelector(".search-close");
  searchButton.addEventListener("click", function (e) {
    e.preventDefault();
    searchElement.classList.toggle("active");
    if (!searchElement.classList.contains("active")) return;
    searchInput.click();
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
