"use strict"

var shoppingCart = {
  itemNumber: 0,
  inCart: [],
  add: function (obj) {
    obj.itemID = "item" + (this.itemNumber + 1);
    this.inCart.push(obj);
    this.itemNumber += 1;
    return obj.itemID
   },
  remove: function (item, quantity) {
    for (var i = 0; i < this.inCart.length; i++) {
    if (this.inCart[i].itemID === item) {
      this.inCart[i].count = this.inCart[i].count - quantity;
        if (this.inCart[i].count <= 0) {
          this.inCart.splice(i, 1);
        }
        break;
      }
    }
  },
  /*In the following, I had to create an array to list each item so I could return the list
  and not get 'undefined' at end. Didn't know of a better way to do this.
  */
  list: function () {
    var list = [];
    this.inCart.forEach(function (obj, index) {
      list.push(obj.count + ' ' + obj.itemID + ' ' + obj.description);
    })
    return list.join('\n');
  },
  total: function () {
    var price = 0;
    for (var j = 0; j < this.inCart.length; j++) {
      price = price + (this.inCart[j].price * this.inCart[j].count);
    }
    return price;
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