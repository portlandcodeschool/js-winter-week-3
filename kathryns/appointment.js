

// Advanced Assignment

// Dig into the functionality of Javascript's Date object. Add the following abilities to your AppointmentBook:
// return a list of all appointments for a given date
// return a list of all appointments for a range of dates
// return a list of all appointments for a given month
// These functions should return an array of Appointment objects.

// var appointment = {
//   description: "",
//   location: "",
//   date: new Date(), // See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
//   attendees: []
// };

//Appointment constructor defining new appointment object
function Appointment (apptdescription, location, date, attendees) {
  this.apptdescription = apptdescription;
  this.location = location;
  this.date = new Date(date);
  this.attendees = attendees;
  this.id = Math.floor(Math.random() * 1000);
  if(!(this instanceof Appointment))
        return new Appointment();
}

//Assigns appointment object as an array in order to add additional appointments
function AppointmentBook () {
  this.appointments = [];
}

//Adds new appointment to appointmentbook
AppointmentBook.prototype.add = function (appointment) {
  this.appointments.push(appointment);
};

//Cancels appointment
AppointmentBook.prototype.cancel = function (apptID) {
  var i = 0;
    this.appointments.forEach(function (item, index) {
      if(item.id === apptID.id)
        i = index;
    });
    var index = this.appointments.indexOf(apptID);
      if (index >= 0) {
      this.appointments.splice(index, 1);
      }
};

//Reschedules an appointment
//I haven't been able to get my reschedule to work, I don't appear to be referencing my appointments object
AppointmentBook.prototype.reschedule = function (appt,date,newDate) {
    var i = 0;
    this.appointments.forEach(function (item, index) {
      // console.log(appt);
      if(item.id === appt.id)
        i = index;
    });
    var index = this.appointments.indexOf(appt);
      if (index >= 0) {
      this.appointments[i].date = newDate;
      console.log(date + appointments[i] + newDate);
      }
    //this is a test to see what I'm referencing, but it appears that I'm not referencing the right object
    //Have any hints?
};

//Lists existing appointments
AppointmentBook.prototype.list = function () {
      this.appointments.forEach(function (appointment) {
        console.log(appointment.id + ': ' + appointment.apptdescription + ' at ' + appointment.location + ' on ' + appointment.date + ' with ' + appointment.attendees + ". ");
      });
};

//Lists appointments on specific date or date range
AppointmentBook.prototype.listByDates = function (beginDate, endDate) {

};


//Lists appointments during specified month
AppointmentBook.prototype.listByMonth = function (month) {

};

var appointmentBook = new AppointmentBook(); 

var appointments = [ 
  new Appointment("Girl's Night", "Coalition", "February 8, 2014 09:00 pm", ["Andrea", "Lauren"]),
  new Appointment("Brunch", "Broeder", "February 9, 2014 10:00 am", ["Todd"]),
  new Appointment("Snowboarding", "Meadows", "February 15, 2014, 8:00 am", ["Barnes"]),
  new Appointment("Wine and Cheese Night", "Wine Up on Williams", "February 28, 2014, 6:00 pm", ["Kristen"]),
  new Appointment("JS Class", "Burnside Digital", "February 5, 2014, 6:00 pm", ["JS Class"]),
  new Appointment("UX Meetup", "PDX", "March 10, 2014, 6:00 pm", ["Peeps"]),
  new Appointment("Coffee", "Stumptown", "March 28, 2014, 8:00 am", ["Jason"])
];

//Adds new appointments to appointmentBook
appointments.forEach(function (appt) {
  appointmentBook.add(appt);
});

//Cancelling third appointment
appointmentBook.cancel(appointments[3]);
appointmentBook.cancel(appointments[6]);

//Reschedule 2nd appointment
appointmentBook.reschedule(appointments[1],"February 8, 2014 09:00 pm","March 10, 2014, 10:00 am");

//List appointments
appointmentBook.list();

//Lists appointments on a given date

//Lists appointments for a date range

//Lists of appointments for a given month
