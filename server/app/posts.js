const path = require('path');
const express = require('express');
const multer = require('multer');
const nanoid = require('nanoid');

const fileDb = require('../fileDb');
const config = require('../config');

const storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, config.uploadPath),
    filename: (req, file, cb) => cb(null, nanoid() + path.extname(file.originalname)),
});

const upload = multer({storage});

const router = express.Router();

router.get('/', async (req, res) => {
    const posts = await fileDb.getPosts();
    res.send(posts);
});

router.post('/', upload.single('image'), async (req, res) => {
    const post = req.body;

    if (req.file) {
        post.image = req.file.filename;
    }

    await fileDb.addPost(post);

    res.send(post.id);
});

router.get('/:id', async (req, res) => {
    const post = await fileDb.getPostById(req.params.id);

    if (!post) {
        return res.status(404).send({message: "Post is not found"});
    }

    res.send(post);
});

router.put('/:id', upload.single('image'), async (req, res) => {
    const newPostInfo = req.body;

    let post = await fileDb.getPostById(req.params.id);

    if (!post) {
        return res.status(404).send({message: "Post is not found"});
    }

    post = {...post, ...newPostInfo};

    if (req.file) {
        post.image = req.file.filename;
    }

    await fileDb.editPost(post);

    res.send(post);
});

module.exports = router;