(function () {
    const burgerItem = document.querySelector('.header__burger');
    const menu = document.querySelector('.nav');
    const menuCloseItem = document.querySelector('.header__nav-close');
    const menuItem = document.querySelector('.nav-list');
    burgerItem.addEventListener('click', () => {
        menu.classList.add('nav_active');
        });

        menuItem.addEventListener('click', () => {
            menu.classList.remove('nav_active');
        });

        menuCloseItem.addEventListener('click', () => {
            menu.classList.remove('nav_active');
        });
    }())
