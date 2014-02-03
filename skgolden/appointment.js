function Appointment (description, location, date, attendees) {
  if(!(this instanceof Appointment))
  	return new Appointment(description, location, date, attendees);

  this.description = description;
  this.location = location;
  this.date = new Date(date);
  this.attendees = attendees;
  this.id = Math.floor(Math.random()*100);
}

function AppointmentBook () {
  this.appts = [];
}

function findAppt (thisAppt, appointmentBook) {
	var i = -1;
	appointmentBook.forEach(function (appt, index) {
	if (appt.id === thisAppt.id)
		i = index;
	});

	if (i === -1) throw new Error("Appointment not found in Appointment Book!");

	return i;
}

AppointmentBook.prototype.add = function (appt) {
  this.appts.push(appt);
}

AppointmentBook.prototype.cancel = function (apptToCancel) {
	var i = findAppt(apptToCancel, this.appts);
	this.appts.splice(i, 1);
}

AppointmentBook.prototype.reschedule = function(apptToEdit, newDate) {
	var i = findAppt(apptToEdit, this.appts);
	this.appts[i].date = new Date(newDate);

}

AppointmentBook.prototype.list = function () {
	var outputString = "Your Appointments:\n\n";
	this.appts.forEach(function (appt, index) {
		outputString += "Appointment: " + appt.description + "\n\tWhere: " + appt.location + "\n\tWhen: " + appt.date.toLocaleDateString("en") + " " + appt.date.toLocaleTimeString("en") + "\n\tAttendees: " + appt.attendees.join(', ') + "\n"; 
	});
	
	return outputString;
}

//create our appointments
var appt1 = new Appointment("drink some beer", "Base Camp", "2014-02-01 12:30:00", ["sandra", "Jade"]);
var appt2 = Appointment("drink some wine", "Home", "2014-02-01 15:30:00", ["sandra", "Jade"]);
var appt3 = new Appointment("feed the dog", "Home", "2014-02-01 17:00:00", ["sandra", "Biko"]);

//create our appointment book
var apptBook = new AppointmentBook;

//add our appointments
apptBook.add(appt1);
apptBook.add(appt2);
apptBook.add(appt3);

//reschedule wine
apptBook.reschedule(appt2, "2014-02-01 16:30:00");

//cancel beer
apptBook.cancel(appt1);

//list out our appointments
console.log(apptBook.list());