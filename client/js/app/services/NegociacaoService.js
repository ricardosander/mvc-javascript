class NegociacaoService {

    constructor() {
        this._httpService = new HttpService();
    }

    adicionar(negociacao) {

        return new Promise((resolve, reject) => {

            this._httpService.post('/negociacoes', negociacao)
                .then(negociacao => resolve(negociacao))
                .catch(erro => {
                    console.log(`Houve um erro ao enviar uma nova negociação para cadastro: ${erro}`);
                    reject('Não foi possível salvar a nova negociação.');
                });
        });
    }

    importar() {

        return new Promise((resolve, reject) => {
            
            console.log("Importando negociações...");

            this._httpService.get('/negociacoes/semana')
                .then(negociacoes => {
                    resolve(negociacoes.map(negociacao => new Negociacao(new Date(negociacao.data), negociacao.quantidade, negociacao.valor)));
                })
                .catch(erro => {
                    console.log(`Houve um erro ao carregar as negociações: ${erro}`);
                    reject('Não foi possível importar as negociações.');
                });
        });
    }
}