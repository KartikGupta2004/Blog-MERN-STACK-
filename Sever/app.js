const express=require("express")
const morgan =require('morgan')
const mongoose =require('mongoose')
// const Blog= require('./models/blog')
const blogRoutes = require('./routes/blogRoutes')
//Express App
const app = express();

//Connect to mongoDB
const dbURI='mongodb+srv://kartikgupta9867:abcd%401234@nodepractise.vbeayuj.mongodb.net/Node_Tut?retryWrites=true&w=majority&appName=NodePractise'

//Using Mongoose to connect to the database
mongoose.connect(dbURI).then((result)=>{
    app.listen(3000);
    // console.log('Connected to DB')
}).catch((err)=> console.log(err));
//{} TO REMOVE DEPRICATION WARNING

//Register view engine
app.set('view engine', 'ejs');
// app.set('views','myviews') Ejs by default checks for views folder. To change this this code is used

//Listen for request
// app.listen(3000);

//Middleware & static files
app.use(express.static('public'));//Anything inside the quotes that folder will be accessible by browser

//Using 3rd Party middleware -MORGAN

app.use(express.urlencoded({extended:true})) //Takes the url encoded data and pass that into an object that we can use on the request object

app.use(morgan('dev'));

//Mongoose and mongo sandbox routes
// app.get('/add-blog',(req,res)=>{
//     const blog =new Blog({
//     title:'New Blog- II',
//     snippet: 'About my new Blog',
//     body: 'More about my new Blog'
//     })
//     // To save we use the instance of the blog
//     blog.save().then((result)=>{
//         res.send(result)
//     }).catch((err)=>{
//        console.log(err)
//     })
// })



// //To retrieve all the blogs from the collection
// //To display all the blogs we use the Blog and not its instance
// app.get('/all-blogs',(req,res)=>{
//     Blog.find().then((result)=> res.send(result)).catch((err)=>console.log(err));
// })

// app.get('/single-blog',(req,res)=>{
//     Blog.findById('65d70a93a1fe11f16b26a5b7').then((result)=> res.send(result)).catch((err)=>console.log(err));
// })

// app.get('/',(req,res)=>{
//     res.send('<h1>Hello Everyone</h1>');
// })

//MIDDLEWARE app.use()
// app.use((req,res,next)=>{
//     console.log('New Request made: ');
//     console.log('Host: ',req.hostname);
//     console.log('Path: ',req.path);
//     console.log('Method: ',req.method);
//     next();
// })

// app.use((req,res,next)=>{
//     console.log('iN THE NEXT MIDDLEWARE: ');
//     next();
// })



//Routes
app.get('/',(req,res)=>{
    // res.send('<h1>Hello Everyone</h1>');
    // res.status(404).sendFile('./views/index.html',{root:__dirname})
    //Since express consider it as absolute path so we use {root}=___dirname
    // const blogs =[
    //     {title:'Leetcode', snippet:'Lorem ipsum dolor sit amet consectetur.'},
    //     {title:'Kartik', snippet:'Lorem ipsum dolor sit amet consectetur.'},
    //     {title:'Gupta', snippet:'Lorem ipsum dolor sit amet consectetur.'}
    // ]
    // res.render('index',{title:"Home", blogs});
    res.redirect('/blogs')
})

app.get('/about',(req,res)=>{
    // res.send('<h1>About Page</h1>');
    // res.status(404).sendFile('./views/about.html',{root:__dirname})

    res.render('about',{title:"About"})
})

app.use('/blogs',blogRoutes);

//404 page
app.use((req,res)=>{
    // res.status(404).sendFile('./views/404.html',{root:__dirname})

    res.status(404).render('404',{title:"404- Not Found"})

})//It should always be placed at bottommost part of code 

//Note that static files like style.css cannot be used using link in gead.ejs
//To allow we need to use middleware to make the file public