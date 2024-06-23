const category = require('../models/file');

// Get
categoriesCtrl.renderCategories = async (req, res) => {
    const categories = await category.find();
    res.json(categories);
}

// Get by id
categoriesCtrl.renderCategory = async (req, res) => {
    try {
        const getcategory = await category.findOne({ id: req.params.id });
        if (!getcategory) {
            return res.status(404).json({ message: 'Category not found' });
        }
        res.json(getcategory);
    } catch (error) {
        res.status(500).json({ message: 'Error getting category', error });
    }
}
