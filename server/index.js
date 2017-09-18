const express = require('express');
const bodyParser = require('body-parser');
const quoteController = ('./controllers/quotes_controller.js');

const axios = require('axios');

const app = express();

app.use( bodyParser.json() );



let baseURL="/api/getquotes";
app.get(baseURL, (req, res) => {
    axios.get("https://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en").then( response => {
        res.status(200).send(response.data.quoteText);
    })
});




let port = 4000;
app.listen(port, () => { 
    console.log(`Server listening on port ${port}`);
 });

