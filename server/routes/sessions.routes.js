const { Router } = require('express');
const router = Router();

const {
    getSessions,
    getSession,
    getSessionByStudent,
    getSessionByMentorship,
    createSession,
    updateSession,
    deleteSession
} = require('../controllers/sessions.controller');

// Get
router.get('/sessions', getSessions);

// Get by id
router.get('/sessions/:id', getSession);

// Get by students_id
router.get('/sessions/:students_id/students', getSessionByStudent);

// Get by mentorship_id
router.get('/sessions/:mentorship_id/mentorships', getSessionByMentorship);

// Post
router.post('/sessions', createSession);

// Update
router.put('/sessions/:id', updateSession);

// Delete
router.delete('/sessions/:id', deleteSession);

module.exports = router;