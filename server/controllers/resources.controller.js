const resourcesCtrl = {};

const resource = require('../models/resources');

// Get
resourcesCtrl.getResources = async (req, res) => {
    const resources = await resource.find();
    res.json(resources);
}; 

// Get by id
resourcesCtrl.getResource = async (req, res) => {
    try {
        const getresource = await resource.findById(req.params.id);
        if (!getresource) {
            return res.status(404).json({ message: 'Resource not found' });
        }
        res.json(getresource);
    } catch (error) {
        res.status(500).json({ message: 'Error getting resource', error });
    }
};

// Post
resourcesCtrl.createResource = async (req, res) => {
    try {
        const { id, title, description, content } = req.body;
        const newResource = new resource({ id, title, description, content });
        await newResource.save();
        res.status(201).json({ message: 'Resource created successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error creating resource', error });
    }
};

// Update
resourcesCtrl.updateResource = async (req, res) => {
    try {
        const { title, description, content } = req.body;
        const updtdResource = await resource.findByIdAndUpdate(req.params.id, { title, description, content }, { new: true });
        if (!updtdResource) {
            return res.status(404).json({ message: 'Resource not found' });
        }
        res.json({ message: 'Resource updated successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error updating resource', error });
    }
};

// Delete
resourcesCtrl.deleteResource = async (req, res) => {
    try {
        const deletedResource = await resource.findByIdAndDelete(req.params.id);
        if (!deletedResource) {
            return res.status(404).json({ message: 'Resource not found' });
        }
        res.json({ message: 'Resource deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting resource', error });
    }
};

module.exports = resourcesCtrl;