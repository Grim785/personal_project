const HomeRouter=require('./home');

function router(app){
    app.use('/',HomeRouter);
}

module.exports= router;
