// Javascript 2014 - amanda houle
// Week 3, Wednesday Homework - Basic
/*
        Copy appointment.js into your working directory. You're going to create an appointment constructor function
There's a basic appointment object defined in appointment.js to show you what properties an appointment should have. 
You don't need to keep the object itself. 

        Make a constructor function called Appointment that can be called with the new operator.
        Add the following bit of code to the constructor so that it will still work if someone forgets to 
        the new operator

if(!(this instanceof Appointment))
        return new Appointment();

var appointment = {
  description: "",
  location: "",
  date: new Date(), // See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
  attendees: []
};
*/
function Appointment (description, location, date, attendees) {     //constructor function
	if(!(this instanceof Appointment))   // need to look this up
        return new Appointment();

    this.description = description;
	this.location = location;
	this.date = new Date();
	this.attendees = attendees;
//	var people = this.attendees.push(); 
}

//Appointment.prototype.people = function () {  // Do you want to create a function using
//	return this.attendees.push();				// the elements of your object?  no
//}

var februaryAppts = [new Appointment("group", "home", 4/5/2014, ["Meg", "Greg", "Savannah"]),
					 new Appointment("semi_private", "home", 4/7/2014, ["Carrie" , "Winnie"]),
					 new Appointment("private", "away", 4/7/2014, ["Sophie"])]

console.log(februaryAppts)

// the names of "attendees" are not being input 