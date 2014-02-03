var cashRegister = {
	total: 0,
	add: function (cashMonies) {
		this.total += cashMonies;
		console.log("You've added $" + cashMonies + " to the register.");
	},
	subtract: function (cashMonies) {
		this.total -= cashMonies;
		if (this.total < 0) throw new Error("nope.jpg");
		console.log("You've taken $" + cashMonies + " out of the register.");
	},
};

console.log("\n--- Welcome to the Cash Register! ---\n")

cashRegister.add(1.25);
cashRegister.add(3.63);
cashRegister.add(4.99);
cashRegister.subtract(1.15);


if (cashRegister.total >= 100) {
	console.log ("wow. very cash. much dollar: $" + cashRegister.total + ". wow.");
	} else { console.log("Your register total is $" + cashRegister.total + ".");
}
