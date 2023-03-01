const express = require("express")
const { item, cart } = require("../models/items")
const router = express.Router()


router.get("/", (req, res) => {
    item.find().then((result) => {
        cart.count({}, function (err, count) {
            var num = 0
            var num = count.toString(10)
            console.log(num)
            res.render("index", { result, num })

        })
    })
})
router.get("/quickview", (req, res) => {
    id = req.query.id
    item.findById(id).then((result) => {
        res.render("quickView", { result })
    }).catch((err) => console.log(err))
})
module.exports = router