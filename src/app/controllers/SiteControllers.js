class SiteController {
    
    //GET /news
    index(req, res){
        res.render('home');
    }
}   

module.exports = new SiteController;