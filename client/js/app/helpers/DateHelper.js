class DateHelper {

    constructor() {
        throw new Error('DateHelper não pode ser instanciada.');
    }

    static textoParaData(texto) {
        if(this._isDataInvalida(texto)) {
            throw new Error("Formato de data inválido.");
        }
        return new Date(...texto.split('-').map((valor, indice) => valor - indice % 2)) //código complicado só para exercitar arraw function e spred operator
    }

    static dataParaTexto(data) {
        return `${data.getDate()}/${data.getMonth()+1}/${data.getFullYear()}`;
    }

    static _isDataInvalida(texto) {
        return !this._isDataValida(texto);
    }

    static _isDataValida(texto) {
        return /^\d{4}-\d{2}-\d{2}$/.test(texto)
    }

}