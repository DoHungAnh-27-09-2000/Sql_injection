const mysql = require('mysql');

const database = mysql.createConnection({
    host: "us-cdbr-east-06.cleardb.net",
    user: "b73b98016b61ec",
    password: "468c49b6",
    database: "heroku_cc364fd9894e660",
    multipleStatements: true
});

database.connect((err) => {
    if(err) throw err.stack;
    else console.log("Connect success");
});

module.exports = {
    query: function(sql, callback) {
            database.query(sql, (err, results) => {
            if(err) callback(err);
            else callback(err, results);
        });     
    }
}