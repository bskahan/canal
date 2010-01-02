// Canal.js
// (c) 2010 Blake Walters

(function() {
	
	var canal = function() {};
	
	canal.fn = canal.prototype = {
		// return versioning information
		canal: "0.0"
	};
	
	window.canal = window.$C = canal;
	
})(window);