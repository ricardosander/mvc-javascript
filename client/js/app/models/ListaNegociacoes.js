class ListaNegociacoes {

    constructor(observador) {
        this._negociacoes = [];
        this._observador = observador;
    }

    adicionar(negociacao) {
        this._negociacoes.push(negociacao);
        this._observador(this);
    }

    esvaziar() {
        this._negociacoes = [];
        this._observador(this);
    }

    get negociacoes() {
        return [].concat(this._negociacoes);
    }

}