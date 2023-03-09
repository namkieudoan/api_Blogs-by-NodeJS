const categoryController = require("../controllers/categoryController");
const postController = require("../controllers/postController");

const router = require("express").Router();


//UPDATE A POST BY ID
router.put('/:id', postController.updatePost);

//POST POST
router.post('/', postController.addAPost);

//DELETE A PORT BY ID
router.delete('/:id', postController.deletePost);

//GET A POST
router.get('/:id', postController.getAPost);

//GET ALL POST
router.get('/', postController.getAllPost);



module.exports = router;