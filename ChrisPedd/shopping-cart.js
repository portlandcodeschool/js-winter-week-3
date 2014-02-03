var shoppingCart = {
	cart: [],
	grandTotal: 0,
	testTotal: 0,
	
	add: function (itemName, itemCount) {
		//search products array, add item to the cart
		for (i=0; i<products.length; i++) {
		     if (products[i].name == itemName) {
		        this.cart.push(products[i]);      
		     }
		}
		//update quantity once in cart
		for (i=0; i<this.cart.length; i++) {
		     if (this.cart[i].name == itemName) {
		        this.cart[i].subCount += itemCount;
			    this.testTotal += this.cart[i].price * this.cart[i].subCount;
			    console.log("++Added " + itemCount + " X " + this.cart[i].description.substring(0,20) + "... to the shopping cart++");
		     }
		}
	},
	remove: function (itemName, itemCount) {
		for (i=0; i<this.cart.length; i++) {
		    if (this.cart[i].name == itemName) {
		        this.cart[i].subCount -= itemCount;
		        this.testTotal -= this.cart[i].price * this.cart[i].subCount;
		        if (this.cart[i].subCount < 0 ) throw new Error("nope.jpg");
		        console.log("--Removed " + itemCount + " X " + this.cart[i].description.substring(0,20) + "... from the shopping cart--");
		        
		    }
		    if(this.cart[i].subCount === 0 ) this.cart.splice(i,1);
	   }
	},
	list: function () {
		console.log("\n--- Shopping Cart Contents:");
		this.cart.forEach(function (thing) {
			console.log (thing.subCount + " X " + thing.description);
		});
	},
	total: function () {
		var subTotal = 0;
		this.cart.forEach(function (thing) {
			//debugging line to test for proper item checks 
			//console.log(thing.subCount + "|" + thing.price);
			subTotal += thing.price * thing.subCount;
		});
		this.grandTotal += subTotal;
		console.log("\n--- Grand Total:\n" + this.grandTotal);
	},
};

products = [
		{
		name: "item1",
		description: "Huggies Much Doge Diapers",
		price: 19.77,
		subCount: 0,
		},
	    {
	    name: "item2",
		description: "Tylenol Extra Strength Methamphetamines",
		price: 22.38,
		subCount: 0,
		},
		{
		name: "item3",
		description: "Flents Easy Listening Jazzy Foam Ear Plugs",
	    price: 11.50,
	    subCount: 0,
		},
		{
		name: "item4",
		description: "Monsters Eat Whiny Children for Breakfast",
	    price: 11.07,
	    subCount: 0,
		},
];


console.log("\n*** WELCOME TO B.V. MART ***\n")
shoppingCart.add("item1", 4);
shoppingCart.add("item2", 2);
shoppingCart.add("item3", 10);
shoppingCart.add("item4", 1);

shoppingCart.remove("item3", 6);
shoppingCart.remove("item4", 1);

shoppingCart.list();
shoppingCart.total();
//console.log(shoppingCart.testTotal); WHY YOU NO WORK?!
