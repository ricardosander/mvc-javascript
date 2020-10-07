class NegociacoesView {
 
    constructor(container, listaNegociacoes) {
        this._container = container;
        this._listaNegociacoes = listaNegociacoes;
    }

    update() {
        this._container.innerHTML = this._template();
    }

    _template() {
        return `
            <table class="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th>DATA</th>
                        <th>QUANTIDADE</th>
                        <th>VALOR</th>
                        <th>VOLUME</th>
                    </tr>
                </thead>
            
                <tbody>
                ${this._listaNegociacoes.negociacoes.map(n =>
                    `<tr>
                        <td>${DateHelper.dataParaTexto(n.data)}</td>
                        <td>${n.quantidade}</td>
                        <td>${n.valor}</td>
                        <td>${n.volume}</td>
                    </tr>`
                ).join('')}
                </tbody>
            
                <tfoot>
                    <tr>
                        <td colspan="3"></td>
                        <td>${this._listaNegociacoes.negociacoes.reduce((total, n) => total + n.volume, 0.0)}</td>
                    </tr>
                </tfoot>
            </table>
        `;
    }
}