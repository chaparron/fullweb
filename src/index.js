const express = require ('express');
const path = require('path');
const exphbs = require('express-handlebars');
const methodOverride = require('method-override');
const sesion = require('express-session');
//inicialitations
const app = express();

//settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exphbs({
    defaultLayout:'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs'
}));
app.set('view engine', '.hbs');

//middlewares
app.use(express.urlencoded({extended:false}));
app.use(methodOverride('_method'));
app.use(seseion({
    secret: 'mysecretapp',
    resave: true,
    saveUninitialized: true
}))

//global variables

//routes

//static files

//server
app.listen(app.get('port'), ()=>{
    console.log('Server on port ', app.get('port'));
});