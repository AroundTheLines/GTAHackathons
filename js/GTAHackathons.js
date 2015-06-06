(function(){ //good form.
	$(".dots").on("click",function(){
		$(this).toggleClass('current').siblings().removeClass('current');
	});

})(); //end of function wrapper. Good form.