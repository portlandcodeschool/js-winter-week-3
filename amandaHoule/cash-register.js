/*
The cash register object needs to have method to do the following:

    add to the total
    subtract from the total
    to return the current total. NOTE: You must to keep track of the total within the object, not in a variable outside of the object
*/

var cashRegister = {
  currentTotal : 0,
  add : function (amount) {
  	this.currentTotal = (this.currentTotal + amount);
  	return this.currentTotal;
  },
  subtract : function (amount) {
  	this.currentTotal = (this.currentTotal - amount);
  	return this.currentTotal;
  	},
  total : function () {
    return this.currentTotal;
  	console.log(this.currentTotal);  // this is for my own testing
  	}
};

cashRegister.add(1.25);
cashRegister.add(3.63);
cashRegister.add(4.99);
cashRegister.subtract(1.15);

console.log("Your total is " + cashRegister.total());

//  It's calculating ok inside the object and then logging "undefined"  Hint?