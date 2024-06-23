const { Router } = require('express');
const router = Router();

const {
    getComments,
    getComment,
    getCommentByStudent,
    getCommentByCourse,
    createComment,
    putComment,
    deleteComment } = require('../controllers/comments.controller');

// Get
router.get('/comments', getComments);

// Get by id
router.get('/comments/:id', getComment);

// Get by students_id
router.get('/comments/:students_id/students', getCommentByStudent);

// Get by courses_id
router.get('/comments/:courses_id/courses', getCommentByCourse);

// Post
router.post('/comments', createComment);

// Update
router.put('/comments/:id', putComment);

// Delete
router.delete('/comments/:id', deleteComment);

module.exports = router;