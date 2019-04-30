var db = require("../database")

module.exports=(req,res)=>{
    var imgname = req.body.imgname
    var id =req.body.id;
    if(req.files.image!=""){
    var file = req.files.image;
    var image = file.name;
    if (file.mimetype == "image/jpeg" ||file.mimetype == "image/png" ||file.mimetype == "image/jpg") {
      var uploadpath = "public/images/" + image;
      var sql = "update photo_gallery set imgname='"+imgname+"',image='"+image+"' where id='"+id+"'"
    db.query(sql, (err, results) => {
      if (err) 
      console.log("error occured", err);
      else {
        return res.redirect("/photo");
      }
    });
    file.mv(uploadpath, err => {
      if (err) 
      throw err;
    });
  } else res.send("Wrong file format");
    }
    }