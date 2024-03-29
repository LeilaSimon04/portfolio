function changerOpaciteCarouselItem() {
    // On sélectionne tous les intitulesProjets
    let intitulesProjets = document.querySelectorAll('.intitulesProjets')
    // On va chercher les initulésProjets
    intitulesProjets.forEach(intitule => {
        intitule.addEventListener('mouseover', () => {
            //si un aperçu est déjà affiché : il disparait
            let itemActive = document.querySelector(".itemActive")
            itemActive.classList.remove("itemActive")
            // On sélectionne l'aperçu du projet
            let apercuProjet = document.getElementById("img-" + intitule.id)
            // On change l'opacité de l'aperçu du projet
            apercuProjet.classList.add("itemActive")
        });
    });
}

changerOpaciteCarouselItem()
