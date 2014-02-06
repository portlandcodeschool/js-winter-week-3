var shoppingCart = {
  itemArray: [], //an array to hold the items in the cart
  ssn: 0, //unique id
  add: function(item){
  	var thingType = typeof item; //will be used to ensure things added are objects with a description, count, and price
  	if (thingType=== 'object' && item.description!==undefined && item.count!==undefined && item.price !== undefined){
			item.ssn = this.ssn; //assigns unique id and then steps id
  			this.ssn++;
  			this.itemArray.push(item); //adds item to cart
  			
  			//console.log(item.count + "X of " + item.description + " successfully added to your cart!"); //friendly message that item was added with quantity added
  			
  			return item.ssn; //stores the item reference to the unique id given in the item declaration
		} else {
			console.log("That item could not be added to the cart, please double check it is a valid item.");
		}
  },

  remove: function (id, qt) {
  	this.itemArray.forEach(function (object, index, array) {
  		if (object.ssn===id){
  			if (qt >= object.count){ //removes item entirely based on qt given
  				array.splice(index, 1);
  				// console.log(object.description + " was entirely removed from your cart");
  			} else if (qt < object.count && qt > 0){ //removes specified qt
  				object.count -= qt;
  				// console.log(qt + "X of " + object.description + " removed from cart, " + object.count + "X of it remain.");
  			} else {
  				console.log("Could not perform request, please double check that specified item and quantity are valid.");
  			}
  		}
  	});
  },

  list: function (){
  	var listArr = [];
  	this.itemArray.forEach(function (object) { //accesses value of each item in the shopping cart through the values stored in itemArray
  		listArr.push(object.count + " X " + object.description);
  	});
  	return listArr;
  },
  total: function () {
  	var priceTotal = 0;
  	this.itemArray.forEach(function (object){
  		priceTotal += object.count * object.price;
  	})
  	return priceTotal;
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