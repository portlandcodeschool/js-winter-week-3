var total = 0;

var cashRegister = {
  starting: 0, 
  add: function (amount) {
  	this.starting += amount;
  },
  subtract: function (amount) {
  	this.starting -= amount;
  },
  total: function () {
  	return this.starting;
  }
};

cashRegister.add(1.25);
cashRegister.add(3.63);
cashRegister.add(4.99);
cashRegister.subtract(1.15);

console.log("Your total is " + cashRegister.total());
