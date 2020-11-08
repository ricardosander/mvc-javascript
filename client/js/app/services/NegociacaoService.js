class NegociacaoService {

    constructor() {
        this._httpService = new HttpService();
    }

    adicionar(negociacao) {
        return this._httpService.post('/negociacoes', negociacao)
            .then(negociacao => negociacao)
            .catch(erro => {
                console.log(`Houve um erro ao enviar uma nova negociação para cadastro: ${erro}`);
                throw new Error('Não foi possível salvar a nova negociação.');
            });
    }

    importarNegociacoesDaSemana() {

        console.log("Importando negociações...");

        return this._httpService.get('/negociacoes/semana')
            .then(negociacoes => {
                return negociacoes.map(negociacao => new Negociacao(new Date(negociacao.data), negociacao.quantidade, negociacao.valor));
            })
            .catch(erro => {
                console.log(`Houve um erro ao carregar as negociações: ${erro}`);
                throw new Error('Não foi possível importar as negociações.');
            });
    }

    importarNegociacoesDaSemanaAnterior() {

        console.log("Importando negociações da semana anterior...");

        return this._httpService.get('/negociacoes/anterior')
            .then(negociacoes => {
                return negociacoes.map(negociacao => new Negociacao(new Date(negociacao.data), negociacao.quantidade, negociacao.valor));
            })
            .catch(erro => {
                console.log(`Houve um erro ao carregar as negociações da semana anterior: ${erro}`);
                throw new Error('Não foi possível importar as negociações da semana anterior.');
            });
    }

    importarNegociacoesDaSemanaRetrasada() {

        console.log("Importando negociações da semana retrasada...");

        return this._httpService.get('/negociacoes/retrasada')
            .then(negociacoes => {
                return negociacoes.map(negociacao => new Negociacao(new Date(negociacao.data), negociacao.quantidade, negociacao.valor));
            })
            .catch(erro => {
                console.log(`Houve um erro ao carregar as negociações da semana retrasada: ${erro}`);
                throw new Error('Não foi possível importar as negociações retrasada.');
            });
    }
}