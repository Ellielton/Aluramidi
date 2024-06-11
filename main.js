//função que receber um indice como parametro atraves do array classlist. Este que associa 2 tag por meio de seletorer.
function tocarSom (seletorAudio) {
  const elemento = document.querySelector(seletorAudio);

  //validação por o paramentro poderá conter uma tag não valide e causar erro.
  if(elemento !== null && elemento.localName === 'audio') {
    
    elemento.play();
    
  }else{

    alert('Esse elemento não encontrado ou seletor inválido!');

  }
}

//cria um array capturando as tag com a classe tecla;
const listaDeTeclas = document.querySelectorAll('.tecla');

//Laço que percorre a lista de botões e chama a função tocarSom para qualquer tecla que for clicada.
for(contador = 0; contador < listaDeTeclas.length; contador++) {

  // * tecla: itera sobre a lista de tag butao criada com SelectorAll().
  const tecla = listaDeTeclas[contador];

  
  // * som: classlist cria um arrey atributo da mesma tag e captura o conteudo do indice 1. class=' teclas tecla-pom'
  const instrumento = tecla.classList[1];
  //console.log(instrumento)
  
  const idAudio = `#som_${instrumento}`
  //intera esse o array pra saber qual tecla foi clicada para chamar a função
  tecla.onclick = function() { tocarSom(idAudio)};

  //adicona e remove o efeito de click da tecla na pagina
  tecla.onkeydown = function (evento) {

    if(evento.code === 'Space' || evento.code === 'Enter') {
      console.log(evento.code);
      tecla.classList.add('ativa');
    } else{
      tecla.onkeyup = function() {
        tecla.classList.remove('ativa');
      }
    }

  }
}
