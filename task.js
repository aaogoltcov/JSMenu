'use strict';

let subMenu = Array.from(document.querySelectorAll('ul.menu_sub'))

function closeAllMenus(array, mainMenu) {
    array.forEach(function (menu) {
        (mainMenu === menu.closest('ul.menu_main')) ? menu.classList.remove('menu_active') : '';
        });
};

subMenu.forEach(function (menu) {
    menu.previousElementSibling.onclick = function () {
        if (menu.classList.contains('menu_active')) {
            closeAllMenus(subMenu, menu.closest('ul.menu_main'));
            return false;
        } else {
            closeAllMenus(subMenu, menu.closest('ul.menu_main'));
            menu.classList.add('menu_active');
            return false;
        };
    };
});
