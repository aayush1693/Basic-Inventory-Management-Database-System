const express = require('express');
const mysql = require('mysql');
const app = express();

// MySQL connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'ProductInventory'
});

db.connect((err) => {
    if (err) throw err;
    console.log('Connected to database');
});

// Middleware
app.use(express.json());

// Routes
app.get('/products', (req, res) => {
    let sql = 'SELECT * FROM products';
    db.query(sql, (err, results) => {
        if (err) throw err;
        res.send(results);
    });
});

app.post('/products', (req, res) => {
    let sql = 'INSERT INTO products SET ?';
    let product = {name: req.body.name, quantity: req.body.quantity, price: req.body.price};
    db.query(sql, product, (err, result) => {
        if (err) throw err;
        res.send('Product added');
    });
});

app.get('/orders', (req, res) => {
    let sql = 'SELECT * FROM orders';
    db.query(sql, (err, results) => {
        if (err) throw err;
        res.send(results);
    });
});

app.post('/orders', (req, res) => {
    let sql = 'INSERT INTO orders SET ?';
    let order = {product_id: req.body.product_id, quantity: req.body.quantity};
    db.query(sql, order, (err, result) => {
        if (err) throw err;
        res.send('Order added');
    });
});

app.listen(3000, () => {
    console.log('Server started on port 3000');
});