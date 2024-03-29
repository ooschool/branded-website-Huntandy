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

const currentDate = new Date();
const year = currentDate.getFullYear();

const copyrightElement = document.getElementById("copyright");
const updatedContent = copyrightElement.textContent.replace("©", `© ${year}`);
copyrightElement.textContent = updatedContent;



// //----------------------------------------------------------
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
