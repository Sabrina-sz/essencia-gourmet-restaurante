
document.addEventListener("DOMContentLoaded", function(){

    ScrollReveal().reveal(".inicio-bv", {
        distance: "100px",
        origin: "rigth",
        opcity:0,
        duration: 1400,
        reset: true,
        easing:"ease-in-out",
        interval:100
    });
        ScrollReveal().reveal(".pratos",{      
        distance: "100px",
        origin: "bottom",
        opcity:0,
        duration: 1500,
        reset: true,
        easing:"ease-in-out",
        interval:100
    });

    ScrollReveal().reveal("footer",{
        distance: "20px",
        origin: "bottom",
        opcity:0,
        duration:1545,
        reset: true,
        easing:"ease-in-out",
        interval:100
    })
})


