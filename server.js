const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('home');
});

const port = process.env.PORT || 8000;
app.listen(port, function() {
    console.log("Server on port 8000");
});