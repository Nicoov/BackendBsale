const express = require('express');
const router = express.Router();
const cors = require('cors');

const connection = require('../database')

router.get('/', (req, res) => {
    connection.query("SELECT * FROM product", (err, rows, field) => { 
        if (!err) {
            res.json(rows);
        }else{
            console.log(err)
        }
    })
});


module.exports = router;