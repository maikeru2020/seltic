const express = require('express');
const app = express();
var $ = require('jquery');

app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('index.ejs', {page: "home"})
})

app.get('/:page', (req, res) => {
    var page = req.params.page;
    res.render('index.ejs', {page: page});
});

const port = process.env.PORT || 8000;
app.listen(port, function() {
    console.log("Server on port 8000");
});