(function(){ //good form.

	var app = angular.module("gtaHackathons",[]);

	app.controller("TabController", function(){
		this.tab=1;

		this.setTab = function(newValue){
			this.tab = newValue;
		}

		this.isSet = function(tabName){
			return this.tab === tabName;
		}
	});

})(); //end of function wrapper. Good form.