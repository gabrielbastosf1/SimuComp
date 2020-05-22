const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
let cors = require('cors')

const alunos = require('./routes/alunos.routes')
const app = express();


let url = 'mongodb://bd_user:684579G@ds363058.mlab.com:63058/alunos';
let mongoDB = process.env.MONGODB_URI || url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;

let db = mongoose.connection;
db.on('error', console.error.bind(console, 'Erro na Ligação ao MongoDB'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cors());
app.use('/', alunos);


let port = process.env.PORT || 8000;
app.listen(port, () => {
    console.log('Servidor em execução na porta ' + port);
});