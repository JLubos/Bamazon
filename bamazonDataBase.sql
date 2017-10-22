-- Create Database
DROP DATABASE IF EXISTS bamazon_db;
CREATE DATABASE bamazon_db;
USE bamazon_db;


-- Create Table with columns
CREATE TABLE products(
	item_id INT AUTO_INCREMENT NOT NULL,
    product_name VARCHAR(50) NOT NULL,
    department_name VARCHAR(50) NOT NULL,
    price DECIMAL(10,4) NOT NULL,
    stock_quantity INTEGER NOT NULL,
    PRIMARY KEY (item_id)

);

-- Populate Database

INSERT INTO products
(product_name, department_name, price, stock_quantity)
VALUES
("NBA 2K18", "Video Games", 59.99, 10),
("The Last Guardian", "Video Games", 49.99, 10),
("Metroid: Samus Returns", "Video Games", 39.99, 5),
("Xenoblade Chorincles 2", "Video Games", 59.99, 9);

INSERT INTO products
(product_name, department_name, price, stock_quantity)
VALUES
("Playstation 4", "Game Consoles", 299.99, 8),
("Nintendo Switch", "Game Consoles", 299.99, 3),
("X-box One", "Game Consoles", 229.99,10);

INSERT INTO products
(product_name, department_name, price, stock_quantity)
VALUES
("HDMI Cable", "Game Accessories", 19.99,25),
("Bluetooth Headphones", "Game Accessories", 99.99, 11),
("Speakers", "Game Accessories", 149.99, 3);


SELECT * FROM products;