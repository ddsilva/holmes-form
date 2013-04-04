(function($) {
  window.Feedback = {
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
      if (options == null) {
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
}(jQuery));