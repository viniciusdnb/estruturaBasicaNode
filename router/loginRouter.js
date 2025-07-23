const express = require('express');
const loginRouter = express.Router();
const loginController = require('../controllers/loginController');
const configPassport = require('../auth/configPassport');
const loginValidator = require('../validators/loginValidator');
const {validationResult} = require('express-validator');

loginRouter.get('/login', function(req, res, next){
    loginController.index(req, res);
});



loginRouter.post('/login/password',
    //valida os dados passado na requisição
    loginValidator,
    function(req, res, next){
        const errorResult = validationResult(req);
        if(!errorResult.isEmpty()){
            let errorValidator = errorResult.array();
            return loginController.index(req, res, errorValidator);
        }
        next();
    },
    //faz a autenticação do usuario
    configPassport.authenticate('local',{
        successRedirect: '/principal',
        failureRedirect: '/login'
    })
);


loginRouter.get('/login/logout', function(req, res, next){
    req.logout(function(err){
        if(err){
            return next(err);
        }
        res.redirect('/');
    });
});

module.exports = loginRouter;