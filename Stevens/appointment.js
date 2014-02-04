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
console.log(newAppointment);

var appointmentBook = {
	calendar: [],
	add: function (meeting) {
		this.calendar.push(meeting);
		return meeting;
	},
/*
	cancel: function (description) {
		var i = -1;

		this.calendar.forEach(function (item, index) {
			if (item.description = description)
				this.calendar.splice(i, 1);
				//i = index;		
		}),

	reschedule: function (date) {
		//insert function here;
	},
*/
	list: function () {
		var allTheMeetings = "";
		this.calendar.forEach(function (item) {
			allTheMeetings += "The " + item.description + " will be on " + item.date + " with " + item.attendees + " attending.\n";
		});
		return allTheMeetings;
	}
		/*
		if (i === -1) 
			throw new Error ("Appointment not found.");
		} else {
		
		}
		*/

	}


appointmentBook.add(new Appointment("second mtg", "out", (2014, 2, 2), ["me", "you"]));
console.log(appointmentBook.calendar);
appointmentBook.add(new Appointment("3rd mtg", "in", (2015, 2, 3), ["all", "everyone"]));
console.log(appointmentBook.list());






