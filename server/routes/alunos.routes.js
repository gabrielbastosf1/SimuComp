const express = require('express');
const router = express.Router();
// Colocar controller que ainda não foi criado
const aluno_controller = require('../controller/alunos.controller');

router.get('/alunos', aluno_controller.getAll)
router.get('/:id', aluno_controller.getId)
router.put('/:id', aluno_controller.edit)
router.post('/create', aluno_controller.create)
router.delete('/:id', aluno_controller.delete)
module.exports = router;