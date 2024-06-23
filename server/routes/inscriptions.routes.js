const { Router } = require('express');
const router = Router();

const { 
    getInscriptions, 
    getInscription, 
    getInscriptionByStudent,
    createInscription,
    updateInscription, 
    deleteInscription } = require('../controllers/inscriptions.controller');

// Get all inscriptions
router.get('/inscriptions', getInscriptions);

// Get a inscription
router.get('/inscriptions/:id', getInscription);

// Get by students_id
router.get('/inscriptions/:students_id/students', getInscriptionByStudent);

// Create a inscription
router.post('/inscriptions', createInscription);

// Update a inscription
router.put('/inscriptions/:id', updateInscription);

// Delete a inscription
router.delete('/inscriptions/:id', deleteInscription);

module.exports = router;