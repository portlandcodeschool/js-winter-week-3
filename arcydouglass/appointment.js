//Assignment 06: js-winter-week-3
//Javascript class - Objects
//Arcy Douglass
//January 31, 2014

//appointment.js

//Appointment constructor
function Appointment (description, location, date, time, attendees, id){
	if(!(this instanceof Appointment))
        return new Appointment();

  this.description = description;
  this.location = location;
  this.attendees = attendees;
  //this.id = Math.floor(Math.random() * 1000);
  this.id = id;
  this.date =  this.setDate(date, time);
}

//Prototype Functions
//Class prototype function
// Appointment.prototype.reminder = function(appointment){
// 	console.log('You have an appointment today at ' + appointment.time);
// }


//Create a date object with the correct month, day, year, hours and minutes
Appointment.prototype.setDate = function(date, time){
	var dateArray = [];
	var timeArray = [];
	//Split up date string and set variables
	dateArray = date.split('-');
	timeArray = time.split(':');
	var month = dateArray[0];
	var day = dateArray[1];
	var year = dateArray[2];
	var hour = timeArray[0];
	var minute = timeArray[1];

	//Create new date object and set values
	newDate = new Date();
	newDate.setMonth(month);
	newDate.setDate(day);
	newDate.setFullYear(year);
	newDate.setHours(hour);
	newDate.setMinutes(minute);

	return newDate;
}


// //Appointment object
// var appointment = {
//   description: "",
//   location: "",
//   date: new Date(), // See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
//   attendees: []
// };


var appointmentBook = {
	calender : [],
	add : function(appointment){
		this.calender.push(appointment);
		//console.log('Appointment added');
		return appointment;
	},
	cancel : function(appointment){
		var i = -1;
    this.calender.forEach(function (item, index) {     //forEach has automatic arguments of item, index array
      if (item.id === appointment)
        i = index;
    });
    if (i === -1) throw new Error("This appointment is not found in the calender");
    // now this.calender[i] is the appointment we want to cancel
    this.calender.splice(i, 1); // remove this item from the calender
    console.log('Appointment removed');
	},
	reschedule : function(newAppointment){
		var i = -1;
    this.calender.forEach(function (item, index) {     //forEach has automatic arguments of item, index array
      if (item.id === appointment.id)
        i = index;
    });
    if (i === -1) throw new Error("This appointment is not found in the calender");
    // now this.calender[i] is the appointment we want to reschedule
    this.calender[i].appointment = newAppointment;
	},
	list : function(){
		var outputString = '';
		var minutes = "";

		//Output appointment details labels
		console.log('  ' + 'ID' + '\t' + 'Date' + '\t\t' + 'Time' + '\t' + 'Description' + '\t\t' 
								+ 'Location' + '\t\t' + 'Attendees');
		console.log('__________________________________________________________________________________________________________________');

		this.calender.forEach(function(item) {
			//Add the 0 if the minutes are in single digits
			if (item.date.getMinutes() < 10){
				minutes = "0" + item.date.getMinutes();
			} else {
				minutes = item.date.getMinutes();
			}
			
			//Construct the output string of all of the appointment information
			 outputString += '  ' + item.id + '\t' + item.date.getMonth() + "-" + item.date.getDate() + '-' + item.date.getFullYear() + '\t' 
			 	+ item.date.getHours() + ':' + minutes + '\t' + item.description + '\t\t' + item.location + '\t\t\t'
			  + item.attendees + '\n';
		});
		return outputString;
	}
}


//Store the schedule in a array as a series of Appointment objects
var schedule = [new Appointment('meeting1', 'here', '01-21-2014', '12:30', 'everyone', 1 ),
								new Appointment('meeting2', 'there', '02-01-2014', '4:01', 'youAndMe', 2)];	



//Load the schedule objects into the appointmentBook wiht the add method
schedule.forEach(function(appointment){
	appointmentBook.add(appointment);
});


//Output to the console all of the Appointment objects in the appointmentBook
console.log(appointmentBook.list());

//Cancel an appointment
appointmentBook.cancel(2);

//Output remaining appointments
console.log(appointmentBook.list());




