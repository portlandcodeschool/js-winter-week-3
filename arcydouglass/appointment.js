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

  //outputArray(this.attendees);
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

	//If date is empty, return todays date
	if ((date === '') || ( time === '')){
		newDate = new Date();
		newDate = newDate.toLocaleDateString();
		//newDate = newDate.toLocaleTimeString();
	}

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


function Contact (firstName, lastName, email, phone, id){
	if(!(this instanceof Contact))
        return new Contact();

	this.firstName = firstName;
	this.lastname = lastName;
	this.email = email;
	this.phone = phone;
	this.id = id;
}


var appointmentBook = {
	calender : [],
	contacts :[],
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
	load : function(contact){
		this.contacts.push(contact);
		//console.log('Contact loaded');
		return contact;
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
  sortAttendees : function(attendees){
    // var attendeeArray = [];
    // var string = '';

    // //console.log(attendees);
    // //outputArray(this.contacts);

    // //Split up and load attendees to attendeeArray
    // attendeeArray = attendees.split(',');

    // //outputArray(attendeeArray);
    // //console.log(attendeeArray.length);
    
    // for (var i = 0; i < attendeeArray.length; i ++){
    //   for (var index = 0; index < this.contacts.length; index++ ){
    //   //console.log(this.attendees);
    //   //console.log(this.contacts[index]);
    //   //console.log(attendeeArray[i]);
    //   //console.log(this.contacts.id + ' ' + attendeeArray[i]);
    //     if (attendeeArray[i] === this.contacts[index]){
    //       console.log('hello');
    //         string += this.contacts.lastName + ' ';
    //     }
    //   }
    // }
    // return string;
  },
	list : function(){
		var outputString = '';
		var minutes = "";
		var persons = "";


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

      //Add names from contacts into the output string
      //persons = appointmentBook.sortAttendees(item.attendees);
			
			//Construct the output string of all of the appointment information
			 outputString += '  ' + item.id + '\t' + item.date.getMonth() + "-" + item.date.getDate() + '-' + item.date.getFullYear() + '\t' 
			 	               + item.date.getHours() + ':' + minutes + '\t' + item.description + '\t\t' + item.location + '\t\t\t'
			                 + item.attendees + '\n';
		});
		return outputString;
	},
  sortDate : function (value){
    var sortArray = [];

    this.calender.forEach(function(item) {
      console.log(item.date);
      if (item.date.getDate() === value){
       sortArray.push(item);
      }
    });
    console.log('Here are all of the appointments  on this ' + value + ' day\n');
    outputArray(sortArray);
  },
  sortRange : function (startingValue, endingValue){
    var sortArray = [];

    this.calender.forEach(function(item) {
      if ((item.date.getDate() >= startingValue) || (item.date.getDate() <= endingValue)){
       sortArray.push(item);
      }
    });
    console.log('\nHere are all of the appointments from ' + startingValue + ' to ' + endingValue +'\n');
    outputArray(sortArray);
  }
}

//Output array
function outputArray(array){
	for (var i = 0; i < array.length; i++){
		console.log(array[i]);
    //console.log("This is index " + i + " with value "+ array[i]);
	}
}


//Store the schedule in a array as a series of Appointment objects
var schedule = [new Appointment('meeting1', 'here', '01-21-2014', '8:30', '1,2', 0 ),
				        new Appointment('meeting3', 'here', '02-04-2014', '12:30', '0,1', 1 ),
				        new Appointment('meeting2', 'there', '02-04-2014', '4:01', '1', 2)];	

var contactList = [new Contact ('John', 'Doe', 'john@aol.com', '555-123-3456', 0),
				           new Contact ('Jane', 'Doe', 'jane@aol.com', '555-789-1234', 1),
				           new Contact ('Joe', 'Doe', 'joe@aol.com', '555-456-7890', 2)];


//Load the schedule objects into the appointmentBook with the add method
schedule.forEach(function(appointment){
	appointmentBook.add(appointment);
});

//Load the contact object into the appointmentBook with the load method
contactList.forEach(function(contact){
	appointmentBook.load(contact);
});

//Output contacts
//outputArray(appointmentBook.contacts);
outputArray(appointmentBook.calender);
//outputArray(attendees);


//Output to the console all of the Appointment objects in the appointmentBook
console.log(appointmentBook.list());

//Cancel an appointment
appointmentBook.cancel(2);

//Output remaining appointments
console.log(appointmentBook.list());

//Output all appointnments on a certain day
appointmentBook.sortDate(4);

//Output all appointment within a certain range
appointmentBook.sortRange(1, 31);



