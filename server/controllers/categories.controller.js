const categoriesCtrl = {}

const category = require('../models/category');

// Get
categoriesCtrl.getCategories = async (req, res) => {
    const categories = await category.find();
    res.json(categories);
}

// Get by id
categoriesCtrl.getCategory = async (req, res) => {
    try{
        const getcategory = await category.findById(req.params.id);
        if (!getcategory) {
            return res.status(404).json({ message: 'Category not found' });
        }
        res.json(getcategory);
    } catch (error) {
        res.status(500).json({ message: 'Error getting category', error });
    }
}


// Post
categoriesCtrl.createCategory = async (req, res) => {
    try{
        const { id, name } = req.body;
        const newCategory = new category({ id, name});
        await newCategory.save(); 
        res.status(201).json({ message: 'Category created successfully'});
    } catch (error) {
        res.status(500).json({ message: 'Error creating category', error });
    }
}

// Update
categoriesCtrl.putCategory = async (req, res) => {
    try{
        const { name } = req.body;
        const updtcategory = await category.findByIdAndUpdate( req.params.id , { name } , {new : true});
        if (!updtcategory) {
            return res.status(404).json({ message: 'Category not found' });
        }
        res.json({message: 'Category updated successfully'});
    } catch (error) {
        res.status(500).json({ message: 'Error updating category', error });
    }
}
// Delete
categoriesCtrl.deleteCategory = async (req, res) => {
    try{
        const dltCategory = await category.findByIdAndDelete(req.params.id);
        if (!dltCategory) {
            return res.status(404).json({ message: 'Category not found' });
        }
        res.json({message: 'Category deleted successfully'});
    } catch (error) {
        res.status(500).json({ message: 'Error deleting category', error });
    }
}

module.exports = categoriesCtrl;