# Bamazon
I made a node application, which allows users  to purchase items from my table .  First I initialize my project by init-y.  Then I npm install  the packages I need, for example my iniquirier and sql packages. The user is which item they would like to purchase from my table. Then the user is asked the quantity number of how many of the products the user wants from my table. Then the system responds by letting the user know how much the price of the product will be that the user had ordered.It lets the user know that if the quantity was successfully updated or not, and moves onto the next transaction. My bamazon js file , the first thing we do is we require our dependencies.  For example  the sql , and inquirer is required for javascript. Then a connection for database is setup. The port to where the connection is made, and the database Im connecting to is my bamazon database sql file and seed file. We make sure my database connection is turned on, if there is error then the system throws the error. Once the bamazon_databse is connected to the server , we run the callback function to start our application, and show the items for sale. Table is created for the data items I inserted ( Laptop,computer car, book, and snaker). The data is stored , and is set, so a function to get can be run. Function for customer is set to make a purchase. List get item id as an array and is presented as choice to many arrayys.

  We start our  inquirer prompt and list our item id , dept_name, item price, product name, to ask which item the user wants. Then we  take the user response and list the quantity of the item left based on what the user wants. After the transaction is complete , the system updates its inventory and takes a note of the quantity of the product items left, and the system gets prepared for the next transaction.    My seeds.sql file hold the specific value , and data I inserted into my table : Laptop, nike sneaker, Da Vinci Code (book), iphone, Dell Samsung fridge . The bamazon database holds schema ( creates the database)  and seeds ( inserts the product, and put the value of the product to my table). The bamazon database is used on sql, a query is ran for the selected products, and information of price and quantity of selected product is brought back. Later I ran the bamazon_database, and selected the product or value from my table, and the server brought the : item_id, product_name, dept_name, product _ price, and product quantity of the values from table I inserted. 

  
