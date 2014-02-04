var cashRegister = {
  balance: 0,
  add: function (num) {
    this.balance = +(num + this.balance).toFixed(2);
    return this.balance;
  },
  subtract: function (num) {
    this.balance = +(this.balance - num).toFixed(2);
    return this.balance;
  },
  total: function () {
    return this.balance;
  }
};

cashRegister.add(1.25);
cashRegister.add(3.63);
cashRegister.add(4.99);
cashRegister.subtract(1.15);

console.log("Your total is " + cashRegister.total());
