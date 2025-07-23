require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT;
const session = require('express-session');
const passport = require('passport');
const loginRouter = require('./router/loginRouter')
const homeRouter = require('./router/homeRouter');
const principalRouter = require('./router/principalRouter');


app.use(express.static('public'));

//configuração de sessoes
app.use(session({
    secret:'secreto',
    resave: false,
    saveUninitialized:false
}));
app.use(passport.authenticate('session'));
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.set('views', __dirname, 'views');
app.set('view engine', 'ejs');


//raiz do endereço link
app.use('/', homeRouter);
app.use('/', loginRouter);
app.use('/', principalRouter);



app.listen(port, function(){
    console.log(`app online in http://localhost:${port}`)
})
