let moment = required('moment');

function adicionaEstados() {

    let select = document.querySelector('#iEstado');
    let estados = ['Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 'Espírito Santo', 'Goiás', 'Maranhão', 'Mato Grosso do Sul', 'Minas Gerais', 'Pará', 'Paraíba', 'Paraná', 'Pernambuco', 'Piauí', 'Rio de Janeiro', 'Rio Grande do Norte', 'Rio Grande do Sul', 'Rondônia', 'Roraima', 'Santa Catarina', 'São Paulo', 'Sergipe', 'Tocantins', 'Distrito Federal'];
    
    for (let index = 0; index < estados.length; index += 1) {
        let option = document.createElement('option');
        select.appendChild(option).innerText = estados[index];
       select.appendChild(option).value = estados[index];

    };
};


function envia(event) {
    event.preventDefault();
    alert('arquivo enviado')
    limpa()
}

function limpa() {
    let inputs = document.querySelectorAll('input');
    let textArea = document.querySelector('textArea');
    let div = document.querySelectorAll('div');
    for (let index = 0; index < inputs.length && index < div.length; index += 1) {
        let userInput = inputs[index];
        userInput.value = '';
        textArea.value = '';
       div[index].value = '';
       adicionaEstados();


    }
}
      
      

window.onload = function () {
    adicionaEstados();
    let btnEnviar = document.querySelector('.enviar');
    btnEnviar.addEventListener('click', envia);

    let btnLimpar = document.querySelector('.limpar');
    btnLimpar.addEventListener('click', limpa);
};
