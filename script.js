const maCase = document.getElementById('welcome-msg');

if (maCase) {
    const heure = new Date().getHours();
    if (heure < 18) {
        maCase.innerText = "صباح الخير (Bonjour) ! Bienvenue à Tozeur.";
    } else {
        maCase.innerText = "مساء الخير (Bonsoir) ! Bienvenue à Tozeur.";
    }
}

function montrerInfo(sujet) {
    const zoneTexte = document.getElementById('texte-explicatif');
    if (zoneTexte) {
        if (sujet === 'oasis') {
            zoneTexte.innerText = "🧺 La Vannerie : Un savoir-faire ancestral qui transforme les feuilles de palmier en objets d'art !";
        } 
        else if (sujet === 'brique') {
            zoneTexte.innerText = "🌴 La Deglet Nour offre une douceur unique qui ravit les palais depuis des générations.";
        } 
        else if (sujet === 'plat') {
            zoneTexte.innerText = "🍲 Art Culinaire : Une cuisine oasienne riche en saveurs, marquée par l'utilisation d'épices locales et de dattes.";
        }
    }
}

let nombreDeLikes = 0;

function ajouterLike() {
    nombreDeLikes = nombreDeLikes + 1;
    const caseLikes = document.getElementById('compteur-likes');
    if (caseLikes) {
        caseLikes.innerText = nombreDeLikes;
    }
}
