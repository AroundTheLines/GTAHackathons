(function(){ //good form.
	$(".dots").on("click",function(){
		if($(this).siblings().hasClass('current')){
			$(this).toggleClass('current').siblings().removeClass('current');
		}
	});

	$('body').scrollspy({ target: '#side-nav'});
})(); //end of function wrapper. Good form.