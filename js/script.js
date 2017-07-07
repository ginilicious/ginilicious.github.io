(function(){
	"use strict";

  winHeight();
})();

$(window).resize(function(){
	winHeight();
});

function winHeight(){
	var wHeight = $(window).height();
	$('.header').height(wHeight); 
}
