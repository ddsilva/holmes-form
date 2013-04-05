(function($) {
  window.Utils = {};
  // Feedback object
  window.Utils.Feedback = {
    defaults: {
      'layout': 'center',
      'theme': 'noty_theme_twitter',
      'animateOpen': {
        'height': 'toggle'
      },
      'animateClose': {
        'height': 'toggle'
      },
      'speed': 500,
      'timeout': 3000,
      'closeButton': true,
      'closeOnSelfClick': false,
      'closeOnSelfOver': false,
      'modal': false
    },
    set: function(message, type, options) {
      if (!options){
        options = {};
      }

      if (typeof noty === 'undefined' || noty === null) {
        return;
      }
      _.defaults(options, this.defaults);
      $.noty.closeAll();
      return $.noty(_.extend(options, {
        'text': message,
        'type': type
      }));
    },
    success: function(message) {
      return this.set(message, 'success');
    },
    info: function(message) {
      return this.set(message, 'info');
    },
    error: function(message) {
      return this.set(message, 'error');
    },
    closeAll: function() {
      return $.noty.closeAll();
    }
  };

  window.Utils.getUrlVars = function() {
    var vars = {}, hash;
    var href = decodeURIComponent((window.location.href));
    var hashes = href.slice(href.indexOf('?') + 1).split('&');
    for(var i = 0; i < hashes.length; i++) {
        hash = hashes[i].split('=');
        vars[hash[0]] = hash[1];
    }
    return vars;
  };

  // Setup do ajax
  $.ajaxSetup({
    cache: false,
    error: function(){
      if (typeof window.Utils.Feedback !== 'undefined' && window.Utils.Feedback !== null) {
        window.Utils.Feedback.error('Erro na requisição.');
      }
    }
  });
}(jQuery));