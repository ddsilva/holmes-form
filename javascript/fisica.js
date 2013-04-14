(function($) {
  //
  // Variables
  // ================================================================
  //  
  var cpf, query, subTitle, fieldMap, urlVars;

  //
  // Mapa com os campos
  // ================================================================
  //
  fieldMap = {
    'Nome'                   : $('#nomeCompleto'),
    'Data de Emissão'        : $('#dataEmissão'),
    'Nome da Mãe'            : $('#nomeMae'),
    'Nome do Pai'            : $('#nomePai'),
    'Número CPF'             : $('#cpf'),
    'Número Identidade'      : $('#numeroIdentidade'),
    'Orgão Emissor'          : $('#orgaoEmissor'),
    'Logradouro'             : $('#logradouroResidencial'),
    'Número'                 : $('#numeroResidencial'),
    'Bairro'                 : $('#bairroResidencial'),
    'Cidade'                 : $('#cidadeResidencial'),
    'Unidade Federativa. UF' : $('#ufResidencial'),
    'CEP'                    : $('#cepResidencial')
  };

  //
  // Pegando o cpf e montando a query
  // ================================================================
  //
  urlVars = window.Utils.getUrlVars();
  cpf     = urlVars.cpf || '';

  //
  // Executando a query e alterando a view
  // ================================================================
  //
  query    = cpf ? '+"Número CPF":"' + cpf + '"' : null;
  subTitle = cpf ? 'CPF - ' + cpf : null;
  window.hmQuery.doQuery(query, subTitle, fieldMap);

}(jQuery));