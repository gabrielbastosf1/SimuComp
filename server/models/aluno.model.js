const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let alunosSchema = new Schema({
    nomeAluno:{type: String, required: true},
    tipoCurso: {type: String, required: true},
    emailAluno: {type: String, required: true},
    totalHoras: {type: Number},
    idAluno: {type: String}, 
    listaAtv: [{}],
});
module.exports = mongoose.model('alunos', alunosSchema);