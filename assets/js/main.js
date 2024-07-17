/*=============== SHOW MENU ===============*/

const navMenu = document.getElementById("nav--menu"),
    navToggle = document.getElementById("nav--toggle"),
    navClose = document.getElementById("nav--close")

/* Menu show */
if (navToggle) {
    navToggle.addEventListener("click", () => {
        navMenu.classList.add("show-menu")
    })
    //     The code first checks if the navToggle element exists.
    // If it exists, it adds an event listener for the click event.
}

// Menu hidden
if (navClose) {
    navClose.addEventListener("click", () => {
        navMenu.classList.remove("show-menu")
    })
}

// // We have also an option to use attribute Method like below 
// if(navToggle){
//     navToggle.addEventListener("click", ()=>{
//         const currentClass = navMenu.getAttribute("class")
//         navMenu.setAttribute("class"," show-menu")
//     })
// }



/*=============== REMOVE MENU MOBILE ===============*/

const navLink = document.querySelectorAll(".nav__link")

const linkAction = () => {
    const navMenu = document.getElementById("nav--menu")
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove("show-menu")
}


navLink.forEach(n => n.addEventListener("click", linkAction))
// Purpose: Adds an event listener to each element in the navLink NodeList.



/*=============== Self:ADD BLUR HEADER ===============*/
document.addEventListener("scroll", () => {
    const header = document.getElementById("header");

    if (window.scrollY > 50) { // Checks if the vertical scroll position (window.scrollY) is greater than 50 pixels.

        header.classList.add("blur__header")
    }
    else {
        header.classList.remove("blur__header")
    }
})


/*=============== EMAIL JS ===============*/

const contactForm = document.getElementById("contact--form"),
    contactMessage = document.getElementById("contact--message");

const sendEmail = (e) => {
    e.preventDefault()

    // serviceID - templateID - #form - publicKey
    emailjs.sendForm('serviceID', 'templateID ', '#form-id', 'publicKey')

        .then(() => {
            // Show sent message
            contactMessage.textContent = "Message sent successfully ✅";

            setTimeout(() => {
                contactMessage.textContent = "";
            }, 5000);

            // Clear input fields
            contactForm.reset();
        })
        .catch((error) => {
            // Show error message
            contactMessage.textContent = "Message not sent (service error)❌";
            // console.error('EmailJS error:', error)
            // contactMessage.textContent = error;

            setTimeout(() => {
                contactMessage.textContent = "";
            }, 5000);
            contactForm.reset();
        });
};

contactForm.addEventListener('submit', sendEmail)



/* ============ Range Input ===========*/
const hueRange = document.getElementById('hue--range');

hueRange.addEventListener('input', (event) => {
    const hueValue = event.target.value;
    document.documentElement.style.setProperty('--hue', hueValue);
    // console.log(hueValue)
});


/* ===========SHOW SCOLL UP=========== */

const scrollUp = () => {
    const scroll_Up = document.getElementById("scroll--up");

    if (window.scrollY >= 350) { // Checks if the vertical scroll position (window.scrollY) is greater than 350 pixels.
        scroll_Up.classList.add("show__scroll")
    }
    else {
        scroll_Up.classList.remove("show__scroll")
    }
}

window.addEventListener("scroll", scrollUp)

/* ============ Range Input ===========*/


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll("section[id]");

const scrollActive = () => {
    
    const scrollDown = window.scrollY;
    // console.log(scrollDown);

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 55,
            sectionId = current.getAttribute('id'),
            sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')
            // console.log(current.offsetHeight);
            // console.log(current.offsetTop);
            
            


        if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
            sectionsClass.classList.add('active-link')
        } else {
            sectionsClass.classList.remove('active-link')
        }

    })
}

window.addEventListener('scroll', scrollActive);


/*=============== SCROLL REVEAL ANIMATION ===============*/

const sr = ScrollReveal({
    origin : "top",
    distance: "60px",
    duration: "2500",
    delay: 400,
    // reset: true // Animation repeat

})


sr.reveal(".home__data, .experience, .skills, .contact__container")
sr.reveal(".home__img", {delay: 600})
sr.reveal(".home__img", {delay: 600})
sr.reveal(".hue--control", {delay: 700}) //self
sr.reveal(".home__scroll", {delay: 800})

sr.reveal(".work__card, .services__card", {interval: 100})

// sr.reveal(".about__content", {origin: "right"}) //not give to work mkae hurle in header and home
// sr.reveal(".about__img", {origin: "left"})
sr.reveal(".about__content", {origin: "top"})
sr.reveal(".about__img", {origin: "bottom"})



























