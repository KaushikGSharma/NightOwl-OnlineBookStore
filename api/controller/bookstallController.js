const db = require('../config/dbconfig')

// Get all Books
const getAllBooks = (request,response)=>{
    db.query('select * from bookstall.books',(err,res)=>{
        if(err){
            response.status(500).json(err);
        }
        response.status(res.statusCode).json(res.data);
    })
}

// Get book by id
const getBookByID = (request,response)=>{
    db.query(
        `select * from bookstall.books where book_id="${request.params.id}"`,(err,res)=>{
            if(err){
                response.status(500).json(err);
            }
            response.status(res.statusCode).json(res.data[0]);
    })
}

module.exports = {
    getAllBooks,
    getBookByID
}