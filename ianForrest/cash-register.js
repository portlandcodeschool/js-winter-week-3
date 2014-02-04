// JS WINTER 2014, WEEK 3 
// cash-register.js by Ian Forrest

var cashRegister = {
  cost: [],
  add: function (price) {
  	this.cost.push(price);
  	console.log("A " + price + " purchase has just been made.")
  	return;
  },

  subtract: function (price) {
  	this.cost.push(price * -1);
  	console.log("A " + price + " return has just been made.")
  	return;
  },

  total: function () {  
  	var sum = 0
	this.cost.forEach(function (value) {
  	sum += value;
  })
	return sum.toFixed(2);
	},
};

cashRegister.add(1.25);
cashRegister.add(3.63);
cashRegister.add(4.99);
cashRegister.subtract(1.15);

console.log("Your total is " + cashRegister.total() + ".");