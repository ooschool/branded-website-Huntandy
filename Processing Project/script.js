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