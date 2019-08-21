const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.get('/', (req, res) => {
    res.send("Hello Everyone! (^^)")
});

const port = process.env.PORT || 8000;
app.listen(port, function() {
    console.log("Server on port 8000");
});