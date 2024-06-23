const { Router } = require('express');
const router = Router();

const { 
    getInscriptions, 
    getInscription, 
    createInscription, 
    updateInscription, 
    deleteInscription } = require('../controllers/inscriptions.controller');

// Get all inscriptions
router.get('/inscriptions', getInscriptions);

// Get a inscription
router.get('/inscriptions/:id', getInscription);

// Create a inscription
router.post('/inscriptions', createInscription);

// Update a inscription
router.put('/inscriptions/:id', updateInscription);

// Delete a inscription
router.delete('/inscriptions/:id', deleteInscription);

module.exports = router;