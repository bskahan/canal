// Canal.js
// (c) 2010 Blake Walters

(function() {
	
	var canal = function() {
		return new $C();
	};
	
	var $C = function(obj) {};
	
	$C.prototype = {
		
		version: '0.0.1',
		
		view: function(str) {
			return new this.viewWrapper(str);
		},
		
		viewWrapper: function(str) {
			this.template = str;
			this.getTokenCount = function() {
				if(this.tokenCount != undefined) {
					return this.tokenCount;
				} 
				return this.tokenCount = this.template.match(/\{[^\}]*\}/g).length;
			};
		}
		
	};
	
	
	window.canal = window.$C = new canal();
	
})(window);