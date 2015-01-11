function Appointment (description, location, date, attendees){
  if(!(this instanceof Appointment))
        return new Appointment();
  this.description = description
  this.location = location
  this.date = new Date(date)
  this.attendees = attendees
};

appt1 = new Appointment ("Proctologist", "123 Rear Ave", "02/20/2014", ["Dr. Ramm", "Paul Ogden"]);

var AppointmentBook = {
  appointments: [],

  new: function(appointment){
    this.appointments.push(appointment);
    return appointment;
  },

  cancel: function (){
    
  },

  reschedule: function (){

  },

  list: function (){

  }
}
