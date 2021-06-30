const express = require('express')
const bp = require('body-parser');
const app = express();
app.set('view engine', 'ejs');
app.use(bp.urlencoded({ extended: true }));
const arr = [{}];
app.get('/', (req, res) => {
    res.render('index', { data: arr });
})

app.post('/task', (req, res) => {

    const data = {
        name: req.body.Name,
        email: req.body.email,
        number: req.body.Number,
        image: req.body.image,
    }

    arr.push(data)


    res.render('index', { data: arr })
})

app.listen('3000', function (err) {
    if (!err) {
        console.log("connected");
    }
})