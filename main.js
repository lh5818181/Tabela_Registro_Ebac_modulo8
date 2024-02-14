const form = document.getElementById('form-registro')
const nomes = [];
const numero = [];

let linhas = '';


form.addEventListener('submit',  function(e) {
    e.preventDefault();

    adicionaLinha();

    atualizaTabela();
    
})

function adicionaLinha() {
    const inputNome = document.getElementById('nome-completo')
    const inputNumeroTel = document.getElementById('numero-tel')

    if (nomes.includes(inputNome.value)){
        alert('Este Registo já está incluido.')
    } else if (numero.includes(inputNumeroTel.value)){
        alert('Este contato já está incluso.')
    }    else  {
        nomes.push(inputNome.value)
        numero.push(inputNumeroTel.value)

    let linha = '<tr>'
    linha += `<td>${inputNome.value}</td>`;
    linha += `<td>${inputNumeroTel.value}</td>`;
    linha += '</tr>'

    linhas += linha
}


    
    inputNome.value = '';
    inputNumeroTel.value = '';
}

function atualizaTabela() {
    const CorpoTable = document.querySelector('tbody') 
    CorpoTable.innerHTML = linhas
}