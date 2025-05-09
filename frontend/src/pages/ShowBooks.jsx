import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


const ShowBooks = () => {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(false);


    useEffect(() => {
        setLoading(true);
        axios.get('http://localhost:5555/books')
        .then((response) => {
          setBooks(response.data);
          setLoading(false);
        })
        .catch((error) => {
          console.log(error);
          setLoading(false);
        });
       }, []);


    return (
        <div>
            <h1 class="container-fluid p-5 bg-primary text-white text-center">Show Books</h1>

            {loading ? (
        <p>Loading...</p>
      ) : (
        <p>Number of Books: {books.length}</p>
      )}
        <div style={{ padding: '10px' }}>
        <table id="show_all_books_table" class="table table-hover">
              <thead>
                  <tr>
                    <th>Title</th>
                    <th>Author</th>
                    <th>Summary</th>
                    <th>Year</th>
                    <th>Update</th>
                    <th>Delete</th>
                  </tr>
              </thead>
              <tbody>
                {
                  books.map((book, index) => (
                    <tr key={book._id}>
                      <td>
                        {book.title}
                      </td>
                      <td>
                        {book.author}
                      </td>
                      <td>
                        {book.summary}
                      </td>
                      <td>
                        {book.year}
                      </td>
                      <td>
                        <Link to={`/books/update/${book._id}`}>
                          Update Book
                        </Link>
                      </td>
                      <td>
                      <Link to={`/books/delete/${book._id}`}>
                          Delete Book
                        </Link>
                      </td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
            </div>
        </div>

        
        
    );
};

export default ShowBooks;