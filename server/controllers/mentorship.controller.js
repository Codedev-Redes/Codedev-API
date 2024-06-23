const mentorshipCtrl = {};

const mentorship = require('../models/mentorship');

// Get all mentorships
mentorshipCtrl.getMentorships = async (req, res) => {
    const getMentorship = await mentorship.find();
    res.json(getMentorship);
}

// Get a mentorship by id
mentorshipCtrl.getMentorship = async (req, res) => {
    try{
        const getMentorship = await mentorship.findById(req.params.id);
        res.json(getMentorship);
    } catch (error){
        res.json({message: error});
    }
}

// Create a mentorship
mentorshipCtrl.createMentorship = async (req, res) => {
    try{
        const { id, mentors_id, topic, type, start_date, end_date } = req.body;
        const newMentorship = new mentorship({ id, mentors_id, topic, type, start_date, end_date });
        if (!newMentorship){
            return res.status(400).json({message: 'Error saving mentorship'});
        }
        await newMentorship.save();
        res.json({message: 'Mentorship saved'});
    } catch (error){
        res.json({message: error});
    }
}

// Update a mentorship
mentorshipCtrl.updateMentorship = async (req, res) => {
    try{
        const { mentors_id, topic, type, start_date, end_date } = req.body;
        const updtMentorship = await mentorship.findByIdAndUpdate(req.params.id, { mentors_id, topic, type, start_date, end_date });
        if (!updtMentorship){
            return res.status(400).json({message: 'Error updating mentorship'});
        }
        res.json({message: 'Mentorship updated'});
    } catch (error){
        res.json({message: error});
    }
}

// Delete a mentorship
mentorshipCtrl.deleteMentorship = async (req, res) => {
    try{
        await mentorship.findByIdAndDelete(req.params.id);
        res.json({message: 'Mentorship deleted'});
    } catch (error){
        res.json({message: error});
    }
}

module.exports = mentorshipCtrl;