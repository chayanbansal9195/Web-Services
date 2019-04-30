var db = require('../database')

module.exports=(req,res)=>{

    var Owner=req.body.Owner;
    var Category = req.body.Category;
   
    var date=req.body.date;
    var Passengers = req.body.Passengers;
    var number = Math.floor(Math.random() * 100000);
    
	var sql="insert into book_now (Owner,Category,Number,date,Passengers) values('"+Owner+"','"+Category+"','"+number+"','"+date+"','"+Passengers+"')"


     db.query(sql,(err,results)=>{
	if(err)
		console.log(err)
	else
		return res.redirect('/book')
})
}