/*==================================================
            HAPPY BIRTHDAY WEBSITE
==================================================*/

"use strict";

/*==================================================
            ELEMENTS
==================================================*/

const loadingScreen = document.getElementById("loadingScreen");

const passwordPage = document.getElementById("passwordPage");

const website = document.getElementById("website");

const unlockBtn = document.getElementById("unlockBtn");

const passwordInput = document.getElementById("passwordInput");

const wrongPassword = document.getElementById("wrongPassword");

const playMusicBtn = document.getElementById("playMusic");

const birthdaySong = document.getElementById("birthdaySong");

const openLetterBtn = document.getElementById("openLetter");

const heartsContainer = document.getElementById("heartsContainer");

/*==================================================
            LOADING SCREEN
==================================================*/

window.addEventListener("load", () => {

setTimeout(() => {

loadingScreen.style.opacity = "0";

loadingScreen.style.pointerEvents = "none";

setTimeout(() => {

loadingScreen.style.display = "none";

},1000);

},1800);

});

/*==================================================
            PASSWORD
==================================================*/

const PASSWORD = "882006";

function unlockWebsite(){

const value = passwordInput.value.trim();

if(value === PASSWORD){

passwordPage.style.opacity = "0";

passwordPage.style.pointerEvents = "none";

setTimeout(()=>{

passwordPage.style.display = "none";

website.style.display = "block";

window.scrollTo(0,0);

birthdaySong.volume = 0.5;

birthdaySong.play().catch(()=>{});

},700);

}

else{

wrongPassword.innerHTML = "❌ Wrong Password";

passwordInput.value = "";

passwordInput.focus();

passwordPage.animate([

{transform:"translateX(-8px)"},

{transform:"translateX(8px)"},

{transform:"translateX(-8px)"},

{transform:"translateX(8px)"},

{transform:"translateX(0)"}

],{

duration:350

});

}

}

unlockBtn.addEventListener("click",unlockWebsite);

passwordInput.addEventListener("keydown",(e)=>{

if(e.key==="Enter"){

unlockWebsite();

}

});

/*==================================================
            MUSIC BUTTON
==================================================*/

let playing = false;

playMusicBtn.addEventListener("click",()=>{

if(!playing){

birthdaySong.play();

playMusicBtn.innerHTML =
'<i class="fa-solid fa-pause"></i> Pause Music';

playing = true;

}

else{

birthdaySong.pause();

playMusicBtn.innerHTML =
'<i class="fa-solid fa-music"></i> Play Our Song';

playing = false;

}

});

/*==================================================
            OPEN LETTER
==================================================*/

openLetterBtn.addEventListener("click",()=>{

document.getElementById("letter").scrollIntoView({

behavior:"smooth"

});

});

/*==================================================
            FLOATING HEARTS
==================================================*/

const heartIcons=[

"🤍",

"🤍",

"💕",

"💗",

"🤍",

"🤍"

];

function createHeart(){

const heart=document.createElement("span");

heart.className="heart";

heart.innerHTML=

heartIcons[Math.floor(Math.random()*heartIcons.length)];

heart.style.left=Math.random()*100+"vw";

heart.style.fontSize=

15+Math.random()*35+"px";

heart.style.animationDuration=

6+Math.random()*8+"s";

heart.style.opacity=

Math.random();

heartsContainer.appendChild(heart);

setTimeout(()=>{

heart.remove();

},14000);

}

setInterval(createHeart,350);

/*==================================================
            PAGE TITLE ANIMATION
==================================================*/

const titles=document.querySelectorAll("h1,h2");

titles.forEach(title=>{

title.animate([

{

opacity:0,

transform:"translateY(30px)"

},

{

opacity:1,

transform:"translateY(0)"

}

],{

duration:1200,

fill:"forwards"

});

});

/*==================================================
            END PART 1
==================================================*/

/*==================================================
            SCROLL REVEAL
==================================================*/

const revealElements = document.querySelectorAll(
"section,.loveCard,.photo,.glass"
);

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{
threshold:0.15
});

revealElements.forEach(el=>{

el.classList.add("fadeIn");

observer.observe(el);

});

