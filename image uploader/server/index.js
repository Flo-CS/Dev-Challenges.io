const express = require("express");
const multer = require("multer");
const {v4: uuid} = require("uuid");
const fs = require("fs");
const path = require("path");
require("dotenv").config();

const PORT = process.env.PORT;
const IMAGES_FOLDER = path.join(__dirname, "data/images");
const AUTHORIZED_IMAGES_EXTENSIONS = ["JPG", "PNG", "JPEG", "GIF"];

const app = express();
const upload = multer();

app.post("/api/images", upload.single("image"), (req, res) => {
    const imageExtensionSplit = req.file.originalname.split(".");
    const imageExtension = imageExtensionSplit[imageExtensionSplit.length - 1];

    const imageFileName = `${uuid()}.${imageExtension}`;
    const imagePath = path.join(IMAGES_FOLDER, imageFileName);

    if (!AUTHORIZED_IMAGES_EXTENSIONS.includes(imageExtension.toUpperCase())) {
        return res.status(400).json({message: "Bad image extension", imageExtension: imageExtension});
    }

    try {
        fs.writeFileSync(imagePath, req.file.buffer);
        return res.status(201).json({
            message: "Successful image upload", data: {imagePath: imagePath}
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


