/*
Example object that should be generated from Appointment constructor function
 var appointment = {
  description: "",
  location: "",
  date: new Date(), // See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
  attendees: []
};
*/

var monthObj = {
	january:0,
	february:1,
	march:2,
	april:3,
	may:4,
	june:5,
	july:6,
	august:7,
	september:8,
	october:9,
	november:10,
	december:11
}

function Appointment (description, location, date, attendees){
	if(!(this instanceof Appointment)){
        return new Appointment();
	}

	this.description = description;
	this.location = location;
	this.date = new Date(date);
	this.attendees = attendees;
}

var appt1 = new Appointment("teeth clean1", "east side", "2014,1,1", "everyone");
var appt2 = new Appointment("teeth clean2", "west side", "2014,1,1", "everyone");
var appt3 = new Appointment("teeth clean3", "north side", "2014,1,1", "everyone");
var appt4 = new Appointment("teeth clean4", "south side", "2014,1,1", "everyone");
var appt5 = new Appointment("teeth clean5", "east side", "2014,2,1", "everyone");
var appt6 = new Appointment("teeth clean6", "west side", "2014,5,1", "everyone");
var appt7 = new Appointment("teeth clean7", "north side", "2014,9,1", "everyone");
var appt8 = new Appointment("teeth clean8", "south side", "2015,6,1", "everyone");
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
			appointment.date = new Date(newTime)
		}

	});	

}

AppointmentBook.prototype.listAll = function() {
	return this.appointments;
}



AppointmentBook.prototype.listDate = function(apptDate){
	var gDate = new Date(apptDate);
	var dateList = [];
	this.appointments.forEach(function (value) {
		
		if(value.date.getTime() === gDate.getTime()){
			dateList.push(value);
		}
	});

	return dateList;
}

AppointmentBook.prototype.listRange = function(dateOne, dateTwo){

	var startDate = new Date(dateOne).getTime();
	var endDate = new Date(dateTwo).getTime();
	var rangeList = [];
	this.appointments.forEach(function(value) {
		if(value.date.getTime()>=startDate && value.date.getTime() <= endDate){
			rangeList.push(value);
		}
	});

	return rangeList;

}

AppointmentBook.prototype.listMonth = function(month){

	var monthLower = month.toLowerCase();
	var numMonth = monthObj[monthLower];
	var monthList = [];
	this.appointments.forEach(function(value){
		if(value.date.getMonth() === numMonth){
			monthList.push(value);
		}
	});
	return monthList;
}

dentistAppt.addApp(appt1);
dentistAppt.addApp(appt2);
dentistAppt.addApp(appt3);
dentistAppt.addApp(appt4);
dentistAppt.addApp(appt5);
dentistAppt.addApp(appt6);
dentistAppt.addApp(appt7);
dentistAppt.addApp(appt8);
dentistAppt.deleteApp(appt2);
dentistAppt.reschedule(appt3,'2014,2,2');
console.log("All appointments");
console.log(dentistAppt.listAll());
console.log("List of appointments for a given date.")
console.log(dentistAppt.listDate('2014,1,1'));
console.log("List of appoinments for a date range");
console.log(dentistAppt.listRange('2014,1,1','2015,1,1'));
console.log("Appointments occuring in a given month");
console.log(dentistAppt.listMonth("September"));