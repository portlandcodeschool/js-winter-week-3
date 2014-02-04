"use strict" //so I don't reference our dear mother object who looks down upon us all...

var idCount = 101 //Keeping the eventId simple

function Appointment (description, location, attendees, date) {
  if(!(this instanceof Appointment)) return new Appointment(description, location, attendees, date);
  this.eventId = idCount++; 
  this.description =  description;
  this.location = location;
  this.attendees = attendees;
  this.dateWhen = new Date(date);
  
};

function AppointmentBook () {
    this.upcoming = [];
    //logs an temporary array, culls it
    this.logCull = function (yarrrrr) {
	    yarrrrr.forEach (function (thing) {
	    	console.log("\tEvent #" +thing.eventId+ ", " +thing.dateWhen.toDateString()+ "\nDescription: " +thing.description+ "\nLocation: " +thing.location+ "\nAttending: " +thing.attendees.join(', '));
	  	});
	  
	  	var cull = yarrrrr.length;
	  	for (var i = 0; i<cull; i++) yarrrrr.pop();
	  };
};

//adds an appointment, super serious function
AppointmentBook.prototype.add = function (obj) {
  this.upcoming.push(obj);
  var i = this.upcoming.length - 1;
};

//deletes an appointment based upon index number
AppointmentBook.prototype.cancel = function(itemId) {
	var ind = -1;
	this.upcoming.forEach(function (item, index) {
		item.eventId === itemId ? ind = index : null ;
	});
	
	if (ind === -1) {throw new Error("I pity the fool without an event ID!"); 
	} else { 
		this.upcoming.splice(ind,1); 
	}
 };

//reschedules an appointment, also super serious
AppointmentBook.prototype.reschedule = function(itemId, newTime) {
	var ind = -1;
	this.upcoming.forEach(function (item, index) {
		item.eventId === itemId ? ind = index : null ;
	});
	
	if (ind === -1) {throw new Error("No event ID !== fun"); 
	} else { 
		this.upcoming[ind].dateWhen = new Date(newTime); 
	}
};

//spits out the upcoming array of appointments, makes it look pretty in the console
AppointmentBook.prototype.list = function() {
  console.log("\n--- Upcoming Events ---")
  this.upcoming.forEach (function (thing) {
  	console.log("\tEvent #" +thing.eventId+ ", " +thing.dateWhen.toDateString()+ "\nDescription: " +thing.description+ "\nLocation: " +thing.location+ "\nAttending: " +thing.attendees.join(', '));
  })
 };

//finds appointments within the same day, .toDateString() is pure sex
AppointmentBook.prototype.dateOf = function(dateSelect) {
  var dateTemp = (new Date(dateSelect)).toDateString(),
      dateOfArr = [];  
  for (var i = 0; i < this.upcoming.length; i++) {
    dateTemp === this.upcoming[i].dateWhen.toDateString() ? dateOfArr.push(this.upcoming[i]) : null;
  }
  
  console.log("\n--- Showing event(s) on " +dateTemp+ " ---");
  this.logCull(dateOfArr);
};

//finds appointments within a specified range
AppointmentBook.prototype.upcomingRange = function(rangeStart, rangeLimit) {
  var start = new Date(rangeStart),
      end = new Date(rangeLimit),
      upcomingArr = [];
  
  for (var i = 0; i < this.upcoming.length; i++) {
    var dateTemp = this.upcoming[i].dateWhen;
    (dateTemp >= start && dateTemp <= end) ? upcomingArr.push(this.upcoming[i]) : null;
  }  
  console.log("\n--- Showing all events between " +(new Date(rangeStart)).toDateString()+ " and " +(new Date(rangeLimit)).toDateString()+ " ---");
  this.logCull(upcomingArr);
};

