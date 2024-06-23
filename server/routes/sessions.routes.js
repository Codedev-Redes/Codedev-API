const { Router } = require('express');
const router = Router();

const {
    getSessions,
    getSession,
    createSession,
    updateSession,
    deleteSession
} = require('../controllers/sessions.controller');

// Get
router.get('/sessions', getSessions);

// Get by id
router.get('/sessions/:id', getSession);

// Post
router.post('/sessions', createSession);

// Update
router.put('/sessions/:id', updateSession);

// Delete
router.delete('/sessions/:id', deleteSession);

module.exports = router;