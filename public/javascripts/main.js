class Main {
    index(req, res, next){
        res.render('index', { title: 'Express' });
    }
    post(req, res, next){
        const {name, password, message} = req.query;
        
        res.render('index', { title: 'Express' });
    }
    get(req, res, next){
        res.render('index', { title: 'Express' });
    }
}

module.exports = new Main();