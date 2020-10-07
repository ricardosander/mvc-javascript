class NegociacaoController {

    constructor() {

        let $ = document.querySelector.bind(document);//complicador de código só para exercitar progrmação funcional, contexto e bind.

        this._campoData = $('#data');
        this._campoQuantidade = $('#quantidade');
        this._campoValor = $('#valor');

        this._tabela = $('table tbody');

        this._campoData.value = '2020-10-06';

        this._listaNegociacoes = new ListaNegociacoes();
    }

    adicionar(event) {
        event.preventDefault();

        let negociacao = this._criarNegociacao();

        this._listaNegociacoes.adicionar(negociacao);

        this._adicionaLinha(negociacao);
        this._resetaFormulario();
    }

    _criarNegociacao() {
        return new Negociacao(
            DateHelper.textoParaData(this._campoData.value),
            this._campoQuantidade.value, 
            this._campoValor.value
        );
    }

    _resetaFormulario() {
        this._campoData.value = '';
        this._campoQuantidade.value = 1;
        this._campoValor.value = 0.0;

        this._campoData.focus();
    }


    _adicionaLinha(negociacao) {

        let linha = document.createElement('tr');

        this._adicionarColuna(linha, DateHelper.dataParaTexto(negociacao.data));
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