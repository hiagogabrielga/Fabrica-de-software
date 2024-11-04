const fileInput = document.getElementById('file-upload');
const imagePreviewArea = document.querySelector('.image-preview-area');
const errorMessage = document.querySelector('.error-message');

let imagesArray = [];

// Função para atualizar a área de visualização com as imagens carregadas
function updateImagePreviews() {
    imagePreviewArea.innerHTML = ''; // Limpa as imagens anteriores

    imagesArray.forEach((file, index) => {
        const reader = new FileReader();

        reader.onload = function (event) {
            const imgElement = document.createElement('img');
            imgElement.src = event.target.result;
            imgElement.classList.add('image-preview');
            imagePreviewArea.appendChild(imgElement);
        };

        reader.readAsDataURL(file);
    });
}

// Função para verificar se o número mínimo de imagens foi atendido
function validateImageCount() {
    if (imagesArray.length < 5) {
        errorMessage.style.display = 'block';
    } else {
        errorMessage.style.display = 'none';
        // Aqui você pode habilitar o botão de submit ou realizar outra ação
    }
}

// Evento ao selecionar a imagem
fileInput.addEventListener('change', function () {
    const files = fileInput.files;

    if (files.length > 0) {
        // Adiciona todas as imagens selecionadas ao array
        for (let i = 0; i < files.length; i++) {
            imagesArray.push(files[i]);
        }

        updateImagePreviews(); // Atualiza a área de visualização
        validateImageCount(); // Verifica o número de imagens
    }
});