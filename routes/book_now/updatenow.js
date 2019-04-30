var db = require('../database')

module.exports=(req,res)=>{

    var Owner=req.body.Owner;
    var date = req.body.date;
    var Passengers = req.body.Passengers;
    var id = req.body.id;
    
	
	var sql="update book_now set Owner='"+Owner+"',date='"+date+"',Passengers='"+Passengers+"' where id='"+id+"'"


     db.query(sql,(err,results)=>{
	if(err)
		console.log(err)
	else
		return res.redirect('/book')
})
}