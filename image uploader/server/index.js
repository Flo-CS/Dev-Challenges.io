const express = require("express");
const multer = require("multer");
const {v4: uuid} = require("uuid");
const cors = require("cors");
const fs = require("fs");
const path = require("path");
require("dotenv").config();

const PORT = process.env.PORT;
const IMAGES_FOLDER = path.join(__dirname, "data/images");
const AUTHORIZED_FILES_EXTENSIONS = ["JPG", "PNG", "JPEG", "GIF"];

const app = express();
const upload = multer();

app.use(cors());

app.post("/api/upload_file", upload.single("file"), (req, res) => {
    const fileExtensionSplit = req.file.originalname.split(".");
    const fileExtension = fileExtensionSplit[fileExtensionSplit.length - 1];
    const fileName = `${uuid()}.${fileExtension}`;
    const filePath = path.join(IMAGES_FOLDER, fileName);

    if (!AUTHORIZED_FILES_EXTENSIONS.includes(fileExtension.toUpperCase())) {
        return res.status(400).json({message: "Bad file extension", data: {fileExtension}});
    }

    try {
        fs.writeFileSync(filePath, req.file.buffer);
        return res.status(201).json({
            message: "Successful file upload", data: {filePath}
        });
    } catch {
        return res.status(500).json({
            message: "Error occurred while writing the file"
        });
    }
});


app.listen(PORT, () => {
    console.log(`App listening at http://localhost:${PORT}`);
});


