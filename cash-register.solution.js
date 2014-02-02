var cashRegister = {
  count: 0, 

  add: function add (amount) {
    this.count += amount; 
  }, 

  subtract: function subtract (amount) {
    this.count -= amount; 
  },

  total: function total () {
    return this.count; 
  }
};

cashRegister.add(1.25);
cashRegister.add(3.63);
cashRegister.add(4.99);
cashRegister.subtract(1.15);

console.log("Your total is " + cashRegister.total());


// Copy cash-register.js into your working directory and implement the object. - You're going to create a cash register object. 
// - The cash register object needs to have method to do the following: 
//     + add to the total
//     + subtract from the total
//     + to return the current total. NOTE: **You *must* to keep track of the total within the object, not in a variable outside of the object**