const { Router } = require('express');
const router = Router();

const {
    getPaymentMethods,
    getPaymentMethod,
    createPaymentMethod,
    updatePaymentMethod,
    deletePaymentMethod
} = require('../controllers/payment_methods.controller');

// Get
router.get('/payment_methods', getPaymentMethods);

// Get by id
router.get('/payment_methods/:id', getPaymentMethod);

// Post
router.post('/payment_methods', createPaymentMethod);

// Update
router.put('/payment_methods/:id', updatePaymentMethod);

// Delete
router.delete('/payment_methods/:id', deletePaymentMethod);

module.exports = router;
