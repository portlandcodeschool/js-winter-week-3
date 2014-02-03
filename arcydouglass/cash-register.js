//Assignment 05: js-winter-week-3
//Javascript class - Objects
//Arcy Douglass
//January 28, 2014

//cash-register.js


//Part 1
console.log("\nPart 1: ");

var cashRegister = {
  amount: 0,
  add: function (price){
   this.amount += price;
  },
  subtract: function (price){
   this.amount -= price;
  },
  total: function (){
   return this.amount;
  }
};

cashRegister.add(1.25);
cashRegister.add(3.63);
cashRegister.add(4.99);
cashRegister.subtract(1.15);

console.log("Your total is " + cashRegister.total());
