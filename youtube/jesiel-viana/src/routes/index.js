const express = require('express');

const cursosRouter = require('./cursos');
const estudantesRouter = require('./estudantes');

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Página inicial!');
});

router.use('/cursos', cursosRouter)
router.use('/estudantes', estudantesRouter)

module.exports = router;