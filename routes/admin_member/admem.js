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
	
	var sql="insert into admin_member (firstname,lastname,email,phno,city,state,pincode,domain) values('"+firstname+"','"+lastname+"','"+email+"','"+phno+"','"+city+"','"+state+"','"+pincode+"','"+domain+"')"


     db.query(sql,(err,results)=>{
	if(err)
		console.log(err)
	else
		return res.redirect('/admin')
})
}