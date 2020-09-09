var campoData = document.querySelector('#data');
var campoQuantidade = document.querySelector('#quantidade');
var campoValor = document.querySelector('#valor');

var campos = [campoData, campoQuantidade, campoValor];

var formulario = document.querySelector('.form');
var tabela = document.querySelector('table tbody');

formulario.addEventListener('submit', function(event) {
    event.preventDefault();

    let negociacao = new Negociacao(new Date(campoData.value), campoQuantidade.value, campoValor.value);
    
    let linha = document.createElement('tr');

    let colunaData = document.createElement('td');
    colunaData.textContent = negociacao.data;
    linha.appendChild(colunaData);
    
    let colunaQuantidade = document.createElement('td');
    colunaQuantidade.textContent = negociacao.quantidade;
    linha.appendChild(colunaQuantidade);

    let colunaValor = document.createElement('td');
    colunaValor.textContent = negociacao.valor;
    linha.appendChild(colunaValor);

    let colunaVolume = document.createElement('td');
    colunaVolume.textContent = negociacao.volume;
    linha.appendChild(colunaVolume);

    tabela.appendChild(linha);

    campoData.value = '';
    campoQuantidade.value = 1;
    campoValor.value = 0.0;

    campoData.focus();
});