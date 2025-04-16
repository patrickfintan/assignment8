import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const UpdateBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [summary, setSummary] = useState('');
  const [year, setYear] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const {id} = useParams();


  useEffect(() => {
    setLoading(true);
    axios.get(`http://localhost:5555/books/${id}`)
    .then((response) => {
        setTitle(response.data.title)
        setAuthor(response.data.author);
        setSummary(response.data.summary);
        setYear(response.data.year);
        setLoading(false)
      }).catch((error) => {
        setLoading(false);
        alert('An error occured');
        console.log(error);
      });
  }, [])

  

  const handleEditBook = () => {
    const data = {
        title,
        author,
        summary,
        year
    };
    setLoading(true);
    axios
      .put(`http://localhost:5555/books/${id}`, data)
      .then(() => {
        setLoading(false);
        navigate('/');
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
  };

  return (
    <>
    <div>
        <h1 class="container-fluid p-5 bg-primary text-white text-center">Update Book</h1>
        <div style={{ padding: '10px' }}>
        <div>
          <label>Title: </label>
          <input
            type='text'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label>Author: </label>
          <input
            type='text'
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>
        <div>
        <label>Summary: </label>
          <textarea
            value={summary}
            onChange={(e) => setSummary(e.target.value)}
            rows={5}
            style={{
              width: '100%',
              resize: 'both',
              minHeight: '100px'
            }}
          />
          </div>
        <div>
          <label>Year: </label>
          <input
            type='number'
            value={year}
            onChange={(e) => setYear(e.target.value)}
          />
        </div>
        {/* Conditional Rendering to ensure that book cannot sumbit a book unless all mandatory fields are filled */}
        {/* Note: routes in backend also ensure you are sending the required fields */}
        {
        title !="" &&
        author !="" &&
        summary !="" &&
        year != ""
        ? (
        <div>
        <button onClick={handleEditBook}>
          Edit
        </button>
        </div>
        ) : (
          <p>Please fill all mandatory fields before sumbiting</p>
        )
        }
      </div>
    </div>
    </>
  )
}

export default UpdateBook;