//Assignment 05: js-winter-week-3
//Javascript class - Objects
//Arcy Douglass
//January 28, 2014

//shopping-cart.js


//Part 1
//console.log("\nPart 1: ");

var shoppingCart = {
  itemIdIndex: 0,
  itemProperties: [],

  add: function (item) {
    item.id = this.itemIdIndex++;
    this.itemProperties.push(item);
    //console.log(item.description + " has been added to the cart");
    return item.id;
  },
  remove: function (itemID, newCount){
    this.itemProperties.forEach( function (item){
      if ( item.id === itemID){
        if ( newCount > item.count){
          console.log("Sorry, there are not enough items to remove!");
          return;
        } else {
          item.count -=  newCount;
        }
      }
    });
  },
  list: function (){
      var outputArray = [];
      this.itemProperties.forEach( function (item){
        outputArray.push(item.count + " x " + item.description);;
      });
      return outputArray;
  },
  total: function (){
   var total = 0;
   this.itemProperties.forEach( function (item){
   total += item.count * item.price;
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

//------------ Test functions -----------
//console.log(shoppingCart);  //Displays entire cart
//console.log(item1);   //Does not work
//console.log(shoppingCart.itemProperties.length);	//Displays the length of itemProperties array

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




