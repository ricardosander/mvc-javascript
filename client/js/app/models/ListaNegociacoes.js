class ListaNegociacoes {

    constructor() {
        this._negociacoes = [];
    }

    adicionar(negociacao) {
        this._negociacoes.push(negociacao);
    }

    esvaziar() {
        this._negociacoes = [];
    }

    get negociacoes() {
        return [].concat(this._negociacoes);
    }

    get volumeTotal() {
        console.log(this.negociacoes);
        return this.negociacoes.reduce((total, n) => total + n.volume, 0.0);
    }
}