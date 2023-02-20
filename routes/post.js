const categoryController = require("../controllers/categoryController");
const postController = require("../controllers/postController");

const router = require("express").Router();

//POST POST
router.post('/', postController.addAPost);

//GET ALL POST
router.get('/', postController.getAllPost);

//GET A POST
router.get('/:id', postController.getAPost);

//UPDATE A POST BY ID
router.put('/:id', postController.updatePost);

//DELETE A PORT BY ID
router.delete('/:id', postController.deletePost);



module.exports = router;