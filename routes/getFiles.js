const express = require('express')
const router = express.Router()
const {fileTable} = require('../models/model');
const sequelize = require('../models/sequelize');

router.get('/', async (req, res) => {
    let singleFile;
    let result;
    try {
        if (req.params.id) {
            singleFile = req.params.id;
            result = [await fileTable.findOne({where:{
                id: req.params.id
            }})]
        } else {
            result = await fileTable.findAll();
        }
    } catch (err) {
        res.status(500).send('Error while fetching files data');
    }
  res.status(200).send({'data':result});
})
// define the about route

module.exports = router