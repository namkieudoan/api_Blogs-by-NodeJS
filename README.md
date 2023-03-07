---
title: ExpressJS API
description: An ExpressJS server that connects to a MongoDB database to build RESRFull API for client
tags:
  - express
  - mongodb
  - mongoose
  - javascript
  - axios
---

# ExpressJS API Example

This is learning outcomes [ExpressJS](https://toidicodedao.vercel.app/)

[Deploy on Render](https://render.com)

## ✨ Features
- Morgan logs the requests
- Helmet setting various HTTP headers
- MongoDB with Mongoose
- Cors can specify response headers

## 💁‍♀️ How to use

- Clone code  and run command "npm install all"
- Create .env file, replace environment variables(include url-mongo)
- Connect to github and connect with render
---> Perfect ^^

## 📝 Notes

The starter contains `Post` models and  `Category` model  that you can read and write to.

There are two main routes on the server: 

- Route - `v1/post` returns all posts
- Route - `v1/post` which can be used to add a new post
- Route - `v1/post/:id` which can be used to delete a post
- Route - `v1/post/:id` which can be used to update a post

- Route - `v1/category` returns all categories
- Route - `v1/category` which can be used to add a new category
- Route - `v1/category/:id` which can be used to delete a category
- Route - `v1/category/:id` which can be used to update a category

Example post request to add a new post using axios:
data include: title, content,images

```
    const [postList, setPostList] = useState([]);
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [images, setImages] = useState("");

//func was actived when onclick submit btn
    const handleSubmit = () => {
        PostApi(title,content,images);
    }
    
    const PostApi = async (title, content,images) => {
        let res = await axios.post(`${process.env.REACT_APP_API_ENDPOINT}/v1/post`, {
            title: title,
            content : content,
            images : images
        });
        setPostList([res.data, ...postList]);        
    }
http://localhost:3000/v1/post
```