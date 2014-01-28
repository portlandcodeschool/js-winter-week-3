var shoppingCart = {
  itemArray: [], //an array to hold the items in the cart
  priceTotal: 0, //keeps track of total price of items in cart
  add: function(item){
  	var thingType = typeof item; //will be used to ensure things added are objects with a description, count, and price
  	if (thingType=== 'object' && item.description!==undefined && item.count!==undefined && item.price !== undefined){
			this.itemArray.push(item); //adds item to cart
  			this.priceTotal += item.count * item.price; //adds cost of item(s) depending on quantity
  			console.log(item.count + "X of " + item.description + " successfully added to your cart!"); //friendly message that item was added with quantity added
  			return item; //stores the item reference to the unique id given in the item declaration
		};
  },
  remove: function(id, qt){
  	var index = this.itemArray.indexOf(id); //locates the item within the cart
  	if (index >= 0 && qt >= id.count){ //if the item is in the cart and more than or exactly the amount of the item in the cart is removed, will remove whole item from cart
			this.priceTotal -= id.count * id.price;
			this.itemArray.splice(index, 1);
			console.log(id.description + " was entirely removed from your cart");
		} else if (index >= 0 && qt < id.count){ //if item is in cart and don't want to remove all of it, adjusts price and remaining quantity according to how many want to be removed
			this.priceTotal -= qt * id.price;
			id.count -= qt;
			console.log(qt + "X of " + id.description + " removed from cart, " + id.count + "X of it remain.");
		} else { //if item is not in cart at all gives friendly message to that effect
			console.log("I'm sorry, that item does not appear to be in your cart so it cannot be removed.");
		}
  },
  list: function (){
  	var listArr = [];
  	this.itemArray.forEach(function (object) { //accesses value of each item in the shopping cart through the values stored in itemArray
  		listArr.push(object.count + " X " + object.description);
  	});
  	return listArr;
  },
  total: function () {
  	return this.priceTotal;
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

//  Should print:
// [
// '4 X Huggies Little Snugglers Diapers',
// '2 X Tylenol Extra Strength Acetaminophen',
// '4 X Flents Quiet Please Foam Ear Plugs',
// ]


console.log(shoppingCart.total());

// // Should print: 169.84