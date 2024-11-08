
const supportButtons = document.querySelectorAll('.support-btn:not(.confirm-btn)');
const confirmButton = document.getElementById('confirmButton');
let isConfirmed = false; 


supportButtons.forEach(button => {
    button.addEventListener('click', () => {
        if (!isConfirmed) { 
            if (button.classList.contains('active')) {
                button.classList.remove('active');
            } else {
                button.classList.add('active');
            }
        }
    });
});


confirmButton.addEventListener('click', () => {
    isConfirmed = true; 
    supportButtons.forEach(button => {
        button.disabled = true;
        button.classList.add('locked'); 
    });


    const confirmationBlock = document.createElement('div');
    confirmationBlock.classList.add('non-clickable');
    confirmationBlock.textContent = 'Confirmação enviada';

    confirmButton.replaceWith(confirmationBlock);
});
