const { Router } = require('express');
const router = Router();

const {
    getMentorships,
    getMentorship,
    getMentorshipByMentor,
    createMentorship,
    updateMentorship,
    deleteMentorship
} = require('../controllers/mentorship.controller');

// Get
router.get('/mentorships', getMentorships);

// Get by id
router.get('/mentorships/:id', getMentorship);

// Get by mentor_id
router.get('/mentorships/:mentors_id/mentors', getMentorshipByMentor);

// Post
router.post('/mentorships', createMentorship);

// Update
router.put('/mentorships/:id', updateMentorship);

// Delete
router.delete('/mentorships/:id', deleteMentorship);

module.exports = router;