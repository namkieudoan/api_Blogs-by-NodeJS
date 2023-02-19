const categoryController = require("../controllers/categoryController");
const postController = require("../controllers/postController");

const router = require("express").Router();

//ADD CATEGORY
router.post('/', categoryController.addCategory);

//GET ALL CATEGORY
router.get('/', categoryController.getAllCategorys);

//GET AN CATEGORY BY ID
router.get('/:slug', categoryController.getACategory);

//UPDATE CATEGORY BY ID
router.put('/:slug',categoryController.updateACategory );

//DELETE CATEGORY BY ID
router.delete('/:slug',categoryController.deleteCategory );



module.exports = router;