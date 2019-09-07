;(function () {
	'use strict';

	// Loading page
	var loaderPage = function() {
		$(".fh5co-loader").fadeOut("slow");
	};
	var myVar = function(){
		setTimeout(loaderPage,2000);
	} 

	// Document on load.
	$(function(){
		myVar();
	});
	
}());