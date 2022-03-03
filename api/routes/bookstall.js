const bookstall = require('express').Router();
const booksController = require('../controller/bookstallController')

// Heartbeat route
bookstall.get('/heartbeat',(req,res)=>{
    res.send('Application is live')
})
// Fetch all books
bookstall.get('/books',booksController.getAllBooks);
// Fetch book by id
bookstall.get('/books/:id',booksController.getBookByID);

module.exports = bookstall;