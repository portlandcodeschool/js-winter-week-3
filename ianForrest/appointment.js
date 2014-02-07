// BASIC
 function Appointment (description, location, date, attendees) {
    this.description = description;
    this.location = location;
    this.date = date;
    this.attendees = attendees;

    if(!(this instanceof Appointment))
        return new Appointment();
  }


// INTERMEDIATE
// Make an AppointmentBook class to keep your appointments. It should be able to do the following:
// add a new appointment
// cancel an appointment
// reschedule an existing appointment for a new time
// list all existing appointments

function AppointmentBook (apptEvent, apptLocation, year, month, day, apptAttendees) {
	this.apptEvent = apptEvent;
	this.apptLocation = apptLocation;
	this.apptDate = new Date(year, month, day);
	this.apptAttendees = apptAttendees;
}

var appointmentMaker = {
	appointments: [],
	
  	add: function (thing) {
    this.appointments.push(thing);    },

    cancel: function (eventName) {
	var i = -1;
    this.appointments.forEach(function (item, index) {
    if (eventName = item.apptEvent)
        i = item;
    });
    this.appointments.splice(i, 1);
    },

    reschedule: function (eventName, eventYear, eventMonth, eventDay) {
	this.appointments.forEach(function (item, index) {
		if (eventName === item.apptEvent) {
			item.apptDate = new Date(eventYear, eventMonth, eventDay);
		} 
		});
	},

	list: function () {
		var appointmentListings = "";
		this.appointments.forEach(function (item) {
		console.log(item.apptEvent + " is scheduled for " + item.apptDate + " at " + item.apptLocation + " with the following people attending: " + item.apptAttendees + " \n ");
	}); }, 
};



homework = appointmentMaker.add(new AppointmentBook(
	"Homework", 
	"Albina Press", 
	2014, 1, 3, 
	"Ian"
	));
futsal = appointmentMaker.add(new AppointmentBook(
	"Futsal", 
	"Rose City Futsal", 
	2014, 1, 4, 
	"Ian, Erin, Daner, Alex, Renee"
	));
bikepubcrawl = appointmentMaker.add(new AppointmentBook(
	"Bike Pub Crawl", 
	"Burnside Brewing", 
	2014, 1, 7,
	"Glen, Ryan, Craig, Ian"
	));

appointmentMaker.cancel(homework);
appointmentMaker.reschedule("Bike Pub Crawl", 2014, 1, 8)
appointmentMaker.list();


