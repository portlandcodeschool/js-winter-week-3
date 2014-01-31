"use strict"

function Appointment (appointment, location, date, attendees) {
  if(!(this instanceof Appointment))
      return new Appointment(appointment, location, date, attendees);
  this.appointment = appointment;
  this.location = location;
  this.date = new Date(date);
  this.attendees = attendees;
  this.id = Math.floor(Math.random()*1000000000);
} 

function AppointmentBook () {
  this.appointments = [];
}

AppointmentBook.prototype.add = function (appointment) {
  this.appointments.push(appointment);
}

AppointmentBook.prototype.cancel = function (appointID) {
  var i = -1;
  this.appointments.forEach(function (appt, index) {
    if (appt.id === appointID)
      i = index;
  });
  if (i === -1) throw new Error("That appointment does not exist!");
  this.appointments.splice(i, 1);
}

AppointmentBook.prototype.reschedule = function (appointID, newDate) {
  var i = -1;
  this.appointments.forEach(function (appt, index) {
    if (appt.id === appointID)
      i = index;
  });
  if (i === -1) throw new Error("That appointment does not exist!");
  this.appointments[i].date = new Date(newDate);
}

AppointmentBook.prototype.list = function () {
  var outputString = "";
  this.appointments.forEach(function (appoint) {
    outputString += "Appointment #" + appoint.id + ": " + appoint.appointment + "; Location: " + appoint.location + "; Date and time: " + appoint.date + "; Attendees: " + appoint.attendees.join(', ') + ".\n"; 
  })
  return outputString
}

var appt1 = new Appointment("Taking out the trash", "Side door", "January 27, 2014, 9:00 pm", ["Andrew", "Autumn"])

//appt2 checking to see if it will still create an instance of Appointment w/o 'new'
var appt2 = Appointment("Going to School", "Front door", "January 31, 2014, 8:30 am", ["Leora", "Will"])

var appt3 = Appointment("Drinking Beer", "At the Computer", "February 1, 2014, 8:30 pm", ["Andrew"])

var apptBook = new AppointmentBook;
apptBook.add(appt1);
apptBook.add(appt2);
apptBook.add(appt3);

//now canceling the "taking out the trash" appt.
apptBook.cancel(apptBook.appointments[0].id);

//now rescheduling the 'beer drinking' appt.
apptBook.reschedule(apptBook.appointments[1].id, "March 12, 2014, 8:00 pm");

//now listing the appointments
console.log(apptBook.list());
