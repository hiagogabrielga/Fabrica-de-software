//import axios from "axios";
export default function controleDadosImagem(valorImagens) {
    var valorNomeImagem;
    var valorNomesImagens;

    for (const numeroImagem in valorImagens) {
        const valorUnico = Date.now() + Math.floor(Math.random() * 1000);
        console.log(valorImagens[numeroImagem])
        const extensao = valorImagens[numeroImagem].name.split('.').pop(); // Obtém a extensão do arquivo
        const novoNomeImagem = `imagem_${valorUnico}.${extensao}`; // Cria o novo nome da imagem

        // Cria um novo objeto File com o novo nome
        const novoArquivo = new File([valorImagens[numeroImagem]], novoNomeImagem, {
            type: valorImagens[numeroImagem].type, // Mantém o tipo do arquivo
        });

        // Atualiza o objeto no array original
        valorImagens[numeroImagem] = novoArquivo;
        console.log(valorImagens)

        // Atualiza a variável valorNomeImagem com o novo nome
        valorNomeImagem = novoNomeImagem;

        if (numeroImagem == 0) {
            valorNomesImagens = `${valorNomeImagem},`
        } else if (numeroImagem < (valorImagens.length) - 1) {
            valorNomesImagens += `${valorNomeImagem},`
        } else {
            valorNomesImagens += `${valorNomeImagem}`
        }
    }
    const enviarImagensApi = async (valorImagens) => {
        const formData = new FormData();
        valorImagens.forEach((imagem) => {
            formData.append('imagens', imagem); // 'imagens' é o nome usado no backend
        });
        try {
            // Enviar os arquivos para o backend
            /*const response = await axios.post('http://localhost:8080/api/uploadImagem/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });*/

            console.log('Resposta do servidor:', response.data);
            console.log('Imagens enviadas com sucesso!');
        } catch (error) {
            console.error('Erro ao enviar as imagens:', error);
            alert('Erro ao enviar as imagens.');
        }
    }

    enviarImagensApi(valorImagens)
    return valorNomesImagens
}