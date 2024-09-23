window.addEventListener('scroll', function() {
    const elements = document.querySelectorAll('.fade-in');
    const windowHeight = window.innerHeight;

    elements.forEach(element => {
        const position = element.getBoundingClientRect().top;

        if (position < windowHeight - 100) {
            element.classList.add('show');
        }
    });
});
