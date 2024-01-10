import PostModel from "../Models/postModel.js";
import mongoose from "mongoose";

//create a new post
export const createPost = async (req, res) => {
    const newPost = new PostModel(req.body)

    try{
        await newPost.save();
        res.status(200).json("Post created!");
    }catch(error){
     res.status(500).json(error);
    }
};