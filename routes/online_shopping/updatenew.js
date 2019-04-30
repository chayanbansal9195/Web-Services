var db = require('../database')

module.exports=(req,res)=>{

    var item=req.body.item;
    var id = req.body.id;
	
	var sql="update online_shop set item='"+item+"' where id='"+id+"'"


     db.query(sql,(err,results)=>{
	if(err)
		console.log(err)
	else
		return res.redirect('/shop')
})
}