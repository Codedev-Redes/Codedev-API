const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const crypto = require('crypto');
const mongoose = require('mongoose');
const multer = require('multer');
const GridFsStorage = require('multer-gridfs-storage');
const Grid = require('gridfs-stream');
const methodOverride = require('method-override');
const { Readable } = require("stream");

// Initializations
const app = express();
app.use(cors());

// Settings
app.set('port', process.env.PORT || 4000);
/*
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exphbs.engine({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'), 
    extname: '.hbs'
}));
app.set('view engine', '.hbs'); */

// Middlewares
app.use(bodyParser.json());
app.use(express.urlencoded({extended: false}));
app.use(methodOverride('_method'));

// Global Variables


// Routes
// app.get('/', (req, res) => { res.render('index'); });

app.use(require('./routes/categories.routes'));
app.use(require('./routes/students.routes'));
app.use(require('./routes/resources.routes'));
app.use(require('./routes/modules.routes'));
app.use(require('./routes/courses.routes'));
app.use(require('./routes/comments.routes'));
app.use(require('./routes/sessions.routes'));
app.use(require('./routes/payment_methods.routes'));
app.use(require('./routes/transactions.routes'));
app.use(require('./routes/inscriptions.routes'));
app.use(require('./routes/mentors.routes'));
app.use(require('./routes/mentorship.routes'));


// Connect to DB
const connection = mongoose.connection;

const fileSchema = new mongoose.Schema({
    filename: String,
    contentType: String,
    length: Number,
});
const File = mongoose.model('File', fileSchema);


connection.on("open", () => {
    console.log("connection established successfully")
    let bucket = new mongoose.mongo.GridFSBucket(mongoose.connection.db)

    const storage = multer.memoryStorage()
    const upload = multer({ storage })

    app.post("/upload", upload.single("file"), async (req, res) => {
        let { file } = req
        console.log(file)

        let { fieldname, originalname, mimetype, buffer } = file

        let newFile = new File({
            filename: file.originalname,
            contentType: mimetype,
            length: buffer.length,
        })


        try {
            let uploadStream = bucket.openUploadStream(fieldname)
            let readBuffer = new Readable()
            readBuffer.push(buffer)
            readBuffer.push(null)


            const isUploaded = await new Promise((resolve, reject) => {
                readBuffer.pipe(uploadStream)
                    .on("finish", resolve((uploadStream.id.toString())))
                    .on("error", reject("error occured while creating stream"))
            })


            newFile.id = uploadStream.id
            let savedFile = await newFile.save()
            if (!savedFile) {
                return res.status(404).send("error occured while saving our work")
            }
            return res.send({ filId: uploadStream.id.toString(), file: savedFile, message: "file uploaded successfully" })
        }
        catch (err) {
            console.error("Error al subir archivo:", err);
            res.send("error uploading file")
        }


    })

    app.get("/getFile/:fileId", (req, res) => {
        let { fileId } = req.params

        let downloadStream = bucket.openDownloadStream(new mongoose.Types.ObjectId(fileId))

        downloadStream.on("file", (file) => {
            res.set("Content-Type", file.contentType)
        })

        downloadStream.pipe(res)
    })
})

module.exports = app;