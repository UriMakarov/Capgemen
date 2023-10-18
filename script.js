document.addEventListener("DOMContentLoaded", function () {
    const headerBurgerButton = document.querySelector(".header__burger-button");
    const mobileMenu = document.querySelector(".mobile-menu");
    const headerBurgerIcon = document.querySelector(".header__burger-icon");
    const headerCloseIcon = document.querySelector(".header__close-icon");
    const body = document.querySelector("body");
    const header = document.querySelector("header");    
  
    const VISIBLE_CLASS = "visible";
    const HIDDEN_CLASS = "hidden";    
    const SHOW_MENU_CLASS = "show-menu";  

    function openMenu() {
        mobileMenu.classList.add(VISIBLE_CLASS);
        headerBurgerIcon.classList.remove(VISIBLE_CLASS);
        headerCloseIcon.classList.add(VISIBLE_CLASS);
        body.classList.add(HIDDEN_CLASS);
        header.classList.add(SHOW_MENU_CLASS);
    }

    function closeMenu() {
        mobileMenu.classList.remove(VISIBLE_CLASS);
        headerBurgerIcon.classList.add(VISIBLE_CLASS);
        headerCloseIcon.classList.remove(VISIBLE_CLASS);
        body.classList.remove(HIDDEN_CLASS);
        header.classList.remove(SHOW_MENU_CLASS);        
    }

    headerBurgerButton.addEventListener("click", function () {

        if (mobileMenu.classList.contains(VISIBLE_CLASS)) {
            closeMenu();
        } else {
            openMenu();
        }


    });
});