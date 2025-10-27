# Simon Gabriel - Portfolio Website

This is the code for my personal portfolio website. Here I showcase some of my recent projects and prove my worth.

## Table of contents

- [Overview](#overview)
  - [The objective](#the-objectives)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


## Overview

### The objective

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the contact form is submitted if:
  - The input field is empty
  - The email address is not formatted correctly
- Use keyboard to navigate and access elements
- Switch from light mode to dark mode 

### Screenshot

![Simon Gabriel - Portfolio Website](screenshots/Desktop-view-portfolio.jpeg)

### Links

- [Live site URL](https://simon-gabriel.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS
- Flexbox
- Javascript

### What I learned

This project stretched my knowledge of Vanilla JavaScript. I used arrays to render items to the page, and I also replaced elements on the page with JavaScript. With the use of JSON, I was able to query data. I learned how to add a back-to-top button and links for each page section to jump to any part of the page. I learn to work with modules, using import and export statements to add data to my script.
I also learned how to make my website Cross Browser Compatible with vendor prefixes. CSS Animations and Transitions came in handy. I also made the website Accessible using tabindex.

```html
<button id="back-to-top-btn"><img src="./images/icon-arrow.svg" alt="Back to top button"></button>
```
```css
#back-to-top-btn img {
  transform: rotate(180deg);
}
```
```js
backToTopBtn.addEventListener("click", () => {
  location.href = "#header";
})
```

### Continued development

I want to continue learning about Cross Browser Compatibility and Accessibility for people with disabilities, and gain more knowledge on form validation. Another major thing is Performance and testing.

### Useful resources

- [Build 15 JavaScript Projects - Vanilla JavaScript Course](https://www.youtube.com/watch?v=3PHXvlpOkf4) - This was the backbone of my entire project. John is a great teacher, he really helped me learn how to render items in an array. I really liked this pattern and will use it going forward.
- [Window sizes and scrolling](https://javascript.info/size-and-scroll-window) - This helped me know the various scroll options available and how to scroll to specific places on a page. I'd recommend it to anyone still learning this concept.


## Author

- Website - [Simon-gabriel](https://simon-gabriel.netlify.app)
- Github - [i-Strider243](https://github.com/i-Strider243)
- Frontend Mentor - [@i-Strider243](https://www.frontendmentor.io/profile/i-Strider243)
- X - [@Strider18](https://x.com/Strider18)
- LinkedIn - [@SimonGabriel](www.linkedin.com/in/gabriel-o-simon)


## Acknowledgments
I give special thanks to God Almighty for a life worth living. I acknowledge MDN Docs for their invaluable documentation on web elements. Also, I commend Geekforgeeks for their invaluable lessons and solutions to everyday coding challenges. 
