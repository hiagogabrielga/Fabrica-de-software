let selects = document.querySelectorAll('.select');

selects.forEach(select => {
    let selectedValue = select.querySelector('#selected-value'),
        optionsViewButton = select.querySelector('#options-view-button'),
        inputOptions = select.querySelectorAll('.option input');

    optionsViewButton.addEventListener('click', () => {
        // Fecha todos os menus exceto o atual
        selects.forEach(otherSelect => {
            if (otherSelect !== select) {
                let otherButton = otherSelect.querySelector('#options-view-button');
                otherButton.checked = false;  // Fecha o menu
            }
        });
    });

    inputOptions.forEach(input => {
        input.addEventListener('click', event => {
            selectedValue.textContent = input.dataset.label;

            const isMouseOrTouch = event.pointerType == "mouse" || event.pointerType == "touch";

            if (isMouseOrTouch) {
                optionsViewButton.click();  // Fecha o menu atual
            }
        });
    });
});
