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

AppointmentBook.prototype.searchDate = function (search) {
  var searchResults = [];
  var searchDate = new Date(search);
  this.appointments.forEach(function (appt, index) {
    if (appt.date.getDate() === searchDate.getDate() && appt.date.getMonth() === searchDate.getMonth() && appt.date.getFullYear() === searchDate.getFullYear())
      searchResults.push(appt);
  })
  return searchResults;
}

AppointmentBook.prototype.searchDateRange = function (start, end) {
  var searchResults = [];
  var startDate = new Date(start);
  var endDate = new Date(end)
  this.appointments.forEach(function (appt, index) {
    if (appt.date >= startDate && appt.date <= endDate)
      searchResults.push(appt);
  })
  return searchResults;
}

AppointmentBook.prototype.searchMonth = function (search) {
  var searchResults = [];
  var searchDate = new Date(search);
  this.appointments.forEach(function (appt, index) {
    if (appt.date.getMonth() === searchDate.getMonth() && appt.date.getFullYear() === searchDate.getFullYear())
      searchResults.push(appt);
  })
  return searchResults;
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

// adding some more appointments

var moreAppointments = [new Appointment("JavaScript Class 1", "Burnside Digital", "February 3, 2014, 6:00 pm", ["Andrew", "Everybody else in JS class"]),
                        new Appointment("JavaScript Class 2", "Burnside Digital", "February 5, 2014, 6:00 pm", ["Andrew", "Everybody else in JS class"]),
                        new Appointment("Tour with Crowd Compass", "Crowd Compass Offices, 2505 SE 11th Ave. suite 300", "February 7, 2014, 12:00 pm", ["Andrew", "Everybody else in fall PCS"]),
                        new Appointment("Raking the Leaves", "Front Yard", "February 21, 2014, 5:00 pm", ["Andrew", "Autumn", "Leora", "Will"])]

moreAppointments.forEach(function (appt) {
  apptBook.add(appt);
});


//testing the single date search
console.log(apptBook.searchDate('02/03/2014'))

//testing the date range search
console.log(apptBook.searchDateRange('01/01/2014', 'January 31, 2014, 10:00 pm'));

//testing the month search
console.log(apptBook.searchMonth('February 2014'));

