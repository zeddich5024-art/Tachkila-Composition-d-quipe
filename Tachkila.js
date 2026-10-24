const aficherform=document.querySelector(".ajouter");
const form=document.querySelector(".form")
aficherform.addEventListener("click",()=>{
    form.classList.toggle("hidden");
})