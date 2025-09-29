import data from "./data.json" with { type: "json" };

// Element Declarations
const primaryNavToggle = document.getElementById("primary__nav-toggle");
const closeBtn = document.getElementById("close__btn");
const header = document.querySelector("header");
const navList = document.querySelector(".nav__list");
const navLinks = document.querySelectorAll("header .nav__list a");
const backToTopButton = document.getElementById("back-to-top-button");
const cardsContainer = document.querySelector(".projects .section-content");
const footer = document.querySelector("footer");
const main = document.querySelector("main");


// Loop through the projects array and create a card for each project
function createCards() {   
    let cards = "";
    data.projects.map(item => {
        const { id, title, description, img, codeLink, live } = item;
        cards += `
        <article class="card">
            <div class="card__img-wrapper">
                <img class="card__img" src=${img} alt=${title} />
            </div>
            <div class="card__content">
                <span class="heading">${title}</span>
                <p class="text">${description}</p>
            </div>
            <div class="card__actions">
                <a class="card__btn" href=${codeLink} target="_blank">Code</a>
                <a class="card__btn" href=${live} target="_blank">Live</a>
            </div>
        </article>
        `
        cardsContainer.innerHTML = cards;
    });
}
createCards();

// Apply glass morphism effect and fix the navbar to the center of the page after the header section is scrolled past
const headerHeight = header.clientHeight;

window.addEventListener("scroll", () => {
    if (document.body.scrollTop > headerHeight || document.documentElement.scrollTop > headerHeight) {
        navList.classList.add("glass");
        navList.classList.add("fixed");
        backToTopButton.classList.add("reveal")
    } else {
        navList.classList.remove("glass");
        navList.classList.remove("fixed");
        backToTopButton.classList.remove("reveal")
    }
});

window.addEventListener("scroll", () => {
    if (document.body.scrollTop > 130 || document.documentElement.scrollTop > 130) {
        navList.classList.add("reveal");
    } else {
        navList.classList.remove("reveal");
    }
});

// Remove tab focus for not visible links on mobile
if (document.body.clientWidth <= 738) {
    navList.classList.add("glass");
    closeBtn.tabIndex = -1;
    navLinks.forEach(link => {
        link.tabIndex = -1;
    });
}

// Remove tab focus for navbar links when they are not visible and the page is resized
window.addEventListener("resize", () => {
    if (document.body.clientWidth <= 738) {
        navList.classList.add("glass");
        closeBtn.tabIndex = -1;
        navLinks.forEach(link => {
            link.tabIndex = -1;
        });
    }   
});

// Make the footer visible when any of its element is on focus
const focusableElements = footer.querySelectorAll('a');
focusableElements.forEach(el => {
    el.addEventListener("focus", () => {
        window.scrollTo(0, document.body.scrollHeight)
    })
});

// To make the footer visible after making it display: absolute
main.style.marginBottom = `${footer.clientHeight - 10}px`;

// Toggle the navigation menu when the hamburger icon is clicked
primaryNavToggle.addEventListener("click", () => {
    primaryNavToggle.classList.add("active");
    navList.classList.add("active");
    closeBtn.tabIndex = 1;
    navLinks.forEach(link => {
        link.tabIndex = 0;
    });
});

closeBtn.addEventListener("click", () => {
    primaryNavToggle.classList.remove("active");
    navList.classList.remove("active");
    closeBtn.tabIndex = -1;
    navLinks.forEach(link => {
        link.tabIndex = -1;
    });
})

// Back to top button with smooth scroll effect
backToTopButton.addEventListener("click", () => {
    document.documentElement.scrollTo({
        top: 0,
        behavior: "smooth"
    })
});

// Add a smooth scroll effect to all anchor links
// Remove tab focus for navbar links when not active and on mobile
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        if (document.body.clientWidth <= 736) {
            navList.classList.remove("active");
            primaryNavToggle.classList.remove("active");
            closeBtn.tabIndex = 0;
        }
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

