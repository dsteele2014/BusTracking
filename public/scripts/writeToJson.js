const mysql= require('mysql');
const fs = require('fs');

const con = mysql.createConnection({
    host: "localhost",
    user: "dtsteele",
    password: "JXBW9897jxbw",
    database: "mydb"
});

con.query("SELECT * FROM stop", (err,rows)=>{
            if (err) throw err;
    fs.writeFile('test.json',rows,(err)=>{
        if(err) throw err;
        console.log('Json created');
    });
});

con.end((err)=>{});
