// The cash register object needs to have method to do the following:
// add to the total
// subtract from the total
// to return the current total. NOTE: You must to keep track of the total within the object, not in a variable outside of the object

var cashRegister = {
	balance:0,
	add: function (amount) {
		this.balance += amount;
	},
	subtract: function (amount) {
		this.balance -= amount;
	},
};

cashRegister.add(1.25);
cashRegister.add(3.63);
cashRegister.add(4.99);
cashRegister.subtract(1.15);

console.log("Your total is $" + cashRegister.balance) + ".";

