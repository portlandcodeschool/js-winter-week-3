var shoppingCart = {
  // implement me!
  cart: [],
  itemIdIndex: 0,
  add: function (thing) {
			if (thing) {
			this.cart.push(thing);
			}
      return thing;
		}
  ,
  remove: function (thing, removeHowMany) {
    var i = -1;

    this.cart.forEach(function (item, index) {
      if(item === thing)
        i = index;
    });
        if (i === -1) throw new Error("Item not found in shopping cart!");
        //now this.stuff[i] is the item we want to remove

        if (this.cart[i].count <= removeHowMany) {
          this.cart.splice(i, 1); //remove this item from the shopping cart!
        } else {
          this.cart[i].count -= removeHowMany;
        }
      }
  ,
  //Count shows as undefined. Is this because it's declared outside of the object? How do I reference the varialbe
  //stored outside the object?
  list: function () {
        var outputStr = "";

  			this.cart.forEach(function (item) {
  				outputStr += item.count + ' x ' + item.description + ' at ' + item.price + ' each. '
  			});
        return outputStr
  		},

  total: function () {
    var sum = 0;
      this.cart.forEach(function (item) {
      sum += item.count * item.price;
    });
      return sum;
  }
};

var item1 = shoppingCart.add({description: "Huggies Little Snugglers Diapers",
                              count: 4,
                              price: 19.77});

var item2 = shoppingCart.add({description: "Tylenol Extra Strength Acetaminophen",
                              count: 2,
                              price: 22.38});

var item3 = shoppingCart.add({description: "Flents Quiet Please Foam Ear Plugs",
                              count: 10,
                              price: 11.50});

var item4 = shoppingCart.add({description: "Monsters Eat Whiny Children",
                              count: 1,
                              price: 11.07});

shoppingCart.remove(item3, 6);
shoppingCart.remove(item4, 1);


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