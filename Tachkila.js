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