var Aluno = require('../models/aluno.model');
exports.getAll = function (req, res) {
    Aluno.find({}).exec(function(err,alunos){
        res.send({alunos})
    })
   }

exports.getId = function (req, res) {
    Aluno.findById(req.params.id, function (err, aluno) {
        res.send({
            error: false,
            aluno
        });
    })
}

exports.edit = function(req,res){
    if(!req.body.nomeAluno) {
        return res.status(400).send({
            message: "Conteúdo não pode estar vazio"
        });
    }
    Aluno.findByIdAndUpdate(req.params.id, {
        nomeAluno: req.body.nomeAluno,
        tipoCurso: req.body.tipoCurso,
        emailAluno: req.body.emailAluno, 
        totalHoras: req.body.totalHoras,
        idAluno: req.body.idAluno, 
        listaAtv: req.body.listaAtv
    }, {new: true})
    .then(aluno => {
        if(!aluno) {
            return res.status(404).send({
                message: "Note not found with id " + req.params
            });
        }
        res.send(aluno)
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Not found with id " + req.params
            });                
        }
        return res.status(500).send({
            message: "Error updating with id " + req.params
        });
    });
}

exports.create = function(req, res) {
    let aluno = new Aluno({
        nomeAluno: req.body.nomeAluno,
        tipoCurso: req.body.tipoCurso,
        emailAluno: req.body.emailAluno, 
        totalHoras: req.body.totalHoras,
        idAluno: req.body.idAluno
     })
    aluno.save(function(err) {
        if (err) {
        return err
        }
        res.send({
            error: false,
            aluno
        })
     })
}

exports.delete = function (req, res) {
    Aluno.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.send('Deleted successfully!');
    })
};