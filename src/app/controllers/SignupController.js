const Pond = require('../models/Ponds');
const User = require('../models/Users');
const {mongooseToObject} = require('../../utils/mongoose');

class SignupController {

    async signup(req, res, next){
        res.render('user/signup', { title: 'login', layout: 'login' });
    }

}  

module.exports = new SignupController;