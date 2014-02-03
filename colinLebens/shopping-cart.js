var shoppingCart = {
	// implement me!

	// Use array to include a plurality of objects, each corresponding to an item
	cartItems: [],
	  
	// Use a serial number that increments every time a new item is added
	// Make sure it is is delineated from the index of the array
	// to make sure that things don't get wonky when items are removed
	curSerialCounter: 0, 

	// Add object and assign item ID
	// Assumes that each .add creates a NEW item and does not add to orders
	// Because, e.g., unique items could potentially have similar descriptions 
	// or prices
	add: function(obj) {
	  	obj.id = this.curSerialCounter; // Use serial counter as id
	  	this.curSerialCounter++; 			// Increment serial counter on every .add  
		this.cartItems.push(obj);		// Add obj to the cartItems
		return obj.id;
	},

	// Search to find produce with matching itemId
	//	- remove product if amount >= cartItem.count
	//	- reduce count if amount < cartItem.count
  	
  	remove: function(itemId, amount) {
	  	// Traverse array of cartItems. If the unique itemId is found
	  	for(var i = 0; i < this.cartItems.length; i++) {
	  		
	  		// If item is found, determine whether amount >= cartItem.count
	  		if (itemId === this.cartItems[i].id) {

	  			if (amount >= this.cartItems[i].count) {
	  				this.cartItems.splice(i, 1);
	  			} else if (amount < this.cartItems[i].count) {
	  				this.cartItems[i].count-= amount;
	  			}

	  			// Stop iterating when unique id found
	  			return; 					
	  		}
	  	}

		// Only reached if itemId not found -> could insert error / warning
	},

  	list: function() {
  		var returnArray = [];
  		this.cartItems.forEach( function(curObj) {
  			returnArray.push(curObj.count + " X " + curObj.description);
  		});
  		return returnArray;
  	},

	total: function() {
		var totalCost = 0;

  		this.cartItems.forEach( function(curObj) {
  			totalCost += curObj.price * curObj.count;
	  	});

	  	return totalCost;
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