//Appointment constructor defining new appointment object
function Appointment (apptdescription, location, date, attendees) {
  this.apptdescription = apptdescription;
  this.location = location;
  // this.date = new Date(date);
  this.date = (date instanceof Date) ? date : new Date();
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
      }
};

//Lists existing appointments
AppointmentBook.prototype.list = function () {
      this.appointments.forEach(function (appointment) {
        console.log(appointment.id + ': ' + appointment.apptdescription + ' at ' + appointment.location + ' on ' + appointment.date + ' with ' + appointment.attendees + ". ");
      });
};

//Lists an appointment on specific date
AppointmentBook.prototype.listByDate = function (day, month) {
    var listDuringDate = [];
  this.appointments.forEach(function (appt) {
    if (appt.date.getDate() === day.getDate() && appt.date.getMonth() === month.getMonth())
      listDuringDate.push(appt);
  });
  return listDuringDate;
};

//Lists appointments on specific date or date range
AppointmentBook.prototype.listByDates = function (beginDate, endDate) {
  var listOfAppointments = [];
  this.appointments.forEach(function (appt) {
    if (appt.date.getTime() >= beginDate.getTime() && appt.date.getTime() <= endDate.getTime() )
      listOfAppointments.push(appt);
  });
  return listOfAppointments;
};


//Lists appointments during specified month
AppointmentBook.prototype.listByMonth = function (month) {
    var listDuringMonth = [];
  this.appointments.forEach(function (appt) {
    if (appt.date.getMonth() === month.getMonth())
      listDuringMonth.push(appt);
  });
  return listDuringMonth;
};

var appointmentBook = new AppointmentBook(); 

var appointments = [ 
  new Appointment("Girl's Night", "Coalition", new Date(2014, 2, 12, 19, 0), ["Andrea", "Lauren"]),
  new Appointment("Brunch", "Broeder", new Date(2014, 2, 15, 9, 30), ["Todd"]),
  new Appointment("Snowboarding", "Meadows", new Date(2014, 2, 22, 9, 30), ["Barnes"]),
  new Appointment("Wine and Cheese Night", "Wine Up on Williams", new Date(2014, 3, 15, 19, 30), ["Kristen"]),
  new Appointment("JS Class", "Burnside Digital", new Date(2014, 2, 12, 18, 00), ["JS Class"]),
  new Appointment("UX Meetup", "PDX", new Date(2014, 2, 20, 9, 30), ["Peeps"]),
  new Appointment("Coffee", "Stumptown", new Date(2014, 3, 2, 9, 30), ["Jason"])
];

//Adds new appointments to appointmentBook
appointments.forEach(function (appt) {
  appointmentBook.add(appt);
});

//Cancelling third appointment
appointmentBook.cancel(appointments[3]);
appointmentBook.cancel(appointments[6]);

//Reschedule 2nd appointment
appointmentBook.reschedule(appointments[1],new Date(2014, 1, 14, 9, 30),new Date(2014, 1, 14, 9, 30));

//List appointments
appointmentBook.list();

//Lists appointments on a given date
//The value returned by getMonth is an integer between 0 and 11. 0 corresponds to January, 1 to February, and so on.
console.log(appointmentBook.listByDate(new Date(2014, 2, 12), new Date(2014, 2)));

//Lists appointments for a date range
console.log(appointmentBook.listByDates(new Date(2014, 1, 14, 9, 30), new Date(2014, 3, 14, 9, 30)));

//Lists of appointments for a given month
//The value returned by getMonth is an integer between 0 and 11. 0 corresponds to January, 1 to February, and so on.
console.log(appointmentBook.listByMonth(new Date(2014, 2)));

