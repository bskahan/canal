$(document).ready(function(){

	module("Views");
	
	test("view: register: basic", function() {
		expect(3);
		ok($C.view(), "view constructor is available");
		var viewTemplate = "<p>Sample View</p>";
		var view = $C.view(viewTemplate);
		ok(view, "view object can be instantiated");
		equals(view.template, viewTemplate, "view template is set correctly");
	});
	
	test("view: register: stand-alone", function() {
		var viewTemplate = "<ul><li>{token1}</li></li>{token2}</li></ul>";
		var view = $C.view(viewTemplate);
		equals(view.template, viewTemplate, "view template is set correctly");
		equals(view.getTokenCount(), 2, "working tokenCount()");
		equals(view.tokenCount, 2, "tokenCount set correctly after calling getTokenCount()");
	});
	
	test("view: register: partial", function() {});
	
	test("view: render", function() {});


});