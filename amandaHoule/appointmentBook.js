/*  Intermediate Assignment

    Make an AppointmentBook class to keep your appointments. It should be able to do the following:
        add a new appointment
        cancel an appointment
        reschedule an existing appointment for a new time
        list all existing appointments
*/


function AppointmentBook (appts, location, date) {   // or function appointmentBook (appt, location, date)
	if(!(this instanceof AppointmentBook))
		return new Appointment();
	this.appts = appts;
	this.location = location;
	this.date = date;
}
	// add function:    Can't we just add a new appointment using the "new" operator?
/*
AppointmentBook.prototype.add = function() {
		thing.appt = this.idk ++;
		this.appts.push(thing);
		return thing.idk;
	},
*/
	// cancel function,
	
AppointmentBook.prototype.cancel = function(whichAppt) {
	var itemIndex = -1;
	this.appts.forEach(function (item, index) {
		if (item.id === item)
			i = index;
	});
	if (idk === -1) {
	return console.log("Entry not found.");	  
	} else if {     // if it's included, delete it
		// ????
		
	},
}
	// rescheule existing appt function,
	reschedule : function(apptID, newDate) {  // need to change to prototype
		// find the Appt and change the date
		// forEach to find apptID IS included in the aBook
		isItHere = 0;
		this.appts.forEach(function (item, index) {
			if (item.id === apptID)
				i = index;
		});
		// if it's not, give error respons
		if (idk === -1) console.log("Entry not found.");
		//    change date to newDate

	},

	// listing function
	list: function () {
		var outputStr = "";
		this.appts.forEach(function (item) {
			outputStr += item.appt + " at " + item.location + " on " + item.date + ".\n" 
		});
		return outputStr;
	}
}

var appt1 = appointmentBook.add({appointment: "private lesson", location: "home", date: "2/5/2014"});