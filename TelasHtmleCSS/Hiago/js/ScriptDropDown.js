let selects = document.querySelectorAll('.select');

selects.forEach(select => {
    let selectedValue = select.querySelector('#selected-value'),
        optionsViewButton = select.querySelector('#options-view-button'),
        inputOptions = select.querySelectorAll('.option input');

    inputOptions.forEach(input => {
        input.addEventListener('click', event => {
            selectedValue.textContent = input.dataset.label;

            const isMouseOrTouch = event.pointerType == "mouse" || event.pointerType == "touch";

            if (isMouseOrTouch) {
                optionsViewButton.click();
            }
        });
    });
});
