"use strict"

function Appointment (appointment, location, date, attendees) {
  if(!(this instanceof Appointment))
      return new Appointment(appointment, location, date, attendees);
  this.appointment = appointment;
  this.location = location;
  this.date = new Date(date);
  this.attendees = attendees;
} 


var appt1 = new Appointment("Taking out the trash", "Side door", "January 27, 2014, 9:00 pm", ["Andrew", "Autumn"])

//appt2 checking to see if it will still create an instance of Appointment w/o 'new'
var appt2 = Appointment("Going to School", "Front door", "January 31, 2014, 8:30 am", ["Leora", "Will"])

console.log(appt1);
console.log(appt2);