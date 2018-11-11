// Dependencies
var mysql = require('mysql');
var inquirer = require('inquirer');


// sets connection param for database connection
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    // sets username
    user: "root",
    // sets password
    password: "axb5095",
    // sets current database
    database: "bamazon_db"
});

// makes connection with the server
connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    displayItems();
});

// Show the items for sale.
function displayItems() {
    connection.query("SELECT item_id, product_name, product_price, dept_name FROM products WHERE product_price > 0;", function (err, result) {
        // gets and builds the table header
        var items = result[0];
        var header = [];
        for (var fields in items) {
            header.push(fields);
        }

      

        // gets and sets the data in the table

        for (var i = 0; i < result.length; i++) {
           console.log([result[i].item_id, (result[i].product_name), result[i].product_price.toFixed(2), result[i].dept_name]);
        }
     

        var item_ids = [];
        for (var i = 0; i < result.length; i++) {
            item_ids.push(result[i].item_id);
        }

        purchaseItem(item_ids);
    });
}

// sets function for cutomer to make a purchase
// list gets the items id's as an array and passed to the promt/choices param
function purchaseItem(list) {

     inquirer.prompt(
    [{
            name: "buy",
            type: "list",
            message: "Please indicate which Item you would like to purchase?",
            choices: list
        },
        {
            name: "quantity",
            type: "input",
            message: "Please enter the item quantity?",
        }]

        ).then(function (answer) {
            // sets a query to select the item the user has chosen
            var query = "SELECT item_id, product_quantity, product_price FROM products WHERE ?";
            connection.query(query, { item_id: answer.buy }, function (err, res) {
                var inputQuantity = answer.quantity;
                checkQuantity(res[0].product_quantity, inputQuantity, res[0].product_price.toFixed(2), res[0].item_id);
            });
    
        })
}

// checks quantity 
function checkQuantity(on_stock, buy_quantity, price, item_id) {
    if (on_stock >= buy_quantity) {
        var total_price = buy_quantity * price;
        console.log(`Your total amount is $${total_price}.\n`.green);
        // updates database
        updateQuantity(buy_quantity, item_id);
    } else {
        console.log(`Not enough quantity available!\nOnly ${on_stock} items available!`.red);
        connection.end();
    }
}

// updates stock_quantity in the database
function updateQuantity(quantity, item_id) {
    var query = "UPDATE products SET product_quantity = product_quantity - ? WHERE ?";
    connection.query(
        query,
        [
            quantity,
            {
                item_id: item_id
            }
        ],
        function (error) {
            if (error) throw error;
            console.log("Quantity was succefully updated!");
            connection.end();
        });
}