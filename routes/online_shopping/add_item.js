var db = require('../database')

module.exports=(req,res)=>{

    var item=req.body.item;
	
	var sql="insert into online_shop (item)values('"+item+"')"


     db.query(sql,(err,results)=>{
	if(err)
		console.log(err)
	else
		return res.redirect('/shop')
})
}