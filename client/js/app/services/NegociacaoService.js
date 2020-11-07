class NegociacaoService {

    adicionar(negociacao, callback) {

        console.log('Enviando negociação para o servidor...');

        let xhr = new XMLHttpRequest();
        xhr.open("POST", "/negociacoes", true);
        xhr.setRequestHeader("Content-type", "application/json");

        xhr.onreadystatechange = () => {

            if (xhr.readyState == 4) {

                if (xhr.status != 200) {
                    console.log(`Houve um erro ao enviar uma nova negociação para cadastro: ${xhr.status} = ${xhr.responseText}`);
                    callback('Não foi possível salvar a nova negociação.', null);
                    return;
                }

                callback(null);
            }

        }

        xhr.send(JSON.stringify(negociacao));

    }

    importar(callback) {
        console.log("Importando negociações...");

        let xhr = new XMLHttpRequest();
        xhr.open("GET", "/negociacoes/semana");

        xhr.onreadystatechange = () => {

            if (xhr.readyState == 4) {

                if (xhr.status != 200) {
                    console.log(`Houve um erro ao carregar as negociações: ${xhr.status} - ${xhr.responseText}`);
                    callback('Não foi possível importar as negociações.', null);
                    return;
                }

                callback(
                    null,
                    JSON.parse(xhr.responseText)
                        .map(negociacao => new Negociacao(new Date(negociacao.data), negociacao.quantidade, negociacao.valor))
                );
            }
        }

        xhr.send();
    }
}