var campoData = document.querySelector('#data');
var campoQuantidade = document.querySelector('#quantidade');
var campoValor = document.querySelector('#valor');

var campos = [campoData, campoQuantidade, campoValor];

var formulario = document.querySelector('.form');
var tabela = document.querySelector('table tbody');

formulario.addEventListener('submit', function(event) {
    event.preventDefault();
    
    var linha = document.createElement('tr');

    campos.forEach(campo => {
       
        var coluna = document.createElement('td');
        coluna.textContent = campo.value;
        linha.appendChild(coluna);
    });

    var volume = campoQuantidade.value * campoValor.value;

    var coluna = document.createElement('td');
    coluna.textContent = volume;
    linha.appendChild(coluna);

    tabela.appendChild(linha);

    campoData.value = '';
    campoQuantidade.value = 1;
    campoValor.value = 0.0;

    campoData.focus();
});