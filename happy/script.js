document.addEventListener('DOMContentLoaded', () => {
    // Function to create snowflakes
    function createSnowflakes() {
        const numSnowflakes = 100; // Number of snowflakes
        const container = document.querySelector('.snowflakes');

        for (let i = 0; i < numSnowflakes; i++) {
            // Create a snowflake element
            const snowflake = document.createElement('div');
            snowflake.className = 'snowflake';
            
            // Randomize size, position, and animation duration
            snowflake.style.width = `${Math.random() * 10 + 5}px`;
            snowflake.style.height = snowflake.style.width;
            snowflake.style.left = `${Math.random() * 100}vw`;
            snowflake.style.animationDuration = `${Math.random() * 5 + 5}s`;
            snowflake.style.animationDelay = `${Math.random() * 5}s`;

            // Append snowflake to container
            container.appendChild(snowflake);
        }
    }

    // Call the function to create snowflakes
    createSnowflakes();

    // Get modal elements
    const modal = document.getElementById('modal');
    const thankYouModal = document.getElementById('thank-you-modal');
    const closeModal = document.getElementById('close-modal');
    const closeThankYouModal = document.getElementById('close-thank-you-modal');
    const getMeBtn = document.getElementById('get-me-btn');
    const optionButtons = document.querySelectorAll('.option-btn');

    // Show modal when "Now, Get Me" button is clicked
    getMeBtn.addEventListener('click', () => {
        modal.style.display = 'block';
    });

    // Close modal when close button is clicked
    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Close thank you modal when close button is clicked
    closeThankYouModal.addEventListener('click', () => {
        thankYouModal.style.display = 'none';
    });

    // Close modals when clicking outside of modal content
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
        if (event.target === thankYouModal) {
            thankYouModal.style.display = 'none';
        }
    });

    // Show thank you modal when any option is clicked
    optionButtons.forEach(button => {        button.addEventListener('click', () => {
        modal.style.display = 'none';
        thankYouModal.style.display = 'block';
    });
});
});

       
