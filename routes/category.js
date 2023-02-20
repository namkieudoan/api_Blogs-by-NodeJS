const categoryController = require("../controllers/categoryController");
const postController = require("../controllers/postController");

const router = require("express").Router();

//ADD CATEGORY
router.post('/', categoryController.addCategory);

//GET ALL CATEGORY
router.get('/', categoryController.getAllCategorys);

//GET AN CATEGORY BY ID
router.get('/:id', categoryController.getACategory);

//UPDATE CATEGORY BY ID
router.put('/:id',categoryController.updateACategory );

//DELETE CATEGORY BY ID
router.delete('/:id',categoryController.deleteCategory );



module.exports = router;