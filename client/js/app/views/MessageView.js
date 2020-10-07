class MessageView extends View {

    template() {
        return this._model.texto ? `<p class="alert alert-info">${this._model.texto}</p>` : '<p></p>';
    }

}