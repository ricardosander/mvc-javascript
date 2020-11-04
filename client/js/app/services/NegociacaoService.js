class NegociacaoService {

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