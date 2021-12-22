//Imprima no console uma mensagem de boas-vindas para a personagem acima, incluindo seu nome.
let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    recorrente: 'Sim'
  };
  console.log('Bem-Vinda, ' + info.personagem);
  console.log('________________________________________');

  //Insira no objeto uma nova propriedade com o nome de chave 'recorrente' e o valor 'Sim' e, em seguida, imprima o objeto no console.
  console.log(info);
  console.log('________________________________________');

  //Faça um for/in que mostre todas as chaves do objeto.
  for(let key in info){
    console.log(key)
  };
  console.log('________________________________________');
  //Faça um novo for/in , mas agora mostre todos os valores das chaves do objeto.
  for(let valores in info){
    console.log(info[valores])
  };
  console.log('________________________________________');
  //Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores: 'Tio Patinhas', 'Christmas on Bear Mountain, Dell's Four Color Comics #178', 'O último MacPatinhas', 'Sim'. Então, imprima os valores de cada objeto juntos de acordo com cada uma das chaves.
  let info2 = {
    personagem: 'Tio Patinhas',
    origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178'",
    nota: 'O último MacPatinhas',
    recorrente: 'Sim',
  };

  for(let percorre in info2){
  console.log(info2[percorre]);
 };
 console.log(info2[percorre])