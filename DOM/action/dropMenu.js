// Задание 1 ИТ ШАТЛ
// 
// попробуем при помощи обработчика событий скрывать выпадающее меню при
// наведении на любой из элементов навигации (пункты меню).
// 




const changeCssPropByEvent = (item, eventName, cssProps) => {
    item.addEventListener(eventName, (event) => {
      let menuItem = event.target;
      let subList = menuItem.querySelector("ul") || menuItem.nextElementSibling;
      Object.keys(cssProps).forEach((key) => {
        subList.style[key] = cssProps[key];
      });
    });
  };
  
  const setOpenListener = (items) => {
    Array.from(items).forEach((item) => {
      changeCssPropByEvent(item, "mouseover", {
        display: "block",
      });
      changeCssPropByEvent(item, "mouseout", {
        display: "none",
      });
    });
  };
  
  let menuItem = document.querySelectorAll(".menu-item > a");
  let links = document.querySelectorAll(".menu-item");
  
  setOpenListener(menuItem);
  setOpenListener(links);