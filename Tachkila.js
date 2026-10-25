const afficherform=document.querySelector(".ajouter");
const form=document.querySelector(".form");
const btnX=document.querySelector("#btnX");
const annulerForm=document.querySelector("#annuler")
afficherform.addEventListener("click",()=>{
    form.classList.remove("hidden");
})
btnX.addEventListener("click",()=>{
    form.classList.add("hidden");
})
annulerForm.addEventListener("click",()=>{
    form.classList.add("hidden");
})
// ajouter les joueurs
const formJoueur=document.querySelector("#form-joueur");
const nomJoueur=document.querySelector("#nom-joueur");
const numeroJoueur=document.querySelector("#numero-joueur")
const joueurs = [];
let idjoueur=joueurs.length;

formJoueur.addEventListener("submit", (event) => {
    event.preventDefault();

    const nom = nomJoueur.value.trim();
    const numero = Number(numeroJoueur.value);

    const posteChoisi = document.querySelector('input[name="poste"]:checked');

    const nouveauJoueur = {
        id: idjoueur,
        nom: nom,
        poste: posteChoisi.value,
        numero: numero,
    };
    
    joueurs.push(nouveauJoueur);
    idjoueur++;
    console.log(joueurs);
    formJoueur.reset();
    afficherJoueurs();
    form.classList.add("hidden");
});
const liste=document.querySelector("#liste-joueurs");
// Afficher les joueurs
function afficherJoueurs() {
    liste.innerHTML=" ";
    joueurs.forEach((joueur) => {
        const carte = document.createElement("div");
        carte.className = "p-3 border-1 border-gray-800 shadow-xl/30 bg-green-600/8 rounded-lg mb-4";

        const ligne = document.createElement("div");
        ligne.className = "flex gap-5 justify-between";

        const informations = document.createElement("div");
        informations.className = "flex gap-5";

        const numero = document.createElement("p");
        numero.className =
            "bg-slate-900 text-orange-600 border border-orange-600 px-5 py-3 rounded-full font-medium";
        numero.textContent = joueur.numero;
        
        const details = document.createElement("div");

        const nom = document.createElement("p");
        nom.className = "font-medium text-gray-50";
        nom.textContent = joueur.nom;

        const poste = document.createElement("p");
        poste.className = "font-medium text-orange-600";
        poste.textContent = joueur.poste;
        // Icônes Modifier et Supprimer
        const actions = document.createElement("div");
        actions.className = "flex gap-3 items-start";

        const btnModifier = document.createElement("button");
        btnModifier.className = "text-orange-600 hover:text-blue-600";
        btnModifier.innerHTML = '<i class="fa-solid fa-pen"></i>';
        btnModifier.title = "Modifier";

        const btnSupprimer = document.createElement("button");
        btnSupprimer.className = "text-black  hover:text-red-700";
        btnSupprimer.innerHTML = `<i class="fa-solid fa-trash"></i>`;
        btnSupprimer.title = "Supprimer";
        // select
        const listposition=document.createElement("select");
        listposition.className=" w-70 border-1 border-gray-500 shadow-xl/30 bg-gray-400/8 h-8 mt-4 rounded-lg";
        listposition.innerHTML =`
            <option value="banc">Sur le banc</option>
            <option value="GB">GB-Gardien</option>
            <option value="DG">DG-Défenseur gauche</option>
            <option value="DC">DC-Défenseur central 1</option>
            <option value="DC">DC-Défenseur central 2</option>
            <option value="DD">DD-Défenseur droit</option>
            <option value="MG">MG-Milieu gauche</option>
            <option value="MC">MC-Milieu central 1</option>
            <option value="MC">MC-Milieu central 2</option>
            <option value="MD">MD-Milieu droit</option>
            <option value="BU">BU-Buteur 1</option>
            <option value="BU">BU-Buteur 2</option>
                `;

        details.append(nom, poste);
        informations.append(numero, details);
        actions.append(btnModifier, btnSupprimer);
        ligne.append(informations,actions);
        carte.append(ligne,listposition);
        liste.append(carte);
    });
}
