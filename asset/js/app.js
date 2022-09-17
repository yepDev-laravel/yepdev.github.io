//gsap animation loader
gsap.registerPlugin(TextPlugin);
const h1="Web developper freelance basé en Côte d'Ivoire. Création de sites web sur mesure à des Tarifs abordables."
window.addEventListener('load', () =>{
    

    LT.to(".title", {duration: 2, text:h1})
    
})

//mobile menu display

let menu_icon=document.querySelector(".menu-icon")
let nav_mobile=document.querySelector(".nav-bar")

menu_icon.addEventListener("click", () => {
    nav_mobile.classList.toggle("menu-mobile")
})