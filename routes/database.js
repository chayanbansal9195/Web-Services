var mysql = require('mysql')

var conn=mysql.createConnection({
    hostname:'localhost',
    password:"",
    user:"root",
    database:"webservice"
})
conn.connect((err)=>{
    if(err)
    throw err
    else
    console.log("db connected");
})
module.exports=conn