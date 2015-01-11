//Jenna Gretsch
//Assignment # 6, Wed Week 3

function AppointmentBook (description, location, date, attendees) {
   if(!(this instanceof AppointmentBook))
        return new AppointmentBook(description, location, date, attendees);
   this.description = description;
   this.location = location;
   this.date = new Date(date);
   this.attendees = attendees;
}

console.log(new AppointmentBook("drinking beer", "10th and Stark", "2014-02-01 13:24:00", ["Buster","Romeo","Heidi"]));
console.log(AppointmentBook("drinking beer", "10th and Stark", "2014-02-01 13:24:00", ["Buster","Romeo","Heidi"]));
