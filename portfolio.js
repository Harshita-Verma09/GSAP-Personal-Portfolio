let body = document.querySelector("body");
let btn = document.querySelector(".btn");
let flag = 0;
btn.addEventListener("click", function () {
    if (flag == 0) {
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
        flag = 1;
    }
    else if(flag == 1){
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
        flag = 0;
    }

});







let tl = gsap.timeline()
function navAnimate() {
    gsap.from("nav h1, h4,.btn", {
        y: -10,
        opacity: 0,
        delay: 1,
        stagger: 0.15,
    })
    tl.from(".center_part1 h1", {
        x: -400,
        opacity: 0,
        duration: 1,
        delay: 2.6,
    })
    tl.from(".center_part1 p", {
        x: -100,
        opacity: 0,
        duration: 0.5,
        delay: 1.5,
    })
    tl.from(".center_part2 img", {
        opacity: 0,
        duration: 0.8,
    }, "=0.1")
    tl.from(".section1Bottom h1", {
        opacity: 0,
        y: 30,
        stagger: 0.5,
        duration: 1,
    })
    tl.from(".section1Bottom img", {
        opacity: 0,
        y: 30,
        stagger: 0.5,
        duration: 1.9,
    })


} navAnimate()

function marqueAnimation() {
    let page = document.getElementById("page2");
    page.addEventListener("wheel", function (dets) {
        if (dets.deltaY > 0) {
            gsap.to(".marque", {
                transform: "translateX(-200%)",
                ease: "none",
                duration: 2,
                repeat: -1,
            })
            gsap.to(".marque img", {
                rotate: 180,
                duration: 1,
            })
        } else {
            gsap.to(".marque", {
                transform: "translateX(0%)",
                ease: "none",
                duration: 2,
                repeat: -1,

            })
            gsap.to(".marque img", {
                rotate: 0,
                duration: 2,
            })
        }

    })
}
marqueAnimation();

let cursorScale = document.querySelectorAll(".cursor-scale");
let heroPage = document.getElementById("heroPage");
let cursorElement = document.querySelector(".cursor");
let text = document.querySelector(".hero-text");

function cursorLeave1() {
    heroPage.addEventListener("mousemove", function (e) {
        gsap.to(cursorElement, {
            duration: 1,
        })
    })
    text.addEventListener("mouseenter", function () {
        gsap.to(cursorElement, {
            opacity: 1,
        })
    })
    heroPage.addEventListener("mouseleave", function () {
        gsap.to(cursorElement, {
            opacity: 0,
        })
    })
}
cursorLeave1()


function cursor() {
    mouseX = 0;
    mouseY = 0;
    gsap.to({}, 0.016, {
        repeat: -1,
        onRepeat: function () {
            gsap.set(cursorElement, {
                css: {
                    left: mouseX,
                    top: mouseY
                }
            })
        }
    })
}
cursorLeave1()
heroPage.addEventListener("mousemove", function (e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
})
cursor()

cursorScale.forEach(link => {
    link.addEventListener("mouseleave", () => {
        cursorElement.classList.remove("grow");
    });
    link.addEventListener("mousemove", () => {
        cursorElement.classList.add("grow");
    });
});

let page4Elements;
page4Elements = document.querySelectorAll(".page4");
function breakConcerning() {
    function updateAnimation(h1) {
        const h1text = h1.textContent;
        let clutter = "";
        const splittedText = h1text.split("");
        const halfValue = Math.floor(splittedText.length / 2);

        splittedText.forEach((elem, idx) => {
            clutter += `<span class="${idx < halfValue ? 'a' : 'b'}"> ${elem}</span>`;
        });

        // Update innerHTML only once
        h1.innerHTML = clutter;

        // Apply GSAP animation for both 'a' and 'b' classes
        gsap.from(".page4 h1 span.a, .page4 h1 span.b", {
            y: window.innerHeight * 0.1,
            opacity: 0,
            duration: 0.8,
            delay: 1.5,
            stagger: 0.2,
            ease: "power2.out",
        });
    }
    page4Elements.forEach(page4 => {
        const h1 = page4.querySelector("h1");

        if (h1) {
            page4.addEventListener("mouseenter", () => updateAnimation(h1));
        }
    });

    // Debounce resize event for performance
    let resizeTimeout;
    window.addEventListener("resize", () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            page4Elements.forEach(page4 => {
                const h1 = page4.querySelector("h1");
                if (h1) updateAnimation(h1);
            });
        }, 150); // Run the resize logic after 150ms of no resize activity
    });
}

breakConcerning();

let interested = gsap.utils.toArray(".interest");
let imgWrap = document.querySelector(".img_wrapper");
let imgItem = document.querySelector(".img_placeholder img");
document.addEventListener('mousemove', inte);
function inte(e) {
    // console.log(e.clientX);
    var mouseX = e.clientX,
        mouseY = e.clientY;
    tl = gsap.timeline();
    tl.to(imgWrap, {
        duration: 1,
        x: mouseX,
        y: mouseY,
        ease: "Expo.out",
    })
}
function initAnimation() {
    interested.forEach(link => {
        link.addEventListener("mousemove", inte);
    })
}
function init() {
    initAnimation()

}
window.addEventListener("load", function () {
    init();
})

let section1 = document.querySelector("#section1");
let cursorElement1 = document.querySelector(".cursor1");
function cursor1() {
    mouseX = 0;
    mouseY = 0;
    gsap.to({}, 0.016, {
        repeat: -1,
        onRepeat: function () {
            gsap.set(cursorElement1, {
                css: {
                    left: mouseX,
                    top: mouseY
                }
            })
        }
    })
}
// cursorLeave1()
section1.addEventListener("mousemove", function (e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
})
cursor1()