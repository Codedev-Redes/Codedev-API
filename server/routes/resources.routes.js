const { Router } = require('express');
const router = Router();

const { 
    getResources, 
    getResource, 
    createResource, 
    updateResource, 
    deleteResource } = require('../controllers/resources.controller');

// Get
router.get('/resources', getResources);

// Get by id
router.get('/resources/:id', getResource);

// Post
router.post('/resources', createResource);

// Update
router.put('/resources/:id', updateResource);

// Delete
router.delete('/resources/:id', deleteResource);

module.exports = router;