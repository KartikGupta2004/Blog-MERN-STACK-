const http =require('http')
const fs=require('fs')
const _ =require('lodash')
const server= http.createServer((req,res)=>{
    //lodash
    // const num = _.random(0, 20);
    // console.log(num)
    // const greet= _.once(()=>{
    //     console.log('Hello')
    // })
    // greet();
    // greet(); It prints hello only once
    // console.log("Request made")
    //IMP NOTE:  If changes made restart the server
    // console.log(req)
    // console.log(req.url,req.method)

    //Set header content type
    res.setHeader('Content-Type', 'text/html')
    //Writing content whatever we need to sent back to the browser

    // res.write("<h1>Hello Everyone</h1>");
    // res.write("<h1>Hello Everyone, Again!</h1>");
     
    let path = './views/';
    switch (req.url) {
        case '/':
            path+='index.html'
            //Status Code
            res.statusCode =200;
            break;
        case '/about':
            path+='about.html'
            //Status Code
            res.statusCode =200;
            break;
        case '/about-us':
            //Status Code
            res.statusCode =301;
            res.setHeader('Location','/about');
            res.end();
            break;
        default:
            path+='404.html'
            //Status Code
            res.statusCode =404;
            break;
    }

    //Send an html file
    fs.readFile(path,(err,data)=>{
        if(err)
        {
        console.log(err);
        res.end();
        }else{
            // res.write(data) ---Either this or the below one
            // res.end();
            res.end(data);
        }
    })

    //Ending the response to send the content to the browser
    // res.end()
});

server.listen(3000,'localhost',()=>{
    console.log("Listening for requests on port 3000")
})
