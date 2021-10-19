//GET WRITER
const router = require("express").Router();

router.get("/writer", async (req, res) => {
    try {
        res.status(200).render('homepage',{});

    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;