var cashRegister = {
  add: function (x) {this.amount += x;},
  subtract: function(x){this.amount -= x;},
  total: function () {return this.amount;},
  amount: 0
};

cashRegister.add(1.25);
cashRegister.add(3.63);
cashRegister.add(4.99);
cashRegister.subtract(1.15);

console.log("Your total is " + cashRegister.total());
