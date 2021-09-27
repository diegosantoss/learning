const express = require('express');
const router = express.Router();
const { curso } = require('../models');
const CursoService = require('../services/cursos');

const { body, check, validationResult } = require('express-validator');

const cursoService = new CursoService(curso);

router.get('/', async (req, res) => {
  const cursos = await cursoService.get();
  res.status(200).send(cursos)
});

router.post('/',
  body('nome').not().isEmpty().trim().escape(),
  check('ch')
    .matches(/\d/)
    .withMessage('Deve ser um número válido.'),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { nome, ch } = req.body;
    try {
      await cursoService.adicionar({ nome, ch })
      res.status(201).send('curso adicionado com sucesso')
    } catch (err) {
      res.status(400).send(err.message)
    }
  })

module.exports = router;