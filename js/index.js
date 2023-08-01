// Habilitar os ícones
feather.replace()
//

// Aba entre DOCX e HTML
document.getElementById('tabPadrao').click();

function abrirTab(event, idTab) {
  var conteudos = document.getElementsByClassName('estrutura-form');
  for (var i = 0; i < conteudos.length; i++) {
    conteudos[i].style.display = 'none';
  }

  var tabs = document.getElementsByClassName('tab-button');
  for (var i = 0; i < tabs.length; i++) {
    tabs[i].className = tabs[i].className.replace('ativo', '');
  }

  document.getElementById(idTab).style.display = 'block';
  event.currentTarget.className += ' ativo';
}
//


// Esconde o campo dos templates
function esconderDiv() {
  var divs = document.getElementsByClassName('template-name');
  
  if (divs.length > 0) {
    var div = divs[0];
    div.style.display = 'none';
  }
}
//

// Função que copia o GUID do campo INPUT
function copiarTexto() {
  let textoCopiado = document.getElementById("texto");
  textoCopiado.select();
  textoCopiado.setSelectionRange(0, 99999)
  document.execCommand("copy");
}
//

// Função da MODAL dos BOTÕES
function abrirModal(carregarModal) {
  var modal = document.getElementById(carregarModal);
  
  modal.style.display = 'block';
}

function fecharModal(fecharModal) {
  var modal = document.getElementById(fecharModal);

  modal.style.display = 'none';
}
//

//Repetir OptionStep
$(function () {
  var divContent = $('#formulario');
  var botaoAdicionar = $('a[data-id="1"]');
  var i = 1;

  $(botaoAdicionar).click(function () {
      $('<div class="conteudoIndividual"><label for="text">Opção: </label><input type="text" do Documento" maxlength="6" name="numeroDocumento' + i + '" required/><a href="#" class="linkRemover">&nbsp;&nbsp; X </a></div>').appendTo(divContent);
      $('#removehidden').remove();
      i++;
      $('<input type="hidden" name="quantidadeCampos" value="' + i + '" id="removehidden">').appendTo(divContent);
  });

  $('#formulario').on('click', '.linkRemover', function () {
      $(this).parents('.conteudoIndividual').remove();
      i--;
  });
});


// Repetir Checkbox
$(function () {
  var divCheckbox = $('#checkfields');
  var adicionarCheckbox = $('a[data-id="2"]');
  var i = 1;

  $(adicionarCheckbox).click(function () {
      $('<div class="checkboxIndividual"><label for="text">Checkbox: </label><input type="text" maxlength="6" name="numeroDocumento' + i + '" required /><a href="#" class="linkRemover">&nbsp;&nbsp; X </a></div>').appendTo(divCheckbox);
      $('#removehidden').remove();
      i++;
      $('<input type="hidden" name="quantidadeCampos" value="' + i + '" id="removehidden">').appendTo(divCheckbox);
  });

  $('#checkfields').on('click', '.linkRemover', function () {
      $(this).parents('.checkboxIndividual').remove();
      i--;
  });
});