var shoppingCart = {
  total: 0,
  add: function(item){
    shoppingCart.item = item;
  },
  
  remove: function(item, count){
    for (var item in shoppingCart) {
      var obj = shoppingCart[item];
      item.count =- count;
    }
  },
  
  list: function(items){
    for (var item in shoppingCart) {
      var obj = shoppingCart[item];
      return item.count + " X " + item.description;
    }
  },

  total: function(items){
    for (var item in shoppingCart) {
      var obj = shoppingCart[item];
      this.total += shoppingCart.count * shoppingCart.price
    }
    return this.total;
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