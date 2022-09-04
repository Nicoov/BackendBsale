const mysql = require('mysql');

const configuration = ({
    host: 'mdb-test.c6vunyturrl6.us-west-1.rds.amazonaws.com',
    user: 'bsale_test',
    password: 'bsale_test',
    database: 'bsale_test'
})



//Solucion Keep Alive 
// Dado que el servidor se cierra a los 5 seg que no existan peticiones 
function startConnection() {
    console.error('CONNECTING');
    connection = mysql.createConnection(configuration);
    connection.connect(function (err) {
        if (err) {
            console.error('CONNECT FAILED', err.code);
            startConnection();
        }
        else
            console.error('CONNECTED');
    });
    connection.on('error', function (err) {
        if (err.fatal)
            startConnection();
    });
}

startConnection();


// testing a select every 3 seconds :
// to try the code you can stop mysql service => select will fail
// if you start mysql service => connection will restart correctly => select will succeed
setInterval(function () {
    connection.query('select 1', function (err, results) {
        if (err) console.log('SELECT', err.code);
        else console.log('SELECT', results);
    });
}, 3000);


module.exports = connection;