const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")
const router = require("./router")
let app = express()

// 配置跨域，必须在路由之前
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(router)

app.listen(3334, () => {
  console.log("cos服务器")
})
