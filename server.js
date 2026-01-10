const express = require("express")
const multer = require("multer")
const path = require("path")
const fs = require("fs")

const app = express()
const PORT = 3000

const storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, "uploads/"),
    filename: (req, file, cb) => cb(null, file.originalname)
})

const upload = multer({
    storage: storage,
    limits: {}
})

app.use(express.static('public'))

app.post("/upload", upload.single("file"), (req, res) => {
    if (!req.file) return res.status(400).send("No file uploaded");

    res.send("Uploaded successful!")
})

app.get("/files", (req, res) => {

    if (!fs.existsSync("uploads")) {
        fs.mkdirSync("uploads")
    }

    fs.readdir("uploads", (err, files) => {
        if (err) return res.status(500).send("Cannot list files");
        res.json(files)
    })
})

app.get('/files/:filename', (req, res) => {
    const filePath = path.join(__dirname, "uploads", req.params.filename)
    res.download(filePath)
})

app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`)
})