// Function to update the loader bar
function updateLoaderBar() {
    const scrollPosition = window.scrollY;
    const documentHeight = document.documentElement.scrollHeight;
    const windowHeight = window.innerHeight;
    const contentHeight = Math.min(documentHeight, windowHeight);
    const maxScroll = documentHeight - windowHeight;
    let scrollProgress;

    if (maxScroll > 0) {
        scrollProgress = (scrollPosition / maxScroll) * 100;
    } else {
        scrollProgress = 100; // Set to 100% if there is no scrolling possible
    }

    // Update the loader bar width based on scroll progress
    const loaderBar = document.getElementById('loader-bar');
    loaderBar.style.width = scrollProgress + '%';
}

// Call the function on page load
window.addEventListener('load', updateLoaderBar);

// Call the function on the scroll event
window.addEventListener('scroll', updateLoaderBar);