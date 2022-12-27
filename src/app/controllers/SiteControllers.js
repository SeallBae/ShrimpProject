const User = require('../models/Users');
const Pond = require('../models/Ponds');
const {multipleMongooseToObject} = require('../../utils/mongoose');
class SiteController {
    
    //GET /news
    // index(req, res){
    //     res.render('home');
    // }

    index (req, res, next){
        Pond.find({})
            .then (ponds => {
                res.render('home', {
                    ponds: multipleMongooseToObject(ponds) 
                });
            })
            .catch(next);
    }
}  

module.exports = new SiteController;