/* ===================================
   PREMIUM PORTFOLIO
   SCRIPT.JS - PART 1
=================================== */

/* ======================
   LOADER
====================== */

window.addEventListener("load", () => {
  const loader = document.getElementById("loader");

  setTimeout(() => {
    loader.style.opacity = "0";
    loader.style.visibility = "hidden";
  }, 1200);
});

/* ======================
   TYPING EFFECT
====================== */

const words = [
  "Frontend Developer",
  "Web Developer",
  "DSA Enthusiast",
  "React.js Developer",
  "Problem Solver",
];

const typing = document.getElementById("typing");

let wordIndex = 0;
let letterIndex = 0;
let deleting = false;

function typeEffect() {
  const current = words[wordIndex];

  if (!deleting) {
    typing.textContent = current.substring(0, letterIndex++);
  } else {
    typing.textContent = current.substring(0, letterIndex--);
  }

  let speed = deleting ? 60 : 100;

  if (!deleting && letterIndex === current.length + 1) {
    deleting = true;

    speed = 1500;
  }

  if (deleting && letterIndex === 0) {
    deleting = false;

    wordIndex++;

    if (wordIndex === words.length) {
      wordIndex = 0;
    }
  }

  setTimeout(typeEffect, speed);
}

typeEffect();

/* ======================
   CUSTOM CURSOR
====================== */

const cursor = document.querySelector(".cursor");

window.addEventListener("mousemove", (e) => {
  cursor.style.left = e.clientX + "px";

  cursor.style.top = e.clientY + "px";
});

document.querySelectorAll("a, button").forEach((item) => {
  item.addEventListener("mouseenter", () => {
    cursor.style.width = "45px";
    cursor.style.height = "45px";
  });

  item.addEventListener("mouseleave", () => {
    cursor.style.width = "18px";
    cursor.style.height = "18px";
  });
});

/* ======================
   SCROLL PROGRESS BAR
====================== */

const progressBar = document.getElementById("scrollBar");

window.addEventListener("scroll", () => {
  const totalHeight =
    document.documentElement.scrollHeight - window.innerHeight;

  const progress = (window.pageYOffset / totalHeight) * 100;

  progressBar.style.width = progress + "%";
});

/* ======================
   REVEAL ANIMATION
====================== */

const reveals = document.querySelectorAll(".reveal");

const revealSection = () => {
  reveals.forEach((section) => {
    const top = section.getBoundingClientRect().top;

    const trigger = window.innerHeight - 120;

    if (top < trigger) {
      section.classList.add("active");
    }
  });
};

window.addEventListener("scroll", revealSection);

revealSection();

/* ======================
   NAVBAR SHADOW
====================== */

const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    nav.style.background = "rgba(5,8,22,.82)";

    nav.style.boxShadow = "0 12px 35px rgba(0,0,0,.35)";
  } else {
    nav.style.background = "rgba(5,8,22,.45)";

    nav.style.boxShadow = "none";
  }
});

/* ======================
   SMOOTH SCROLL
====================== */

document
  .querySelectorAll('a[href^="#"]')

  .forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });

/* ======================
   HERO PARALLAX
====================== */

const heroImage = document.querySelector(".profile-card");

window.addEventListener("mousemove", (e) => {
  const x = (window.innerWidth / 2 - e.clientX) / 40;

  const y = (window.innerHeight / 2 - e.clientY) / 40;

  if (heroImage) heroImage.style.transform = `translate(${x}px,${y}px)`;
});

/* ======================
   ACTIVE NAV LINK
====================== */

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const top = section.offsetTop - 150;

    if (pageYOffset >= top) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");

    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});

/* ===================================
   PREMIUM PORTFOLIO
   SCRIPT.JS - PART 2
===================================*/

/*=========================
MOBILE MENU
=========================*/

const menu = document.getElementById("menu");
const navList = document.querySelector("nav ul");

menu.addEventListener("click", () => {

    navList.classList.toggle("show");

    if (navList.classList.contains("show")) {

        navList.style.display = "flex";
        navList.style.flexDirection = "column";
        navList.style.position = "absolute";
        navList.style.top = "80px";
        navList.style.right = "20px";
        navList.style.padding = "20px";
        navList.style.borderRadius = "20px";
        navList.style.background = "rgba(5,8,22,.95)";
        navList.style.gap = "25px";
        navList.style.backdropFilter = "blur(25px)";
    }
    else{
        navList.removeAttribute("style");
    }

});

/*=========================
PROJECT CARD 3D TILT
=========================*/

const cards = document.querySelectorAll(".project");

