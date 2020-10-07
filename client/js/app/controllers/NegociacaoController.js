class NegociacaoController {

    constructor() {

        let $ = document.querySelector.bind(document);//complicador de código só para exercitar progrmação funcional, contexto e bind.

        this._campoData = $('#data');
        this._campoQuantidade = $('#quantidade');
        this._campoValor = $('#valor');

        this._tabela = $('table tbody');

        this._campoData.value = '2020-10-06';

        this._listaNegociacoes = new ListaNegociacoes();
        this._viewNegociacoes = new NegociacoesView($('#lista-negociacoes'), this._listaNegociacoes);
        this._viewNegociacoes.update();
    }

    adicionar(event) {
        event.preventDefault();

        let negociacao = this._criarNegociacao();

        this._listaNegociacoes.adicionar(negociacao);
        this._viewNegociacoes.update();

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

}