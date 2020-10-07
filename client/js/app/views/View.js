class View {
    constructor(container, model) {
        this._container = container;
        this._model = model;
    }

    update() {
        this._container.innerHTML = this.template();
    }

    template() {
        throw new Error('O método template deve ser sobreescrito em uma subclasse.');    
    }
}