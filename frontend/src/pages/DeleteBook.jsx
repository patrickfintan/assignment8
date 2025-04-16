import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const DeleteBook = () => {

  const navigate = useNavigate();
  const { id } = useParams();

  const handleDeleteBook = () => {
    //setLoading(true);
    axios
      .delete(`http://localhost:5555/books/${id}`)
      .then(() => {
        //setLoading(false);
        navigate('/');
      })
      .catch((error) => {
        //setLoading(false);
        console.log(error);
      });
  };
  
  return (
    <div>
      <h1 class="container-fluid p-5 bg-primary text-white text-center">Delete Book</h1>
      <div>
        <h3 >Are You Sure You want to delete this Book? This cannot be undone.</h3>
        <h2>{}</h2>

        <button
          type="button" class="btn btn-warning"
          onClick={handleDeleteBook}
        >
          Yes, Delete it
        </button>
      </div>
    </div>
  )
}

export default DeleteBook;