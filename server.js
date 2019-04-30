var express= require('express')
var ejs = require('ejs')
var db= require('./routes/database')
var bodyParser = require("body-parser");
var morgan = require("morgan")
var fileUpload = require("express-fileupload")

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.set('view engine','ejs')
app.use(morgan('dev'))
app.use(express.static(__dirname + '/public'));
app.use('/img', express.static('img'))

app.use(fileUpload())
//main page
app.get('/',(req,res)=>{
    res.render('index')
})

//////////////////--------------------/////////////////////////////////////////////

//admin member-----------------------------------------
app.get('/admin',(req,res)=>{
    db.query("select * from admin_member",(err,results)=>{
        res.render("./admin_member/admin",{
            data:results
        })
    })
})

app.get('/add_member',(req,res)=>{
    res.render('./admin_member/add_member')
})

var admem = require('./routes/admin_member/admem')
app.route('/admem').post(admem)

app.get('/memview/:id',(req,res)=>{
    db.query("select * from admin_member where id = '"+req.params.id+"'",(err,results)=>{
        res.render("./admin_member/memview",{
            data:results
        })
    })
})

app.get('/editmem/:id',(req,res)=>{
    db.query("select * from admin_member where id = '"+req.params.id+"'",(err,results)=>{
        res.render("./admin_member/editmem",{
            data:results
        })
    })
})

var updatemem = require('./routes/admin_member/updatemem')
app.route('/updatemem').post(updatemem)

app.get('/deletemem/:id',(req,res)=>{
    db.query("delete from admin_member where id = '"+req.params.id+"'",(err,results)=>{
        res.redirect("http://localhost:3000/admin")
    })
})
//////////////////////////-------------/////////////////////////////////////////////


//photo gallery------------------------------------------------

app.get('/photo',(req,res)=>{
    db.query("select * from photo_gallery",(err,results)=>{
        res.render('./photo_gallery/photo',{
            data:results
        })
    })
   
})

app.get('/addimage',(req,res)=>{
    res.render('./photo_gallery/addimage')
})

var addimg = require('./routes/photo_gallery/addimg')
app.route('/addimg').post(addimg)

app.get('/updateimg/:id',(req,res)=>{
    db.query("select * from photo_gallery where id = '"+req.params.id+"'",(err,results)=>{
        res.render("./photo_gallery/updateimg",{
            data:results
        })
    })
})


var updateimage = require('./routes/photo_gallery/updateimage')
app.route('/updateimage').post(updateimage)


app.get('/deleteimg/:id',(req,res)=>{
    db.query("delete from photo_gallery where id = '"+req.params.id+"'",(err,results)=>{
        res.redirect("http://localhost:3000/photo")
    })
})
//----------------------------///////////////////////---------------------------


//book now

app.get('/book',(req,res)=>{
    db.query("select * from book_now",(err,results)=>{
        res.render('./book_now/book_now',{
            data:results
        })
    })
   
})

app.get('/add_booking',(req,res)=>{
    res.render('./book_now/add_booking')
})

var add_book = require('./routes/book_now/add_book')
app.route('/add_book').post(add_book)

app.get('/updateBook/:id',(req,res)=>{
    db.query("select * from book_now where id = '"+req.params.id+"'",(err,results)=>{
        res.render("./book_now/updatenow",{
            data:results
        })
    })
})

var updatenow = require('./routes/book_now/updatenow')
app.route('/updatebook').post(updatenow)


app.get('/DeleteBook/:id',(req,res)=>{
    db.query("delete from Book_now where id = '"+req.params.id+"'",(err,results)=>{
        res.redirect("http://localhost:3000/book")
    })
})

//-------------------/-////////////-----------------------////////////////////---------------

//online shopping item list

app.get('/shop',(req,res)=>{
    db.query("select * from online_shop",(err,results)=>{
        res.render('./online_shopping/online_shop',{
            data:results
        })
    })
   
})

app.get('/add_new',(req,res)=>{
    res.render('./online_shopping/add_new')
})

var add_item = require('./routes/online_shopping/add_item')
app.route('/add_item').post(add_item)

app.get('/updateitem/:id',(req,res)=>{
    db.query("select * from online_shop where id = '"+req.params.id+"'",(err,results)=>{
        res.render("./online_shopping/update_item",{
            data:results
        })
    })
})

var updatenew = require('./routes/online_shopping/updatenew')
app.route('/updatenew').post(updatenew)

app.get('/deleteitem/:id',(req,res)=>{
    db.query("delete from online_shop where id = '"+req.params.id+"'",(err,results)=>{
        res.redirect("http://localhost:3000/shop")
    })
})



/////----------////////////////-----------------------




app.listen(3000,(err)=>{
    if(err)
    console.log(err)
    else
    console.log("connected")
})