//GET WRITER
const router = require("express").Router();

router.get("/writer", async (req, res) => {
    try {
        res.status(200).render('writer',{});

    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;