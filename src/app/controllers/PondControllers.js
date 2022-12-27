const Pond = require('../models/Ponds');
const PondEC = require('../models/Ponds_EC');
const {mongooseToObject, multipleMongooseToObject} = require('../../utils/mongoose');

class PondController {
    async show (req, res, next){
        await Pond.findOne({slug: req.params.slug})
            .then(pond =>{
                PondEC.find({PondName: pond.PondName})
                    .then(pond_ec=>{
                        res.render('ponds/pond_detail',
                        {
                            pond: mongooseToObject(pond), 
                            pond_ec: multipleMongooseToObject(pond_ec),
                        });
                    })
            })
            .catch(next);
    }

    create(req, res, next){
        res.render('ponds/create');
    }

    store(req, res, next){
        console.log(req.body);
        const pond = new Pond(req.body);
        pond.save()
            .then(()=> res.redirect('/'))
            .catch(error=>{

            });
    }

    async configure(req, res, next){
        await Pond.findById(req.params.id)
        .then(pond => {
            res.render('ponds/configure', {
                pond: mongooseToObject(pond) 
            });
        })
        .catch(next);
    }

    update(req,res,next){
        Pond.updateOne({_id:req.params.id}, req.body)
            .then(()=>
                res.redirect('/me/stored/ponds')
            )
            .catch(next);
    }

    delete(req,res,next){
        Pond.deleteOne({_id:req.params.id})
        .then(()=>
            res.redirect('/me/stored/ponds')
        )
        .catch(next);
    }

    async randominlimit(req, res, next){
        await Pond.findOne({slug: req.params.slug})
            .then(pond =>{
                var ECrand = Math.floor(Math.random() * (pond.UpperECLimit));
                var pond_ec = new PondEC({PondName: pond.PondName, EC: ECrand});
                pond_ec.save()
                .then(pond_ec=>{
                    PondEC.find({PondName: pond.PondName})
                        .then(pond_ec=>{
                            res.redirect('/ponds/' + pond.PondName)
                        })
                })
                .catch(next);
            })
            .catch(next);      
    }   
    async randomoutlimit(req, res, next){
        await Pond.findOne({slug: req.params.slug})
            .then(pond =>{
                var ECrand = Math.floor(Math.random() * (pond.UpperECLimit + 1)) + pond.UpperECLimit;
                var pond_ec = new PondEC({PondName: pond.PondName, EC: ECrand});
                pond_ec.save()
                .then(pond_ec=>{
                    PondEC.find({PondName: pond.PondName})
                        .then(pond_ec=>{
                            res.redirect('/ponds/' + pond.PondName)
                        })
                })
                .catch(next);
            })
            .catch(next);      
    }   
}

module.exports = new PondController;