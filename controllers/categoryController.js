const { Post, Category } = require("../model/model");

const categoryController = {
    //ADD CATEGORY
    addCategory: async (req,res)=>{
        try {
            const newCategory = new Category(req.body);
            const savedCategory =await newCategory.save();
            return res.status(200).json(savedCategory);

        } catch (error) {
            res.status(500).json(`có lỗi : ${error}`)
        }
    },

    //GET ALL CATEGORY
    getAllCategorys: async (req,res)=> {
       try {
            const categorys = await Category.find();
            res.status(200).json(categorys);

       } catch (error) {
            res.status(500).json(`có lỗi : ${error}`)
       }
    },

    //GET A CATEGORY
    getACategory: async (req,res)=> {
       try {
            const category = await Category.findById(req.params.id).populate('posts'); 
            res.status(200).json(category);

       } catch (error) {
        res.status(500).json(error);
       };
    },

    //UPDATE A CATEGORY
    updateACategory: async (req,res)=> {
        try {
            const category = await Category.findById(req.params.id);
            await category.updateOne({$set : req.body});
            res.status(200).json("Updating success");
        } catch (error) {
            res.status(500).json(error);
        }
    },

    //DELETE A CATEGORY
    deleteCategory: async (req,res)=>{
        try {
            await Post.updateMany(
                { category : req.params.id },
                { category: null },
            ),
            await Category.findByIdAndDelete(req.params.id);
            res.status(200).json("Deleted Successfully !!!");

        } catch (error) {
            res.status(500).json(error);
        }
    }

};

module.exports = categoryController;
