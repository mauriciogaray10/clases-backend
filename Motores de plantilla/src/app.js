import express from 'express';
import handlebars from 'express-handlebars';
import __dirname from './utils.js';
import testUser from './routes/views.router.js'

const app = express();

app.engine('handlebars', handlebars.engine());

app.set('views', __dirname + '/views');

app.set('view engine', 'handlebars');

app.use(express.static(__dirname + '/public'));



app.use('/', testUser)




app.listen(8080, ()=>{
    console.log('Server is listening...');
})