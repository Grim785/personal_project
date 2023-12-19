const express = require('express');
const app = express();
const port = 3000;
const path=require('path');
const handlebars = require('express-handlebars');
const morgan = require('morgan');
const router=require('./routers');

//chạy file tỉnh
app.use(express.static(path.join(__dirname, 'public')));
app.use(morgan('combined'));

app.use(express.json());
app.use(express.urlencoded({ extended:true}));

app.engine('hbs',handlebars.engine({exitname: 'hbs'}));
app.set('view engine', 'hbs');
app.set('views',path.join(__dirname, 'resources','views'));

router(app);

app.listen(port,()=>console.log('listening on port'+port));