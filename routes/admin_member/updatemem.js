var db = require('../database')

module.exports=(req,res)=>{

    var firstname=req.body.firstname;
    var lastname = req.body.lastname;
    var email = req.body.email;
    var phno=req.body.phno;
    var city = req.body.city;
    var state=req.body.state;
    var pincode=req.body.pincode;
    var domain=req.body.domain
    var id=req.body.id
	
	var sql="update admin_member set firstname='"+firstname+"',lastname='"+lastname+"',email='"+email+"',phno='"+phno+"',city='"+city+"',state='"+state+"',pincode='"+pincode+"',domain='"+domain+"' where id='"+id+"'"


     db.query(sql,(err,results)=>{
	if(err)
		console.log(err)
	else
		return res.redirect('/admin')
})
}