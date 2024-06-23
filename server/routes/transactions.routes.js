const { Router } = require('express');
const router = Router();

const { 
    getTransactions, 
    getTransaction, 
    createTransaction, 
    putTransaction, 
    deleteTransaction } = require('../controllers/transactions.controller');

// Get
router.get('/transactions', getTransactions);

// Get by id
router.get('/transactions/:id', getTransaction);

// Post
router.post('/transactions', createTransaction);

// Update
router.put('/transactions/:id', putTransaction);

// Delete
router.delete('/transactions/:id', deleteTransaction);

module.exports = router;