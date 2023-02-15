//MAIN HEADER
//SEARCH
const searchEl = document.querySelector(".search");
const searchInputEl = searchEl.querySelector("input"); // 범위를 좁혀서 선택
const searchIcon = document.querySelector(".material-symbols-outlined");
searchEl.addEventListener("click", function () {
  if (searchInputEl.classList.contains("search-trans")) {
    searchInputEl.blur();
    return;
  }
  searchInputEl.classList.add("search-trans");
  searchInputEl.focus();
});

searchInputEl.addEventListener("focus", function () {
  searchInputEl.setAttribute("placeholder", "통합 검색");
});

searchInputEl.addEventListener("blur", function () {
  searchInputEl.setAttribute("placeholder", "");
  searchInputEl.classList.remove("search-trans");
});
