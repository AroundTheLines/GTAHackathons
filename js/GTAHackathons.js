(function(){ //good form.
	$(".dots").on("click",function(){
		$(this).toggleClass('current').siblings().removeClass('current');
	});

	$(".highlight").on("click",function(){
		alert("Pssst! That's not done yet! Check back in a while ;)");
	});
})(); //end of function wrapper. Good form.