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