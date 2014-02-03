var cashRegister = {
	totalAmt:0,
	add: function(amt) {
		this.totalAmt += amt;
	},
	subtract: function(amt) {
		this.totalAmt -= amt;	
	},
	total: function() {
		return this.totalAmt;
	}
};

cashRegister.add(1.25);
cashRegister.add(3.63);
cashRegister.add(4.99);
cashRegister.subtract(1.15);

console.log("Your total is " + cashRegister.total());