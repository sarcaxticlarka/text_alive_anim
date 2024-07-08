// gsap.utils.toArray(".marquee-container").forEach(container => {
//     gsap.timeline({
//       scrollTrigger: {
//         trigger: container,
//         start: "top center",
//         end: "bottom center",
//         scrub: 1.5,
//         delay:0.5,
//         markers: true,
//       }
//     })
//     .to(container.querySelector(".marquee"), {
//         xPercent: -6, 
//         duration:0.8,
//         dealy:0.5, 
       
//     })
    
//     .to(container.querySelector(".with-text h1"), {
//         xPercent: -10,  
//       fontWeight: 900,
//       fontSize: "6vw",
//       duration: 3,
//       color: "#000",
//       ease: "power2.inOut"
//     });
//   });
// var tl = gsap.timeline();

 


// gsap.utils.toArray(".marquee-container").forEach(container => {
//     let tl = gsap.timeline({
//       scrollTrigger: {
//         trigger: container,
//         start: "top center",
//         end: "bottom center",
//         scrub: 1.5,
//         delay: 0.5,
//         markers: true,
//       }
//     });
  
//     tl.to(container.querySelector(".marquee"), {
//       xPercent: -6,
//       duration: 0.8,
//       delay: 0.5,
//       ease: "power3.inOut"
//     });
  
//     tl.to(container.querySelector(".with-text h1"), {
//       xPercent: -10,
//       fontWeight: 900,
//       fontSize: "6vw",
//       duration: 3,
//       color: "#000",
//       ease: "power3.inOut",
//       onStart: () => {
//         gsap.to(container.querySelector(".with-text h1"), {
//           fontVariationSettings: "'wght' 900",
//           duration: 0.5
//         });
//       }
//     });
//   });



  // Hero Image Scale Animation
var tlHero = gsap.timeline();

tlHero.fromTo(".hero img", 
    {
        scale: 0.5  
    }, 
    {
        scale: 1,  
        scrollTrigger: {
            trigger: ".hero",
            scrub: 2,  
            start: "top top", 
            end: "bottom 70%",
        }
    }
);

// Marquee Container Animation
gsap.utils.toArray(".marquee-container").forEach(container => {
    let tlMarquee = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top center",
        end: "bottom center",
        scrub: 1.5,
        delay: 0.5,
         
      }
    });
  
    tlMarquee.to(container.querySelector(".marquee"), {
      xPercent: -6,
      duration: 0.8,
      delay: 0.5,
      ease: "power3.inOut"
    });
  
    tlMarquee.to(container.querySelector(".with-text h1"), {
      xPercent: -10,
      fontWeight: 900,
      fontSize: "6vw",
      duration: 3,
      color: "#000",
      ease: "power3.inOut",
      scrub:2,
      onStart: () => {
        gsap.to(container.querySelector(".with-text h1"), {
          fontVariationSettings: "'wght' 900",
          duration: 0.5
        });
      }
    });
});


 

const lenis = new Lenis()

 

lenis.on('scroll', ScrollTrigger.update)

gsap.ticker.add((time)=>{
  lenis.raf(time * 1000)
})

gsap.ticker.lagSmoothing(0)