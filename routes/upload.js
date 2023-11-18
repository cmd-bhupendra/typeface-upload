const express = require('express')
const router = express.Router()
const multer = require('multer');
const path = require('path');
const {fileTable} = require('../models/model');
const sequelize = require('../models/sequelize');
const { config } = require('process');



// const upload = multer({ dest: "../upload/" });


const multerStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "../upload");
  },
  filename: (req, file, cb) => {
    const ext = file.mimetype.split("/")[1];
    cb(null, `/uploaded-${file.fieldname}-${Date.now()}.${ext}`);
  },
});

const upload = multer({ storage: multerStorage});

router.post('/', upload.single("myFile"), async (req, res) => {
    console.log("Got file upsert post request with file ",req.file);
    let fileId;
    // const newFile = await File.create({
    //   name: req.file.filename,
    // });
    if (req.body.id) {
        fileId = req.body.id
    }
    try {
        const fileName = req.file.originalname;
        const size = req.file.size;
        const fileType = fileName.mimetype.split("/")[1];
        const config = req.file;
        if (fileId) {
            await fileTable.update({fileName:fileName, fileType:fileType, size:size, config:config},{where:{id:fileId}});
        } else {
            
            const res = await fileTable.create({fileName:fileName, fileType:fileType, size:size, config:config});
        }
    } catch (err) {
        console.log("Got error while upserting file !");
        res.status(500).send("File uploading req has been failed.");
    }
    res.status(200).send(`File has been uploaded successfully with id ${id}`)
})

module.exports = router