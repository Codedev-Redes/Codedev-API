const { Router } = require('express');
const router = Router();

const {
    getModules,
    getModule,
    createModule,
    updateModule,
    deleteModule } = require('../controllers/modules.controller');

// Get
router.get('/modules', getModules);

// Get by id
router.get('/modules/:id', getModule);

// Post
router.post('/modules', createModule);

// Update
router.put('/modules/:id', updateModule);

// Delete
router.delete('/modules/:id', deleteModule);

module.exports = router;