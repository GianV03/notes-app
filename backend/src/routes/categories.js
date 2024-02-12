const { Router } = require('express');
const router = Router();

const { getCategories, createCategory, getCategory, updateCategory, deleteCategory } = require('../controllers/categories.controller');

router.route('/')
    .get(getCategories)
    .post(createCategory);

router.route('/:id')
    .get(getCategory)
    .put(updateCategory)
    .delete(deleteCategory);

module.exports = router;