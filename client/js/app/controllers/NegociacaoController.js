class NegociacaoController {

    constructor() {

        let $ = document.querySelector.bind(document);//complicador de código só para exercitar progrmação funcional, contexto e bind.

        this._campoData = $('#data');
        this._campoQuantidade = $('#quantidade');
        this._campoValor = $('#valor');

        this._tabela = $('table tbody');

        this._campoData.value = '2020-09-10';
    }

    adicionar(event) {
        event.preventDefault();

        let negociacao = new Negociacao(
            this._converterData(this._campoData.value),
            this._campoQuantidade.value, 
            this._campoValor.value
        );

        this._adicionaLinha(negociacao);
        this._resetaFormulario();
    }

    _converterData(dataString) {
        return new Date(...dataString.split('-').map((valor, indice) => valor - indice % 2)) //código complicado só para exercitar arraw function e spred operator
    }

    _resetaFormulario() {
        this._campoData.value = '';
        this._campoQuantidade.value = 1;
        this._campoValor.value = 0.0;

        this._campoData.focus();
    }


    _adicionaLinha(negociacao) {

        let linha = document.createElement('tr');

        this._adicionarColuna(linha, negociacao.data);
        this._adicionarColuna(linha, negociacao.quantidade);
        this._adicionarColuna(linha, negociacao.valor);
        this._adicionarColuna(linha, negociacao.volume);

        this._tabela.appendChild(linha);
    }

    _adicionarColuna(linha, textContent) {
        let coluna = document.createElement('td');
        coluna.textContent = textContent;
        linha.appendChild(coluna);
    }
}