//OPÇÃO CAIXA CRIPTOGRAFIA INCREMENTO//
var criptografiaSelect = document.querySelector('select[name="criptografia"]');

criptografiaSelect.addEventListener('change', function (evento) {
  var incrementoCifra = document.getElementById('incrementoCifra')

  if (evento.target.value == 'cifra') {

    incrementoCifra.style = 'display: block';
  } else {

    incrementoCifra.style = 'display: none';
  }
});
//OPÇÃO CAIXA CRIPTOGRAFIA INCREMENTO//

//OPÇÃO DE/CODIFICAÇÃO//
var acaoCaixa = document.querySelectorAll('input[name="acao"]');

acaoCaixa.forEach(radio => {
  radio.addEventListener('change', function (evento) {
    var incrementoSubmit = document.querySelector('button[type="submit"]');

    if (evento.target.value == 'codificar') {
      incrementoSubmit.innerHTML = 'Codificar Mensagem';
    } else {
      incrementoSubmit.innerHTML = 'Decodificar Mensagem'
    }
  });
});
//OPÇÃO DE/CODIFICAÇÃO//

//FORMULARIO DO INCREMENTO//
var formulario = document.forms.formCriptografia;

  formulario.addEventListener('submit', function (evento) {

  evento.preventDefault();
//FORMULARIO DO INCREMENTO//

//RESULTADOS deCODIFICANDO//
  var mensagem = formulario.mensagem.value;
  var criptografia = formulario.criptografia.value;
  var incremento = formulario.incremento.value;
  var acao = formulario.acao.value;

  var resultado = '';

  if (criptografia == 'base64') {
    resultado = base64(acao, mensagem);
  } else {
    resultado = cesar(acao, mensagem, incremento);
  }

  var resultadoContainer = document.getElementById('resultado');
  resultadoContainer.innerHTML = `
    <h1 class="letras">RESULTADO ABAIXO </h1>
    ${resultado}
  `;

  formulario.reset();
});

function base64(acao, mensagem) {
  if (acao == 'codificar') {
    return btoa(mensagem);
  } else {
    return atob(mensagem);
  }
}

function cesar(acao, mensagem, incremento) {
  incremento = Number(incremento);

  var resultado = '';

  for (var i = 0; i < mensagem.length; i++) {
    var letra = mensagem[i];
    var code = letra.charCodeAt();

    if (acao == 'codificar') {
      code += incremento;
    } else {
      code -= incremento;
    }

    resultado += String.fromCharCode(code);
  }

  return resultado;
}
//RESULTADOS deCODIFICANDO//
