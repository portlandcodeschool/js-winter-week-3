/*var appointment = {
  description: "",
  location: "",
  date: new Date(), // See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
  attendees: []
};
*/

var Appointment = function (description, location, date, attendees) {
	this.description = description;
	this.location = location;
	this.date = new Date();
	this.attendees = attendees;
	if(!(this instanceof Appointment))
        return new Appointment();
}

var newAppointment = new Appointment("first mtg", "home", (2014, 1, 1), ["me", "myself", "i"] );
//console.log(newAppointment);

var AppointmentBook = {
	calendar: [],
	add: function (meeting) {
		this.calendar.push(meeting);
		return meeting;
	},

	cancel: function (description) {
		var i = -1;

		this.calendar.forEach(function (item, index) {
			if (item.description === description)
				i = index;
		});

		if (i === -1) throw new Error ("Meeting not found!");

		if (this.calendar[i].description === description) {
			this.calendar.splice(i, 1);
		}	
	},

	reschedule: function (description, location) {
		var i = -1;

		this.calendar.forEach(function (item, index) {
			if (item.description === description)
				i = index;
		});

		if (i === -1) throw new Error ("That meeting doesn't exist!  Schedule a new meeting!");

		if(this.calendar[i].description === description) {
			this.calendar[i].location = location;
		}
		//insert function here;
	},

	list: function () {
		var allTheMeetings = "";
		this.calendar.forEach(function (item) {
			allTheMeetings += "The " + item.description + " will be on " + item.date + " at " + item.location + " with " + item.attendees + " attending.\n";
		});
		return allTheMeetings;
	}
		

	}


AppointmentBook.add(new Appointment("second mtg", "out", (2014, 2, 2), ["me", "you"]));
AppointmentBook.add(new Appointment("3rd mtg", "in", (2015, 2, 3), ["all", "everyone"]));
AppointmentBook.cancel("second mtg");
AppointmentBook.add(new Appointment("mtg 4", "office", (2014, 5, 6), ["Abby", "Adeline"]));
console.log(AppointmentBook.list());
AppointmentBook.reschedule("3rd mtg", "Texas");
console.log(AppointmentBook.list());








