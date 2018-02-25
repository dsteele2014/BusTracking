const mysql= require('mysql');

const con = mysql.createConnection({
    host: "localhost",
    user: "dtsteele",
    password: "JXBW9897jxbw",
    database: "mydb"
});

con.query("SELECT * FROM stop", (err,rows)=>{
            if (err) throw err;
            console.log('Data received from Db:\n');
            console.log(rows);
});

con.end((err)=>{

        });
