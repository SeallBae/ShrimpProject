const Pond = require('../models/Ponds');
const User = require('../models/Users');
const {mongooseToObject, multipleMongooseToObject} = require('../../utils/mongoose');

class MeController {

    storedPonds (req, res, next){
        Pond.find({})
            .then (ponds => {
                res.render('me/stored-ponds', {
                    ponds: multipleMongooseToObject(ponds),
                });
            })
            .catch(next);
    }
    async home (req, res, next){
        User.findOne({username: req.body.username, password: req.body.username})
            .then(user => {
                Pond.find( {owner: user.username}, function(err, ponds){
                    res.render('home', {
                        user: mongooseToObject(user),
                        ponds: multipleMongooseToObject(ponds),
                    });
                })
            })
            .catch(next);
    }
}   

module.exports = new MeController;