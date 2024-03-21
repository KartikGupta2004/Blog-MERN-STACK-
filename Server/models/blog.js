const mongoose= require("mongoose")
const Schema=mongoose.Schema; 
//sCHEMA is the thing that defines the structure that we are going to store inside a collection. And the model is the thing that provides us an interface by which we can communicate with the database . Here ".Schema" is a constructor

const blogSchema=new Schema({
    title: {
        type: String, 
        required:true
    },
    snippet: {
        type: String, 
        required:true
    },
    body: {
        type: String, 
        required:true
    }
},{ timestamps: true});

const Blog = mongoose.model('Blog', blogSchema)
//'It is imp since it will look at this name and its going to pluralize this and then look for that collection in the database whenever we use the model in the future to communicate with the database'
//2nd arg is schema which we made
module.exports =Blog;