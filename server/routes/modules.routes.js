const { Router } = require('express');
const router = Router();

const {
    getModules,
    getModule,
    getModuleByCourse,
    getModuleByResource,
    createModule,
    updateModule,
    deleteModule } = require('../controllers/modules.controller');

// Get
router.get('/modules', getModules);

// Get by id
router.get('/modules/:id', getModule);

// Get by courses_id
router.get('/modules/:courses_id/courses', getModuleByCourse);

// Get by resources_id
router.get('/modules/:resources_id/resources', getModuleByResource);

// Post
router.post('/modules', createModule);

// Update
router.put('/modules/:id', updateModule);

// Delete
router.delete('/modules/:id', deleteModule);

module.exports = router;