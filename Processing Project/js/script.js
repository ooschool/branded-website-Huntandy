// // Get a reference to the <a> tag and the target <div>
// const scrollLink = document.getElementById('about');
// const targetDiv = document.getElementById('bout-me');

// // Add a click event listener to the <a> tag
// scrollLink.addEventListener('click', function (event) {
//     event.preventDefault(); // Prevent the default behavior of the link (e.g., navigating to a new page)

//     // Scroll to the target <div>
//     targetDiv.scrollIntoView({
//         behavior: 'smooth', // You can change this to 'auto' for instant scrolling
//         block: 'start',     // Scroll to the top of the target div
//     });
// });

// Get references to all the elements with the class "scroll-target"
const scrollTargets = document.querySelectorAll('.scroll-target');

// Add a click event listener to each of the links
document.querySelectorAll('a[data-target]').forEach(function (link) {
    link.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent the default behavior of the link (e.g., navigating to a new page)

        // Get the target div ID from the data-target attribute of the clicked link
        const targetDivId = link.getAttribute('data-target');
        const targetDiv = document.getElementById(targetDivId);

        // Scroll to the target <div>
        targetDiv.scrollIntoView({
            behavior: 'smooth', // You can change this to 'auto' for instant scrolling
            block: 'start',     // Scroll to the top of the target div
        });
    });
});
// //----------------------------------------------------------
<<<<<<< Updated upstream:Processing Project/script.js
// function setHeightInPixels(selector, vhValue) {
//     const element = document.querySelector(selector);
//     const viewportHeight = window.innerHeight;
//     const heightInPixels = (viewportHeight * vhValue) / 100;
//     element.style.height = heightInPixels + 'px';
// }

// // Usage example
// const vhValue = 100; // Change this value to the desired vh value
// setHeightInPixels('header', vhValue);
//------------------------------------------------------------
function setSecondInnerHeight() {
    const outerElement = document.querySelector('header');
    const firstInnerElement = document.querySelector('header nav');
    const secondInnerElement = document.querySelector('header .banner');


    const outerHeight = outerElement.offsetHeight;
    const firstInnerHeight = firstInnerElement.offsetHeight;
    const secondInnerHeight = outerHeight - firstInnerHeight;
    // Set the height of the second inner element
    secondInnerElement.style.height = secondInnerHeight + 'px';
}

// Call the function to set the second inner element's height initially
setSecondInnerHeight();

// If the heights change dynamically (due to content or window resize), call the function again
window.addEventListener('resize', setSecondInnerHeight);
// Or if the heights change due to other actions, call setSecondInnerHeight() accordingly
//-----------------------------------------------------------------------------------
const section = document.querySelector('.main'); // Get the section element
const header = document.querySelector('header'); // Get the header element

// Assigning the height of the header to the section
section.style.height = header.style.height;
// alert(section.style.height);
=======
let scrollTop = document.querySelector('.scroll-top');

function toggleScrollTop() {
  if (scrollTop) {
    window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
  }
}
scrollTop.addEventListener('click', (e) => {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

window.addEventListener('load', toggleScrollTop);
document.addEventListener('scroll', toggleScrollTop);
>>>>>>> Stashed changes:Processing Project/js/script.js
