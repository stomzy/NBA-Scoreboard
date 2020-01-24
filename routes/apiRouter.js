const express = require('express');
const footballRouter = express.Router();
const footballController = require('../controllers/apiController');

footballRouter.route('/updates').get(footballController);

module.exports = footballRouter;