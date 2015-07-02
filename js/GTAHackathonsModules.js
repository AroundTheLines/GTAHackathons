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

	app.controller("AllUpcomingController",function(){
		this.upcoming = hackathons;
	});

	app.controller("RegistrationOpenController",function(){
		this.open = []

		for (var i = 0; i < hackathons.length; i++) {
			if (hackathons[i].signups===true) {
				this.open.push(hackathons[i]);
			};
		};
	});

	app.controller("RegistrationClosedController",function(){
		this.closed = []

		for (var i = 0; i < hackathons.length; i++) {
			if (hackathons[i].signups===false) {
				this.closed.push(hackathons[i]);
			};
		};
	});

	var hackathons = [{
			name:"Tech Retreat",
			date:"August 15, 2015 8:30 AM to 8:00 PM",
			venue: "Engineering 5, University of Waterloo",
			address: "200 University Ave W, Waterloo, ON N2L 3G1",
			description: "The Waterloo Tech Retreat brings together passionate high school students at a one-day event held in the heart of Canada's technology hub. Hear from seasoned speakers and students in the industry. Learn and collaborate with like-minded peers to create something amazing.",
			site: "techretreat.ca",
			image: "http://techretreat.ca/img/techretreat-shaded-moon.png",
			signups: true
		},{
			name: "Hack the North",
			date: "September 18-20, 2015",
			venue: "University of Waterloo",
			address:"200 University Ave W, Waterloo, ON N2L 3G1",
			description: "Hack the North is Canada's premier hackathon. It's an event where 1,000 students with different technical backgrounds and skill levels will come together, for 36 hours, form teams around a problem or idea, and collaboratively code a unique solution from scratch. With world class mentors, food, and hardware resources, you're in for an amazing time!",
			site: "hackthenorth.com",
			image: "http://hackthenorth.com/2014/img/logo.png",
			signups: true
		}
	];

})(); //end of function wrapper. Good form.