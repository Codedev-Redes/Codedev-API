const { Router } = require('express');
const router = Router();

const {
    getComments,
    getComment,
    createComment,
    putComment,
    deleteComment } = require('../controllers/comments.controller');

// Get
router.get('/comments', getComments);

// Get by id
router.get('/comments/:id', getComment);

// Post
router.post('/comments', createComment);

// Update
router.put('/comments/:id', putComment);

// Delete
router.delete('/comments/:id', deleteComment);

module.exports = router;