document.addEventListener("DOMContentLoaded", function() {
    const elements = document.querySelectorAll('.fade-up, .fade-right, .fade-left');

    function revealOnScroll() {
        const windowHeight = window.innerHeight;
        elements.forEach(el => {
            const positionFromTop = el.getBoundingClientRect().top;
            if (positionFromTop < windowHeight - 100) {
                el.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // trigger load
});
