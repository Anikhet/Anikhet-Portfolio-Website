function sap_trigger(){

    var tl = gsap.timeline()
tl.to("#intro",{
    top: "-100%",delay:1,duration:0.5,
    ease: "expo.out"
})
tl.from("nav img,.nav-2 h4",{
    y:-30,
    opacity:0,
    duration:0.4,
    stagger:0.1
})

tl.from(".shad-2,.shad-3,.right h3",{
    y:-30,
    opacity:0,
    duration:0.5,
    stagger:0.2
})

tl.from('.bouncy-bob,.bouncy-bob-1,.new-img',{
    opacity:0


})

}

sap_trigger()


const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true,
    lerp: 0.07

});


Shery.mouseFollower();
Shery.makeMagnet("nav img,.shad-2,.shad-3" /* Element to target.*/,{});
// Shery.imageMasker(".left img" /* Element to target.*/, {
//     //Parameters are optional.
//     mouseFollower: true,
//     text: "That's me",
//     ease: "cubic-bezier(0.23, 1, 0.320, 1)",
//     duration: 0.4,
//   });


