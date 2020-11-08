class ListaNegociacoes {

    constructor() {
        this._negociacoes = [];
        this._ordernadoPor = null;
    }

    adicionar(negociacao) {
        this._negociacoes.push(negociacao);
    }

    esvaziar() {
        this._negociacoes = [];
    }

    ordenar(coluna) {
        let regra = (a, b) =>  a[coluna] - b[coluna];
        if (this._ordernadoPor == coluna) {
            return this._negociacoes.reverse(regra);
        }
        this._ordernadoPor = coluna;
        this._negociacoes.sort(regra);
    }

    get negociacoes() {
        return [].concat(this._negociacoes);
    }

    get volumeTotal() {
        console.log(this.negociacoes);
        return this.negociacoes.reduce((total, n) => total + n.volume, 0.0);
    }
}