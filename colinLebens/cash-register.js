var cashRegister = {
  // implement me!

  totalValue: 0,

  add: function (amount) {
  	this.totalValue += amount; 
  },

  subtract: function (amount) {
  	this.totalValue -= amount;
  },

  total: function () {
  	return this.totalValue;
  }

};

cashRegister.add(1.25);
cashRegister.add(3.63);
cashRegister.add(4.99);
cashRegister.subtract(1.15);

console.log("Your total is " + cashRegister.total());
