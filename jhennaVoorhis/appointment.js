function Appointment (description, location, date, attendees){
	if(!(this instanceof Appointment))
        return new Appointment();
    this.description = description;
    this.location = location;
    this.date = new Date(date);
    this.attendees = attendees;
    this.key = Math.floor(Math.random() * 1000000000);
}

function findAppt (apptToFind, parentApptBook) {
	loc = -1;
	parentApptBook.appts.forEach(function (value, index, array){ //find the appt to cancel
		if (value.key === apptToFind.key) {
			loc = index;
		}
	});
	if (loc > -1) {
		return loc; //return location within array of Appointment Book searched
	} else {
		throw new Error("Appointment not in Appointment Book!");
	}
}

function AppointmentBook () {
	this.appts = [];
}

AppointmentBook.prototype.add = function (toBook) {
	this.appts.push(toBook);
}

//find appointment in Appointment Book and remove it entirely
AppointmentBook.prototype.cancel = function (toCancel) {	
	this.appts.splice(findAppt(toCancel, this), 1);
}

//change the date for the given appointment to the new Date
AppointmentBook.prototype.reschedule = function (toMove, newDate) {	
	var i = findAppt(toMove, this);
	this.appts[i].date = new Date (newDate);
}

//list all existing appointments, make sure attendees are printed names
AppointmentBook.prototype.listAll = function () {	
	console.log("Your current appointments:");
	this.appts.forEach(function (object){
		console.log("\n" + object.date + ":\n'" + object.description + "'\nLocation: " + object.location + "\nAttendees: " + object.attendees);
	});
}

//list all apointments for the given date in "M/D/YYYY" format
AppointmentBook.prototype.listOnDate = function (dateToList) {
	var matches = [];
	this.appts.forEach(function (object, index){
		var formattedDate = "";
		formattedDate += (object.date.getMonth() + 1) + "/" + object.date.getDate() + "/" + object.date.getFullYear();
		if (formattedDate === dateToList){
			matches.push(object);
		}
	});
	console.log("\nOn " + dateToList + " you have the following appointments:")
	matches.forEach(function (object){
		console.log("\n" + object.date + ":\n'" + object.description + "'\nLocation: " + object.location + "\nAttendees: " + object.attendees);
	});
}

//list all apointments for the given date ranges given as "M D, YYYY HH:MM:SS"
AppointmentBook.prototype.listForRange = function (dateRangeStart, dateRangeEnd) {
	var parseStart = Date.parse(dateRangeStart);
	var parseEnd = Date.parse(dateRangeEnd);
	console.log(parseStart + "\n" + parseEnd);
	matches = [];
	this.appts.forEach(function (object, index){
		var objectParse = Date.parse(object.date);
		if(objectParse >= parseStart && objectParse <= parseEnd){
			matches.push(object);
		}
	});
	console.log("\nBetween" + dateRangeStart+ " and " + dateRangeEnd + " you have the following appointments:")
	matches.forEach(function (object){
		console.log("\n" + object.date + ":\n'" + object.description + "'\nLocation: " + object.location + "\nAttendees: " + object.attendees);
	});
}

// list all apointments for the given month given as "M/YYYY"
AppointmentBook.prototype.listForMonth = function (monthAndYearToList) {
	matches = [];
	this.appts.forEach(function (object){
		var formattedMonthAndYear = "";
		formattedMonthAndYear += (object.date.getMonth() + 1) + "/" + object.date.getFullYear();
		if (formattedMonthAndYear === monthAndYearToList){
			matches.push(object);
		}
	});

	console.log("\nIn " + monthAndYearToList + " you have the following appointments:")
	matches.forEach(function (object){
		console.log("\n" + object.date + ":\n'" + object.description + "'\nLocation: " + object.location + "\nAttendees: " + object.attendees);
	});
}

var test1 = new Appointment ("Try to test this", "Airport", "Fubruary 2, 2014 14:00:00", ["me", "myself", "I"]);
var test2 = new Appointment ("Eat breakfast", "The Kitchen", "March 2, 2014 8:00:00", ["me", "Erik"]);
var test3 = new Appointment ("Go Climbing", "The Circuit", "February 4, 2014 19:00:00", ["me", "Chloe", "Sara", "Dirk"]);
var test4 = new Appointment ("Cider Tasting", "Bushwhacker Cider", "March 1, 2014 21:00:00", ["me", "Marian"]);
// console.log(test1);
var myAppts = new AppointmentBook();
myAppts.add(test1);
myAppts.add(test2);
myAppts.add(test3);
myAppts.add(test4);


myAppts.reschedule(test1, "February 3, 2014 12:27:00");
myAppts.listAll();
myAppts.cancel(test1);
myAppts.listAll();
myAppts.listOnDate("3/2/2014");
myAppts.listForMonth("3/2014");













