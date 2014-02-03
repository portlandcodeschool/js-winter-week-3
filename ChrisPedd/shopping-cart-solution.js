var shoppingCart = {
	stuff: [],
	itemIdIndex: 0,
	
	add: function (thing) {
		thing.id= this.itemIdIndex++;
		this.stuff.push(thing);
		return thing.id;
	},
	
	remove: function (itemId, removeCount) {
		for (i = this.stuff.length - 1; this.stuff[i].id !== itemId && i >= 0; i--);
		if (i === -1) throw new Error("no item found");
		
		if (this.stuff[i].count <= removeCount) {
			this.stuff.splice(i,1);
		} else {
			this.stuff[i].count -= removeCount;
		}
	},
	
	list: function () {
		var outputStr = "";
		this.stuff.forEach (function (item) {
			outputStr += item.count + ' X ' + item.description + ' at ' + item.price + "\n";
		})
		return outputStr;
	},
	
	total: function () {
		var subTotal = 0;
		this.stuff.forEach(function (thing) {
			subTotal += thing.price * thing.count;
		});
		return subTotal;
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


shoppingCart.remove(item3, 6);
shoppingCart.remove(item4, 1);
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