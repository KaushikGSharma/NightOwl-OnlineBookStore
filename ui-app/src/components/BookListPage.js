import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { BOOK_LIST_URL } from "../constants";


const BookListPage = () => {

    const [bookList, updateBookList] = useState([]);
    const history = useHistory();

    useEffect(() => {
        async function fetchData() {
            const bookListResponse = await fetch(BOOK_LIST_URL);
            const bookListJsonData = await bookListResponse.json();
            console.log('PRINTING bookListJSONDATA', bookListJsonData);
            updateBookList(bookListJsonData);
        }

        fetchData();
    }, [])


    return <div>
        {bookList.map(book => {
            return <div>
                <p>{"Title: " + book.title}</p>
                <p>{"Author: " + book.author}</p>
                <img src={book.cover} title={book.title} onClick={() => history.push(`/bookdetails/${book.book_id}`)}></img>
            </div>

        })}</div>
};

export default BookListPage;