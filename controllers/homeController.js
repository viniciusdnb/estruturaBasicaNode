module.exports = {
    index: async function(req, res){
       const usersModel = require('../model/models/usersModel');
       const user = await usersModel.findAll({where:{id:1}});
       console.log(JSON.stringify(user, null));
        res.render('views/home/index');
    },
  
    


}
