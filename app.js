//Pour remplir la liste des intitulés des projets sur la Page PROJET et récupérer les données dans le fichier donnees.json
//Récupération des données dans le donnees.json
let options = {
    method: "GET"
}
//Lire la donnée
fetch("./donnees.json", options)
    //Fetch a besoin de ce then pour aller chercher et attendre de tout avoir avant de donner une réponse
    .then(response => {
        console.log(response)
        return response.json()
    })
    .then(data => {
        // ici j'ai accès à ma donnée
        console.log(data)
        remplirListe(data)
        //let intitulesProjets = document.querySelectorAll(".intitulesProjets")
        //intitulesProjets.addEventListener("click", (e) => {
        //    e.preventDefault()
        //    remplirPageProjet(data)
        //})
        // Appel à la fonction changerOpaciteCarouselItem après avoir rempli la liste
        changerOpaciteCarouselItem();
    })

//Fonction pour remplir la liste des intitulés de mes projets sur la page PROJETS
function remplirListe(donnees) {
    let zone = document.querySelector(".containerIntitules")
    donnees.forEach(donnee => {
        zone.innerHTML += `
        <div class="intitulesProjets" id="${donnee.reference}">
        <a href="projetLeilaSimon.html?ref=${donnee.reference}" title="${donnee.nom}" class="width70 borderBottom flex justifyBetween alignCenter">
            <h3>${donnee.nom}</h3>
            <p>${donnee.categorie}</p>
        </a>`
    });
    
}

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

