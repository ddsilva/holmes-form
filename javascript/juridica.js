(function($) {
  //
  // Variables
  // ================================================================
  //  
  var cnpj, query, subTitle, fieldMap, urlVars;

  //
  // Mapa com os campos
  // ================================================================
  //
  fieldMap = {
   'Nome Empresarial'              : $('#nomeEmpresarial'),
   'Nome Fantasia'                 : $('#nomeFantasia'),
   'Atividade Econômica Principal' : $('#atividadeEconomica'),
   'Número CNPJ'                   : $('#numeroCnpj'),
   'Logradouro'                    : $('#logradouro'),
   'Número'                        : $('#numero'),
   'Complemento'                   : $('#complemento'),
   'CEP'                           : $('#cep'),
   'Bairro'                        : $('#bairro'),
   'Cidade'                        : $('#cidade'),
   'Unidade Federativa. UF'        : $('#uf'),
   'País'                          : $('#pais'),
   'Nome acionista sócio 1'        : $('#acionista1 [name="nome"]'),
   'Nome acionista sócio 2'        : $('#acionista2 [name="nome"]'),
   'Nome acionista sócio 3'        : $('#acionista3 [name="nome"]'),
   'Nome acionista sócio 4'        : $('#acionista4 [name="nome"]'),
   'CPF acionista sócio 1'         : $('#acionista1 [name="cpfCnpj"]'),
   'CPF acionista sócio 2'         : $('#acionista2 [name="cpfCnpj"]'),
   'CPF acionista sócio 3'         : $('#acionista3 [name="cpfCnpj"]'),
   'CPF acionista sócio 4'         : $('#acionista4 [name="cpfCnpj"]')
  };

  //
  // Pegando o cnpj e montando a query
  // ================================================================
  //
  urlVars = window.Utils.getUrlVars();
  cnpj    = urlVars.cnpj || '';

  //
  // Executando a query e alterando a view
  // ================================================================
  //
  query    = cnpj ? '+"Número CNPJ":"' + cnpj + '"' : null;
  subTitle = cnpj ? 'CNPJ - ' + cnpj : null;
  window.hmQuery.doQuery(query, subTitle, fieldMap);

}(jQuery));