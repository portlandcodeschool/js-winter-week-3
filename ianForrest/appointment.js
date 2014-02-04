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

function AppointmentBook (apptEvent, apptLocation, apptDate, apptAttendees) {
	this.apptEvent = apptEvent;
	this.apptLocation = apptLocation;
	this.apptDate = apptDate;
	this.apptAttendees = apptAttendees;
}

AppointmentBook.prototype.getId = function () {
  this.id = Math.floor(Math.random() * 10000);
  return this.id;
};

AppointmentBook.prototype.reschedule = function (newDate) {
	newDate = this.apptDate.replace(newDate); };

var appointmentMaker = {
	appointments: [],
	itemIdIndex: 0,
  	
  	add: function (thing) {
    thing.id = this.itemIdIndex++;
    this.appointments.push(thing);    },

    cancel: function (eventName) {
	var i = -1;
    this.appointments.forEach(function (item, index) {
    if (eventName = item.apptEvent)
        i = item;
    });
    this.appointments.splice(i, 1);
    },

    reschedule: function (eventName, eventTime) {
    var i = -1;
	this.appointments.forEach(function (item, index) {
		if (eventName === item.apptEvent) {
			item.apptDate = eventTime;
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
	"Feb. 1, 10 a.m.", 
	"Ian"
	));
futsal = appointmentMaker.add(new AppointmentBook(
	"Futsal", 
	"Rose City Futsal", 
	"Feb. 4, 9:20 p.m.", 
	"Ian, Erin, Daner, Alex, Renee"
	));
bikepubcrawl = appointmentMaker.add(new AppointmentBook(
	"Bike Pub Crawl", 
	"Burnside Brewing", 
	"Feb. 7, 6 p.m.", 
	"Glen, Ryan, Craig, Ian"
	));

appointmentMaker.cancel(homework);
appointmentMaker.reschedule("Bike Pub Crawl", "Feb. 8, 5 p.m.")
appointmentMaker.list();


