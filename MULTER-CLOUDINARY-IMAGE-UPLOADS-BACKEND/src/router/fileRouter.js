const multer = require("multer");
const Router = require("express");
const {upload} = require("../middleware/fileUpload.js");
const { UNEXPECTED_FILE_TYPE } = require("../constants/file.js");
const {fileController} = require("../controllers/fileController.js");
const { imageResize } = require("../middleware/imageResize.js");
const { isFilePresent } = require("../middleware/validators/isFilePresent.js");
const { authenticateJWT } = require("../middleware/authentication.js"); // Fix: Destructure the import

const fileRouter = Router();

fileRouter.post(
    "/upload",
    authenticateJWT,
    (req, res, next) => {
        upload(req, res, (err) => {
            if (err) {
                if (err instanceof multer.MulterError) {
                    if (err.code === UNEXPECTED_FILE_TYPE) {
                        return res.status(400).json({ error: { description: err.field } });
                    }
                }
                return res.status(500).json({ error: { description: err.message } });
            }
            next();
        });
    },
    fileController,
    imageResize,
    isFilePresent
);

module.exports = { fileRouter };