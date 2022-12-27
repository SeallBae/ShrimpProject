const Pond = require('../models/Ponds');
const {mongooseToObject} = require('../../utils/mongoose');

class LoginController {
    
    //GET /news
    // index(req, res){
    //     res.render('home');
    // }

    async login(req, res, next){
        res.render('user/login', { title: 'login', layout: 'login' });
    }

    async signup(req, res, next){
        res.render('user/signup', { title: 'login', layout: 'login' });
    }
}  

module.exports = new LoginController;