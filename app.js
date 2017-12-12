
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const hbs = require('hbs');
const http = require('http');
const Handlebars = require('handlebars')
const app = express();

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

app.set('view engine', 'html');


app.use('/static', express.static('static'));
app.engine('html', hbs.__express);

//register the Handlebar partials
hbs.registerPartials('views/partials');

// just keep the databse open for every request
require('./database');

require('./routes/index')(app);
require('./routes/enter.js')(app);
require('./routes/cs/cs.js')(app);
require('./routes/rm/rm.js')(app);
require('./routes/eda/eda.js')(app);
require('./routes/mcom/mcom.js')(app);



app.listen(3000, () => {
  console.log("Listen to 3000");
});