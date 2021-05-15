function adicionaEstados() {
    let select = document.querySelector('#iEstado');
    let estados = ['Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 'Espírito Santo', 'Goiás', 'Maranhão', 'Mato Grosso do Sul', 'Minas Gerais', 'Pará', 'Paraíba', 'Paraná', 'Pernambuco', 'Piauí', 'Rio de Janeiro', 'Rio Grande do Norte', 'Rio Grande do Sul', 'Rondônia', 'Roraima', 'Santa Catarina', 'São Paulo', 'Sergipe', 'Tocantins', 'Distrito Federal'];
    
    for (let index = 0; index < estados.length; index += 1) {
        let option = document.createElement('option');
        select.appendChild(option).innerText = estados[index];
       // select.appendChild(option).value = estados[index];
    };
};
adicionaEstados();