//Email validation
const emailInput = document.getElementById("email");
const emailPattern = /^[a-zA-Z0-9._+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/;
const nameInput = document.getElementById("full-name");
const nameConfirm = document.querySelector(".name-error-msg");
const nameLength = nameInput.getAttribute("minlength");
const emailConfirm = document.querySelector(".email-error-msg");
const msgConfirm = document.querySelector(".message-error-msg");
const msgInput = document.getElementById("message");
const msgLength = msgInput.getAttribute("minlength");

nameInput.addEventListener("change", (e) => {
    e.preventDefault();
    if (nameInput.value.length < nameLength) {
        nameConfirm.textContent = `Name must be at least ${nameLength} characters`;
    } else {
        nameConfirm.textContent = "";
    }
})

emailInput.addEventListener("input", (e) => {
    e.preventDefault();    
    if (emailConfirm.textContent !== "" && !emailInput.value.match(emailPattern)) {
        emailConfirm.textContent = "example@email.com";
        emailConfirm.style.color = "currentColor";
    }
    if (emailInput.value.match(emailPattern)) {
        emailConfirm.textContent = "";
    }
    if (emailInput.value === "") {
        emailInput.style.outlineColor = "transparent";        
    }
});

msgInput.addEventListener("change", (e) => {
    e.preventDefault();
    if (msgInput.value.length < msgLength) {
        msgConfirm.textContent = `Message must be at least ${msgLength} characters`;
    } else {
        msgConfirm.textContent = "";
    }
})

emailInput.addEventListener("change", () => {
    emailConfirm.style.color = "var(--clr-error)";
    if (emailInput.value === "") {
        emailConfirm.textContent = "Please input your email";
    } else if (!emailInput.value.match(emailPattern)) {
        emailConfirm.textContent = "Please enter a valid email";
    } else {
        emailConfirm.textContent = "";
    }
})

// Form submission using emailjs and showing feedback in a modal
const emailModal = document.querySelector("#email-modal");

const emailFeedback = (msg) => {
    emailModal.innerHTML = msg
    emailModal.classList.add("showModal");
    setTimeout(() => {
    emailModal.classList.remove("showModal");        
    }, 8000);
}

const form = document.getElementById('contact-form');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    emailjs.sendForm('service_lz408cd', 'template_np1qsoh', this)
        .then(() => {
            emailFeedback('Email sent successfully!');
            form.reset();
        }, (error) => {
            emailFeedback('Failed to send email. Please try again later.');
            console.error('EmailJS Error:', error);            
        });
});


// navigator.registerProtocolHandler('mailto', 'https://mail.google.com/mail/?extsrc=mailto&url=%s', 'Gmail')

// Theme toggler
const toggleBtn = document.querySelector(".switch");
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");


// Get the previous theme from localStorage 
const currentTheme = localStorage.getItem("theme");

// Set Theme Function
const setTheme = (theme) => {
    if (theme == "dark-theme") {
        document.body.setAttribute("data-theme", "dark-theme");
        toggleBtn.firstElementChild.checked = true;
    } else if (theme == "light-theme") {
        document.body.setAttribute("data-theme", "light-theme");
        toggleBtn.firstElementChild.checked = false;
    }
    let newTheme = document.body.dataset.theme;
    localStorage.setItem("theme", newTheme);
};
setTheme(currentTheme);

// Click toggle button to switch themes manually
toggleBtn.addEventListener("click", function (e) {
    const checked = e.currentTarget.firstElementChild.checked;

    if (checked) {
        setTheme("dark-theme")
    }
    else {
        setTheme("light-theme")
    }
});

// Toggle dark mode based on user browser preference
window.addEventListener("load", () => {
    prefersDarkScheme.matches === true ? setTheme("dark-theme") : setTheme("light-theme");
});


// Follow cursor with a div
const follower = document.getElementById('follower-element');

let mouseX = 0;
let mouseY = 0;

function updateCursorPosition(event) {
    mouseX = event.clientX;
    mouseY = event.clientY;
}

function animateCursor() {
    follower.style.left = (mouseX + window.scrollX) + 'px';
    follower.style.top = (mouseY + window.scrollY) + 'px';
    requestAnimationFrame(animateCursor);
}

document.addEventListener('mousemove', updateCursorPosition);
requestAnimationFrame(animateCursor);

/*  -- END OF FILE -- */
