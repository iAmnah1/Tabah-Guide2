document.addEventListener('DOMContentLoaded', function() {
    const categoryCards = document.querySelectorAll('.category-card');
    const placesContainers = document.querySelectorAll('.places');

    // Hide all places initially
    placesContainers.forEach(container => {
        container.classList.remove('active');
    });

    // Add click event listeners to category cards
    categoryCards.forEach(card => {
        card.addEventListener('click', function() {
            // Remove active class from all places containers
            placesContainers.forEach(container => {
                container.classList.remove('active');
            });

            // Remove active class from all category cards
            categoryCards.forEach(c => {
                c.style.background = 'white';
            });

            // Add active class to clicked category
            const category = this.dataset.category;
            const targetPlaces = document.querySelector(`.places.${category}`);
            targetPlaces.classList.add('active');

            // Highlight selected category
            this.style.background = '#f0f4ff';

            // Smooth scroll to places
            targetPlaces.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    });

    // Add hover effects
    categoryCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            if (!this.classList.contains('active')) {
                this.style.background = '#f8f9fa';
            }
        });

        card.addEventListener('mouseleave', function() {
            if (!this.classList.contains('active')) {
                this.style.background = 'white';
            }
        });
    });
});