cards.forEach(card=>{

    card.addEventListener("mousemove",(e)=>{

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;

        const y = e.clientY - rect.top;

        const rotateY = (x-rect.width/2)/18;

        const rotateX = -(y-rect.height/2)/18;

        card.style.transform =
        `perspective(1000px)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
        scale(1.05)`;

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform =
        "perspective(1000px) rotateX(0) rotateY(0) scale(1)";

    });

});

/*=========================
SKILL CARD GLOW
=========================*/

document.querySelectorAll(".skill-card").forEach(card=>{

    card.addEventListener("mousemove",(e)=>{

        const x = e.offsetX;

        const y = e.offsetY;

        card.style.background =
        `radial-gradient(circle at ${x}px ${y}px,
        rgba(79,124,255,.35),
        rgba(255,255,255,.05))`;

    });

    card.addEventListener("mouseleave",()=>{

        card.style.background =
        "rgba(255,255,255,.05)";

    });

});

/*=========================
BUTTON RIPPLE EFFECT
=========================*/

document.querySelectorAll(".btn").forEach(btn=>{

    btn.addEventListener("click",function(e){

        const ripple = document.createElement("span");

        ripple.className="ripple";

        const rect=this.getBoundingClientRect();

        ripple.style.left=e.clientX-rect.left+"px";
        ripple.style.top=e.clientY-rect.top+"px";

        this.appendChild(ripple);

        setTimeout(()=>{

            ripple.remove();

        },700);

    });

});

/*=========================
COUNTER / LABEL REVEAL (Certifications)
=========================*/

const counters = document.querySelectorAll(".achievement h2");

let counterStarted=false;

function animateCounters(){

    if(counterStarted) return;

    const trigger =
    document.getElementById("certifications")
    .getBoundingClientRect().top;

    if(trigger < window.innerHeight-100){

        counterStarted=true;

        counters.forEach(counter=>{

            counter.style.opacity = "1";

        });

    }

}

window.addEventListener("scroll",animateCounters);

/*=========================
SCROLL TO TOP
=========================*/

const topBtn=document.createElement("div");

topBtn.innerHTML="<i class='fa-solid fa-arrow-up'></i>";

topBtn.className="topButton";

document.body.appendChild(topBtn);

Object.assign(topBtn.style,{

    position:"fixed",

    right:"25px",

    bottom:"25px",

    width:"55px",

    height:"55px",

    borderRadius:"50%",

    display:"flex",

    justifyContent:"center",

    alignItems:"center",

    cursor:"pointer",

    background:"#4f7cff",

    color:"#fff",

    fontSize:"20px",

    opacity:"0",

    transition:".4s",

    zIndex:"999"

});

window.addEventListener("scroll",()=>{

    if(window.scrollY>500){

        topBtn.style.opacity="1";

    }
    else{

        topBtn.style.opacity="0";

    }

});

topBtn.onclick=()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

};

/*=========================
FLOATING PARTICLES
=========================*/

for(let i=0;i<35;i++){

    const p=document.createElement("div");

    p.className="particle";

    document.body.appendChild(p);

    const size=Math.random()*6+3;

    Object.assign(p.style,{

        position:"fixed",

        width:size+"px",

        height:size+"px",

        borderRadius:"50%",

        background:"rgba(255,255,255,.25)",

        left:Math.random()*100+"vw",

        top:Math.random()*100+"vh",

        pointerEvents:"none",

        animation:`particleMove ${12+Math.random()*15}s linear infinite`

    });

}

/*=========================
PARTICLE KEYFRAMES
=========================*/

const style=document.createElement("style");

style.innerHTML=`

@keyframes particleMove{

0%{

transform:translateY(0);

opacity:0;

}

15%{

opacity:1;

}

100%{

transform:translateY(-120vh);

opacity:0;

}

}

.ripple{

position:absolute;

width:12px;

height:12px;

background:white;

border-radius:50%;

transform:translate(-50%,-50%);

animation:ripple .7s linear;

pointer-events:none;

}

@keyframes ripple{

0%{

opacity:.7;

transform:translate(-50%,-50%) scale(0);

}

100%{

opacity:0;

transform:translate(-50%,-50%) scale(18);

}

}

.btn{

overflow:hidden;

position:relative;

}

`;

document.head.appendChild(style);

/*=========================
PAGE VISIBILITY ANIMATION
=========================*/

document.addEventListener("visibilitychange",()=>{

    if(document.hidden){

        document.title="👋 Come Back!";

    }

    else{

        document.title="Sanya Jain | Portfolio";

    }

});

/*=========================
CONSOLE MESSAGE
=========================*/

console.log("%cDesigned with 💜 by Sanya Jain",
"color:#4f7cff;font-size:18px;font-weight:bold;");
