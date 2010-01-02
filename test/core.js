$(document).ready(function(){

	module("Core");

	test("Basic Requirements", function() {
		expect(4);
		ok($, "$ (jQuery)");
		ok(_, "_ (underscore)");
		ok(canal, "canal");
		ok($C, "$C");
	});


});