/*==================================================
            IMAGE LIGHTBOX
==================================================*/

const photos = document.querySelectorAll(".photo img");

const lightbox = document.createElement("div");

lightbox.id = "lightbox";

lightbox.innerHTML = `

<div id="lightboxOverlay">

<img id="lightboxImage">

</div>

`;

document.body.appendChild(lightbox);

const overlay = document.getElementById("lightboxOverlay");

const lightboxImage = document.getElementById("lightboxImage");

photos.forEach(photo=>{

photo.addEventListener("click",()=>{

overlay.style.display="flex";

lightboxImage.src=photo.src;

document.body.style.overflow="hidden";

});

});

overlay.addEventListener("click",()=>{

overlay.style.display="none";

document.body.style.overflow="auto";

});

/*==================================================
            CURSOR HEARTS
==================================================*/

document.addEventListener("mousemove",(e)=>{

if(Math.random()>0.92){

const heart=document.createElement("div");

heart.innerHTML="❤";

heart.style.position="fixed";

heart.style.left=e.clientX+"px";

heart.style.top=e.clientY+"px";

heart.style.pointerEvents="none";

heart.style.fontSize=

10+Math.random()*18+"px";

heart.style.color="#ff4f8b";

heart.style.zIndex="9999";

heart.style.transition="1.5s linear";

document.body.appendChild(heart);

setTimeout(()=>{

heart.style.transform="translateY(-80px) scale(2)";

heart.style.opacity="0";

},20);

setTimeout(()=>{

heart.remove();

},1600);

}

});

/*==================================================
            CONFETTI
==================================================*/

function launchConfetti(){

for(let i=0;i<120;i++){

const piece=document.createElement("div");

piece.style.position="fixed";

piece.style.left=Math.random()*100+"vw";

piece.style.top="-20px";

piece.style.width="8px";

piece.style.height="16px";

piece.style.borderRadius="2px";

piece.style.background=

`hsl(${Math.random()*360},100%,70%)`;

piece.style.zIndex="99999";

piece.style.transition="4s linear";

document.body.appendChild(piece);

setTimeout(()=>{

piece.style.transform=

`translateY(${window.innerHeight+200}px)
rotate(${Math.random()*720}deg)`;

piece.style.left=Math.random()*100+"vw";

},50);

setTimeout(()=>{

piece.remove();

},4200);

}

}

/*==================================================
        RUN CONFETTI AFTER UNLOCK
==================================================*/

const originalUnlock = unlockWebsite;

unlockWebsite = function(){

originalUnlock();

if(passwordInput.value.trim()==="882006"){

setTimeout(()=>{

launchConfetti();

},900);

}

};

/*==================================================
            LOVE CARD EFFECT
==================================================*/

const cards=document.querySelectorAll(".loveCard");

cards.forEach(card=>{

card.addEventListener("mousemove",(e)=>{

const rect=card.getBoundingClientRect();

const x=e.clientX-rect.left;

const y=e.clientY-rect.top;

card.style.background=

`radial-gradient(circle at ${x}px ${y}px,
rgba(255,79,139,.35),
rgba(255,255,255,.08))`;

});

card.addEventListener("mouseleave",()=>{

card.style.background="rgba(255,255,255,.08)";

});

});

/*==================================================
            PARALLAX HERO
==================================================*/

window.addEventListener("scroll",()=>{

const hero=document.querySelector(".hero");

hero.style.backgroundPositionY=

window.scrollY*0.3+"px";

});

/*==================================================
            PHOTO HOVER SOUND
==================================================*/

photos.forEach(photo=>{

photo.addEventListener("mouseenter",()=>{

photo.animate([

{

transform:"scale(1)"

},

{

transform:"scale(1.05)"

}

],{

duration:300,

fill:"forwards"

});

});

});

/*==================================================
            TYPEWRITER EFFECT
==================================================*/

const letterParagraphs = document.querySelectorAll(".letter p");

letterParagraphs.forEach(p => {

    const text = p.innerHTML;

    p.innerHTML = "";

    p.dataset.text = text;

});

