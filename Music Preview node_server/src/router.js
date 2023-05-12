let express = require("express")
let router = express.Router()
let baseRequest = require("./api")

router.get("/getFileList", baseRequest.getFileList)
router.get("/getPreUrl", baseRequest.getPreUrl)
router.get("/download", baseRequest.download)

module.exports = router