const express = require('express');
const router = express.Router();
const cors = require('cors');

const connection = require('../database')

// Creacion de las query desde mysql

// query de productos por categorias 

router.get('/energetica', (req, res) => {
    connection.query("SELECT * FROM product WHERE category = 1", (err, rows, field) => { 
        if (!err) {
            res.json(rows);
        }else{
            console.log(err)
        }
    })
});

router.get('/pisco', (req, res) => {
    connection.query("SELECT * FROM product WHERE category = 2", (err, rows, field) => { 
        if (!err) {
            res.json(rows);
        }else{
            console.log(err)
        }
    })
});
router.get('/ron', (req, res) => {
    connection.query("SELECT * FROM product WHERE category = 3", (err, rows, field) => { 
        if (!err) {
            res.json(rows);
        }else{
            console.log(err)
        }
    })
});
router.get('/bebidas', (req, res) => {
    connection.query("SELECT * FROM product WHERE category = 4", (err, rows, field) => { 
        if (!err) {
            res.json(rows);
        }else{
            console.log(err)
        }
    })
});


router.get('/snacks', (req, res) => {
    connection.query("SELECT * FROM product WHERE category = 5", (err, rows, field) => { 
        if (!err) {
            res.json(rows);
        }else{
            console.log(err)
        }
    })
});

router.get('/cervezas', (req, res) => {
    connection.query("SELECT * FROM product WHERE category = 6", (err, rows, field) => { 
        if (!err) {
            res.json(rows);
        }else{
            console.log(err)
        }
    })
});


router.get('/vodka', (req, res) => {
    connection.query("SELECT * FROM product WHERE category = 7", (err, rows, field) => { 
        if (!err) {
            res.json(rows);
        }else{
            console.log(err)
        }
    })
});




module.exports = router;