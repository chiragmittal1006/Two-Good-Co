function init(){
    
    gsap.registerPlugin(ScrollTrigger);
    
    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll
    
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector(".main"),
      smooth: true
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);
    
    // tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy(".main", {
      scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
      }, // we don't have to define a scrollLeft because we're only scrolling vertically.
      getBoundingClientRect() {
        return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
      },
      // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
      pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
    });
    
    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    
    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();
    
}

init()

gsap.to(".navright p", {
    opacity: 0,
    transform: "translateY(-5%)",
    scrollTrigger:{
        trigger: ".page1",
        scroller: ".main",
        // markers: true,
        start:"top 0",
        end:"top -5%",
        scrub:true,
    },
});

var mouse = document.querySelector(".video-container")
var crsr = document.querySelector(".play")

mouse.addEventListener("mousemove" , (dets) =>{
    var lefti = mouse.getBoundingClientRect().left;
    var topi = mouse.getBoundingClientRect().top;
    gsap.to(crsr,{
        left:dets.x - lefti -35,
        top:dets.y - topi -35,
        transform: "scale(1)",
        duration:0.3,
    })
})

mouse.addEventListener("mouseleave" , () =>{
    gsap.to(crsr,{
        transform: "scale(0)",
        duration:0.3
    })
})

gsap.from(".page1 h1",{
    opacity:0,
    delay:0.5,
    duration:0.8,
    y:100,
    stagger: 0.2,
})

gsap.from(".page1 .video-container",{
    scale:0.9,
    delay:1.3,
    duration:0.5,
    opacity:0
})

document.addEventListener("mousemove",(dets)=>{
    console.log(dets.y)
    gsap.to(".cursor",{
        left:dets.x,
        top:dets.y,
        ease : Power4,
        duration:1,
    })
})


const circle = () => {

document.querySelector(".page3 #child1").addEventListener("mouseenter",()=>{
    gsap.to(".cursor",{
        transform: "translate(-50%,-50%) scale(1)",
    })
})

document.querySelector(".page3 #child1").addEventListener("mouseleave",()=>{
    gsap.to(".cursor",{
        transform: "translate(-50%,-50%) scale(0)",
    })
})
document.querySelector(".page3 #child2").addEventListener("mouseenter",()=>{
    gsap.to(".cursor",{
        transform: "translate(-50%,-50%) scale(1)",
    })
})

document.querySelector(".page3 #child2").addEventListener("mouseleave",()=>{
    gsap.to(".cursor",{
        transform: "translate(-50%,-50%) scale(0)",
    })
})
document.querySelector(".page3 #child3").addEventListener("mouseenter",()=>{
    gsap.to(".cursor",{
        transform: "translate(-50%,-50%) scale(1)",
    })
})

document.querySelector(".page3 #child3").addEventListener("mouseleave",()=>{
    gsap.to(".cursor",{
        transform: "translate(-50%,-50%) scale(0)",
    })
})
document.querySelector(".page3 #child4").addEventListener("mouseenter",()=>{
    gsap.to(".cursor",{
        transform: "translate(-50%,-50%) scale(1)",
    })
})

document.querySelector(".page3 #child4").addEventListener("mouseleave",()=>{
    gsap.to(".cursor",{
        transform: "translate(-50%,-50%) scale(0)",
    })
})
document.querySelector(".page3 #child5").addEventListener("mouseenter",()=>{
    gsap.to(".cursor",{
        transform: "translate(-50%,-50%) scale(1)",
    })
})

document.querySelector(".page3 #child5").addEventListener("mouseleave",()=>{
    gsap.to(".cursor",{
        transform: "translate(-50%,-50%) scale(0)",
    })
})
document.querySelector(".page3 #child6").addEventListener("mouseenter",()=>{
    gsap.to(".cursor",{
        transform: "translate(-50%,-50%) scale(1)",
    })
})

document.querySelector(".page3 #child6").addEventListener("mouseleave",()=>{
    gsap.to(".cursor",{
        transform: "translate(-50%,-50%) scale(0)",
    })
})


}

circle();