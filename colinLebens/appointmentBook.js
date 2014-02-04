
var appointment = {
  description: "",
  location: "",
  date: new Date(), // See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
  attendees: []
};

function Appointment(description, location, date, attendees) {

	if(!(this instanceof Appointment)) 
		return new Appointment(description, location, date, attendees);

	this.description = description;
	this.location = location;
	
	// If date is a Date object, set this.date to date
	if (date instanceof Date === true) {
		this.date = date;
	} else {
		throw new Error("Invalid date format (should be Date)");
	}

	// If attendees is an Array, set this.attendees to attendees
	if (attendees instanceof Array === true) {
		this.attendees = attendees;
	} else {
		throw new Error("Invalid attendees format (should be Array)");	
	}
	
	//return this;
}

Appointment.prototype.getMonth = function () {
	return this.date.getMonth();
}

Appointment.prototype.getDate = function () {
	return this.date.getDate();
}

Appointment.prototype.getYear = function () {
	return this.date.getYear();
}

Appointment.prototype.getHours = function () {
	return this.date.getHours();
}

// Define AppointmentBook Class
function AppointmentBook() {
	if(!(this instanceof AppointmentBook)) 
		return new AppointmentBook();

	this.appointments = [];
	return this;
}

AppointmentBook.prototype.addAppointment = function(apptObj) {
	// Ensure that apptObj is an appointment
	if (!apptObj instanceof Appointment) {
		throw new Error("Passed Appointment must be instance of Appointment");
	}

	// Throw Error if appointment already scheduled on date
	if (!this.checkApptTime(apptObj.date)) {
		throw new Error("Appointment already scheduled at selected time.");
	}
	
	this.appointments.push(apptObj);
}

// Iterate through appointments, remove if matches passed date
AppointmentBook.prototype.cancelAppointment = function(date) {
	for (var i = 0; i < this.appointments.length; i++) {
		if(date.getMonth() === this.appointments[i].getMonth() &&
			date.getDate() === this.appointments[i].getDate() &&
			date.getHours() === this.appointments[i].getHours() &&
			date.getYear() === this.appointments[i].getYear()) {
			this.appointments.splice(i, 1);
		}
	}
}

// Iterate through appointments, print each
AppointmentBook.prototype.list = function() {
	for (var i = 0; i < this.appointments.length; i++) {
		console.log(this.appointments[i]);
	}
	
}

// Check if a passed appointment time is free for a new appointment

AppointmentBook.prototype.checkApptTime = function(date) {
	// If no appointments, time is free -> return true
	if(this.appointments.length === 0) 
		return true; 

	// If appointments, return false if appointment found at same hour, day, year
	for (var i = 0; i < this.appointments.length; i++) {
		if(date.getMonth() === this.appointments[i].getMonth() &&
			date.getDate() === this.appointments[i].getDate() &&
			date.getHours() === this.appointments[i].getHours() &&
			date.getYear() === this.appointments[i].getYear()) {
				return false;
		}
	}
	

	// If you make it through loop, time is free -> return false
	return 1;
}

AppointmentBook.prototype.apptsInMonth = function(date) {
	
	// Declara variable to store matching values
	var rtnAppts = [];

	// Iterate through appointments, add to rtnAppts if matches
	for (var i = 0; i < this.appointments.length; i++) {
		if(date.getMonth() === this.appointments[i].getMonth() &&
			date.getYear() === this.appointments[i].getYear()) {
				rtnAppts.push(this.appointments[i]);
		}
	}

	return rtnAppts;
}

AppointmentBook.prototype.apptsOnDate = function(date) {
	
	// Declara variable to store matching values
	var rtnAppts = [];

	// Iterate through appointments, add to rtnAppts if matches
	for (var i = 0; i < this.appointments.length; i++) {
		if(date.getDate() === this.appointments[i].getDate() &&
			date.getMonth() === this.appointments[i].getMonth() &&
			date.getYear() === this.appointments[i].getYear()) {
				rtnAppts.push(this.appointments[i]);
		}
	}

	return rtnAppts;
}

AppointmentBook.prototype.apptsInRange = function(startDate, endDate) {
	
	// Declara variable to store matching values
	var rtnAppts = [];

	// Iterate through appointments, add to rtnAppts if matches
	for (var i = 0; i < this.appointments.length; i++) {
		if(this.appointments[i].getYear() >= startDate.getYear() && this.appointments[i].getYear() <= endDate.getYear() &&
			this.appointments[i].getMonth() >= startDate.getMonth() && this.appointments[i].getMonth() <= endDate.getMonth() &&
			this.appointments[i].getDate() >= startDate.getDate() && this.appointments[i].getDate() <= endDate.getDate()) {
				rtnAppts.push(this.appointments[i]);
		}
	}

	return rtnAppts;
}

var apptBook = new AppointmentBook();

apptBook.addAppointment(new Appointment("PCS Javascript Class",
									"Portland Code School", 
									new Date(2014, 1, 3, 18, 0, 0, 0),
									["Colin", "David", "Ben"]));

apptBook.addAppointment(new Appointment("Dinner w Missy",
									"Best Resaurant", 
									new Date(2014, 1, 4, 18, 0, 0, 0),
									["Colin", "Missy"]));

apptBook.cancelAppointment(new Date(2014, 1, 4, 18));

console.log("All Appointments:");
apptBook.list();

console.log("Appointments in Febrauary, 2014:");
console.log(apptBook.apptsInMonth(new Date(2014, 4)));
console.log("Appointments on Febrauary 3, 2014:\n")
console.log(apptBook.apptsOnDate(new Date(2014, 4, 3)));
console.log("Appointments on Febrauary 1-4, 2014:");
console.log(apptBook.apptsInRange(new Date(2014, 0, 1), new Date(2014, 1, 1)));



