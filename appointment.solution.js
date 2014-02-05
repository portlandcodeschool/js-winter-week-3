function Appointment (description, location, attendees, date) {
  if(!(this instanceof Appointment))
    return new Appointment(description, location, attendees);

  this.description = description;
  this.location = location;
  this.attendees = attendees;
  // allow for a Date object to be passed in to set the appointment date
  // otherwise set the date to right now
  this.date = (date instanceof Date) ? date : new Date();
}

Appointment.prototype.reschedule = function (newDate) {
  /* I put the reschedule method on the Appointment object instead of the
     the appointmentBook because an appointment should probably know how
     to reschedule itself. */
  if (newDate instanceof Date) {
    this.date = newDate;
  }
};

var appointmentBook = {
  idIndex: 0,

  appointmentList: [],

  _indexOf : function (id) {
    // this is a "private" utility method for the other methods to use
    // to get the current index of an appointment with given id
    for (var i = this.appointmentList.length - 1;
         i >= 0 && this.appointmentList[i].id !== id;
         i -= 1);
    // The for-loop above has no body. It exists only to set i to the array
    // index of the appointment we indend to remove. If the item was not
    // found, i will be at -1.
    return i;
  },

  add: function (apt) {
    if (apt instanceof Appointment) {
      apt.id = this.idIndex++; // Set apt.id to the current idIndex and increment idIndex
      this.appointmentList.push(apt);
      return apt.id;
    }
    return -1; // error!
  },

  cancel: function (id) {
    var i = this._indexOf(id);
    if (i === -1) {
      // returning null is a way of saying that the object we were looking for
      // wasn't there.
      return null;
    } else {
      // We return the removed appointment just in case anyone wants it.
      // splice returns an array of the objects removed from the list
      // so we include the [0] to reference the object within the array.
      return this.appointmentList.splice(i, 1)[0];
    }
  },

  getAppointment: function (id) {
    var i = this._indexOf(id);
    if (i === -1) {
      return null;
    } else {
      return this.appointmentList[i];
    }
  },

  // This can be called directly, but is also used by the other getAppointments methods
  getAppointmentsInRange: function (startDate, endDate) {
    var appointments = [];
    this.appointmentList.forEach(function (appointment) {
      if (appointment.date.getTime() >= startDate.getTime() &&
          appointment.date.getTime() <= endDate.getTime()) {
        appointments.push(appointment);
      }
    });

    return appointments;
  },

  getAppointmentsInMonth: function (date) {
    var startDate = new Date(date.getTime());
    var endDate = new Date(date.getTime());

    startDate.setDate(1);
    startDate.setHours(0, 0, 0, 0);

    endDate.setMonth(endDate.getMonth() === 12 ? 1 : endDate.getMonth() + 1);
    endDate.setDate(1);
    endDate.setHours(0, 0, 0, 0);

    return this.getAppointmentsInRange(startDate, endDate);
  },

  getAppointmentsOnDay: function (date) {
    var startDate = date;
    var endDate = new Date(date.getTime() + 86400000);

    startDate.setHours(0, 0, 0, 0);
    endDate.setHours(0, 0, 0, 0);

    return this.getAppointmentsInRange(startDate, endDate);
  }
};

var appt1 = new Appointment("Breakfast at Tiffany's", "Tiffany's", ["You", "Me"], new Date(2014, 1, 14, 9, 30));
var appt2 = new Appointment("You, Me and Dupree", "Whereever", ["You", "Me", "Dupree"], new Date(2014, 1, 20, 20, 0));
var appt3 = new Appointment("Faculty meeting", "Lucky Lab", ["David", "Cris", "Randy", "Alan"], new Date(2014, 1, 11, 12, 30));

var addedAppointments = [];

addedAppointments.push(appointmentBook.add(appt1));
addedAppointments.push(appointmentBook.add(appt2));
addedAppointments.push(appointmentBook.add(appt3));

appointmentBook.cancel(addedAppointments[0]);

console.log(appointmentBook.getAppointmentsInMonth(new Date(2014, 1)));