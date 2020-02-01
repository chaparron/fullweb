const express = require ('express');
const path = require('path');
const methodOverride = require('method-override');
const sesion = require('express-session');
const flash = require('connect-flash');
const passport = require('passport');

//inicialitations
const app = express();
require('./database');
require('./config/passport');

//settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', '.ejs');

//middlewares
app.use(express.urlencoded({extended:false}));
app.use(methodOverride('_method'));
app.use(sesion({
    secret: 'mysecretapp',
    resave: true,
    saveUninitialized: true
}))
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

//global variables
app.use((req, res, next) => {
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    res.locals.error = req.flash('error');
    res.locals.user = req.user || null;
    next();
});

//routes
app.use(require('./routes/index'));
app.use(require('./routes/notes'));
app.use(require('./routes/users'));

//static files
app.use(express.static(path.join(__dirname, 'public')));


//server
app.listen(app.get('port'), ()=>{
    console.log('Server on port ', app.get('port'));
});