const express = require("express")
const router = express.Router()



router.post('/pairs', (req, res) => {
    const key = req.params.names
    res.status(200).json({ "ping" : "pong" })
})

router.post('/traditional', (req, res) => {
    const key = req.params.names
    res.status(200).json({ "ping" : "pong" })
})

module.exports = router


