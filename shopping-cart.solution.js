function Order (description, count, price) {
  this.description = description;
  this.count = count;
  this.price = price;
  this.id = Math.floor(Math.random() * 1000000000);
}

Order.prototype.cost = function () {
  return this.count * this.price;
}

var shoppingCart = {
  stuff: [],
  add: function (thing) {
    this.stuff.push(thing);
    return thing;
  },
  remove: function (order, removeHowMany) {
    var i = -1;
    this.stuff.forEach(function (item, index) {
      if (item.id === order.id)
        i = index;
    });
    if (i === -1) throw new Error("Item not found in shopping cart!");
    // now this.stuff[i] is the item we want to remove

    if (this.stuff[i].count <= removeHowMany) {
      this.stuff.splice(i, 1); // remove this item from the shopping cart!
    } else {
      this.stuff[i].count -= removeHowMany;
    }
  },
  list: function () {
    var outputStr = "";
    this.stuff.forEach(function (order) {
      outputStr += order.count + ' X ' + order.description + " at " + order.price + " each.\n"
    });
    return outputStr;
  },
  total: function () {
    var sum = 0;
    this.stuff.forEach(function (order) {
      sum += order.cost();
    });
    return sum;
  }
};

var orders = [new Order("Huggies Little Snugglers Diapers", 4, 19.77),
              new Order("Tylenol Extra Strength Acetaminophen", 2, 22.38),
              new Order("Flents Quiet Please Foam Ear Plugs", 10, 11.50),
              new Order("Monsters Eat Whiny Children", 1, 11.07)];

orders.forEach(function (order) {
  shoppingCart.add(order);
});

shoppingCart.remove(orders[2], 6);
shoppingCart.remove(orders[3], 1);

console.log(shoppingCart.list());

/* Should print:
[
'4 X Huggies Little Snugglers Diapers',
'2 X Tylenol Extra Strength Acetaminophen',
'4 X Flents Quiet Please Foam Ear Plugs',
]
*/

console.log(shoppingCart.total());

// Should print: 169.84