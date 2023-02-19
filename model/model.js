const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        require:true,
    },
    posts: [
        {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post",
        },
    ],
    
});

const postSchema = new mongoose.Schema({

    title: {
        type: String,
        require:true,
    },

    content: {
        type: String,
        require:true,
    },

    images: {
      type: [String],  
    },
    
    tags: {
        type: [String],
    },

    publishedDate: {
        type: String,
    },
    
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
    },
    
});

let Post = mongoose.model("Post", postSchema);
let Category = mongoose.model("Category", categorySchema);

module.exports ={ Post , Category};