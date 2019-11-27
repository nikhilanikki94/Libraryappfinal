const express=require('express');
const booksRouter=express.Router()
function router(nav){


 var books=[
    {
        title:"War and Peace",
        genre:"Historical Fiction",
        author:"Lev Nicolayavich",
        image:"download.jfif"
    },
    {
        title:"Les Miserables",
        genre:"Historical Fiction",
        author:"victor Hugo",
        image:"imagee.jpg"
    },
    {
        title:"Broken Wings",
        genre:"Historical Fiction",
        author:"Sarojoni Naidu",
        image:"book3.jpg"
    }
 ];      

    booksRouter.route('/')
    .get((req,res)=>{
    const id=req.params.id;
    res.render(
        'books',
        {
            nav,
            title:"BOOKS",
            books
        }
     );
    });
    booksRouter.route('/addbooks')
    .get((req,res)=>{
        res.render(

       
        'addBook.ejs',
        {
            nav,
            title:"AddBooks",
            books
        }
    )
    })
    booksRouter.route('/save')
    .post((req,res)=>{
        console.log(req.body);
        console.log(req);
    })
    booksRouter.route('/:id')
    .get((req,res)=>{
    const id =req.params.id;
    res.render(
        'book',
        {
            nav,
            title:"BOOK",
            book:books[id]
        }
    )
})
return booksRouter;
}
module.exports=router;