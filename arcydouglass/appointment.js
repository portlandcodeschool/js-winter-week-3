//Assignment 06: js-winter-week-3
//Javascript class - Objects
//Arcy Douglass
//January 31, 2014

//cash-register.js


//Part 1
//Appointment constructor
function Appointment (description, location, date, time, attendees){
	if(!(this instanceof Appointment))
        return new Appointment();

  this.description = description;
  this.location = location;
  this.time = time;
  this.attendees = attendees;
  this.id = Math.floor(Math.random() * 100);
  this.date = date;
  //this.date =  new Date();
}

//Class prototype function
Appointment.prototype.reminder = function(appointment){
	console.log('You have an appointment today at ' + appointment.time);
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
		console.log('Appointment added');
		return appointment;
	},
	cancel : function(appointment){

	},
	reschedule : function(appointment){

	},
	list : function(){
		var outputString = "";
		this.calender.forEach(function(item) {
			 outputString += item.date + ' ' + item.time + ' ' + item.description + ' ' + ' at ' + item.location + ' and '
			  + item.attendees + ' will be attending \n';
		});
		return outputString;
	}
}

var everyone = [ 'you', 'me', 'them', 'us', 'all' ];


//Store the schedule in a array as a series of Appointment objects
var schedule = [new Appointment('meeting1', 'here', 'today', 'now', 'everyone' ),
								new Appointment('meeting2', 'there', 'tomorrow', 'later', 'youAndMe')];	


//Load the schedule objects into the appointmentBook wiht the add method
schedule.forEach(function(appointment){
	appointmentBook.add(appointment);
});


//Output to the console all of the Appointment objects in the appointmentBook
console.log(appointmentBook.list());




