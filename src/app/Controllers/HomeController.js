class HomeController {
    index(req, res, next) {
        res.send("hello world");
    }
}

module.exports= new HomeController();