const mentorsCtrl = {};

const mentor = require('../models/mentors');

// Get all mentors
mentorsCtrl.getMentors = async (req, res) => {
    const mentors = await mentor.find();
    res.json(mentors);
}

// Get a mentor by id
mentorsCtrl.getMentor = async (req, res) => {
    try{
        const mentors = await mentor.findById(req.params.id);
        res.json(mentors);
    } catch (error){
        res.json({message: error});
    }
}

// Create a mentor
mentorsCtrl.createMentor = async (req, res) => {
    try{
        const { id, name, last_name, email, speciality, modality, price } = req.body;
        const newMentor = new mentor({ id, name, last_name, email, speciality, modality, price });
        if (!newMentor){
            return res.status(400).json({message: 'Error saving mentor'});
        }
        await newMentor.save();
        res.json({message: 'Mentor saved'});
    } catch (error){
        res.json({message: error});
    }
}

// Update a mentor
mentorsCtrl.updateMentor = async (req, res) => {
    try{
        const { name, last_name, email, speciality, modality, price } = req.body;
        const updtMentor = await mentor.findByIdAndUpdate(req.params.id, { name, last_name, email, speciality, modality, price });
        if (!updtMentor){
            return res.status(400).json({message: 'Error updating mentor'});
        }
        res.json({message: 'Mentor updated'});
    } catch (error){
        res.json({message: error});
    }
}

// Delete a mentor
mentorsCtrl.deleteMentor = async (req, res) => {
    try{
        await mentor.findByIdAndDelete(req.params.id);
        res.json({message: 'Mentor deleted'});
    } catch (error){
        res.json({message: error});
    }
}

module.exports = mentorsCtrl;