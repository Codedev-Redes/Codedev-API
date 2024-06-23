const transactionsCtrl = {}

const transaction = require('../models/transactions');

// Get all transactions
transactionsCtrl.getTransactions = async (req, res) => {
    const getTransactions = await transaction.find();
    res.json(getTransactions);
}

// Get a transaction
transactionsCtrl.getTransaction = async (req, res) => {
    try{
        const getTransaction = await transaction.findById(req.params.id);
        if (!getTransaction) {
            return res.status(404).json({ message: 'Transaction not found' });
        }
        res.json(getTransaction);
    } catch (error){
        res.status(500).json({ message: 'Error getting transaction', error });
    }
}

// Create a transaction
transactionsCtrl.createTransaction = async (req, res) => {
    try{
        const { id, payment_date, inscriptions_students_id, inscriptions_courses_id, payment_methods_id } = req.body;
        const newTransaction = new transaction({ id, payment_date, inscriptions_students_id, inscriptions_courses_id, payment_methods_id });
        await newTransaction.save();
        res.status(201).json({ message: 'Transaction created successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error creating transaction', error });
    }
}

// Update a transaction
transactionsCtrl.putTransaction = async (req, res) => {
    const { payment_date, inscriptions_students_id, inscriptions_courses_id, payment_methods_id } = req.body;
    const updtTransaction = await transaction.findByIdAndUpdate( req.params.id, { payment_date, inscriptions_students_id, inscriptions_courses_id, payment_methods_id } , {new : true});
    if (!updtTransaction) {
        return res.status(404).json({ message: 'Transaction not found' });
    }
    res.json({message: 'Transaction updated successfully'});
}

// Delete a transaction
transactionsCtrl.deleteTransaction = async (req, res) => {
    try{
        await transaction.findByIdAndDelete(req.params.id);
        res.json({message: 'Transaction deleted successfully'});
    } catch (error) {
        res.status(500).json({ message: 'Error deleting transaction', error });
    }
}

module.exports = transactionsCtrl;