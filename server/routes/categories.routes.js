const { Router } = require('express');
const router = Router();

const { 
    getCategories, 
    getCategory,
    createCategory, 
    putCategory, 
    deleteCategory } = require('../controllers/categories.controller');

// Get
router.get('/categories', getCategories);

// Get by id
router.get('/categories/:id', getCategory);

// Post
router.post('/categories', createCategory);

// Update
router.put('/categories/:id', putCategory);

// Delete
router.delete('/categories/:id', deleteCategory);

module.exports = router;