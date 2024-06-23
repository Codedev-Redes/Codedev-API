const payment_methodsCtrl = {}

const paymentMethod = require('../models/payment_methods');

// Get all payment methods
payment_methodsCtrl.getPaymentMethods = async (req, res) => {
    const payment_methods = await paymentMethod.find();
    res.json(payment_methods);
}

// Get a payment method
payment_methodsCtrl.getPaymentMethod = async (req, res) => {
    try{
        const getPaymentMethod = await paymentMethod.findById(req.params.id);
        if (!getPaymentMethod) {
            return res.status(404).json({ message: 'Payment method not found' });
        }
        res.json(getPaymentMethod);
    } catch (error) {
        res.status(500).json({ message: 'Error getting payment method', error });
    }
}

// Create a payment method
payment_methodsCtrl.createPaymentMethod = async (req, res) => {
    try {
        const { id, name, active } = req.body;
        const newPaymentMethod = new paymentMethod({ id, name, active });
        await newPaymentMethod.save();
        res.status(201).json({ message: 'Payment method created successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error creating payment method', error });
    }
}

// Update a payment method
payment_methodsCtrl.updatePaymentMethod = async (req, res) => {
    try {
        const { name, active } = req.body;
        const updtdPaymentMethod = await paymentMethod.findByIdAndUpdate(req.params.id, { name, active }, { new: true });
        if (!updtdPaymentMethod) {
            return res.status(404).json({ message: 'Payment method not found' });
        }
        res.json({ message: 'Payment method updated successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error updating payment method', error });
    }
}

// Delete a payment method
payment_methodsCtrl.deletePaymentMethod = async (req, res) => {
    try {
        const deletedPaymentMethod = await paymentMethod.findByIdAndDelete(req.params.id);
        if (!deletedPaymentMethod) {
            return res.status(404).json({ message: 'Payment method not found' });
        }
        res.json({ message: 'Payment method deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting payment method', error });
    }
}

module.exports = payment_methodsCtrl;