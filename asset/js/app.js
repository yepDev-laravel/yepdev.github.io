//gsap animation loader

gsap.registerPlugin(ScrollTrigger);
window.addEventListener('load', () =>{
    
    let LT=gsap.timeline({paused:true});

    LT.from(".navItem", {duration:1, y:-100, stagger:0.2, ease:"power2.out"}).from(".nav-logo", {duration:1, opacity:0, ease:"bounce.out"}, "-=1").from(".header-main", {duration:1, y:50, opacity:0, ease:"power2.out"}, "-=0.5")

    LT.play()
})

gsap.from(".left-realisation",{
    duration:1, scrollTrigger:{
        trigger:"header-footer",
        toggleActions:"play none none none",
        start:"top top",
        end:"bottom center"
    },x:-60, opacity:0, stagger:0.8, ease:"power2.out"
})


gsap.from(".right-realisation",{
    duration:1, scrollTrigger:{
        trigger:"header-footer",
        toggleActions:"play none none none",
        start:"top top",
        end:"bottom center"
    },x:60, opacity:0, stagger:0.8, ease:"power2.out"
})

gsap.from(".section_title.first",{
    duration:1, scrollTrigger:{
        trigger:".end-realisation",
        toggleActions:"play none none none",
        start:"top top",
        
    },y:50 ,opacity:0, ease:"power2.out"
})

gsap.from(".section_text.first p",{
    duration:1, scrollTrigger:{
        trigger:".end-realisation",
        toggleActions:"play none none none",
        start:"bottom 50%",
        
    },y:80 ,opacity:0,stagger:0.3, ease:"power2.out"
})

gsap.from(".section_title.second",{
    duration:1, scrollTrigger:{
        trigger:".section_text.first .end-web-dev",
        toggleActions:"play none none none",
        start:"top top",
        
    },y:50 ,opacity:0, ease:"power2.out"
})

gsap.from(".section_text.second p",{
    duration:1, scrollTrigger:{
        trigger:".section_text.first .end-web-dev",
        toggleActions:"play none none none",
        start:"center top",
        
    },y:80 ,opacity:0,stagger:0.3, ease:"power2.out"
})


let TL=gsap.timeline({scrollTrigger:{
    trigger:".about-text-middle",
        toggleActions:"play none none none",
        start:"top top"
}})


TL.from(".one_part",{
    duration:1,x:-80 ,opacity:0, ease:"elastic.out"
}).from(".three_part",{
    duration:1,x:80 ,opacity:0, ease:"elastic.out"
}, "-=1").from(".copyright-content",{duration:1,opacity:0, ease:"power2.out"},"-=0.5").from(
    {duration:1,opacity:0, ease:"power2.out"},"-=0.3"
)





