'use strict';

const express = require('express');
const router = express.Router();

const route = router.get('/', (req, res, next) => {
  res.status(200).send({
    title: "Node Store APi",
    version: "0.0.3"
  });
});


module.exports = route;