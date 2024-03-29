//Pour générer et remplir les pages de chaque projet et récupérer les données dans le fichier donnees.json
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
        remplirPageProjet(data)
       
    })

//Fonction pour remplir la page de mes projets sur la page PROJETS
function remplirPageProjet(donnees) {
    let presentationProjet = document.querySelector(".presentationProjet")
    //Pour générer une nouvelle page
    let url = window.location.href;
    let urlRef = url.split('=')[1];
    donnees.forEach(donnee => {
        if (urlRef === donnee.reference) {

            let badges =''
            donnee.badge.forEach(b=>{
                badges+=`<div class="${b.classe} widthBadge textCenter">
                <p>${b.texte}</p>
            </div>`
            })

            presentationProjet.innerHTML += `
            <article class="presentationProjet flex">
                <div class="imgProjet width50 flex">
                    <div>
                        <img src="./images/${donnee.photo}" alt="${donnee.nom}" class="responsive">
                    </div>
                </div>
                <div class="infosProjet width50">
                    <h2>${donnee.nom}</h2>
                    <div class="infosGe flex justifyBetween">
                        <div class="width30">
                            <p>${donnee.pourQui}</p>
                        </div>
                        <div class="width20">
                            <p>${donnee.annee}</p>
                        </div>
                        <div class="width20">
                            <p>${donnee.categorie}</p>
                        </div>
                    </div>
                    <div class="textePresentation">
                        <h4>Description du projet</h4>
                        <p>${donnee.description}</p>
                    </div>
                    <div class="textePresentation">
                        <h4>Les besoins</h4>
                        <p>${donnee.contexte}</p>
                    </div>
                    <div class="tecLangage flex">
                        <h4>Langages et technologies utilisés</h4>
                        ${badges}
                    </div>
                </div>
            </article>
        `
        }
    })
}
