DROP DATABASE IF EXISTS bamazon_db;
CREATE database bamazon_db;

USE bamazon_db;

CREATE TABLE products (
  item_id VARCHAR(30) NOT NULL,
  product_name VARCHAR(250) NOT NULL,
  dept_name VARCHAR(100) NULL,  
  product_price DECIMAL(10,2) NOT NULL,
  product_quantity INTEGER(10) NULL,
  PRIMARY KEY (item_id)
);

-- Creates new rows  

INSERT INTO products (item_id, product_name, dept_name, product_price, product_quantity)
VALUES("ALIEN 1600", "Alienware laptop", "Electronics", 2499.99, 10),
("FERRARI 2000", "Ferrari Enzo 700 Horse Power", "Cars", 750000.00, 5),
("Dell 5000", "Inspiron  Desktop", "Electronics", 429.99, 6),
("BOOK 3000", "The Da Vincci code", "Books", 14.99, 10),
("IPHONE 9", "I-Phone", "Electronics", 95.00, 7),
("AIR-MAX-95", "Nike", "Sneaker", 90.00, 15),
("SAMSUNG FRIDGE", "Home Appliance" ,"Fridge", 500.00, 9);

