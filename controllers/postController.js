const { Post, Category } = require("../model/model");

const postController = {
    //ADD A POST
    addAPost: async(req,res)=>{
        try {
            const newPost = new Post (req.body);
            const savedPost = await newPost.save();

            //lưu id post vào category nếu input của post nhập vào có nhập id category
            if(req.body.category){
                const category = Category.findById(req.body.category);
                await category.updateOne({ $push: { posts: savedPost._id }});

            };
            res.status(200).json(savedPost);
        } catch (error) {
            res.send(500).json(error)
        };
    },

    //GET ALL POST
    getAllPost: async(req,res)=>{
        try {
            const getAllPost = await Post.find();
            res.status(200).json(getAllPost);
            
        } catch (error) {
            res.status(500).json(error);
        }
    },

    //GET A POST
    getAPost: async (req,res)=>{
        try {
            const post = await Post.findById(req.params.id);
            res.status(200).json(post);
        } catch (error) {
            res.status(500).json(error);
        }
    },

    //UPDATE POST
    updatePost: async (req,res)=>{
        try {
            const post = await Post.findById(req.params.id);
            await post.updateOne({ $set : req.body });
            res.status(200).json("Updated Successfully !!!");
        } catch (error) {
            res.status(500).json(error);
        };
    },

    //DELETE POST
    deletePost: async (req,res)=>{
        try {
            await Category.updateMany(
                { posts: req.params.id },
                { $pull: {posts: req.params.id}});
            await Post.findByIdAndDelete(req.params.id);
            res.status(200).json("Deleted Successfully !")
            
        } catch (error) {
            res.status(500).json(error);
        }
    }

}

module.exports = postController;