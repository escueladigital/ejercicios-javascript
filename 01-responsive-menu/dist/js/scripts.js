'use strict';

// check if a menu__item contains a child menu

var menu = document.getElementById('menu');
var menuItems = menu.children;
var breakpoint = 1000;

// check if a menu__item contains a child menu
for (var i = 0; i < menuItems.length; i++) {
  var currentItem = menuItems[i];
  if (currentItem.querySelector('ul')) {
    currentItem.classList.add('menu__parent');
  }
}
var menuParents = menu.querySelectorAll('.menu__parent');

// Show and hide child menu in hover parent
if (innerWidth > breakpoint) {
  menu.classList.add('horizontal');

  var _loop = function _loop(i) {
    var currentItem = menuParents[i];
    var menuChild = menuParents[i].querySelector('.menu--child');
    currentItem.addEventListener('mouseenter', function () {
      menuChild.classList.add('show');
    });
    currentItem.addEventListener('mouseleave', function () {
      menuChild.classList.remove('show');
    });
  };

  for (var i = 0; i < menuParents.length; i++) {
    _loop(i);
  }
} else {
  var _loop2 = function _loop2(i) {
    var currentItem = menuParents[i];
    var menuChild = menuParents[i].querySelector('.menu--child');
    var contador = 0;
    currentItem.addEventListener('click', function () {
      if (contador === 0) {
        menuChild.classList.add('show');
        contador++;
      } else if (contador === 1) {
        menuChild.classList.remove('show');
        contador--;
      }
      console.log(contador);
    });
  };

  for (var i = 0; i < menuParents.length; i++) {
    _loop2(i);
  }
}