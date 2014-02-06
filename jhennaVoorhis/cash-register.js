var cashRegister = {
  totalMoney: 0,
  add: function (amnt) {
  	this.totalMoney += amnt;
  },
  subtract: function (amnt) {
  	this.totalMoney -= amnt;
  },
  total: function () {
  	return this.totalMoney;
  }
};

cashRegister.add(1.25);
cashRegister.add(3.63);
cashRegister.add(4.99);
cashRegister.subtract(1.15);

console.log("Your total is " + cashRegister.total());
