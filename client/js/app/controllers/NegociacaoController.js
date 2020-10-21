class NegociacaoController {

    constructor() {

        let $ = document.querySelector.bind(document);//complicador de código só para exercitar progrmação funcional, contexto e bind.

        this._campoData = $('#data');
        this._campoQuantidade = $('#quantidade');
        this._campoValor = $('#valor');

        this._tabela = $('table tbody');

        this._campoData.value = '2020-10-06';

        this._message = new Message();
        this._viewMessage = new MessageView($('#mensagem-view'));
        
        let self = this;
        this._listaNegociacoes = new Proxy(new ListaNegociacoes(), {
            
            get(target, prop, reciever){

                if (['adicionar', 'esvaziar'].includes(prop) && typeof(target[prop] == typeof(Function))) {
                
                    return function() {
                        Reflect.apply(target[prop], target, arguments);
                        self._viewNegociacoes.update(target);
                    }
                }


                return Reflect.get(target, prop, reciever);
            }

        });

        this._viewNegociacoes = new NegociacoesView($('#lista-negociacoes'));
        this._viewNegociacoes.update(this._listaNegociacoes);
    }

    adicionar(event) {
        event.preventDefault();

        let negociacao = this._criarNegociacao();

        this._listaNegociacoes.adicionar(negociacao);

        this._message.texto = 'Negociação adicionada com sucesso.';
        this._viewMessage.update(this._message);

        this._resetaFormulario();
    }

    apagar() {

        this._listaNegociacoes.esvaziar();

        this._message.texto = 'Negociações apagadas com sucesso';
        this._viewMessage.update(this._message);
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