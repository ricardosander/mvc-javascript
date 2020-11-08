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

    importarNegociacoes() {

        return Promise.all([
            this._importarNegociacoesDaSemana(),
            this._importarNegociacoesDaSemanaAnterior(),
            this._importarNegociacoesDaSemanaRetrasada()
        ])
            .then(periodos => {
                return periodos.reduce((acumulado, periodo) => acumulado.concat(periodo), [])
                    .map(negociacao => new Negociacao(new Date(negociacao.data), negociacao.quantidade, negociacao.valor))
            })
            .catch(erro => { throw new Error(erro); });
    }

    _importarNegociacoesDaSemana() {

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

    _importarNegociacoesDaSemanaAnterior() {

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

    _importarNegociacoesDaSemanaRetrasada() {

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