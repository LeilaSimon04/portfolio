// Pour le Menu Burger
// Fonction pour afficher la barre de navigation en cliquant sur le bouton burger
let burger = document.getElementById("burger");
let navBarBurger = document.getElementById("navBarBurger");
burger.addEventListener("click", () => {
    //Si au click ma navBarBurger contient la classe d-none
    if (navBarBurger.classList.contains("nav-close")) {
        navBarBurger.classList.remove("nav-close");
    } else {
        navBarBurger.classList.add("nav-close");
    }
});