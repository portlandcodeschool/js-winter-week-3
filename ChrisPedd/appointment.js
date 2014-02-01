//TO DO LIST:
//1. add additional functions for logging the arrays and culling arrays for to make pretty code
//2. add nicer console.log()'s for to make shell use pretty
//3. change variables names
//4. add comment/remark field for new Appointment

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
  };

///////////////////////////////////////////// PROTOTYPE FUNCTIONS //////////////////////////////////////////

AppointmentBook.prototype.add = function (obj) {
  this.upcoming.push(obj);
  var i = this.upcoming.length - 1;
  //console.log("--- Added event " +this.upcoming[i].eventId+ ", " +this.upcoming[i].description+ " ---");
};

AppointmentBook.prototype.cancel = function(itemId) {
    for (var i = this.upcoming.length - 1; this.upcoming[i].eventId !== itemId && i >= 0; i--);
  	//console.log("--- Deleting event " +this.upcoming[i].eventId+ ", " +this.upcoming[i].description+ " ---");
    this.upcoming.splice(i,1);
  };

AppointmentBook.prototype.reschedule = function(itemId, newTime) {
  for (var i = this.upcoming.length - 1; this.upcoming[i].eventId !== itemId && i >= 0; i--);
  var oldTime = this.upcoming[i].dateWhen;
  this.upcoming[i].dateWhen = new Date(newTime);
  //console.log("--- Moved event " +this.upcoming[i].eventId+ " from " +oldTime+ " to " +this.upcoming[i].dateWhen)
};

AppointmentBook.prototype.list = function() {
  this.upcoming.forEach (function (thing) {
  	console.log(thing.eventId, thing.description, thing.location, thing.dateWhen.toDateString());
  })
 };

 ///////////////////////////////////////////// ADVANCED //////////////////////////////////////////

AppointmentBook.prototype.dateOf = function(dateSelect) {
  var dateTemp = (new Date(dateSelect)).toDateString(),
      dateOfArr = [];  
  for (var i = 0; i < this.upcoming.length; i++) { //populate a temporary array from the master upcoming array
    if (dateTemp === this.upcoming[i].dateWhen.toDateString()) dateOfArr.push(this.upcoming[i]);
  }  
  
  dateOfArr.forEach (function (thing) { //log the array
    console.log(thing.eventId, thing.description, thing.location, thing.dateWhen.toDateString() )
  } );
  
  var cull = dateOfArr.length; //cull the array
  for (var i = 0; i<cull; i++) dateOfArr.pop();
};

AppointmentBook.prototype.upcomingRange = function(rangeStart, rangeLimit) {
  var start = Date.parse(new Date(rangeStart)), //create new dates, parse them to easy numbers
      end = Date.parse(new Date(rangeLimit)),
      upcomingArr = [];
  
  for (var i = 0; i < this.upcoming.length; i++) {
    var dateTemp = Date.parse(this.upcoming[i].dateWhen); //parse upcoming dates, condition them, add to temp array
    if (dateTemp >= start && dateTemp <= end) upcomingArr.push(this.upcoming[i]);
  }
  
  upcomingArr.forEach (function (thing) { //log the array
    console.log(thing.eventId, thing.description, thing.location, thing.dateWhen.toDateString())
  } );
  
  var cull = upcomingArr.length; //cull the array
  for (var i = 0; i<cull; i++) upcomingArr.pop();
};

AppointmentBook.prototype.inMonth = function(month, year) {
  var months = ["January","February","March","April","May","June","July","August","September","October","November","December"],
      monthNum = month,
      monthArr = [];
  
  if (typeof month === 'string') { //convert string to be equivalent to the .getMonth() method
    for (var i = 0; i < months.length; i++) {
      if (month === months[i]) monthNum = i;
    };
  }
  
  for (var i = 0; i < this.upcoming.length; i++) { //convert to more digestable variables, push to array
    var monthTemp = this.upcoming[i].dateWhen.getMonth(),
        yearTemp = this.upcoming[i].dateWhen.getFullYear();
    if (monthTemp === monthNum && year === yearTemp) monthArr.push(this.upcoming[i]);
  }
  
  monthArr.forEach (function (thing) { //log the array
    console.log(thing.eventId, thing.description, thing.location, thing.dateWhen.toDateString() )
  } );
  
  var cull = monthArr.length; //cull the array
  for (var i = 0; i<cull; i++) monthArr.pop();
};

///////////////////////////////////////////// DO STUFF //////////////////////////////////////////

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
        	 ];

events.forEach(function (event) { aBook.add(event) });
aBook.cancel(111);
aBook.reschedule(101, "January 29, 2014, 08:00:00");
aBook.list()
console.log("\n")
aBook.dateOf("February 2, 2014")
console.log("\n")
aBook.upcomingRange("June 19, 1789", "July 14, 1789, 23:00:00")
console.log("\n")
aBook.inMonth("January", 2014)





/*
arrayOfJoy.sort(function (a, b) {
  console.log(a + "|" + b);
  return a - b;
*/