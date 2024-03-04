
gsap.to("#intro",{
    top: "-100%",delay:1,duration:0.5,
    ease: "expo.out"
})


const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true,
    lerp: 0.07

});
