var db = require("../database")

module.exports=(req,res)=>{
    var imgname = req.body.imgname
    if(req.files.image!=""){
    var file = req.files.image;
    var image = file.name;
    if (file.mimetype == "image/jpeg" ||file.mimetype == "image/png" ||file.mimetype == "image/jpg") {
      var uploadpath = "public/images/" + image;
      var sql = "insert into photo_gallery (imgname,image)values('"+imgname+"','"+image+"')"
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