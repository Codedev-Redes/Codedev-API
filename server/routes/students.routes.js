const { Router } = require('express');
const router = Router();

const {
    getStudents,
    getStudent,
    createStudent,
    putStudent,
    deleteStudent } = require('../controllers/students.controller');

// Get
router.get('/students', getStudents);

// Get by id
router.get('/students/:id', getStudent);

// Post
router.post('/students', createStudent);

// Update
router.put('/students/:id', putStudent);

// Delete
router.delete('/students/:id', deleteStudent);

module.exports = router;