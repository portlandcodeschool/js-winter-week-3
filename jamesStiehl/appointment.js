/*
Example object that should be generated from Appointment constructor function
 var appointment = {
  description: "",
  location: "",
  date: new Date(), // See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
  attendees: []
};
*/

function Appointment (description, location, date, attendees){
	if(!(this instanceof Appointment)){
        return new Appointment();
	}

	this.description = description;
	this.location = location;
	this.date = new Date(date);
	this.attendees = attendees;
}

var appt1 = new Appointment("teeth clean", "east side", "2014,1,1", "everyone");
var appt2 = new Appointment("teeth clean", "west side", "2014,1,1", "everyone");
var appt3 = new Appointment("teeth clean", "north side", "2014,1,1", "everyone");
var appt4 = new Appointment("teeth clean", "south side", "2014,1,1", "everyone");
//--------------------------------------------------------------------------------------

var dentistAppt = new AppointmentBook();

function AppointmentBook() {  
	this.appointments = [];
}

AppointmentBook.prototype.addApp = function (appointment) {
	this.appointments.push(appointment);
}

AppointmentBook.prototype.deleteApp = function  (appointment) {
	var appIndex;

	this.appointments.forEach(function (value, index){	
		if (value === appointment){
			appIndex = index;
		}

	});
	this.appointments.splice(appIndex,1);
}

AppointmentBook.prototype.reschedule = function (appointment, newTime) {

	this.appointments.forEach(function (value, index){	
		if (value === appointment){
			appointment.date = newTime
		}

	});	

}

AppointmentBook.prototype.listAll = function() {
	console.log(this.appointments);
}



AppointmentBook.prototype.listDate = function(){

	console.log(this.appointments[0].date.getMonth());

}

AppointmentBook.prototype.listRange = function(){}

AppointmentBook.prototype.listMonth = function(month){

}

dentistAppt.addApp(appt1);
dentistAppt.addApp(appt2);
dentistAppt.addApp(appt3);
dentistAppt.addApp(appt4);
dentistAppt.deleteApp(appt2);
dentistAppt.reschedule(appt3,'2014,2,2');
dentistAppt.listAll();
dentistAppt.listDate();