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
let idjoueur=1;

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
        position: ""
    };

    joueurs.push(nouveauJoueur);
    idjoueur++;
    formJoueur.reset();
    form.classList.add("hidden");
});
