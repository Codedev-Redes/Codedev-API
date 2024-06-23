const { Router } = require('express');
const router = Router();

const {
    getMentors,
    getMentor,
    createMentor,
    updateMentor,
    deleteMentor
} = require('../controllers/mentors.controller');

// Get 
router.get('/mentors', getMentors);

// Get by id
router.get('/mentors/:id', getMentor);

// Post
router.post('/mentors', createMentor);

// Update
router.put('/mentors/:id', updateMentor);

// Delete
router.delete('/mentors/:id', deleteMentor);

module.exports = router;