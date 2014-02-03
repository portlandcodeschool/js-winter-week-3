//Sean Sauve
//Portland Code School
//Javascript course
//week 3 shopping cart assingment

var shoppingCart = {
	items: [],//array containing each item (as an object)

	add: function (item){
		//item will take on id 'item' + next
		//available number in items array
		item.ID = "item" + (this.items.length + 1).toString(); 

		//add object item to back end of items array
		this.items.push(item);
		return item.ID;
	},
	remove: function (currentID, amount){

		// searching array items for the current item
		for(i = 0; i < this.items.length; i++){
			if (this.items[i].ID === currentID){ 

				//removing amount from count if count is larger
				if (this.items[i].count > amount) this.items[i].count -= amount;

				//or if removed amount is as great as total, remove item completely
				else this.items.splice(i,1);
				
			};
		}

	},
	list: function (){

		//prints out items going through items array
		returnArray =[];

		this.items.forEach(function (entry){
			//building a single string w quantity and description and adding to returning array
			returnArray.push(entry.count.toString() + ' X ' + entry.description);

		});

		return returnArray;
	},
	total: function (){
		total =0;

		//totals up items going through items array
		this.items.forEach(function (entry){

			//building a total one item at a time
			total += entry.count * entry.price;
		});
		return total;

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

console.log("\nYour Shopping Cart:\n");
console.log(shoppingCart.list());

/* Should print:
[
'4 X Huggies Little Snugglers Diapers',
'2 X Tylenol Extra Strength Acetaminophen',
'4 X Flents Quiet Please Foam Ear Plugs',
]
*/
console.log("\nYour Total:\n");

console.log(shoppingCart.total());

// Should print: 169.84