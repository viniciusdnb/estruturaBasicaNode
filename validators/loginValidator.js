const {checkSchema} = require('express-validator');
const loginValidator = checkSchema({
    username:{
        errorMessage: 'incorrect username',
        notEmpty: true,
        escape: true,
        trim: true,
        isLength:{
            options:{
                max:50,
                min:4
            }
        }
    },
    password:{
        errorMessage:"incorrect pass",
        notEmpty: true,
        escape: true,
        trim:true,
        isLength:{
            options:{
                min:4
            }
        }
    }
});

module.exports = loginValidator;
