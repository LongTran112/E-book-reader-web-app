const router = require("express").Router();
const Book = require("../models/Book");

//CREATE BOOK
router.post("/", async (req, res) => {
    const newPost = new Book(req.body);
    try {
        const savedPost = await newPost.save();
        res.status(200).json(savedPost);
    } catch (err) {
        res.status(500).json(err);
    }
});

//GET BOOK
router.get("/:id", async (req, res) => {
    try {
        const post = await Book.findById(req.params.id);
        res.status(200).json(post);
    } catch (err) {
        res.status(500).json(err);
    }
});



module.exports = router;