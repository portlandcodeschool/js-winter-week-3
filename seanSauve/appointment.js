// var appointment = {
//   description: "",
//   location: "",
//   date: new Date(), // See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
//   attendees: []
// };

function Appointment (description, location, year, month, day) {
	if(!(this instanceof Appointment)) return new Appointment(description, location, year, month, day);
	this.description = description;
	this.location = location;
	this.date = new Date(year, month-1, day);
	this.id = Math.floor(Math.random() * 1000000000);
}

var appointmentBook = {
	book : [],

	add: function (appointment){
		this.book.push(appointment);
	},

	cancel: function (appointment){
		var i = -1;
		this.book.forEach(function(item, index){
			if (item.id === appointment.id) i = index;
		} )
		if (i === -1) throw new Error("Cannot find appointment!");
		else this.book.splice(i,1);
	},

	reschedule: function (appointment, year, month, day){
		var i = -1;
		var newDate = new Date(year, month-1, day);
		this.book.forEach(function(item, index){
			if (item.id === appointment.id) i = index;
		} );
		if (i === -1) throw new Error("Cannot find appointment!");
		if (!(typeof newDate === "object")) throw new Error("That's not a valid new date!");
		
		this.book[i].date = newDate;
	},

	list: function () {
		console.log("\n\nYour Appointments:");
		this.book.forEach( function (item){
			console.log("\nYour Meeting: " + item.description);
			console.log("Location: " + item.location);
			console.log("Time: " + item.date.toDateString());
		})
	},

	listByDate: function (firstDate, secondDate){
		if (secondDate){
			console.log("\n\n\nIn the Range of dates: ");
			console.log(firstDate.toDateString() + " - " + secondDate.toDateString());
			console.log("You have the following appointments:");
			this.book.forEach(function (item){
				if (item.date.valueOf() >= firstDate.valueOf() && item.date.valueOf() <= secondDate.valueOf()){
					console.log("\nYour Meeting: " + item.description);
					console.log("Location: " + item.location);
					console.log("Time: " + item.date.toDateString());
				}
			});
		}else{
			console.log("\n\nOn the date of: ");
			console.log(firstDate.toDateString());
			console.log("You have the following appointment(s):");
			this.book.forEach(function (item){
				if (item.date.valueOf() === firstDate.valueOf()){
					console.log("\nYour Meeting: " + item.description);
					console.log("Location: " + item.location);
				}
			});
		}
	},

	listByMonth: function (monthDate){
		var justMonth = new Date (monthDate.getFullYear(), monthDate.getMonth());
		console.log("\n\nIn the Month: " + (justMonth.getMonth() + 1) +'/'+ justMonth.getFullYear());
		console.log("You have the following appointments:");
		this.book.forEach(function (item){
			if (item.date.getFullYear() === justMonth.getFullYear() && item.date.getMonth() === justMonth.getMonth()){
				console.log("\nYour Meeting: " + item.description);
				console.log("Location: " + item.location);
				console.log("Time: " + item.date.toDateString());
			} 
					
		})
	}

}
var appt1 = Appointment("meet steve", "Over here", 2014,1,30);
var appt2 = new Appointment("steve again?", "Over there", 2014,2,2);
var appt3 = new Appointment("hate steve", "another place", 2014,2,10);
var appt4 = new Appointment("murder steve", "steves place", 2014,2,17);
var appt5 = new Appointment("bury steve", "steves yard", 2014,2,17);
var appt6 = new Appointment("murder investigation", "police headquarter", 2014,3,2);
var appt7 = new Appointment("murder trial", "court", 2014,3,19);
var appt8 = new Appointment("begin prison sentance", "prison", 2014,3,29);
appointmentBook.add(appt1);
appointmentBook.add(appt2);
appointmentBook.add(appt3);
appointmentBook.add(appt4);
appointmentBook.add(appt5);
appointmentBook.add(appt6);
appointmentBook.add(appt7);
appointmentBook.add(appt8);

appointmentBook.cancel(appt8);
appointmentBook.reschedule(appt7, 2014, 4, 10);
appointmentBook.list();

var newTime = new Date(2014, 1, 17);
var beginRange = new Date (2014, 1, 2);
var endRange = new Date (2014, 2, 19);

appointmentBook.listByDate(newTime);
appointmentBook.listByDate(beginRange, endRange);
appointmentBook.listByMonth(beginRange);



