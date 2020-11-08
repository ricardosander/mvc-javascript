class NegociacaoService {

    adicionar(negociacao) {

        return new Promise((resolve, reject) => {

            console.log('Enviando negociação para o servidor...');

            let xhr = new XMLHttpRequest();
            xhr.open("POST", "/negociacoes", true);
            xhr.setRequestHeader("Content-type", "application/json");

            xhr.onreadystatechange = () => {

                if (xhr.readyState == 4) {

                    if (xhr.status != 200) {
                        console.log(`Houve um erro ao enviar uma nova negociação para cadastro: ${xhr.status} - ${xhr.responseText}`);
                        return reject('Não foi possível salvar a nova negociação.');
                    }

                    resolve(negociacao);
                }

            }

            xhr.send(JSON.stringify(negociacao));
        });
    }

    importar() {

        return new Promise((resolve, reject) => {
            console.log("Importando negociações...");

            let xhr = new XMLHttpRequest();
            xhr.open("GET", "/negociacoes/semana");

            xhr.onreadystatechange = () => {

                if (xhr.readyState == 4) {

                    if (xhr.status != 200) {
                        console.log(`Houve um erro ao carregar as negociações: ${xhr.status} - ${xhr.responseText}`);
                        return reject('Não foi possível importar as negociações.');
                    }

                    resolve(JSON.parse(xhr.responseText));
                }
            }

            xhr.send();
        });
    }
}