const modulesCtrl = {};

const mod = require('../models/modules');

// Get
modulesCtrl.getModules = async (req, res) => {
    const modules = await mod.find();
    res.json(modules);
}

// Get by id
modulesCtrl.getModule = async (req, res) => { 
    try {
        const getmodule = await mod.findById(req.params.id);
        if (!getmodule) {
            return res.status(404).json({ message: 'Module not found' });
        }
        res.json(getmodule);
    } catch (error) {
        res.status(500).json({ message: 'Error getting module', error });
    }
};

// Get by courses_id
modulesCtrl.getModuleByCourse = async (req, res) => {
    try {
        const getmodule = await mod.find({ courses_id: req.params.courses_id });
        if (!getmodule) {
            return res.status(404).json({ message: 'Module not found' });
        }
        res.json(getmodule);
    } catch (error) {
        res.status(500).json({ message: 'Error getting module', error });
    }
};

// Get by resources_id
modulesCtrl.getModuleByResource = async (req, res) => {
    try {
        const getmodule = await mod.find({ resources_id: req.params.resources_id });
        if (!getmodule) {
            return res.status(404).json({ message: 'Module not found' });
        }
        res.json(getmodule);
    } catch (error) {
        res.status(500).json({ message: 'Error getting module', error });
    }
};

// Post
modulesCtrl.createModule = async (req, res) => {
    try {
        const {  id, resources_id, courses_id, title, name, description } = req.body;
        const newModule = new mod({ id, resources_id, courses_id, title, name, description });
        await newModule.save();
        res.status(201).json({ message: 'Module created successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error creating module', error });
    }
};

// Update
modulesCtrl.updateModule = async (req, res) => {
    try {
        const { title, name, description } = req.body;
        const updtdModule = await mod.findByIdAndUpdate(req.params.id, { title, name, description }, { new: true });
        if (!updtdModule) {
            return res.status(404).json({ message: 'Module not found' });
        }
        res.json({ message: 'Module updated successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error updating module', error });
    }
};

// Delete
modulesCtrl.deleteModule = async (req, res) => {
    try {
        const deletedModule = await mod.findByIdAndDelete(req.params.id);
        if (!deletedModule) {
            return res.status(404).json({ message: 'Module not found' });
        }
        res.json({ message: 'Module deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting module', error });
    }
};

module.exports = modulesCtrl;