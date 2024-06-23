const inscriptionsCtrl = {}

const inscription = require('../models/inscriptions');

// Get all inscriptions
inscriptionsCtrl.getInscriptions = async (req, res) => {
    const getInscriptions = await inscription.find();
    res.json(getInscriptions);
}

// Get a inscription
inscriptionsCtrl.getInscription = async (req, res) => {
    try{
        const getInscription = await inscription.findById(req.params.id);
        if (!getInscription) {
            return res.status(404).json({ message: 'Inscription not found' });
        }
        res.json(getInscription);
    } catch (error){
        res.status(500).json({ message: 'Error getting inscription', error });
    }
}

// Create a inscription
inscriptionsCtrl.createInscription = async (req, res) => {
    try{
        const { id, students_id, courses_id, status } = req.body;
        const newInscription = new inscription({ id, students_id, courses_id, status });
        await newInscription.save();
        res.status(201).json({ message: 'Inscription created successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error creating inscription', error });
    }
}

// Update a inscription
inscriptionsCtrl.updateInscription = async (req, res) => {
    const { students_id, courses_id, status } = req.body;
    const updtInscription = await inscription.findByIdAndUpdate( req.params.id, { students_id, courses_id, status } , {new : true});
    if (!updtInscription) {
        return res.status(404).json({ message: 'Inscription not found' });
    }
    res.json({message: 'Inscription updated successfully'});
}

// Delete a inscription
inscriptionsCtrl.deleteInscription = async (req, res) => {
    try{
        await inscription.findByIdAndDelete(req.params.id);
        res.json({message: 'Inscription deleted successfully'});
    } catch (error) {
        res.status(500).json({ message: 'Error deleting inscription', error });
    }
}

module.exports = inscriptionsCtrl;