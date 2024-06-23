const { Router } = require('express');
const router = Router();

const {
    getCourses,
    getCourse,
    createCourse,
    putCourse,
    deleteCourse } = require('../controllers/courses.controller');

// Get
router.get('/courses', getCourses);

// Get by id
router.get('/courses/:id', getCourse);

// Post
router.post('/courses', createCourse);

// Update
router.put('/courses/:id', putCourse);

// Delete
router.delete('/courses/:id', deleteCourse);

module.exports = router;