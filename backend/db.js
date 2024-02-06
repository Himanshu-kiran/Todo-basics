 const mongoose=require("mongoose"); 
 //mongoose url
 //mongodb+srv://himanshukiran:Kk%4012345@cluster0.z4vkef8.mongodb.net/
mongoose.connect("mongodb+srv://himanshukiran:Kk%4012345@cluster0.z4vkef8.mongodb.net/");

 const todoSchema=mongoose.Schema({
     title:String,
     description:String,
     completed:Boolean 
 })

 const todo=mongoose.model('todos',todoSchema);
 module.exports={
    todo:todo
    //if key and value are same
   // todo
 }