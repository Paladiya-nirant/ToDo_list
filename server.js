const express = require('express');
const body_parser = require('body-parser')
const app = express();

app.set("view engine", "ejs");
app.use(body_parser.urlencoded({extended:true}));

let data = [];

app.get('/', (req, res) => {

    res.render('index', {data});

})

app.post('/addDoc',(req, res) => {


    let newData = {...req.body, id : Math.floor(Math.random() * 1000)}

    data.push(d.id);
   
    res.render('/');

})



app.post('/updateData/:id', (req,res) => {
    
    let id = req.params.id;
    let updateData = req.body.updateData;

    data[id] = updateData;
    res.redirect('/');
})

app.get('/editData/:id' , (req, res) => {

    let editData = data.find((d) => {
        return d.id == req.params.id;
    });

    res.render('edit',{editData})


})

app.get('/deleteData/:id', (req,res) => {

    let id = req.params.id;
    data.splice(id, 1);
    res.redirect("/");

})



app.listen(3000,() => {

    console.log('ok');

});