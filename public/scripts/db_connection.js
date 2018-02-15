const mysql= require('mysql');

const con = mysql.createConnection({
    host: "localhost",
    user: "dtsteele",
    password: "JXBW9897jxbw",
    database: "mydb"
});

con.connect((err)=>{
            if (err) throw err;
            console.log('Connected!');
});

con.end((err)=>{

});


