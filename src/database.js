const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'mdb-test.c6vunyturrl6.us-west-1.rds.amazonaws.com',
    user: 'bsale_test',
    password: 'bsale_test',
    database: 'bsale_test'
})




connection.connect((err) => {
    if (err) {
        res.status(500).send('ERROR');
    } else {
        console.log('BD CONNECTED');
    }
});


//Solucion Keep Alive 
setInterval(function () {
    connection.query('SELECT 1')
    console.log('KEEP ALIVE')
}, 4500)



// setInterval(function () {
//     connection.query('select 1', function (err, results) {
//         if (err) console.log('SELECT', err.code);
//         else console.log('SELECT', results);
//     });
// }, 3000);


module.exports = connection;