const sessionsCtrl = {};

const session = require('../models/sessions');

// Get
sessionsCtrl.getSessions = async (req, res) => {
    const sessions = await session.find();
    res.json(sessions);
};

// Get by id
sessionsCtrl.getSession = async (req, res) => {
    try {
        const getsession = await session.findById(req.params.id);
        if (!getsession) {
            return res.status(404).json({ message: 'Session not found' });
        }
        res.json(getsession);
    } catch (error) {
        res.status(500).json({ message: 'Error getting session', error });
    }
};

// Post
sessionsCtrl.createSession = async (req, res) => {
    try {
        const { id, students_id, mentorship_id, url } = req.body;
        const newSession = new session({ id, students_id, mentorship_id, url });
        await newSession.save();
        res.status(201).json({ message: 'Session created successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error creating session', error });
    }
};

// Update
sessionsCtrl.updateSession = async (req, res) => {
    try {
        const { students_id, mentorship_id, url } = req.body;
        const updtdSession = await session.findByIdAndUpdate(req.params.id, { students_id, mentorship_id, url }, { new: true });
        if (!updtdSession) {
            return res.status(404).json({ message: 'Session not found' });
        }
        res.json({ message: 'Session updated successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error updating session', error });
    }
};

// Delete
sessionsCtrl.deleteSession = async (req, res) => {
    try {
        const deletedSession = await session.findByIdAndDelete(req.params.id);
        if (!deletedSession) {
            return res.status(404).json({ message: 'Session not found' });
        }
        res.json({ message: 'Session deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting session', error });
    }
};

module.exports = sessionsCtrl;