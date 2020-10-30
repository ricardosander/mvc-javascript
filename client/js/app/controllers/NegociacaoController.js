class NegociacaoController {

    constructor() {

        let $ = document.querySelector.bind(document);//complicador de código só para exercitar progrmação funcional, contexto e bind.

        this._campoData = $('#data');
        this._campoQuantidade = $('#quantidade');
        this._campoValor = $('#valor');

        this._tabela = $('table tbody');

        this._campoData.value = '2020-10-06';

        this._message = new Bind(
            new Message(),
            new MessageView($('#mensagem-view')),
            'texto'
        );
        
        this._listaNegociacoes = new Bind(
            new ListaNegociacoes(), 
            new NegociacoesView($('#lista-negociacoes')),
            'adicionar', 'esvaziar',
        );
    }

    adicionar(event) {
        event.preventDefault();

        let negociacao = this._criarNegociacao();

        this._listaNegociacoes.adicionar(negociacao);
        this._message.texto = 'Negociação adicionada com sucesso.';
        this._resetaFormulario();
    }

    apagar() {
        this._listaNegociacoes.esvaziar();
        this._message.texto = 'Negociações apagadas com sucesso';
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