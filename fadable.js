(function( $ ){
  $.fn.fadable = function(content, options) {
  	var settings = $.extend({
  		'fadeIn' : 'slow',
  		'fadeOut' : 'slow',
  		'complete' : function(){}
  	}, options);

  	var _self = $(this);

  	return _self.fadeOut(settings.fadeOut, function(){
  		_self.html('');
  		_self.html(content);
  		_self.fadeIn(settings.fadeIn, settings.complete);  		
  	});
  };
})( jQuery );