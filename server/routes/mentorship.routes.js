const { Router } = require('express');
const router = Router();

const {
    getMentorships,
    getMentorship,
    createMentorship,
    updateMentorship,
    deleteMentorship
} = require('../controllers/mentorship.controller');

// Get
router.get('/mentorship', getMentorships);

// Get by id
router.get('/mentorship/:id', getMentorship);

// Post
router.post('/mentorship', createMentorship);

// Update
router.put('/mentorship/:id', updateMentorship);

// Delete
router.delete('/mentorship/:id', deleteMentorship);

module.exports = router;