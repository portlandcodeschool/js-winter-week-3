// Create a shopping cart such as would be used in an online store.
// These are its requirements:
// It must have an add function that accepts an object containing description, price and item count keys, and returns a uniquely assigned item id.
// It must have a remove function that accepts a unique item id, and a number that represents how many to remove. The function should change the item 
//		count or delete the item altogether as appropriate.
// It must have a list function that returns an array of desciptions, prefixed by "n X ", where n is the number currently in the cart.
// It must have a total function that returns the current total cost of the purchase.


// 



var shoppingCart = {
      itemsInCart: [],

      // I know I would use .push to add the items to shoppingCart.   
      add: function (item) {
            this.itemsInCart.push(item);
      },
      
      //  
      remove: function (item) {
   
      },
      

      list: function (item) {
            var latestCart = [];


},
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

// shoppingCart.remove(item3, 6);
// shoppingCart.remove(item4, 1);

console.log(shoppingCart.list());

/* Should print:
[
'4 X Huggies Little Snugglers Diapers',
'2 X Tylenol Extra Strength Acetaminophen',
'4 X Flents Quiet Please Foam Ear Plugs',
]
*/

//console.log(shoppingCart.total());

// Should print: 169.84

