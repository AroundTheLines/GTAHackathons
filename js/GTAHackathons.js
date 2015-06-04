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

	var hackathons = [{
		name: "Hack the North",
		date: "September 18-20, 2015",
		venue: "University of Waterloo",
		address:"200 University Ave W, Waterloo, ON N2L 3G1",
		description: "Hack the North is Canada's premier hackathon. It's an event where 1,000 students with different technical backgrounds and skill levels will come together, for 36 hours, form teams around a problem or idea, and collaboratively code a unique solution from scratch. With world class mentors, food, and hardware resources, you're in for an amazing time!",
		site: "hackthenorth.com"
	}];

})(); //end of function wrapper. Good form.