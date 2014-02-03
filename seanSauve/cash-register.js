var cashRegister = {
	sum: 0.0,
	add: function (num){
		this.sum += num;
	},
	subtract: function (num){
		this.sum -= num;
	},
	total: function (){
		return this.sum;
	}

};

cashRegister.add(1.25);
cashRegister.add(3.63);
cashRegister.add(4.99);
cashRegister.subtract(1.15);

console.log("Your total is " + cashRegister.total());
