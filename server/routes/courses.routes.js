const { Router } = require('express');
const router = Router();

const {
    getCourses,
    getCourse,
    getCourseByCategory,
    getCourseByMentor,
    createCourse,
    putCourse,
    deleteCourse } = require('../controllers/courses.controller');

// Get
router.get('/courses', getCourses);

// Get by id
router.get('/courses/:id', getCourse);

// Get by categories_id
router.get('/courses/:categories_id/categories', getCourseByCategory);

// Get by mentors_id
router.get('/courses/:mentors_id/mentors', getCourseByMentor);

// Post
router.post('/courses', createCourse);

// Update
router.put('/courses/:id', putCourse);

// Delete
router.delete('/courses/:id', deleteCourse);

module.exports = router;