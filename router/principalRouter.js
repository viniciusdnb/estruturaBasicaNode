const express = require('express');
const principalRouter = express.Router();
const principalController = require('../controllers/principalController');


principalRouter.get('/principal',
    function(req, res){
    //verifica se a requisição é altenticado
    if(!req.isAuthenticated()){
        return res.redirect('/');
    }
    principalController.index(req, res);
});

module.exports = principalRouter;