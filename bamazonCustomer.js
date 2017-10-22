//Dependancies 
var mysql = require("mysql");
var inquirer = require("inquirer");


//Creating the connection
var connection = mysql.createConnection({
	host: "localhost",
	port: 3306,
	user: "root",
	password: "1Legend#",
	database: "bamazon_db"
});


// Connecting mysql server to sql databse
connection.connect(function(err){
	if (err) throw err;
	console.log("Successfully connected!");
	makeTable();
});


// Make a table that displays everything in the database
var makeTable = function(){
	connection.query("SELECT * FROM products", function(err,res){
		for (var i=0; i<res.length; i++){
		console.log(res[i].item_id + " | " +
			res[i].product_name + " | " +
			res[i].department_name + " | " +
			res[i].price + " | " +
			res[i].stock_quantity + "\n");
			
		}

		promptCustomer(res);
	})
}



//Use inquirer to select get user selections and make changes to the database
var promptCustomer = function(res){
	inquirer.prompt([{
		type: 'input',
		name: 'choice',
		message: "What would you like to buy?"
	}]).then( function(answer){
		var correct = false ;
		for ( var i=0; i< res.length; i++){
			if(res[i].product_name == answer.choice){
				correct = true;
				var product  = answer.choice;
				var id = i;
				inquirer.prompt({
					type: "input",
					name: "quant",
					message: "How many would like to buy?",
					validate: function(value){
						if(isNAN(value)==false){
							return true;
						} else{
							return false;
						}
					}
				}).then(function(answer){
					if((res[id].stock_quantity - answer.quant) > 0){
						connection.query("UPDATE products SET stock_quantity = ' " +(res[id].stock_quantity - answer.quant) + " ' WHERE product_name ='"
							+product + "'", function(err, res2){
								console.log(" You bought it!");
								makeTable();
							})
					} else{
						console.log("Not Valid");
						promptCustomer(res);
					}
				})
			}
		}
	})
}