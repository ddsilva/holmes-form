(function($) {
  // Cache elements
  var $formSearch = $('#formSearch');
  var $cpfInput   = $('#cpfInput');
  var $cnpjInput  = $('#cnpjInput');
  var $cpfBtn     = $('#cpfBtn');
  var $cnpjBtn    = $('#cnpjBtn');
  var $tipoInput  = $('[name="tipoDocumento"]');

  // Objeto de notificações
  var Feedback = window.Feedback;

  // Callback chamado quando o radio de tipo de documento é alterado
  $tipoInput.change(function (event) {
    var val = $(event.target).val();

    // Escondendo os elementos
    $cpfInput  .hide().val('');
    $cnpjInput .hide().val('');
    $cpfBtn    .hide();
    $cnpjBtn   .hide();

    // Exibe o campo certo e muda o action do form, conforme o valor do item selecionado
    if (val == 'cpf'){
      $cpfInput.show();
      $cpfBtn.show();
      $formSearch.attr('action', 'fisica.html');
    } else {
      $cnpjInput.show();
      $cnpjBtn.show();
      $formSearch.attr('action', 'juridica.html');
    }
  });

  // Callback chamado no submit do form
  $formSearch.submit(function (event) {
    if (!$('input[type="text"]:not(:hidden)').val()) {
      if (typeof Feedback !== 'undefined' && Feedback !== null) {
        Feedback.error('Preenchimento obrigatório.');
      }
      event.preventDefault();
    } else {
      $('input:hidden').remove();
    }
  });

  $tipoInput.first().click();
}(jQuery));