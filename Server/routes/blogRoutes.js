const express=require("express")
// const Blog= require('../models/blog')
const router = express.Router();
const blogController =require('../controllers/blogController')
//Blog routes

router.get('/', blogController.blog_index
    // (req,res)=>{
    // Blog.find().sort({createdAt: -1}).then((result)=>res.render(
    //     'index',{title:'All Blogs',blogs:result}
    // )).catch((err)=>console.log(err));}
    )

//Post req

router.post('/', blogController.blog_create_post
// (req,res)=>{
// // console.log(req.body);
// const blog= new Blog(req.body)
// blog.save().then((result)=>{
//             res.redirect('/blogs')
//         }).catch((err)=>{
//            console.log(err)
//         })}
        )

//redirects
// app.get('/about-us',(req,res)=>{
//     res.redirect('/about');
// })

router.get('/create', blogController.blog_create_get
    // (req,res)=>{
    // res.render('create',{title:"Create a new Blog"})}
    )

//url:id
//: is imp!!
router.get('/:id',blogController.blog_details
    // (req,res)=>{
    // const id=req.params.id.trim();
    // // console.log(id)
    // Blog.findById(id).then(result =>{
    //     res.render('details', {blog : result, title: 'Blog Details'});
    // }).catch(err =>console.log(err));}
    );

//To handle delete request

router.delete('/:id',blogController.blog_delete
    // (req,res)=>{
    // const id =req.params.id.trim();
    // //We didnt redirected since we have used AJAX so as a response we cannot do that we have to send JSON or text Data
    // Blog.findByIdAndDelete(id)
    // .then(result =>{
    //     res.json({redirect:'/'});
    // })
    // .catch(err =>console.log(err))}
    )

module.exports =router;