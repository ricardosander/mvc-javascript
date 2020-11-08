class NegociacoesView extends View {
 
    template(model) {
        return `
            <table class="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th onclick="negociacaoController.ordernar('data')">DATA</th>
                        <th onclick="negociacaoController.ordernar('quantidade')">QUANTIDADE</th>
                        <th onclick="negociacaoController.ordernar('valor')">VALOR</th>
                        <th onclick="negociacaoController.ordernar('volume')">VOLUME</th>
                    </tr>
                </thead>
            
                <tbody>
                ${model.negociacoes.map(n =>
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
                        <td>${model.volumeTotal}</td>
                    </tr>
                </tfoot>
            </table>
        `;
    }
}