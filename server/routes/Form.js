const express=require("express");
const router = express.Router();
const form = require('../models/Form');
const {FormHandler} = require('../controllers/FormHandler');

router.post("/messageform",FormHandler);
module.exports = router;