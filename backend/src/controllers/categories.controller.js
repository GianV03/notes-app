categoriesCtrl = {};

const Category = require('../models/Category');

categoriesCtrl.getCategories = async (req, res) =>{

    const categories = await Category.find();
    res.json(categories)
    
}

categoriesCtrl.createCategory = async (req, res) =>{

    const newCategory = new Category(req.body);
    await newCategory.save();
    res.json({message : 'The category was saved'});

}

categoriesCtrl.getCategory = async (req, res) =>{

    const category = await Category.findById(req.params.id);
    res.json(category);

}

categoriesCtrl.updateCategory = async (req, res) =>{

    const updatedCategory = await Category.findByIdAndUpdate(req.params.id, req.body);
    res.json({ message : 'The Category was updated'});

}

categoriesCtrl.deleteCategory = async (req, res) =>{
    await Category.findByIdAndDelete(req.params.id);
    res.json({ message : 'The category was deleted' });
}

module.exports = categoriesCtrl;