const passport = require('passport');
const LocalStrategy = require('passport-local');

passport.use(new LocalStrategy(function verify(username, password, done){
    //criar a logica de comparação de senha e usuario com banco de dados
    if(username != 'teste'){
        return done(null, false, {message:'incorrect username'});
    }

    if(password != 123456)
    {
        return done(null, false, {message: 'incorrect pass'});
    }

    return done(null, {id:1, username:username});
}));

passport.serializeUser(function(user, done){
    process.nextTick(function(){
        done(null, {
            id: user.id, 
            username: user.username
        });
    });
});

passport.deserializeUser(function(user, done){
    process.nextTick(function(){
        return done(null, user);
    });
});


module.exports = passport;