//finds appointments by month/year; month can be a string or number
AppointmentBook.prototype.inMonth = function(month, year) {
  var months = ["January","February","March","April","May","June","July","August","September","October","November","December"],
      monthNum = month,
      monthArr = [];

  if (typeof year !== 'number') throw new Error("Passive aggressive error message about lack of proper year syntax.");
  
  if (typeof month === 'string') {
  	for (var i = 0; months[i] !== month && i <= 11; i++); 
    //for (var i = 0; i <= 11 && month === months[i]; i++) {
    monthNum = i;
  }
  
  for (var i = 0; i < this.upcoming.length; i++) { //convert to more digestable variables, push to array
    var monthTemp = this.upcoming[i].dateWhen.getMonth(),
        yearTemp = this.upcoming[i].dateWhen.getFullYear();
    (monthTemp === monthNum && year === yearTemp) ? monthArr.push(this.upcoming[i]) : null;
  }
  console.log("\n--- Showing all events on " +months[monthNum]+ " " +year+ " ---");
  this.logCull(monthArr);
};

//Sorts by day.
AppointmentBook.prototype.sortByDate = function() {
	this.upcoming.sort(function (a, b) {
	  return a.dateWhen - b.dateWhen; //HOLY HELL!!!, Date() automatically parses for you when using the maths!
	})
};

///////////////////////////////////////////// DO STUFF //////////////////////////////////////////
console.log("========== DOING STUFF ==========\n\n")
var aBook = new AppointmentBook;
var events = [new Appointment("Lunch with Josie", "Lardo", ["Chris", "Josie"], "February 09, 2013, 12:45:00"),
          	  new Appointment("Dinner Date with Lindsey", "A Very Fancy Restaurant", ["Chris", "Lindsey",], "January 14, 2014, 17:30:00"),
          	  new Appointment("Code Stuff", "Windows Workstation", ["Chris", "Bottle(s) of beer"], "February 2, 2014, 9:00:00"),
          	  new Appointment("Walk around, search for deeper philisophical meaning in JavaScript", "Hallway", ["Chris"], "February 2, 2014, 9:30:00"),
          	  new Appointment("Debug code, eliminate rogue curly braces/semicolons", "Windows Workstation", ["Chris", "Bottle of Ibuprofen"], "February 2, 2014, 09:45:00"),
          	  new Appointment("Stare hopelessly at code, consult Google","Living Room with Mac",["Chris", "Depression"],"February 2, 2014, 11:45:00"),
          	  new Appointment("Find stackoverflow thread!","Living Room with Mac",["Chris","Elation"],"February 2, 2014, 13:45:00"),
          	  new Appointment("...with no replies","Living Room with Mac",["Chris", "Shame"],"February 2, 2014, 13:45:05"),
          	  new Appointment("Rock Climbing","The Circuit",["Chris", "Angela", "Kendra"],"March 18, 2014, 15:30:00"),
          	  new Appointment("Birthday Party for Sean","Lancaster, CA",["Sean","Crickets","Tumbleweeds"],"February 25, 2014 00:00:00"),
          	  new Appointment("Party","Portland, OR",["Lots of Anons","Wine","Beer"],"December 31, 1999 00:00:00"),
              new Appointment("Sign some Oath","Tennis Court",["Third Estate"],"June 20, 1789 11:00:00"),
              new Appointment("Give Speech: Arming the Citizens","Palais Royale",["Camille Desmoulins", "Potential Militia"],"July 12, 1789 16:00:00"),
              new Appointment("Storm an Armory","Bastille",["Rebels", "Militia"],"July 14, 1789 13:00:00"),
              //new Appointment("description","location",["attending", "as an array"],"Date()"),
        	 ];

events.forEach(function (event) { aBook.add(event) });
aBook.sortByDate();
aBook.cancel(102);
aBook.reschedule(101, "January 29, 2014, 08:00:00");
aBook.list()
aBook.dateOf("February 2, 2014")
aBook.upcomingRange("June 19, 1789", "July 14, 1789, 23:00:00")
aBook.inMonth("January", 2014)


