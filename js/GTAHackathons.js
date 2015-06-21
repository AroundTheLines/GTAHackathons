(function(){ //good form.
	$(".dots").on("click",function(){
		if($(this).siblings().hasClass('current')){
			$(this).toggleClass('current').siblings().removeClass('current');
		}
	});

	$("#side-intro").on("click", function(){
		//moveto intro
		//repeat for all other buttons. I hope. 
	})
})(); //end of function wrapper. Good form.