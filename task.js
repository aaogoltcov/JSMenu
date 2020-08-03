'use strict'

let subMenu = Array.from(document.querySelectorAll('ul.menu_sub'))

function closeAllMenus(array, mainMenu) {
    array.forEach(function (menu) {
        (mainMenu === menu.closest('ul.menu_main')) ? menu.className = 'menu menu_sub' : '';
        });
};

subMenu.forEach(function (menu) {
    menu.previousElementSibling.onclick = function () {
        closeAllMenus(subMenu, menu.closest('ul.menu_main'));
        menu.className = 'menu menu_sub menu_active';
        return false;
        };
});
