const express = require('express')
const router = express.Router()
const getFiles = require('./getFiles');
const upsertFile = require('./upload');
const deleteFile = require('./deleteFile');


// middleware that is specific to this router
router.use((req, res, next) => {
  console.log('Got api in file routes , Time: ', Date.now())
  next()
})

router.use('/upload', upsertFile);

router.get('/', getFiles);


module.exports = router