let letterStarted = false;

function startLetterAnimation(){

    if(letterStarted) return;

    letterStarted = true;

    let delay = 0;

    letterParagraphs.forEach(paragraph=>{

        setTimeout(()=>{

            typeParagraph(paragraph);

        },delay);

        delay += 1500;

    });

}

function typeParagraph(element){

    const text = element.dataset.text;

    let i = 0;

    const interval = setInterval(()=>{

        element.innerHTML = text.slice(0,i);

        i++;

        if(i > text.length){

            clearInterval(interval);

        }

    },18);

}

const letterSection = document.getElementById("letter");

const letterObserver = new IntersectionObserver(entries=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            startLetterAnimation();

        }

    });

},{threshold:.4});

letterObserver.observe(letterSection);

/*==================================================
            DAYS TOGETHER
==================================================*/

const togetherDate = new Date("2025-01-01");

const counter = document.createElement("div");

counter.id = "loveCounter";

document.body.appendChild(counter);

function updateCounter(){

    const now = new Date();

    const diff = now - togetherDate;

    const days = Math.floor(diff/1000/60/60/24);

    counter.innerHTML =

    `❤️ Together for ${days} beautiful days ❤️`;

}

updateCounter();

setInterval(updateCounter,60000);

/*==================================================
            STAR BACKGROUND
==================================================*/

for(let i=0;i<80;i++){

    const star=document.createElement("div");

    star.style.position="fixed";

    star.style.width="2px";

    star.style.height="2px";

    star.style.borderRadius="50%";

    star.style.background="white";

    star.style.left=Math.random()*100+"vw";

    star.style.top=Math.random()*100+"vh";

    star.style.opacity=Math.random();

    star.style.pointerEvents="none";

    star.style.zIndex="-2";

    star.animate([

        {opacity:.2},

        {opacity:1},

        {opacity:.2}

    ],{

        duration:1500+Math.random()*3000,

        iterations:Infinity

    });

    document.body.appendChild(star);

}

/*==================================================
            LOVE MESSAGE POPUP
==================================================*/

setTimeout(()=>{

const popup=document.createElement("div");

popup.innerHTML=`

<div id="lovePopup">

<h2>❤️</h2>

<h3>I Love You</h3>

<p>

Happy Birthday to the most amazing person
I've ever known.

</p>

<button id="closePopup">

Close ❤️

</button>

</div>

`;

document.body.appendChild(popup);

document
.getElementById("closePopup")
.onclick=()=>popup.remove();

},12000);

/*==================================================
            AUTO HIDE NAVBAR
==================================================*/

let lastScroll=0;

const nav=document.querySelector("nav");

window.addEventListener("scroll",()=>{

const current=window.pageYOffset;

if(current>lastScroll && current>200){

nav.style.transform="translateY(-100%)";

}else{

nav.style.transform="translateY(0)";

}

lastScroll=current;

});

/*==================================================
            MUSIC ENDED
==================================================*/

birthdaySong.addEventListener("ended",()=>{

playMusicBtn.innerHTML=

'<i class="fa-solid fa-rotate-right"></i> Play Again';

playing=false;

});

/*==================================================
            SMOOTH APPEAR
==================================================*/

document.querySelectorAll("button").forEach(button=>{

button.addEventListener("mouseenter",()=>{

button.animate([

{

transform:"translateY(0)"

},

{

transform:"translateY(-5px)"

}

],{

duration:250,

fill:"forwards"

});

});

});

/*==================================================
            RANDOM LOVE QUOTES
==================================================*/

const quotes=[

"You are my favorite place ❤️",

"My heart smiles because of you ❤️",

"You are my forever ❤️",

"You make every day beautiful ❤️",

"My favorite notification is yours ❤️"

];

setInterval(()=>{

const random=

quotes[Math.floor(Math.random()*quotes.length)];

console.log(random);

},10000);

/*==================================================
            END
==================================================*/

console.log(

"%c❤️ Happy Birthday ❤️",

"color:#ff4f8b;font-size:24px;font-weight:bold"

);
/*==================================================
            END PART 2
==================================================*/
