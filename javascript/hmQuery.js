(function($) {
  window.hmQuery = {
    //
    // Variáveis de controle
    // ================================================================
    //  
    _ajaxData: {
      accessToken : '',
      clientId    : '',
      companyName : '',
      _method     : 'get'
    },

    _arrayPromises: [],

    _apiUrl: 'https://qa.dclickholmes.com/holmes/api/',

    //
    // Executa o search
    // ================================================================
    //  
    search: function (query) {
      if (!query){
        query = '';
      }

      // Requisição da search 
      return $.ajax({
        url  : this._apiUrl + 'search',
        data : $.extend(this._ajaxData, {
          query          : query,
          start          : 0,
          rows           : 50,
          permissionType : 'VIEW'
        })
      });
    },

    //
    // Executa a leitura de classificação
    // ================================================================
    //  
    readClassification: function(documentId) {
      if (!documentId){
        documentId = '';
      }

      // Requisição da readClassification 
      return $.ajax({
        url  : this._apiUrl + 'classification/readClassification/' + documentId,
        data : this._ajaxData
      });
    },

    //
    // Dispara a execução da query executa as alterações na view
    // ================================================================
    // 
    doQuery: function(query, subTitle, fieldMap) {
      if (!fieldMap) { fieldMap = {}; }
      if (!subTitle) { subTitle = ''; }
      var self = this;

      // Cahe Dom Elements
      var $field,
          $mainForm        = $('#mainForm')        .hide(),
          $noSearchMessage = $('#noSearchMessage') .hide(),
          $emptyMessage    = $('#emptyMessage')    .hide(),
          $loading         = $('.loading'),
          $mainSubTitle    = $('#mainSubTitle'),
          fieldTypes       = ['TEXT', 'NUMBER', 'LIST'];

      $mainSubTitle.text(subTitle);

      if (query) {
        // Executa a busca pelo cnpj
        this.search(query).done(function (data) {

          if(!_.isEmpty(data.response.docs)) {
            $.each(data.response.docs, function (i, doc) {
              promise = self.readClassification(doc._document);
              promise.done(function(data){
                $.each(data.values, function(i, object) {
                  if( _.indexOf(fieldTypes, object.propertyType) !== -1 )  {
                    self._fillField(
                      fieldMap[object.propertyName],
                      object.propertyValue
                    );
                  }
                });
              });

              self._arrayPromises.push(promise);
            });

            $.when.apply($, self._arrayPromises).done(function(){
              $loading.hide();
              $mainForm.show();
            });
          } else {
            $loading.hide();
            $emptyMessage.show();
          }
        });
      } else {
        $loading.hide();
        $noSearchMessage.show();
      }
    },

    //
    // Preenche um campo
    // ================================================================
    // 
    _fillField: function(field, value) {
      $field = $(field);
      if ($field && $field.is('td') && $field.text() == '--') {
        $field.text(value);
      } else if ($field && !$field.val()) {
        $field.val(value);
      }
    },

    //
    // Logger com fallback para o IE
    // ================================================================
    // 
    _log: function() {
      if (typeof console !== "undefined" && console !== null) {
        if (typeof console.log === "function") {
          console.log.apply(console, arguments);
        }
      }
    }

  };
}(jQuery));