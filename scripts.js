// Check if an element is in the viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Add "in-view" class when elements are visible
function handleScroll() {
    const poppingTitle = document.querySelector('.popping-title');
    if (isInViewport(poppingTitle)) {
        poppingTitle.classList.add('in-view');
    }
}

// Attach event listener for scroll
window.addEventListener('scroll', handleScroll);
window.addEventListener('load', handleScroll); // Trigger check on page load
