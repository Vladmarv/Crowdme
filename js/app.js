//------------------------------ТАБЫ------------------------------
const tabBtn = document.querySelectorAll(".tab__selection-item");
const tabItem = document.querySelectorAll(".tab__content");
const tabNums = document.querySelectorAll(".tab__num")
tabBtn.forEach(function (item) {
  item.addEventListener("click", function () {
    let tabId = item.getAttribute("data-tab");
    let currentTab = document.querySelector(tabId);
    let tabNum = item.querySelector(".tab__num");

    tabBtn.forEach(function (item) {
      item.classList.remove('active');
    });

    tabItem.forEach(function (item) {
      item.classList.remove('active');
    });

    tabNums.forEach(function (item) {
      item.classList.remove('active');
    });

    item.classList.add('active');
    currentTab.classList.add('active');
    tabNum.classList.add('active');
  });
});
//------------------------------БУРГЕР------------------------------
const burger = document.querySelector(".header__menu-icon");
const menu = document.querySelector(".header__menu");
if (burger) {
  burger.addEventListener("click", function () {
    document.body.classList.toggle("_lock");
    burger.classList.toggle("_active");
    menu.classList.toggle("_active");
  });
}
