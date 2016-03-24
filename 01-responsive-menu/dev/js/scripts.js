// check if a menu__item contains a child menu

var menu = document.getElementById('menu');
var menuItems = menu.children;
var breakpoint = 1000;

// check if a menu__item contains a child menu
for(let i = 0; i < menuItems.length; i++) {
  let currentItem = menuItems[i];
  if(currentItem.querySelector('ul')){
    currentItem.classList.add('menu__parent');
  }
}
var menuParents = menu.querySelectorAll('.menu__parent');

// Show and hide child menu in hover parent
if(innerWidth > breakpoint) {
  menu.classList.add('horizontal');
  for (let i = 0; i < menuParents.length; i++) {
    let currentItem = menuParents[i];
    let menuChild = menuParents[i].querySelector('.menu--child');
    currentItem.addEventListener('mouseenter', () => {
      menuChild.classList.add('show');
    });
    currentItem.addEventListener('mouseleave', () => {
      menuChild.classList.remove('show');
    })
  }
} else {
  for (let i = 0; i < menuParents.length; i++) {
    let currentItem = menuParents[i];
    let menuChild = menuParents[i].querySelector('.menu--child');
    let contador = 0;
    currentItem.addEventListener('click', () => {
      if(contador === 0){
        menuChild.classList.add('show');
        contador++;
      } else if(contador === 1){
        menuChild.classList.remove('show');
        contador--;
      }
      console.log(contador);
    });
  }
}